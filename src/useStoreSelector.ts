import { ReturnStoreType, StateConstraint } from '@poly-state/poly-state';
import { useEffect, useRef, useState } from 'react';

export const useStoreSelector = <T extends StateConstraint, U extends keyof T>(
	store: ReturnStoreType<T>,
	key: U
): T extends StateConstraint ? T[U] : never => {
	const [state, setState] = useState(store.getState()[key]);

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
