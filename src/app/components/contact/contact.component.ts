import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EmailService } from '../../providers/email';
import swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form:FormGroup;
  messageWarning:string;
  messageFlag:boolean = false;

  constructor(public emailService:EmailService) {
    this.form = new FormGroup({
      'name': new FormControl(),
      'phone': new FormControl(),
      'message': new FormControl(),
      'subject': new FormControl(),
    })
  }

  ngOnInit() {
  }

  submitForm(){
    if(!this.messageFlag){
      if(!this.form.get("name").value){
        this.messageWarning = "Debes ingresar un nombre";
        return;
      }
      if(!this.form.get("phone").value){
        this.messageWarning = "Debes ingresar un número para que podamos contactarte";
        return;
      }
      if(!this.form.get("message").value){
        this.messageWarning = "El mensaje está vacio";
        return;
      }
      this.messageWarning = "";
      this.messageFlag = true;

      let data = {
        name: this.form.get("name").value,
        phone: this.form.get("phone").value,
        message:this.form.get("message").value,
        subject: this.form.get("subject").value,
      }

      this.emailService.sendBackend(data).subscribe((response) =>{
        swal({
          title: 'Muchas gracias',
          text: 'Se ha enviado el mensaje, pronto te contestaremos!',
          type: 'success',
        })
      })
    }else{
      this.messageWarning = "Ya se ha enviado el mensaje..."
    }
  }

}
