import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomsRoutingModule } from './customs-routing.module';
import { BracesPipe } from './braces.pipe';


@NgModule({
  declarations: [BracesPipe],
  imports: [
    CommonModule,
    CustomsRoutingModule
  ],
  exports:[
    BracesPipe
  ]
})
export class CustomsModule { }
