import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { PhotoComponent } from './photo/photo.component';

import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routeLists: Routes = [
  {path:"photo" ,component: PhotoComponent},
  {path:"" ,component: HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PhotoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(routeLists)
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
