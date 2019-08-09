import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { AnimalService } from 'src/app/app-services/animal.service';
import { Animal } from '../animal/animal';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.css']
})
export class AnimalDetailsComponent implements OnInit {
  private animal: Animal;

  constructor(private animalService: AnimalService, private route: ActivatedRoute,
    private location: Location, private snackBar: MatSnackBar) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get("id");
    this.animalService.getAnimal(id).subscribe(a => this.animal = a);
  }

  goBack(): void {
    this.location.back();
  }

  showMessage(message: string) {
    this.snackBar.open(message, '', { duration: 2000 });
  }

  updateAnimal(): void {
    if (this.animal) {
      const myObserver = {
        next: x => {
          this.goBack();
          this.showMessage("Animal successfully updated");
        },
        error: err => { this.showMessage("Error occured"); }
      }
      this.animalService.updateAnimal(this.animal).subscribe(myObserver);

    }
  }

  deleteAnimal(): void {
    if (this.animal) {
      const myObserver = {
        next: x => {
          this.goBack();
          this.showMessage("Pupil deleted");
        },
        error: err => { this.showMessage("Error occured"); }
      }
      this.animalService.deleteAnimal(this.animal).subscribe(myObserver);
    }
  }
}
