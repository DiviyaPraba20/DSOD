
export enum LayoutActionTypes {
  ChangeProfilePanelStatus = '[Layout] Change Profile Panel Status',
  ChangeProfileEditMode = '[Layout] Change Profile Edit Mode'
}

export class ChangeProfilePanelStatus {
  static readonly type = LayoutActionTypes.ChangeProfilePanelStatus;
  constructor(public payload: boolean) {}
}

export class ChangeProfileEditMode {
  static readonly type = LayoutActionTypes.ChangeProfileEditMode;

  constructor(public payload: boolean) {}
}

export type AuthActions = ChangeProfilePanelStatus
  | ChangeProfileEditMode;
