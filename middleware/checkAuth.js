const checkAuth = (req, res, next) => {
  console.log("desde chaeckauth.js");
  next();
};

export default checkAuth;
