# Clinexa Digital Website

## Overview

This project is a full-stack web application for Clinexa Digital, a company that provides digital solutions for healthcare practices. The application serves as a marketing website showcasing their services, portfolio, and allowing potential clients to contact them.

The application uses a modern tech stack with React on the frontend, Express on the backend, and Drizzle ORM for database interactions, designed to be deployed on Replit.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

The frontend is built with React and uses modern patterns:

1. **UI Framework**: Uses shadcn/ui components, which are built on Radix UI primitives. These provide accessible, unstyled components that can be customized with Tailwind CSS.

2. **Styling**: Tailwind CSS is used for styling with custom theme variables defined in `client/src/index.css`.

3. **State Management**: Uses React's built-in state management with React Query for server state management.

4. **Routing**: Uses the lightweight Wouter library for client-side routing.

### Backend Architecture

1. **Server**: Express.js server that handles API requests and serves the static frontend files.

2. **API Design**: RESTful API endpoints with JSON responses.

3. **Storage**: Uses Drizzle ORM with a planned PostgreSQL database (currently using in-memory storage for development).

### Data Flow

1. Frontend components make API requests to the backend using React Query.
2. Express routes handle these requests and interact with the database through Drizzle ORM.
3. The server responds with JSON data.
4. React components render the data with appropriate UI components.

## Key Components

### Frontend Components

1. **Layout Components**:
   - Header: Site navigation
   - Footer: Contact information and additional links

2. **Page Components**:
   - Home: Landing page with sections for services, portfolio, testimonials, etc.
   - Contact: Form for users to submit inquiries

3. **Section Components**:
   - Hero: Main banner section
   - Services: Showcases the company's service offerings
   - Portfolio: Displays past client projects
   - Testimonials: Client feedback
   - About: Company information
   - CTA (Call to Action): Prompts for user engagement

4. **UI Components**:
   - Button, Form, Input, etc. - Standardized UI components from shadcn/ui

### Backend Components

1. **Server**: Main Express server setup in `server/index.ts`
2. **Routes**: API endpoints defined in `server/routes.ts`
3. **Storage**: Data access layer in `server/storage.ts`
4. **Schema**: Database schema definitions in `shared/schema.ts`

## External Dependencies

### Frontend

1. **UI Libraries**:
   - Radix UI components for accessible UI primitives
   - shadcn/ui for styled components
   - Tailwind CSS for styling

2. **State Management**:
   - @tanstack/react-query for server state management

3. **Forms**:
   - react-hook-form for form handling
   - zod for form validation

### Backend

1. **Database**:
   - drizzle-orm for database ORM
   - Prepared to use PostgreSQL (via Replit's PostgreSQL module)

2. **API**:
   - express for the HTTP server and API routes

## Deployment Strategy

The application is configured to run on Replit with the following setup:

1. **Development**: `npm run dev` starts both the frontend and backend in development mode with hot reloading.

2. **Production Build**: `npm run build` uses Vite to build the frontend and esbuild to build the backend.

3. **Production Start**: `npm run start` runs the production-built application.

4. **Database**: The application is designed to use PostgreSQL for production, which is available as a Replit module.

## Database Schema

The database schema is defined in `shared/schema.ts` and currently includes:

1. `users` table:
   - id (primary key)
   - username (unique)
   - password

Additional tables may need to be created for:
- Contact form submissions
- Portfolio items
- Testimonials
- Services

## Future Development Considerations

1. **Authentication**: Implement proper authentication for an admin portal to manage content.

2. **CMS Functionality**: Add ability to update portfolio items, services, and testimonials.

3. **Email Integration**: Connect contact form to email service for notifications.

4. **Analytics**: Add website analytics to track user engagement.

5. **HIPAA Compliance**: Ensure data handling meets healthcare regulations as mentioned in the content.