import { Component } from "@angular/core";
import { IProduct } from "./product";


@Component({
  selector: 'product-list',
  //  template: '<h3>Product List {{productTitel}}</h3>',
  templateUrl: './product-list.component.html'

})
export class ProductListComponent
{

  productTitle : string = "Sample Products";
  imageWidth: number = 100;
  showImage: boolean = false;
  // filterList : string = 'Cart';

  private _filterList: string = ''

  get filterList(): string
  {
      return this._filterList;
  }
 set filterList(value: string)
 {
   this._filterList = value;
   console.log("setter called");
   this.filteredProducts = this.products.filter((product: IProduct) =>
   product.name.toLowerCase().includes(value)
  );
 }

 performFilter(filterBy: string): IProduct[] {
  filterBy = filterBy.toLowerCase();
  return this.products.filter((product: IProduct) =>
   product.name.toLowerCase().includes(filterBy)
  );
}

 filteredProducts : IProduct[] = [];

  products : IProduct[] = [{

    id: 1,
    name: 'Product 1',
    price: 10.5,
    imageUrl: 'http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/enduro-boa-hydration-pack-AJQZ_JK3_hero.png'
  },
  {

    id: 2,
    name: 'Product 2',
    price: 20.5,
    imageUrl: 'http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/womens-better-than-naked-jacket-AVKL_NN4_hero.png'
  },
  {

    id: 3,
    name: 'Product 3',
    price: 30.5,
    imageUrl: 'http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/enduro-boa-hydration-pack-AJQZ_JK3_hero.png'
  },
  {

    id: 4,
    name: 'Product 4',
    price: 40.5,
    imageUrl: 'http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/womens-single-track-shoe-ALQF_JM3_hero.png'
  }];

  toggleImage() : void
  {
    this.showImage = !this.showImage;
  }
}
