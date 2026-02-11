# API Documentation

## Base URL

Development: `http://localhost:5000/api`
Production: `https://yourdomain.com/api`

## Authentication

All protected endpoints require a Bearer token in the Authorization header:

```
Authorization: Bearer <jwt_token>
```

## Response Format

All responses are in JSON format:

### Success Response
```json
{
  "status": 200,
  "data": { ... },
  "message": "Operation successful"
}
```

### Error Response
```json
{
  "status": 400,
  "error": "Bad Request",
  "message": "Detailed error message"
}
```

## Endpoints

### Authentication

#### Register User
```
POST /auth/register
Content-Type: application/json

{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "securepassword",
  "full_name": "John Doe"
}

Response: 201 Created
{
  "id": 1,
  "username": "john_doe",
  "email": "john@example.com",
  "token": "eyJhbGc..."
}
```

#### Login
```
POST /auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securepassword"
}

Response: 200 OK
{
  "token": "eyJhbGc...",
  "user": { ... }
}
```

### Orphans

#### List All Orphans
```
GET /orphans?page=1&limit=10&status=active

Response: 200 OK
{
  "status": 200,
  "data": [
    {
      "id": 1,
      "first_name": "John",
      "last_name": "Doe",
      "age": 12,
      "status": "active"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 50
  }
}
```

#### Get Orphan Details
```
GET /orphans/:id

Response: 200 OK
{
  "id": 1,
  "first_name": "John",
  "last_name": "Doe",
  "date_of_birth": "2012-05-15",
  "gender": "male",
  "status": "active",
  "registration_date": "2025-01-01",
  "health_status": "Good",
  "education_level": "Primary School",
  "guardian": { ... }
}
```

#### Create Orphan
```
POST /orphans
Authorization: Bearer <token>
Content-Type: application/json

{
  "first_name": "Jane",
  "last_name": "Smith",
  "date_of_birth": "2011-03-20",
  "gender": "female",
  "health_status": "Good",
  "education_level": "Middle School"
}

Response: 201 Created
```

#### Update Orphan
```
PUT /orphans/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "health_status": "Excellent"
}

Response: 200 OK
```

#### Delete Orphan
```
DELETE /orphans/:id
Authorization: Bearer <token>

Response: 204 No Content
```

### Guardians

#### List All Guardians
```
GET /guardians

Response: 200 OK
{
  "data": [
    {
      "id": 1,
      "first_name": "Mary",
      "last_name": "Johnson",
      "relationship": "Aunt",
      "phone_number": "+1234567890",
      "email": "mary@example.com"
    }
  ]
}
```

#### Create Guardian
```
POST /guardians
Authorization: Bearer <token>
Content-Type: application/json

{
  "first_name": "Mary",
  "last_name": "Johnson",
  "relationship": "Aunt",
  "phone_number": "+1234567890",
  "email": "mary@example.com",
  "address": "123 Main St, City"
}

Response: 201 Created
```

### Reports

#### Create Report
```
POST /reports
Authorization: Bearer <token>
Content-Type: application/json

{
  "orphan_id": 1,
  "title": "Monthly Welfare Check",
  "report_type": "wellness",
  "description": "Orphan is doing well in school...",
  "priority": "medium"
}

Response: 201 Created
```

#### Get Reports
```
GET /reports?status=pending

Response: 200 OK
{
  "data": [ ... ]
}
```

### Users

#### Get Current User
```
GET /users/me
Authorization: Bearer <token>

Response: 200 OK
{
  "id": 1,
  "username": "john_doe",
  "email": "john@example.com",
  "role": "admin"
}
```

## Status Codes

| Code | Meaning |
|------|---------|
| 200 | OK - Request successful |
| 201 | Created - Resource created |
| 204 | No Content - Successful deletion |
| 400 | Bad Request - Invalid input |
| 401 | Unauthorized - Invalid/missing token |
| 403 | Forbidden - Insufficient permissions |
| 404 | Not Found - Resource not found |
| 500 | Internal Server Error |

## Rate Limiting

API requests are limited to 100 requests per hour per IP address.

Headers:
- `X-RateLimit-Limit`: Total requests allowed
- `X-RateLimit-Remaining`: Requests remaining
- `X-RateLimit-Reset`: Unix timestamp when limit resets

## Pagination

List endpoints support pagination:

```
GET /orphans?page=1&limit=20
```

Query Parameters:
- `page` (default: 1) - Page number
- `limit` (default: 20) - Items per page
- `sort` (default: -created_at) - Sort field

## Error Handling

All errors include a detailed message:

```json
{
  "status": 400,
  "error": "ValidationError",
  "message": "Validation failed",
  "details": [
    {
      "field": "email",
      "message": "Invalid email format"
    }
  ]
}
```
