import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AnimalService } from 'src/app/app-services/animal.service';
import { Animal } from '../animal/animal';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.css']
})
export class AddAnimalComponent implements OnInit {
  animalForm = new FormGroup({
    name: new FormControl('', Validators.required),
    age: new FormControl('', Validators.min(1)),
    description: new FormControl(''),
    category: new FormControl('', Validators.required)
  });

  constructor(private animalService: AnimalService, private location: Location) { }

  ngOnInit() {
  }

  onSubmit() {
    const animal = new Animal({
      name: this.animalForm.value.name,
      age: this.animalForm.value.age,
      description: this.animalForm.value.description,
      category: this.animalForm.value.category
    });
    this.animalService.postAnimal(animal).subscribe(a => this.goBack());
  }

  goBack() {
    this.location.back();
  }
}
