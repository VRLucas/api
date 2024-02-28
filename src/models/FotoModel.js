import Sequelize, { Model } from "sequelize";
import appConfing from "../config/appConfing";


export default class Foto extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty:{
            msg: `Esse campo nao pode ficar vazio`
          }
        }
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty:{
            msg: `Esse campo nao pode ficar vazio`
          }
        }
      },
      url: {
        type: Sequelize.VIRTUAL,
        get() {
          return `${appConfing.url}/images/${this.getDataValue('filename')}`;
        }
      }


    }, {
      sequelize,
      tableName: 'fotos',

    });
    return this;
  }
  static association(models) {
   this.belongsTo(models.Aluno,{foreignKey: 'aluno_id', as: 'alunos' });
  }
}
