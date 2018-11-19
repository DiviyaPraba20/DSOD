import { Response } from '../models';
import { throwError } from 'rxjs';

export function handleAPIAuthResponse(res: Response) {
  if (res.code !== 0) {
    return throwError(res);
  }
  return res;
}

export function compareElements(a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}
