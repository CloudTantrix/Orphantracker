# Orphan Tracker - GitHub Repository

## 📋 Overview

Orphan Tracker is a comprehensive Docker-based system designed to track, manage, and coordinate information about orphans and their guardians. Built with modern open-source technologies, it provides an intuitive interface for administrators, guardians, and social workers to collaborate effectively.

## 🎯 Features

- **Orphan Management**: Track orphan profiles with health, education, and welfare information
- **Guardian Assignment**: Manage relationships between orphans and their guardians
- **Report Generation**: Create and track welfare reports and monitoring data
- **User Management**: Role-based access control for different user types
- **Audit Logging**: Complete audit trail of all system activities
- **RESTful API**: Comprehensive API for integration with other systems
- **Responsive UI**: Modern, mobile-friendly web interface

## 🏗️ Architecture

The application follows a three-tier architecture:

```
┌─────────────────┐
│  Frontend (React)│  - UI Layer
├─────────────────┤
│ Backend (Node.js)│  - API Layer
├─────────────────┤
│ PostgreSQL      │  - Data Layer
└─────────────────┘
```

## 📦 Tech Stack

### Frontend
- **React 18** - UI framework
- **React Router** - Client-side routing
- **Bootstrap 5** - CSS framework
- **Axios** - HTTP client
- **Nginx** - Web server (production)

### Backend
- **Node.js 18** - Runtime
- **Express.js** - Web framework
- **PostgreSQL 15** - Database
- **JWT** - Authentication
- **Morgan** - Logging

### DevOps
- **Docker** - Containerization
- **Docker Compose** - Orchestration
- **GitHub Actions** - CI/CD

## 🚀 Quick Start

### Prerequisites

- Docker and Docker Compose installed
- Git
- Node.js 18+ (for local development)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/OrphanTracker.git
cd OrphanTracker
```

2. **Configure environment variables**
```bash
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
```

3. **Start the application with Docker Compose**
```bash
docker-compose up -d
```

4. **Initialize the database** (first time only)
```bash
docker-compose exec db psql -U orphantracker -d orphan_tracker_db -f /docker-entrypoint-initdb.d/init.sql
```

5. **Access the application**
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000/api
- Health Check: http://localhost:5000/health

## 📝 Development

### Local Development Setup

```bash
# Backend
cd backend
npm install
npm run dev

# Frontend (in another terminal)
cd frontend
npm install
npm start
```

### Database Setup
```bash
# PostgreSQL connection
psql -h localhost -U orphantracker -d orphan_tracker_db
```

### Running Tests
```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd frontend
npm test
```

## 📂 Project Structure

```
OrphanTracker/
├── backend/                 # Node.js/Express API
│   ├── src/
│   │   ├── config/         # Configuration files
│   │   ├── routes/         # API routes
│   │   ├── controllers/    # Request handlers
│   │   ├── models/         # Data models
│   │   ├── middleware/     # Custom middleware
│   │   └── migrations/     # Database migrations
│   ├── Dockerfile
│   ├── package.json
│   └── .env.example
├── frontend/                # React application
│   ├── public/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   ├── services/       # API services
│   │   ├── styles/         # CSS files
│   │   └── App.js
│   ├── Dockerfile
│   ├── nginx.conf
│   ├── package.json
│   └── .env.example
├── database/                # Database files
│   ├── init.sql            # Initial schema
│   └── migrations/         # Migration scripts
├── docker/                  # Docker configurations
│   ├── Dockerfile.backend
│   └── Dockerfile.frontend
├── docs/                    # Documentation
├── docker-compose.yml
├── .gitignore
├── README.md
└── LICENSE
```

## 🔐 Security

- **Environment Variables**: Sensitive data stored in `.env` files (not committed)
- **JWT Authentication**: Secure token-based authentication
- **CORS**: Configured to allow only trusted origins
- **Helmet**: HTTP headers security
- **Password Hashing**: bcryptjs for secure password storage
- **SQL Injection Prevention**: Parameterized queries via pg library

## 📊 Database Schema

The database includes the following main tables:
- **users** - User accounts and roles
- **orphans** - Orphan profiles
- **guardians** - Guardian information
- **orphan_guardian_assignments** - Relationships
- **reports** - Welfare reports
- **audit_logs** - Activity audit trail
- **contact_information** - Contact details

## 🔄 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Orphans
- `GET /api/orphans` - List all orphans
- `GET /api/orphans/:id` - Get orphan details
- `POST /api/orphans` - Create new orphan
- `PUT /api/orphans/:id` - Update orphan
- `DELETE /api/orphans/:id` - Delete orphan

### Guardians
- `GET /api/guardians` - List all guardians
- `POST /api/guardians` - Create new guardian
- `PUT /api/guardians/:id` - Update guardian

### Reports
- `GET /api/reports` - List all reports
- `POST /api/reports` - Create new report

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🐛 Known Issues

- List any known issues and their workarounds here

## 🗺️ Roadmap

- [ ] Multi-language support
- [ ] Mobile app (React Native)
- [ ] Advanced reporting and analytics
- [ ] Email notifications
- [ ] Document management system
- [ ] Video conferencing integration

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Your Name - Initial work

## 🙏 Acknowledgments

- Thanks to all open-source contributors
- Special thanks to the foster care community

## 📞 Contact

For questions and support, please open an issue on GitHub or contact us at support@orphantracker.com

## 📚 Additional Resources

- [Docker Documentation](https://docs.docker.com/)
- [React Documentation](https://react.dev/)
- [Express.js Documentation](https://expressjs.com/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
