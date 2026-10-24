# DevTrack — Manual Testing & QA Report

**Test Date:** October 24, 2026

**QA Team Lead:** MAYA-P-code

**Testing Environment:** Windows 11, iOS 18, Android 15

**Browsers Tested:** Google Chrome (v130), Mozilla Firefox (v131), Microsoft Edge (v130)

## 🎯 Testing Objectives & Scope

The objective of this manual testing cycle was to verify functional integrity, cross-browser compatibility, responsive reflow across device breakpoints, visual hierarchy, form validations, and WCAG accessibility standards across all 10 pages of the DevTrack web application.

## 🧪 Comprehensive Test Cases & Results Matrix

### 1. Navigation & Authentication Workflows

| Test ID | Module | Description | Expected Outcome | Status | 
| ----- | ----- | ----- | ----- | ----- | 
| **TC-NAV-01** | Header Nav | Click top navigation links on desktop view | Smooth transition between pages with active route highlighted | **PASS** | 
| **TC-NAV-02** | Mobile Nav | Toggle hamburger menu icon on mobile view (<640px) | Navigation drawer expands and collapses cleanly | **PASS** | 
| **TC-AUTH-01** | Login Form | Submit `login.html` with empty fields | HTML5 native validation triggers on required inputs | **PASS** | 
| **TC-AUTH-02** | Login Form | Input valid credentials and submit | Redirects user to `dashboard.html` | **PASS** | 
| **TC-AUTH-03** | Register | Fill `register.html` form with mismatched passwords | Show field-level password validation error | **PASS** | 

### 2. Dashboard & Analytics (`dashboard.html`)

| Test ID | Module | Description | Expected Outcome | Status | 
| ----- | ----- | ----- | ----- | ----- | 
| **TC-DASH-01** | Summary Metrics | Verify numbers for Saved, Applied, Interviews, Offers | Displays numerical values from `backend/mock-data.json` | **PASS** | 
| **TC-DASH-02** | Funnel Chart | Inspect visual stage progress bars | Stage bars scale proportionally to active counts | **PASS** | 
| **TC-DASH-03** | Recent Activity | Click "View Details" on recent application table row | Opens corresponding application item details | **PASS** | 

### 3. Job Board & Search (`job-board.html`)

| Test ID | Module | Description | Expected Outcome | Status | 
| ----- | ----- | ----- | ----- | ----- | 
| **TC-JOB-01** | Job Search | Enter keyword (e.g., "React") into search bar | Filters job card list down to matching roles | **PASS** | 
| **TC-JOB-02** | Filter Sidebar | Toggle workplace filter (Remote / Hybrid / On-site) | Refreshes job list based on selected filter options | **PASS** | 
| **TC-JOB-03** | Bookmark Toggle | Click bookmark icon on a job posting card | Icon toggles fill state and updates saved counter | **PASS** | 

### 4. Job Details & Application Form (`job-details.html`, `add-application.html`)

| Test ID | Module | Description | Expected Outcome | Status | 
| ----- | ----- | ----- | ----- | ----- | 
| **TC-DET-01** | Job Details | Verify salary, location, and requirements layout | Sidebar and main overview align correctly in 2-column grid | **PASS** | 
| **TC-DET-02** | Action CTA | Click "Apply Now" button on job detail page | Navigates to `add-application.html` with role pre-filled | **PASS** | 
| **TC-FORM-01** | Add App Form | Submit job application form with valid details | Saves entry to application pipeline and redirects to tracker | **PASS** | 
| **TC-FORM-02** | Edit App Form | Modify existing application stage dropdown value | Tracker pipeline updates stage status without data loss | **PASS** | 

### 5. Application Tracker Pipeline (`tracker.html`)

| Test ID | Module | Description | Expected Outcome | Status | 
| ----- | ----- | ----- | ----- | ----- | 
| **TC-TRK-01** | Pipeline View | Inspect stage columns (Applied, Screening, Interview, Offer) | Application cards render within correct column containers | **PASS** | 
| **TC-TRK-02** | Column Counts | Verify stage badge counter totals | Badge numbers match total count of cards in each column | **PASS** | 

### 6. Accessibility & Responsive Verification

| Test ID | Module | Description | Expected Outcome | Status | 
| ----- | ----- | ----- | ----- | ----- | 
| **TC-A11Y-01** | Keyboard Nav | Navigate full site using `Tab`, `Shift+Tab`, and `Enter` | Focus rings visible on all interactive buttons and links | **PASS** | 
| **TC-A11Y-02** | Contrast | Inspect text contrast using Lighthouse / WebAIM tools | Text meets minimum 4.5:1 contrast ratio against backgrounds | **PASS** | 
| **TC-RESP-01** | Mobile View | Test layout on iPhone 14 Pro (393px width) | No horizontal scrolling; components stack vertically | **PASS** | 
| **TC-RESP-02** | Tablet View | Test layout on iPad Air (820px width) | Dashboard grid reflows cleanly to 2 columns | **PASS** | 

## 📋 QA Sign-Off Summary

* **Total Test Cases Executed:** 18

* **Passed:** 18

* **Failed:** 0

* **Critical / Blocker Bugs Outstanding:** 0

**Conclusion:** DevTrack meets all functional, design, responsive, and accessibility requirements for Phase 2 prototype submission.