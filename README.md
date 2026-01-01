# LaunchPad: Play Store Deployment Assistant

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/monsieurgorgui-cell/launchpad-play-store-deployment-assistant)

A comprehensive, interactive web application designed to guide developers through the complex process of deploying mobile applications to the Google Play Store. LaunchPad serves as a digital assistant that breaks down the daunting deployment process into manageable, trackable steps.

## 🚀 Overview

Deploying to the Google Play Store involves navigating strict policies, specific asset requirements, and complex release tracks. LaunchPad simplifies this journey by providing a "Mission Control" dashboard that visualizes the deployment lifecycle across four key stages: Account Setup, Store Listing, Release Management, and Review.

The application features an interactive checklist system powered by local persistence, allowing users to track their progress over time without needing a backend account.

## ✨ Key Features

- **Mission Control Dashboard**: A visual overview of the launch progress with circular progress indicators and phase tracking.
- **Interactive Checklists**: Detailed, step-by-step guides for every stage of deployment, from creating a developer account to the final production rollout.
- **Asset Studio Guide**: A reference section specifying exact dimensions, safe zones, and requirements for all Play Store graphical assets (icons, screenshots, feature graphics).
- **Policy Checker**: A curated list of common rejection reasons and actionable advice on how to avoid them.
- **Local Progress Tracking**: Your progress is saved automatically to your browser's local storage, ensuring you can pick up exactly where you left off.

## 🛠️ Technology Stack

This project is built with a modern, high-performance frontend stack:

- **Framework**: React 18 with Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3
- **UI Components**: Shadcn UI (Radix Primitives)
- **State Management**: Zustand
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Runtime/Deployment**: Cloudflare Workers

## ⚡ Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (v1.0.0 or higher)
- Node.js (v18 or higher recommended for compatibility)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/play-store-launch-assistant.git
   cd play-store-launch-assistant
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

### Development

Start the development server:

```bash
bun run dev
```

The application will be available at `http://localhost:3000`.

### Building for Production

Create a production build:

```bash
bun run build
```

## 📂 Project Structure

```
src/
├── components/         # UI components and layout wrappers
│   ├── layout/         # Structural components (AppLayout)
│   └── ui/             # Shadcn UI primitives
├── hooks/              # Custom React hooks (use-theme, use-mobile)
├── lib/                # Utilities and helper functions
├── pages/              # Application views (Dashboard, Phases, Assets)
├── store/              # Zustand state stores
└── worker/             # Cloudflare Worker backend logic
```

## 🚀 Deployment

This project is configured for seamless deployment to Cloudflare Workers.

### One-Click Deployment

You can deploy this project immediately using the button below:

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/monsieurgorgui-cell/launchpad-play-store-deployment-assistant)

### Manual Deployment

1. Authenticate with Cloudflare:
   ```bash
   npx wrangler login
   ```

2. Deploy the application:
   ```bash
   bun run deploy
   ```

## 📝 License

This project is open source and available under the MIT License.