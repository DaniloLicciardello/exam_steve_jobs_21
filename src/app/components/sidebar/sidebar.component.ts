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

  ngOnInit() {
    const storedContacts = localStorage.getItem('contacts');
    this.contacts = storedContacts ? JSON.parse(storedContacts) : contacts;
    this.contacts = contacts;
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
}
