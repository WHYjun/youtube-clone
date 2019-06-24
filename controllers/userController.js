export const getJoin = (req, res) => res.render('join', { pageTitle: 'Join' });
export const postJoin = (req, res) => {
  const {
    body: { name, email, pwd, pwdConfirmation },
  } = req;

  if (pwd !== pwdConfirmation) {
    res.status(400);
    res.render('join', { pageTitle: 'Join' });
  } else {
    res.redirect(routes.home);
  }
  res.render('join', { pageTitle: 'Join' });
};
export const getSignin = (req, res) =>
  res.render('signin', { pageTitle: 'Sign In' });
export const postSignin = (req, res) => {
  res.redirect(routes.home);
};
export const signout = (req, res) => {
  res.redirect(routes.home);
};
export const userDetail = (req, res) =>
  res.render('userDetail', { pageTitle: 'User Detail' });
export const editProfile = (req, res) =>
  res.render('editProfile', { pageTitle: 'Edit Profile' });
export const changePassword = (req, res) =>
  res.render('changePassword', { pageTitle: 'Change Password' });
