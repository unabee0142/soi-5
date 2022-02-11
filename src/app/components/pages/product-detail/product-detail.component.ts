import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from "src/app/service/product.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  id: any;
  product: any;
  review: Review = new Review();
  constructor(private ps: ProductService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.ps.getProductById(this.id).subscribe((res) => {
        this.product = res.data;
      });
    });
  }
  addReview() {
    this.ps.addReview(this.id, this.review).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/', { skipLocationChange: true })
        .then(()=> this.router.navigate([`/product/detail/${this.id}`]));
    });
  }
}

class Review {
  star: number = 0;
  comment: string = "";
}
