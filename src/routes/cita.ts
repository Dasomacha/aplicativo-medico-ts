import { Router } from 'express';
import { getCitas, getOneCita, createCita, updateCita, deleteCita } from '../controllers/citaController';

const router = Router();

router.get('/', getCitas);

router.get('/:fecha', getOneCita);

router.post('/crear', createCita);

router.put('/', updateCita);

router.delete('/:fecha', deleteCita);

export default router;
