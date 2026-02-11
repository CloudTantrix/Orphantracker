const express = require('express');
const router = express.Router();

// Placeholder routes
router.get('/', (req, res) => {
  res.json({ message: 'Reports routes' });
});

router.post('/', (req, res) => {
  res.json({ message: 'Create report' });
});

module.exports = router;
