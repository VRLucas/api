import { Router } from 'express';
import alunoController from '../controllers/AlunoController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', alunoController.index);
router.get('/:id', alunoController.show);
router.post('/',loginRequired, alunoController.store);
router.put('/:id',loginRequired, alunoController.update);
router.delete('/:id',loginRequired,alunoController.delete);

export default router;

/**
 * index -> Lista todos os usuários -> GET
 * store/create -> cria um novo usuário -> POST
 * delete -> apaga um usuario -> DELETE
 * show -> mostra um usuario -> GET
 * update -> atualiza um usuário -> PATCH OU PUT
*/
