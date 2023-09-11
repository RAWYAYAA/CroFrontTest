import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FileDownloadComponent} from "./file-download.component";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    FileDownloadComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    FileDownloadComponent
  ]
})
export class FileDownloadModule { }
