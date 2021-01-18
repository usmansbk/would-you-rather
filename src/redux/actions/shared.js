import { getInitialData } from "../../api";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";

export function handleInitialData() {
  return async function (dispatch) {
    const { users, questions } = await getInitialData();
    dispatch(receiveUsers(users));
    dispatch(receiveQuestions(questions));
  };
}
