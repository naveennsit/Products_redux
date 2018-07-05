import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/internal/Observable";
import {select, Store} from "@ngrx/store";

import * as fromProduct from './../../state';

import {ProductService} from "../../product.service";
import * as fromApp from "../../../app.state"
import * as productActions from "../../state/product.action"
import {Product} from "../../product";
import {EditProductInterface} from "../../components/list-component/list-component.component";
import {Router} from "@angular/router";

import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-product-shell',
  templateUrl: './product-shell.component.html',
  styleUrls: ['./product-shell.component.css']
})
export class ProductShellComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(private productService: ProductService,
              private router :Router,
              private store: Store<fromApp.AppState>) {
  }


  ngOnInit() {
    console.log(environment.production)
    this.store.dispatch(new productActions.Load());
    this.products$ = this.store.pipe(select(fromProduct.getProducts))
  }

  handleEditButtonHandler(editProduct: EditProductInterface) {
   this.store.dispatch(new productActions.EditProduct(editProduct));
   this.router.navigate(['edit'])
  }

  handleDeleteButtonHandler(product:Product){
    this.store.dispatch(new productActions.DeleteProduct(product.id));
  }

}
