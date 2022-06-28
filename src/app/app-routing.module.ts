import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDetailsComponent } from './Component/account-details/account-details.component';
import { LoanAccOperationsComponent } from './Component/AccountOperations/loan-acc-operations/loan-acc-operations.component';
import { SavingAccOperationsComponent } from './Component/AccountOperations/saving-acc-operations/saving-acc-operations.component';
import { AddAccountComponent } from './Component/add-account/add-account.component';
import { CustomerProfileComponent } from './Component/customer-profile/customer-profile.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { HomeComponent } from './Component/home/home.component';
import { RegisterComponent } from './Component/register/register.component';
import { CustomerAddressFormComponent } from './forms/custome-address-form/custome-address-form.component';
import { CustomerAccountInfo } from './Models/customer-account-info';

const routes: Routes = [
  {path : "" ,component:HomeComponent},
  {path:"Register",component:RegisterComponent},
  {path:"dashboard",component:DashboardComponent},
  {path: "customerinfo",component:CustomerAccountInfo},
  {path:"customerprofile",component: CustomerProfileComponent},
  {path:"custaddress",component:CustomerAddressFormComponent},
  {path:"addaccount",component:AddAccountComponent},
  {path:"loan",component:LoanAccOperationsComponent},
  {path:"saving",component:SavingAccOperationsComponent},
  {path:"accountdetails",component:AccountDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
