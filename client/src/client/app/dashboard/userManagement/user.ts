export class User {
name: string;
passwrd: string;
usrMang: boolean;
conf: boolean;
exec: boolean;
confComps: string[];
execComps: string[];

  constructor(_name: string, _passwrd: string, _userManagement: boolean, _configuration: boolean, _execution: boolean,_confComps: string[],_execComps: string[]) {
      this.name=_name;
      this.passwrd=_passwrd;
      this.usrMang=_userManagement;
      this.conf=_configuration;
      this.exec=_execution;
      this.confComps=_confComps;
      this.execComps=_execComps;
    }
}
