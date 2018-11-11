import { Response } from '../../core/models';

export interface CMSContentTypeModel {
  id: string;
  name: string;
  sort: number;
}
export interface DSODComment {
  email: string;
  comment_rating: number;
  comment_text: string;
  content_id: string;
  create_time: Date;
}

export interface DSODAuhtor {
  _id: string;
  sort: number;
  firstName: string;
  lastName: string;
  fullName: string;
  authorDetails: any;
  email: string;
  cellPhone: string;
  role: string;
  objectId: string;
}

export interface DSODFeaturedMedia {
  type: string;
  code: {
    thumbnail: string;
    original: string;
    thumbnailUrl: string;
    originalUrl: string;
  };
}

export interface CMSPageContent {
  id: string;
  email: string;
  authorId: string;
  title: string;
  content: any;
  contentTypeId: string;
  categoryId: string;
  sponsorId: string;
  author: DSODAuhtor;
  authorPhotoUrl: null;
  contentTypeName: string;
  categoryName: string;
  sponsorName: string;
  featuredMedia: DSODFeaturedMedia;
  photoUrls: any[];
  photos: any[];
  videos: any[];
  videoUrls: any[];
  podcasts: any[];
  podcastUrls: any[];
  isPrivate: boolean;
  isComplete: boolean;
  isPublishNow: boolean;
  isBookmark: boolean;
  nextContentId: string;
  previousContentId: string;
  countOfComment: any;
  avgCommentRating: any;
  comment: DSODComment[];
  publishDate: any;
  isFeatured: boolean;
  readNumber: number;
  publishOn: Date;
  publishEnd: Date;
  reviewOn: any;
  subTitle: string;
  status: number;
  unite: boolean;
  expedite: boolean;
  excerpt: any;
  countOfEssay: number;
  visualEssays: any;
  relativeTopics: any;
  relativeTopicList: any;
}

export interface CMSContentParams {
  authorId?: string;
  categoryId?: string;
  contentTypeId?: string;
  email?: string;
  limit?: number;
  serial?: string;
  skip?: number;
  isFeatured?: boolean;
  sponsorId?: string;
  vol?: string;
  searchValue?: string;
}

export interface CMSResponse<T> extends Response {
  resultMap: { data?: T[]; sponsors?: T[] };
}

export interface sponsors {
  id: string;
  name: string;
}
