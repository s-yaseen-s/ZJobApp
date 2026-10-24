# DevTrack — UI/UX Design Rationale

This document outlines the design decisions, layout strategy, color system, and user experience (UX) principles applied across the DevTrack application.

---

## 🎨 1. Color Palette & Visual Identity

The visual theme for DevTrack is designed specifically for software developers and tech job seekers. It balances a crisp, modern aesthetic with a high-contrast dark/light mode friendly color scheme.

The navigation theme switch uses the operating system preference by default and remembers a visitor's selection across pages.

* **Primary Accent (`indigo-600` / `#4F46E5`):** Represents focus, technology, and professionalism. Used for primary CTA buttons, active navigation indicators, and key metrics.
* **Backgrounds (`slate-50` / `#F8FAFC` & `slate-900` / `#0F172A`):** Light slate background provides a clean canvas that minimizes eye fatigue during extended job search sessions.
* **Card Backings (`white` / `#FFFFFF`):** Container surfaces are elevated using subtle drop shadows (`shadow-sm` and `shadow-md`) to clearly segregate data modules.
* **Status Indicators:**
  * **Applied (`blue-500`):** Neutral informational stage.
  * **Screening / Review (`yellow-500`):** Pending/in-progress review stage.
  * **Interview (`purple-600`):** High-priority active stage.
  * **Offer (`green-600`):** Positive outcome stage.
  * **Rejected (`red-500`):** Archived / closed state.

---

## 🔤 2. Typography & Hierarchy

DevTrack uses system sans-serif typography (`Inter` / system-ui default stack) for crisp, pixel-perfect rendering across operating systems.

* **Page Titles (`h1`):** `text-2xl` to `text-3xl`, `font-bold`, `text-slate-900` for clear visual landing points.
* **Section Headers (`h2` / `h3`):** `text-lg` to `text-xl`, `font-semibold` for modular section grouping.
* **Body Text (`p` / `span`):** `text-sm` to `text-base`, `text-slate-600` for comfortable readability.
* **Badges & Metadata:** `text-xs`, `font-medium`, `uppercase` or `capitalized` for efficient scanning.

---

## 📐 3. Layout & Architecture Patterns

### Dashboard & Analytics (`dashboard.html`)
* **Metric Cards Grid:** Top metric cards display counts at a glance (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`).
* **Visual Pipeline Charts:** Clear visual progress bars representing stages in the funnel (Applied -> Screening -> Interview -> Offer).

### List & Cards Architecture (`job-board.html` & `saved-jobs.html`)
* **Filter Sidebar / Header Bar:** Sticky filter bar allows users to filter by job type, experience, and location without losing scroll context.
* **Interactive Cards:** Hover states (`hover:border-indigo-500 hover:shadow-md transition-all`) indicate clickability.

### Detail & Form Views (`job-details.html` & `add-application.html`)
* **Two-Column Layout on Desktop:** Left primary column for detailed descriptions/form fields, right column for metadata sidebars, salary range, and quick action buttons.

---

## 📱 4. Responsive Strategy

DevTrack applies a mobile-first responsive design strategy using Tailwind CSS breakpoints:
* **Mobile (`<640px`):** Single-column stacked layouts, collapsed mobile navigation menus, full-width buttons.
* **Tablet (`640px - 1024px`):** 2-column grid adaptation, side-by-side metric cards.
* **Desktop (`>1024px`):** Full multi-column dashboard, sticky navigation headers, and expanded sidebars.