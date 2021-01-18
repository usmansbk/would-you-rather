export const SET_AUTHED_USER = "auth/set_user";
export const REMOVE_AUTHED_USER = "auth/remove_authed_user";

export function setAuthedUser(id) {
  return {
    type: SET_AUTHED_USER,
    id,
  };
}

export function logout() {
  return {
    type: REMOVE_AUTHED_USER,
  };
}
