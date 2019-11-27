import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';

// @NgModule({
//   imports:[
//     FormsModule
//   ]
// })

@Component({
  selector: 'app-mform',
  templateUrl: './mform.component.html',
  styleUrls: ['./mform.component.scss']
})
export class MformComponent implements OnInit {

  colorControl = new FormControl('初始值');

  color = '';

  constructor() {
  }

  ngOnInit() {
  }

  logKeyDown(e: Event) {
    console.log('驱动型表单', e)
  }

  rLogKeyDown(e: Event) {
    console.log('响应式表单', e);
  }
}
