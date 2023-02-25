const handleHttpError = function (messge = "", code = 403, res) {
  res.status(code);
  res.send(messge);
};
module.exports  =  handleHttpError;