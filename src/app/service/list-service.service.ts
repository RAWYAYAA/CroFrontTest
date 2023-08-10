import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ListServiceService {
  API='http://localhost:8081/cro-files/';
  currentPage = 1;
  pageSize = 10;
  constructor(private http: HttpClient) { }

  getList(filename: string): Observable<any> {
    return this.http.get(`${this.API}${filename}?page=${this.currentPage}&pageSize=${this.pageSize}`);
  }
}
