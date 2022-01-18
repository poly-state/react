import { ReturnStoreType, StateConstraint } from '@poly-state/poly-state';
import { useEffect, useRef, useState } from 'react';
import { DeepReadonly } from 'ts-essentials';

export const useStoreSelector = <T extends StateConstraint, U extends keyof T>(
	store: ReturnStoreType<T>,
	key: U
): T extends StateConstraint ? DeepReadonly<T[U]> : never => {
	const [state, setState] = useState(store.getState()[key as keyof DeepReadonly<T>]);

	const subscriberRef = useRef<() => void>();

	useEffect(() => {
		//clean up previous listeners if dependencies change
		if (subscriberRef.current) {
			subscriberRef.current();
		}

		subscriberRef.current = store.subscribeKey(key as keyof T, setState as any);

		return () => {
			if (subscriberRef?.current) {
				subscriberRef.current();
			}
		};
	}, [store, key]);

	return state;
};
