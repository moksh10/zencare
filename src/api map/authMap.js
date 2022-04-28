import login from "../api/Auth/login.js";
import logout from "../api/Auth/logout.js";
import getUserInfo from "../api/Auth/userInfo.js";
export const authMap = (entity) => {
  const entities = {
    login: login,
    logout: logout,
    userInfo: getUserInfo,
  };
  return entities[entity];
};
