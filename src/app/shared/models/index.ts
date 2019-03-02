import { DSODContent } from 'src/app/core/models';

export interface DSODSliderContent extends DSODContent {
  actionLink: string;
  actionName: string;
  src: string;
  url: string;
  filterby?:string;
  sponsoredBy?:string;
  logo?:string
}
export interface DSODContentAuthor {
  _id: string;
  sort: number;
  firstName: string;
  lastName: string;
  authorDetails: String;
  email: string;
  cellPhone: number;
  role: string;
  objectId: any;
}
