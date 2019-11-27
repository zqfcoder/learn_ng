import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  name: string = 'bz';

  age: number = 18;

  constructor() {
  }

  ngOnInit() {
  }

}
