import { StoreCredit } from '../types';
export declare namespace StoreCreditActions {
    const SN_STORE_CREDIT = "store-credit";
    const SET_STORE_CREDIT: string;
    const setStoreCredit: (storeCredit: StoreCredit) => {
        type: string;
        payload: StoreCredit;
    };
}
