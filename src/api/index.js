import { _getQuestions, _getUsers, _saveQuestionAnswer } from "./_DATA";

export async function getInitialData() {
  const [questions, users] = await Promise.all([_getQuestions(), _getUsers()]);
  return {
    users,
    questions,
  };
}

export function saveQuestionAnswer(info) {
  return _saveQuestionAnswer(info);
}
