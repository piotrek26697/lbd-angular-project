import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AnimalService } from 'src/app/app-services/animal.service';
import { Animal } from '../animal/animal';
import { Location } from '@angular/common';
import { CareTakerService } from 'src/app/app-services/care-taker.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.css']
})
export class AddAnimalComponent implements OnInit {
  animalForm = new FormGroup({
    name: new FormControl('', Validators.required),
    age: new FormControl('', [Validators.required, Validators.min(1)]),
    weight: new FormControl('', [Validators.required, Validators.min(1)]),
    description: new FormControl(''),
    category: new FormControl('', Validators.required)
  });

  constructor(private animalService: AnimalService, private location: Location,
    private careTaker: CareTakerService, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onSubmit() {
    this.postAnimal();
  }

  postAnimal() {
    const consumption = this.careTaker.calculateFoodIntake(this.animalForm.value.weight);
    const animal = new Animal({
      name: this.animalForm.value.name,
      age: this.animalForm.value.age,
      description: this.animalForm.value.description,
      category: this.animalForm.value.category,
      weight: this.animalForm.value.weight,
      consumptionPerDay: consumption
    });
    const myObserver = {
      next: x => {
        this.showMessage("Added new inhabitant");
        this.goBack()
      },
      error: err => this.showMessage("An error occured")
    };

    this.animalService.postAnimal(animal).subscribe(myObserver);
  }

  showMessage(message: string) {
    this.snackBar.open(message, '', { duration: 2000 });
  }

  goBack() {
    this.location.back();
  }

  get name() {
    return this.animalForm.get("name");
  }
  get age() {
    return this.animalForm.get("age");
  }
  get category() {
    return this.animalForm.get("category")
  }
  get weight() {
    return this.animalForm.get("weight")
  }
}
