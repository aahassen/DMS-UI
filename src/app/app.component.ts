import { Component } from '@angular/core';
import { Document } from './document/document.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  documents: Document[];
  file: File;
  image: string;
  constructor() {
    this.documents = [
      new Document(null, 'Buidling Microserivce', 'Download this file', "Author 1"),
      new Document(null, 'Spring boot', 'Download this file', "Author 2"),
      new Document(null, 'Angular 6', 'Downlod this file', "Author 3")
    ];
  }

  addDocument(file: File, author: HTMLInputElement, tags: HTMLInputElement): boolean {
    //console.log(`Adding document author: ${author.value} and tags: ${tags.value}`);
    this.documents.push(new Document(null, author.value, tags.value, "some tags"));
    author.value = '';
    tags.value = '';
    let formData: FormData = new FormData();
    return false;
  }

  sortedDocuments(): Document[] {
    return this.documents;
  }

  uploadFile(fileInput: any) {
     this.file = fileInput.target.files[0];
    console.log(this.file);

  }
}
