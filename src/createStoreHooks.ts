import { ReturnStoreType, StateConstraint } from '@poly-state/poly-state';
import { DeepReadonly } from 'ts-essentials';
import { useStore, useStoreSelector } from './index';

type UseStore<T> = () => T;
type UseStoreSelector<T> = (key: keyof T) => DeepReadonly<T[keyof T]>;

export const createStoreHooks = <T extends StateConstraint>(
	store: ReturnStoreType<T>
): [UseStore<T>, UseStoreSelector<T>] => {
	return [() => useStore(store), (key: keyof T) => useStoreSelector(store, key)];
};
