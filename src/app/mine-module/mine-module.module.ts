import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogComponent } from './log/log.component';



@NgModule({
  declarations: [LogComponent],
  imports: [
    CommonModule
  ],
  exports:[LogComponent]
})
export class MineModuleModule { }
