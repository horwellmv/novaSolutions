import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {

  //Debe poner borde al avatar y mostrar el contenido de parrafos, ocultando los demas.
  //Recibe los nombres de clase para ocultar y el evento.target.id para activar el especifico elemento.
  mostrarDescripcion(e: Event) {

    const teamPic = document.querySelectorAll(".team-pic");
    const teamText = document.querySelectorAll(".team-text");

    teamPic.forEach(picture => {
      picture.classList.replace("active-pic", "inactive-pic");
    })
    teamText.forEach(text => {
      text.classList.replace("active-text", "inactive-text");
    })

    let i = e.target as HTMLElement;

    i.classList.replace("inactive-pic", "active-pic");
    //Hacemos coincidir el ID de cada parrafo con el ID del evento del avatar, asi quedan relacionados en el HTML.
    teamText.forEach(text => {
      if (text.id = i.id) {
        let index = text.id as unknown as number;
        teamText[index].classList.replace("inactive-text", "active-text")
      }

    })

  }
}

