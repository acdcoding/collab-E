## 2024-05-26 - [Hardcoded WebRTC Room]
**Vulnerability:** The Yjs/WebRTC collaborative editor was configured with a hardcoded static room name (`"email-template-room"`).
**Learning:** This exposes all instances of the application on the same network or signaling server to the same data stream, meaning users who shouldn't have access to others' documents would automatically connect and share data without authorization. In a WebRTC peer-to-peer setup, this constitutes a serious data leakage/authorization bypass vulnerability.
**Prevention:** When setting up collaboration channels (like WebRTC or WebSockets), always dynamically generate or require unique, authenticated session/room IDs to isolate data properly.

## 2024-05-28 - [CSP Configuration for WebRTC Collaboration]
**Vulnerability:** Missing Content-Security-Policy (CSP) headers, allowing potential XSS vulnerabilities.
**Learning:** Adding a CSP header in a collaborative application utilizing WebRTC (y-webrtc) requires careful configuration of the `connect-src` directive. Specifically, the WebRTC signaling servers (`wss://signaling.yjs.dev`, `wss://y-webrtc-signaling-eu.herokuapp.com`, `wss://y-webrtc-signaling-us.herokuapp.com`) must be explicitly allowed to prevent breaking real-time peer-to-peer collaboration.
**Prevention:** When introducing CSP headers to projects with real-time features, explicitly allow necessary WebSocket/WebRTC signaling servers in the `connect-src` directive.
