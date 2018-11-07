import { DSODComment } from 'src/app/cms/models';

export enum SharedActions {
  AddReview = '[Review] Add Review',
  AddReviewSuccess = '[Review] Add Review Success',
  AddReviewFailure = '[Review] Add Review Failures',
  FetchComments = '[Review] Fetch Comments',
  FetchCommentsSuccess = '[Review] Fetch Comments Success',
  FetchCommentsFailure = '[Review] Fetch Comments Falilure',
  FetchAuthor = '[Author] Fetch Author',
  FetchAuthorSucess = '[Author] Fetch Author Success',
  FetchAuthorFailure = '[Author] Fetch Author Failures'
}

export class AddReview {
  static readonly type = SharedActions.AddReview;
  constructor(public payload: DSODComment) {}
}
export class AddReviewSuccess {
  static readonly type = SharedActions.AddReviewSuccess;
  constructor(public payload: any) {}
}

export class AddReviewFailure {
  static readonly type = SharedActions.AddReviewFailure;
  constructor(public payload: Error) {}
}

export class FetchComments {
  static readonly type = SharedActions.FetchComments;
  constructor(public payload: string) {}
}
export class FetchCommentsSuccess {
  static readonly type = SharedActions.FetchCommentsSuccess;
  constructor(public payload: DSODComment[]) {}
}

export class FetchCommentsFailure {
  static readonly type = SharedActions.FetchCommentsFailure;
  constructor(public payload: Error) {}
}

export class FetchAuthor {
  static readonly type = SharedActions.FetchAuthor;
  constructor(public payload: string) {}
}
export class FetchAuthorSuccess {
  static readonly type = SharedActions.FetchAuthorSucess;
  constructor(public payload: any) {}
}

export class FetchAuthorFailure {
  static readonly type = SharedActions.FetchAuthorFailure;
  constructor(public payload: Error) {}
}

export type SharedActionsTypes =
  | AddReview
  | AddReviewSuccess
  | AddReviewFailure
  | FetchComments
  | FetchCommentsSuccess
  | FetchCommentsFailure
  | FetchAuthor
  | FetchAuthorSuccess
  | FetchAuthorFailure;
