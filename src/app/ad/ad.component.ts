import {Component, OnInit, OnDestroy} from '@angular/core';
import {ViewChild} from '@angular/core';
import {Input} from '@angular/core';
import {AddDirective} from '../add.directive';
import {ComponentFactoryResolver} from '@angular/core';

interface Aditem {
  title: string,
  content: string
}

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.scss']
})
export class AdComponent implements OnInit, OnDestroy {
  currentIndex = -1;

  interval: any;

  @Input()
  ads: Aditem[];

  @ViewChild(AddDirective, {static: true})
  adHost: AddDirective;//什么东西???

  constructor(
    private ComponentFactoryResolver: ComponentFactoryResolver
  ) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {

  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }
}
