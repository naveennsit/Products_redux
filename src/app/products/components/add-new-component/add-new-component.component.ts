import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";

import * as fromApp from "../../../app.state";
import {Product} from "../../product";
import {ProductService} from "../../product.service";
import {CreateProduct} from "../../state/product.action";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-add-new-component',
  templateUrl: './add-new-component.component.html',
  styleUrls: ['./add-new-component.component.css']
})
export class AddNewComponentComponent implements OnInit {
  product: Product;
  productForm: FormGroup;

  constructor(private store: Store<fromApp.AppState>,
              private fb: FormBuilder,
              private productService: ProductService) {
    this.productForm = this.fb.group({
      productName: '',
      id: '',
      starRating: '',
      productCode: '',
      description: ''
    })
  }

  ngOnInit() {

  }

  onAdded() {
    this.product = this.productForm.value;
    this.store.dispatch(new CreateProduct(this.product));
  }

}
