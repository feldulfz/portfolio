# Personal Portfolio Website

![Angular](https://img.shields.io/badge/Angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Contentful](https://img.shields.io/badge/Contentful-2478CC?style=for-the-badge&logo=contentful&logoColor=white)
![OpenRouter](https://img.shields.io/badge/OpenRouter_AI-000000?style=for-the-badge)
![Vercel](https://img.shields.io/badge/Vercel-000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![RxJS](https://img.shields.io/badge/RxJS-B7178C.svg?style=for-the-badge&logo=reactivex&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)

This is a personal portfolio website built with Angular, Tailwind CSS, and Contentful. It dynamically showcases my profile, projects, tech stack, and work experience. A key feature is an integrated AI chatbot that can answer questions about the content presented on the portfolio.


## Architecture Overview

### **Port & Adapter Pattern **  
This project uses ports (interfaces) and adapters (concrete implementations) to separate the core logic from external services.

- **Ports**: Define abstract data access and content retrieval rules  
- **Adapters**: Implement content fetching using Contentful API  
- **Benefits**:  
  - Easy to swap CMS or API providers  
  - Better separation of concerns  
  - Clean dependency boundaries  

### **Smart & Dumb Components Architecture**

- **Smart (Container) Components**  
  - Handle data fetching  
  - Manage state and API calls  
  - Communicate with services  

- **Dumb (Presentation) Components**  
  - Receive data via input signal
  - Emit events via output signal
  - Focus only on displaying UI  

## Key Features

-   **Dynamic Content Management**: All portfolio data (about me, projects, tech stack, certificates) is fetched from the Contentful headless CMS, allowing for easy updates without code changes.
-   **AI-Powered Chatbot**: An interactive chatbot, powered by the OpenRouter API, provides visitors with a conversational way to learn about my skills and experience based on the portfolio's content.
-   **Responsive Design**: Utilizes Tailwind CSS for a modern, mobile-first design that looks great on all devices.
-   **Dark/Light Mode**: A user-toggleable dark mode for comfortable viewing in different lighting conditions.
-   **Structured & Scalable**: Built on Angular's robust component-based architecture, featuring a clean separation of concerns with components, containers, and services.

## Tech Stack

-   **Frontend**: Angular, TypeScript, Tailwind CSS, RxJS
-   **State Management**: Angular Signals
-   **Content**: Contentful Headless CMS
-   **AI Chatbot**: OpenRouter API
-   **Deployment**: Vercel (with Serverless Functions for API proxying)
-   **Testing**: Karma, Jasmine

## Backend Services

### Contentful CMS

This project uses Contentful to manage all its text and image content. The `ContentfulServiceAdapter` class handles the communication with the Contentful API to fetch data for the 'About', 'Projects', and 'Tech Stack' sections.

The API keys are configured in `src/enviroment/enviroment.ts`.

### Chatbot API Proxy

To securely use the OpenRouter API key, a proxy is implemented.

-   **For Production (Vercel)**: A serverless function located at `api/chat.js` forwards requests from the frontend to the OpenRouter API, injecting the API key stored as a Vercel environment variable (`MODEL_API_KEY`).
-   **For Local Development**: A simple Node.js proxy server is available in the `api-proxy/` directory. It reads the API key from a local `.env` file.

## Getting Started

### Prerequisites

-   Node.js (v18 or later)
-   npm

### Installation

1.  Clone the repository:
    ```sh
    git clone https://github.com/feldulfz/portfolio.git
    cd portfolio
    ```

2.  Install the frontend dependencies:
    ```sh
    npm install
    ```

3.  Install the local proxy server dependencies:
    ```sh
    cd api-proxy
    npm install
    cd ..
    ```

### Environment Variables

The chatbot requires an API key from [OpenRouter](https://openrouter.ai/).

1.  Navigate to the `api-proxy` directory.
2.  Create a file named `.env`.
3.  Add your OpenRouter API key to the file:
    ```
    MODEL_API_KEY=your_openrouter_api_key
    ```

### Running the Application Locally

1.  **Start the local API proxy server:**

    Open a terminal, navigate to the `api-proxy` directory, and run:
    ```sh
    npm start
    ```
    This will start the proxy on `http://localhost:3000`.

2.  **Start the Angular development server:**

    Open a second terminal in the root directory and run:
    ```sh
    npm start
    ```
    The application will be available at `http://localhost:4200`.

## Available Scripts

-   `npm start`: Runs the Angular development server.
-   `npm run build`: Builds the application for production.
-   `npm test`: Executes the unit tests via Karma.
-   `npm run watch`: Builds the application in watch mode.

## Deployment

The application is configured for easy deployment to Vercel. The `vercel.json` file contains rewrite rules to handle both the Angular single-page application routing and the API proxy for the chatbot. On push to the main branch, Vercel will automatically build and deploy the application. Ensure the `MODEL_API_KEY` is set as an environment variable in your Vercel project settings.
