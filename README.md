- [1. Description](#1-description)
- [2. Requirements](#2-requirements)


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