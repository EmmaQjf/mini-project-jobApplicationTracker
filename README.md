# mini-project-jobApplicationTracker
## Description
The Job Application Tracker is a simple web application that allows users to keep track of job applications. Users can add new jobs with company name, role, and application status. All applications are stored in the browser using `localStorage`, so data persists even after refreshing the page. Users can also delete applications dynamically.

This project demonstrates key JavaScript concepts including DOM manipulation, event delegation, state management, and localStorage usage.

---

## Features
- Add new job applications with:
  - Company Name
  - Role
  - Status (Applied, Interview, Offered, etc.)
- View all submitted applications in a dynamic list
- Delete applications with a single click
- Data persists in the browser using `localStorage`
- Responsive UI updates on addition and deletion of jobs

---
## How it Works

- State Management:
All job applications are stored in a JavaScript array called jobs. After any change (addition or deletion), the array is saved to localStorage using JSON.stringify().

- Rendering:
The renderForm() function updates the DOM to match the current state of the jobs array. Each job is rendered as an <li> with a delete button.

- Delete Functionality:
Using event delegation, a single listener is attached to the parent <ul>. When a delete button is clicked, the listener checks event.target.dataset.index to remove the correct job from the array and updates localStorage and the UI.

- Form Submission:
The form submission is intercepted with event.preventDefault() to prevent the page from reloading. A new job object is created and added to the jobs array.


---
## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6+)
- Browser localStorage

---
## Future Improvements
- Add ability to edit existing job entries
- Filter jobs by status
- Add confirmation dialogs for deleting jobs
- Style the app with better UI/UX design