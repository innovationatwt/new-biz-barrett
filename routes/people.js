import express from 'express';
import { createPeople, deletePeople, getPeople } from '../controllers/people.js';


const router = express.Router();

router.get('/', getPeople);
router.post('/', createPeople);
router.delete('/:id', deletePeople);

export default router;