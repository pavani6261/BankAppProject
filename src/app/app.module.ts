import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountDetailsComponent } from './Component/account-details/account-details.component';
import { LoanAccOperationsComponent } from './Component/AccountOperations/loan-acc-operations/loan-acc-operations.component';
import { SavingAccOperationsComponent } from './Component/AccountOperations/saving-acc-operations/saving-acc-operations.component';
import { AddAccountComponent } from './Component/add-account/add-account.component';
import { CustomerProfileComponent } from './Component/customer-profile/customer-profile.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { HomeComponent } from './Component/home/home.component';
import { RegisterComponent } from './Component/register/register.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { UpdateComponent } from './Component/update/update.component';
import { CustomerAddressFormComponent } from './forms/custome-address-form/custome-address-form.component';
import { CustomerInfoFormComponent } from './forms/custome-info/custome-info.component';
import { LoanAccountFormComponent } from './forms/loan-account-form/loan-account-form.component';
import { SavingAccountFormComponent } from './forms/saving-account-form/saving-account-form.component';
import { CustAccountService } from './services/cust-account.service';
import { StateService } from './services/state.service';
import { SavingAccountService } from './services/saving-account.service';
import { LoanAccountService } from './services/loan-account.service';
import { ZipCodeService } from './services/zip-code.service';
import { SavingAccTxnService } from './services/saving-acc-txn.service';
import { LoanAccTxnService } from './services/loan-acc-txn.service';
import { CustomerService } from './services/customer.service';
import { CountryService } from './services/country.service';
import { CityService } from './services/city.service';
import { AccountTypeService } from './services/account-type.service';

@NgModule({
  declarations: [
    AppComponent,
    AccountDetailsComponent,
    LoanAccOperationsComponent,
    SavingAccOperationsComponent,
    AddAccountComponent,
    CustomerProfileComponent,
    DashboardComponent,
    HomeComponent,
    RegisterComponent,
    NavbarComponent,
    UpdateComponent,
    CustomerAddressFormComponent,
    CustomerInfoFormComponent,
    LoanAccountFormComponent,
    SavingAccountFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule
  ],
  providers: [CustAccountService,StateService,SavingAccountService,LoanAccountService,ZipCodeService,
  SavingAccTxnService,LoanAccTxnService,CustomerService,CountryService,CityService,AccountTypeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
