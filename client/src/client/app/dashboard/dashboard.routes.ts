import { Route } from '@angular/router';

import { HomeRoutes } from './home/index';
import { ConfigurationRoutes } from './configuration/index';
import { ExecutionRoutes } from './execution/index';
import { UserManagementRoutes } from './userManagement/index';

import { DashboardComponent } from './index';

export const DashboardRoutes: Route[] = [
  	{
    	path: 'dashboard',
    	component: DashboardComponent,
    	children: [
	...HomeRoutes,
	...ConfigurationRoutes,
  ...ExecutionRoutes,
  ...UserManagementRoutes,
    	]
  	}
];
