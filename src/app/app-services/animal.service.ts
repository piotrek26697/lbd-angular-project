import { Injectable } from '@angular/core';
import { HttpClient } from '@Angular/common/http'
import { Observable } from 'rxjs';
import { Animal, AnimalAttributes } from '../animal-tracking/animal/animal';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private apiURL: string = "/api/animals";

  constructor(private httpClient: HttpClient) { }

  getAnimals(): Observable<Animal[]> {
    return this.httpClient.get<AnimalAttributes[]>(this.apiURL)
      .pipe(map(a => a.map(a => new Animal(a))));
  }

}
