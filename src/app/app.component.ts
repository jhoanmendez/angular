import { Component } from '@angular/core';
import { HojasDeVidaComponent } from './hojas-de-vida/hojas-de-vida.component';
import { NewPasswordComponent } from '../app/new-password/new-password.component'
import { HojasDeVidaComponentt } from './hojas-de-vida2/hojas-de-vida.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HojasDeVidaComponent, NewPasswordComponent, HojasDeVidaComponentt],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular';
}
