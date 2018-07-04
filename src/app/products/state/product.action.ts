import {Action} from "@ngrx/store";

import {Product} from "../product";
import {EditProductInterface} from "../components/list-component/list-component.component";

export enum ProductActionTypes {
  Load = '[Product] Load',
  LoadSuccess = '[Product] Load Success',
  LoadFail = '[Product] Load Fail',
  LoadedFromStore = '[Product] Loaded from store',

  CreateProduct = '[Product] create product',
  CreateProductSuccess = '[Product] create product success',
  CreateProductFail = '[Product] create product fail',

  EditProduct = '[Product] edit product',

  DeleteProduct = '[Product] delete product'

}


export class Load implements Action {
  readonly type = ProductActionTypes.Load;

  constructor() {
  }
}

export class LoadSuccess implements Action {
  readonly type = ProductActionTypes.LoadSuccess;

  constructor(public payload: Product[]) {
  }
}

export class LoadFail implements Action {
  readonly type = ProductActionTypes.LoadFail;

  constructor(public payload: string) {
  }

}

export class LoadedFromStore implements Action {
  readonly type = ProductActionTypes.LoadedFromStore;

  constructor() {
  }

}


export class CreateProduct implements Action {
  readonly type = ProductActionTypes.CreateProduct;

  constructor(public payload: Product) {
  }
}

export class CreateProductSuccess implements Action {
  readonly type = ProductActionTypes.CreateProductSuccess;

  constructor(public payload: Product) {
  }
}

export class CreateProductFail implements Action {
  readonly type = ProductActionTypes.CreateProductFail;

  constructor(public payload: string) {
  }
}


export class EditProduct implements Action {
  readonly type = ProductActionTypes.EditProduct;

  constructor(public payload: EditProductInterface) {
  }
}

export class DeleteProduct implements Action {
  readonly type = ProductActionTypes.DeleteProduct;

  constructor(public payload: number) {
  }
}


// Union the valid types
export type ProductActions = Load
  | LoadSuccess
  | LoadFail
  | CreateProduct
  | CreateProductSuccess
  | EditProduct
  | DeleteProduct

