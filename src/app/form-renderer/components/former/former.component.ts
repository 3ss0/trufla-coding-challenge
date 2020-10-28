import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder,FormControl, Validators, FormArray } from '@angular/forms';
import {FormRendererService} from '../../form-renderer.service';
@Component({
  selector: 'app-former',
  templateUrl: './former.component.html',
  styleUrls: ['./former.component.scss']
})
export class FormerComponent implements OnInit {
  formObject:any;
  errors=[];
  formElements=[];
  myForm:FormGroup;
  formGroup={};
  constructor(private renderService:FormRendererService,private fb:FormBuilder) { 
    this.myForm=this.fb.group({

    });
  }

  ngOnInit() {
    this.renderService.formJson.subscribe((formJson)=>{
      this.formObject=JSON.parse(formJson);
      this.errors=[];
      this.formElements=[];
      this.checkAndRender();
    });
  }

  checkAndRender(){
    this.formObject.elements.forEach((element,index) => {
      if(!element.type)this.errors.push(index+1);
      else this.createFormControl(element,index);
    });
    this.buildForm();
  }

  buildForm(){
    for(let i=0;i<this.formElements.length;i++){
      this.formGroup[this.formElements[i].name]=this.formElements[i].control;
    }
    this.myForm=this.fb.group(this.formGroup);
  }


  // checkboxes , radios
  onCheckChange(event,name) {
    const formArray: FormArray = this.myForm.get(name) as FormArray;
  
    /* Selected */
    if(event.target.checked){
      // Add a new control in the arrayForm
      formArray.push(new FormControl(event.target.value));
    }
    /* unselected */
    else{
      // find the unselected element
      let i: number = 0;
  
      formArray.controls.forEach((ctrl: FormControl) => {
        if(ctrl.value == event.target.value) {
          // Remove the unselected element from the arrayForm
          formArray.removeAt(i);
          return;
        }
  
        i++;
      });
    }
  }

  createFormControl(element,index){
    let name=`control_${index}`;
    let label=element.label;
    let showLabel=element.showLabel;
    let type=element.type;
    let min=element.validations.min;
    let max=element.validations.max;
    let values=element.values;
    let rules=element.validations.rules.map((rule)=>{
      if(rule==='minLength')return Validators.minLength(min);
      else if(rule==='maxLength')return Validators.maxLength(max);
      else return Validators[rule];
    });
    let control;
    if(type==='text'||type==='select'){
      control=new FormControl(null,rules);
    }else{
      control=new FormArray([],rules.length>1?Validators.required:null);
    }

    let formControl={name,label,value:null,values,min , max,showLabel,type,control,hasValidations:(rules.length>0)};

    this.formElements.push(formControl);
  }

  checkError(control,error){
    if(this.myForm.get(control).errors){
      return this.myForm.get(control).errors[error];
    }else {
      return false;
    }
  }

  reset(){
    this.myForm.reset();
  }

  save(){
    
  }


}
