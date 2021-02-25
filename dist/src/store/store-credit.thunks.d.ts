import { SearchCriteriaFilter } from '@grupakmk/libstorefront';
export declare namespace StoreCreditThunks {
    const getStoreCredits: (filter: SearchCriteriaFilter) => (dispatch: any, getState: any) => Promise<any>;
    const getSingleStoreCredit: (storeCreditId: string) => (dispatch: any, getState: any) => Promise<any>;
    const applyStoreCredit: (amount: number) => (dispatch: any, getState: any) => Promise<any>;
    const cancelStoreCredit: () => (dispatch: any, getState: any) => Promise<any>;
    const getMyStoreCredit: () => (dispatch: any, getState: any) => Promise<any>;
    const reapplyCredit: () => (dispatch: any, getState: any) => Promise<void>;
}
