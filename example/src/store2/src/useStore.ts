import { ReturnStoreType, StateConstraint } from '@poly-state/poly-state';
import { useEffect, useState } from 'react';

export const useStore = <T extends StateConstraint>(store: ReturnStoreType<T>) => {
	const [state, setState] = useState(store.getState());
	console.log(state);
	useEffect(
		() =>
			store.subscribe((v) => {
				console.log(v);
				setState(v);
			}),
		[store]
	);
	return state;
};
