import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CroFileListComponent} from "./cro-file-list/cro-file-list.component";
import {FileDownloadComponent} from "./file-download/file-download.component";

const routes: Routes = [
  { path: 'list/:filename', component: CroFileListComponent },
  {
    path: 'download',
    component: FileDownloadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
