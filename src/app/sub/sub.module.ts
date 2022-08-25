import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubComponent } from './sub';
import { SubService} from './services';



@NgModule({
  declarations: [
    SubComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SubComponent
  ],
  providers: [
    SubService
  ]

})
export class SubModule { }
