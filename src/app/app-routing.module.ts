import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CroFileListComponent} from "./cro-file-front/cro-file-list/cro-file-list.component";
import {FileDownloadComponent} from "./cro-file-front/file-download/file-download.component";

const routes: Routes = [
  {
    path:'',
    component:CroFileListComponent,
    children: [{
      path:'',
      redirectTo:'list',
      pathMatch:'full'
    },
      {
      path:'list',
      loadChildren: ()=> import('./cro-file-front/cro-file-front.module').then(m=>m.CroFileFrontModule)
    },
      {
        path:'Download',
        component:FileDownloadComponent,
        loadChildren:()=>import('./cro-file-front/cro-file-front.module').then(d=>d.CroFileFrontModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
