import { createStore } from '@poly-state/poly-state';
import { createStoreHooks } from '../..';

const initialState: State = {
	accessToken: '',
	refreshToken: '',
	isLoggedIn: false,
	userInfo: {
		id: '',
		name: '',
		email: '',
	},
};

type State = {
	accessToken: string;
	refreshToken: string;
	isLoggedIn: boolean;
	userInfo: {
		id: string;
		name: string;
		email: string;
	};
};

export const authStore = createStore(initialState);

export const [useAuthStore, useAuthStoreSelector] = createStoreHooks(authStore);
