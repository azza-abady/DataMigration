import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsModule } from 'ng2-bootstrap/ng2-bootstrap';

import { ConfigurationComponent } from './configuration.component';

@NgModule({
    imports: [
    	RouterModule,
		TabsModule,
		FormsModule,
		CommonModule
	],
    declarations: [ConfigurationComponent],
    exports: [ConfigurationComponent]
})

export class ConfigurationModule { }
