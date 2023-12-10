import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  atencionAlClientePath = "/assets/images/atencionAlCliente.svg"
  phoneIconPath= "/assets/images/icons/phone.svg";
  mailIconPath= "/assets/images/icons/mail.svg";

  phoneNumber:string = "+5492235988854";
  contactMail:string = "ce.culturaeducativa@gmail.com";

  constructor(private clipboard: Clipboard) { }

  ngOnInit(): void {
  }

  getPhoneNumber(): string {
    return this.phoneNumber;
  }

  getContactMail(): string {
    return this.contactMail;
  }

}
