import { Action } from '@ngxs/store';
import { Bookmark, UniteMagazine } from '../models/cms.models';
import { Response } from '../../core/models/common';
import {
  CMSContentParams,
  CMSContentTypeModel,
  CMSResponse,
  CMSPageContent,
  Sponsor,
  RemoveBookmarkPayload
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
  AddBookmark = '[CMS] Add Bookmark',
  AddBookmarkSuccess = '[CMS] AddBookmark Success',
  AddBookmarkFailure = '[CMS] AddBookmark Failure',
  RemoveBookmark = '[CMS] Remove Bookmark',
  RemoveBookmarkSuccess = '[CMS] Remove Bookmark Success',
  RemoveBookmarkFailure = '[CMS] Remove Bookmark Failure',
  ResetState = '[CMS] Reset State',
  FetchDSOPractices = '[CMS] Fetch DSO Practices',
  FetchDSOPracticesSuccess = '[CMS] Fetch DSO Practices Success',
  FetchDSOPracticesFailure = '[CMS] Fetch DSO Practices Failure',
  FetchSponsorContents = '[CMS] Fetch Sponsor Contents',
  FetchSponsorContentsSuccess = '[CMS] Fetch Sponsor Contents Success',
  FetchSponsorContentsFailure = '[CMS] Fetch Sponsor Contents Failure',
  FetchUnites = '[CMS] Fetch Unites',
  FetchUnitesSuccess = '[CMS] Fetch Unites Success',
  FetchUnitesFailure = '[CMS] Fetch Unites Failure',
  FetchUniteContent = '[CMS] Fetch Unite Content',
  FetchUniteContentSuccess = '[CMS] Fetch Unite Content Success',
  FetchUniteContentFailure = '[CMS] Fetch Unite Content Failure',
  FetchContents = '[CMS] Fetch Contents',
  FetchContentsSuccess = '[CMS] Fetch Contents Success',
  FetchContentsFailure = '[CMS] Fetch Contents Failure'
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

// actions for sponsor contents
export class FetchSponsorContents {
  static readonly type = CMSActions.FetchSponsorContents;

  constructor(public payload: CMSContentParams) {}
}
export class FetchSponsorContentsSuccess {
  static readonly type = CMSActions.FetchSponsorContentsSuccess;

  constructor(public payload: CMSPageContent[]) {}
}
export class FetchSponsorContentsFailure {
  static readonly type = CMSActions.FetchSponsorContentsFailure;

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

  constructor(public payload: Sponsor[]) {}
}
export class FetchSponsorsListFailure {
  static readonly type = CMSActions.FetchSponsorsListFailure;

  constructor(public payload: Error) {}
}
// page content
export class FetchPageContent {
  static readonly type = CMSActions.FetchPageContent;

  constructor(public payload: string, public isPreview?: boolean) {}
}
export class FetchPageContentSuccess {
  static readonly type = CMSActions.FetchPageContentSuccess;

  constructor(public payload: any) {}
}
export class FetchPageContentFailure {
  static readonly type = CMSActions.FetchPageContentFailure;

  constructor(public payload: Error) {}
}

// actions for search results
export class FetchSearchResults {
  static readonly type = CMSActions.FetchSearchResults;
  constructor(public payload: any) {}
}
export class FetchSearchResultsSuccess {
  static readonly type = CMSActions.FetchSearchResultsSuccess;
  constructor(public payload: CMSResponse<CMSPageContent>) {}
}
export class FetchSearchResultsFailure {
  static readonly type = CMSActions.FetchSearchResultsFailure;
  constructor(public payload: Error) {}
}

// actions for bookmark feature
export class AddBookmark {
  static readonly type = CMSActions.AddBookmark;
  constructor(public payload: Bookmark) {}
}
export class AddBookmarkSuccess {
  static readonly type = CMSActions.AddBookmarkSuccess;
  constructor(public payload: Response) {}
}
export class AddBookmarkFailure {
  static readonly type = CMSActions.AddBookmarkFailure;
  constructor(public payload: any) {}
}

export class RemoveBookmark {
  static readonly type = CMSActions.RemoveBookmark;
  constructor(public payload: RemoveBookmarkPayload) {}
}
export class RemoveBookmarkSuccess {
  static readonly type = CMSActions.RemoveBookmarkSuccess;
  constructor(public payload: Response) {}
}
export class RemoveBookmarkFailure {
  static readonly type = CMSActions.RemoveBookmarkFailure;
  constructor(public payload: any) {}
}

// DSO Practices
export class FetchDSOPractices {
  static readonly type = CMSActions.FetchDSOPractices;
  constructor(public payload: any) {}
}
export class FetchDSOPracticesSuccess {
  static readonly type = CMSActions.FetchDSOPracticesSuccess;
  constructor(public payload: CMSPageContent[]) {}
}
export class FetchDSOPracticesFailure {
  static readonly type = CMSActions.FetchDSOPracticesFailure;
  constructor(public payload: Error) {}
}

// reset State
export class ResetState {
  static readonly type = CMSActions.ResetState;

  constructor() {}
}
//  actions for Unite Magazines list
export class FetchUnites {
  static readonly type = CMSActions.FetchUnites;
  constructor(public payload: CMSContentParams) {}
}
export class FetchUnitesSuccess {
  static readonly type = CMSActions.FetchUnitesSuccess;
  constructor(public payload: UniteMagazine[]) {}
}
export class FetchUnitesFailure {
  static readonly type = CMSActions.FetchUnitesFailure;
  constructor(public payload: Error) {}
}

//  actions for Unite content
export class FetchUniteContent {
  static readonly type = CMSActions.FetchUniteContent;
  constructor(public payload: string) {}
}
export class FetchUniteContentSuccess {
  static readonly type = CMSActions.FetchUniteContentSuccess;
  constructor(public payload: any) {}
}
export class FetchUniteContentFailure {
  static readonly type = CMSActions.FetchUniteContentFailure;
  constructor(public payload: Error) {}
}

// actions for author contents
export class FetchContents {
  static readonly type = CMSActions.FetchContents;

  constructor(public payload: CMSContentParams) {}
}
export class FetchContentsSuccess {
  static readonly type = CMSActions.FetchContentsSuccess;

  constructor(public payload: CMSPageContent[]) {}
}
export class FetchContentsFailure {
  static readonly type = CMSActions.FetchContentsFailure;

  constructor(public payload: Error) {}
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
  | AddBookmark
  | AddBookmarkSuccess
  | AddBookmarkFailure
  | RemoveBookmark
  | RemoveBookmarkSuccess
  | RemoveBookmarkFailure
  | FetchDSOPractices
  | FetchDSOPracticesSuccess
  | FetchDSOPracticesFailure
  | ResetState
  | FetchSponsorContents
  | FetchSponsorContentsSuccess
  | FetchSponsorContentsFailure
  | FetchUnites
  | FetchUnitesSuccess
  | FetchUnitesFailure
  | FetchUniteContent
  | FetchUniteContentSuccess
  | FetchUniteContentFailure
  | FetchContents
  | FetchContentsSuccess
  | FetchContentsFailure;
