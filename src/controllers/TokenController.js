import User from '../models/UserModels';
import jwt from 'jsonwebtoken';
class TokenController {
  async store(req, res) {
    try {
      const { email = '', password = '' } = req.body;

      if (!email || !password) {
        return res.status(401).json({
          errors: ['Credenciais Inválidas'],
        });
      }

      const user = await User.findOne({ where: { email } });
      if (!(await user.passwordIsValid(password))) {
        return res.status(401).json({
          errors: ['Senha inválida']
        })

      }
      if (!user) {
        return res.status(401).json({
          errors: ['Usuario não Existe'],

        })
      }
      const { id } = user;
      const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION,
      });
      res.json({token: token, user: {nome: user.nome, id, email}});

    } catch (e) {
      return res.status(501).json('Erro na consulta ao banco de dados');

    }

  }
}

export default new TokenController();

