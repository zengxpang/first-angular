import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgForOf, NgIf} from "@angular/common";
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {DetailsComponent} from "./details/details.component";
import {HousingLocationComponent} from "./housing-location/housing-location.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  // 属于本 NgModule 的组件、指令、管道列表。
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    HousingLocationComponent
  ],
  // 那些导出了本模块中的组件模板所需的类的其它模块。
  imports: [
    BrowserModule,
    // AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'details/:id', component: DetailsComponent},
    ]),
    NgForOf,
    NgIf,
  ],
  providers: [],
  // 那些能在其它模块的组件模板中使用的可声明对象的子集。
  exports: [],
  // 应用的主视图，也叫根组件。它在应用中是所有其他视图的宿主，只有根模块才能设置这个 bootstrap 属性。
  bootstrap: [AppComponent]
})
export class AppModule { }
