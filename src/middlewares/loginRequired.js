import jwt from 'jsonwebtoken';
import User from '../models/UserModels';
export default async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: 'Loguin required' });
  }
  const [texto, token] = authorization.split(' ');

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;
    const user = await User.findOne({ where: { id, email }, })
    req.userId = id
    req.userEmail = email
    if (!user) {
      return res.status(401).json({ error: 'Usuario invalido' });
    }
    next();

  } catch (e) {
    return res.status(401).json({ error: 'Token invalido ou expirado' });

  }

}
