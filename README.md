# Portfolio Project

This is a full-stack portfolio project built using TypeScript, React, Bootstrap, Toastify for the frontend, and .NET Core with Entity Framework and JWT authentication for the backend.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [License](#license)

## Features

- **Responsive Design:** Built with Bootstrap to ensure compatibility across devices.
- **Authentication:** JWT-based authentication system.
- **TypeScript:** Ensures type safety in both frontend and backend.
- **Entity Framework:** ORM for database interactions.
- **Notifications:** Integrated Toastify for user-friendly notifications.

## Technologies Used

### Frontend
- **TypeScript**
- **React**
- **Bootstrap**
- **Toastify**

### Backend
- **.NET Core**
- **Entity Framework**
- **JWT Authentication**

## Installation

### Prerequisites

- Node.js and npm installed
- .NET Core SDK installed
- SQL Server or any other supported database

### Backend Setup

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/portfolio-project.git
    cd portfolio-project
    ```

2. **Navigate to the backend folder:**
    ```bash
    cd backend
    ```

3. **Restore .NET dependencies:**
    ```bash
    dotnet restore
    ```

4. **Set up the database:**
    - Update the `appsettings.json` with your database connection string.
    - Run the following command to apply migrations:
    ```bash
    dotnet ef database update
    ```

5. **Run the backend server:**
    ```bash
    dotnet watch run
    ```

### Frontend Setup

1. **Navigate to the frontend folder:**
    ```bash
    cd frontend
    ```

2. **Install frontend dependencies:**
    ```bash
    npm install
    ```

3. **Run the React development server:**
    ```bash
    npm run dev
    ```

## Usage

- Open your browser and go to localhost address shown in terminal to view the frontend.
- The backend API will be running on port you can see on the swagger.
- Register, login, logout.
- You can search, add and delete stocks to/from your portfolio, leave comments about them.

## Screenshots

![Screenshot_1](https://github.com/user-attachments/assets/8412cbbf-9969-4ad6-a269-97d3dd223526)
![image](https://github.com/user-attachments/assets/2145e4e2-c683-400d-a57a-3d1dc2c73082)
![image](https://github.com/user-attachments/assets/86724a69-4104-4786-be6c-c0a1d5fa6fcf)




## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
