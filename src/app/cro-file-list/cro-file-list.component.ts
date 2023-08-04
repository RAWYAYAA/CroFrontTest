import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Data {
  code_Banque_Remettant: string;
  nom_Remettant: string;
  n_Cheque: string;
  code_Agence: string;
  montant:String;
}
@Component({
  selector: 'app-cro-file-list',
  templateUrl: './cro-file-list.component.html',
  styleUrls: ['./cro-file-list.component.css']
})
export class CroFileListComponent implements OnInit {
  croFiles: Data[] = [];
  currentPage = 1;
  pageSize = 10;
  totalPages = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    const url = `http://localhost:8081/cro-files/022.000.001.031.MAD?page=${this.currentPage}&pageSize=${this.pageSize}`;
    this.http.get<Data[]>(url).subscribe(
      (response) => {
        this.croFiles = response;
        console.log(response);
      },
      (error) => {
        console.error(error);
      }
    );
  }
  onPageSizeChange() {
    this.currentPage = 1;
    this.loadData();
  }
}
