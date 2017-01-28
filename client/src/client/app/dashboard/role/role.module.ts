import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RoleComponent } from './role.component';

@NgModule({
    imports: [
		RouterModule
	],
    declarations: [RoleComponent],
    exports: [RoleComponent]
})

export class RoleModule { }

