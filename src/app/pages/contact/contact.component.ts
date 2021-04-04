import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NabvarService } from 'src/app/shared/components/navbar/nabvar.service';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from 'src/app/core/interface/contact.interface';
import { take } from 'rxjs/operators';

/**
 * Componente encargado de renderizar la página de contacto, este tipo de componente
 * es considerado módulo ya que actua como ruta principal.
 */
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

  /**
   * Método asincorono encargado de obtener la información de la página de contacto y asignarlo a la variable [contact]{@link #contact},
   * este se ejecuta una vez la página ha iniciado la carga.
   */
  async getContactInfo() {
    this.contact = await this.contactService.getContactPage(this.language).toPromise();
  }

}
