This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started
1.Clone Repository

- git clone https://github.com/youssefelaalem/dashboard-eyego.git
- cd dashboard-eyego

2.Inatall Dependencies & Run Project 

- npm install
- npm run dev


3.Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Implementation Approach

This project uses Next.js for server-side rendering and routing, combined with React, Formik for form handling, and Yup for schema validation. Here's a brief overview of the core implementation:

- Authentication Guard
A ClientAuthGuard checks for the existence of a token in localStorage. If absent, it redirects the user to the /login route.

- Login Page
Built using Formik for form state management and Yup for schema validation. On successful login, the JWT token is stored in localStorage.

- Dynamic Data Table
The Employees page displays a dynamic table with sorting, filtering, and pagination using a custom implementation combined with Material-UI components.

- Chart Integration
A chart component built using Recharts is displayed on the Home Dashboard to visualize sample analytics data.

- State Management with Redux Toolkit
Application-wide state (like user data, authentication state, and filters) is managed using Redux Toolkit, allowing for clean and maintainable logic.

- Responsive Design with Tailwind CSS
The layout is designed to be mobile-friendly and responsive using Tailwind CSS utility classes, ensuring optimal viewing across devices.

## LIVE DEPLOY
https://dashboard-eyego-9oxd.vercel.app/login