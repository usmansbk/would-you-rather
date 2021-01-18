import { SET_FILTER, UNANSWERED } from "../actions/shared";

export default function appState(state = { filter: UNANSWERED }, action) {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        filter: action.filter,
      };
    default:
      return state;
  }
}
