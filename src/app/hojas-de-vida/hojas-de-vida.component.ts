import { Component } from '@angular/core';
import { ResumeProfileComponent } from "../resume-profile/resume-profile.component";

@Component({
  selector: 'app-hojas-de-vida',
  templateUrl: './hojas-de-vida.component.html',
  styleUrl: './hojas-de-vida.component.scss',
  standalone: true,
  imports: [ResumeProfileComponent]
})
export class HojasDeVidaComponent {
  porcentajeProgreso: number = 15;
}

