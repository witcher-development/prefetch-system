import { createModel } from '@rematch/core';

import { RootModel } from '@store';
import { EntityState } from '@utils/EntityState';


export type HomePageData = { title: string }
export type HomePageState = EntityState<HomePageData>

export const homePageState = createModel<RootModel>()({
	state: {
		state: 'not_loaded'
	} as HomePageState,
	reducers: {
		setPageState (_, payload: HomePageState) {
			return payload;
		}
	}
});
