import { AbstractStore, LibstorefrontInnerState, SearchCriteriaFilter } from '@grupakmk/libstorefront';
import { StoreCredit } from '../types';
export declare class StoreCreditService {
    private store;
    /**
     * Returns customer store credit
     * Customer must be authorized to fetch credits
     * @options {SearchCriteriaFilter} Query filter
     * @returns {Promise<StoreCredit>}
     */
    getStoreCredit({ sortBy, sortDir, pageSize, currentPage }?: SearchCriteriaFilter): Promise<unknown>;
    /**
     * Returns store credit details for user
     * @param {string} storeCreditId
     * @returns {StoreCredit} Store credit
     */
    getSingleStoreCredit(storeCreditId: string): Promise<StoreCredit>;
    constructor(store: AbstractStore<LibstorefrontInnerState>);
}
