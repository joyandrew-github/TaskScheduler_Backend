import { RateLimiterMemory } from 'rate-limiter-flexible';

const DURATION = 60; // seconds
const MAX_REQUESTS = 10;

const rateLimiter = new RateLimiterMemory({
    points: MAX_REQUESTS,
    duration: DURATION
});

export const rateLimiterMiddleware = async (req, res, next) => {
    try {
        await rateLimiter.consume(req.ip);
        next();
    } catch {
        res.status(429).json({
            success: false,
            message: 'Too many requests. Please try again later.'
        });
    }
};
