export function formatOption(question, value) {
  const { optionOne, optionTwo } = question;
  const option = question[value];
  const optionOneVoteCount = optionOne.votes.length;
  const optionTwoVoteCount = optionTwo.votes.length;
  const total = optionOneVoteCount + optionTwoVoteCount;
  const percent = (optionTwoVoteCount / total) * 100;
  return {
    count: option?.votes.length,
    text: option.text,
    total,
    percent,
  };
}
