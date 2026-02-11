const express = require('express');
const router = express.Router();

// Placeholder routes
router.get('/', (req, res) => {
  res.json({ message: 'Users routes' });
});

router.get('/:id', (req, res) => {
  res.json({ message: 'Get user by ID' });
});

router.post('/', (req, res) => {
  res.json({ message: 'Create user' });
});

module.exports = router;
