import { _getQuestions, _getUsers } from "./_DATA";

export async function getInitialData() {
  const [questions, users] = await Promise.all([_getQuestions(), _getUsers()]);
  return {
    users,
    questions,
  };
}
