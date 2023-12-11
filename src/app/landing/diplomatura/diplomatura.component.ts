import { Component, OnInit } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-diplomatura',
  templateUrl: './diplomatura.component.html',
  styleUrls: ['./diplomatura.component.scss']
})
export class DiplomaturaComponent implements OnInit {

  certificateIconPath:string = "/assets/images/icons/certificate.png";
  diplomaHeaderImage:string = "/assets/images/diploma-guy.svg";
  mapaDiplomaturaImage:string ="/assets/images/mapa-diplomatura.png";
  escarapelaIconPath:string ="/assets/images/icons/escarapela.svg";
  onlineIconPath:string ="/assets/images/online.png";

  constructor() { }

  ngOnInit(): void {
  }

}
