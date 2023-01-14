
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { faDollar  } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare  } from '@fortawesome/free-solid-svg-icons';
import { ApiClientService } from '../api-client.service';

import { Application } from '../interfaces/Application';

@Component({
  selector: 'app-application-item',
  templateUrl: './application-item.component.html',
  styleUrls: ['./application-item.component.css']
})
export class ApplicationItemComponent implements OnInit {

  @Input() applicationItems!: Application[]
  @Input() title!: String

  @Output() deleteApplicationEvent = new EventEmitter()

  faPencil = faPencil;
  faTrashCan = faTrashCan;
  faPaperclip = faPaperclip;
  faDollar=faDollar;
  faPenToSquare=faPenToSquare;

  constructor(private Router: Router, private apiClient: ApiClientService) { }
  ngOnInit(): void {

  }

  handleDetails(id: String) {
    this.Router.navigate([`application/${id}`]);
  }

  handleDelete(id: String) {
    this.apiClient.deleteApplication(id).subscribe(() => this.deleteApplicationEvent.emit(id));
  }

  handleUpdate(id: String) {
    this.Router.navigate([`updateApplication/${id}`]);
  }
}
