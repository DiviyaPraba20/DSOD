import { State, Store, Action, StateContext, Selector } from '@ngxs/store';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import { Response } from '../../core/models/common';
import {
  CMSContentTypeModel,
  CMSPageContent,
  sponsors,
  CMSResponse
} from '../models';
import * as actions from '../actions/cms.actions';
import { CMSService } from '../services/cms.service';

export interface State {
  categories: CMSContentTypeModel[];
  contentTypes: CMSContentTypeModel[];
  pageContent: CMSPageContent;
  featuredTopics: CMSPageContent[];
  latestTopics: CMSPageContent[];
  trendingTopics: CMSPageContent[];
  sponsorsList: sponsors[];
  sponsoredTopics: CMSPageContent[];
  podcasts: CMSPageContent[];
  searchResults: CMSResponse<CMSPageContent>;
  isLoading: boolean;
  error: Error;
}

@State<State>({
  name: 'cms',
  defaults: {
    categories: [],
    contentTypes: [],
    pageContent: null,
    featuredTopics: [],
    latestTopics: [],
    trendingTopics: [],
    sponsorsList: [],
    sponsoredTopics: [],
    podcasts: [],
    searchResults: null,
    isLoading: false,
    error: null
  }
})
export class CMSState {

  constructor(
    private store: Store,
    private service: CMSService,
    private toastr: ToastrService
  ) {}

  @Selector()
  static searchedResults(state: State) {
    return state.searchResults;
  }

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
    patchState({
      featuredTopics: [],
      latestTopics: [],
      trendingTopics: [],
      sponsorsList: [],
      sponsoredTopics: [],
      podcasts: []
    });
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
    { patchState, dispatch }: StateContext<State>,
    action: actions.FetchTrendingTopics
  ) {
    patchState({ trendingTopics: [] });
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
    let sponsored = getState().sponsoredTopics;
    sponsored = [...sponsored, ...action.payload];
    return patchState({ sponsoredTopics: sponsored });
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
    { dispatch, patchState }: StateContext<State>,
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

  // page content action decorators
  @Action(actions.FetchPageContent)
  fetchPageContent(
    { dispatch, patchState }: StateContext<State>,
    action: actions.FetchPageContent
  ) {
    patchState({ pageContent: null });
    return this.service.findOneContents(action.payload, action.isPreview).pipe(
      map(a => {
        if (a.code === 0) {
          return a.resultMap;
        }
        throwError(new Error(a.msg));
      }),
      exhaustMap(result =>
        dispatch(new actions.FetchPageContentSuccess(result.data))
      ),
      catchError(err => dispatch(new actions.FetchPageContentFailure(err)))
    );
  }

  @Action(actions.FetchPageContentSuccess)
  fetchPageContentSuccess(
    { patchState }: StateContext<State>,
    action: actions.FetchPageContentSuccess
  ) {
    return patchState({ pageContent: action.payload });
  }

  @Action(actions.FetchPodcastsFailure)
  fetchPageContentFailure(
    { patchState }: StateContext<State>,
    action: actions.FetchPageContentFailure
  ) {
    return patchState({ error: action.payload });
  }

  // reset
  @Action(actions.ResetState)
  resetState({ patchState, getState }: StateContext<State>) {
    patchState({
      featuredTopics: [],
      latestTopics: [],
      trendingTopics: [],
      sponsorsList: [],
      sponsoredTopics: [],
      pageContent: null,
      podcasts: []
    });
  }

  // search results  action decorators
  @Action(actions.FetchSearchResults)
  fetchSearchResults(
    { dispatch, patchState }: StateContext<State>,
    action: actions.FetchSearchResults
  ) {
    patchState({ searchResults: null });
    return this.service.findAllBySearch(action.payload).pipe(
      map(a => {
        if (a.code === 0) {
          return a;
        }
        throwError(new Error(a.msg));
      }),
      exhaustMap(result =>
        dispatch(new actions.FetchSearchResultsSuccess(result))
      ),
      catchError(err => dispatch(new actions.FetchSearchResultsFailure(err)))
    );
  }

  @Action(actions.FetchSearchResultsSuccess)
  fetchSearchResultsSuccess(
    { patchState }: StateContext<State>,
    action: actions.FetchSearchResultsSuccess
  ) {
    return patchState({ searchResults: action.payload });
  }

  @Action(actions.FetchSearchResultsSuccess)
  featureSearchResultsFailure(
    { patchState }: StateContext<State>,
    action: actions.FetchSearchResultsFailure
  ) {
    return patchState({ error: action.payload });
  }

  // bookmark action decorators
  @Action(actions.AddBookmark)
  addBookmark({ dispatch, patchState }: StateContext<State>, action: actions.AddBookmark) {
    patchState({ isLoading: true, error: null });
    return this.service.addBookmark(action.payload).pipe(
      exhaustMap((response: Response) => {
        if (response.code === 0) {
          return dispatch(new actions.AddBookmarkSuccess(response));
        }
        return dispatch(new actions.AddBookmarkFailure(response.msg));
      })
    );
  }

  @Action(actions.AddBookmarkSuccess)
  addBookmarkSuccess({ patchState, getState }: StateContext<State>, action: actions.AddBookmarkSuccess) {
    const state = getState();
    return patchState({
      pageContent: {
        ...state.pageContent,
        isBookmark: true
      }
    });
  }

  @Action(actions.AddBookmarkFailure)
  addBookmarkFailure({ patchState }: StateContext<State>, action: actions.AddBookmarkFailure) {
    return patchState({ error: action.payload });
  }

  @Action(actions.RemoveBookmark)
  removeBookmark({ dispatch, patchState }: StateContext<State>, action: actions.RemoveBookmark) {
    return this.service.removeBookmark(action.payload).pipe(
      exhaustMap((response: Response) => {
        if (response.code === 0) {
          return dispatch(new actions.RemoveBookmarkSuccess(response));
        }
        return dispatch(new actions.RemoveBookmarkFailure(response.msg));
      })
    );
  }

  @Action(actions.RemoveBookmarkSuccess)
  removeBookmarkSuccess({ patchState, getState }: StateContext<State>, action: actions.RemoveBookmarkSuccess) {
    const state = getState();
    return patchState({
      pageContent: {
        ...state.pageContent,
        isBookmark: false
      }
    });
  }

  @Action(actions.RemoveBookmarkFailure)
  removeBookmarkFailure({ patchState }: StateContext<State>, action: actions.RemoveBookmarkFailure) {
    return patchState({ error: action.payload });
  }
}
