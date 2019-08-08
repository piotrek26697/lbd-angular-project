import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomsRoutingModule } from './customs-routing.module';
import { BracesPipe } from './braces.pipe';
import { HighlightDirective } from './highlight.directive';


@NgModule({
  declarations: [BracesPipe, HighlightDirective],
  imports: [
    CommonModule,
    CustomsRoutingModule
  ],
  exports:[
    BracesPipe,
    HighlightDirective
  ]
})
export class CustomsModule { }
