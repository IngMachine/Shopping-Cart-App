import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth/services/auth.service';
import { ProductsService } from './products/services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(
    private authService: AuthService,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.authService.initAuthListener();
    // this.productsService.initProductListener();
  }
}
