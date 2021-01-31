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

    /**
     * Applies selected amount of customer credit to the current cart
     * @param {number} amount
     * @returns {Promise<void>}
     */
    public applyCredit (amount: number): Promise<void> {
        return this.store.dispatch(StoreCreditThunks.applyStoreCredit(amount));
    }

    /**
     * Cancels customer credit on the current cart
     * @returns {Promise<void>}
     */
    public cancelCredit (): Promise<void> {
        return this.store.dispatch(StoreCreditThunks.cancelStoreCredit());
    }

    /**
     * Returns customer store credit
     * @returns {Promise<StoreCredit>}
     */
    public getMyStoreCredit (): Promise<StoreCredit> {
        return this.store.dispatch(StoreCreditThunks.getMyStoreCredit());
    }

    public constructor (@inject(AbstractStore) private store: AbstractStore<LibstorefrontInnerState>) {}
}
