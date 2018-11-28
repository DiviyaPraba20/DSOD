import { State, Store, Action, StateContext, Selector } from '@ngxs/store';
import { CMSContentTypeModel } from '../models';
import * as actions from '../actions';
import { CMSService } from '../services/cms.service';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
export interface State {
  categories: CMSContentTypeModel[];
  contentTypes: CMSContentTypeModel[];
  error: Error;
}

@State<State>({
  name: 'cms',
  defaults: {
    categories: [],
    contentTypes: [],
    error: null
  }
})
export class CMSState {
  @Selector()
  static categories(state: State) {
    return state.categories;
  }

  @Selector()
  static contetTypes(state: State) {
    return state.contentTypes;
  }

  constructor(private store: Store, private service: CMSService) {}

  @Action(actions.FetchCategories)
  fetchCategories({ patchState, dispatch }: StateContext<State>) {
    return this.service.findAllCategory().pipe(
      map(a => {
        if (a.code === 0) {
          return a.resultMap;
        }
        throwError(new Error(a.msg));
      }),
      exhaustMap(result =>
        dispatch(new actions.FetchCategoriesSuccess(result.data))
      ),
      catchError(err => dispatch(new actions.FetchCategoriesFailure(err)))
    );
  }

  @Action(actions.FetchCategoriesSuccess)
  fetchCategoriesSuccess(
    { patchState }: StateContext<State>,
    action: actions.FetchCategoriesSuccess
  ) {
    return patchState({
      categories: action.payload
    });
  }

  @Action(actions.FetchCategoriesFailure)
  fetchCategoriesFailure(
    { patchState }: StateContext<State>,
    action: actions.FetchCategoriesFailure
  ) {
    return patchState({
      error: action.payload
    });
  }

  @Action(actions.FetchContentTypes)
  fetchContentTypes({ patchState, dispatch }: StateContext<State>) {
    return this.service.findAllContentType().pipe(
      map(a => {
        if (a.code === 0) {
          return a.resultMap;
        }
        throwError(new Error(a.msg));
      }),
      exhaustMap(result =>
        dispatch(new actions.FetchContentTypesSuccess(result.data))
      ),
      catchError(err => dispatch(new actions.FetchContentTypesFailure(err)))
    );
  }

  @Action(actions.FetchContentTypesSuccess)
  fetchContentTypesSuccess(
    { patchState }: StateContext<State>,
    action: actions.FetchContentTypesSuccess
  ) {
    return patchState({
      contentTypes: action.payload
    });
  }

  @Action(actions.FetchContentTypesFailure)
  fetchContentTypesFailure(
    { patchState }: StateContext<State>,
    action: actions.FetchContentTypesFailure
  ) {
    patchState({
      error: action.payload
    });
  }
}
