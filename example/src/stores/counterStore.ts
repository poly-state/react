import { createStore } from '@poly-state/poly-state';
import { createStoreHooks } from '@poly-state/react';

type CounterStore = {
	count: number;
};

const counterStoreInitialState: CounterStore = {
	count: 0,
};

export const counterStore = createStore(counterStoreInitialState);

export const [useCounterStore, useCounterStoreSelector] = createStoreHooks(counterStore);
