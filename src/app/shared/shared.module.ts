import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import * as fromComponents from "./components";
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [...fromComponents.components],
  imports: [CommonModule, FormsModule, NgxSpinnerModule],
  exports: [
    NgxSpinnerModule,
    CommonModule,
    FormsModule,
    ...fromComponents.components
  ]
})
export class SharedModule {}
