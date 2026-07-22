# Dedalit - Red Thread Travel Planner (RedWire)

A mobile and web application built with Expo (React Native) and Supabase that allows users to plan travel itineraries by tracing a continuous red thread across the globe between their stops.

---

## Project Overview

Guided by the Dedalit team, this app transforms travel planning into a seamless, visual experience:
* Global Connection: Link your destinations using a dynamic red thread on an interactive map.
* Stop Management: Add, reorder, and customize every stop along your journey.
* Cloud Database: Real-time data sync with Supabase for trips and user data.
* Cross-Platform: Runs smoothly on Android, iOS, and Web.

---

## Tech Stack

* Framework: Expo (React Native & Expo Router)
* Language: TypeScript / JavaScript
* Backend & Database: Supabase (PostgreSQL)
* Maps & Geocoding: OpenStreetMap & Nominatim API
* State & Local Storage: React Native Async Storage
* Design & Prototyping: Figma

---

## Prerequisites

Before getting started, make sure you have installed:
* Node.js (LTS version recommended)
* Git
* Expo Go app on your smartphone (available on iOS App Store and Google Play Store)

---

## Getting Started

### 1. Clone the repository
```bash
git clone [https://github.com/Dedalit/RedWire.git](https://github.com/Dedalit/RedWire.git)
cd RedWire

```

### 2. Install dependencies

```bash
npm install

```

### 3. Environment Variables Setup

Create a `.env` file in the root folder based on `.env.example` and add your Supabase credentials:

```env
EXPO_PUBLIC_SUPABASE_URL=[https://your-project.supabase.co](https://your-project.supabase.co)
EXPO_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

```

### 4. Start the Expo development server

```bash
npx expo start -c

```

#### How to run:

* On Smartphone (Local/Hotspot): Scan the QR Code displayed in the terminal using Expo Go (Android) or the Camera app (iOS).
* On Smartphone (Tunnel / Remote): Run `npx expo start --tunnel` to share the preview with remote team members.
* On Web: Press `w` in the terminal to open the app in your browser.
* On Emulator: Press `a` for Android or `i` for iOS (if configured).

---

## Useful Commands & Git Workflow

* `npx expo start -c` - Starts the Metro Bundler clearing cache.
* `npx expo start --tunnel` - Starts Expo using a public tunnel for remote testing.
* `npx expo lint` - Checks code style and formatting quality.
* `git pull origin main --rebase` - Pulls latest changes smoothly before pushing.

---

Developed by Dedalit.

```

```
