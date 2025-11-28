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


/travelRecommendation
│
├── travel_recommendation.html      # Main Landing/Home Page
├── about_us.html                   # Company & Team Information
├── contact_us.html                 # User Contact Form
├── travel_recommendation.css       # Global Stylesheet
├── travel_recommendation.js        # Main Logic & API Handling
├── travel_recommendation_api.json  # Data Source (100+ locations)
└── README.md                       # Project Documentation


## ⚙️ Installation & Setup
Since this is a static website, no complex backend installation is required.

Clone the repository:

Bash

git clone [https://github.com/YOUR_USERNAME/travelRecommendation.git](https://github.com/YOUR_USERNAME/travelRecommendation.git)
Navigate to the project folder:

Bash

cd travelRecommendation
Run the project:

Option A (VS Code Live Server): Right-click travel_recommendation.html and select "Open with Live Server".

Option B (Browser): Simply double-click travel_recommendation.html to open it in your default browser.

📖 Usage Guide
Home Page: Upon loading, the site may feature recommended destinations automatically.

Search:

Type "beach" to see coastal destinations.

Type "temple" to see historic religious sites.

Type "country" to see a list of cities from various nations.

Type a specific country name (e.g., "Japan", "Australia", "Iran") to filter results for that nation.

Clear: Click the "Clear" button to reset the search bar and remove results.

Contact: Navigate to the "Contact Us" page to view the submission form (UI only).

## 🌐 Live Demo
You can view the live project here: https://peter-soroush.github.io/Travel_Website/



## 🤝 Contributing
This is a final capstone project. However, suggestions and pull requests are welcome for educational purposes.

Fork the Project

Create your Feature Branch (git checkout -b feature/AmazingFeature)

Commit your Changes (git commit -m 'Add some AmazingFeature')

Push to the Branch (git push origin feature/AmazingFeature)

Open a Pull Request

Author: Ahmadreza Soroush
