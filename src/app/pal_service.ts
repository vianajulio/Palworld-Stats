import { Injectable } from "@angular/core";
import { Pal } from "./pal";

@Injectable({
    providedIn: 'root'
})
export class PalService {
    url = 'http://localhost:3000/pals'

    constructor() { }

    async getAllPals(): Promise<Pal[]> {
        const data = await fetch(this.url);



        return await data.json() ?? []
    }

    DefaultValue(pal: Pal) {
        let initialKeys: {
            type: string;
            level: number;
        }[] = [
                { type: "kindling", level: 0 },
                { type: "planting", level: 0 },
                { type: "handiwork", level: 0 },
                { type: "lumbering", level: 0 },
                { type: "medicine", level: 0 },
                { type: "transporting", level: 0 },
                { type: "watering", level: 0 },
                { type: "generating", level: 0 },
                { type: "gathering", level: 0 },
                { type: "mining", level: 0 },
                { type: "cooling", level: 0 },
                { type: "farming", level: 0 }];

        for (let i = 0; i < initialKeys.length; i++) {
            for (let j = 0; j < pal.suitability.length; j++) {
                if (initialKeys[i].type.toLowerCase() === pal.suitability[j].type.toLowerCase()) {
                    initialKeys[i].level = pal.suitability[j].level
                } else {
                    continue
                }
            }
        }
        pal.suitability = initialKeys
        return pal
    }

    defaultListPals(pals: Pal[]) {
        let palsList: Pal[] = [];
        for (let i = 0; i < pals.length; i++) {
            let newPal: Pal = this.DefaultValue(pals[i])
            palsList.push(newPal)
        }
        return palsList
    }

}