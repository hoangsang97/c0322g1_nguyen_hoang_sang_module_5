import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  product: Product;
  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((pramMap: ParamMap) => {
      const id = +pramMap.get('id');
      this.product = this.productService.findById(id);
    });
  }

  delete() {
    this.productService.delete(this.product.id);
  }
}
