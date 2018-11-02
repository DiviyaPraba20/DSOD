import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'contentFilter' })
export class CMSContentFilter implements PipeTransform {
  _filterdResult: any[];
  transform(data: any[], contentTypeName: string) {
    this._filterdResult = data.filter(item => item.content !== null);
    return this._filterdResult;
  }
}
