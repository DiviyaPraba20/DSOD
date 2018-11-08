import { AppState } from './app.state';
import { AuthState } from '../pages/auth/states/auth.state';
import { CMSState } from '../cms/states/cms.state';
import { LayoutState } from '../layout/states/layout.state';
import { SharedState } from '../shared/state';

export const states = [AppState, AuthState, CMSState, LayoutState, SharedState];
