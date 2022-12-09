- [1. Description](#1-description)
- [2. Requirements](#2-requirements)
- [3. Project setup](#3-project-setup)
  - [3.1. Project configurations](#31-project-configurations)
    - [3.1.1. Initial setup](#311-initial-setup)
    - [3.1.2. Better to have](#312-better-to-have)
- [4. Authentication](#4-authentication)
  - [4.1. Assumptions](#41-assumptions)
  - [4.2. Requirements](#42-requirements)
    - [4.2.1. APIs](#421-apis)
    - [4.2.2. Global session manager](#422-global-session-manager)
    - [4.2.3. UI components](#423-ui-components)
      - [4.2.3.1. Image slider](#4231-image-slider)
      - [4.2.3.2. Login form](#4232-login-form)


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
# 3. Project setup
1. Referring `.env.example` for required ENVs.
2. Install dependencies with `npm run install` or `yarn install`. 
   1. Recommend to use `yarn` - installing globally with `npm install yarn -g` (Admin permission such as `sudo` may be required).
3. Run `yarn dev` to run app in development mode locally.
   1. The default port is `3000`.
   2. Change the port with `-p` flag (e.g. `npm run dev -p 8080` or `yarn dev -p 8080`)
4. Run `yarn lint` to parse and check code with `eslint`.
5. Run `yarn lint:type` to proceed type sanitization. 
6. Run `yarn test` to run on all local unit tests with `jest` and `react-testing-library` for UI components.
7. Run `yarn analyze` to check visualized package/dependency size.
8. Run `yarn build` to build app in production. 
9. Run `yarn start` to run built app. 

## 3.1. Project configurations
### 3.1.1. Initial setup
1. `husky` and `commitlint` are used for commit linting and format unification. This works well with `semantic-release` for app versioning. Configuration is in `commitlint.config.js`
2. `eslint` is used for code linting. Configuration is in `.eslintrc.json`.
3. `typescript` is used for type checking. Configuration is in `tsconfig.json`.
   1. `baseUrl` is set as `.`, which allows ESM to be imported without `./` on root directory. 
4. `next-i18next` is used for internationalization. Configuration is in `next-i18next.config.js`, imported to `next.config.js`.
5. `next-seo` is used for SEO meta data on page level. Import `Seo` component from `components/common/Seo` to use in page files. 

### 3.1.2. Better to have 
1. Action scripts for automated CI/CD process.
   1. `.github/actions`
      1. Linting
      2. Type checking
      3. Test code coverage report
   2. `Docker`
2. `prettier` for code styling for formatting. 
3. `semantic-release` to update `CHANGELOG` with git commits. 
4. App optimization
   1. Code splitting and tree shaking.
   2. Note - Next.js 13 uses `Rust` engine to compile without using `babel` which requires further research. 

---

# 4. Authentication
## 4.1. Assumptions
1. All connections are under `https`.
2. The app uses token-based authentication. `jsonwebtoken` could be the option.
   1. If the API services are managed under monolithic structure, a "**session ID**" may be used.
   2. Token-based could beneficial when backend is managed with micro-services. 
   3. `accessToken` may be set as cookie or configured to intercept with `axios` requests as `Authorization` header. 
   4. `refreshToken` may be stored in `localStorage` (or `sessionStorage`) and should be revoked every time when it is used. 
3. Sign up (or registration) process is out of requirement scope.
4. The following API endpoints can be external services or built-in under `pages/apis` in the same next.js app.
5. If we may use `next-auth` package, which abstract the authentication process and management, we'd only need to config `SessionProvider` in `_app` for client-side global session management and `pages/api/auth/[...nextauth].ts` for server-side connections.

## 4.2. Requirements
### 4.2.1. APIs
1. APIs may be proxied with `pages/api` to hide sensitive credentials or connect to external authentication services directly. 
2. GET `/auth/me`
   1. Check request cookie/header if the user is still in valid authentication. 
   2. Optional - Look up latest user authorization.
3. POST `/signin`
   1. Request - Receives `username` and `password` as request body.
   2. Response 
      1. `accessToken` assigned as cookie with `httpOnly`, `secure` flag, and relatively short life-span (e.g. 15 mins).
      2. `refreshToken` stored in `localStorage` which has a longer life-span (e.g. 7 days)
4. POST `/signout`
   1. Request
      1. Receives `refreshToken` as request body. 
      2. Revoke `refreshToken` in storage (e.g. database/cache-layer)
   2. Response `204` or `205`
5. POST `/refresh`
   1. Request
      1. Receives `refreshToken` as request body
      2. Revoke `refreshToken` in storage (e.g. database/cache-layer)
   2. Response - New `accessToken` and `refreshToken`. 

### 4.2.2. Global session manager
1. This part could be skipped if we use `next-auth` with its `SessionProvider`. 
2. Custom `SessionManager` placed in `_app`
   1. Short polling `/auth` to check if user is authenticated. We may use `@tanstack/react-query` (former `react-query`), `setTimeout` or `setInterval`. 
   2. Refresh token when `accessToken` expires with `refreshToken` stored in `localStorage`.
   3. Client-side route control for authorized services.

### 4.2.3. UI components
1. `PortfolioLayout` is introduced for 2 side layout (as a portfolio).
   1. flexbox
   2. grid
#### 4.2.3.1. Image slider 
1. Multiple UI libraries may be available such as `swiper.js`. 
2. The component may be built with pure html and css without Javascript
   1. `input:checkbox` with checked state CSS selector
   2. `label` to show selected checkboxes as bar, dots, or image selection indicator 

#### 4.2.3.2. Login form
1. `react-hook-form` may be applied for form state management and state handling. 
2. For UI details, please refer to `components/auth/Login.tsx`
3. `components/auth/Login.tsx`
   1. `components/auth/login-form/UsernameInput.tsx`
   2. `components/auth/login-form/PasswordInput.tsx`
4. Component structure may vary according to design and business logic. 
