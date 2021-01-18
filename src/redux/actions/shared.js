import { showLoading, hideLoading } from "react-redux-loading";
import { getInitialData } from "../../api";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";

export const ANSWERED = "answered";
export const UNANSWERED = "unanswered";
export const SET_FILTER = "question/filter_by";

export function setFilter(filter) {
  return {
    type: SET_FILTER,
    filter,
  };
}

export function handleInitialData() {
  return async function (dispatch) {
    dispatch(showLoading());
    const { users, questions } = await getInitialData();
    dispatch(receiveUsers(users));
    dispatch(receiveQuestions(questions));
    dispatch(hideLoading());
  };
}
