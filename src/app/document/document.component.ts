import {
  Component,
  OnInit,
  Input,        // <-- added,
  HostBinding
} from '@angular/core';
import { Document } from './document.model'; // <-- added

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() documents: Document[];

  constructor() {
    // document is populated by the Input now,
    // so we don't need anything here
  }

  ngOnInit() {
  }

}
