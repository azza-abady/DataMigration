import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ExecutionComponent } from './execution.component';

import {
		TabsModule
	} from 'ng2-bootstrap/ng2-bootstrap';
	
@NgModule({
    imports: [
		TabsModule,
		FormsModule,
		CommonModule
    ],
    declarations: [ExecutionComponent],
    exports: [ExecutionComponent]
})

export class ExecutionModule { }
