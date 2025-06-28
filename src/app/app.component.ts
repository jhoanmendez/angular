import { Component } from '@angular/core';
import { HojasDeVidaComponent } from './hojas-de-vida/hojas-de-vida.component';
import { NewPasswordComponent } from '../app/new-password/new-password.component'
import { HojasDeVidaComponentt } from './hojas-de-vida2/hojas-de-vida.component';

@Component({
    selector: 'app-root',
    imports: [HojasDeVidaComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    standalone: true
})
export class AppComponent {
}
