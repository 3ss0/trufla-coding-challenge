import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { FormRendererRoutingModule } from './form-renderer-routing.module';
import { FormRendererComponent } from './form-renderer.component';
import {SharedModule} from '@shared/shared.module';
import { FormerComponent } from './components/former/former.component';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import {NgbModalModule,NgbPopoverModule} from '@ng-bootstrap/ng-bootstrap';
import { ValidationsModalComponent } from './components/validations-modal/validations-modal.component';
import { ValuesModalComponent } from './components/values-modal/values-modal.component';

@NgModule({
  declarations: [FormRendererComponent, FormerComponent, FormBuilderComponent, ValidationsModalComponent, ValuesModalComponent],
  imports: [
    CommonModule,
    FormRendererRoutingModule,
    SharedModule,
    NgbModalModule,
    FormsModule,
    ReactiveFormsModule,
    NgbPopoverModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  entryComponents:[ValidationsModalComponent,ValuesModalComponent]
})
export class FormRendererModule { }
