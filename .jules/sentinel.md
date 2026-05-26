## 2024-05-26 - [Hardcoded WebRTC Room]
**Vulnerability:** The Yjs/WebRTC collaborative editor was configured with a hardcoded static room name (`"email-template-room"`).
**Learning:** This exposes all instances of the application on the same network or signaling server to the same data stream, meaning users who shouldn't have access to others' documents would automatically connect and share data without authorization. In a WebRTC peer-to-peer setup, this constitutes a serious data leakage/authorization bypass vulnerability.
**Prevention:** When setting up collaboration channels (like WebRTC or WebSockets), always dynamically generate or require unique, authenticated session/room IDs to isolate data properly.
