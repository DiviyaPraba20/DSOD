export enum AppActionTypes {
  INIT = '[App] Init',
  ROUTE_NAVIGATE = '[App] Navigate'
}

export class AppInit {
  static readonly type = AppActionTypes.INIT;
  constructor() {}
}


export class AppNavigate {
  static readonly type = AppActionTypes.ROUTE_NAVIGATE;
  constructor(public payload: string) { }
}

export type AppActions = AppInit | AppNavigate;
