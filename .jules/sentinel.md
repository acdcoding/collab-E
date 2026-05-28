## 2024-05-26 - [Hardcoded WebRTC Room]
**Vulnerability:** The Yjs/WebRTC collaborative editor was configured with a hardcoded static room name (`"email-template-room"`).
**Learning:** This exposes all instances of the application on the same network or signaling server to the same data stream, meaning users who shouldn't have access to others' documents would automatically connect and share data without authorization. In a WebRTC peer-to-peer setup, this constitutes a serious data leakage/authorization bypass vulnerability.
**Prevention:** When setting up collaboration channels (like WebRTC or WebSockets), always dynamically generate or require unique, authenticated session/room IDs to isolate data properly.

## 2026-05-27 - [Missing Content Security Policy]
**Vulnerability:** The application was missing a Content-Security-Policy (CSP) header, which is a key layer of defense against Cross-Site Scripting (XSS) and data injection attacks.
**Learning:** While `next.config.ts` included standard security headers like `X-Frame-Options` and `Strict-Transport-Security`, the lack of a CSP leaves the application more susceptible to malicious script execution. Additionally, when implementing a CSP in this specific project, it's crucial to explicitly allow the WebRTC signaling servers (e.g., `wss://signaling.yjs.dev`) in the `connect-src` directive, otherwise the core collaborative editor functionality will break.
**Prevention:** Always include a robust CSP alongside other security headers. When adding one to a new project, thoroughly audit third-party connections (like WebSockets or analytics) to ensure they are properly whitelisted.
