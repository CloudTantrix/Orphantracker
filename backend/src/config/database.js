const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER || 'orphantracker',
  password: process.env.DB_PASSWORD || 'orphantracker123',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'orphan_tracker_db',
  max: parseInt(process.env.DB_POOL_MAX) || 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
});

module.exports = pool;
