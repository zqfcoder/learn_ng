import {Component, OnInit} from '@angular/core';
import {Observable, pipe} from 'rxjs';
import {interval, from} from 'rxjs';
import {ajax} from 'rxjs/internal/observable/dom/ajax';
import {map} from 'rxjs/internal/operators';
import {of} from 'rxjs';
import {catchError, retry} from 'rxjs/internal/operators';

let outter;

let obj = {
  next: x => console.log('Observer got a next value: ' + x),
  error: err => console.error('Observer got an error: ' + err),
  complete: () => console.log(`Observer got a complete notification`),//这里没有参数
}

const myObserver = new Observable(function (observer) {
  outter = observer;
  // observer.next('这里发布到');
  // observer.complete();
  return {
    unsubscribe() {
    }
  };
});

myObserver.subscribe(obj);


//谁发布?
// outter.next('这里发布到');
// outter.complete();
//


//todo(多播?)
// 多播用来让可观察对象在一次执行中同时广播给多个订阅者


//RxJS 提供了一些用来创建可观察对象的函数
//如事件、定时器、承诺

//interval
let couter = interval(1000);

let subObj = couter.subscribe(n => {
  console.log(`now ${n} ....`);
  if (n == 2) {
    subObj.unsubscribe();//停止订阅
  }
})

//from
let data = from(fetch('http://www.test.com:3001/testid?id=10'));
data.subscribe({
  next(res) {
    console.log(res);//这里没法获取请求结果
  },
  error(error) {
    console.log(error)
  },
  complete() {
    console.log('请求完毕')
  }
})

//ajax
const apiData = ajax('http://www.test.com:3001/testid?id=10');

apiData.subscribe(res => {
  console.log('rxjs 的 ajax', res);
  let {response} = res;
  console.log('返回的', response);
})

//rxjs操作符号   map()、filter()、concat() 和 flatMap()  管道??? todo(有点难理解,但是好好用) 有很多看文档

const nums = of(1, 2, 3);
// console.log(nums);
// console.log(map);
const sValuesFun = map((val: number) => val * val);//这里发送? //返回一个以 可观察对象为参数的函数
const sNumbs = sValuesFun(nums);//
sNumbs.subscribe(x => console.log(x));//这里订阅

//管道 pipe  从上到下 用于多发异步请求...
//Observable 也有pipe 方法... todo(Observable 的pipe 方法怎么传参???)
//错误处理  catchError(err=>of([]))


const addOneAndSFun = pipe(
  map((val:number) => val + 1),
  map((val:number) => val * val)
);
const tempNums = addOneAndSFun(nums);
tempNums.subscribe(res => console.log(`管道反馈${res}`));


//todo()重试失败的可观察对象  retry
let objOs = ajax('http://www.test.com:3001/testid?id=10').pipe(
  retry(3),
  map(res => {
    if (!res.response) {
      throw new Error('发生错误 信息0');
    }
    return res.response;
  }),
  catchError(err => of([]))//为什么一定返回可观察对象Observable
);
objOs.subscribe({
  next(x) {
    console.log(`data:`, x);
  },
  error(err) {
    console.log(`这里知道出错了${err}`);
  }
})


@Component({
  selector: 'app-ob0',
  templateUrl: './ob0.component.html',
  styleUrls: ['./ob0.component.scss']
})
export class Ob0Component implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  fabu() {//发布
    outter.next('点击发布');//为什么只能执行(发布)一次??? 与 27行冲突
    console.log(outter);
    // this.iOutter.next('点击发布');
  }

}




