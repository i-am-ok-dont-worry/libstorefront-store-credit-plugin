import { injectable, inject } from 'inversify';
import { AbstractStore, LibstorefrontInnerState, SearchCriteriaFilter } from '@grupakmk/libstorefront';
import { StoreCreditThunks } from '../store/store-credit.thunks';
import { StoreCredit } from '../types';

@injectable()
export class StoreCreditService {

    /**
     * Returns customer store credit
     * Customer must be authorized to fetch credits
     * @options {SearchCriteriaFilter} Query filter
     * @returns {Promise<StoreCredit>}
     */
    public getStoreCredit ({ sortBy, sortDir, pageSize, currentPage }: SearchCriteriaFilter = {}) {
        return this.store.dispatch(StoreCreditThunks.getStoreCredits({ sortBy, sortDir, pageSize, currentPage }));
    }

    /**
     * Returns store credit details for user
     * @param {string} storeCreditId
     * @returns {StoreCredit} Store credit
     */
    public getSingleStoreCredit (storeCreditId: string): Promise<StoreCredit> {
        return this.store.dispatch(StoreCreditThunks.getSingleStoreCredit(storeCreditId));
    }

    public constructor (@inject(AbstractStore) private store: AbstractStore<LibstorefrontInnerState>) {}
}
