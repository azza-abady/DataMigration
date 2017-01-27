import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
    selector: 'configuration-page',
    templateUrl: './configuration.component.html'
})

export class ConfigurationComponent { 

    public childItems: any[] = [{
			    show:true
			   }];
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
				item.active = false;
			    this.childItems.push(item);
			}

			this.childItems.push({name: 'Data ' + this.size,
				    urlTpe: 'type' + this.size,
				    urlType: 'urlString',
				    act:true,
				    act2:false,
				    active:true,
				    show:false
				   });

		    this.size ++;

			this.childItems.push({
				    show:true
				   });
		}
    }

    clicked(index: number) {
		this.childItems.splice(index, 1);
  	}
}
