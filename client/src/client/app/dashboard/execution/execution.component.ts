import { Component, ViewChild } from '@angular/core';

@Component({
	moduleId: module.id,
    selector: 'execution-page',
    templateUrl: './execution.component.html'
})

export class ExecutionComponent {

	@ViewChild('values') values; 

	private placeholder: string = "column name;\n'string value'='string value';\nvalue=value;\ncolumn name;\nvalue=value;";

    public childItems: any[] = [
    			   {
    			    name: 'Reference Data',
    			    type: '1',
				    urlType: '1',
				    host: '',
				    port: '',
				    service: '',
				    user: '',
				    password: '',
				    link: ''
				   },
				   {
    			    name: 'Data 2',
    			    type: '1',
				    urlType: '1',
				    host: '',
				    port: '',
				    service: '',
				    user: '',
				    password: '',
				    link: ''
				   }
	];

  	removePlaceholder() {
  		if(this.values.nativeElement.value === this.placeholder){
  			this.values.nativeElement.value = '';
  		}
  	}

  	addPlaceholder() {
		if(this.values.nativeElement.value === ''){
  			this.values.nativeElement.value = this.placeholder;
  		}
  	}

  	ngAfterViewInit() {
  		this.addPlaceholder();
  	}
}
