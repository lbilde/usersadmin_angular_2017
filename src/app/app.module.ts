import { InMemoryDataService } from './in-memory-data.service';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, XHRBackend, BrowserXhr,
         ResponseOptions,  XSRFStrategy} from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { InMemoryWebApiModule, InMemoryDbService } from 'angular-in-memory-web-api';


//Userservice Mock or not?

import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';

const routes: Routes = [];

let modules = [
    BrowserModule,
    FormsModule,
    HttpModule,
    UsersModule,
    RouterModule.forRoot(routes),
    
];

if(!environment.production){
  modules.push(InMemoryWebApiModule.forRoot(InMemoryDataService));
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: modules,
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
