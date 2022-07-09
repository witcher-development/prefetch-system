import { atom } from 'recoil';

import { EntityState } from '@utils/EntityState';


export const automationsPageState = atom<EntityState<{ title: string }>>({
	key: 'automationsPage',
	default: {
		state: 'not_loaded'
	}
});