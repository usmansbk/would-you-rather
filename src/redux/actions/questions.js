export const RECIEVE_QUESTIONS = "questions/receive_tweets";

export function receiveQuestions(questions) {
  return {
    type: RECIEVE_QUESTIONS,
    questions,
  };
}
