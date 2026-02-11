# Getting Started with Orphan Tracker

## System Requirements

- **Operating System**: macOS, Linux, or Windows (with WSL)
- **Docker**: Version 20.10+
- **Docker Compose**: Version 1.29+
- **RAM**: Minimum 2GB
- **Disk Space**: Minimum 2GB
- **Browser**: Modern browser (Chrome, Firefox, Safari, Edge)

## Installation Options

### Option 1: Quick Start with Docker (Recommended)

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/OrphanTracker.git
cd OrphanTracker

# 2. Create environment files
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env

# 3. Start all services
docker-compose up -d

# 4. Wait for services to be ready
docker-compose logs -f

# 5. Access the application
# Frontend: http://localhost:3000
# Backend API: http://localhost:5000/api
# API Health: http://localhost:5000/health
```

### Option 2: Local Development Setup

#### Backend Setup
```bash
cd backend

# Install dependencies
npm install

# Configure environment
cp .env.example .env

# Start backend server
npm run dev
# Server runs on http://localhost:5000
```

#### Frontend Setup
```bash
cd frontend

# Install dependencies
npm install

# Configure environment
cp .env.example .env

# Start development server
npm start
# Application opens on http://localhost:3000
```

#### Database Setup
```bash
# Install PostgreSQL locally or use Docker
docker run --name orphan-tracker-db \
  -e POSTGRES_USER=orphantracker \
  -e POSTGRES_PASSWORD=orphantracker123 \
  -e POSTGRES_DB=orphan_tracker_db \
  -p 5432:5432 \
  -v orphan_tracker_data:/var/lib/postgresql/data \
  -d postgres:15-alpine

# Initialize schema
psql -h localhost -U orphantracker -d orphan_tracker_db -f database/init.sql
```

## First Time Login

1. **Default Credentials** (change immediately)
   - Username: `admin`
   - Password: `admin123`

2. **Access the Application**
   - Open http://localhost:3000 in your browser
   - Log in with the credentials above
   - Update your password in settings

## Docker Commands Cheat Sheet

```bash
# View all running containers
docker-compose ps

# View logs
docker-compose logs -f              # All services
docker-compose logs -f api          # Specific service

# Stop all services
docker-compose stop

# Stop and remove containers
docker-compose down

# Remove everything including volumes
docker-compose down -v

# Rebuild images
docker-compose build

# Restart a service
docker-compose restart api

# Execute command in container
docker-compose exec api npm run migrate

# View resource usage
docker stats
```

## Database Management

### Connect to Database
```bash
# Using Docker
docker-compose exec db psql -U orphantracker -d orphan_tracker_db

# Directly (if PostgreSQL installed)
psql -h localhost -U orphantracker -d orphan_tracker_db
```

### Common SQL Commands
```sql
-- List all tables
\dt

-- View table structure
\d orphans

-- View all orphans
SELECT * FROM orphans;

-- Count records
SELECT COUNT(*) FROM orphans;

-- View active users
SELECT * FROM users WHERE is_active = true;
```

## File Structure Overview

```
OrphanTracker/
├── backend/              # Node.js API server
├── frontend/             # React web application
├── database/             # SQL scripts and migrations
├── docker/               # Docker configurations
├── .github/
│   └── workflows/        # CI/CD pipelines
├── docs/                 # Documentation
├── docker-compose.yml    # Service orchestration
├── README.md
├── LICENSE
└── CONTRIBUTING.md
```

## Common Issues and Solutions

### Port Already in Use
```bash
# Find process using port
lsof -i :3000
lsof -i :5000
lsof -i :5432

# Kill process
kill -9 <PID>

# Or change ports in docker-compose.yml
```

### Docker Daemon Not Running
```bash
# macOS
open /Applications/Docker.app

# Linux
sudo systemctl start docker

# Windows
Start Docker Desktop from Start Menu
```

### Database Connection Failed
```bash
# Check if database container is running
docker-compose ps db

# View database logs
docker-compose logs db

# Restart database
docker-compose restart db
```

### Frontend Not Loading
```bash
# Clear browser cache and reload
# Ctrl+Shift+Delete (or Cmd+Shift+Delete on Mac)

# Rebuild frontend
docker-compose down
docker-compose build frontend
docker-compose up -d web
```

### Memory Issues
Increase Docker memory allocation:
- Docker Desktop Settings → Resources → Memory (set to 4GB+)

## Next Steps

1. **Read the Documentation**
   - [API Documentation](docs/API.md)
   - [Deployment Guide](docs/DEPLOYMENT.md)

2. **Explore the Features**
   - Navigate to Dashboard
   - Add an orphan profile
   - Create a report

3. **Customize Configuration**
   - Update `.env` files with your settings
   - Modify database schema if needed
   - Configure email notifications

4. **Set Up Version Control**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

## Getting Help

- Check [README.md](../README.md) for overview
- Review [API.md](docs/API.md) for endpoint documentation
- Check existing GitHub issues
- Open a new issue with detailed information

## Security Reminders

⚠️ **Important**: Before deploying to production:

- [ ] Change default passwords
- [ ] Generate new JWT secret
- [ ] Enable HTTPS
- [ ] Update CORS settings
- [ ] Configure secure environment variables
- [ ] Review security documentation
- [ ] Set up regular backups
- [ ] Enable audit logging

## Performance Tips

- Use pagination when listing records
- Implement caching where appropriate
- Monitor database query performance
- Keep dependencies updated
- Monitor container resource usage

Happy tracking! 🎉
