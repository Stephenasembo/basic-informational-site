# Basic-Informational-Site

## Table of contents
- [Introduction](#introduction)
- [Project Functionality](#project-functionality)
- [How To Run Project Locally](#how-to-run-project-locally)
- [Project Structure](#project-structure)
- [Tech Stack Used](#tech-stack-used)
- [Features](#features)
- [Lessons Learned](#lessons-learned)
- [Acknowledgement](#acknowledgement)

## Introduction

A simple Node.js project that serves a static informational website with basic routing, no frameworks used. This was built as part of my first backend fundamentals project to learn the core `http`, `fs`, and `url` modules in Node.

## Project Functionality

This Node server serves 4 HTML pages based on the request path:

- `/` → `index.html`
- `/about` → `about.html`
- `/contact-me` → `contact-me.html`
- Any other path → `404.html` (custom error page)

## How to Run Project Locally

1. Clone the repository:
  ```
    git clone https://github.com/Stephenasembo/basic-informational-site.git

    cd basic-informational-site
  ```

2. Start the server:
  ```
    node index.js
  ```

3. Open your browser and visit:
  ```
    http://localhost:8080
  ```

## Project Structure

```
basic-informational-site/

├── index.js                # Main Node.js server
├── pages/                  # HTML pages
│   ├── index.html
│   ├── about.html
│   ├── contact-me.html
│   └── 404.html
```

## Tech Stack Used

* Node.js

  * `http` module for server
  * `fs` module to read files
  * `url` module to parse request URLs

## Features

* Basic routing based on URL matching.
* Custom 404 page for unknown routes.
* Minimal HTML content to focus on server logic.

## Lessons Learned
* How to create a basic HTTP server in Node.
* How to handle file reading and route matching.
* How to handle invalid URL paths.

## Acknowledgement
This project is part of [The Odin Project](https://www.theodinproject.com) curriculum

Built with Nodejs as my first backend project. More to come!