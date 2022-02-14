import { Injectable } from "@angular/core";
import { IProduct } from "./product";

@Injectable(
  {
    providedIn : "root"
  }
)
export class ProductService
{

  getProduct : IProduct[] =
  [{

    id: 1,
    name: 'Product 1',
    price: 10.5,
    qty: 1,
    dateAdded : '2012/12/12',
    imageUrl: 'http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/enduro-boa-hydration-pack-AJQZ_JK3_hero.png'
  },
  {

    id: 2,
    name: 'Product 2',
    price: 20.5,
    qty: 2,
    dateAdded : '2019/05/07',
    imageUrl: 'http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/womens-better-than-naked-jacket-AVKL_NN4_hero.png'
  },
  {

    id: 3,
    name: 'Product 3',
    price: 30.5,
    qty: 0,
    dateAdded : '2017/05/07',
    imageUrl: 'http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/enduro-boa-hydration-pack-AJQZ_JK3_hero.png'
  },
  {

    id: 4,
    name: 'Product 4',
    price: 40.5,
    qty: 5,
    dateAdded : '2015/05/07',
    imageUrl: 'http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/womens-single-track-shoe-ALQF_JM3_hero.png'
  }]
}
