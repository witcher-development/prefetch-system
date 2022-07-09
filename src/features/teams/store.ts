import { atom } from 'recoil';

import { EntityState } from '@utils/EntityState';


export const teamsPageState = atom<EntityState<{ title: string }>>({
	key: 'teamsPage',
	default: {
		state: 'not_loaded'
	}
});