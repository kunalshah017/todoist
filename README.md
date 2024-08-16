# Todoist

A Simple Todo Application for managing your tasks and daily activities.

## Tech Stack

- Next.js
- Tailwind CSS
- TypeScript
- MongoDB

## Features

- Add a new task
- Mark a task as completed

## Installation

1. Clone the repository

    ```bash
    git clone https://github.com/kunalshah017/todoist.git
    ```

2. Install the dependencies

    ```bash
    npm install
    ```

3. Create a `.env.local` file in the root directory and add the following environment variables

    ```bash
    MONGODB_URI=your_mongodb_uri
    ```

4. Start the development server

    ```bash
    npm run dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser
6. Happy Developing! 🚀

## Overall Documentation

### Frontend

- The frontend is built using Next.js 14 and its App router.
- The UI is styled using Tailwind CSS.
- The components are written in TypeScript.
- The state management is handled using React hooks.
- The application is responsive and works on all devices.


### Backend

- The backend is built using Node.js and Next Server.
- The API routes are served under the `/api` directory.
- The Controllers are written in TypeScript.
- The database is MongoDB and can be hosted on MongoDB Atlas or locally.
- The database connection is established using Mongoose.

### API Routes Documentation

- `GET /api/tasks` - Get all tasks
  - Parameters: None
  - Body: None

    Example Response: 
    ```json
    {
        "success": true,
        "data": [
            {
                "_id": "61f7b1b3b3b3b3b3b3b3b3b3",
                "title": "Task 1",
                "completed": false,
                "createdAt": "2022-01-31T14:00:00.000Z",
                "updatedAt": "2022-01-31T14:00:00.000Z",
                "__v": 0
            }
        ]
    }
    ```

- `POST /api/tasks` - Add a new task
    - Parameters: None
    - Body: 
    ```json
    {
        "title": "Task 1"
    }
    ```

    Example Response: 
    ```json
    {
        "success": true,
        "data": {
            "_id": "61f7b1b3b3b3b3b3b3b3b3b3",
            "title": "Task 1",
            "completed": false,
            "createdAt": "2022-01-31T14:00:00.000Z",
            "updatedAt": "2022-01-31T14:00:00.000Z",
            "__v": 0
        }
    }
    ```

- `DELETE /api/tasks/:id` - Delete a task
    - Parameters: 
        - `id` - Task ID
    - Body: None

    Example Response: 
    ```json
    {
        "success": true,
        "message": "Task deleted successfully"
    }
    ```