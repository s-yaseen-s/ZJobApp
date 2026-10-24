# DevTrack — Accessibility (a11y) & WCAG Guidelines

DevTrack is engineered with accessibility at its core, adhering to the **Web Content Accessibility Guidelines (WCAG) 2.1 Level AA** standards.

---

## ♿ 1. Semantic HTML & Structural Integrity

* **Landmark Elements:** Pages utilize proper HTML5 landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) to allow screen reader users to jump directly to primary regions.
* **Heading Hierarchy:** Each page maintains a single `<h1>` representing the main topic, followed by structured `<h2>` and `<h3>` tags without skipping heading levels.
* **Form Labels:** Every form control (`<input>`, `<select>`, `<textarea>`) is paired with a corresponding `<label>` tag using matching `for` and `id` attributes.

---

## ⌨️ 2. Keyboard Navigation & Focus Management

* **Focus Indicators:** Interactive elements feature explicit focus rings (`focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`) so keyboard users can easily identify active controls.
* **Tab Order:** The natural DOM hierarchy reflects the visual reading order, avoiding positive `tabindex` values.
* **Actionable Controls:** Buttons utilize `<button>` elements rather than clickable `<div>` or `<span>` elements to ensure native `Enter` and `Spacebar` key actuation.

---

## 🎨 3. Color Contrast Matrix

All text and essential visual UI controls meet or exceed WCAG 2.1 AA minimum contrast thresholds:

| Visual Element | Foreground Color | Background Color | Calculated Contrast | WCAG AA Status |
| :--- | :--- | :--- | :--- | :---: |
| Primary Body Text | Slate 900 (`#0F172A`) | Slate 50 (`#F8FAFC`) | **15.8 : 1** | **PASS (AAA)** |
| Secondary Text | Slate 600 (`#475569`) | White (`#FFFFFF`) | **7.1 : 1** | **PASS (AAA)** |
| Primary Action Button | White (`#FFFFFF`) | Indigo 600 (`#4F46E5`) | **4.6 : 1** | **PASS (AA)** |
| Status Badge (Applied) | Blue 800 (`#1E40AF`) | Blue 100 (`#DBEAFE`) | **7.3 : 1** | **PASS (AAA)** |
| Status Badge (Offer) | Green 800 (`#166534`) | Green 100 (`#DCFCE7`) | **7.5 : 1** | **PASS (AAA)** |

---

## 🔊 4. ARIA & Screen Reader Support

* **Icon Decoration:** All visual SVG icons include `aria-hidden="true"` when accompanied by visible text descriptions.
* **Icon-Only Buttons:** Standalone buttons (e.g., bookmark toggles, mobile menu buttons) explicitly define `aria-label` tags (e.g., `aria-label="Save Job"`).
* **Interactive States:** Dynamic toggles use `aria-expanded="true/false"` to communicate panel states to assistive technology.

---

## 📱 5. Responsive Zoom & Text Resizing

* **Zoom Support:** Pages remain fully functional and readable without horizontal scrolling when zoomed up to **200%**.
* **Relative Units:** Spacing, padding, and font sizes utilize relative units (`rem`, `em`, Tailwind percentages) rather than fixed pixel dimensions.