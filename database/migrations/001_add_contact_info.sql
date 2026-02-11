-- Migration: Add contact information table
-- Date: 2026-02-11

CREATE TABLE IF NOT EXISTS contact_information (
    id SERIAL PRIMARY KEY,
    orphan_id INT NOT NULL REFERENCES orphans(id) ON DELETE CASCADE,
    contact_type VARCHAR(100),
    contact_value VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_contact_info_orphan_id ON contact_information(orphan_id);
