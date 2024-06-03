export const server =
  // "http://localhost:8000/api";
  "https://blog-app-ucnt.onrender.com/api";

const apiList = {
  // AUTH and USER
  login: `${server}/auth/signin`,
  signUp: `${server}/auth/signup`,
  LoginGoogle: `${server}/auth/google`,
  signOut: `${server}/user/signout`,
  getAllUser: `${server}/user/AllUser`,
  getUser: `${server}/user/`,
  updateUser: `${server}/user/update/`,
  deleteUser: `${server}/user/delete/:userId`,
  allUserOfAdmin: `${server}/user/allUserOfAdmin`,

  // COMMENT
  create: `${server}/comment/create`,
  getPostComment: `${server}/comment/getPostComments/`,
  likeComment: `${server}/comment/likeComment/`,
  deleteComment: `${server}/comment/deleteComment/`,
  editComment: `${server}/comment/editComment/`,
  getComment: `${server}/comment/getcomments`,

  // POST
  createPost: `${server}/post/create`,
  getPost: `${server}/post/getposts`,
  deletePost: `${server}/post/deletepost`,
  updatePost: `${server}/post/updatepost/:postId/:userId`,
};

export default apiList;
