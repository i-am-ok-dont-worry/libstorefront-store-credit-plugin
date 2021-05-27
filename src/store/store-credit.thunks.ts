import {
    AbstractStore,
    CartService,
    HttpStatus,
    IOCContainer,
    Logger,
    SearchCriteriaFilter,
    StoreViewHandler,
    TaxCalculateType
} from '@grupakmk/libstorefront';
import { StoreCreditDao } from '../dao';
import { StoreCreditActions } from './store-credit.actions';

export namespace StoreCreditThunks {
    export const getStoreCredits = (filter: SearchCriteriaFilter) => async (dispatch, getState) => {
        try {
            const customer = IOCContainer.get(AbstractStore).getState().user;
            const storeCode = StoreViewHandler.currentStoreView().general.store_code;

            if (!customer || !customer.current) { throw new Error('Cannot fetch store credits for unauthorized user'); }
            const customerId = customer.current.id;
            const response = await IOCContainer.get(StoreCreditDao).getStoreCredit({ customerId, ...filter }, storeCode);

            if (response && response.code === HttpStatus.OK) {
                const { items } = response.result;
                const credit = items instanceof Array ? items[0] : items;
                await dispatch(StoreCreditActions.setStoreCredit(credit));

                return credit;
            } else {
                throw new Error('Not found');
            }

        } catch (e) {
            Logger.info('Cannot fetch store credits: ', 'STORE-CREDIT-PLUGIN', e.message);
            throw e;
        }
    };

    export const getSingleStoreCredit = (storeCreditId: string) => async (dispatch, getState) => {
        try {
            const customer = IOCContainer.get(AbstractStore).getState().user;

            if (!customer || !customer.current) { throw new Error('Cannot fetch store credits for unauthorized user'); }
            const response = await IOCContainer.get(StoreCreditDao).getSingleStoreCredit(storeCreditId);

            if (response && response.code === HttpStatus.OK) {
                const credit = response.result;
                await dispatch(StoreCreditActions.setStoreCredit(credit));

                return credit;
            } else {
                throw new Error('Not found');
            }

        } catch (e) {
            Logger.info('Cannot fetch store credits: ', 'STORE-CREDIT-PLUGIN', e.message);
            throw e;
        }
    };

    export const applyStoreCredit = (amount: number) => async (dispatch, getState) => {
        try {
            const customer = IOCContainer.get(AbstractStore).getState().user;
            const cart = IOCContainer.get(AbstractStore).getState().cart;
            const cartId = cart.cartServerToken;
            if (!cartId) { throw new Error('Cannot apply credit for undefined cart'); }
            if (!customer || !customer.current) { throw new Error('Cannot apply credit for unauthorized user'); }

            const response = await IOCContainer.get(StoreCreditDao).applyCredit(amount, cartId);

            if (response && response.code === HttpStatus.OK) {
                await StoreCreditThunks.getStoreCredits({});
                return response.result;
            } else {
                throw new Error('Not found');
            }
        } catch (e) {
            Logger.info('Cannot apply store credit: ', 'STORE-CREDIT-PLUGIN', e.message);
            throw e;
        }
    };

    export const cancelStoreCredit = () => async (dispatch, getState) => {
        try {
            const customer = IOCContainer.get(AbstractStore).getState().user;
            const cart = IOCContainer.get(AbstractStore).getState().cart;
            const cartId = cart.cartServerToken;
            if (!customer || !customer.current) { throw new Error('Cannot apply credit for unauthorized user'); }

            const response = await IOCContainer.get(StoreCreditDao).cancelCredit(cartId);

            if (response && response.code === HttpStatus.OK) {
                await StoreCreditThunks.getStoreCredits({});
                return response.result;
            } else {
                throw new Error('Not found');
            }
        } catch (e) {
            Logger.info('Cannot apply store credit: ', 'STORE-CREDIT-PLUGIN', e.message);
            throw e;
        }
    };

    export const getMyStoreCredit = () => async (dispatch, getState) => {
        try {
            const customer = IOCContainer.get(AbstractStore).getState().user;
            const storeCode = StoreViewHandler.currentStoreView().general.store_code;
            if (!customer || !customer.current) { throw new Error('Cannot apply credit for unauthorized user'); }

            const response = await IOCContainer.get(StoreCreditDao).getMyStoreCredit(storeCode);

            if (response && response.code === HttpStatus.OK) {
                const storeCreditDetails = await dispatch(getSingleStoreCredit(response.result.store_credit_id));
                if (storeCreditDetails) {
                    return storeCreditDetails;
                }

                return response.result;
            } else {
                throw new Error('Not found');
            }
        } catch (e) {
            Logger.info('Cannot apply store credit: ', 'STORE-CREDIT-PLUGIN', e.message);
            throw e;
        }
    };

    export const reapplyCredit = () => async (dispatch, getState) => {
        if (!getState().user.token || getState().user.token === '') { return; }

        const creditSegment = getState().cart.platformTotalSegments.find((segment) => segment.code === 'amstorecredit');
        const taxConfiguration = StoreViewHandler.currentStoreView().tax;
        const pricesIncludingTax = taxConfiguration.pricesIncludingTax === TaxCalculateType.INCLUDING_TAX;

        if (creditSegment && creditSegment.value < 0) {
            const { subtotal_incl_tax, subtotal_with_discount, tax_amount, coupon_code, shipping_amount, base_grand_total } = await IOCContainer.get(CartService).syncTotals();

            if (subtotal_incl_tax) {
                const value = !pricesIncludingTax && subtotal_with_discount && coupon_code ? Math.abs(subtotal_with_discount + (tax_amount || 0) + (shipping_amount || 0)) : Math.abs(base_grand_total);
                await dispatch(applyStoreCredit(value));
                await IOCContainer.get(CartService).syncTotals();
            }
        }
    };
}
