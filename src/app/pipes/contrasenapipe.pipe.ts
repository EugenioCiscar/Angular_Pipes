import { Pipe, PipeTransform } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Pipe({
  name: 'contrasenapipe'
})
export class ContrasenapipePipe implements PipeTransform {

  transform(value: string, activar: boolean = true): string {

    if(activar){
      let salida:string="";
      for(let i=0; i<value.length; i++){
        salida += "*";
      
    }
    return salida;
  }else{
    return value;
  }

}

}
