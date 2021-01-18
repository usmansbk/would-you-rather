export const SET_AUTHED_USER = "auth/set_user";

export function setAuthedUser(id) {
  return {
    type: SET_AUTHED_USER,
    id,
  };
}
