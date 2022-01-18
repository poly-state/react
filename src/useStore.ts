import { ReturnStoreType, StateConstraint } from '@poly-state/poly-state';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { DeepReadonly } from 'ts-essentials';

export const useStore = <T extends StateConstraint>(store: ReturnStoreType<T>) => {
	const [state, setState] = useState(store.getState());
	useEffect(() => store.subscribe(setState as Dispatch<SetStateAction<DeepReadonly<T>>>), [store]);
	return state;
};
