const express = require('express');
const router = express.Router();

// Placeholder routes
router.get('/', (req, res) => {
  res.json({ message: 'Guardians routes' });
});

router.get('/:id', (req, res) => {
  res.json({ message: 'Get guardian by ID' });
});

router.post('/', (req, res) => {
  res.json({ message: 'Create guardian' });
});

router.put('/:id', (req, res) => {
  res.json({ message: 'Update guardian' });
});

module.exports = router;
