import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AnimalTrackingRoutingModule } from './animal-tracking-routing.module';
import { AnimalComponent } from './animal/animal.component';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';
import { AddAnimalComponent } from './add-animal/add-animal.component';
import { CustomsModule } from '../customs/customs.module';


@NgModule({
  declarations: [AnimalComponent, AnimalDetailsComponent, AddAnimalComponent],
  imports: [
    CommonModule,
    AnimalTrackingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CustomsModule
  ],
  exports: [
    AnimalComponent,
    AnimalDetailsComponent,
    AddAnimalComponent
  ]
})
export class AnimalTrackingModule { }
