import { Component, OnInit } from '@angular/core';
import {formElementsTypes,elementsValidations,formStyles} from '@core/models';
import {FormRendererService} from '../../form-renderer.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import {NgbModal,NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {ValidationsModalComponent} from './../validations-modal/validations-modal.component';
import {ValuesModalComponent} from './../values-modal/values-modal.component';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {
  form_json:string;
  formTypes=formElementsTypes;
  formStyles=formStyles;
  elemsValidations=elementsValidations;
  validationsRef:NgbModalRef;
  valuesRef:NgbModalRef;
  formObject={
    showCancel:false,
    formClass:'single',
    elements:[
      {
        type:null,
        showLabel:false,
        label:'',
        validations:{
          rules:[],
          min:1,
          max:10
        },
        values:[]
      }
    ],
  };
  selectedItems=[];
  dropdownSettings :IDropdownSettings= {};
  constructor(private renderService:FormRendererService,private modalService:NgbModal) { 
  }

  ngOnInit() {
    this.renderForm();
  }
  
  addNewElem(){
    this.formObject.elements.push({
      type:null,
      showLabel:false,
      label:'',
      validations:{
        rules:[],
        min:1,
        max:10
      },
      values:[]
    });
    this.renderForm();
  }

  removeElem(i){
    this.formObject.elements.splice(i,1);
    this.renderForm();
  }

  renderForm(){
    this.form_json=JSON.stringify(this.formObject,null,4)
    this.renderService.formJson.next(this.form_json);
  }

  openValidations(elem_type,elem_validations,index){
    this.validationsRef=this.modalService.open(ValidationsModalComponent);
    this.validationsRef.componentInstance.elem_type=elem_type;
    this.validationsRef.componentInstance.elem_validations=elem_validations;
    this.validationsRef.componentInstance.validations.subscribe((validations)=>{
      this.formObject.elements[index].validations=validations;
      this.renderForm();
    });
  }

  openValues(elem_type,elem_values,index){
    this.valuesRef=this.modalService.open(ValuesModalComponent,{
      size:'lg'
    });
    this.valuesRef.componentInstance.elem_type=elem_type;
    this.valuesRef.componentInstance.elem_values=elem_values;
    this.valuesRef.componentInstance.values.subscribe((values)=>{
      this.formObject.elements[index].values=values;
      this.renderForm();
    });
  }

}
