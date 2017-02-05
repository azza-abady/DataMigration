import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { UserManagementComponent } from './userManagement.component';

@NgModule({
    imports: [
    RouterModule,
    BrowserModule,
    FormsModule
    ],
    declarations: [UserManagementComponent],
    bootstrap: [UserManagementComponent],
    exports: [UserManagementComponent]
})

export class UserManagementModule { }
