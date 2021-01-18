import { StoreCredit } from '../types';

export const StoreCreditDefaultState: StoreCreditModuleState = {
    current: null
};

export interface StoreCreditModuleState {
    current: StoreCredit
}
