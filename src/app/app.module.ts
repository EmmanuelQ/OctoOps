import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';




const ROUTES = [

  {
    path: 'login',
    component: LoginComponent
  },
  { 
    path: '', 
    redirectTo: '/login',
    pathMatch: 'full' },
]




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
