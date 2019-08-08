import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';
import { AnimalComponent } from './animal/animal.component';
import { AddAnimalComponent } from './add-animal/add-animal.component';


const routes: Routes = [
  { path: 'animals', component: AnimalComponent },
  { path: 'add_animal', component: AddAnimalComponent },
  { path: "animals/:id", component: AnimalDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimalTrackingRoutingModule { }
