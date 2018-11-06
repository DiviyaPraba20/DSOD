import { Action, State, StateContext, Store, Selector } from '@ngxs/store';

import * as actions from '../actions';

export interface State {
  isOpenedProfilePanel: boolean;
  isEditProfile: boolean;
}

@State<State>({
  name: 'layout',
  defaults: {
    isOpenedProfilePanel: false,
    isEditProfile: false
  }
})

export class LayoutState {
  @Selector() static isOpenedProfilePanel(state: State) { return state.isOpenedProfilePanel; }
  @Selector() static isEditProfile(state: State) { return state.isEditProfile; }

  constructor( ) { }

  @Action(actions.ChangeProfilePanelStatus)
  changeProfilePanelStatus({ patchState, getState }: StateContext<State>, action: actions.ChangeProfilePanelStatus) {
    const currentState = getState();
    patchState({
      isOpenedProfilePanel: !currentState.isOpenedProfilePanel
    });
  }

  @Action(actions.ChangeProfileEditMode)
  changeEditProfile({ patchState, getState }: StateContext<State>, action: actions.ChangeProfileEditMode) {
    const currentState = getState();
    patchState({
      isEditProfile: action.payload
    });
  }
}
