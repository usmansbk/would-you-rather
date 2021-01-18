export function formatOption(question, value) {
  const { optionOne, optionTwo } = question;
  const option = question[value];
  const count = option?.votes.length;
  const optionOneVoteCount = optionOne.votes.length;
  const optionTwoVoteCount = optionTwo.votes.length;
  const total = optionOneVoteCount + optionTwoVoteCount;
  const percent = (count / total) * 100;
  return {
    count,
    text: option.text,
    total,
    percent: `${percent.toFixed(1)}%`,
  };
}
