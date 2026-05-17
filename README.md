```markdown
# Technical Documentation: `blackmatrixblack.github.io`

## Overview

`blackmatrixblack.github.io` is a personal website hosted on GitHub Pages. It transforms the browser into an interactive playground, showcasing the developer’s exploration of algorithms, front‑end engineering, and cyberpunk aesthetics. It also serves as an entry point to other open‑source projects maintained by the same author, most notably the popular network rule aggregation tool `ios_rule_script`.

## Technology Stack

The site is built entirely with vanilla front‑end technologies – no frameworks, no build steps.

| Layer      | Technology        | Details                                                    |
|:-----------|:------------------|:-----------------------------------------------------------|
| Structure  | HTML5             | Semantic markup, single‑page application layout            |
| Styling    | CSS3              | Dark theme, responsive design, custom animations          |
| Logic      | JavaScript (ES6+) | All computation, event handling, and state management      |
| Storage    | Web Storage API   | `localStorage` for persistent data (e.g. high scores)      |
| Deployment | GitHub Pages      | Auto‑deployed from a Git repository on push                |

## Core Architecture

The page is a collection of interactive tools – a “Clicker Arcade” with 32 distinct modules – each bound to a specific mathematical or algorithmic concept. The architecture follows a simple event‑driven loop:

```

User Input (Click/Tap)
|
v
[ Event Dispatcher ]
|
v
[ Calculation Engine ]  <—— pure JavaScript functions
|
v
[ State Update ]  ——> [ DOM Manipulation (display) ]
|
v
[ Animation Loop ]  ——> [ Visual Feedback (glow, scroll, count‑up) ]
|
v
[ Scroll to Next Module ]

```

No virtual DOM or framework is used; all rendering happens through direct, targeted updates to the DOM tree.

## Feature Modules (Representative Selection)

The following table summarises some of the available tools, grouped by category.

| Category                  | Module Example                   | Behaviour                                                                 |
|:--------------------------|:---------------------------------|:--------------------------------------------------------------------------|
| Sequence Generation       | Fibonacci Sequence               | Generates the sequence step‑by‑step on tap; displays current index.      |
|                           | Pascal’s Triangle                | Renders rows of the triangle with visual emphasis on new values.          |
| Number Theory             | GCD Calculator                   | Accepts two numbers, shows Euclidean algorithm steps.                     |
|                           | Prime Number Generator           | Filters numbers sequentially and highlights primes.                       |
| Property Checking         | Perfect Square Checker           | Instant true/false verdict with animated result badge.                    |
|                           | Palindrome Number Checker        | Reads the number symmetrically; flips digits for comparison.              |
| Counters & Base Systems   | Binary Counter                   | Increments and displays the binary representation in real time.           |
|                           | Decimal → Hexadecimal Converter  | Converts input on‑the‑fly and shows the hex output.                       |
| High‑Precision & Series   | π Digit Revealer                 | Displays digits of π one by one, as if “unveiling” the number.           |
|                           | Harmonic Series Calculator       | Adds terms of the series and shows the partial sum growing slowly.        |
| Reaction & Timing         | Reaction Time Test               | Implements a state machine (Idle → Ready → Click) to measure response.   |
|                           | Click Per Second (CPS) Test      | Counts clicks within a time window and displays the final rate.           |

All modules share a consistent interface: a large clickable area, a dynamic numeric display, and fluid scrolling to the next challenge after a result is shown.

## Related Projects

The site is linked to the same developer’s primary open‑source effort:

- **`ios_rule_script`** (hosted under `blackmatrix7` on GitHub) – A massive collection of proxy rules, rewrite scripts, and automation configurations for Loon, Surge, Quantumult X, and similar network tools. The repository has gathered over 26,000 stars and is actively maintained.

The `blackmatrixblack.github.io` page often includes subtle references or links to these rule sets, making it a personal landing zone for both experimental code and production‑grade networking utilities.

## Deployment

- **Hosting**: GitHub Pages (standard `<username>.github.io` domain).
- **Source**: A public Git repository, usually named `<username>.github.io`.
- **Workflow**: Push to the `main` or `master` branch triggers an automatic Jekyll‑free deployment (since the site is pure static HTML).

## Design Language

The visual identity draws heavily from classic terminal aesthetics and cyberpunk themes:

- **Background**: Solid black (`#000000`) simulating an old CRT or terminal screen.
- **Accent Colours**: Neon cyan (`#00FFFF`) and magenta (`#FF00FF`) for interactive elements and highlights.
- **Typography**: Monospaced fonts (`Courier New`, `monospace`) reinforce the code‑like, hacker‑esque atmosphere.
- **Animations**: Subtle glow effects, pixelated transitions, and 60 FPS number‑count‑ups maintain a sense of “live computation”.

This style is not merely decorative – it is a deliberate signature of a developer who treats the browser as a canvas for algorithmic exploration.

## Summary

`blackmatrixblack.github.io` is a compact, high‑performance web application that blends mathematical education, game‑like interaction, and a distinctive cyberpunk aesthetic. It demonstrates that even without frameworks, a single HTML file can deliver a rich, engaging experience. For users, it is a fun way to experiment with numbers; for developers, it is a reference for vanilla JavaScript DOM manipulation, state management, and creative CSS.
```