import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean): string {
    if (!activar) {
      return value;
    } else {
      let return_string = '';
      for (let i = 1; i <= value.length; i++) {
        return_string = return_string + '*';
      }
      return return_string;
    }
  }

}
