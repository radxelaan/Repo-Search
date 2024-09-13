# GitHub Repository Search App

This is a simple and responsive React application that allows users to search for GitHub repositories by entering a GitHub username. The user can filter the repositories by name and programming language. The app fetches the list of repositories from GitHub using the official GitHub REST API.

The application is built using React and TypeScript, ensuring type safety and a smooth development experience. The user interface incorporates responsive design principles and follows good UX guidelines for an intuitive search and filtering experience.

The application is currently online at [repo-search.click](repo-search.click)

## Features

- **Search GitHub Repositories**: Enter a GitHub username to search for that user's public repositories.
- **Filter by Language**: Filter repositories based on programming language.
- **Search by Repository Name**: Filter repositories by name as you type.

## Installation and Running Locally

Follow these steps to clone the repository and run the project locally:

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Steps to Run

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/radxelaan/Repo-Search.git
   cd repo-search
   ```

2. **Install Dependencies**

    Using npm:

    ```bash
    npm install
    ```

    Oe using yarn:

    ```bash
    yarn install
    ```

3. **Run the Application**
        Using npm:

    ```bash
    npm start 
    ```

    Oe using yarn:

    ```bash
    yarn start
    ```

This will start the development server, and you can view the application by visiting `http://localhost:3000` in your browser.

## Future Improvements

While the project covers the core functionalities, here are some ideas for future improvements:

- **Include User Information**: Show information about the searched used alongside the repositories.
- **GraphQL API**: Migrate from the REST API to GitHub's GraphQL API to improve query efficiency and flexibility.
- **Add Pagination**: Implement pagination for users with a large number of repositories to enhance performance and usability.


