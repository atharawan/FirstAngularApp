import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle : string  = 'Dynamic ID';


  product: IProduct | undefined;

  constructor(private route : ActivatedRoute , private router: Router )
  {

   }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.pageTitle +=  ` : ${id}`;


    this.product = {

      id: 2,
      name: 'Product 2',
      price: 20.5,
      qty: 2,
      dateAdded : '2019/05/07',
      imageUrl: 'http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/womens-better-than-naked-jacket-AVKL_NN4_hero.png'
    }
  }

}
