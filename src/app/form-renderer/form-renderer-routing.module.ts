import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormRendererComponent} from './form-renderer.component';

const routes: Routes = [
  {
    path: '',
    component: FormRendererComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRendererRoutingModule { }
