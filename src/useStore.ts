import { ReturnStoreType, StateConstraint } from '@poly-state/poly-state';
import { useSyncExternalStoreWithSelector } from 'use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development';

export const useStore = <T extends StateConstraint, Selected = T>(
	store: ReturnStoreType<T>,
	selector: (value: T) => Selected = (v: T) => v as Selected,
	equalityChecker = (a: Selected, b: Selected) => a === b
): Selected => {
	const state = useSyncExternalStoreWithSelector(
		store.subscribe.bind(store),
		store.getState.bind(store),
		store.getState.bind(store),
		selector,
		equalityChecker
	);

	return state;
};
