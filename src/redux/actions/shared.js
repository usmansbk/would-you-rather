import { showLoading, hideLoading } from "react-redux-loading";
import { getInitialData } from "../../api";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";

export function handleInitialData() {
  return async function (dispatch) {
    dispatch(showLoading());
    const { users, questions } = await getInitialData();
    dispatch(receiveUsers(users));
    dispatch(receiveQuestions(questions));
    dispatch(hideLoading());
  };
}
