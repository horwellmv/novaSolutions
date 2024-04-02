import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  inOutMenu() {
    const menu = document.querySelector("#menu");
    const home = document.querySelector("#home");
    const icono = document.querySelector(".fa-solid");

    menu?.classList.toggle("hidden");
    home?.classList.toggle("hidden")
    icono?.classList.toggle("fa-xmark");
  }
}
