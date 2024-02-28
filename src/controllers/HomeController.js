import Aluno from '../models/AlunoModels'
class HomeController {
  async index(req,res){
    try{
      const alunos = await Aluno.findAll({attributes: ['id','nome','email','sobrenome','idade','peso','altura']})
      return res.json(alunos)

    }catch(e){
      return res.status(401).json('Alunos não cadastrados');

    }


  }
}

export default new HomeController();
