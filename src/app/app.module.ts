import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SomaModule,SomaComponent } from './soma';
import { MultModule,MultComponent } from './mult';
import { SubModule,SubComponent } from './sub';
import { DivModule,DivComponent } from './div';

import {MatMenuModule} from '@angular/material/menu';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

import {
   RouterModule,
   Routes
} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  { path: 'mult', component: MultComponent},
  { path: 'soma', component: SomaComponent},
  { path: 'sub', component: SubComponent},
  { path: 'div', component: DivComponent},
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
    DivModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatMenuModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
