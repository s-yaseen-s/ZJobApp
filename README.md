# DevTrack — Developer Job Application Tracker

DevTrack is a modern, responsive web application designed to empower software developers to manage, track, and optimize their job application process in one centralized workspace.

## 👥 Team Members & Roles

| Team Member | GitHub Profile | Primary Contributions & Assigned Pages | 
| ----- | ----- | ----- | 
| **Yaseen S.** | [@s-yaseen-s](https://github.com/s-yaseen-s) | Landing Page (`index.html`), Authentication (`login.html`, `register.html`), Profile Settings (`profile.html`), Mock Data Architecture (`jobs.json`, `mock-data.json`). | 
| **Shehab M.** | [@s-shehabmadgdy-rrr](https://github.com/s-shehabmadgdy-rrr) | Dashboard Page (`dashboard.html`), Job Board Page (`job-board.html`). | 
| **Mariam** | [@Mar1am574](https://github.com/Mar1am574) | Job Details View (`job-details.html`), Saved Jobs Page (`saved-jobs.html`). | 
| **Maya** | [@MAYA-P-code](https://github.com/MAYA-P-code) | Add/Edit Application Page (`add-application.html`), Application Tracker Pipeline Page (`tracker.html`). | 

## 📂 Repository Structure

```text
ZJobApp/
├── docs/                      # Design artifacts, UX rationale, and wireframe specs
│   ├── wireframes.md          # Desktop & mobile wireframe blueprints
│   ├── design-rationale.md    # Typography, color system, and layout choices
│   └── accessibility.md       # WCAG 2.1 AA accessibility guidelines & notes
├── frontend/                  # Web application source files
│   ├── dist/                  # Compiled output stylesheet (output.css)
│   ├── src/                   # Source CSS directives (input.css)
│   ├── index.html       # Landing page entry point
│   ├── dashboard.html         # Application metrics & pipeline dashboard
│   ├── job-board.html         # Developer job feed with filter controls
│   ├── job-details.html       # Individual job posting & requirements view
│   ├── saved-jobs.html        # Bookmarked job collection
│   ├── add-application.html   # Add/Edit application logging form
│   ├── tracker.html           # Application tracking pipeline
│   ├── login.html             # Authentication portal
│   ├── register.html          # New user registration screen
│   ├── profile.html           # Developer profile & settings
│   ├── package.json           # Node dependencies & script configurations
│   └── tailwind.config.js     # Custom Tailwind theme extensions
├── backend/                   # Structured mock data feeds
│   ├── jobs.json              # Available positions feed
│   └── mock-data.json         # User metrics, applications, and tracker data
├── tests/                     # QA testing artifacts
│   └── manual-test-report.md  # Responsive, cross-browser, and usability test matrix
├── deployment/                # Hosting & deployment documentation
│   └── deployment-guide.md    # Deployment steps and environment configuration
└── README.md                  # Main repository documentation
```

## 🖥️ Platform Pages Overview

 1. **Landing Page (`frontend/index.html`):** Marketing hero section, feature highlights, and clear call-to-actions (Built by **Yaseen**).

 2. **Dashboard (`frontend/dashboard.html`):** Main tracking dashboard displaying metrics, analytics, and active application stages (Built by **Shehab**).

 3. **Job Board (`frontend/job-board.html`):** Searchable job feed with filtering by location, workplace type, and experience level (Built by **Shehab**).

 4. **Job Details (`frontend/job-details.html`):** Comprehensive view of individual job descriptions, requirements, responsibilities, and direct application triggers (Built by **Mariam**).

 5. **Saved Jobs (`frontend/saved-jobs.html`):** Grid/list view of bookmarked job listings for quick access and tracking (Built by **Mariam**).

 6. **Add / Edit Application (`frontend/add-application.html`):** Form interface to manually log or edit application details, status tags, and notes (Built by **Maya**).

 7. **Application Tracker (`frontend/tracker.html`):** Pipeline view to monitor active job application stages and progress (Built by **Maya**).

 8. **Login (`frontend/login.html`):** Authentication portal for existing users (Built by **Yaseen**).

 9. **Register (`frontend/register.html`):** User onboarding form to create a new DevTrack account (Built by **Yaseen**).

10. **Profile & Settings (`frontend/profile.html`):** User profile options, target roles, contact details, and preferences (Built by **Yaseen**).

## 🛠️ Tech Stack & Tooling

* **Markup:** Semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).

* **Styling:** [Tailwind CSS v3](https://tailwindcss.com/) using a local Node.js compilation pipeline.

* **Icons:** [Heroicons](https://heroicons.com/) SVGs embedded directly for optimal performance and customization.

* **Data Format:** JSON mock datasets (`backend/jobs.json` & `backend/mock-data.json`).

## 🚀 Local Installation & Build Instructions

### Prerequisites

Make sure you have Node.js (v16.0.0 or higher) and npm installed on your system.

### Build Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/s-yaseen-s/ZJobApp.git
   cd ZJobApp/frontend
   ```

2. **Install local dependencies:**

   ```bash
   npm install
   ```

3. **Run Tailwind compiler in development mode (watch mode):**

   ```bash
   npm run dev
   ```

4. **Compile production-ready minified CSS:**

   ```bash
   npm run build
   ```

5. **Preview the Application:**
   Open any `.html` file inside the `/frontend` directory directly in your preferred web browser, or serve using VS Code Live Server.