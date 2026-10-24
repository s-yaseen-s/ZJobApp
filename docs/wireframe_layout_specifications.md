# DevTrack — Wireframe & Layout Specifications

This document details the visual architecture, component hierarchies, and layout structures across all key screens in the DevTrack web application.

---

## 🖥️ 1. Dashboard Layout (`frontend/dashboard.html`)

```text
+-----------------------------------------------------------------------------------+
| [Logo] DevTrack    Dashboard   Job Board   Saved Jobs   Tracker       (User Avatar) |
+-----------------------------------------------------------------------------------+
|                                                                                   |
|  Welcome back, Developer! 👋                                                     |
|  Track your active application stats and interview status.                        |
|                                                                                   |
|  +----------------+  +----------------+  +----------------+  +----------------+  |
|  | Saved Jobs     |  | Total Applied  |  | Interviews     |  | Offers         |  |
|  |      12        |  |       18       |  |       4        |  |       2        |  |
|  +----------------+  +----------------+  +----------------+  +----------------+  |
|                                                                                   |
|  +--------------------------------------------+  +-----------------------------+  |
|  | Application Funnel Status                  |  | Quick Actions               |  |
|  | [ Applied        ================== 18 ]   |  | [+ Log New Application]     |  |
|  | [ Screening      =========== 8       ]   |  | [Browse Job Board]          |  |
|  | [ Interview      ===== 4             ]   |  | [View Saved Listings]       |  |
|  | [ Offer          === 2               ]   |  +-----------------------------+  |
|  +--------------------------------------------+                                   |
|                                                                                   |
|  +-----------------------------------------------------------------------------+  |
|  | Recent Application Activity                                                 |  |
|  | Role Title          Company          Applied Date    Status      Action     |  |
|  | Senior React Dev    TechCorp         Oct 22, 2026    Interview   [View]     |  |
|  | Frontend Engineer   Pixel Craft      Oct 19, 2026    Screening   [View]     |  |
|  | Full Stack Dev      CloudScale       Oct 15, 2026    Applied     [View]     |  |
|  +-----------------------------------------------------------------------------+  |
+-----------------------------------------------------------------------------------+
```

---

## 💼 2. Job Board Layout (`frontend/job-board.html`)

```text
+-----------------------------------------------------------------------------------+
| [Logo] DevTrack    Dashboard   Job Board   Saved Jobs   Tracker       (User Avatar) |
+-----------------------------------------------------------------------------------+
|                                                                                   |
|  [ Search job title, skill, company... ] [ Location... ] [ Job Type v ] [Search]  |
|                                                                                   |
|  +---------------------------+  +-------------------------------------------------+  |
|  | Filter By                 |  | Showing 14 Open Positions                       |  |
|  |                           |  |                                                 |  |
|  | Workplace Type            |  | +---------------------------------------------+ |  |
|  | [x] Remote                |  | | Senior Frontend Developer — Google          | |  |
|  | [ ] Hybrid                |  | | Remote | Full-time | $120k - $150k            | |  |
|  | [ ] On-site               |  | | Tags: [React] [TypeScript] [Tailwind]       | |  |
|  |                           |  | | [Bookmark]                   [View Details] | |  |
|  | Experience Level          |  | +---------------------------------------------+ |  |
|  | (•) All Levels            |  | +---------------------------------------------+ |  |
|  | ( ) Entry Level           |  | | Frontend QA Engineer — Stripe               | |  |
|  | ( ) Mid Level             |  | | Hybrid (Cairo) | Full-time | Competitive    | |  |
|  | ( ) Senior Level          |  | | Tags: [Cypress] [JavaScript] [Jest]         | |  |
|  +---------------------------+  | | [Bookmark]                   [View Details] | |  |
|                                 | +---------------------------------------------+ |  |
|                                 +-------------------------------------------------+  |
+-----------------------------------------------------------------------------------+
```

---

## 🔍 3. Job Details View (`frontend/job-details.html`)

```text
+-----------------------------------------------------------------------------------+
| [Logo] DevTrack    Dashboard   Job Board   Saved Jobs   Tracker       (User Avatar) |
+-----------------------------------------------------------------------------------+
|                                                                                   |
|  < Back to Job Board                                                              |
|                                                                                   |
|  +-----------------------------------------------+  +--------------------------+  |
|  | [Company Logo] Senior Frontend Developer      |  | Role Summary             |  |
|  | Google — Remote (US / EMEA)                   |  |                          |  |
|  | Posted 2 days ago • Full-time                 |  | Salary: $120k - $150k    |  |
|  |                                               |  | Experience: Senior (4+ yrs)  |
|  | About the Role                                |  | Department: Engineering  |  |
|  | We are seeking a passionate Frontend Engineer |  |                          |  |
|  | to build accessible user interfaces...        |  | [ Save Job ]             |  |
|  |                                               |  | [ Apply Now / Log App ]  |  |
|  | Key Responsibilities                          |  +--------------------------+  |
|  | • Develop modular UI components in React      |                                |  |
|  | • Collaborate with UX design team             |                                |  |
|  | • Optimize site performance & accessibility  |                                |  |
|  +-----------------------------------------------+                                |  |
+-----------------------------------------------------------------------------------+
```

---

## 🔖 4. Saved Jobs Page (`frontend/saved-jobs.html`)

```text
+-----------------------------------------------------------------------------------+
| [Logo] DevTrack    Dashboard   Job Board   Saved Jobs   Tracker       (User Avatar) |
+-----------------------------------------------------------------------------------+
|                                                                                   |
|  Saved Listings (4 Bookmarked)                                                    |
|                                                                                   |
|  +----------------------------------+  +----------------------------------+       |
|  | Full Stack Engineer              |  | UI/UX Engineer                  |       |
|  | Meta • Remote                    |  | Vercel • Remote                  |       |
|  | $130,000 - $160,000 / yr         |  | $110,000 - $140,000 / yr         |       |
|  | Saved on Oct 20, 2026           |  | Saved on Oct 18, 2026           |       |
|  |                                  |  |                                  |       |
|  | [Remove]          [Apply / Log]  |  | [Remove]          [Apply / Log]  |       |
|  +----------------------------------+  +----------------------------------+       |
+-----------------------------------------------------------------------------------+
```

---

## 📝 5. Add / Edit Application Layout (`frontend/add-application.html`)

```text
+-----------------------------------------------------------------------------------+
| [Logo] DevTrack    Dashboard   Job Board   Saved Jobs   Tracker       (User Avatar) |
+-----------------------------------------------------------------------------------+
|                                                                                   |
|  < Back to Tracker                                                                |
|  Log New Job Application                                                          |
|                                                                                   |
|  +-----------------------------------------------------------------------------+  |
|  | Job Title *                        Company Name *                           |  |
|  | [ e.g. Frontend Engineer         ] [ e.g. Stripe                          ] |  |
|  |                                                                             |  |
|  | Job URL                            Salary Offer / Range                     |  |
|  | [ https://...                    ] [ e.g. $100,000                        ] |  |
|  |                                                                             |  |
|  | Application Stage *                Date Applied *                           |  |
|  | [ Applied                      v ] [ 2026-10-24                         ] |  |
|  |                                                                             |  |
|  | Notes & Technical Prep Details                                              |  |
|  | [ Mention recruiter contacts, referral info, or interview notes...        ] |  |
|  |                                                                             |  |
|  | [ Cancel ]                                             [ Save Application ] |  |
|  +-----------------------------------------------------------------------------+  |
+-----------------------------------------------------------------------------------+
```

---

## 📊 6. Application Tracker Pipeline (`frontend/tracker.html`)

```text
+-----------------------------------------------------------------------------------+
| [Logo] DevTrack    Dashboard   Job Board   Saved Jobs   Tracker       (User Avatar) |
+-----------------------------------------------------------------------------------+
|                                                                                   |
|  Application Pipeline                                     [+ Add New Application] |
|                                                                                   |
|  +-------------------+  +-------------------+  +------------------+  +----------+ |
|  | Applied (3)       |  | Screening (2)     |  | Interview (1)    |  | Offer (1)| |
|  +-------------------+  +-------------------+  +------------------+  +----------+ |
|  | +---------------| |  | +---------------| |  | +--------------| |  | +------+ | |
|  | | Frontend Dev  | |  | | React Developer| |  | | UI Engineer  | |  | | QA Lead| | |
|  | | TechCorp      | |  | | Stripe        | |  | | Vercel       | |  | | GitHub | | |
|  | | Oct 22, 2026  | |  | | Oct 19, 2026  | |  | | Oct 14, 2026 | |  | | Oct 10 | | |
|  | +---------------| |  +-----------------+  +----------------+  +----------+ |
|  +-------------------+                                                            |
+-----------------------------------------------------------------------------------+
```