

 Overview of Royal family schools Frontend 
 
The frontend is responsible for:
Displaying the user interface
Handling user interactions
Communicating with the backend API
Rendering dynamic data (students, sta admin dashboard, school portal, admission list, results, etc.)
It provides a clean and responsive user interface for interacting with the backend API.

Features

Login & Authentication UI
Student Management Interface
Check Result Input & Display
Dashboard Layout
Admission List
Exam portal
Dynamic Data Fetching (API integration)
Responsive Design (Mobile-friendly)


Tech Stack

HTML5 – Structure
CSS3 – Styling & Layout
JavaScript – Logic & API calls
Fetch API – Backend communication


User interacts with the UI (e.g., login, add student)
JavaScript captures the action
A request is sent to the backend using fetch()
Backend responds with data
UI updates dynamically without page reload (where applicable)


🔗 API Integration

The frontend communicates with the backend using REST APIs.

Example:

fetch("https://Royalfamilyschoobackend.onrender.com/api/students")
  .then(res => res.json())
  .then(data => {
    console.log(data);
  });

Running Locally
You can run the frontend in two ways:

 1: Open directly
Open index.html in your browser
Option 2: Use Live Server (Recommended)
Install Live Server extension in VS Code

Right-click index.html → Open with Live Server


Deployment (Render)
The frontend was deployed on Render as a static site.



📌 Key Highlights
Built without any frontend framework
Clean separation of concerns (HTML, CSS, JS)
Real-world API integration
Deployment-ready structure.
Add form validation and error handling
Better state management

Author
Mipresh
Mmesoma Precious 

GitHub: https://github.com/mipresh 

 License
MIT License
