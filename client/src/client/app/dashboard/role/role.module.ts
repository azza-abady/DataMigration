import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { RoleComponent } from './role.component';

@NgModule({
    imports: [
    RouterModule,
    BrowserModule,
    FormsModule
	],
    declarations: [RoleComponent],
    bootstrap: [RoleComponent],
    exports: [RoleComponent]
})

export class RoleModule { }
