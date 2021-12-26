import { createStore } from '@poly-state/poly-state';
import { createStoreHooks } from '@poly-state/react';

export type CounterStoreType = {
	count: number;
};

export const counterStoreInitialState: CounterStoreType = {
	count: 0,
};

export const counterStore = createStore(counterStoreInitialState);
export const [useCounterStore, useCounterStoreSelector] = createStoreHooks(counterStore);
