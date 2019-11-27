import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'my-app';

  yellow = 'yellow';

  temp = '';

  aTell(res) {
    console.log(`接受传参数${res}`, res);
  }
  change(val){
    console.log(val);
  }
}
