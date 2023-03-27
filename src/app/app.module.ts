import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from "@angular/common/http";
import { NavbarComponent } from './components/navbar/navbar.component';
import { AccountComponent } from './account/account.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductAddComponent } from './products/product-add/product-add.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { StockListComponent } from './stocks/stock-list/stock-list.component';
import { StockCreateComponent } from './stocks/stock-create/stock-create.component';
import { StockEditComponent } from './stocks/stock-edit/stock-edit.component';
import { StockAddComponent } from './stocks/stock-add/stock-add.component';
import { StockRemoveComponent } from './stocks/stock-remove/stock-remove.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    AccountComponent,
    ProductListComponent,
    ProductAddComponent,
    ProductEditComponent,
    StockListComponent,
    StockCreateComponent,
    StockEditComponent,
    StockAddComponent,
    StockRemoveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
