import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NabvarService } from 'src/app/shared/components/navbar/nabvar.service';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from '../../interface/contact.interface';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact: Contact;
  language: string;

  constructor(private title: Title, private navbarService: NabvarService, private contactService: ContactService) {
    this.title.setTitle('Contáctanos');
    this.navbarService.language$.pipe(take(1)).subscribe( language => this.language = language);
  }

  ngOnInit() {
    this.getContactInfo();
  }

  async getContactInfo() {
    this.contact = await this.contactService.getContactPage(this.language).toPromise();
  }

}
