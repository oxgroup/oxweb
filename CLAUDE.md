# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

- **Development server**: `npm run dev` - Starts Next.js development server
- **Build production**: `npm run build` - Creates production build
- **Start production**: `npm start` - Runs production server
- **Linting**: `npm run lint` - Runs Next.js ESLint

Note: This project uses both npm and pnpm (pnpm-lock.yaml present). TypeScript and ESLint errors are currently ignored during builds via next.config.mjs.

## Project Architecture

This is a Next.js 14 restaurant website for OX SteakHouse with two main brand sections: "The OX Room" and "OX SteakFish". The application uses the App Router with nested layouts.

### Key Architecture Patterns

**Multi-Brand Structure**:
- Root page (`/`) serves as a brand selector with interactive model sections
- `/theoxroom/*` - The OX Room brand pages with separate layout
- `/oxsteakfish/*` - OX SteakFish brand pages with separate layout
- `/menu-do-chef` - Shared chef menu section

**Component Architecture**:
- **Model System**: Complex model-based navigation using React Context (`ModelsContext`)
  - `ModelsWrapper` - Context provider managing model registration
  - `ModelSection` - Individual brand/model sections
  - `ModelOverlay` - Overlay system for model interactions
  - Uses styled-components alongside Tailwind CSS
- **UI Components**: Comprehensive Radix UI + shadcn/ui component library in `/components/ui/`
- **Animation Components**: Custom Framer Motion wrappers (`animated-*` components)
- **Restaurant Features**: Specialized components for reservations, carousels, wine experiences

### Technology Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS + styled-components hybrid approach
- **UI Library**: Radix UI primitives with shadcn/ui components
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **TypeScript**: Strict mode enabled with path aliases (`@/*`)

### File Organization

```
app/                    # Next.js App Router pages
├── theoxroom/         # The OX Room brand pages + layout
├── oxsteakfish/       # OX SteakFish brand pages + layout
└── menu-do-chef/      # Shared chef menu
components/            # Reusable components
├── Model/            # Model system (brand selector)
├── ui/               # shadcn/ui components
├── reservation/      # Booking system components
└── [feature-components] # Restaurant-specific features
hooks/                # Custom React hooks
lib/                  # Utilities (mainly utils.ts for cn function)
public/images/        # Image assets
services/             # Data services (mock-data.ts)
```

### Layout Patterns

- Root layout provides ThemeProvider for light/dark themes
- Brand-specific layouts (theoxroom, oxsteakfish) override root layout completely
- Each brand has its own styling (styles.css) and metadata

### Content Strategy

The project includes detailed content strategy documentation in `content-strategy.md` covering video specifications, technical requirements, and content narrative flow for the restaurant carousel experience.

### Development Notes

- Images are unoptimized in Next.js config (likely for static export)
- Mixed styling approach: Tailwind for utilities, styled-components for complex model system
- Custom gold color defined in Tailwind config (#D4AF37)
- TypeScript path aliases configured for clean imports