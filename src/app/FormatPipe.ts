import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'format'})
export class FormatPipe implements PipeTransform {

  transform(text: string): string {
    const placeholders = [
      {regEx: 'Absatz', content: '\n'},
      {regEx: 'absatz', content: '\n'}
    ];

    for (const placeholder of placeholders) {
      while (text.includes(placeholder.regEx)) {
        text = text.replace(placeholder.regEx, placeholder.content);
      }
    }

    return text.charAt(0).toUpperCase() + text.slice(1);
  }
}
