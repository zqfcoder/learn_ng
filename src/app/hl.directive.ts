import {Directive, ElementRef, HostListener, OnInit} from '@angular/core';
import {Input} from '@angular/core';

//表明自己是一个指令...
//指令怎么传参数
@Directive({
  selector: '[appHl]'
})
export class HlDirective implements OnInit {

  @Input() initColor: string;

  //ElementRef 通过其 nativeElement 属性给你了直接访问宿主 DOM 元素的能力。
  constructor(
    public el: ElementRef
  ) {
    console.log(`el是这样的`, el);
  }

  ngOnInit() {
     console.log(this.initColor);
    this.el.nativeElement.style.backgroundColor = this.initColor;
  }

  // HostListener 修饰器  传参是监听事件类型
  @HostListener('click') anyEventName() {
    this.heightLight('red');
  }

  @HostListener('mouseenter') onMouseEnter() {
    console.log('进入');
    this.heightLight('blue');
  }

  @HostListener('mouseleave') onMouseLeave() {
    console.log('离开');
    this.heightLight('green');
  }

  heightLight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
