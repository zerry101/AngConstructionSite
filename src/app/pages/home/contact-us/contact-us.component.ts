import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormBuilder,Validators } from '@angular/forms';
import { globalConstants } from 'src/app/Shared/constants';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.setupForm();
  }

  contactForm: FormGroup = new FormGroup({});

  submitted:boolean=false;

  setupForm() {
    this.contactForm = this.fb.group({
      Name: ["",[Validators.required]],
      Email: ["",[Validators.required,Validators.pattern(globalConstants.EMAIL)]],
      PhoneNumber: ["",[Validators.required,Validators.pattern(globalConstants.CONTACT_NO)]],
      Message: [""]
    })


  }

  onsubmit(){

    this.submitted=true;
    if(this.contactForm.invalid){
      return false;
    }
    else{
      console.log(this.contactForm.value);
      this.submitted?this.contactForm.reset():false;
      return;
    }

  }

  get NameControl() {
    return this.contactForm.get('Name');
  }

  get EmailControl() {
    return this.contactForm.get('Email');
  }

  get PhoneNumberControl() {
    return this.contactForm.get('PhoneNumber');
  }

  get MessageControl() {
    return this.contactForm.get('Message');
  }



}
