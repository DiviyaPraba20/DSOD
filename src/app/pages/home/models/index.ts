import { DSODContent } from 'src/app/core/models';

export interface DSODSliderContent extends DSODContent {
  actionLink: string;
  actionName: string;
  src: string;
  url: string;
}
