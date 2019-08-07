import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AnimalTrackingRoutingModule } from './animal-tracking-routing.module';
import { AnimalComponent } from './animal/animal.component';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';
import { AddAnimalComponent } from './add-animal/add-animal.component';


@NgModule({
  declarations: [AnimalComponent, AnimalDetailsComponent, AddAnimalComponent],
  imports: [
    CommonModule,
    AnimalTrackingRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AnimalComponent,
    AnimalDetailsComponent,
    AddAnimalComponent
  ]
})
export class AnimalTrackingModule { }
