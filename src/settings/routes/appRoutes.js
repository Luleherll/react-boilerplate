import React from 'react';
import HomeComponent from '../../containers/Home';

const appRoutes = [
	{
		path: '/',
		exact: true,
		main: HomeComponent,
		id: 1,
	}
];

export default appRoutes;
