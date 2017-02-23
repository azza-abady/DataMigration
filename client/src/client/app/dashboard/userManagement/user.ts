export class User {
name: string;
passwrd: string;
usrMang: boolean;
conf: boolean;
exec: boolean;
confgComps: string[];
execComps: string[];
accessLevels: string[];

  constructor(_name: string, _passwrd: string, _userManagement: boolean, _configuration: boolean, _execution: boolean,_confgComps: string[],_execComps: string[],_accessLevels:string[]) {
      this.name=_name;
      this.passwrd=_passwrd;
      this.usrMang=_userManagement;
      this.conf=_configuration;
      this.exec=_execution;
      this.confgComps=_confgComps;
      this.execComps=_execComps;
      this.accessLevels=_accessLevels;
    }
}
