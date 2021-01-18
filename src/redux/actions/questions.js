import { saveQuestionAnswer } from "../../api";

export const RECIEVE_QUESTIONS = "questions/receive_tweets";
export const SAVE_USER_VOTE = "questions/save_vote";
export const REMOVE_USER_VOTE = "questions/remove_vote";

export function receiveQuestions(questions) {
  return {
    type: RECIEVE_QUESTIONS,
    questions,
  };
}

function removeQuestionAnswer({ id }) {
  return {
    type: REMOVE_USER_VOTE,
    id,
  };
}

function saveUserVote({ qid, authedUser, answer }) {
  return {
    type: SAVE_USER_VOTE,
    id: qid,
    authedUser,
    answer,
  };
}

export function handleAnswerQuestion(info) {
  return async (dispatch) => {
    dispatch(saveUserVote(info));

    try {
      return saveQuestionAnswer(info);
    } catch (e) {
      console.warn("Error in handleAnswerQuestion");
      dispatch(removeQuestionAnswer(info.id));
      alert("There was an error saving answer. Try again.");
    }
  };
}
