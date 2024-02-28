import Aluno from '../models/AlunoModels'
import Foto from '../models/FotoModel'
class AlunoController {
  async store(req,res){
    try {
      const alunos = await Aluno.create(req.body)
      return res.json(alunos)


    } catch (e) {
      // console.log(e)
      return res.status(400).json({errors: e.errors.map((err) => err.message )});

    }
  }
  async show(req,res){
    try {
      const alunos = await Aluno.findByPk(req.params.id, {attributes: ['id','nome','email','sobrenome','idade','peso','altura'],
      order: [['nome'], [Foto,'id','DESC']],
      include: {
        model: Foto,
        attributes: ['url','originalname',]
      },
    });
      if(!alunos) return res.json('Aluno não encontrado')
      const {nome,sobrenome,email,idade} = alunos
    res.json(alunos);
    } catch (e) {
      return res.json(null);

    }
  }
  async update(req,res){
    try {
      const alunos = await Aluno.findByPk(req.params.id)
      if(!alunos) return res.json('Aluno não existe');
      const novosDados = await alunos.update(req.body);
      const {nome,email} = novosDados
      return res.json(alunos);

    } catch (e) {
      return res.status(400).json({errors: e.errors.map((err) => err.message )});

    }
  }
  async delete(req,res){
    try {
      const alunos = await Aluno.findByPk(req.params.id)
      if(!alunos) return res.json('Aluno não existe');
      const deleteAluno = alunos.destroy(req.params.id)
      return res.json('Aluno deletado com sucesso');

    } catch (e) {
      return res.status(400).json(null);

    }
  }
  async index(req,res){
    try{
      const alunos = await Aluno.findAll({attributes: ['id','nome','email','sobrenome','idade','peso','altura'],
      order: [['nome'], [Foto,'id','DESC']],
      include: {
        model: Foto,
        attributes: ['url','filename','originalname']
      },
    })
      return res.json(alunos)

    }catch(e){
      return res.status(400).json('Alunos não cadastrados');

    }


  }
}

export default new AlunoController();
