import { Component, NgZone, inject } from '@angular/core';
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

  constructor() {
    this.palService.getAllPals().then((pals: Pal[]) => (this.palList = pals));
  }


  getOne(): Pal[] {
    const palsData = this.palService.defaultListPals(this.palList)
    // console.log(palsData)
    return palsData
  }
  // getSuitability(suitability: Array<Map<string, number>>) {
  //   let finalSuitability = this.setDefaultValues(suitability)

  //   return finalSuitability;

  // }
}
