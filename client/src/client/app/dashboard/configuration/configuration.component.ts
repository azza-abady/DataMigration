import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
    selector: 'configuration-page',
    templateUrl: './configuration.component.html'
})

export class ConfigurationComponent { 

    public childItems: any[] = [
    			   {
    			    name: 'Reference Data',
    			    type: '1',
				    urlType: '1',
				    inputType: '1',
				    host: '',
				    port: '',
				    service: '',
				    user: '',
				    password: '',
				    link: '',
				    activeTab:true
				   },
				   {
			    	showPlus:true
			   	   }
	];
	
    public childstemp: any[];
    private size: number = this.childItems.length;

    public createTab(index: number){

    	if(index == this.childItems.length -1){

			this.childstemp = [];
			for (let item of this.childItems) {
			    this.childstemp.push(Object.assign({},item));
			}

			this.childItems = [];
			for (var i = 0; i < this.childstemp.length-1; i++) {
				let item: any = this.childstemp[i];
				item.activeTab = false;
			    this.childItems.push(item);
			}

			this.childItems.push(
				   {
				    name: 'Data ' + this.size,
				    type: '1',
				    urlType: '1',
				    inputType: '1',
				    host: '',
				    port: '',
				    service: '',
				    user: '',
				    password: '',
				    link: '',
				    activeTab:true,
				    showX:true
				   });

		    this.size ++;

			this.childItems.push({
				    showPlus:true
				   });
		}
    }

    deleteTab(index: number) {
		this.childItems.splice(index, 1);
  	}
}
