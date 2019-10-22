
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
    this.documents = this.getDocs();
  }
  
  addForm: FormGroup;

  addDocument(file: File, author: HTMLInputElement, tags: HTMLInputElement): boolean {
    //console.log(`Adding document: ${author.value} and tags: ${tags.value}`);
    let formData: FormData = new FormData();
    formData.append('file', this.file);
    formData.append('author', author.value);
    formData.append('tags', tags.value);
 
    this.documentService.saveDocument(formData)
    .subscribe( data => {
      //do something on the data
    });

    return false;
  }

  getDocs(): Document[] {
    this.documentService.getDocs()
    .subscribe( data => {
      this.documents = data;
    });

    return this.documents;
  }

  uploadFile(fileInput: any) {
     this.file = fileInput.target.files[0];
  }

  ngOnInit() {

    this.addForm = this.formBuilder.group({
   
    });

  }
}
