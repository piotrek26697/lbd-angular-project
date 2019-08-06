import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalComponent } from './animal-tracking/animal/animal.component';


const routes: Routes = [
  { path: '', redirectTo: '/animals', pathMatch: 'full' },
  { path: 'animals', component: AnimalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
