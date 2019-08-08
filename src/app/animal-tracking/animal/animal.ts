export interface AnimalAttributes {
    id: number;
    name: string;
    age: number;
    description: string;
    category: string;
    weight: number;
    consumptionPerDay: number;
}

export class Animal {
    id: number;
    name: string;
    age: number;
    description: string;
    category: string;
    weight: number;
    consumptionPerDay: number;

    constructor(animal: Partial<AnimalAttributes>) {
        this.id = animal.id;
        this.name = animal.name;
        this.age = animal.age;
        this.description = animal.description;
        this.category = animal.category;
        this.weight = animal.weight;
        this.consumptionPerDay = animal.consumptionPerDay;
    }

    toString(): string {
        return this.name + " (" + this.category + ")";
    }
}
