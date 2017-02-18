import { Component } from '@angular/core';
import { User } from './user';

@Component({
	moduleId: module.id,
    selector: 'usermanage-page',
    templateUrl: './userManagement.component.html'
})


export class UserManagementComponent {

private disabledConfMenu:boolean = true;
private disabledExecMenu:boolean = true;

compOfConf = true;

confComps=['Comparison 1','Comparison 2','Comparison 3','Comparison 4','Comparison 5'];

compOfExec = true;
execComps = ['Comparison 6','Comparison 7','Comparison 8','Comparison 9','Comparison 10'];

user =new User('gregr','ree',false,false,false,this.confComps,this.execComps);
selectedUser:User;
users=[new User('tom', 'tom',false,true,false,null,null),new User('emilia','emilia',false,false,true,null,null),new User('dora','dora',true,true,true,null,null)];
submitted = false;
show = true;
onSubmit() { this.submitted = true; }

onChange(){
	this.show = false;
	this.user.name=this.selectedUser.name;
	this.user.passwrd=this.selectedUser.passwrd;
	this.user.usrMang=this.selectedUser.usrMang;
	this.user.conf=this.selectedUser.conf;
	this.user.exec=this.selectedUser.exec;
	this.onChecked();
}

onClick(){
	this.show = false;
	this.addUser();
}

onConfChange(){
if(this.compOfConf){
		this.compOfConf = false;
		}else{
		this.compOfConf = true;
}
}

onExecChange(){
	if(this.compOfExec){
		this.compOfExec = false;
	}else{
		this.compOfExec = true;
	}
}
onChecked(){
if(this.user.exec){
this.disabledExecMenu=false
}else{
this.disabledExecMenu=true;
this.compOfExec=true;
}
if(this.user.conf){
this.disabledConfMenu=false;
}else{
this.disabledConfMenu=true;
this.compOfConf=true;
}
}
addCompToUser(){
	this.user.confComps.push();
}
addUser() {
	this.user = new User(null, null,false,false,false,null,null);
}
get diagnostic() {
 return JSON.stringify(this.user);
}

}
