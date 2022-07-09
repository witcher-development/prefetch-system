import React from 'react';
import { RecoilRoot } from 'recoil';

import { MainRouter } from '@router';
import { Prefetch } from '@prefetch';


export const App = () => (
	<RecoilRoot>
		<MainRouter />
		<Prefetch />
	</RecoilRoot>
);
