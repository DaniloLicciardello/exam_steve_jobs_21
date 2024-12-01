import { Component } from '@angular/core';

interface selectNav {
  label: string;
  value: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isMobile = window.innerWidth < 768;
  selectedValue = null;

  selectNav: selectNav[] = [
    { label: 'Milano', value: 'Milano' },
    { label: 'Roma', value: 'Roma' },
    { label: 'Catania', value: 'Catania' }
  ]

  change(value: boolean): void {
    console.log(value);
  }
}
