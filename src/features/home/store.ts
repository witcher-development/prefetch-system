import { atom } from 'recoil';

import { EntityState } from '@utils/EntityState';


export const homePageState = atom<EntityState<{ title: string }>>({
	key: 'homePage',
	default: {
		state: 'not_loaded'
	}
});