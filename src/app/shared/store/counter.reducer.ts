import {createReducer, on} from "@ngrx/store";
import * as CounterAction from "./counter.actions";
import {state} from "@angular/animations";
import {initialState} from "./counter.state";
export const reducer = createReducer(
  initialState,
  on(CounterAction.increment, (state) => ({counter: state.counter + 1})),
  on(CounterAction.decrement, (state) => ({counter: state.counter - 1})),
  on(CounterAction.reset, () => initialState),
)
