import { Pipe, PipeTransform } from "@angular/core";


// funcionamiento:
// fernando | toggleCase = 'FERNANDO'
// FERNANDO | toggleCase = 'fernando'

@Pipe({
  name: 'toggleCase'
})
export class ToggleCasePipe implements PipeTransform {

  transform( originalValue: string, toUpper: boolean = false ): string {
    console.log({ originalValue, toUpper });
    return toUpper ? originalValue.toUpperCase() : originalValue.toLowerCase();
  }

}
