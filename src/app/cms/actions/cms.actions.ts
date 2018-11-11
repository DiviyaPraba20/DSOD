import { Action } from '@ngxs/store';
import {
  CMSContentParams,
  CMSContentTypeModel,
  CMSResponse,
  CMSPageContent,
  sponsors
} from '../models';

export enum CMSActions {
  FetchCategories = '[CMS] Fetch Categories',
  FetchCategoriesSuccess = '[CMS] Fetch Categories Success',
  FetchCategoriesFailure = '[CMS] Fetch Categories Failure',
  FetchContentTypes = '[CMS] Fetch Content Types',
  FetchContentTypesSuccess = '[CMS] Fetch Content Types Success',
  FetchContentTypesFailure = '[CMS] Fetch Content Types Failure',
  FetchFeaturedTopics = '[CMS] Fetch Featured Topics',
  FetchFeaturedTopicsSuccess = '[CMS] Fetch Featured Topics Sucsess',
  FetchFeaturedTopicsFailure = '[CMS] Fetch Featured Topics Failure',
  FetchLatestTopics = '[CMS] Fetch Latest Topics',
  FetchLatestTopicsSuccess = '[CMS] Fetch Latest Topics Sucsess',
  FetchLatestTopicsFailure = '[CMS] Fetch Latest Topics Failure',
  FetchTrendingTopics = '[CMS] Fetch Trending Topics',
  FetchTrendingTopicsSuccess = '[CMS] Fetch Trending Topics Sucsess',
  FetchTrendingTopicsFailure = '[CMS] Fetch Trending Topics Failure',
  FetchSponsoredTopics = '[CMS] Fetch sponsored Topics',
  FetchSponsoredTopicsSuccess = '[CMS] Fetch sponsored Topics Success',
  FetchSponsoredTopicsFailuure = '[CMS] Fetch sponsored Topics Failuure',
  FetchPodcasts = '[CMS] Fetch Podcasts Topics',
  FetchPodcastsSuccess = '[CMS] Fetch Podcasts Success',
  FetchPodcastsFailure = '[CMS] Fetch Podcasts Failuure',
  FetchPageContent = '[CMS] Fetch Page Content',
  FetchPageContentSuccess = '[CMS] Fetch Page Content Success',
  FetchPageContentFailure = '[CMS] Fetch Page Content Failuer',
  FetchSponsorsList = '[CMS] Fetch sponsers',
  FetchSponsorsListSuccess = '[CMS] Fetch sponsers Success',
  FetchSponsorsListFailure = '[CMS] Fetch sponsers Failuure',
  FetchSearchResults = '[CMS] Fetch Search Results',
  FetchSearchResultsSuccess = '[CMS] Fetch Search Results Success',
  FetchSearchResultsFailure = '[CMS] Fetch Search Results Failure',
  ResetState = '[CMS] Reset State'
}

// actions for categories
export class FetchCategories {
  static readonly type = CMSActions.FetchCategories;
  constructor() {}
}

export class FetchCategoriesSuccess {
  static readonly type = CMSActions.FetchCategoriesSuccess;

  constructor(public payload: CMSContentTypeModel[]) {}
}

export class FetchCategoriesFailure {
  static readonly type = CMSActions.FetchCategoriesFailure;

  constructor(public payload: Error) {}
}

// actions for content types
export class FetchContentTypes {
  static readonly type = CMSActions.FetchContentTypes;

  constructor() {}
}

export class FetchContentTypesSuccess {
  static readonly type = CMSActions.FetchContentTypesSuccess;

  constructor(public payload: CMSContentTypeModel[]) {}
}

export class FetchContentTypesFailure {
  static readonly type = CMSActions.FetchContentTypesFailure;

  constructor(public payload: Error) {}
}

// actions for featured topics
export class FetchFeaturedTopics {
  static readonly type = CMSActions.FetchFeaturedTopics;

  constructor(public payload: CMSContentParams) {}
}
export class FetchFeaturedTopicsSuccess {
  static readonly type = CMSActions.FetchFeaturedTopicsSuccess;

  constructor(public payload: CMSPageContent[]) {}
}
export class FetchFeaturedTopicsFailure {
  static readonly type = CMSActions.FetchFeaturedTopicsFailure;

  constructor(public payload: Error) {}
}

// actions for latest topics
export class FetchLatestTopics {
  static readonly type = CMSActions.FetchLatestTopics;

  constructor(public payload: CMSContentParams) {}
}
export class FetchLatestTopicsSuccess {
  static readonly type = CMSActions.FetchLatestTopicsSuccess;

  constructor(public payload: CMSPageContent[]) {}
}
export class FetchLatestTopicsFailure {
  static readonly type = CMSActions.FetchLatestTopicsFailure;

  constructor(public payload: Error) {}
}

// actions for trendiing topics
export class FetchTrendingTopics {
  static readonly type = CMSActions.FetchTrendingTopics;

  constructor(public payload: CMSContentParams) {}
}
export class FetchTrendingTopicsSuccess {
  static readonly type = CMSActions.FetchTrendingTopicsSuccess;

  constructor(public payload: CMSPageContent[]) {}
}
export class FetchTrendingTopicsFailure {
  static readonly type = CMSActions.FetchTrendingTopicsFailure;

  constructor(public payload: Error) {}
}

// actions for sponsored topics
export class FetchSponsoredTopics {
  static readonly type = CMSActions.FetchSponsoredTopics;

  constructor(public payload: CMSContentParams) {}
}
export class FetchSponsoredTopicsSuccess {
  static readonly type = CMSActions.FetchSponsoredTopicsSuccess;

  constructor(public payload: CMSPageContent[]) {}
}
export class FetchSponsoredTopicsFailure {
  static readonly type = CMSActions.FetchSponsoredTopicsFailuure;

  constructor(public payload: Error) {}
}

// actions for podcasts
export class FetchPodcasts {
  static readonly type = CMSActions.FetchPodcasts;

  constructor(public payload: CMSContentParams) {}
}
export class FetchPodcastsSuccess {
  static readonly type = CMSActions.FetchPodcastsSuccess;

  constructor(public payload: CMSPageContent[]) {}
}
export class FetchPodcastsFailure {
  static readonly type = CMSActions.FetchPodcastsFailure;

  constructor(public payload: Error) {}
}

// actions for dsodentist sponsers

export class FetchSponsorsList {
  static readonly type = CMSActions.FetchSponsorsList;

  constructor() {}
}
export class FetchSponsorsListSuccess {
  static readonly type = CMSActions.FetchSponsorsListSuccess;

  constructor(public payload: sponsors[]) {}
}
export class FetchSponsorsListFailure {
  static readonly type = CMSActions.FetchSponsorsListFailure;

  constructor(public payload: Error) {}
}
// page content
export class FetchPageContent {
  static readonly type = CMSActions.FetchPageContent;

  constructor(public payload: string) {}
}
export class FetchPageContentSuccess {
  static readonly type = CMSActions.FetchPageContentSuccess;

  constructor(public payload: any) {}
}
export class FetchPageContentFailure {
  static readonly type = CMSActions.FetchPageContentFailure;

  constructor(public payload: Error) {}
}
//actions for search results

export class FetchSearchResults {
  static readonly type = CMSActions.FetchSearchResults;
  constructor(public payload: any) {}
}
export class FetchSearchResultsSuccess {
  static readonly type = CMSActions.FetchSearchResultsSuccess;
  constructor(public payload: CMSPageContent[]) {}
}
export class FetchSearchResultsFailure {
  static readonly type = CMSActions.FetchSearchResultsFailure;
  constructor(public payload: Error) {}
}

//reset State
export class ResetState {
  static readonly type = CMSActions.ResetState;

  constructor() {}
}

export type CMSActionTypes =
  | FetchContentTypes
  | FetchContentTypesSuccess
  | FetchContentTypesFailure
  | FetchCategories
  | FetchCategoriesSuccess
  | FetchCategoriesFailure
  | FetchLatestTopics
  | FetchLatestTopicsSuccess
  | FetchLatestTopicsFailure
  | FetchFeaturedTopics
  | FetchFeaturedTopicsSuccess
  | FetchFeaturedTopicsFailure
  | FetchTrendingTopics
  | FetchTrendingTopicsSuccess
  | FetchTrendingTopicsFailure
  | FetchSponsoredTopics
  | FetchSponsoredTopicsSuccess
  | FetchSponsoredTopicsFailure
  | FetchPodcasts
  | FetchPodcastsSuccess
  | FetchPodcastsFailure
  | FetchSponsorsList
  | FetchSponsorsListSuccess
  | FetchSponsorsListFailure
  | FetchPageContent
  | FetchPageContentSuccess
  | FetchPageContentFailure
  | FetchSearchResults
  | FetchSearchResultsSuccess
  | FetchSearchResultsFailure
  | ResetState;
