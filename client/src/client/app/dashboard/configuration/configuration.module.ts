import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ConfigurationComponent } from './configuration.component';

import {
		TabsModule
	} from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
    imports: [
		TabsModule,
		FormsModule,
		CommonModule
	     ],
    declarations: [ConfigurationComponent],
    exports: [ConfigurationComponent]
})

export class ConfigurationModule { }
