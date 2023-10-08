import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { globalConstants } from 'src/app/Shared/constants';
import { DataTransferService } from 'src/app/Shared/services/data-transfer.service';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  constructor(public fb: FormBuilder, private dt: DataTransferService) {}

  ngOnInit() {
    this.setupForm();
  }

  contactForm: FormGroup = new FormGroup({});

  submitted: boolean = false;

  submitButtonFalselyTriggered = false;

  setupForm() {
    this.contactForm = this.fb.group({
      Name: ['', [Validators.required]],
      Email: [
        '',
        [Validators.required, Validators.pattern(globalConstants.EMAIL)],
      ],
      PhoneNumber: [
        '',
        [Validators.required, Validators.pattern(globalConstants.CONTACT_NO)],
      ],
      Message: [''],
    });
  }

  onsubmit() {
    if (this.contactForm.invalid) {
      this.submitButtonFalselyTriggered = true;

      this.submitted = false;
      return false;
    } else {
      this.submitted = true;
      this.submitButtonFalselyTriggered = false;
      const formData = this.contactForm.value;
      this.dt.postData(formData).subscribe((data) => {
        console.log(data);
      });
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

  get MessageControl() {
    return this.contactForm.get('Message');
  }
}
