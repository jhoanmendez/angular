import { Component, ViewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';

import { InputTextModule } from 'primeng/inputtext';

import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';


@Component({
    selector: 'app-root',
    standalone: true,
    imports: [DialogModule, ButtonModule, InputTextModule, CalendarModule, DropdownModule],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    visible: boolean = false;

    showDialog() {
        this.visible = true;
    }

    genderOptions = [
        { label: 'Masculino', value: 'male' },
        { label: 'Femenino', value: 'female' },
        { label: 'Otro', value: 'other' }
    ];

    educationOptions = [
        { label: 'Primaria', value: 'primary' },
        { label: 'Secundaria', value: 'secondary' },
        { label: 'Universidad', value: 'university' }
    ];
    
    date2: Date | undefined;

}

