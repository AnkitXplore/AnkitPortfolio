
# Portfolio Website

## Overview

This is a modern portfolio website built with React, TypeScript, and Express.js. It's designed as a full-stack application showcasing a developer's work, skills, and experience. The project uses a monorepo structure with a React frontend and Express backend, featuring a clean design system built with shadcn/ui components and Tailwind CSS.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and better developer experience
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming, supporting both light and dark modes
- **UI Components**: shadcn/ui component library built on Radix UI primitives for accessibility and customization
- **State Management**: TanStack Query for server state management and React Context for theme state
- **Animations**: Framer Motion for smooth animations and transitions
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for type safety across the full stack
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **API Design**: RESTful API endpoints with Zod for request/response validation
- **Development**: Hot module replacement and error handling with custom middleware

### Data Storage Solutions
- **Database**: PostgreSQL configured via Drizzle ORM
- **Schema**: User management system with username/password authentication
- **Migrations**: Drizzle Kit for database schema management and migrations
- **Connection**: Neon Database serverless PostgreSQL for cloud deployment

### UI/UX Design System
- **Design Tokens**: CSS custom properties for consistent theming
- **Typography**: Multiple font families (Inter, DM Sans, Fira Code, Geist Mono) for different use cases
- **Color System**: Comprehensive color palette with semantic naming for both light and dark themes
- **Component Library**: Extensive set of reusable components including forms, navigation, cards, and interactive elements
- **Responsive Design**: Mobile-first approach with breakpoint-based responsive utilities

### Project Structure
- **Monorepo Layout**: Separate client, server, and shared directories for clear separation of concerns
- **Shared Types**: Common TypeScript interfaces and Zod schemas shared between frontend and backend
- **Path Aliases**: Configured import aliases for cleaner import statements and better developer experience

## External Dependencies

### Database & ORM
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **drizzle-orm**: Type-safe ORM for database operations
- **drizzle-zod**: Integration between Drizzle and Zod for schema validation

### UI Framework & Styling
- **@radix-ui/***: Comprehensive set of accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Utility for creating variant-based component APIs
- **framer-motion**: Animation library for React

### Forms & Validation
- **react-hook-form**: Performant forms library with minimal re-renders
- **@hookform/resolvers**: Validation resolvers for react-hook-form
- **zod**: TypeScript-first schema validation

### Development Tools
- **vite**: Fast build tool and development server
- **@replit/vite-plugin-***: Replit-specific development plugins for enhanced debugging and cartography
- **tsx**: TypeScript execution environment for Node.js

### Data Fetching
- **@tanstack/react-query**: Powerful data synchronization for React applications

### Session Management
- **connect-pg-simple**: PostgreSQL session store for Express sessions

### Utilities
- **date-fns**: Modern JavaScript date utility library
- **clsx**: Utility for constructing className strings conditionally
- **nanoid**: Tiny, secure, URL-friendly unique string ID generator