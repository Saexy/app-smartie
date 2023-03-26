import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductAddComponent } from './products/product-add/product-add.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { AuthGuard } from './shared/auth.guard';
import { LoggedGuard } from './shared/logged.guard';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "dashboard",
        component: DashboardComponent
      },
      {
        path: "products",
        children: [
          {
            path: "",
            component: ProductListComponent,
          },
          {
            path: "add",
            component: ProductAddComponent,
          },
          {
            path: ":id",
            component: ProductEditComponent,
          },
        ]
      },
      {
        path: "stock",
        component: DashboardComponent
      },
      {
        path: "account",
        component: AccountComponent
      },
      {
        path: '', redirectTo: 'dashboard', pathMatch: 'full',
      },
    ],
    canActivate: [AuthGuard],
  },
  {
    path: "",
    children: [
      {
        path: "login",
        component: LoginComponent,
        canActivate: [LoggedGuard]
      },
      {
        path: '', redirectTo: 'login', pathMatch: 'full',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
