import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  emailCopiedToClipboardMessage:string = "Email copiado al portapapeles!";
  phoneCopiedToClipboardMessage:string = "Telefono copiado al portapapeles!";
  copiedToClipboardAction:string = "Cerrar";
  durationInSeconds = 5;

  constructor(private clipboard: Clipboard, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  getPhoneNumber(): string {
    return this.phoneNumber;
  }

  getContactMail(): string {
    return this.contactMail;
  }

  showCopyToClipboardSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      panelClass: "success-dialog",
      duration: this.durationInSeconds * 1000
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}

