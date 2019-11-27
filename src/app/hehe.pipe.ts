import {Pipe, PipeTransform} from '@angular/core';


//Pipe, PipeTransform???
@Pipe({
  name: 'hehe'
})
export class HehePipe implements PipeTransform {


  //...args: any[] args 参数是怎么搞的...  --->为管道 参数  {{'a'|h1h1:10}}
  transform(value: any, ...args: any[]): string {
    return value += ' 说:hehe';
  }

}
