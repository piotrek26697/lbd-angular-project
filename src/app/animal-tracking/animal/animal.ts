export interface AnimalAttributes {
    id: number;
    name: string;
    age: number;
    description: string;
    category: string;
}

export class Animal {
    id: number;
    name: string;
    age: number;
    description: string;
    category: string;

    constructor(animal: Partial<AnimalAttributes>) {
        this.id = animal.id;
        this.name = animal.name;
        this.age = animal.age;
        this.description = animal.description;
        this.category = animal.category;
    }

    toString(): string {
        return this.name + " (" + this.category + ")";
    }
}
