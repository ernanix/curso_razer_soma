import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SomaModule,SomaComponent } from './soma';
import { MultModule,MultComponent } from './mult';
import { SubModule,SubComponent } from './sub';

import {
   RouterModule,
   Routes
} from '@angular/router';

const routes: Routes = [
  { path: 'mult', component: MultComponent},
  { path: 'soma', component: SomaComponent},
  { path: 'sub', component: SubComponent}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SomaModule,
    MultModule,
    SubModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
