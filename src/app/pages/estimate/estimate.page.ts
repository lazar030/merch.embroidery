import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Intercom } from 'ng-intercom';
import { ContactService } from 'src/app/core/services/contact';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estimate',
  templateUrl: './estimate.page.html',
  styleUrls: ['./estimate.page.scss']
})
export class EstimatePage {
  title: string = 'CUSTOM EMBROIDERY ESTIMATE';

  placeholder: string =
    'What type of apparel do you need embroidered? Do you have a design image or logo? are you a business, school, or sports team?';

  placeholder2: string =
    'Do you have a design ready image or logo for your patch? What kind of patch backing do you need? Are you a business, school, or sports team?';

  label: string = 'How Many Patches Do You Need? 8 Patch Minimum (Optional)';

  isActive: boolean = false;

  form: FormGroup;
  submitted = false;

  constructor(
    private router: Router,
    public _FB: FormBuilder,
    public intercom: Intercom,
    private contactService: ContactService
  ) {
    this.form = this._FB.group({
      email: [
        this.contactService.contract.email,
        [Validators.email, Validators.required]
      ],
      name: [this.contactService.contract.name, [Validators.required]],
      project: [this.contactService.contract.project],
      quantity: [this.contactService.contract.quantity, [Validators.min(1)]],
      phone: [this.contactService.contract.phone],
      image: [this.contactService.contract.image]
    });
  }

  get email() {
    return this.form.get('email');
  }

  get name() {
    return this.form.get('name');
  }

  get qnt(): any {
    return this.form.get('quantity');
  }

  onSubmit(form: FormGroup) {
    const id = Date.now();

    this.submitted = true;
    console.log(form);

    this.contactService.contract = {
      name: form.value.name,
      email: form.value.email,
      phone: form.value.phone,
      project: form.value.project,
      image: form.value.image,
      quantity: form.value.quantity
    };

    this.router.navigate([`/contact/view/${id}`]);
  }

  openChat(chat) {
    chat.intercom.show();
  }

  plus() {
    console.log(this.qnt);
    this.qnt.value = this.qnt.value + 1;
    this.qnt.setValue(this.qnt.value);
  }

  minus() {
    if (this.qnt.value > 1) {
      this.qnt.value = this.qnt.value - 1;
      this.qnt.setValue(this.qnt.value);
    }
  }
}
