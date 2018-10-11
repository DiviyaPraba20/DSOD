export enum AppActionTypes {
  INIT = "[App] Init"
}

export class AppInit {
  static readonly type = AppActionTypes.INIT;
  constructor() {}
}

export type Actions = AppInit
