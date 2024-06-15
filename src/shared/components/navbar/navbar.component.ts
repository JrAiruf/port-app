import { Component } from '@angular/core';
import { window } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [
    './navbar.component.css',
    './navbar.component.effect.css',
  ]
})

export class NavbarComponent {
  public clickHandler() {
    console.log("Clicooouuuuuuu")
  }
}
