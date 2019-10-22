import {
  Component,
  OnInit,
  Input,        
  HostBinding
} from '@angular/core';
import { Document } from './document.model'; 

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {
  currentPage: Number = 1;
  pageSize: Number = 5;
  @HostBinding('attr.class') cssClass = 'row';
  @Input() documents: Document[];

  ngOnInit() {
  }

}
