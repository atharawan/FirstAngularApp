import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { DatePipe } from "@angular/common";

@Component({
  selector: 'product-list',
  //  template: '<h3>Product List {{productTitel}}</h3>',
  templateUrl: './product-list.component.html',
  styles: [`.green{color:green;}
  .bold {font-weight:bold;}
  .red {color:red;}
  `]

})
export class ProductListComponent implements OnInit
{

  constructor(private datePipe : DatePipe)
  {
    console.log("constructor Called");
  }
  ngOnInit(): void {

    this.filteredProducts = this.products;
    console.log("ngOnInit Called");

  }
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
   product.name.toLowerCase().includes(value) ||
   product.price.toFixed(2).includes(value)

  );
 }

//  performFilter(filterBy: string): IProduct[] {
//   filterBy = filterBy.toLowerCase();
//   return this.products.filter((product: IProduct) =>
//    product.name.toLowerCase().includes(filterBy)
//   );
// }

 filteredProducts : IProduct[] = [];

  products : IProduct[] = [{

    id: 1,
    name: 'Product 1',
    price: 10.5,
    qty: 1,
    dateAdded : this.datePipe.transform('2012/12/12'),
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
    dateAdded : this.datePipe.transform('2017/05/07'),
    imageUrl: 'http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/enduro-boa-hydration-pack-AJQZ_JK3_hero.png'
  },
  {

    id: 4,
    name: 'Product 4',
    price: 40.5,
    qty: 5,
    dateAdded : '2015/05/07',
    imageUrl: 'http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/womens-single-track-shoe-ALQF_JM3_hero.png'
  }];

  toggleImage() : void
  {
    this.showImage = !this.showImage;
  }

  getMyClass(){

    if(this.showImage)
    return ['green','bold']
    else
    return ['red']
  }
}
