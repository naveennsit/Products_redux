import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from "@ngrx/store";


import {ProductReducer} from "./state/product.reducer";
import { ProductShellComponent } from './container/product-shell/product-shell.component';
import {RouterModule, Routes} from "@angular/router";
import {EffectsModule} from "@ngrx/effects";
import {ProductEffect} from "./state/product.effect";
import { ListComponentComponent } from './components/list-component/list-component.component';
import { AddNewComponentComponent } from './components/add-new-component/add-new-component.component';
import {ReactiveFormsModule} from "@angular/forms";

const productRoutes: Routes = [
  {path:'new',component: AddNewComponentComponent}
];
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(productRoutes),
    StoreModule.forFeature('productFeature', ProductReducer),
    EffectsModule.forFeature(
      [ ProductEffect ]
    )
  ],
  declarations: [ProductShellComponent, ListComponentComponent, AddNewComponentComponent]
})
export class ProductModule {
}
