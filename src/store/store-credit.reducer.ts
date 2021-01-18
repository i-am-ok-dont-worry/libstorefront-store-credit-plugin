import { StoreCreditDefaultState, StoreCreditModuleState } from './store-credit.default';
import { StoreCreditActions } from './store-credit.actions';
import { AnyAction } from '@grupakmk/libstorefront/dist/src/state-management/types/action';
import {Reducer} from "@grupakmk/libstorefront/dist/src/state-management/types/reducer";

export const storeCreditReducer: Reducer<StoreCreditModuleState> = (state: StoreCreditModuleState, action: AnyAction) => {
    switch (action.type) {
        case StoreCreditActions.SET_STORE_CREDIT: {
            return { ...state, current: action.payload };
        }
        default: return state || StoreCreditDefaultState;
    }
}
