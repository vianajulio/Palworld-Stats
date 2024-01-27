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

    // async getAllPals(): Promise<Pal[]> {
    //     const corsHeaders = new Headers({
    //         'Origin': 'http://localhost:3000/pals', // Substitua pelo seu domínio Angular
    //         'Access-Control-Allow-Origin': '*', // Pode ajustar conforme necessário
    //     });

    //     const options: RequestInit = {
    //         method: 'GET',
    //         headers: corsHeaders,
    //         mode: 'cors',
    //         cache: 'no-cache',
    //     };

    //     try {
    //         const response = await fetch(this.url, options);

    //         if (!response.ok) {
    //             throw new Error(`Erro na requisição: ${response.statusText}`);
    //         }

    //         const data = await response.json();
    //         console.log('Dados recebidos do servidor: ', data);
    //         return data ?? [];
    //     } catch (error) {
    //         console.error('Erro ao obter dados:', error);
    //         throw error;
    //     }
    // }

}