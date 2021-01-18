import {
    AbstractStore,
    HttpStatus,
    IOCContainer,
    Logger,
    SearchCriteriaFilter,
    StoreViewHandler
} from '@grupakmk/libstorefront';
import { StoreCreditDao } from '../dao';
import { StoreCreditActions } from './store-credit.actions';

export namespace StoreCreditThunks {
    export const getStoreCredits = (filter: SearchCriteriaFilter) => async (dispatch, getState) => {
        try {
            const customer = IOCContainer.get(AbstractStore).getState().user;
            const token = customer.token;
            const storeCode = StoreViewHandler.currentStoreView().general.store_code;

            if (!customer || !token || !customer.current) { throw new Error('Cannot fetch store credits for unauthorized user'); }
            const customerId = customer.current.id;
            const response = await IOCContainer.get(StoreCreditDao).getStoreCredit({ customerId, ...filter }, token, storeCode);

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
        }
    };

    export const getSingleStoreCredit = (storeCreditId: string) => async (dispatch, getState) => {
        try {
            const customer = IOCContainer.get(AbstractStore).getState().user;
            const token = customer.token;

            if (!customer || !token || !customer.current) { throw new Error('Cannot fetch store credits for unauthorized user'); }
            const response = await IOCContainer.get(StoreCreditDao).getSingleStoreCredit(storeCreditId, token);

            if (response && response.code === HttpStatus.OK) {
                const credit = response.result;
                await dispatch(StoreCreditActions.setStoreCredit(credit));

                return credit;
            } else {
                throw new Error('Not found');
            }

        } catch (e) {
            Logger.info('Cannot fetch store credits: ', 'STORE-CREDIT-PLUGIN', e.message);
        }
    }
}
