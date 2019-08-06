import { Component, OnInit } from '@angular/core';
import { AnimalService } from 'src/app/app-services/animal.service';
import { Animal } from './animal';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {
  animals: Array<Animal>;

  constructor(private animalService: AnimalService) { }

  ngOnInit() {
    this.animalService.getAnimals().subscribe(a => this.animals=a);
  }

}
