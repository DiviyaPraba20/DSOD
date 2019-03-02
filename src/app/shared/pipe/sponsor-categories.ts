import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sponsored_categories'
})
export class SponsorCategoriesPipe implements PipeTransform {
  transform(value: any, filterId:string) {
    return value.filter(item => item.sponsorId==filterId)
  }
}