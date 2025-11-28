# ✈️ TravelBloom

**Explore Dream Destinations.**

TravelBloom is a web-based travel recommendation platform designed to help users discover their next holiday destination. By utilizing a keyword-based search engine, the application curates recommendations for beaches, temples, and specific countries, providing images, descriptions, and local time zones.

---

## 📖 Table of Contents
- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Project Structure](#-project-structure)
- [Installation & Setup](#-installation--setup)
- [Usage Guide](#-usage-guide)
- [Live Demo](#-live-demo)

---

## 🚀 Features

* **Dynamic Search Engine:** Users can search for recommendations using keywords like "beach", "temple", or specific countries (e.g., "Japan", "Iran").
* **Data Fetching:** Utilizes the JavaScript Fetch API to retrieve destination data asynchronously from a JSON dataset.
* **Interactive UI:** Features a modern "Glassmorphism" design with a responsive navigation bar, hero section, and card-based result grid.
* **Multi-Page Navigation:** Includes fully functional Home, About Us, and Contact Us pages.
* **Time Zone Integration:** Automatically displays the current local time for specific country recommendations.
* **Reset Functionality:** Allows users to easily clear search results and start over.

---

## 🛠 Technologies Used

* **HTML5:** Semantic structure for accessibility and SEO.
* **CSS3:** Custom styling, Flexbox layouts, background overlays, and glassmorphism effects.
* **JavaScript (ES6+):** DOM manipulation, Event Listeners, and Fetch API for data handling.
* **JSON:** Structured dataset containing over 100 destinations including countries, cities, temples, and beaches.

---

## 📂 Project Structure

```text
/travelRecommendation
│
├── index.html      # Main Landing/Home Page
├── about_us.html                   # Company & Team Information
├── contact_us.html                 # User Contact Form
├── travel_recommendation.css       # Global Stylesheet
├── travel_recommendation.js        # Main Logic & API Handling
├── travel_recommendation_api.json  # Data Source (100+ locations)
└── README.md                       # Project Documentation