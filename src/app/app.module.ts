import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import {myAngularMaterialModule} from './material/angular-material.module';
import { StockComponent } from './stock/stock.component';
import { HomeRoutingModule} from './home/home-routing.module';
import { AddComponent } from './stock/add/add.component';


const ROUTES = [

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  { 
    path: '', 
    redirectTo: '/login',
    pathMatch: 'full' 
  },
]




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    StockComponent,
    AddComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    HomeRoutingModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule,
    myAngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
