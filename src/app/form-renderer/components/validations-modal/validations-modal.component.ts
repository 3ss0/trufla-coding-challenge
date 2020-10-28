import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {elementsValidations} from '@core/models';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup ,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-validations-modal',
  templateUrl: './validations-modal.component.html',
  styleUrls: ['./validations-modal.component.scss']
})
export class ValidationsModalComponent implements OnInit {
  @Input() public elem_type:string;
  @Input() public elem_validations:any;
  @Output() validations: EventEmitter<any> =new EventEmitter();
  validationsForm: FormGroup;
  elementsRules=elementsValidations;
  validationDropdownSettings : IDropdownSettings= {};
  selectedRules=[];
  constructor(private modal: NgbActiveModal) { 
  }

  ngOnInit() {
    this.validationsForm = new FormGroup({
      rules: new FormControl(this.elem_validations.rules,Validators.required),
      minLength:new FormControl(this.elem_validations.min,Validators.required),
      maxLength:new FormControl(this.elem_validations.max,Validators.required),
    });
    this.selectedRules=this.elem_validations.rules;
    this.validationDropdownSettings = {
      singleSelection: false,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: false,
      enableCheckAll:false
    };
    
  }


  select(event){
    if(!this.selectedRules.includes(event))this.selectedRules.push(event);
  }

  deselect(event){
    let item_index=this.selectedRules.indexOf(event);
    if(item_index>-1)this.selectedRules.splice(item_index,1);
  }

  emit(){
    let min=this.validationsForm.get('minLength').value;
    let max=this.validationsForm.get('maxLength').value;
    this.validations.emit({rules:this.selectedRules,min,max});
    this.modal.close();
  }

}
