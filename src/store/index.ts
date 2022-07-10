import { init, Models, RematchDispatch, RematchRootState } from '@rematch/core';

import { homePageState } from '@home';
import { documentsPageState } from '@documents';


export interface RootModel extends Models<RootModel> {
	homePageState: typeof homePageState;
	documentsPageState: typeof documentsPageState;
}
export const models: RootModel = { homePageState, documentsPageState };

export const store = init({ models });
export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;
