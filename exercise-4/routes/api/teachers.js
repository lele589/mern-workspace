const router = require('express').Router();
const Teacher = require('../../models/Teacher');
const { check, validationResult } = require('express-validator');

router.get('/', (req, res) => {
    Teacher.find()
        .then(teachers => {
            res.json(teachers);
        })
        .catch(error => {
            res.json({ error: error.message });
        });
});

router.post('/', [
    check('nombre', 'El campo "nombre" es obligatorio').exists(),
    check('especialidad', 'El campo "especialidad" es obligatorio').exists(),
    check('edad', 'El profesor debe tener al menos 16 años').exists().isInt({ min: 16 })
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ error: errors.array() });
    }

    try {
        const newTeacher = await Teacher.create(req.body);
        res.json(newTeacher);
    } catch (error) {
        res.json({ error: error.message });
    }
});

router.put('/:idTeacher', async (req, res) => {
    try {
        const editedTeacher = await Teacher.findByIdAndUpdate(req.params.idTeacher, req.body, { new: true });
        res.json(editedTeacher);
    } catch (error) {
        res.json({ error: error.message });
    }
});

router.delete('/:idTeacher', (req, res) => {
    Teacher.findByIdAndRemove(req.params.idTeacher)
        .then(deletedTeacher => {
            res.json(deletedTeacher);
        }).catch(error => {
            res.json({ error: error.message });
        });
});

module.exports = router;