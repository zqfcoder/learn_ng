import {Directive, ViewContainerRef} from '@angular/core';

//todo(动态组件)

//AdDirective 注入了 ViewContainerRef 来获取对容器视图的访问权，这个容器就是那些动态加入的组件的宿主。
@Directive({
  selector: '[appAdd]'
})
export class AddDirective {

  constructor(
    public viewContainerRef: ViewContainerRef
  ) {
  }

}
