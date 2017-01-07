import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';

import { HomeModule } from './home/home.module';
import { RoleModule } from './role/role.module';
import { UserModule } from './user/user.module';
import { DBModule } from './db/db.module';
import { ComparisonModule } from './comparison/comparison.module';
import { ExecuteModule } from './execute/execute.module';
import { ScheduleModule } from './schedule/schedule.module';
import { DetailedModule } from './detailed/detailed.module';
import { SummaryModule } from './summary/summary.module';

import { DashboardComponent } from './dashboard.component';

import {TopNavComponent} from '../shared/index';
import {SidebarComponent} from '../shared/index';


@NgModule({
    imports: [
        CommonModule,
    	RouterModule,
    	DropdownModule,
        ModalModule,
    	HomeModule,
        RoleModule,
        UserModule,
        DBModule,
        ComparisonModule,
    	ExecuteModule,
        ScheduleModule,
        DetailedModule,
	SummaryModule
    ],
    declarations: [DashboardComponent, TopNavComponent, SidebarComponent],
    exports: [DashboardComponent, TopNavComponent, SidebarComponent]
})

export class DashboardModule { }
