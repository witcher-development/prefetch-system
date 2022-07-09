import React, { ReactNode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Paths } from '@router';
import { HomePage } from '@home';
import { DocumentsPage } from '@documents';
import { TemplatesPage } from '@templates';
import { AutomationsPage } from '@automations';
import { TeamsPage } from '@teams';


export const routes = new Map<Paths, {
  element: ReactNode
}>([
	['/', { element: <HomePage /> }],
	['/documents', { element: <DocumentsPage /> }],
	['/templates', { element: <TemplatesPage /> }],
	['/automations', { element: <AutomationsPage /> }],
	['/teams', { element: <TeamsPage /> }],
]);

export const MainRouter = () => (
	<BrowserRouter>
		<Routes>
			{Array.from(routes).map(([path, { element }]) => (
				<Route key={path} path={path} element={element} />
			))}
		</Routes>
	</BrowserRouter>
);
