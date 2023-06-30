const baseUrlWithSlash = "http://localhost:6002";
  
const apiUrls = {
  auth: {
    login: "api/auth/login",
  },
  // userDocuments: {
  //   deleteUserDocument: (id) => `api/userDocument?_id=${id}`,
  // },
};

export { baseUrlWithSlash as apiBaseUrl };
export default apiUrls;
