import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  conexionesImagePath = "/assets/images/circuito-cultura.png"
  mapaImagePath = "/assets/images/pais.png"
  bannerPath = "/assets/images/bannerCultura.svg"
  globalImagePath = "/assets/images/global.png"
  logoImagePath = "/assets/images/logo/logo-cultura.png"

  constructor() { }

  ngOnInit(): void {
  }

}
