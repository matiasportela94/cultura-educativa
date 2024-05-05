import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actualizaciones',
  templateUrl: './actualizaciones.component.html',
  styleUrls: ['./actualizaciones.component.scss']
})
export class ActualizacionesComponent implements OnInit {

  certificateIconPath:string = "/assets/images/icons/certificate.png";
  quickClockIconPath:string = "/assets/images/icons/other-quick-clock.png";
  pointsIconPath:string = "/assets/images/icons/plus-points.png";
  diplomaHeaderImage:string = "/assets/images/licenciaturas.png";
  mapaDiplomaturaImage:string ="/assets/images/mapa-diplomatura.png";
  escarapelaIconPath:string ="/assets/images/icons/escarapela.svg";
  onlineIconPath:string ="/assets/images/online.png";
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
