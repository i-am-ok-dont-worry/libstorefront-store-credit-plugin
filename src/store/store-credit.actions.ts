import { StoreCredit } from '../types';

export namespace StoreCreditActions {
    export const SN_STORE_CREDIT = 'store-credit';

    export const SET_STORE_CREDIT = SN_STORE_CREDIT + '/SET_CREDIT';
    export const setStoreCredit = (storeCredit: StoreCredit) => ({
        type: SET_STORE_CREDIT,
        payload: storeCredit
    });
}
