import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transLang'
})
export class TranslangPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let lang=localStorage.getItem("lang")
    if(lang){
    return value?.[lang]
    }
   
  }

}