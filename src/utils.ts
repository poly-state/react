import { useSyncExternalStoreWithSelector } from 'use-sync-external-store/with-selector';

export const notInitialized = () => {
	throw new Error('uSES not initialized!');
};

export type uSESWS = typeof useSyncExternalStoreWithSelector;
