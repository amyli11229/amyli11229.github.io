# Portfolio Website

A minimal, clean portfolio website designed for showcasing work in visual arts, HCI, and new media.

## Design Philosophy

This portfolio follows a restrained, art-school aesthetic with:
- **Large whitespace** for visual breathing room
- **Minimal color palette** (black, white, gray)
- **Clean typography** using Inter font
- **Subtle interactions** without flashy animations
- **Semantic HTML** for accessibility and SEO

## File Structure

```
/
├── index.html      # Landing page with name, intro, and scroll hint
├── projects.html   # Projects showcase with cards/list layout
├── about.html      # About page with bio, skills, and contact
├── style.css       # Main stylesheet with responsive design
├── main.js         # Minimal JavaScript for subtle interactions
└── README.md       # This file
```

## Design Details

### Typography
- **Font**: Inter (Google Fonts) with system font fallbacks
- **Weights**: 300 (light), 400 (regular), 500 (medium)
- **Scale**: Responsive using `clamp()` for fluid typography

### Layout
- **Navigation**: Fixed header with logo and links
- **Grid System**: CSS Grid for projects and skills sections
- **Max Width**: 1200px container for content
- **Spacing**: Consistent spacing scale (0.5rem, 1rem, 2rem, 4rem, 6rem)

### Interactions
- **Hover Effects**: Subtle translate and opacity changes
- **Scroll Animation**: Fade-in for project cards using Intersection Observer
- **Parallax**: Minimal parallax effect on landing page (optional)

### Color Palette
- Text: `#1a1a1a` (dark gray)
- Text Light: `#666` (medium gray)
- Background: `#ffffff` (white)
- Border: `#e0e0e0` (light gray)

## Customization

### Update Personal Information
1. **Name & Intro**: Edit `index.html` landing section
2. **Projects**: Update project cards in `projects.html`
3. **About**: Modify bio and skills in `about.html`
4. **Contact**: Update email and social links in `about.html`

### Add Projects
In `projects.html`, add new project cards following this structure:
```html
<article class="project-card">
    <div class="project-header">
        <h2 class="project-title">Project Title</h2>
        <span class="project-year">2024</span>
    </div>
    <p class="project-description">Description...</p>
    <div class="project-meta">
        <span class="project-medium">Medium</span>
        <span class="project-tech">Technologies</span>
    </div>
</article>
```

### Modify Colors
Edit CSS variables in `style.css`:
```css
:root {
    --color-text: #1a1a1a;
    --color-text-light: #666;
    --color-bg: #ffffff;
    --color-border: #e0e0e0;
}
```

### Add Avatar Image
Replace the `.avatar-placeholder` div in `about.html` with:
```html
<img src="path/to/your/avatar.jpg" alt="Your Name" class="avatar-image">
```

Then add CSS:
```css
.avatar-image {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
}
```

## Deployment

This site is designed for GitHub Pages deployment:

1. Push files to your repository
2. Enable GitHub Pages in repository settings
3. Select the main branch as source
4. Your site will be available at `https://[username].github.io`

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design for mobile, tablet, and desktop
- Graceful degradation for older browsers

## Notes

- All images are placeholders - replace with your actual work
- Contact links are placeholders - update with your real profiles
- The design is intentionally minimal to let your work shine
- Code is well-commented and easy to extend
