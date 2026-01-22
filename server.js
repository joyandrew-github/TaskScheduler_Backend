import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import config from './config/config.js';

const app = express();

// ==================== Security ====================
app.use(
    helmet({
        contentSecurityPolicy: config.isProduction ? {} : false,
        crossOriginEmbedderPolicy: false
    })
);

// ==================== CORS ====================
app.use(
    cors({
        origin: config.CLIENT_URL,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        credentials: true
    })
);

// ==================== Body Parsers ====================
app.use(express.json());

// ==================== 404 ====================
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

// ==================== Server ====================
app.listen(5000, () => {
    console.info(`🚀 Server running on port 5000`);
});

export default app;
