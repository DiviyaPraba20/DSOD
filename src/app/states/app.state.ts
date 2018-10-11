import { Action, State, StateContext, Store } from "@ngxs/store";
import * as actions from '../actions'

export interface State {
    init: boolean
}

@State<State>({
    name: 'app',
    defaults: {
        init: false,
    }
})
export class AppState {
    constructor(private store: Store) { }

    @Action(actions.AppInit)
    appInit(ctx:StateContext<State>){
        ctx.patchState({ init:true });
    }
   
}
