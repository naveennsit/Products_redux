import {Injectable} from '@angular/core';
import {Observable} from "rxjs/internal/Observable";
import {catchError, map, switchMap, withLatestFrom} from "rxjs/operators";

import {Action, select, Store} from "@ngrx/store";
import {Actions, Effect, ofType} from "@ngrx/effects";


import {ProductService} from "../product.service";
import * as productAction from "./product.action";
import {of} from "rxjs/internal/observable/of";
import * as fromApp from "../../app.state";
import * as fromProdduct from "./index";
import {Product} from "../product";


@Injectable()
export class ProductEffect {


  constructor(private productService: ProductService,
              private action$: Actions,
              private store: Store<fromApp.AppState>) {
  }

  @Effect()
  loadProduct$: Observable<Action> = this.action$.pipe(
    ofType(productAction.ProductActionTypes.Load),
    withLatestFrom(this.store.pipe(select(fromProdduct.getLoaded))),
    switchMap(([action, loaded]) => {
        if (loaded) {
          return of(new productAction.LoadedFromStore)
        }
          return this.productService.getProducts().pipe(
            map((products) => {
              return new productAction.LoadSuccess(products)
            }),
            catchError(err => of(new productAction.LoadFail(err)))
          )

      }
    ))

  @Effect()
  createProduct$:Observable<Action> = this.action$.pipe(
    ofType(productAction.ProductActionTypes.CreateProduct),
    map((action:productAction.CreateProduct)=>action.payload),
    switchMap((payload:Product)=>{
      return this.productService.addProduct(payload).pipe(
        map(newProduct => (new productAction.CreateProductSuccess(newProduct))),
        catchError(err => of(new productAction.CreateProductFail(err)))
      )
    })
  )


}
