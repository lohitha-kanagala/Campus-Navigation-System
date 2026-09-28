# Campus Navigation System

A web-based campus navigation project developed to help students find buildings, rooms, labs, departments, and other facilities within a college campus.

I built this project as part of my B.Tech IT work to make campus information easier to search and access through a simple web interface.

## About the Project

Finding a particular room, lab, or facility on a large campus can sometimes be confusing, especially for new students.

The Campus Navigation System provides a simple interface where users can search for available campus information using details such as roll number, building, room, department, lab, or facility.

The project currently works as a frontend application using campus data available in the project. It does not use a backend or live GPS service.

## Features

* Search for students and campus locations
* Search using roll numbers, buildings, rooms, departments, labs, and facilities
* Case-insensitive search
* Search suggestions/autocomplete
* Recent searches
* Clear search option
* Interactive campus map interface
* Facility directory with category filters
* Favorite locations
* Light and dark mode
* Responsive design for mobile, tablet, and desktop
* Keyboard-friendly navigation
* Form validation
* Feedback page
* Student guide and FAQ
* Local storage for favorites, recent searches, and feedback

## Technologies Used

* HTML5
* CSS3
* JavaScript
* LocalStorage
* Git
* GitHub

I used plain HTML, CSS, and JavaScript instead of adding a framework because the main goal of this project was to keep it lightweight and easy to understand.

## Project Structure

```text
Campus-Navigation-System/
│
├── index.html
├── facilities.html
├── student-guide.html
├── about.html
├── feedback.html
│
├── style.css
├── script.js
├── run.bat
└── README.md
```

### Main Pages

**`index.html`**

The main page of the application. It contains the search, campus map, location information, and navigation features.

**`facilities.html`**

Displays the available campus facilities and allows users to search and filter them.

**`student-guide.html`**

Provides a simple guide explaining how to use the application.

**`about.html`**

Contains information about the project, technologies used, and current limitations.

**`feedback.html`**

Allows users to submit feedback about their experience with the application.

## How to Run the Project

### Option 1: Using `run.bat`

On Windows, you can simply double-click:

```text
run.bat
```

The local server will start automatically.

Then open:

```text
http://localhost:8080
```

### Option 2: Using Python

Make sure Python is installed.

Open PowerShell or Command Prompt inside the project folder and run:

```bash
python -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

## Example Search

The application contains campus/student data used for demonstration.

For example, the current roll number format used in the project is:

```text
23761A1286
```

The search system can also be used with available building, room, department, lab, and facility information.

## How the Search Works

The search is handled on the client side using JavaScript.

When a user enters a search term, the application checks it against the available campus data and displays matching results.

The search supports different types of information instead of requiring users to remember one particular search format.

## Campus Map

The project includes a campus map interface where available locations can be selected to view their information.

At the moment, the map should be considered an **illustrative campus map** because the project does not have verified GPS coordinates or a complete real-world campus map dataset.

I have intentionally not added fake GPS locations, walking distances, or walking times.

## Route Planning

The project includes the interface for selecting a starting location and destination.

However, real route calculation is not claimed unless the required campus graph data is available.

A future version could use algorithms such as:

* BFS
* Dijkstra's Algorithm
* A* Search

with a properly defined campus graph.

## Local Storage

Some features use browser `localStorage`, including:

* Favorites
* Recent searches
* Theme preference
* Feedback

This means these features work without requiring a database or backend server.

## Responsive Design

The interface has been designed to work on different screen sizes:

* Desktop
* Laptop
* Tablet
* Mobile

The layout and navigation adjust according to the screen size.

## Accessibility

I also considered basic accessibility while developing the interface.

Some of the improvements include:

* Semantic HTML
* Keyboard navigation
* Focus indicators
* Form labels
* Responsive controls
* Reduced-motion support
* Readable contrast

## Limitations

This is currently a frontend project, so there are some limitations:

* No backend database
* No user authentication
* No real-time GPS tracking
* No live campus location service
* No verified walking distances
* No live facility availability
* Feedback is stored locally in the browser

These can be added in future versions if backend and verified campus data are available.

## Future Improvements

Some features I would like to add in future versions are:

* Real campus map integration
* GPS-based navigation
* Actual shortest-path navigation
* Backend database
* Student login
* Admin dashboard
* QR-code based location search
* Campus announcements
* Emergency contacts
* Real-time facility information
* PWA/mobile support

## What I Learned

While working on this project, I got practical experience with:

* HTML and CSS
* JavaScript DOM manipulation
* Search and filtering logic
* Responsive UI design
* Browser LocalStorage
* Form validation
* Git and GitHub
* Organizing a multi-page web project
* Thinking about accessibility and usability

## Project Status

**Current status: Completed frontend version**

The project is functional as a client-side campus navigation application. More advanced navigation features will require verified campus map/graph data and, potentially, a backend.

## Author

**Lohitha Kanagala**

B.Tech Information Technology

GitHub:
https://github.com/lohitha-kanagala

## License

This project is created for academic and learning purposes.
