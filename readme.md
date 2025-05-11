# Casse Brique: Cockpit Astro Assault on a Underconstruction-Screen

## Table of Contents

* [Overview](#overview)
* [Features](#features)

  * [Casse Brique: Cockpit Astro Assault](#casse-brique-cockpit-astro-assault)
  * [Underconstruction-Screen](#underconstruction-screen)
* [Getting Started](#getting-started)

  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)

  * [Casse Brique: Cockpit Astro Assault](#usage-casse-brique-cockpit-astro-assault)
  * [Underconstruction-Screen](#usage-underconstruction-screen)
* [Customization](#customization)
* [Folder Structure](#folder-structure)
* [Contributing](#contributing)
* [License](#license)
* [Author](#author)

## Overview

This mono-repo combines two space-themed web components:

1. **Casse Brique: Cockpit Astro Assault** — a starfighter-inspired brick-breaker reimagined with cockpit HUD overlays.
2. **Underconstruction-Screen** — a customizable under-construction page with a countdown timer and space aesthetic.

## Features

### Casse Brique: Cockpit Astro Assault

* Semi-transparent cockpit frame, reticle targeting indicator, and instrument panels (lives, speed, cooldown, score).
* Asteroids replace classic bricks—procedurally generated grid with varied sizes.
* Confetti bursts and optional haptic feedback on destruction.
* Responsive canvas resizing and classic paddle-ball physics.
* Background music loop and power-up sound effects.

### Underconstruction-Screen

* Space-themed under-construction landing page.
* Countdown timer to custom launch or maintenance completion date.
* Themed animations (stars, planets, flicker effects).
* Easy integration: standalone HTML, CSS, and JavaScript.
* Responsive design for desktop and mobile.

## Getting Started

### Prerequisites

* Modern web browser (Chrome, Firefox, Safari, Edge).
* Internet connection for CDN assets (Tailwind CSS, Font Awesome, confetti library), or host dependencies locally.
* \[Optional] Node.js for running a local HTTP server.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/mono-space-project.git
   ```
2. Change into the project directory:

   ```bash
   cd mono-space-project
   ```
3. Ensure the following files are present:

   * `index.html` (Casse Brique game)
   * `underconstruction.html` (Underconstruction-Screen page)
   * `style.css` (Underconstruction-Screen styles)
   * `cockpit-overlay.png` (HUD overlay image)
4. (Optional) Start a local HTTP server:

   ```bash
   npx http-server .
   # or
   python3 -m http.server 8000
   ```
5. Open your browser and navigate to `http://localhost:8080` (or the chosen port).

## Usage

### Casse Brique: Cockpit Astro Assault

1. Open `index.html` in your browser.
2. Use **←** / **→** arrow keys (or touch/drag) to move the astro-paddle.
3. Destroy all asteroids to score points; missing the paddle costs a life.
4. Monitor the HUD panels for real-time updates:

   * **Lives**: Remaining balls before game reset.
   * **Speed**: Paddle movement velocity.
   * **Cooldown**: Reserved for future weapon systems.
   * **Score**: Points per asteroid.

### Underconstruction-Screen

1. Open `underconstruction.html` in your browser.
2. Click **Start Countdown** to begin the timer.
3. Customize the target date via the `data-target-date` attribute in the HTML.
4. Update the under-construction message and visuals in `style.css` or inline `<style>`.

## Customization

* **Cockpit Frame**: Swap `cockpit-overlay.png` path in the `.cockpit-frame { background: url('...') }` CSS rule.
* **Asteroid Grid Density**: Adjust `cols` and `rows` variables in the game script.
* **Ball & Paddle**: Modify `ball.dx`, `ball.dy`, `paddle.width`, and `paddle.height` for difficulty tuning.
* **Countdown Settings**: Change `data-target-date` and message text in `underconstruction.html`.
* **Styling**: Tweak Tailwind classes or CSS variables to match your theme.

## Folder Structure

```
/ (project root)
├─ index.html                # Casse Brique game entrypoint
├─ underconstruction.html    # Underconstruction-Screen page
├─ style.css                 # Styles for Underconstruction-Screen
├─ cockpit-overlay.png       # HUD overlay image
├─ game.js                   # (Optional) external game logic
├─ README.md                 # This merged README file
└─ LICENSE.md                # MIT License file
```

## Contributing

We welcome contributions to both projects:

1. Fork the repository.
2. Create a feature branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit:

   ```bash
   git commit -am "Add some feature"
   ```
4. Push to your branch:

   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a Pull Request.

Please refer to `CONTRIBUTING.md` for detailed guidelines.

## License

This project is licensed under the MIT License. See `LICENSE.md` for details.

## Author

Original concept and development by Kevin Marville.
