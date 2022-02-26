import { createStore } from '@poly-state/poly-state';
import { createStoreHooks } from '../..';

export const counterStore = createStore({ count: 0 });

export const [useCounterStore, useCounterSelector] = createStoreHooks(counterStore);
