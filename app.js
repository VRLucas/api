import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import helmet from 'helmet';
import delay from 'express-delay';

import './src/database';
import {resolve} from 'path';
import express from 'express';
import home from './src/routes/home';
import aluno from './src/routes/alunos';
import user from './src/routes/user'
import token from './src/routes/token'
import foto from './src/routes/foto'



class App {
  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(cors({
      origin: '*',
      credentials: true,
      optionsSuccessStatus: 200 // some legacy browsers (IE11, various versions of Safari) choke on 20
    }))
    this.app.use(helmet());
    this.app.use(delay(2000));
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use('images/',express.static(resolve(__dirname,'..','uploads','images')))


  }
  routes() {
    this.app.use('/',home);
    this.app.use('/alunos',aluno);
    this.app.use('/users/',user);
    this.app.use('/tokens/',token);
    this.app.use('/fotos',foto);


  }
}
export default new App().app;
