import { Component } from '@angular/core';
import { ResumeProfileComponent } from "../resume-profile/resume-profile.component";
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { Dialog } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { AvatarModule } from 'primeng/avatar';
import { TreeTableModule } from 'primeng/treetable';
import { TreeNode } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';







@Component({
  selector: 'app-hojas-de-vida',
  templateUrl: './hojas-de-vida.component.html',
  styleUrl: './hojas-de-vida.component.scss',
           imports: [ButtonModule]
,

  standalone: true
})
export class HojasDeVidaComponent {
 
}

