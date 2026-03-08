# 🖥️ Terminal-Inspired Portfolio

Welcome to my digital workspace. This is a high-performance, terminal-inspired portfolio built with **Angular 17**, designed to provide a nostalgic yet modern (CRT/CLI) experience.

## 🚀 The Vision

I wanted to create something more than just a standard static site. This portfolio is an immersive experience, blending old-school terminal aesthetics with modern web architecture. It’s a reflection of my love for low-level systems and clean, efficient code.

## 🛠️ Technical Stack

- **Framework**: Angular 17+ (Signals, Standalone Components)
- **Styling**: SCSS (Modular Architecture)
- **Animation**: CSS Keyframes & SVG-based custom cursors
- **Visuals**: CRT Scanline Overlays, Matrix-style backgrounds

## 🏗️ Architecture Highlights

### 🎨 SCSS Architectur (7-1 Pattern Inspired)

One of the core technical focuses of this project was moving away from monolithic CSS to a highly structured SCSS architecture. I implemented a modular system to ensure scalability and maintainability:

- **Abstracts**: Pure logic, variables, and mixins. No rendered CSS.
- **Base**: Project-wide defaults, typography, and resets.
- **Animations**: Dedicated layer for complex CRT flickers, glitches, and terminal-style fades.
- **Layout**: Grid systems and high-level containers.
- **Components**: Modular styles for discrete UI elements like the Hero section, Terminal inputs, and Project cards.
- **Utilities**: Helper classes for glowing text, CRT overlays, and custom scrollbars.
- **Responsive**: Centralized media queries to maintain the terminal "grid" feel across all devices.

### 🌐 Frontend Design Philosophy

- **Immersive CRT Aesthetic**: Using CSS gradients and linear-gradient overlays to simulate scanlines and phosphorous glows.
- **Terminal UX**: Custom SVG cursors and interactive terminal-style inputs that respond to focus with secondary glows.
- **Performance First**: Minimal external dependencies, leveraging native CSS animations and Angular's optimized rendering.
- **Modular Components**: Every piece of the UI (Matrix background, Scanline overlay, Terminal Hero) is a standalone Angular component, making the codebase clean and easy to navigate.

## 🚦 Getting Started

### Prerequisites

- Node.js (Latest LTS)
- Angular CLI

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   ng serve
   ```
4. Open your browser to `http://localhost:4200`
