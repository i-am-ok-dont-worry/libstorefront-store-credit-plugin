import { SearchCriteriaFilter } from '@grupakmk/libstorefront';
export declare namespace StoreCreditThunks {
    const getStoreCredits: (filter: SearchCriteriaFilter) => (dispatch: any, getState: any) => Promise<any>;
    const getSingleStoreCredit: (storeCreditId: string) => (dispatch: any, getState: any) => Promise<any>;
}