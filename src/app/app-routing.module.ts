import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "renderer",
    loadChildren: () =>
      import("./form-renderer/form-renderer.module").then(m => m.FormRendererModule)
  },
  {
    path: "",
    redirectTo: "renderer",
    pathMatch: "full"
  },
  { path: "**", redirectTo: "renderer" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
