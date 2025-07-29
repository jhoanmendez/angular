import { Component, ViewChild, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';

import { InputTextModule } from 'primeng/inputtext';

import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';

import { PrimeNG } from 'primeng/config';

import { DatePickerModule } from 'primeng/datepicker';
import { FormsModule } from '@angular/forms';
import { FluidModule } from 'primeng/fluid';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [DialogModule, ButtonModule, InputTextModule, CalendarModule, DropdownModule, DatePickerModule, FormsModule, FluidModule],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
constructor(private primeng: PrimeNG) {}

    ngOnInit() {
        this.primeng.ripple.set(true);
        this.primeng.zIndex = {
            modal: 1100,    // dialog, sidebar
            overlay: 1000,  // dropdown, overlaypanel
            menu: 1000,     // overlay menus
            tooltip: 1100   // tooltip
        };
    }

    visible: boolean = false;

      date1: Date | undefined;

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

    relationshipOptions = [
        { label: 'Soltero', value: 'single' },
        { label: 'Casado', value: 'married' },
        { label: 'Divorciado', value: 'divorced' },
        { label: 'Viudo', value: 'widowed' }
    ];


}

