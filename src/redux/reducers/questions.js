import {
  RECIEVE_QUESTIONS,
  SAVE_USER_VOTE,
  REMOVE_USER_VOTE,
  ADD_QUESTION,
} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECIEVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case SAVE_USER_VOTE:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          [action.answer]: {
            ...state[action.id][action.answer],
            votes: [
              ...state[action.id][action.answer].votes.filter(
                (user) => user !== action.authedUser
              ),
              action.authedUser,
            ],
          },
        },
      };
    case REMOVE_USER_VOTE:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          [action.answer]: {
            ...state[action.id][action.answer],
            votes: state[action.id][action.answer].votes.filter(
              (user) => user !== action.authedUser
            ),
          },
        },
      };
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };
    default:
      return state;
  }
}
