import * as frmState from '../../../app/app.state'
import {Product} from "../product";
import {DeleteProduct, ProductActions, ProductActionTypes} from "./product.action";

export interface ProductState {
  toggleCheckBox: boolean,
  products: Product[],
  error: string,
  loaded: boolean,
  selectedProduct: Product,
  selectedProductIndex: number
}

const initialState: ProductState = {
  toggleCheckBox: true,
  products: [],
  error: '',
  loaded: false,
  selectedProduct: null,
  selectedProductIndex: -1
};


export function ProductReducer(state = initialState, action: ProductActions): ProductState {
  switch (action.type) {
    case ProductActionTypes.LoadSuccess :
      return {
        ...state,
        products: [...action.payload],
        error: '',
        loaded: true
      }
    case ProductActionTypes.CreateProductSuccess :
      return {
        ...state,
        products: [...state.products, action.payload],
      }

    case ProductActionTypes.EditProduct :
      return {
        ...state,
        selectedProductIndex: action.payload.selectedIndex,
        selectedProduct: action.payload.product,
      }
    case ProductActionTypes.DeleteProduct :
      let products = state.products.filter((item)=> item.id !== action.payload)
      return {
        ...state,
        products: products

      }


    default :
      return state
  }
}


