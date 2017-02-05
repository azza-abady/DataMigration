import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';

import { HomeModule } from './home/home.module';
import { ConfigurationModule } from './configuration/configuration.module';
import { ExecutionModule } from './execution/execution.module';
import { UserManagementModule } from './userManagement/userManagement.module'

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
      ConfigurationModule,
    	ExecutionModule,
      UserManagementModule
    ],
    declarations: [DashboardComponent, TopNavComponent, SidebarComponent],
    exports: [DashboardComponent, TopNavComponent, SidebarComponent]
})

export class DashboardModule { }
