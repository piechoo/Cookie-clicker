let cookieModel = {};
let userModel = {};

exports.receiveCookieState = async (req, res) => {
  cookieModel = req.body;
  res.send(cookieModel);
};

exports.receiveUserState = async (req, res) => {
  userModel = req.body;
  res.send(userModel);
};

exports.sendUserState = async (req, res) => {
  res.send(userModel);
};

exports.sendCookieState = async (req, res) => {
  res.send(cookieModel);
};
