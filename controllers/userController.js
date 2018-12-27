export const join = (req, res) => res.render("join", { pageTitle: "Join" });
export const signin = (req, res) =>
  res.render("signin", { pageTitle: "Sign In" });
export const signout = (req, res) =>
  res.render("signout", { pageTitle: "Sign Out" });
export const userDetail = (req, res) =>
  res.render("userDetail", { pageTitle: "User Detail" });
export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "Change Password" });
