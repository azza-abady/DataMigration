import { Component, ViewChild } from '@angular/core';

@Component({
	moduleId: module.id,
    selector: 'execution-page',
    templateUrl: './execution.component.html'
})

export class ExecutionComponent {

	@ViewChild('values') values;

private stepOneFlag:boolean=true;
private stepTwoFlag:boolean=true;
private stepThreeFlag:boolean=true;
private stepFourFlag:boolean=true;
private hideReconPanel:boolean=true;
private progress:string='0';
private selectedRecon:any;
private queryInputType:string;
private nxtBtnName:string="Next";
reconsList=['Comparison 1','Comparison 2','Comparison 3','Comparison 4','Comparison 5'];

// private placeholder: string = "column name;\n'string value'='string value';\nvalue=value;\ncolumn name;\nvalue=value;";

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

  	// removePlaceholder() {
  	// 	if(this.values.nativeElement.value === this.placeholder){
  	// 		this.values.nativeElement.value = '';
  	// 	}
  	// }
		//
  	// addPlaceholder() {
		// if(this.values.nativeElement.value === ''){
  	// 		this.values.nativeElement.value = this.placeholder;
  	// 	}
  	// }

  	// ngAfterViewInit() {
  	// 	this.addPlaceholder();
  	// }
		onChange(){
			this.hideReconPanel=false;
			this.stepOneFlag=false;
			this.progress="0";
		}
		next(){
			if(!this.stepOneFlag){
				this.stepOneFlag=true;
				this.stepTwoFlag=false;
				this.progress="25";
			}else if(!this.stepTwoFlag){
				this.stepTwoFlag=true;
				this.stepThreeFlag=false
				this.progress="50";
			}else if(!this.stepThreeFlag){
				this.nxtBtnName="Finish";
				this.stepThreeFlag=true;
				this.stepFourFlag=false;
				this.progress="75";
			}else if(!this.stepFourFlag){
				this.nxtBtnName="Done";
				this.stepFourFlag=true;
				this.progress="100";
			}
		}
}
