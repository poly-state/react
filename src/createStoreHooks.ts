import { ReturnStoreType, StateConstraint } from '@poly-state/poly-state';
import { useStore, useStoreSelector } from './index';

type UseStore<T> = () => T;
type UseStoreSelector<T> = (key: keyof T) => T[keyof T];

export const createStoreHooks = <T extends StateConstraint>(
	store: ReturnStoreType<T>
): Readonly<[UseStore<T>, UseStoreSelector<T>]> => {
	return [() => useStore(store), (key: keyof T) => useStoreSelector(store, key)];
};
