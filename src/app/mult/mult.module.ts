import { MultService } from './services';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultComponent } from './mult';



@NgModule({
  declarations: [
    MultComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MultComponent
  ],
  providers: [
    MultService
  ]
})
export class MultModule { }
