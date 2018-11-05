export enum AuthorActions {
  FetchAuthor = '[Author] Fetch Author',
  FetchAuthorSucess = '[Author] Fetch Author Success',
  FetchAuthorFailure = '[Author] Fetch Author Failures'
}

export class FetchAuthor {
  static readonly type = AuthorActions.FetchAuthor;
  constructor(public payload: string) {}
}
export class FetchAuthorSuccess {
  static readonly type = AuthorActions.FetchAuthor;
  constructor(public payload: string) {}
}

export class FetchAuthorFailure {
  static readonly type = AuthorActions.FetchAuthor;
  constructor(public payload: string) {}
}

export type AuthorActionsTypes =
  | FetchAuthor
  | FetchAuthorSuccess
  | FetchAuthorFailure;
