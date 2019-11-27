import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';
import {Input, Output} from '@angular/core';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.scss']//它们既不会被模板中嵌入的组件继承，也不会被通过内容投影（如 ng-content）嵌进来的组件继承
})
export class MineComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  //一般输入
  // @Input() _name: string;

  //带setter的输入
  private _name = '';

  //todo(这是ts的读取器???)
  @Input()
  set name(name: string) {
    console.log('set');
    this._name = (name && name.trim()) || '<no _name set>';
  }

  get name(): string {
    console.log('get');
    return this._name;
  }

  @Output() tell = new EventEmitter();//怎么emit???  @Output('输出别名')

  title = '我是title';

  obj = {
    age: 10,
    name: 'a',
    id: 1
  };

  logKey(str: string) {
    console.log(`键盘keyup${str}`);
  }

  logKeyEnter() {
    console.log('输入enters');
  }

  logBlur(src: string) {
    console.log('失去焦点', src);
  }

  getValue(): number {
    return 10;
  }

  getPhone(num: number) {
    console.log(`模板变量里拿的值${num}`);
  }

  logEvent(event: Event) {
    console.log(event);
  }

  emit(str: string) {
    console.log(str);
    this.tell.emit(str);
  }

  constructor() {
  }

  //一堆生命周期钩子

  ngOnChanges() {
    console.log(1);
  }

  ngOnInit() {
    console.log(2);
  }

  ngDoCheck() {
    console.log(3);
  }

  ngAfterContentInit() {
    console.log(4);
  }

  ngAfterContentChecked() {
    console.log(5);
  }

  ngAfterViewInit() {
    console.log(6);
  }

  ngAfterViewChecked() {
    console.log(7);
  }

  ngOnDestroy() {
    console.log(8);
  }
}
