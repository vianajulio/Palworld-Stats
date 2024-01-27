import { Component, inject } from '@angular/core';
import { Pal } from '../../pal';
import { PalService } from '../../pal_service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  palList: Pal[] = [];
  palService: PalService = inject(PalService);
  
  constructor(){
    this.palService.getAllPals().then((pals : Pal[]) => (this.palList = pals));
  }
  
}
