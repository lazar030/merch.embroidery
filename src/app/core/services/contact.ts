import { Injectable } from '@angular/core';
import { Contact } from 'src/app/shared/models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contract: Contact = new Contact();

  constructor() {}
}
