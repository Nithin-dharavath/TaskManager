Task Manager (Vanilla JavaScript) :

A lightweight Task / Habit Tracker built using Vanilla JavaScript, designed to strengthen core frontend fundamentals such as state management, separation of concerns, and localStorage persistence — without using any frameworks.

Features :

Add tasks with a title and priority.
 View all tasks in a dynamic list.
 Persistent storage using localStorage.



Tech Stack :

HTML5 – Structure
CSS3 – Styling
JavaScript (ES6 Modules) – Logic & Architecture

Browser localStorage – Persistence

No frameworks. No libraries. Pure JavaScript.



📁 Project Structure:


javascript/
 ├── app.js        # Application entry point
 ├── ui.js         # DOM interaction & rendering
 ├── logic.js      # Business logic (task creation & validation)
 ├── state.js      # In-memory state management
 └── storage.js    # localStorage persistence
├── index.html    # html file
├── style.css     #styling  


Architecture Overview:

This project follows a separation of concerns approach:

app.js
Initializes the application and controls startup flow.

state.js
Manages in-memory task data (acts like application RAM).

logic.js
Handles task creation rules and validation (pure logic).

ui.js
Handles user interactions and renders tasks to the DOM.

storage.js
Saves and restores tasks using browser localStorage.

This structure mirrors real-world frontend system design patterns.




🔄 Application Flow
On Page Load
app.js
 → storage.js (load saved tasks)
 → state.js (restore memory)
 → ui.js (render tasks)

On Adding a Task
ui.js
 → logic.js (validate & create task)
 → state.js (store task)
 → storage.js (persist task)
 → ui.js (re-render list)



⚠️ Make sure the script tag uses:

<script type="module" src="javascript/app.js"></script>




🎯 Learning Outcomes

By building this project, you practice:

JavaScript ES6 modules (import / export)

State management without frameworks

DOM manipulation & rendering

Event handling

localStorage persistence

Clean, scalable frontend architecture.