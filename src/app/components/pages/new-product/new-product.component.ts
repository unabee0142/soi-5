import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from "src/app/service/product.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  productForm!: FormGroup;
  constructor(private ps: ProductService, private router:Router) { }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      name: new FormControl(),
      price: new FormControl(),
      unit_in_stock: new FormControl()
    });
  }

  addProduct(){
    let product = {
      name: this.productForm.value.name,
      price: this.productForm.value.price,
      unit_in_stock: this.productForm.value.unit_in_stock
    };
    this.ps.addProduct(product).subscribe(res=>{
      console.log(res);
      this.router.navigate(["/product"]);
    });
  }

}
