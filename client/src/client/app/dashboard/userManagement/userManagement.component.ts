import { Component } from '@angular/core';
import { User } from './user';

@Component({
	moduleId: module.id,
    selector: 'usermanage-page',
    templateUrl: './userManagement.component.html'
})


export class UserManagementComponent {

private hideUserPanel:boolean = true;
private accessLevel:boolean=true;
private compOfExec:boolean= true;
private compOfConf:boolean= true;
private submitted:boolean= false;
private user :User;
private selectedUser:User;
private selectedConfgComp: string[];
private selectedExecComp: string[];
private selectedAccessLevels: string[];
private savedUsers: User[];

constructor(){
  this.savedUsers=[];
  this.newUser();
}
roles = [
    { value: 'createUser', display: 'Create User'},
    { value: 'modifyUser', display: 'Modify User'},
    { value: 'deleteUser', display: 'Delete User'},
    { value: 'createRecon', display: 'Create Reconciliation'}
  ];

confComps=['Comparison 1','Comparison 2','Comparison 3','Comparison 4','Comparison 5'];

execComps = ['Comparison 6','Comparison 7','Comparison 8','Comparison 9','Comparison 10'];

/*get selectedRoles():string[]{
  return this.roles.filter(opt=>opt.checked).map(opt=>opt.value);
}
get selectedConfComp():string[]{
  return this.confComps.filter(opt=>opt.checked).map(opt=>opt.value);
}*/


filterConfgComp(e: any, value: string){
  if(e.target.checked){
    this.selectedConfgComp.push(value);
  }else{
    var index=this.selectedConfgComp.indexOf(value);
    if(index>-1){
      this.selectedConfgComp.splice(index,1);
    }
  }
  if(this.selectedConfgComp.length>0){
    this.user.conf=true;
  }else{
    this.user.conf=false;
  }
}

filterAccessLevel(e:any,value:string){
  if(e.target.checked){
    this.selectedAccessLevels.push(value)
  }else{
    var index=this.selectedAccessLevels.indexOf(value);
    if(index>-1){
      this.selectedAccessLevels.splice(index,1);
    }
  }
  if(this.selectedAccessLevels.length>0){
    this.user.usrMang=true;
  }else{
    this.user.usrMang=false;
  }
}

filterExecComp(e:any,value:string){
  if(e.target.checked){
    this.selectedExecComp.push(value);
  }else{
    var index=this.selectedExecComp.indexOf(value);
    if(index>-1){
      this.selectedExecComp.splice(index,1);
    }
  }
  if(this.selectedExecComp.length>0){
    this.user.exec=true;
  }else{
    this.user.exec=false;
  }
}
users=[
  new User('tom', 'tom',false,true,false,null,null,null),
  new User('emilia','emilia',false,false,true,null,null,null),
  new User('dora','dora',true,true,true,null,null,null)
];


onSubmit() { this.submitted = true; }

onChange(){
	this.hideUserPanel = false;
	this.user.name=this.selectedUser.name;
	this.user.passwrd=this.selectedUser.passwrd;
	this.user.usrMang=this.selectedUser.usrMang;
	this.user.conf=this.selectedUser.conf;
	this.user.exec=this.selectedUser.exec;
}

onClick(){
	this.hideUserPanel = false;
	this.newUser();
}

onConfigurationBtnClicked(){
if(this.compOfConf){
		this.compOfConf = false;
		}else{
		this.compOfConf = true;
  }
}

onExecutionBtnClicked(){
	if(this.compOfExec){
		this.compOfExec = false;
	}else{
		this.compOfExec = true;
	}
}
onAccessLevelBtnClicked(){
  if(this.accessLevel){
    this.accessLevel=false;
  }else{
    this.accessLevel=true;
  }
}

newUser() {
  this.selectedConfgComp= [];
  this.selectedExecComp=[];
  this.selectedAccessLevels=[];
	this.user = new User(null, null,false,false,false,this.selectedConfgComp,this.selectedExecComp,this.selectedAccessLevels);
}
saveUser(_usr:User){
  this.savedUsers.push(_usr);
  this.selectedConfgComp=null;
  this.selectedExecComp=null;
  this.selectedAccessLevels=null;
  this.newUser();
}
get diagnostic() {
 return JSON.stringify(this.savedUsers);
}

}
