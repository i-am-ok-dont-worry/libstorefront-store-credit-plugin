import { SearchCriteriaFilter, Task } from '@grupakmk/libstorefront';
export declare class StoreCreditDao {
    private taskQueue;
    getStoreCredit({ customerId, pageSize, currentPage, sortBy, sortDir }: {
        customerId: string;
    } & SearchCriteriaFilter, storeCode: string): Promise<Task>;
    getSingleStoreCredit(storeCreditId: any): Promise<Task>;
    applyCredit(amount: number, cartId: any): Promise<Task>;
    cancelCredit(cartId: any): Promise<Task>;
    getMyStoreCredit(storeCode?: string): Promise<Task>;
    constructor(taskQueue: any);
}
