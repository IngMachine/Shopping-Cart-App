import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-all',
  templateUrl: './products-all.component.html',
  styleUrls: ['./products-all.component.scss']
})
export class ProductsAllComponent implements OnInit {
  obj1: any = {
    title: 'Fredy sirve',
  };
  obj2: any = {
    title: 'Fredy  no sirve',
  };

  datos: any[] = [this.obj1, this.obj2, this.obj1, this.obj1];

  constructor() { }

  ngOnInit(): void {
  }

}
