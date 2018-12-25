import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Document} from "./document/document.model";

@Injectable()
export class DocumentService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8080/uploadDoc';

  getDocs() {
    return this.http.get<Document[]>(this.baseUrl);
  }

  getDoc(id: number) {
    return this.http.get<Document>(this.baseUrl + '/' + id);
  }

  saveDocument(formData: FormData) {
    console.log(formData.get('file'));
    console.log(formData.get('author'));
    console.log(formData.get('tags'));
    return this.http.post(this.baseUrl, formData);
  }

  updateDocument(document: Document) {
    return this.http.put(this.baseUrl + '/' + document.id, document);
  }

  deleteDocument(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}

