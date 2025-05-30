# vehicle-booking-system

This is a full-stack application developed as part of the OctaLogic Full Stack Hiring Test. It allows users to book a vehicle (car or bike) by selecting from available options through a dynamic, multi-step form.

📂 Project Structure
├── server/          # Node.js + Express + SQL (with Sequelize or Prisma)
├── client/         # React.js + Material UI
├── database/         # Sql files for Seeding data into tables and table strusture and data.
└── README.md

Features:- 
  Multi-step form UI with validation (one question per screen)
  Dynamic data fetching (vehicle types and models from backend)
  Date range selection for booking
  Booking conflict prevention logic
  Clean RESTful APIs for vehicle data and bookings
  Seed script and DB migrations included

Tech Stack:- 
  Backend:- 
    Node.js
    Express.js
    MySQL
    Sequelize ORM
    REST APIs

  Frontend:- 
    React.js
    Material UI (MUI)
    Axios (for API requests)

Form Workflow
  Enter First and Last Name
  Select Number of Wheels (2 or 4)
  Select Vehicle Type (dynamically from DB)
  Select Specific Model (filtered by type)
  Pick Booking Date Range
  Note:- Each question is displayed on a separate screen with "Next" navigation.

How to Run Locally:- 
  1. Clone the Repository
    git clone https://github.com/yourusername/vehicle-booking-app.git
    cd vehicle-booking-app

Database Setup:- 
  cd databse
  import all the sql files for sql dump and seeding query into the database.

Server Setup:- 
  cd server
  npm install / yarn
  npm run start:dev
  Note:- Please change the database username, password, database, host and port from the file:- server/src/db/config.js. The code is given below
            
                module.exports = {
                development: {
                    username: "root",
                    password: "Reliable@1234",
                    database: "rental-point",
                    options: {
                        host: "127.0.0.1",
                        port: 3307,
                        logging: console.log,
            
                        ...same,
                    },
                },
            
            };

Client Setup:-
  cd client
  npm install / yarn
  npm start

Notes:- 
  No hardcoded data on the frontend; everything is fetched from the backend
  Validation implemented both on frontend and backend
  Designed mobile-first and responsive using Material UI

Developer:-
    Name:-        Manan Jain
    Git Profile:- TechieCoder18
    Email:        mananjain4499@gmail.com
