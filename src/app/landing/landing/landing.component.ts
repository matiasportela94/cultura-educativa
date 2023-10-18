import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  conexionesImagePath = "/assets/images/conexiones.png"
  mapaImagePath = "/assets/images/pais.png"
  globalImagePath = "/assets/images/global.png"
  logoImagePath = "/assets/images/logo/logo-cultura-educativa.png"

  constructor() { }

  ngOnInit(): void {
  }

}
