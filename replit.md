# TechCorp Solutions - Modern Company Website

## Overview

TechCorp Solutions is a comprehensive, production-ready company website built with modern web technologies. The application showcases engineering solutions, AI-powered technologies, and strategic partnerships across multiple industrial sectors including marine operations, oil & gas, aerospace, and renewables.

## System Architecture

### Frontend Architecture
- **React 18** with TypeScript for type safety and modern development
- **Wouter** for client-side routing (lightweight React Router alternative)
- **Tailwind CSS** for utility-first styling with custom design system
- **Radix UI** components for accessible, unstyled UI primitives
- **Vite** as the build tool and development server
- **React Hook Form** with Zod validation for form handling
- **TanStack Query** for server state management and API calls

### Backend Architecture
- **Express.js** server with TypeScript
- **RESTful API** endpoints for contact forms and newsletter subscriptions
- **Middleware** for request logging and error handling
- **Memory storage** with interface for future database integration
- **Zod schemas** for data validation and type safety

### Component Structure
- **Modular design** with reusable components (Cards, Forms, Navigation, etc.)
- **Prop-driven components** ready for future CMS integration
- **Responsive design** with mobile-first approach
- **Accessibility compliance** with WCAG standards

## Key Components

### Data Layer
- **Drizzle ORM** configured for PostgreSQL with migrations
- **Shared schemas** between client and server using Zod
- **Database tables**: users, contacts, newsletters
- **Type-safe database operations** with TypeScript integration

### API Endpoints
- `POST /api/contact` - Contact form submissions
- `POST /api/newsletter` - Newsletter subscriptions
- `GET /api/contacts` - Retrieve contact submissions (admin)

### UI Components
- **Navbar** with responsive navigation and active state management
- **Hero Section** with call-to-action and gradient backgrounds
- **Contact Form** with validation and toast notifications
- **Project Cards** for showcasing case studies and work
- **Team Cards** for displaying team member information
- **Timeline** component for company milestones
- **FAQ** component with search functionality

### Pages Structure
- **Home** - Hero section, innovation showcase, featured projects
- **About** - Company overview, team, milestones, values
- **What We Do** - Services and sectors overview
- **Innovation** - Technology showcase and R&D initiatives
- **Projects** - Portfolio of completed work and case studies
- **Knowledge Hub** - Blog posts, resources, and downloads
- **Media** - News, events, and press releases
- **Contact** - Contact form and company information

## Data Flow

1. **Client-side routing** managed by Wouter for navigation
2. **Form submissions** validated with Zod schemas before API calls
3. **Server-side validation** ensures data integrity
4. **Response handling** with TanStack Query for caching and error states
5. **Toast notifications** provide user feedback for actions
6. **Memory storage** currently handles data persistence (ready for database upgrade)

## External Dependencies

### Core Framework Dependencies
- React 18 ecosystem (react, react-dom, react-hook-form)
- Express.js server framework
- Tailwind CSS for styling
- Radix UI component library
- Vite for build tooling

### Database and Validation
- Drizzle ORM with PostgreSQL adapter
- Zod for schema validation
- @neondatabase/serverless for database connectivity

### Development Tools
- TypeScript for type safety
- ESBuild for server bundling
- PostCSS for CSS processing
- Replit-specific development plugins

## Deployment Strategy

### Build Process
- **Client build**: Vite bundles React app to `dist/public`
- **Server build**: ESBuild bundles Express server to `dist/index.js`
- **Static assets**: Served from build directory in production

### Environment Configuration
- **Development**: `NODE_ENV=development` with hot reloading
- **Production**: `NODE_ENV=production` with optimized builds
- **Database**: Configured via `DATABASE_URL` environment variable

### Hosting Requirements
- Node.js runtime environment
- PostgreSQL database (configured for Neon serverless)
- Static file serving capability
- Environment variable support

## Changelog

```
Changelog:
- July 06, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```