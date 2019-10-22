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
  @HostBinding('attr.class') cssClass = 'row';
  @Input() documents: Document[];

  ngOnInit() {
  }

}
