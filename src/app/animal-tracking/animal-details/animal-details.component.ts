import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { AnimalService } from 'src/app/app-services/animal.service';
import { Animal } from '../animal/animal';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.css']
})
export class AnimalDetailsComponent implements OnInit {
  private animal: Animal;

  constructor(private animalService: AnimalService, private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get("id");
    this.animalService.getAnimal(id).subscribe(a => this.animal = a);
  }

  goBack(): void {
    this.location.back();
  }

  updateAnimal(): void {
    if (this.animal)
      this.animalService.updateAnimal(this.animal).subscribe();
  }

  deleteAnimal(): void {
    if (this.animal)
      this.animalService.deleteAnimal(this.animal).subscribe();
  }
}
