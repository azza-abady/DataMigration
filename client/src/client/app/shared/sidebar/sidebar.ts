import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'sidebar-cmp',
	templateUrl: 'sidebar.html'
})

export class SidebarComponent {
	isActive = false;
	showAdmin: string = '';
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
}
