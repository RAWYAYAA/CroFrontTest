import { Component, OnInit } from '@angular/core';
import {Data} from "../interface/data";
import {ListServiceService} from "../service/list-service.service";
import {HttpClient} from "@angular/common/http";
import {saveAs} from "file-saver";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-cro-file-list',
  templateUrl: './cro-file-list.component.html',
  styleUrls: ['./cro-file-list.component.css']
})
export class CroFileListComponent implements OnInit {

  croFiles: Data[] = [];
  constructor(private route: ActivatedRoute,private listService: ListServiceService, private http:HttpClient) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const filename = params.get('filename'); // Récupérer le nom de fichier depuis l'URL
      if (filename) {
        this.listService.getList(filename).subscribe(response => {
          this.croFiles = response;
        });
      }
    });
  }
  downloadPdf(): void {
    const pdfUrl = 'http://localhost:8081/cro-files/generate-pdf/022.000.001.031.MAD?page=1&pageSize=10';
    const filename = 'data.pdf';

    this.http.get(pdfUrl, { responseType: 'arraybuffer' }).subscribe(
      (response) => {
        const blob = new Blob([response], { type: 'application/pdf' });
        saveAs(blob, filename);
      },
      (error) => {
        console.error('Erreur lors du téléchargement du PDF :', error);
      }
    );
  }
  downloadExcel(): void {
    const excelUrl = 'http://localhost:8081/cro-files/downloadExcel/022.000.001.031.MAD'; // Mettez à jour l'URL avec les bons paramètres
    const filename = 'data.xlsx';

    this.http.get(excelUrl, { responseType: 'arraybuffer' }).subscribe(
      (response) => {
        const blob = new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        saveAs(blob, filename);
      },
      (error) => {
        console.error('Erreur lors du téléchargement du fichier Excel :', error);
      }
    );
  }

}
