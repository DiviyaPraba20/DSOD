import { State, Action, Store, StateContext, Selector } from '@ngxs/store';
import * as actions from '../actions';
import { SharedService } from '../services';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { DSODComment } from 'src/app/cms/models';
import { DSODContentAuthor } from '../models';
export interface State {
  author: DSODContentAuthor;
  comments: DSODComment[];
  pending: boolean;
  response: any;
  error: Error;
}
@State<State>({
  name: 'shared',
  defaults: {
    author: null,
    comments: [],
    pending: false,
    response: null,
    error: null
  }
})
export class SharedState {
  constructor(private store: Store, private service: SharedService) {}
  @Action(actions.AddReview)
  addReview(
    { dispatch, patchState }: StateContext<State>,
    action: actions.AddReview
  ) {
    patchState({ pending: true });
    return this.service.addReview(action.payload).pipe(
      map(a => {
        if (a.code === 0) {
          return a.resultMap;
        }
        throwError(a.msg);
      }),
      exhaustMap(result => dispatch(new actions.AddReviewSuccess(result.data))),
      catchError(err => dispatch(new actions.AddReviewFailure(err)))
    );
  }

  @Action(actions.AddReviewSuccess)
  addReviewSuccess(
    { patchState }: StateContext<State>,
    action: actions.AddReviewSuccess
  ) {
    return patchState({
      response: action.payload,
      pending: false
    });
  }

  @Action(actions.AddReviewFailure)
  addReviewFailure(
    { patchState }: StateContext<State>,
    action: actions.AddReviewFailure
  ) {
    return patchState({
      error: action.payload
    });
  }

  @Action(actions.FetchComments)
  FetchComments(
    { dispatch }: StateContext<State>,
    action: actions.FetchComments
  ) {
    return this.service.findAllReview(action.payload).pipe(
      map(a => {
        if (a.code == 0) {
          return a.resultMap;
        }
        throwError(a.msg);
      }),
      exhaustMap(result =>
        dispatch(new actions.FetchCommentsSuccess(result.data))
      ),
      catchError(err => dispatch(new actions.FetchCommentsFailure(err)))
    );
  }

  @Action(actions.FetchCommentsSuccess)
  fetchCommentsSuccess(
    { patchState }: StateContext<State>,
    action: actions.FetchCommentsSuccess
  ) {
    return patchState({ comments: action.payload });
  }

  @Action(actions.FetchCommentsFailure)
  fetchCommentsFailure(
    { patchState }: StateContext<State>,
    action: actions.FetchCommentsFailure
  ) {
    return patchState({ error: action.payload });
  }
  @Action(actions.FetchAuthor)
  fetchAuthor({ dispatch }: StateContext<State>, action: actions.FetchAuthor) {
    return this.service.fetchAuthor(action.payload).pipe(
      map(a => {
        if (a.code === 0) {
          return a.resultMap;
        }
        throwError(a.msg);
      }),
      exhaustMap(result =>
        dispatch(new actions.FetchAuthorSuccess(result.data))
      ),
      catchError(err => dispatch(new actions.FetchAuthorFailure(err)))
    );
  }

  @Action(actions.FetchAuthorSuccess)
  fetchAuthorSuccess(
    { patchState }: StateContext<State>,
    action: actions.FetchAuthorSuccess
  ) {
    return patchState({
      author: action.payload
    });
  }

  @Action(actions.FetchAuthorFailure)
  fetchAuthorFailure(
    { patchState }: StateContext<State>,
    action: actions.FetchAuthorFailure
  ) {
    return patchState({
      error: action.payload
    });
  }
}
