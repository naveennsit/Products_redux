import {createFeatureSelector, createSelector} from "@ngrx/store";
import * as fromProduct from '../state/product.reducer'

const getProductFeatureState =createFeatureSelector<fromProduct.ProductState>('productFeature')

export const getProducts = createSelector(
  getProductFeatureState,
  state => state.products
);


export const getLoaded = createSelector(
  getProductFeatureState,
  state => state.loaded
);

export const getSelectedProduct = createSelector(
  getProductFeatureState,
  state => state.selectedProduct
);


