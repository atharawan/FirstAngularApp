import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { DatePipe } from "@angular/common";
import { ProductService } from "./product.service";

@Component({
  // selector: 'product-list',
  //  template: '<h3>Product List {{productTitel}}</h3>',
  templateUrl: './product-list.component.html',
  styles: [`.green{color:green;}
  .bold {font-weight:bold;}
  .red {color:red;}
  `]

})
export class ProductListComponent implements OnInit
{

  constructor(private datePipe : DatePipe, private productService: ProductService)
  {
    console.log("constructor Called");
  }
  ngOnInit(): void {

    this.products = this.productService.getProduct;
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

  products : IProduct[] = [];

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
