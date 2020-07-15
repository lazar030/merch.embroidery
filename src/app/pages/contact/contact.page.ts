import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/core/services/contact';

@Component({
  selector: 'my-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss']
})
export class ContactPage implements OnInit {
  title: string = 'EMBROIDERY PATCH ESTIMATION';

  constructor(public contactService: ContactService) {}

  ngOnInit() {}
}
