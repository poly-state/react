import { ReturnStoreType, StateConstraint } from '@poly-state/poly-state';
import { useStore } from './index';
import { useStoreSelector } from './useStoreSelector';

type UseStoreSelectorHook<T extends StateConstraint> = <U extends keyof T>(
	key: U
) => U extends keyof T ? T[U] : never;

type UseStoreHook<T extends StateConstraint, Selected = T> = (
	selector?: (value: T) => Selected,
	equalityChecker?: (a: Selected, b: Selected) => boolean
) => Selected;

export const createStoreHooks = <T extends StateConstraint, Selected = T>(
	store: ReturnStoreType<T>
) => [
	(selector?: (v: T) => Selected, equalityChecker?: (a: Selected, b: Selected) => boolean) =>
		useStore(store, selector, equalityChecker),
	(key: keyof T) => useStoreSelector(store, key),
];
