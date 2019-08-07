import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AnimalService } from 'src/app/app-services/animal.service';
import { Animal } from '../animal/animal';
import { Z_PARTIAL_FLUSH } from 'zlib';

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.css']
})
export class AddAnimalComponent implements OnInit {
  animalForm = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
    description: new FormControl(''),
    category: new FormControl('')
  });

  constructor(private animalService: AnimalService) { }

  ngOnInit() {
  }

  onSubmit(){
    const animal = new Animal({
      name: this.animalForm.value.name,
      age: this.animalForm.value.age,
      description: this.animalForm.value.description,
      category: this.animalForm.value.category
    });
    this.animalService.postAnimal(animal).subscribe();
  }
}
