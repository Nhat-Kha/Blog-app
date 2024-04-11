export const server = "http://localhost:3000/api";

const apiList = {
  login: `${server}/auth/signin`,
  signUp: `${server}/auth/signup`,
  signOut: `${server}/user/signout`,
  getAllUser: `${server}/user/AllUser`,
  getUser: `${server}/user/:userId`,
};

export default apiList;
