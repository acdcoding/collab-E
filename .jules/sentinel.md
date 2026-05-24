## 2023-10-27 - [Add Security Headers]
**Vulnerability:** Missing standard HTTP security headers (X-Content-Type-Options, X-Frame-Options, etc.).
**Learning:** This Next.js application was lacking basic defense-in-depth security headers, leaving it potentially vulnerable to Clickjacking, MIME-sniffing, and other client-side attacks.
**Prevention:** Always configure standard HTTP security headers in `next.config.ts` for Next.js applications to establish a baseline of security.
