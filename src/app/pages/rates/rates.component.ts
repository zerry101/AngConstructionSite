import { Component } from '@angular/core';
import {  FormGroup, FormBuilder,Validators } from '@angular/forms';
import { globalConstants } from 'src/app/Shared/constants';



@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.scss']
})
export class RatesComponent {

  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.setupForm();
  }

  contactForm: FormGroup = new FormGroup({});

  submitted:boolean=false;

  submitButtonFalselyTriggered=false;

  setupForm() {
    this.contactForm = this.fb.group({
      Name: ["",[Validators.required]],
      Email: ["",[Validators.required,Validators.pattern(globalConstants.EMAIL)]],
      PhoneNumber: ["",[Validators.required,Validators.pattern(globalConstants.CONTACT_NO)]],
    })


  }

  onsubmit(){
    if(this.contactForm.invalid){
      this.submitButtonFalselyTriggered=true

      this.submitted=false;
      return false;
    }
    else{
      this.submitted=true;
      this.submitButtonFalselyTriggered=false;
      console.log(this.contactForm.value);
      console.log(this.contactForm.status);
      this.contactForm.reset();

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



}
