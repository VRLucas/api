import  Sequelize  from "sequelize";
import databaseConfig from '../config/database'
import Aluno from '../models/AlunoModels'
import User from '../models/UserModels'
import Foto from '../models/FotoModel'

const models = [Aluno,User, Foto];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.association && model.association(connection.models));

