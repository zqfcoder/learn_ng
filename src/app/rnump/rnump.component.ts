import { Component, OnInit } from '@angular/core';
import {ViewChild,AfterViewInit} from '@angular/core';
import {RnumcComponent} from '../rnumc/rnumc.component'

@Component({
  selector: 'app-rnump',
  templateUrl: './rnump.component.html',
  styleUrls: ['./rnump.component.scss']
})
export class RnumpComponent implements OnInit {

  @ViewChild(RnumcComponent,{static:false})
  private numcComponent:RnumcComponent;

  second:number=0;

  constructor() { }

  ngOnInit() {
    this.second = this.numcComponent.second;//那改变组件内的变量的方法是????
  }


  start(){
    this.numcComponent.start();
  }

  stop(){
    this.numcComponent.stop();
  }
}
