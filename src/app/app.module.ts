import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {MineComponent} from './mine/mine.component';
import {ParentComponent} from './parent/parent.component';
import {ChildComponent} from './child/child.component';
import {FormsModule} from '@angular/forms';
import {ClockpComponent} from './clockp/clockp.component';
import {ClockcComponent} from './clockc/clockc.component';
import {RnumpComponent} from './rnump/rnump.component';
import {RnumcComponent} from './rnumc/rnumc.component';
import {HlDirective} from './hl.directive';
import {HehePipe} from './hehe.pipe';
import {MformComponent} from './mform/mform.component';
import {Ob0Component} from './ob0/ob0.component';
import {Ob1Component} from './ob1/ob1.component';
import {MineModuleModule} from './mine-module/mine-module.module';
import {CustomerDashboardModule} from './customer-dashboard/customer-dashboard.module';
import { AdComponent } from './ad/ad.component';
import { AddDirective } from './add.directive';
import { PopupMineComponent } from './popup-mine/popup-mine.component';
import { FormComponent } from './form/form.component';


//关于@NgModule  https://angular.cn/guide/ngmodule-api
@NgModule({
  declarations: [//这里组件  指令  管道的声明
    AppComponent,
    MineComponent,
    ParentComponent,
    ChildComponent,
    ClockpComponent,
    ClockcComponent,
    RnumpComponent,
    RnumcComponent,
    HlDirective,
    HehePipe,
    MformComponent,
    Ob0Component,
    Ob1Component,
    AdComponent,
    AddDirective,
    PopupMineComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MineModuleModule,//todo(特性模块)这里导入自定义模块
    CustomerDashboardModule//自定义模块+1
  ],
  providers: [],//todo(服务供应商)
  //ng6 之后版本差异
  //todo(forRoot 模式???)
  //todo(forChild 模式???)
  //todo(单例模式 ???)
  //todo(惰性加载 ???)


  bootstrap: [AppComponent]//启动组件
})
export class AppModule {
}
