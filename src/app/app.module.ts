import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/product/list/index.component';
import { AddComponent } from './components/product/add/add.component';
import { EditComponent } from './components/product/edit/edit.component';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ 
    ProductService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
