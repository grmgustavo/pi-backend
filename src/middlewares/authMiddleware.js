import TokenService from "../services/tokenService.js";

export default (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({
      erro: "Token não informado!!!",
    });
  }
  const [tipo, token] = authorization.split(" ");
  if (!token) {
    return res.status(401).json({
      erro: "Token não enviado!!!",
    });
  }
  TokenService.validateToken(token)
  next();
};
