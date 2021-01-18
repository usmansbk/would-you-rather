export const RECIEVE_USERS = "questions/receive_users";

export function receiveUsers(users) {
  return {
    type: RECIEVE_USERS,
    users,
  };
}
