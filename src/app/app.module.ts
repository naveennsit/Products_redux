import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {HttpClientModule} from "@angular/common/http";

import {ProductData}from './products/product.data'
import { AppComponent } from './app.component';
import {environment} from "../environments/environment";
import {ProductModule} from "./products/product.module";
import {RouterModule, Routes} from "@angular/router";
import {ProductShellComponent} from "./products/container/product-shell/product-shell.component";


const appRoutes: Routes = [
  {
    path: '', component: ProductShellComponent , pathMatch :"full"
  }

];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    ProductModule,
    RouterModule.forRoot(appRoutes),
    HttpClientInMemoryWebApiModule.forRoot(ProductData),
    StoreDevtoolsModule.instrument({
      name: 'APM Demo App DevTools',
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
