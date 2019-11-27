import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-clockc',
  templateUrl: './clockc.component.html',
  styleUrls: ['./clockc.component.scss']
})
export class ClockcComponent implements OnInit {

  second: number = 0;

  timer: any;

  stop() {
    window.clearInterval(this.timer);
  }

  start() {
    if (this.timer) {
      this.stop();
    }
    this.radom();
  }

  radom() {
    this.timer = window.setInterval(_ => {
      this.second = Math.ceil(Math.random() * 100);
      console.log('新值', this.second);
    }, 750);
  }

  constructor() {
  }

  ngOnInit() {
    this.radom();
  }

}
