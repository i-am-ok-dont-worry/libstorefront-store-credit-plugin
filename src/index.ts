import {createLibstorefrontModule, HookType, LibStorefront} from '@grupakmk/libstorefront';
import {LibstorefrontPlugin} from '@grupakmk/libstorefront/dist/config/types/libstorefront-plugin';
import {StoreCreditDao} from './dao';
import {StoreCreditService} from './service';
import {storeCreditReducer} from './store/store-credit.reducer';
import {StoreCreditDefaultState} from './store/store-credit.default';
import get from 'lodash/get';

/**
 * Provides registered customers with a flexible credit system.
 * Lets customers spend their credit balance on product purchase.
 */
export const StoreCreditPlugin = ((libstorefront: LibStorefront) => {
    const onCreditReset = async () => {
        const state = libstorefront.getState();
        if (!state.user.token || state.user.token === '') { return; }

        const service = libstorefront.get<StoreCreditService>(StoreCreditService);
        const creditSegment = state.cart.platformTotalSegments.find((segment) => segment.code === 'amstorecredit');

        if (creditSegment && creditSegment.value < 0) {
            const { subtotal_incl_tax, subtotal_with_discount, tax_amount, coupon_code, shipping_amount, base_grand_total } = await libstorefront.CartService.syncTotals();

            if (base_grand_total > get(state, 'storeCredit.current.store_credit', base_grand_total)) {
                await service.cancelCredit();
                return;
            }

            if (subtotal_incl_tax) {
                const value = subtotal_with_discount && coupon_code ? Math.abs(subtotal_with_discount + (tax_amount || 0) + (shipping_amount || 0)) : Math.abs(subtotal_incl_tax);
                await service.applyCredit(value);
                await libstorefront.CartService.syncTotals();
            }
        }
    };

    libstorefront.getIOCContainer().bind<StoreCreditDao>(StoreCreditDao).to(StoreCreditDao);
    libstorefront.getIOCContainer().bind<StoreCreditService>(StoreCreditService).to(StoreCreditService);
    libstorefront.listenTo(HookType.AfterCoreModulesRegistered, (lsf: LibStorefront) => {
        lsf.registerModule(createLibstorefrontModule('storeCredit', storeCreditReducer, StoreCreditDefaultState));
        libstorefront = lsf;
    });

    libstorefront.listenTo(HookType.AfterCouponApplied, () => onCreditReset());
    libstorefront.listenTo(HookType.AfterCouponRemoved, () => onCreditReset());
    libstorefront.listenTo(HookType.AfterShippingMethodSelected, () => onCreditReset());
}) as LibstorefrontPlugin;
