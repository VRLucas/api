import Sequelize, { Model } from "sequelize";

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'O Nome deve ter entre 3 e 255 caracteres'
          }
        }
      },
      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'O Sobrenome deve ter entre 3 e 255 caracteres'
          }
        }
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Este Email já está cadastrado.'
        },
        validate: {
          isEmail: {
            msg: `Email inválido`,

          }
        }
      },
      idade: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isNumeric: {
            msg: ` A idade precisa ser um numero`,

          }
        }
      },
      peso: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isNumeric: {
            msg: ` A peso precisa ser um numero`,

          }
        }
      },
      altura: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isNumeric: {
            msg: ` A altura precisa ser um numero`,

          }
        }
      },
    }, {
      sequelize,

    });
    return this;
  }
  static association(models) {
    this.hasMany(models.Foto, {foreignKey: 'aluno_id'});
   }
}
