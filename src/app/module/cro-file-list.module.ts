import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CroFileListComponent} from "../cro-file-list/cro-file-list.component";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {FileDownloadComponent} from "../file-download/file-download.component";



@NgModule({
  declarations: [
    CroFileListComponent,
    FileDownloadComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    CroFileListComponent
  ],
})
export class CroFileListModule { }
