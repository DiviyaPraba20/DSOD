export interface DSODContent {
  id?: number;
  title: string;
  subtitle?: string;
  description?: string;
  caption?: string;
  contentType: DSODContentType;
}

export enum DSODContentType {
  Video = 'Video',
  Image = 'Image',
  Text = 'Text',
  Other = 'Other'
}

export const getContentType = (contentType: string) =>
  DSODContentType[contentType];
