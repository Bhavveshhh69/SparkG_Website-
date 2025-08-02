# Personal Branding Platform (Klowt)

## Overview

This is a full-stack personal branding platform built with React, Express, and PostgreSQL. The application helps founders, freelancers, and professionals build their personal brands through resources, community membership, and corporate workshops. It features a modern marketing website with lead capture forms, content sections, and an admin dashboard for managing user interactions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for development/build tooling
- **Routing**: Wouter for client-side routing (lightweight React Router alternative)
- **Styling**: Tailwind CSS with custom design system using CSS variables for theming
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **State Management**: TanStack Query (React Query) for server state management
- **Forms**: React Hook Form with Zod validation for type-safe form handling

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API with JSON endpoints
- **Validation**: Zod schemas for request/response validation
- **Storage Interface**: Abstract storage interface with in-memory implementation (ready for database integration)

### Database Schema
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: Shared between client and server in `/shared/schema.ts`
- **Tables**: 
  - `newsletters`: Email signups with name/email
  - `workshop_requests`: Corporate workshop inquiries
  - `contact_forms`: General contact form submissions
- **Validation**: Drizzle-Zod integration for type-safe database operations

### Development Setup
- **Build System**: Vite for frontend, esbuild for backend production builds
- **Development Server**: Express with Vite middleware for HMR
- **TypeScript**: Strict configuration with path mapping for clean imports
- **Static Assets**: Served through Vite in development, Express in production

### Design System
- **Theme**: Dark theme with custom Klowt brand colors (pink primary, dark backgrounds)
- **Components**: Consistent component architecture using Radix primitives
- **Responsive**: Mobile-first design with Tailwind breakpoints
- **Animations**: CSS transitions and transforms for interactive elements

## External Dependencies

### Database
- **PostgreSQL**: Primary database (configured but using in-memory storage currently)
- **Neon Database**: Serverless PostgreSQL provider (based on connection string format)
- **Connection**: Environment variable `DATABASE_URL` for database connectivity

### UI Framework
- **Radix UI**: Comprehensive set of accessible React components
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Shadcn/ui**: Pre-built component library extending Radix with Tailwind

### Development Tools
- **Vite**: Frontend build tool and development server
- **Drizzle Kit**: Database migrations and schema management
- **TypeScript**: Type checking and development experience
- **React Query**: Server state management and caching

### Third-party Services
- **Replit Integration**: Development environment with runtime error overlay and cartographer
- **Form Handling**: Contact forms, newsletter signups, and workshop requests
- **Email Validation**: Built-in email validation through Zod schemas

### Build and Deployment
- **Production Build**: Vite builds frontend to `/dist/public`, esbuild bundles server
- **Static Serving**: Express serves built frontend assets in production
- **Environment**: NODE_ENV-based configuration for development/production modes