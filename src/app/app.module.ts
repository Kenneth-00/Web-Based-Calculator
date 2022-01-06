import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './component/calculator/calculator.component';

const routes: Routes = [
  {
    path:"myCalculator", component: CalculatorComponent,
    children: [
      {path:"calculator", component:CalculatorComponent},
    ],
  },
  {path:"", redirectTo:"myCalculator", pathMatch:"full"}
]
@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
