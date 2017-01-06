import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'sidebar-cmp',
	templateUrl: 'sidebar.html'
})

export class SidebarComponent {
	isActive = false;
	showAdmin: string = '';
	showConf: string = '';
	showExec: string = '';
	showReport: string = '';
	eventCalled() {
		this.isActive = !this.isActive;
	}
	expandAdmin(element: any) {
		if (element === this.showAdmin) {
			this.showAdmin = '0';
		} else {
			this.showAdmin = element;
		}
	}
	expandConf(element: any) {
		if (element === this.showConf) {
			this.showConf = '0';
		} else {
			this.showConf = element;
		}
	}
	expandExec(element: any) {
		if (element === this.showExec) {
			this.showExec = '0';
		} else {
			this.showExec = element;
		}
	}
	expandReport(element: any) {
		if (element === this.showReport) {
			this.showReport = '0';
		} else {
			this.showReport = element;
		}
	}
}
