import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CroFileListComponent} from "./cro-file-list/cro-file-list.component";

const routes: Routes = [
  {
    path: 'liste',
    component: CroFileListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
