import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  public productForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
    this.productForm = this.formBuilder.group( {
      id: '',
      name: '',
      price: 0,
      quantity: 0
    })
  }
  save(){
    this.productService.create(this.productForm.value).subscribe(
      res =>{
        this.router.navigate(['']) 
      },
      error =>{
        console.log(error);
      }
    )
  }

}
