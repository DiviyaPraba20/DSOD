import { State, Store, Action, StateContext, Selector } from '@ngxs/store';
import { CMSContentTypeModel, CMSPageContent, sponsors } from '../models';
import * as actions from '../actions/cms.actions';
import { CMSService } from '../services/cms.service';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export interface State {
  categories: CMSContentTypeModel[];
  contentTypes: CMSContentTypeModel[];
  pageContent: CMSPageContent[];
  featuredTopics: CMSPageContent[];
  latestTopics: CMSPageContent[];
  trendingTopics: CMSPageContent[];
  sponsorsList: sponsors[];
  sponsoredTopics: CMSPageContent[];
  podcasts: CMSPageContent[];
  error: Error;
}

@State<State>({
  name: 'cms',
  defaults: {
    categories: [],
    contentTypes: [],
    pageContent: [],
    featuredTopics: [],
    latestTopics: [],
    trendingTopics: [],
    sponsorsList: [],
    sponsoredTopics: [],
    podcasts: [],
    error: null
  }
})
export class CMSState {
  constructor(private store: Store, private service: CMSService) {}
  // categories action decorators
  @Action(actions.FetchCategories)
  fetchCategories({ dispatch }: StateContext<State>) {
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
    { patchState, getState }: StateContext<State>,
    action: actions.FetchCategoriesSuccess
  ) {
    const state = getState();
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
  // contentTypes action decoratos
  @Action(actions.FetchContentTypes)
  fetchContentTypes({ patchState, dispatch, getState }: StateContext<State>) {
    return this.service.findAllContentType().pipe(
      map(a => {
        const state = getState();
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
    { patchState, getState }: StateContext<State>,
    action: actions.FetchContentTypesSuccess
  ) {
    const state = getState();
    return patchState({
      contentTypes: action.payload
    });
  }

  @Action(actions.FetchContentTypesFailure)
  fetchContentTypesFailure(
    { patchState }: StateContext<State>,
    action: actions.FetchContentTypesFailure
  ) {
    return patchState({
      error: action.payload
    });
  }

  // featuredTopics action deocrators
  @Action(actions.FetchFeaturedTopics)
  fetchFeaturedTopics(
    { patchState, dispatch, getState }: StateContext<State>,
    action: actions.FetchFeaturedTopics
  ) {
    return this.service.findAllContents(action.payload).pipe(
      map(a => {
        if (a.code === 0) {
          return a.resultMap;
        }
        throwError(new Error(a.msg));
      }),
      exhaustMap(result =>
        dispatch(new actions.FetchFeaturedTopicsSuccess(result.data))
      ),
      catchError(err => dispatch(new actions.FetchFeaturedTopicsFailure(err)))
    );
  }

  @Action(actions.FetchFeaturedTopicsSuccess)
  fetchFeaturedTopicsSuccess(
    { patchState, getState }: StateContext<State>,
    action: actions.FetchFeaturedTopicsSuccess
  ) {
    return patchState({
      featuredTopics: action.payload
    });
  }

  @Action(actions.FetchFeaturedTopicsFailure)
  fetchFeaturedTopicsFailure(
    { patchState, getState }: StateContext<State>,
    action: actions.FetchFeaturedTopicsFailure
  ) {
    return patchState({
      error: action.payload
    });
  }

  // latestTopics action decoratores
  @Action(actions.FetchLatestTopics)
  fetchLatestTopics(
    { patchState, dispatch, getState }: StateContext<State>,
    action: actions.FetchLatestTopics
  ) {
    return this.service.findAllContents(action.payload).pipe(
      map(a => {
        if (a.code === 0) {
          return a.resultMap;
        }
        throwError(new Error(a.msg));
      }),
      exhaustMap(result =>
        dispatch(new actions.FetchLatestTopicsSuccess(result.data))
      ),
      catchError(err => dispatch(new actions.FetchLatestTopicsFailure(err)))
    );
  }

  @Action(actions.FetchLatestTopicsSuccess)
  fetchLatestTopicsSuccess(
    { patchState, getState }: StateContext<State>,
    action: actions.FetchLatestTopicsSuccess
  ) {
    return patchState({ latestTopics: action.payload });
  }

  @Action(actions.FetchLatestTopicsFailure)
  fetchLatestTopicsFailure(
    { patchState, getState }: StateContext<State>,
    action: actions.FetchLatestTopicsFailure
  ) {
    return patchState({
      error: action.payload
    });
  }

  // trendingTopics action decorators

  @Action(actions.FetchTrendingTopics)
  fetchTrendingTopics(
    { patchState, dispatch, getState }: StateContext<State>,
    action: actions.FetchTrendingTopics
  ) {
    return this.service.trending(action.payload).pipe(
      map(a => {
        if (a.code === 0) {
          return a.resultMap;
        }
        throwError(new Error(a.msg));
      }),
      exhaustMap(result =>
        dispatch(new actions.FetchTrendingTopicsSuccess(result.data))
      ),
      catchError(err => dispatch(new actions.FetchTrendingTopicsFailure(err)))
    );
  }

  @Action(actions.FetchTrendingTopicsSuccess)
  fetchTrendingTopicsSuccess(
    { patchState, getState }: StateContext<State>,
    action: actions.FetchTrendingTopicsSuccess
  ) {
    return patchState({ trendingTopics: action.payload });
  }

  @Action(actions.FetchTrendingTopicsFailure)
  fetchTrendingTopicsFailure(
    { patchState, getState }: StateContext<State>,
    action: actions.FetchTrendingTopicsFailure
  ) {
    return patchState({
      error: action.payload
    });
  }
  // sponsors list action decorators
  @Action(actions.FetchSponsorsList)
  fetchSponsersList(
    { dispatch }: StateContext<State>,
    action: actions.FetchSponsorsList
  ) {
    return this.service.getAllSponsors().pipe(
      map(a => {
        if (a.code === 0) {
          return a.resultMap;
        }
        throwError(new Error(a.msg));
      }),
      exhaustMap(result =>
        dispatch(new actions.FetchSponsorsListSuccess(result.sponsors))
      ),
      catchError(err => dispatch(new actions.FetchSponsorsListFailure(err)))
    );
  }

  @Action(actions.FetchSponsorsListSuccess)
  fetchSponsersListSuccess(
    { patchState }: StateContext<State>,
    action: actions.FetchSponsorsListSuccess
  ) {
    return patchState({ sponsorsList: action.payload });
  }

  @Action(actions.FetchSponsorsListFailure)
  fetchSponsersListFailure(
    { patchState }: StateContext<State>,
    action: actions.FetchSponsorsListFailure
  ) {
    return patchState({ error: action.payload });
  }

  // sponsoredTopics action decorators

  @Action(actions.FetchSponsoredTopics)
  fetchSponsoredTopics(
    { patchState, dispatch, getState }: StateContext<State>,
    action: actions.FetchSponsoredTopics
  ) {
    return this.service.findAllContents(action.payload).pipe(
      map(a => {
        if (a.code === 0) {
          return a.resultMap;
        }
        throwError(new Error(a.msg));
      }),
      exhaustMap(result =>
        dispatch(new actions.FetchSponsoredTopicsSuccess(result.data))
      ),
      catchError(err => dispatch(new actions.FetchSponsoredTopicsFailure(err)))
    );
  }

  @Action(actions.FetchSponsoredTopicsSuccess)
  fetchSponsoredTopicsSuccess(
    { patchState, getState }: StateContext<State>,
    action: actions.FetchSponsoredTopicsSuccess
  ) {
    return patchState({ sponsoredTopics: action.payload });
  }

  @Action(actions.FetchSponsoredTopicsFailure)
  fetchSponsoredTopicsFailure(
    { patchState, getState }: StateContext<State>,
    action: actions.FetchSponsoredTopicsFailure
  ) {
    return patchState({
      error: action.payload
    });
  }

  // podcasts action decorators

  @Action(actions.FetchPodcasts)
  fetchPodcasts(
    { patchState, dispatch, getState }: StateContext<State>,
    action: actions.FetchPodcasts
  ) {
    return this.service.findAllContents(action.payload).pipe(
      map(a => {
        if (a.code === 0) {
          return a.resultMap;
        }
        throwError(new Error(a.msg));
      }),
      exhaustMap(result =>
        dispatch(new actions.FetchPodcastsSuccess(result.data))
      ),
      catchError(err => dispatch(new actions.FetchPodcastsFailure(err)))
    );
  }

  @Action(actions.FetchPodcastsSuccess)
  fetchPodcastsSuccess(
    { patchState }: StateContext<State>,
    action: actions.FetchPodcastsSuccess
  ) {
    return patchState({ podcasts: action.payload });
  }

  @Action(actions.FetchPodcastsFailure)
  fetchPodcastsFailure(
    { patchState }: StateContext<State>,
    action: actions.FetchPodcastsFailure
  ) {
    return patchState({ error: action.payload });
  }
}