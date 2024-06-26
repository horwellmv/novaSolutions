import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  inOutMenu() {
    const menu = document.querySelector("#menu");
    //selectores ID para ocultar los componentes al mostrar el Menu
    //Agregando la clase Hidden - hacer con cada componente.
    const home = document.querySelector("#home");
    const services = document.querySelector("#services");
    const team = document.querySelector("#team");
    const footer = document.querySelector("#footer");

    const icono = document.querySelector(".fa-bars");

    menu?.classList.toggle("hidden");
    home?.classList.toggle("hidden");
    services?.classList.toggle("hidden");
    team?.classList.toggle("hidden");
    footer?.classList.toggle("hidden");

    icono?.classList.toggle("fa-xmark");
  }
}
