# Deployment Guide

## Prerequisites
- Docker and Docker Compose
- Server with at least 2GB RAM
- Ports 3000, 5000, and 5432 available

## Production Deployment

### 1. Environment Configuration
Create `.env` file in the root directory with production values:

```env
NODE_ENV=production
API_PORT=5000
FRONTEND_PORT=3000

DB_HOST=db
DB_PORT=5432
DB_USER=orphantracker
DB_PASSWORD=<strong-password-here>
DB_NAME=orphan_tracker_db

JWT_SECRET=<generate-secure-key>
CORS_ORIGIN=https://yourdomain.com
REACT_APP_API_URL=https://yourdomain.com/api
```

### 2. Build and Deploy

```bash
# Pull latest code
git pull origin main

# Build and start containers
docker-compose up -d

# Verify services
docker-compose ps

# Check logs
docker-compose logs -f
```

### 3. Verify Installation

```bash
# Health check
curl http://localhost:5000/health

# Database connectivity
docker-compose exec db psql -U orphantracker -d orphan_tracker_db -c "SELECT 1;"
```

## Reverse Proxy Setup (Nginx)

```nginx
upstream orphan_tracker_api {
    server api:5000;
}

server {
    listen 80;
    server_name yourdomain.com;
    
    # Redirect to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name yourdomain.com;
    
    ssl_certificate /etc/nginx/certs/yourdomain.com.crt;
    ssl_certificate_key /etc/nginx/certs/yourdomain.com.key;
    
    # Frontend
    location / {
        proxy_pass http://web:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
    
    # API
    location /api/ {
        proxy_pass http://orphan_tracker_api/;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

## Database Backups

### Automatic Backups
```bash
#!/bin/bash
# backup.sh
BACKUP_DIR=/backups
DATE=$(date +%Y%m%d_%H%M%S)

docker-compose exec -T db pg_dump -U orphantracker orphan_tracker_db > \
    $BACKUP_DIR/orphan_tracker_$DATE.sql

# Keep only last 30 days
find $BACKUP_DIR -name "*.sql" -mtime +30 -delete
```

Schedule with cron:
```bash
0 2 * * * /path/to/backup.sh
```

### Restore from Backup
```bash
docker-compose exec -T db psql -U orphantracker orphan_tracker_db < backup.sql
```

## Monitoring and Logs

```bash
# View real-time logs
docker-compose logs -f

# View specific service
docker-compose logs -f api

# View last 100 lines
docker-compose logs --tail=100 api
```

## Updates and Maintenance

### Update Application
```bash
git pull origin main
docker-compose down
docker-compose up -d --build
```

### Database Migrations
```bash
docker-compose exec api npm run migrate
```

### Clean Up
```bash
# Remove unused images and containers
docker system prune

# Remove unused volumes
docker volume prune
```

## Troubleshooting

### Service won't start
```bash
docker-compose logs -f <service-name>
docker-compose ps
```

### Database connection issues
```bash
docker-compose exec db psql -U orphantracker -d orphan_tracker_db
```

### Reset everything
```bash
docker-compose down -v
docker-compose up -d
```

## Performance Tuning

### Database Connection Pool
Adjust in `backend/.env`:
```env
DB_POOL_MIN=2
DB_POOL_MAX=20
```

### Node.js Memory
```bash
# In docker-compose.yml for api service
environment:
  NODE_OPTIONS: "--max-old-space-size=512"
```

## Security Checklist

- [ ] Change default database password
- [ ] Generate secure JWT secret
- [ ] Update CORS_ORIGIN to production domain
- [ ] Enable HTTPS with valid certificate
- [ ] Restrict database access
- [ ] Enable log rotation
- [ ] Regular backups configured
- [ ] Monitor container resource usage
- [ ] Keep dependencies updated
