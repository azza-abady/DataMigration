import { Component } from '@angular/core';
import { User } from './user';

@Component({
	moduleId: module.id,
    selector: 'user-page',
    templateUrl: './user.component.html'
})

export class UserComponent {
roles = ['Admin', 'user','Admin2','user2'];

model = new User(1, 'azza', 'azza', this.roles[0]);

submitted = false;

onSubmit() { this.submitted = true; }

// TODO: Remove this when we're done
get diagnostic() { return JSON.stringify(this.model);
}
}
