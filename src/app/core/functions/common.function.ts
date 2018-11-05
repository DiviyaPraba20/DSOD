import { Response } from '../models';
import { throwError } from 'rxjs';

export function handleAPIAuthResponse(res: Response) {
  debugger;
  if (res.code !== 0) {
    return throwError(res);
  }
  return res;
}
