import { Component } from '@angular/core';
import { Contact, contacts } from 'src/assets/data/contact';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  isCollapsed = false;
  contacts: Contact[] = [];

  ngOnInit() {
    this.contacts = contacts;
  }

  // Contatto selezionato
  selectedContact: any = null;

  // Funzione per selezionare un contatto
  selectContact(contact: any) {
    this.selectedContact = contact;
  }
}
