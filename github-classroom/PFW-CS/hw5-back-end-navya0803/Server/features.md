# Backend Features

This document outlines the features implemented in the back-end server.

## File Upload Endpoint

- **Endpoint:** `/api/upload`
- **Method:** `POST`
- **Description:**
  - Handles file uploads using the `multer` middleware.
  - Stores uploaded files in the `./uploads` directory.
  - Logs successful file uploads.
  - Responds with a JSON message and file information.

## Contact Form Submission Endpoint

- **Endpoint:** `/api/contact`
- **Method:** `POST`
- **Validation:**
  - Uses `express-validator` for input validation.
  - Validates the `name` field to ensure it is not empty.
  - Validates the `email` field to ensure it is a valid email address.
- **Description:**
  - Handles contact form submissions with validated input.
  - Saves contact information to the MongoDB database.
  - Responds with the saved contact information in JSON format.

## Static File Serving(other feature of your choice )

- **Path:** `/uploads`
- **Description:**
  - Serves uploaded files statically from the `./uploads` directory.

## MongoDB Connection

- **Database URI:** `mongodb+srv://navya:Navya08@nkfashion.edjlw3b.mongodb.net/?retryWrites=true&w=majority`
- **Connection:**
  - Connects to MongoDB using Mongoose.
  - Logs connection errors or successful connection.

## Middleware

- **CORS:** Enables Cross-Origin Resource Sharing.
- **Body Parser:** Parses incoming request bodies in JSON format.

## Error Handling(other feature of your choice)

- **Generic Error Handling Middleware:**
  - Catches and logs errors globally.
  - Responds with a 500 status and error details in case of internal errors.

## Additional Notes

- The server is set to run on the specified port (either the environment variable PORT or 5000 by default).
- Created a new directory `uploads` to store uploaded files, and it is created dynamically if it doesn't exist.

