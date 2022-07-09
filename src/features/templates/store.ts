import { atom } from 'recoil';

import { EntityState } from '@utils/EntityState';


export const templatesPageState = atom<EntityState<{ title: string }>>({
	key: 'templatesPage',
	default: {
		state: 'not_loaded'
	}
});