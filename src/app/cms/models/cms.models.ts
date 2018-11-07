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

export interface CMSPageContent {
  id: string;
  email: string;
  title: string;
  content: string;
  authorId: string;
  contentTypeId: string;
  categoryId: string;
  sponsorId: string;
  authorName: string;
  contentTypeName: string;
  categoryName: string;
  sponsorName: string;
  featuredMediaId: string;
  photos: any[];
  videos: any[];
  podcasts: any[];
  isPrivate: boolean;
  isComplete: boolean;
  isPublishNow: boolean;
  isBookmark: boolean;
  nextContentId: string;
  previousContentId: string;
  countOfComment: number;
  avgCommentRating: string;
  comment: DSODComment[];
  publishDate: Date;
  isFeatured: boolean;
  readNumber: number;
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
  sponserId?: string;
  vol?: string;
}

export interface CMSResponse<T> extends Response {
  resultMap: { data?: T[]; sponsors?: T[] };
}

export interface sponsors {
  id: string;
  name: string;
}
