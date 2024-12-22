# Next.js Frontend Application

## Overview

This is a Next.js application that serves as the frontend for managing items. It integrates with the Spring Boot backend API to provide a full-stack experience.

### Features

- **Authentication**: Login with hardcoded credentials (admin/password).
- **Item Management**:
  - View a list of items.
  - Add new items.
  - Edit existing items.
  - Delete items.
- **Dynamic Routes**:
  - View item details dynamically with URLs like `/items/[id]`.
- **Clean UI Design**: Built with Tailwind CSS.
- **Error Handling**: Displays friendly messages for API errors.

---

## Project Structure

- **Routing**: Handled using Next.js' `app` directory.
  - **Private Routes**: Pages for authenticated users only (`/items`, `/add-item`, `/edit-item`).
  - **Public Routes**: Login page (`/login`).
- **Components**: Reusable UI components located in the `components` folder.
- **Hooks**: Custom React hooks for fetching and managing data.
- **Types**: TypeScript interfaces and types stored in the `types` folder.
- **Utils**: Utility folder for helper functions.

---

## Environment Variables

Ensure the following environment variables are defined in a `.env` file:

```env
NEXT_PUBLIC_AUTH_HASH=YWRtaW46cGFzc3dvcmQ= # Base64 encoded credentials
NEXT_PUBLIC_API_BASE_URL=http://localhost:8080/api/
```

---

## Setup Instructions

### Prerequisites

- Node.js (>= 16.x)

### Steps to Run

1. **Navigate to the frontend folder**:

   ```bash
   cd frontend
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   ```

4. **Access the application**:

   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Docker Instructions

### Building the Docker Image

1. Create a Docker image for the frontend:

   ```bash
   docker build -t nextjs-frontend .
   ```

### Running the Docker Container

1. Run the Docker container:

   ```bash
   docker run -p 3000:3000 --env-file .env nextjs-frontend
   ```

2. Access the application at [http://localhost:3000](http://localhost:3000).

---

## Notes

- Ensure the backend is running and accessible via the base URL specified in the environment variables.
- Uses TypeScript for type safety and better code quality.
- Follows Next.js best practices for routing and API integration.
