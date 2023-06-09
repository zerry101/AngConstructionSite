import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormBuilder } from '@angular/forms';
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

  setupForm() {
    this.contactForm = this.fb.group({
      Name: [""],
      Email: [""],
      PhoneNumber: [""],
      Message: [""]
    })


  }

  get NameControl() {
    return this.contactForm.get('Name');
  }

  get EmailControl() {
    return this.contactForm.get('Email');
  }

  get PhoneControl() {
    return this.contactForm.get('Phone');
  }

  get MessageControl() {
    return this.contactForm.get('Message');
  }



}
