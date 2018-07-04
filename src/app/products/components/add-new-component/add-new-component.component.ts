import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import * as fromApp from "../../../app.state";
import * as fromProduct from "../../state";
import {Product} from "../../product";
import {ProductService} from "../../product.service";
import {CreateProduct} from "../../state/product.action";
import {Observable} from "rxjs/internal/Observable";


@Component({
  selector: 'app-add-new-component',
  templateUrl: './add-new-component.component.html',
  styleUrls: ['./add-new-component.component.css']
})
export class AddNewComponentComponent implements OnInit {
  product: Product;
  productForm: FormGroup;
  product$:Observable<Product>;


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
    this.store.pipe(select(fromProduct.getSelectedProduct)).subscribe((res:Product)=>{
      if(res) {
        this.productForm.patchValue(res);
      }
    })
  }



  onAdded() {
    this.product = this.productForm.value;
    this.store.dispatch(new CreateProduct(this.product));
  }

}
