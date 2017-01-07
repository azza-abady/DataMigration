import { Route } from '@angular/router';

import { HomeRoutes } from './home/index';
import { RoleRoutes } from './role/index';
import { UserRoutes } from './user/index';
import { DBRoutes } from './db/index';
import { ComparisonRoutes } from './comparison/index';
import { ExecuteRoutes } from './execute/index';
import { ScheduleRoutes } from './schedule/index';
import { DetailedRoutes } from './detailed/index';
import { SummaryRoutes } from './summary/index';

import { DashboardComponent } from './index';

export const DashboardRoutes: Route[] = [
  	{
    	path: 'dashboard',
    	component: DashboardComponent,
    	children: [
	...HomeRoutes,
	...RoleRoutes,
	...UserRoutes,
        ...DBRoutes,
	...ComparisonRoutes,
        ...ExecuteRoutes,
        ...ScheduleRoutes,
        ...DetailedRoutes,
	...SummaryRoutes
    	]
  	}
];
