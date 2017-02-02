import { Component } from '@angular/core';
import { Role } from './role';

@Component({
	moduleId: module.id,
    selector: 'role-page',
    templateUrl: './role.component.html'
})

export class RoleComponent {
pages = [
    { value: '/user', display: 'Create User' },
    { value: '/role', display: 'Create Role' },
    { value: '/configuration', display: 'Configuration' },
		{ value: '/execution', display: 'Execution'}
  ];

submitted = false;
role = new Role('Admin', [this.pages[0].value]);

// TODO: Remove this when we're done
get diagnostic() { return JSON.stringify(this.role);
}

}
