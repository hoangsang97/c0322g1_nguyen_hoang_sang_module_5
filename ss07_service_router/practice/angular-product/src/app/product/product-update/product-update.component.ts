import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  productForm: FormGroup;
  product: Product;
  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
    });
    this.activatedRoute.paramMap.subscribe((pramMap: ParamMap) => {
      const id = +pramMap.get('id');
      this.product = this.productService.findById(id);
      this.productForm.patchValue(this.product);
    });
  }
  submit() {
    const product = this.productForm.value;
    this.productService.updateById(product);
  }
}
