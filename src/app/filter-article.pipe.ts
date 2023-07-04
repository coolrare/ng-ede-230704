import { Pipe, PipeTransform } from '@angular/core';
import { Article } from './shared/interfaces/Articles';

@Pipe({
  name: 'filterArticle'
})
export class FilterArticlePipe implements PipeTransform {

  transform(value: Article[], keyword: string): Article[] {
    return value
      .filter(item => item.title.includes(keyword))
      .map(item => {
        if (!!keyword) {
          return {
            ...item,
            title: item.title.replace(keyword, `<mark>${keyword}</mark>`)
          };
        } else {
          return item;
        }
      });;
  }

}
