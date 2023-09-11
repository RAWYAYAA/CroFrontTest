import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CroFileListComponent} from "./cro-file-list.component";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    CroFileListComponent,],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    CroFileListComponent
  ],
})
export class CroFileListModule { }
