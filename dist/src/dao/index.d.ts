import { SearchCriteriaFilter, Task } from '@grupakmk/libstorefront';
export declare class StoreCreditDao {
    private taskQueue;
    getStoreCredit({ customerId, pageSize, currentPage, sortBy, sortDir }: {
        customerId: string;
    } & SearchCriteriaFilter, token: string, storeCode: string): Promise<Task>;
    getSingleStoreCredit(storeCreditId: any, token: string): Promise<Task>;
    constructor(taskQueue: any);
}
