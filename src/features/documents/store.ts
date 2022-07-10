import { createModel } from '@rematch/core';

import { RootModel } from '@store';
import { EntityState } from '@utils/EntityState';


export type DocumentsPageData = { title: string }
export type DocumentsPageState = EntityState<DocumentsPageData>

export const documentsPageState = createModel<RootModel>()({
	state: {
		state: 'not_loaded'
	} as DocumentsPageState,
	reducers: {
		setPageState (_, payload: DocumentsPageState) {
			return payload;
		}
	}
});
