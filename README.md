# Pomova – Pomodoro Timer Web App

Pomova is a simple and modern **Pomodoro timer web application** designed to help people stay focused and productive while working or studying. It follows the Pomodoro Technique, a time-management method that divides work into focused sessions followed by short breaks.

The goal of this project is to provide a clean, distraction-free timer with helpful features such as task tracking, session progress, and focus sounds.

---

## Features

* **Pomodoro Timer** with start, pause, and stop controls
* **Automatic session switching**

  * Pomodoro → Short Break
  * Every 4 sessions → Long Break
* **Circular timer progress ring**
* **Task manager**

  * Add tasks
  * Mark tasks as completed
  * Delete tasks
* **Task persistence**

  * Tasks are saved using localStorage
* **Daily session statistics**
* **Progress tracker**
* **Focus sound player**

  * Lofi
  * Rain ambience
  * Cafe ambience
* **Browser notification when a session ends**
* **Share website button**
* **Responsive navigation with hamburger menu**
* **SEO optimized blog section**
* **Contact, Privacy, and Terms pages**

---

## Technologies Used

* React
* Vite
* React Router
* JavaScript (ES6)
* CSS
* LocalStorage API
* Browser Notification API

---

## Project Structure

```
src
 ├── components
 │   ├── Header.jsx
 │   ├── Footer.jsx
 │   ├── Timer.jsx
 │   ├── Tabs.jsx
 │   ├── Tasks.jsx
 │   ├── Stats.jsx
 │   ├── Progress.jsx
 │   ├── ShareButton.jsx
 │   ├── FocusSound.jsx
 │   └── Loader.jsx
 │
 ├── pages
 │   ├── Blog.jsx
 │   ├── Contact.jsx
 │   ├── Privacy.jsx
 │   └── Terms.jsx
 │
 ├── App.jsx
 ├── main.jsx
 └── index.css
```

---

## Installation

Clone the repository:

```
git clone https://github.com/AmmarKhan781/pomova.git
```

Move into the project folder:

```
cd pomova
```

Install dependencies:

```
npm install
```

Start the development server:

```
npm run dev
```

The project will run at:

```
http://localhost:5173
```

---

## Live Demo

You can try the live version here:

https://www.pomova.netlify.app

---

## Future Improvements

Some features planned for future updates:

* User accounts and cloud task sync
* Advanced productivity analytics
* Custom timer durations
* Dark mode themes
* Focus music playlists
* PWA support for mobile installation

---

## License

This project is open source and available for educational and personal use.

---

## Author

Developed by Ammar Ahmad.

Pomova was built as a productivity tool and portfolio project focused on clean design, useful features, and practical web development.
