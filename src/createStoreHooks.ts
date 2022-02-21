import { ReturnStoreType, StateConstraint } from '@poly-state/poly-state';
import { createSelector } from './createSelector';
import { useStore } from './index';

export const createStoreHooks = <T extends StateConstraint>(store: ReturnStoreType<T>) => {
	return [() => useStore(store), createSelector(store)];
};
