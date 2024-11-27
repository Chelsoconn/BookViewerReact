**React Frontend for Book Chapters(())**
This is a simple React frontend application designed to interface with a pre-built Express API backend. It allows users to view a list of book chapters and their contents.

**Features**
Table of Contents: Displays a list of chapters fetched from the backend.
Chapter Content View: Users can click on a chapter to view its content.
Dynamic Path Updates: The application updates the browser's URL to reflect the selected chapter

**Prerequisites**
Backend: A ready-made Express API backend must be running and accessible. The backend should expose the following endpoints:

```
GET /chapters: Returns a list of chapters and the book name.
GET /chapters/:chapter: Returns the content of a specific chapter.
Node.js and npm/yarn: Ensure you have Node.js installed on your system.
```

**Setup**
Clone the Repository:
```
git clone <repository-url>
cd <repository-directory>
```

**Install Dependencies:**
```
npm install
 *or*
yarn install
```

**Set API Base URL: Update the API base URL in src/services/requests.ts to point to the backend:**

const API_BASE_URL = "http://localhost:5000"; // Update with your backend URL


**Start the Development Server:**

```
npm start
 *or*
yarn start
```

The app will be available at http://localhost:3000.

**Usage**
Open the app in your browser.
The Table of Contents is displayed on the sidebar.
Click on a chapter to view its content. The chapter's path will update in the browser URL.

**API Integration**
The frontend interacts with the backend API using the following functions defined in src/services/requests.ts:

```
getAllChapters(): Fetches the list of chapters and the book name.
getChapter(chapter: string): Fetches the content for a specific chapter.
Tech Stack
Frontend: React, TypeScript
Styling: PureCSS
Routing: React Router (if applicable)
```