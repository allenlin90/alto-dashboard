- [1. Description](#1-description)
- [2. Requirements](#2-requirements)
- [3. Authentication](#3-authentication)
  - [3.1. Assumptions](#31-assumptions)
  - [3.2. Requirements](#32-requirements)
    - [3.2.1. APIs](#321-apis)
    - [3.2.2. Global session manager](#322-global-session-manager)
    - [3.2.3. UI components](#323-ui-components)
      - [3.2.3.1. Image slider](#3231-image-slider)
      - [3.2.3.2. Login form](#3232-login-form)


# 1. Description
From the following images of Chiller Plant Management System, please create a web
application with real-time IoT data and device data which are fed from server via websocket protocol and http protocol respectively. And also, create unit tests using test framework.

# 2. Requirements
- Create a web application using Next.js with 2 pages
  - Login page
  - Overview page
- Stream IoT data via Websocket protocol with mock data and other data with REST api (Please prepare mock servers for providing data)
- Implement authentication system
- Unit test with Jest or other frameworks
- Able to edit device location on floor plan in Overview page using x,y coordinate
- Devices contain 4 status (with different images on floor plan)
  - Online
  - Offline
  - Disconnect
  - Failed
- Unit test
- For Speed control
- README.md with all necessary informations

Figma link:
[https://www.figma.com/file/6xoGYA10kZRH89Wo8GQjLV/Frontend-Assignment?node-id=1%3A1366&t=m2nf7ePWaLpfvNvZ-1](https://www.figma.com/file/6xoGYA10kZRH89Wo8GQjLV/Frontend-Assignment?node-id=1%3A1366&t=m2nf7ePWaLpfvNvZ-1)

---

# 3. Authentication
## 3.1. Assumptions
1. The app uses token-based authentication. `jsonwebtoken` could be the option.
   1. If the API services are managed under monolithic structure, a "**session ID**" may be used.
   2. Token-based could beneficial when backend is managed with micro-services. 
   3. `accessToken` may be set as cookie or configured to intercept with `axios` requests as `Authorization` header. 
   4. `refreshToken` may be stored in `localStorage` (or `sessionStorage`) and should be revoked every time when it is used. 
2. All connections are under `https`.
3. Sign up (or registration) process is out of requirement scope.
4. The following API endpoints can be external services or built-in under `pages/apis` in the same next.js app.
5. If we may use `next-auth` package, which abstract the authentication process and management, we'd only need to config `SessionProvider` in `_app` and `pages/api/auth/[...nextauth].ts`.

## 3.2. Requirements
### 3.2.1. APIs
1. GET `/auth` - Check request cookie/header if the user is still in valid authentication/authorization. 
2. POST `/signin`
   1. Request - Receives `username` and `password` as request body.
   2. Response 
      1. `accessToken` assigned as cookie with `httpOnly`, `secure` flag, and relatively short life-span (e.g. 15 mins).
      2. `refreshToken` stored in `localStorage` which has a longer life-span (e.g. 7 days)
3. POST `/signout`
   1. Request
      1. Receives `refreshToken` as request body. 
      2. Revoke `refreshToken` in storage (e.g. database/cache-layer)
   2. Response `204` or `205`
4. POST `/refresh`
   1. Request
      1. Receives `refreshToken` as request body
      2. Revoke `refreshToken` in storage (e.g. database/cache-layer)
   2. Response - New `accessToken` and `refreshToken`. 

### 3.2.2. Global session manager
1. This part could be skipped if we use `next-auth` with its `SessionProvider`. 
2. Custom `SessionManager` placed in `_app`
   1. Short polling `/auth` to check if user is authenticated. We may use `@tanstack/react-query` (former `react-query`), `setTimeout` or `setInterval`. 
   2. Refresh token when `accessToken` expires with `refreshToken` stored in `localStorage`.
   3. Client-side route control for authorized services.

### 3.2.3. UI components
1. `PortfolioLayout` is introduced for 2 side layout (as a portfolio).
   1. flexbox
   2. grid
#### 3.2.3.1. Image slider 
1. Multiple UI libraries may be available such as `swiper.js`. 
2. The component may be built with pure html and css without Javascript
   1. `input:checkbox` with checked state CSS selector
   2. `label` to show selected checkboxes as bar, dots, or image selection indicator 

#### 3.2.3.2. Login form
1. `react-hook-form` may be applied for form state management and state handling. 
2. For UI details, please refer to `components/auth/Login.tsx`
3. `components/auth/Login.tsx`
   1. `components/auth/login-form/UsernameInput.tsx`
   2. `components/auth/login-form/PasswordInput.tsx`
4. Component structure may vary according to design and business logic. 
