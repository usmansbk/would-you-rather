export function formatQuestion(question) {
  const { optionOne, optionTwo } = question;
  const optionOneVoteCount = optionOne.votes.length;
  const optionTwoVoteCount = optionTwo.votes.length;
  const totalVotes = optionOneVoteCount + optionTwoVoteCount;
  const optionOnePercent = (optionOneVoteCount / totalVotes) * 100;
  const optionTwoPercent = (optionTwoVoteCount / totalVotes) * 100;
  return {
    optionOne: optionOne.text,
    optionTwo: optionTwo.text,
    optionOneVoteCount,
    optionTwoVoteCount,
    totalVotes,
    optionOnePercent,
    optionTwoPercent,
  };
}
