import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@Angular/common/http'
import { Observable, of } from 'rxjs';
import { Animal, AnimalAttributes } from '../animal-tracking/animal/animal';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private apiURL: string = "/api/animals";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  getAnimals(): Observable<Animal[]> {
    return this.httpClient.get<AnimalAttributes[]>(this.apiURL)
      .pipe(map(a => a.map(a => new Animal(a))));
  }

  getAnimal(id: number): Observable<Animal> {
    return this.httpClient.get<AnimalAttributes>(this.apiURL + `/${id}`)
      .pipe(map(a => new Animal(a)))
  }

  updateAnimal(animal: Animal): Observable<any> {
    return this.httpClient.put(this.apiURL + `/${animal.id}`, animal, this.httpOptions)
  }

  deleteAnimal(animal: Animal): Observable<any> {
    return this.httpClient.delete(this.apiURL + `/${animal.id}`, this.httpOptions);
  }
  postAnimal(animal: Animal): Observable<any>{
    return this.httpClient.post(this.apiURL, animal, this.httpOptions);
  }
}
