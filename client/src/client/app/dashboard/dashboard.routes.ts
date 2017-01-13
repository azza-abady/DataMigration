import { Route } from '@angular/router';

import { HomeRoutes } from './home/index';
import { RoleRoutes } from './role/index';
import { UserRoutes } from './user/index';
import { ConfigurationRoutes } from './configuration/index';
import { ExecutionRoutes } from './execution/index';

import { DashboardComponent } from './index';

export const DashboardRoutes: Route[] = [
  	{
    	path: 'dashboard',
    	component: DashboardComponent,
    	children: [
	...HomeRoutes,
	...RoleRoutes,
	...UserRoutes,
	...ConfigurationRoutes,
        ...ExecutionRoutes
    	]
  	}
];
