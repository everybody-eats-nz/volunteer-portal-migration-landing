# Volunteer Portal Migration Landing Page

A Next.js landing page providing information about the migration from the legacy volunteer application to the new Everybody Eats Volunteer Portal.

## Overview

This is a simple informational landing page built with Next.js 16, TypeScript, and Tailwind CSS. It communicates the transition from the legacy volunteer app to the new volunteer portal and provides users with key information about the migration.

## Tech Stack

- **Next.js 16.0.3** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework
- **React 19** - UI library

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/everybody-eats-nz/volunteer-portal-migration-landing.git
cd volunteer-portal-migration-landing
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

This project is designed to be deployed on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/everybody-eats-nz/volunteer-portal-migration-landing)

Or deploy manually:

```bash
npm run build
npm start
```

## Customization

To update the landing page content, edit the main page component at `app/page.tsx`.

Key sections you might want to customize:
- Migration timeline and dates
- Contact email address
- New portal URL
- Features and benefits list

## Project Structure

```
volunteer-portal-migration-landing/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main landing page
├── public/                  # Static assets
├── .gitignore
├── eslint.config.mjs        # ESLint configuration
├── next.config.ts           # Next.js configuration
├── package.json
├── postcss.config.mjs       # PostCSS configuration
├── README.md
├── tailwind.config.ts       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

## Related Projects

- [volunteer-portal](https://github.com/everybody-eats-nz/volunteer-portal) - The new volunteer portal application

## License

Copyright © 2025 Everybody Eats. All rights reserved.
