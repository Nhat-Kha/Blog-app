const isAuth = () => {
  return localStorage.getItem("token");
};

export const getId = () => {
  return localStorage.getItem("id");
};

export default isAuth;
