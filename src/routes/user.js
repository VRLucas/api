import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', userController.store);
router.put('/', loginRequired, userController.updadte);
router.delete('/',loginRequired, userController.delete);

// router.get('/',userController.index);
// router.get('/:id', userController.show);




export default router;

/**
 * index -> Lista todos os usuários -> GET
 * store/create -> cria um novo usuário -> POST
 * delete -> apaga um usuario -> DELETE
 * show -> mostra um usuario -> GET
 * update -> atualiza um usuário -> PATCH OU PUT
*/
