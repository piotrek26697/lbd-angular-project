import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CareTakerService {

  constructor() { }

  calculateFoodIntake(weight: number): number {
    return Math.round(weight / 4 * 100) / 100;
  }
}
