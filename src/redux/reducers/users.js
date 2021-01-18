import { RECIEVE_USERS } from "../actions/users";
import {
  REMOVE_USER_VOTE,
  SAVE_USER_VOTE,
  ADD_QUESTION,
} from "../actions/questions";

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
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.author]: {
          ...state[action.question.author],
          questions: [
            ...state[action.question.author].questions.filter(
              (qid) => qid !== action.question.id
            ),
            action.question.id,
          ],
        },
      };
    default:
      return state;
  }
}
