import { showLoading, hideLoading } from "react-redux-loading";
import { saveQuestionAnswer, saveQuestion } from "../../api";

export const RECIEVE_QUESTIONS = "questions/receive_tweets";
export const SAVE_USER_VOTE = "questions/save_vote";
export const REMOVE_USER_VOTE = "questions/remove_vote";
export const ADD_QUESTION = "questions/add";
export const SET_FILTER = "question/filter_by";

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function handleAddQuestion({ optionOneText, optionTwoText }) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authedUser } = getState();
    const question = await saveQuestion({
      author: authedUser,
      optionOneText,
      optionTwoText,
    });
    dispatch(addQuestion(question));
    return dispatch(hideLoading());
  };
}

export function receiveQuestions(questions) {
  return {
    type: RECIEVE_QUESTIONS,
    questions,
  };
}

function removeQuestionAnswer({ id, authedUser }) {
  return {
    type: REMOVE_USER_VOTE,
    id,
    authedUser,
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
      return await saveQuestionAnswer(info);
    } catch (e) {
      console.warn("Error in handleAnswerQuestion");
      dispatch(removeQuestionAnswer(info));
      alert("There was an error saving answer. Try again.");
    }
  };
}
