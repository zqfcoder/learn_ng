import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-ob1',
  templateUrl: './ob1.component.html',
  styleUrls: ['./ob1.component.scss']
})


// todo(ng 的可观察对象 应用)
export class Ob1Component implements OnInit {

  rNum = new Observable(observer => {
    let timer = setInterval(() => {
      let num = Math.ceil(Math.random() * 100);
      if (num < 20) {
        console.log('停止订阅',num);
        observer.unsubscribe();
        window.clearInterval(timer);
      }
      observer.next(num);
    }, 750)
    return ({
      unsubscribe() {
      }
    });
  })

  constructor() {
  }

  ngOnInit() {
  }

}


//todo(强大的rxjs)  但是用不好....
