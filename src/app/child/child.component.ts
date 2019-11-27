import {Component, OnInit, SimpleChange,OnChanges} from '@angular/core';
import {Input} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit ,OnChanges{

  log:string[]=[];

  @Input() name: string;
  @Input() age: number;

  constructor() {
  }

  ngOnInit() {
  }

  //写在子组件上
  //1、changes是一个键值对  {index:value}
  //2、index 是string 键   value 是? 值
  //对象的属性的深监听???
  ngOnChanges(changes: { [key: string]: SimpleChange }) { //这是啥???  ts 不单单可以定义 值的类型 还可以定义  键的类型，但是一般键都是 字符串 或者 数字
    console.log('监听成功',changes);
    let log: string[] = this.log;
    for (let propName in changes) {//数组还是  对象键值对?
      let changedProp = changes[propName];//更改的
      let to = JSON.stringify(changedProp.currentValue);

      //第一次 初始化
      if (changedProp.isFirstChange()) {
        log.push(`初始化 设置:${propName}  为:${to}`)
      } else {
        let from = JSON.stringify(changedProp.previousValue);
        log.push(`更改 从:${from} 到:${to}`);
      }
    }
    this.log = log;
  }
}
