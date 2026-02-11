# Architecture Overview

## System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Client Layer                            │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  Web Browser (React SPA)                               │ │
│  │  - Dashboard                                           │ │
│  │  - Orphan Management                                  │ │
│  │  - Guardian Assignment                                │ │
│  │  - Report Generation                                  │ │
│  └────────────────────────────────────────────────────────┘ │
└──────────────────────────┬──────────────────────────────────┘
                           │ HTTP/HTTPS
┌──────────────────────────┴──────────────────────────────────┐
│                  API Layer (Node.js/Express)               │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  REST API Endpoints                                    │ │
│  │  - Authentication (/auth)                              │ │
│  │  - Orphan Management (/orphans)                        │ │
│  │  - Guardian Management (/guardians)                    │ │
│  │  - Reports (/reports)                                 │ │
│  │  - User Management (/users)                            │ │
│  │                                                        │ │
│  │  Middleware:                                          │ │
│  │  - JWT Authentication                                 │ │
│  │  - CORS Protection                                    │ │
│  │  - Request Validation                                 │ │
│  │  - Error Handling                                     │ │
│  └────────────────────────────────────────────────────────┘ │
└──────────────────────────┬──────────────────────────────────┘
                           │ TCP
┌──────────────────────────┴──────────────────────────────────┐
│                  Data Layer (PostgreSQL)                    │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  Core Tables:                                          │ │
│  │  - users (authentication & authorization)             │ │
│  │  - orphans (orphan profiles)                           │ │
│  │  - guardians (guardian information)                    │ │
│  │  - orphan_guardian_assignments (relationships)         │ │
│  │  - reports (welfare reports)                           │ │
│  │  - audit_logs (activity tracking)                      │ │
│  │  - contact_information (additional contacts)           │ │
│  │                                                        │ │
│  │  Features:                                            │ │
│  │  - ACID Compliance                                    │ │
│  │  - Referential Integrity                              │ │
│  │  - Automated Backups                                  │ │
│  │  - Query Optimization                                 │ │
│  └────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

## Component Architecture

### Frontend (React)
```
App.js (Main Entry Point)
├── Navigation
├── Routes
│   ├── Home Page
│   ├── Dashboard
│   │   ├── Stats Cards
│   │   └── Charts
│   └── Orphans Page
│       ├── Table
│       ├── Filters
│       └── Forms
└── Services
    └── API Client
```

### Backend (Node.js/Express)
```
server.js (Entry Point)
├── Middleware
│   ├── Authentication
│   ├── CORS
│   ├── Error Handling
│   └── Validation
├── Routes
│   ├── Auth Routes
│   ├── Orphan Routes
│   ├── Guardian Routes
│   ├── Report Routes
│   └── User Routes
├── Controllers
│   ├── Auth Controller
│   ├── Orphan Controller
│   ├── Guardian Controller
│   └── Report Controller
└── Models
    └── Database Connection Pool
```

## Data Flow

### Creating an Orphan Record

```
1. User fills form in React frontend
   ↓
2. Form validation in React component
   ↓
3. POST request to /api/orphans endpoint
   ↓
4. Backend authentication middleware (JWT)
   ↓
5. Request validation (Joi schema)
   ↓
6. Business logic in orphan controller
   ↓
7. Database INSERT query
   ↓
8. Audit log created
   ↓
9. Success response with new record ID
   ↓
10. Frontend updates UI and shows confirmation
```

### Retrieving Orphan List

```
1. Frontend mounts Dashboard component
   ↓
2. useEffect triggers API call
   ↓
3. GET /api/orphans request with filters
   ↓
4. Backend authentication check
   ↓
5. Query database with filters/pagination
   ↓
6. Join with guardian information
   ↓
7. Return JSON response
   ↓
8. Frontend renders in React table
   ↓
9. User can interact and perform actions
```

## Database Schema Relationships

```
users
  ├── username (UNIQUE)
  ├── email (UNIQUE)
  └── role (admin, social_worker, user)

orphans
  ├── first_name
  ├── last_name
  ├── status (active, inactive, graduated)
  └── reference to guardians (many-to-many)

guardians
  ├── name
  ├── contact_info
  └── relationship to orphans

orphan_guardian_assignments (Junction Table)
  ├── orphan_id → orphans.id
  ├── guardian_id → guardians.id
  └── status (active, inactive)

reports
  ├── orphan_id → orphans.id
  ├── reporter_id → users.id
  ├── report_type
  └── status (pending, approved, rejected)

audit_logs
  ├── user_id → users.id
  ├── action (CREATE, UPDATE, DELETE)
  ├── entity_type (orphan, guardian, etc)
  └── timestamp
```

## Security Architecture

```
┌─────────────────────────────────────────┐
│         Browser Request                 │
├─────────────────────────────────────────┤
│  1. HTTPS Encryption (In Transit)       │
├─────────────────────────────────────────┤
│  2. CORS Validation                     │
├─────────────────────────────────────────┤
│  3. Helmet Security Headers             │
├─────────────────────────────────────────┤
│  4. JWT Token Verification              │
├─────────────────────────────────────────┤
│  5. Request Validation (Joi)            │
├─────────────────────────────────────────┤
│  6. SQL Injection Prevention             │
│     (Parameterized Queries)             │
├─────────────────────────────────────────┤
│  7. Password Hashing (bcryptjs)         │
├─────────────────────────────────────────┤
│  8. Role-Based Access Control           │
├─────────────────────────────────────────┤
│  9. Audit Logging                       │
├─────────────────────────────────────────┤
│  Database (At Rest Encryption)          │
└─────────────────────────────────────────┘
```

## Deployment Architecture

```
                    ┌─────────────┐
                    │   Browser   │
                    └──────┬──────┘
                           │
                    ┌──────┴──────┐
                    │   Nginx     │
                    │  (Reverse   │
                    │   Proxy)    │
                    └──────┬──────┘
                           │
         ┌─────────────────┼─────────────────┐
         │                 │                 │
    ┌────▼────┐      ┌────▼────┐      ┌────▼────┐
    │ Frontend │      │   API   │      │Database │
    │ (React)  │      │(Express)│      │(Postgres│
    │Container │      │Container│      │Container│
    └──────────┘      └─────────┘      └────────┘
         │                 │                 │
         └─────────────────┼─────────────────┘
                    Docker Network
```

## API Gateway Pattern

```
External Request
      ↓
  Nginx Reverse Proxy
      ↓
  Rate Limiting
      ↓
  Request Routing
      ↓
  Backend Services
  ├── Authentication Service
  ├── Orphan Service
  ├── Guardian Service
  └── Reporting Service
      ↓
  Database Layer
```

## Scalability Considerations

### Horizontal Scaling
- Run multiple API instances behind load balancer
- Use connection pooling for database
- Implement Redis for session caching

### Vertical Scaling
- Increase container resource limits
- Optimize database indexes
- Implement query caching

### Database Optimization
- Partition large tables by date
- Archive old records
- Use read replicas for analytics

## Performance Monitoring

```
┌─────────────────┐
│   Application   │
├─────────────────┤
│  Health Checks  │  - API responsiveness
│  Logging        │  - Error tracking
│  Metrics        │  - Request counts
│  Tracing        │  - Performance timing
└─────────────────┘
         │
         ↓
    Monitoring System
    (Docker stats, logs)
```
