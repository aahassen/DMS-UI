
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Component, OnInit } from '@angular/core';
import { Document } from './document/document.model';
import {DocumentService} from './document.service';
import {first} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  documents: Document[];
  file: File;
  image: string;
  constructor(private formBuilder: FormBuilder, private  documentService: DocumentService) {
    this.documents = [
      new Document(null, 1, 'Buidling Microserivce', 'Download this file', "Author 1"),
      new Document(null, 2, 'Spring boot', 'Download this file', "Author 2"),
      new Document(null, 3, 'Angular 6', 'Downlod this file', "Author 3")
    ];
  }
  
  addForm: FormGroup;

  addDocument(file: File, author: HTMLInputElement, tags: HTMLInputElement): boolean {
    //console.log(`Adding document author: ${author.value} and tags: ${tags.value}`);
    this.documents.push(new Document(null, 4, author.value, tags.value, "some tags"));
  
    let formData: FormData = new FormData();
    formData.append('file', this.file);
    formData.append('author', author.value);
    formData.append('file', tags.value);
    //
    author.value = '';
    tags.value = '';
    this.documentService.saveDocument(formData)
    .subscribe( data => {
      //this.documents = data;
    });

    //
    return false;
  }

  sortedDocuments(): Document[] {
    return this.documents;
  }

  uploadFile(fileInput: any) {
     this.file = fileInput.target.files[0];
    //console.log(this.file);
  }

  ngOnInit() {

    this.addForm = this.formBuilder.group({
   
    });

  }

onSubmit() {
    this.documentService.saveDocument(this.addForm.value)
      .subscribe( data => {
        //this.documents = data;
      });
  }
}
