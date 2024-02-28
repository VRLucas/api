import User from '../models/UserModels'

class UserController {
  async store(req, res) {
    try{
      const novoUser = await User.create(req.body);
      const {id,nome,email} = novoUser
      res.json({id,nome,email});

    }catch (e){
      return res.status(400).json({errors: e.errors.map((err) => err.message )});
    }
  }
  async index(req,res){
    try {
      const user = await User.findAll({
        attributes: ['id','nome', 'email']
      });
      return res.json(user);

    } catch (e) {
      return res.json('Error no encontra usuarios');

    }
  }
  async show(req,res){
    try {
      const user = await User.findByPk(req.userId);
      if(!user) return res.status(400).json({error:'Usuario não existe!'});
      const {nome, email} = user
      res.json({nome,email});

    } catch (e) {
      return  res.json(null);

    }
  }
  async updadte(req,res){
    try {
      const user = await User.findByPk(req.userId)
      if (!user) return res.status(400).json({error: "usuario nao encontrado!"})

      const novoDados = await user.update(req.body)
      const {nome, email} = novoDados;
      return res.json({nome, email});


    } catch (e) {
     return res.status(400).json({errors: e.errors.map((err) => err.message )});

    }

  }
  async delete(req,res){
    try {
      const user = await User.findByPk(req.userId);
      const deleteUser = await user.destroy(req.userId);
      return res.json('Usuario deletado com sucesso');


    } catch (e) {
     return res.json(null);

    }
  }
}
export default new UserController();
