import { RECIEVE_USERS } from "../actions/users";
import { REMOVE_USER_VOTE, SAVE_USER_VOTE } from "../actions/questions";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECIEVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case SAVE_USER_VOTE:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.id]: action.answer,
          },
        },
      };
    case REMOVE_USER_VOTE:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.id]: null,
          },
        },
      };
    default:
      return state;
  }
}
