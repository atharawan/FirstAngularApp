import { Component,  Output, EventEmitter, Input, OnInit } from "@angular/core";
import { IProduct } from "src/app/products/product";
import { ProductService } from "src/app/products/product.service";


@Component({
  selector : 'child-view',
  templateUrl: './child-view.component.html'
})
export class ChildViewComponenet implements OnInit
{
  @Input() childInputString : string = '';
  @Input() childInputProduct : IProduct[] | undefined ;

  @Output() notifyString : EventEmitter<string> = new EventEmitter<string>();
  @Output() notifyProducts : EventEmitter<IProduct[]> = new EventEmitter<IProduct[]>();



  childProducts : IProduct[] = [{

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
  }];

  constructor(private productSerice: ProductService)
  {

  }
  ngOnInit(): void {
    // this.products = this.productSerice.getProduct;

  }

  onNotifyString()
  {
    console.log("child button clicked");
    // this.mynotifyVariable
    this.notifyString.emit("child button clicked");

  }

  onNotifyProduct()
  {
    console.log("child button clicked");
    // this.mynotifyVariable
    console.log(JSON.stringify(this.childProducts))
    this.notifyProducts.emit(this.childProducts);

  }
}
