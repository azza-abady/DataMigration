import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UserComponent } from './user.component';

@NgModule({
    imports: [
		RouterModule
	],
    declarations: [UserComponent],
    exports: [UserComponent]
})

export class UserModule { }
