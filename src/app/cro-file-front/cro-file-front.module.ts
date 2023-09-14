import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CroFileListComponent } from './cro-file-list/cro-file-list.component';
import { FileDownloadComponent } from './file-download/file-download.component';
import {CroFileFrontRoutingModule} from "./cro-file-list/CroFileList-rounting.module";




@NgModule({
  declarations: [
    CroFileListComponent,
    FileDownloadComponent
  ],
  imports: [
    CommonModule,
    CroFileFrontRoutingModule,
  ]
})
export class CroFileFrontModule { }
