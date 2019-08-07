import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalComponent } from './animal-tracking/animal/animal.component';
import { AnimalDetailsComponent } from './animal-tracking/animal-details/animal-details.component';
import { AddAnimalComponent } from './animal-tracking/add-animal/add-animal.component';


const routes: Routes = [
  { path: '', redirectTo: '/animals', pathMatch: 'full' },
  { path: 'animals', component: AnimalComponent },
  { path: "animal/:id", component: AnimalDetailsComponent },
  { path: 'add_animal', component: AddAnimalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
