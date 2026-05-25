## 2024-05-25 - [Add Security Headers]
**Vulnerability:** Missing security headers (X-Frame-Options, X-Content-Type-Options, etc.)
**Learning:** Next.js requires manual configuration of security headers in next.config.ts to protect against clickjacking, MIME-sniffing and to enforce HTTPS.
**Prevention:** Always include a comprehensive security header configuration in next.config.ts for all Next.js projects.
