export const server = "http://localhost:3000/api";

const apiList = {
  // AUTH and USER
  login: `${server}/auth/signin`,
  signUp: `${server}/auth/signup`,
  LoginGoogle: `${server}/auth/google`,
  signOut: `${server}/user/signout`,
  getAllUser: `${server}/user/AllUser`,
  getUser: `${server}/user/:userId`,
  updateUser: `${server}/user/update/`,
  deleteUser: `${server}/user/delete/:userId`,
  allUserOfAdmin: `${server}/user/allUserOfAdmin`,

  // COMMENT
  create: `${server}/comment/create`,
  getPostComment: `${server}/comment/getPostComments/:postId`,
  likeComment: `${server}/comment/likeComment/:commentId`,
  deleteComment: `${server}/comment/deleteComment/:commentId`,
  editComment: `${server}/comment/editComment/:commentId`,
  getComment: `${server}/comment/getcomments`,

  // POST
  createPost: `${server}/post/create`,
  getPost: `${server}/post/getposts`,
  deletePost: `${server}/post/deletepost/:postId/:userId`,
  updatePost: `${server}/post/updatepost/:postId/:userId`,
};

export default apiList;
