import { Response } from '../models';

export function handleAPIResponse(res: Response) {
  if (res.code === 0) {
    return res;
  } else {
    throw res;
  }
}
