# Spring Boot Backend Application

## Overview

This is a Spring Boot application that provides a RESTful API for managing items. It connects to a MongoDB database and supports basic CRUD operations.

---

## Features

- **CRUD Operations**:
  - `POST /api/items`: Create a new item.
  - `GET /api/items/{id}`: Retrieve an item by ID.
  - `GET /api/items`: Retrieve all items.
  - `PUT /api/items/{id}`: Update an existing item.
  - `DELETE /api/items/{id}`: Delete an item by ID.
- **Validation**:
  - Validates incoming requests using annotations like `@Valid` and `@NotNull`.
- **Error Handling**:
  - Handles exceptions with `@RestControllerAdvice` and `@ExceptionHandler`.
  - Returns meaningful error messages with appropriate HTTP status codes.
- **MongoDB Integration**:
  - Uses MongoDB for storing and retrieving items.
- **Dockerization**:
  - Includes a `Dockerfile` to containerize the application.

---

## Environment Variables

Create a `.env` file in the `backend` directory with the following variables:

```env
SPRING_DATA_MONGODB_URI=mongodb://localhost:27017/itemsdb
```

---

## Setup Instructions

### Prerequisites

- Java 17 or higher
- MongoDB running locally or on a cloud instance
- Gradle installed (if not using Docker)

### Steps to Run

1. **Navigate to the backend folder**:

   ```bash
   cd backend
   ```

2. **Run MongoDB**:

   Ensure MongoDB is running locally or update the connection string in the `.env` file.

3. **Run the application**:

   ```bash
   ./gradlew bootRun
   ```

4. **Access the API**:

   The API will be available at [http://localhost:8080/api/](http://localhost:8080/api/).

---

## Docker Instructions

### Building the Docker Image

1. Build the Docker image for the backend:

   ```bash
   docker build -t spring-boot-backend .
   ```

### Running the Docker Container

1. Run the Docker container:

   ```bash
   docker run -p 8080:8080 --env-file .env spring-boot-backend
   ```

2. Access the API at [http://localhost:8080/api/](http://localhost:8080/api/).

---

## Notes

- Ensure MongoDB is accessible from the application.
- Test the API endpoints using tools like Postman.
