export interface Content {
  id?: string;
  email?: string;
  title?: string;
  content?: string;
  authorId?: string;
  contentTypeId?: string;
  categoryId?: string;
  sponsorId?: string;
  authorName?: string;
  contentTypeName?: string;
  categoryName?: string;
  sponserName?: string;
  featuredMediaId?: string;
  photos?: string;
  videos?: string;
  podcasts?: string;
  isPrivate?: boolean;
  isComplete?: boolean;
  isPublishNow?: boolean;
  isBookmark?: boolean;
  nextContentId?: string;
  previousContentId?: string;
  countOfComment?: number;
  avgCommentRating?: number;
  comment?: string;
  publishDate: Date;
}
