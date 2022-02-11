import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from "src/app/service/product.service";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

    constructor(private ps: ProductService, private router: Router) { }
    products: any;
    ngOnInit(): void {
        this.ps.getProducts().subscribe((res) => {
            this.products = res.data;
            // console.log(this.products);
        });

    }

    deleteProduct(id: any) {
        if (confirm("Confirm deletion?")) {
            this.ps.deleteProduct(id).subscribe((res) => {
                console.log(res);
                this.router.navigateByUrl('/', { skipLocationChange: true })
                    .then(() => this.router.navigate([`/product`]));
            });
        }
    }

}
