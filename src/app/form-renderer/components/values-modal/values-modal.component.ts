import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-values-modal',
  templateUrl: './values-modal.component.html',
  styleUrls: ['./values-modal.component.scss']
})
export class ValuesModalComponent implements OnInit {
  @Input() elem_values;
  @Input() elem_type;
  @Output() values:EventEmitter<any> = new EventEmitter();
  constructor(public modal:NgbActiveModal) {

  }

  ngOnInit() {
  }

  addValue(){
    this.elem_values.push({label:'',value:'',checked:false});
  }

  removeValue(i){
    this.elem_values.splice(i,1);
  }
  emit(){
    this.values.emit(this.elem_values);
    this.modal.close();
  }
}
