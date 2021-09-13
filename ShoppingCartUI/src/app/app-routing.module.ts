import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { CartComponent } from './Customer/cart/cart.component';
import { CheckoutComponent } from './Customer/checkout/checkout.component';
import { CustomerProfileComponent } from './Customer/customer-profile/customer-profile.component';
import { OrderSuccessComponent } from './Customer/order-success/order-success.component';
import { PreviousOrderComponent } from './Customer/previous-order/previous-order.component';
import { PreviousTransactionsComponent } from './Customer/previous-transactions/previous-transactions.component';
import { ProductListingComponent } from './Customer/product-listing/product-listing.component';
import { WalletComponent } from './Customer/wallet/wallet.component';
import { AddProductComponent } from './Merchant/add-product/add-product.component';
import { EditProductComponent } from './Merchant/edit-product/edit-product.component';
import { MerchantHomeComponent } from './Merchant/merchant-home/merchant-home.component';

const routes: Routes = [
  {path:'', redirectTo:'products',pathMatch:'full'},
  {path:'products', component: ProductListingComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'cart', component: CartComponent},
  {path:'profile',component:CustomerProfileComponent},
  {path:'previousorders',component:PreviousOrderComponent},
  {path:'previoustransactions',component:PreviousTransactionsComponent},
  {path:'wallet',component:WalletComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'ordersuccess',component:OrderSuccessComponent},
  {path:'merchanthome',component:MerchantHomeComponent},
  {path:'addproducts',component:AddProductComponent},
  {path:'editproducts/:id',component:EditProductComponent},
  {path:'**',redirectTo:'products',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
