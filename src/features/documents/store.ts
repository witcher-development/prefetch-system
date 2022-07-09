import { atom } from 'recoil';

import { EntityState } from '@utils/EntityState';


export const documentsPageState = atom<EntityState<{ title: string }>>({
	key: 'documentsPage',
	default: {
		state: 'not_loaded'
	}
});