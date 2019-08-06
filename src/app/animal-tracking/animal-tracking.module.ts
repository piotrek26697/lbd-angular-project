import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalTrackingRoutingModule } from './animal-tracking-routing.module';
import { AnimalComponent } from './animal/animal.component';


@NgModule({
  declarations: [AnimalComponent],
  imports: [
    CommonModule,
    AnimalTrackingRoutingModule
  ],
  exports: [
    AnimalComponent
  ]
})
export class AnimalTrackingModule { }
