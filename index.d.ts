/// <reference types="express-session" />

declare module 'express-session' {
    interface SessionData {
        foo?: string;
    }
}
