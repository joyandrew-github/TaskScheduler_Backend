# Task Scheduler - Backend Server

Professional Node.js Express API server for Task Scheduler application.

## 📋 Project Structure

```
server/
├── config/                  # Configuration files
│   ├── config.js           # Environment configuration
│   ├── database.js         # Prisma database setup
│   └── rateLimiter.js      # Rate limiting configuration
├── controller/              # Route controllers/handlers (ready for implementation)
├── middleware/              # Express middleware (ready for implementation)
├── routes/                  # API routes (ready for implementation)
├── service/                 # Business logic layer (ready for implementation)
├── utils/                   # Utility functions
│   └── constants.js        # App constants
├── prisma/                  # Prisma ORM
│   └── schema.prisma       # Database schema
├── logs/                    # Application logs directory
├── .vscode/                 # VS Code settings
│   └── settings.json       # Editor configuration
├── .husky/                  # Git hooks
│   ├── commit-msg          # Commitlint hook
│   └── pre-commit          # Pre-commit checks
├── .env.example             # Environment variables template
├── .env.development         # Development environment variables
├── .env.production          # Production environment variables
├── .gitignore              # Git ignore file
├── .prettierrc              # Prettier configuration
├── .prettierignore          # Prettier ignore rules
├── commitlint.config.js     # Conventional commits rules
├── eslint.config.mjs        # ESLint rules
├── nodemon.json             # Nodemon development configuration
├── package.json             # Dependencies & scripts
├── README.md                # Project documentation
└── server.js                # Application entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ (v20 recommended)
- PostgreSQL database
- npm or yarn

### Installation

1. **Install dependencies**

    ```bash
    npm install
    ```

2. **Setup environment variables**

    ```bash
    cp .env.example .env.development
    # Edit .env.development with your values
    ```

3. **Setup Prisma**
    ```bash
    npm run prisma:generate
    npm run prisma:migrate
    ```

### Running the Server

**Development mode** (with hot reload)

```bash
npm run dev
```

**Production mode**

```bash
npm start
```

### Available Scripts

```bash
npm start              # Start server
npm run dev            # Start with nodemon (hot reload)
npm run lint           # Run ESLint
npm run lint:fix       # Fix ESLint issues
npm run format         # Format code with Prettier
npm run prisma:generate # Generate Prisma client
npm run prisma:migrate  # Run database migrations
npm run prisma:studio   # Open Prisma Studio
```

## 📝 Environment Variables

```env
# Server
NODE_ENV=development          # development | production
PORT=5000                     # Server port
API_VERSION=v1                # API version
LOG_LEVEL=debug               # debug | info | warn | error

# Database
DATABASE_URL=postgresql://...  # PostgreSQL connection string

# Authentication
JWT_SECRET=your-secret-key    # JWT signing secret
JWT_EXPIRES_IN=7d             # Token expiration time

# CORS
CORS_ORIGIN=http://localhost:3000

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000   # Time window in ms
RATE_LIMIT_MAX_REQUESTS=100   # Max requests per window
```

## 🔧 Configuration

### Logger (Winston)

- Logs to console and files in `/logs` directory
- Levels: error, warn, info, http, debug
- Separate error log file for errors

### Rate Limiting

- Default: 100 requests per 15 minutes per IP
- Health check endpoint excluded
- Strict limiter for auth endpoints (5 attempts per 15 mins)

### Error Handling

- Centralized error handler middleware
- Consistent error response format
- Stack traces in development mode

## 🔐 Security Features

- **Helmet.js** - HTTP headers security
- **CORS** - Cross-Origin Resource Sharing
- **Rate Limiting** - DDoS protection
- **JWT** - Token-based authentication
- **Input Validation** - express-validator
- **Password Hashing** - bcryptjs

## 📦 Dependencies

### Core

- `express` - Web framework
- `prisma` - ORM
- `cors` - CORS middleware
- `helmet` - Security headers
- `dotenv` - Environment management

### Authentication & Validation

- `jsonwebtoken` - JWT handling
- `bcryptjs` - Password hashing
- `express-validator` - Input validation

### Logging & Monitoring

- `winston` - Logger
- `morgan` - HTTP request logger

### Development

- `nodemon` - Auto-reload
- `eslint` - Code linting
- `prettier` - Code formatting

## 🧪 Testing

Add test files to align with controller/service structure:

```
tests/
├── unit/
│   ├── controller/
│   ├── service/
│   └── utils/
└── integration/
```

Run tests:

```bash
npm test
```

## 📚 API Endpoints

### Health Check

```
GET /api/health
```

### Example Routes

- `GET /api/v1/examples` - Get all examples
- `POST /api/v1/examples` - Create example
- `GET /api/v1/examples/:id` - Get single example
- `PUT /api/v1/examples/:id` - Update example
- `DELETE /api/v1/examples/:id` - Delete example

## 🐛 Debugging

### Enable detailed logging

Set `LOG_LEVEL=debug` in environment variables.

### Database debugging

```bash
npm run prisma:studio
```

Opens Prisma Studio for visual database inspection.

## 📋 Code Standards

- **Indentation**: 4 spaces
- **Quotes**: Single quotes
- **Semicolons**: Always
- **Line length**: 100 characters
- **Naming**: camelCase for variables, PascalCase for classes

## 🤝 Contributing

1. Create feature branch: `git checkout -b feat/feature-name`
2. Commit with conventional commits: `git commit -m "feat: description"`
3. Push and create pull request

## 📄 License

© 2026 JoyAndrew. All rights reserved.
This project is not licensed for redistribution or commercial use without permission.


## 👤 Author

Joyandrew S

---

**Need Help?** Check logs in `/logs` directory or set `LOG_LEVEL=debug` for detailed output.
