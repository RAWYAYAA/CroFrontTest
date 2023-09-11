import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule, HttpHeaders} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {CroFileListModule} from "./cro-file-list/cro-file-list.module";
import {FileDownloadModule} from "./file-download/file-download.module";





@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CroFileListModule,
    FileDownloadModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
