import { Component, OnInit } from '@angular/core';
import { Product } from 'src/entities/product.entity';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  products: Product[];

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadData();
  }

  // in subscribe() is an arrow function:(param1, param2,...) =>{ ...implementation }
  loadData(){
    this.productService.findAll().subscribe(
      (res: Product[]) => {
        this.products = res;

        // console.log : Convert Javascript object to string
        console.log(`this.products = ${JSON.stringify(this.products)}`)
      },
      error => {
        alert(error);
      }
    );
  }

  edit(id: string){
    this.router.navigate(['/edit/' + id])
  }

  delete(id: string){
    var result = confirm("Are you sure");
    if(result){
      this.productService.delete(id).subscribe(
        res => {
          this.loadData() 
        },
        error => {
          console.log(error);
        }
      )
    }
  }

}
