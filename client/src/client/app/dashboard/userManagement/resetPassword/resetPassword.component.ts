import { Component } from '@angular/core';
import { User } from '../user';

@Component({
	moduleId: module.id,
    selector: 'resetpassword-page',
    templateUrl: './resetPassword.component.html'
})


export class ResetPasswordComponent {

user =new User('gregr','ree',false,false,false,null,null,null);

submitted = false;

onSubmit() { this.submitted = true; }


get diagnostic() {
 return JSON.stringify(this.user);

}

}
