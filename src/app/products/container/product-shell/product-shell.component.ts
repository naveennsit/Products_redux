import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/internal/Observable";
import {select, Store} from "@ngrx/store";

import * as fromProduct from './../../state';

import {ProductService} from "../../product.service";
import * as fromApp from "../../../app.state"
import * as productActions from "../../state/product.action"
import {Product} from "../../product";
import {EditProductInterface} from "../../components/list-component/list-component.component";


@Component({
  selector: 'app-product-shell',
  templateUrl: './product-shell.component.html',
  styleUrls: ['./product-shell.component.css']
})
export class ProductShellComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(private productService: ProductService,
              private store: Store<fromApp.AppState>) {
  }


  ngOnInit() {
    this.store.dispatch(new productActions.Load());
    this.products$ = this.store.pipe(select(fromProduct.getProducts))
  }

  handleEditButtonHandler(editProduct: EditProductInterface) {
   console.log(editProduct);
   this.store.dispatch(new productActions.EditProduct(editProduct));
  }

  handleDeleteButtonHandler(product:Product){
    this.store.dispatch(new productActions.DeleteProduct(product.id));
  }

}
