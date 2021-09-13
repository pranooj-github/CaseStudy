import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './Common/navbar/navbar.component';
import { ProductListingComponent } from './Customer/product-listing/product-listing.component';
import { CartComponent } from './Customer/cart/cart.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomerProfileComponent } from './Customer/customer-profile/customer-profile.component';
import { WalletComponent } from './Customer/wallet/wallet.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckoutComponent } from './Customer/checkout/checkout.component';
import { MerchantHomeComponent } from './Merchant/merchant-home/merchant-home.component';
import { AddProductComponent } from './Merchant/add-product/add-product.component';
import { LoginComponent } from './Auth/login/login.component';
import { InterseptorService } from './service/interseptor.service';
import { RegisterComponent } from './Auth/register/register.component';
import { PreviousOrderComponent } from './Customer/previous-order/previous-order.component';
import { EditProductComponent } from './Merchant/edit-product/edit-product.component';
import { PreviousTransactionsComponent } from './Customer/previous-transactions/previous-transactions.component';
import { OrderSuccessComponent } from './Customer/order-success/order-success.component';
import {ConfirmationPopoverModule} from 'angular-confirmation-popover';
import { DialogueProductaddComponent } from './Common/dialogue-productadd/dialogue-productadd.component';
import { DialogueProductupdateComponent } from './Common/dialogue-productupdate/dialogue-productupdate.component';
import { DialogRegistrationComponent } from './Common/dialog-registration/dialog-registration.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductListingComponent,
    CartComponent,
    CustomerProfileComponent,
    WalletComponent,
    CheckoutComponent,
    MerchantHomeComponent,
    AddProductComponent,
    LoginComponent,
    RegisterComponent,
    PreviousOrderComponent,
    EditProductComponent,
    PreviousTransactionsComponent,
    OrderSuccessComponent,
    DialogueProductaddComponent,
    DialogueProductupdateComponent,
    DialogRegistrationComponent
  ],
  entryComponents:[DialogueProductaddComponent,DialogueProductupdateComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType:'danger'
    })
  ],
  providers: [
    {
    provide:HTTP_INTERCEPTORS,
    useClass:InterseptorService,
    multi:true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
