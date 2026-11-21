# SPA-Portfolio

Static portfolio website for the San Rafael National High School Special Program in the Arts (SPA).

## Pages

- `index.html` - Home page and major previews
- `about.html` - Mission, vision, objectives, and project information
- `majors.html` - Overview of all six majors
- `contact.html` - Contact information and message form
- `majors/dance.html` - Dance major
- `majors/theater.html` - Theater Arts major
- `majors/music.html` - Music major
- `majors/media-arts.html` - Media Arts major
- `majors/visual-arts.html` - Visual Arts major
- `majors/literary-arts.html` - Creative Writing major

## Project Structure

```text
SPA-Portfolio/
├── index.html
├── about.html
├── majors.html
├── contact.html
├── assets/
│   ├── logo/
│   ├── school/
│   ├── dance/
│   ├── theater/
│   ├── music/
│   ├── media-arts/
│   ├── visual-arts/
│   └── literary-arts/
├── css/
│   ├── style.css
│   ├── responsive.css
│   └── animations.css
├── js/
│   ├── main.js
│   ├── navigation.js
│   ├── gallery.js
│   └── contact.js
└── majors/
    ├── dance.html
    ├── theater.html
    ├── music.html
    ├── media-arts.html
    ├── visual-arts.html
    └── literary-arts.html
```

## How to Run

This project is fully static and does not require a framework or server.

Open `index.html` directly in a web browser, or launch it from Visual Studio Code using Live Preview.

## Features

- Responsive desktop and mobile layout
- Sticky navigation header
- Scroll reveal animations
- Major overview and individual major pages
- Featured Student Work lightbox
- Mobile navigation drawer
- Standardized school and SPA logo assets

## Asset Naming

- Main major photos use `assets/<major>/main.jpg`
- Theater preview image: `assets/theater/home-thumb.jpg`
- Featured Student Work photos use `fsw-1.jpg` and `fsw-2.jpg`
- School image: `assets/school/school-gate.jpg`
- Logo images are in `assets/logo/`

## Contact Form

The contact form currently provides client-side validation and on-page success feedback. It does not send email or save submissions because this project does not include a server or database.
