import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../product";

export interface EditProductInterface {
  product:Product,
  selectedIndex:number
}
@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})

export class ListComponentComponent implements OnInit {
  @Input('products') products;
  @Output('editProduct') selectedEditProduct = new EventEmitter<EditProductInterface>();
  @Output('deleteProduct') selectDeleteProduct = new EventEmitter<Product>();

  editProductInterface:EditProductInterface;

  constructor() {
  }

  ngOnInit() {
  }

  editProduct(selectedItem:Product ,index:number){
    this.editProductInterface={
      product : selectedItem,
      selectedIndex:index
    }
    this.selectedEditProduct.emit(this.editProductInterface);
  }

  deleteProduct(product:Product){
    console.log(product);
    this.selectDeleteProduct.emit(product);

  }

}
