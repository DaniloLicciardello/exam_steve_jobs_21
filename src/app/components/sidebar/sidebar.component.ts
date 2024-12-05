import { Component } from '@angular/core';
import { Contact, contacts, Message } from 'src/assets/data/contact';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  isCollapsed = false;
  contacts: Contact[] = [];
  isContactSelected: boolean = false;
  selectedContact: any = null;
  newMessageContent: string = '';
  isDrawerVisible: boolean = false;
  newChat: boolean = false;
  searchQuery: string = '';
  filteredContacts = [...this.contacts];

  ngOnInit() {
    this.contacts = contacts;

    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      this.contacts = JSON.parse(storedContacts);
    } else {
      // Se non ci sono dati nel localStorage, carica i contatti di default (se disponibili)
      this.contacts = contacts;
    }

    this.filterContacts();
  }

  selectContact(contact: Contact) {
    this.selectedContact = contact;
    this.isContactSelected = true;
  }

  sendMessage(): void {
    if (!this.newMessageContent.trim() || !this.selectedContact) {
      return;
    }

    const newMessage: Message = {
      id: this.selectedContact!.messages.length + 1,
      sender: 'me',
      content: this.newMessageContent,
      timestamp: new Date().toISOString(),
    };

    this.selectedContact!.messages.push(newMessage);
    this.newMessageContent = '';

    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }

  filterContacts() {
    if (this.searchQuery.trim()) {
      this.filteredContacts = this.contacts.filter((contact) =>
        contact.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredContacts = [...this.contacts];
    }
  }

  startChat(contact: Contact) {
    console.log('Avviata chat con', contact);
    // Aggiungi la logica per iniziare la conversazione
    this.newChat = false; // Chiudi il drawer
  }
}
