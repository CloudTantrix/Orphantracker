-- Initialize Orphan Tracker Database
-- This script creates the core tables for the application

-- Create Users table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(255),
    role VARCHAR(50) DEFAULT 'user',
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Orphans table
CREATE TABLE IF NOT EXISTS orphans (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    date_of_birth DATE,
    gender VARCHAR(50),
    registration_date DATE DEFAULT CURRENT_DATE,
    status VARCHAR(50) DEFAULT 'active',
    health_status TEXT,
    education_level VARCHAR(100),
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Guardians table
CREATE TABLE IF NOT EXISTS guardians (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    relationship VARCHAR(100),
    phone_number VARCHAR(20),
    email VARCHAR(255),
    address TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create junction table for Orphan-Guardian relationships
CREATE TABLE IF NOT EXISTS orphan_guardian_assignments (
    id SERIAL PRIMARY KEY,
    orphan_id INT NOT NULL REFERENCES orphans(id) ON DELETE CASCADE,
    guardian_id INT NOT NULL REFERENCES guardians(id) ON DELETE CASCADE,
    assignment_date DATE DEFAULT CURRENT_DATE,
    status VARCHAR(50) DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(orphan_id, guardian_id)
);

-- Create Reports table
CREATE TABLE IF NOT EXISTS reports (
    id SERIAL PRIMARY KEY,
    orphan_id INT NOT NULL REFERENCES orphans(id) ON DELETE CASCADE,
    reporter_id INT NOT NULL REFERENCES users(id),
    report_type VARCHAR(100),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status VARCHAR(50) DEFAULT 'pending',
    priority VARCHAR(50) DEFAULT 'medium',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Logs table for audit trail
CREATE TABLE IF NOT EXISTS audit_logs (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    action VARCHAR(100) NOT NULL,
    entity_type VARCHAR(100),
    entity_id INT,
    changes JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_orphans_status ON orphans(status);
CREATE INDEX IF NOT EXISTS idx_orphans_created_at ON orphans(created_at);
CREATE INDEX IF NOT EXISTS idx_reports_orphan_id ON reports(orphan_id);
CREATE INDEX IF NOT EXISTS idx_reports_status ON reports(status);
CREATE INDEX IF NOT EXISTS idx_assignments_orphan_id ON orphan_guardian_assignments(orphan_id);
CREATE INDEX IF NOT EXISTS idx_assignments_guardian_id ON orphan_guardian_assignments(guardian_id);
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_audit_logs_created_at ON audit_logs(created_at);

-- Create a view for active orphans with their guardians
CREATE OR REPLACE VIEW active_orphans_with_guardians AS
SELECT 
    o.id,
    o.first_name,
    o.last_name,
    o.date_of_birth,
    o.gender,
    o.status,
    g.id as guardian_id,
    g.first_name as guardian_first_name,
    g.last_name as guardian_last_name
FROM orphans o
LEFT JOIN orphan_guardian_assignments oga ON o.id = oga.orphan_id AND oga.status = 'active'
LEFT JOIN guardians g ON oga.guardian_id = g.id
WHERE o.status = 'active';

-- Grant permissions (adjust user as needed)
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO orphantracker;
