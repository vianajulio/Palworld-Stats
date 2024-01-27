export class Pal {
    id: number;
    key: string;
    image: string;
    name: string;
    wiki: string;
    types: string[];
    imageWiki: string;
    suitability: { type: string; level: number }[];
    drops: string[];
    aura: { name: string; description: string };
    description: string;

    constructor(data: {
        id: number;
        key: string;
        image: string;
        name: string;
        wiki: string;
        types: string[];
        imageWiki: string;
        suitability: { type: string; level: number }[];
        drops: string[];
        aura: { name: string; description: string };
        description: string;
    }) {
        this.id = data.id;
        this.key = data.key;
        this.image = data.image;
        this.name = data.name;
        this.wiki = data.wiki;
        this.types = data.types;
        this.imageWiki = data.imageWiki;
        this.suitability = data.suitability;
        this.drops = data.drops;
        this.aura = data.aura;
        this.description = data.description;
    }
}