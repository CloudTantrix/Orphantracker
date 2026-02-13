# OrphanTracker Brand Guidelines

## Document Overview

This comprehensive brand guide ensures consistent, professional representation of OrphanTracker across all touchpoints—web, print, digital marketing, and community communications. These guidelines protect the brand identity while allowing flexibility for creative application.

**Version**: 1.0  
**Date**: December 2024  
**Maintained By**: OrphanTracker Design & Communications Team  
**Last Review**: December 2024  

---

## Table of Contents

1. Brand Mission & Values
2. Logo Standards
3. Color System
4. Typography
5. Photography & Illustrations
6. Tone & Voice
7. Visual Applications
8. Do's & Don'ts
9. Templates & Tools
10. Brand Evolution

---

## 1. Brand Mission & Values

### Mission Statement

> OrphanTracker empowers communities to provide every orphaned and vulnerable child with the protection, care, and opportunities they deserve.

### Core Values

**Compassion**
- We care deeply about the wellbeing of every child
- We listen to community voices
- We lead with empathy in all interactions

**Integrity**
- We maintain transparency in all operations
- We protect child safety above all else
- We honor trust through ethical practices

**Community**
- We believe in collective impact
- We celebrate local solutions and partnerships
- We amplify community voices and leadership

**Hope**
- We believe every child can thrive
- We celebrate progress and transformation
- We inspire action toward a better future

### Brand Promise

OrphanTracker is the trusted bridge connecting vulnerable children with protection, care, and opportunity—ensuring every child in our communities grows up safe, healthy, and empowered to reach their potential.

---

## 2. Logo Standards

### Primary Logo (Color)

**Logo**: Shield + Heart + Child silhouette  
**Primary Colors**: #667eea (purple) + #ffffff (white)  
**Minimum Size**: 80px (width)  
**Clear Space**: 10px padding around logo

**Usage**:
- Website headers
- Print materials (color)
- Digital advertising
- Social media profiles (when space allows)

### Icon Logo (Simplified)

**Logo**: Shield + Heart only  
**Minimum Size**: 16px (width)  
**Aspect Ratio**: 1:1 (square)  

**Usage**:
- Favicon
- App icon
- Small headers (mobile)
- Social media icons

### Horizontal Lockup

**Format**: Shield + Heart icon, followed by "OrphanTracker" text  
**Minimum Width**: 200px  
**Color**: Full color or monochrome

**Usage**:
- Website hero section
- Email signatures
- Print headers
- Social media banners

### Monochrome Logo

**Colors**: #1a1a1a (black) or #ffffff (white)  
**Usage**:
- Black & white print materials
- Single-color embroidery
- Stamping/debossing
- Accessibility-critical sections

### Do's & Don'ts

| ✅ DO | ❌ DON'T |
|-------|----------|
| Maintain minimum 80px width | Use logo smaller than 80px |
| Preserve 10px clear space | Crowd logo with other elements |
| Use approved colors only | Change colors or gradients |
| Scale proportionally | Stretch or distort logo |
| Use on contrasting backgrounds | Place on busy/clashing backgrounds |

### Logo Files

**Locations**:
- Primary: `assets/logo/OrphanTracker_Logo_Primary.svg`
- Icon: `assets/logo/OrphanTracker_Icon.svg`
- Horizontal: `assets/logo/OrphanTracker_Horizontal.svg`
- Vertical: `assets/logo/OrphanTracker_Vertical.svg`
- Favicon: `frontend/public/favicon.svg`

---

## 3. Color System

### Primary Brand Colors

| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| Primary Purple | #667eea | 102, 126, 234 | Logo, buttons, headers, brand identity |
| Deep Purple | #764ba2 | 118, 75, 162 | Hover states, depth, accents |
| Accent Green | #10b981 | 16, 185, 129 | Success, positive actions, growth |
| Accent Amber | #f59e0b | 245, 158, 11 | Warnings, highlights, energy |

### Neutral Colors

| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| Text Primary | #1a1a1a | 26, 26, 26 | Headlines, primary content |
| Text Secondary | #4b5563 | 75, 85, 99 | Body text, descriptions |
| Gray Light | #9ca3af | 156, 163, 175 | Disabled, borders, subtle text |
| Gray Lighter | #e5e7eb | 229, 231, 235 | Light borders, dividers |
| White | #ffffff | 255, 255, 255 | Backgrounds, overlays |

### Background Palette

- **Gradient**: `linear-gradient(#f5f7fa → #c3cfe2)`
- **Glass**: `rgba(255, 255, 255, 0.7)` with `backdrop-filter: blur(10px)`

### Glassmorphism

Our signature visual effect combines transparency, blur, and color:

```css
.glass {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 8px;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.07);
}
```

---

## 4. Typography

### Font Family

```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
```

Rationale: System fonts provide native, fast rendering on all platforms.

### Typographic Scale

| Element | Size | Weight | Line Height |
|---------|------|--------|------------|
| H1 | 3.5rem (56px) | 700 | 1.2 |
| H2 | 2.25rem (36px) | 700 | 1.3 |
| H3 | 1.875rem (30px) | 600 | 1.3 |
| H4 | 1.5rem (24px) | 600 | 1.4 |
| Body | 1rem (16px) | 400 | 1.6 |
| Small | 0.875rem (14px) | 400 | 1.6 |
| Caption | 0.75rem (12px) | 400 | 1.5 |

### Font Weights

- **400 (Regular)**: Body text
- **500 (Medium)**: Form labels
- **600 (Semibold)**: Button text, subheadings
- **700 (Bold)**: Main headings

---

## 5. Photography & Illustrations

### Photography Style

- **Authentic**: Real people, genuine moments
- **Warm**: Golden hour lighting, 3500-4500K color temperature
- **Inclusive**: Diverse ethnicities, abilities, family structures
- **Dignified**: Children shown thriving, not suffering

### Photography Categories

- **Hero**: Children learning or being cared for
- **Impact**: Education, health, shelter, family support
- **Community**: Caregivers, group activities, support networks
- **Testimonial**: Individual portraits sharing stories

### Illustration Style

- **Flat Design**: Clean lines, simple shapes, no gradients
- **Rounded**: 8-16px border radius for friendly appearance
- **Colorful**: 3-5 colors from brand palette per illustration
- **Scalable**: Works at 16px and 600px sizes

### Common Illustrations

- Icons: Education, health, safety, care, family, community
- Features: Children learning, hands supporting, growth, connection
- Empty States: Friendly, encouraging, action-oriented

---

## 6. Tone & Voice

### Brand Personality

**Warm**: Approachable, caring, human-centered  
**Professional**: Trustworthy, credible, well-organized  
**Hopeful**: Optimistic about change, celebratory of progress  
**Respectful**: Dignity for all, culturally sensitive, inclusive  

### Tone Guidelines

| Context | Tone | Example |
|---------|------|---------|
| Hero/Marketing | Inspiring, action-oriented | "Every child deserves protection. Join us in making it real." |
| Feature Descriptions | Clear, benefit-focused | "Report concerns safely and confidentially." |
| Error Messages | Helpful, solution-oriented | "Didn't match our records. Let's try again." |
| Success Messages | Celebratory, warm | "You've made a difference! Thank you for reporting." |
| Support/Help | Patient, clear, empowering | "We're here to help. Here's how..." |

### Language Principles

- **Inclusive**: Use "we," "our," "together"
- **Action-oriented**: Use strong verbs, active voice
- **Child-focused**: Center child safety and wellbeing
- **Jargon-free**: Explain complex concepts simply
- **Concise**: Get to the point quickly
- **Respectful**: Avoid patronizing language about vulnerable populations

### Avoid

- Poverty porn narratives ("helpless," "pity-based")
- Savior mentality ("white knight," "rescue")
- Dehumanizing language
- Overly technical jargon
- Corporate-speak
- Condescending tone

---

## 7. Visual Applications

### Website

**Header**
- Logo + navigation on left
- Background: White or light gray
- Purple accent on active/hover states

**Hero Section**
- Large photograph or illustration
- Heading: H1 (56px, bold)
- CTA button: Primary purple with hover animation
- Optional: Color overlay (40% purple) on photo

**Feature Cards**
- Glassmorphism: Semi-transparent white with blur
- Icon above title
- Icon color: Primary purple
- Title: H4 (24px)
- Border: Subtle gray

**Buttons**

Primary (CTA):
```css
background-color: #667eea;
color: #ffffff;
padding: 12px 24px;
border-radius: 8px;
transition: all 0.3s ease;
```

Hover:
```css
background-color: #764ba2;
box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3);
```

Outline (Secondary):
```css
background-color: transparent;
border: 2px solid #667eea;
color: #667eea;
```

### Email

**Header**
- Logo (200px max width)
- Background: Light gray (#f3f4f6)

**Content**
- Font: System stack, 16px base
- Heading: Dark gray (#1a1a1a), 24px bold
- Body: Readable gray (#4b5563), 16px
- CTA Button: Purple background, white text

**Footer**
- Contact info, social links
- Copyright notice
- Unsubscribe link
- Font: 12px, light gray

### Social Media

**Profile Picture**: Icon logo (400×400px minimum)

**Cover Image**: 
- Horizontal logo (400×200px for Facebook)
- Illustration or brand photo (clear focal point)
- Text overlay optional (white text with shadow)

**Posts**
- Primary color purple for graphic backgrounds
- Use illustrations for educational content
- Always include descriptive captions (Alt text)
- Consistent filter/color treatment

**Stories**: Full-screen vertical format (1080×1920px)
- Logo watermark (top-left corner)
- Bold text (18px+)
- High contrast for mobile viewing

### Print Materials

**Business Cards**
- Logo: Full color or monochrome
- Text: Dark gray (#1a1a1a)
- Cardstock: Bright white or cream
- Finish: Matte (avoids glare)

**Letterhead**
- Logo: Top-left or center
- Header color: Light purple background or rule
- Text area: Ample white space
- Footer: Contact info, website, social

**Brochures**
- Cover: Hero photo + large H1 heading
- Inside: Feature illustrations + copy
- Color palette: 2-3 brand colors max
- Fonts: System fonts (legible in print)

**Posters**
- Dominant illustration or photography
- Large heading (H1-H2)
- Purple accent color
- Clear CTA button
- High contrast for outdoor visibility

---

## 8. Do's & Don'ts

### Logo Usage

| ✅ DO | ❌ DON'T |
|-------|----------|
| Use approved colors | Recolor logo |
| Scale proportionally | Stretch or squeeze |
| Provide clear space | Crowd with other elements |
| Use on contrasting backgrounds | Place on competing patterns |
| Maintain minimum sizes | Use below 80px width |

### Color Usage

| ✅ DO | ❌ DON'T |
|-------|----------|
| Use brand purple for primary actions | Mix with other brand purples |
| Maintain contrast (4.5:1 WCAG AA) | Use low-contrast text |
| Use green for success states | Use green for errors |
| Apply consistent color meaning | Use colors arbitrarily |

### Typography

| ✅ DO | ❌ DON'T |
|-------|----------|
| Use system font stack | Use custom fonts without fallbacks |
| Scale headings responsively | Use same size for all text |
| Maintain 1.6+ line height for body | Use tight line height |
| Use consistent font weights | Mix weights randomly |

### Photography & Illustrations

| ✅ DO | ❌ DON'T |
|-------|----------|
| Show children thriving | Show children suffering |
| Represent diverse communities | Use only stock photos |
| Obtain consent for photos | Publish without permission |
| Use authentic images | Use "poverty porn" imagery |
| Feature supportive interactions | Emphasize "savior" narratives |

### Tone & Voice

| ✅ DO | ❌ DON'T |
|-------|----------|
| Use inclusive language | Use patronizing tone |
| Be specific and clear | Use jargon or corporate-speak |
| Lead with compassion | Ignore user needs |
| Celebrate progress | Dwell on problems |
| Respect all cultures | Make cultural assumptions |

---

## 9. Templates & Tools

### Design Files

- **Figma**: Main design system and component library
  - Colors, typography, components
  - Shared library for team collaboration
  - Prototype links for stakeholder review

- **Storybook**: Interactive component documentation
  - Button, GlassCard, form components
  - Live stories with props/variations
  - Accessibility testing built-in

### Downloadable Assets

- Logo pack (SVG, PNG, PDF)
- Color palette (ASE, ACO for design apps)
- Icon set (SVG, 24px/64px)
- Figma components library
- Email templates (HTML)
- Social media templates (PSD/Figma)

### Online Tools

- **WebAIM Contrast Checker**: Test color combinations
- **Figma**: Design and prototype
- **Storybook**: Document components
- **Unsplash/Pexels**: Free photography
- **Inkscape/Illustrator**: Create illustrations

---

## 10. Brand Evolution

### Visual Evolution

The brand identity will evolve over time based on:
- User feedback and testing
- Cultural shifts and community needs
- Technology changes (dark mode, new platforms)
- Organizational growth and maturity

### Approval Process for Changes

1. **Research**: Conduct user testing with key audiences
2. **Concept**: Develop 2-3 design directions
3. **Refinement**: Get stakeholder feedback, iterate
4. **Implementation**: Update all guidelines, assets, templates
5. **Communication**: Announce changes to team and community

### Future Considerations

- **Dark Mode**: Adapt colors for dark backgrounds
- **Animation**: Define motion/easing principles
- **Accessibility**: Continue WCAG AAA compliance
- **Localization**: Adapt for multiple languages (Nepali, others)
- **Seasonal**: Holiday/campaign variations (if approved)

---

## Implementation Checklist

### Website
- [ ] Update favicon to OrphanTracker icon
- [ ] Implement glass card components
- [ ] Apply typography scale to all pages
- [ ] Verify color contrast ratios (4.5:1 minimum)
- [ ] Add logo to header and footer
- [ ] Style buttons with brand colors
- [ ] Test responsive typography on mobile

### Email
- [ ] Create branded email template
- [ ] Implement logo in header
- [ ] Apply color palette to CTAs
- [ ] Test in Gmail, Outlook, Apple Mail
- [ ] Ensure mobile responsiveness

### Social Media
- [ ] Update profile pictures with logo
- [ ] Create cover images
- [ ] Design post templates
- [ ] Define posting schedule and guidelines
- [ ] Implement brand hashtags

### Print
- [ ] Design business cards
- [ ] Create letterhead template
- [ ] Develop brochure layout
- [ ] Design poster template
- [ ] Print samples for review

### Ongoing
- [ ] Document all brand decisions
- [ ] Maintain asset library
- [ ] Train team on guidelines
- [ ] Conduct quarterly brand audits
- [ ] Gather feedback for improvements

---

## Contact & Support

**For Brand Questions**:
- Email: design@orphantracker.org
- Slack: #brand-design-chat
- Weekly Design Sync: Tuesdays 2 PM UTC

**Asset Requests**:
- Figma: [Link to design system]
- Storybook: localhost:6006
- GitHub: assets/logo/, assets/branding/

**Feedback & Suggestions**:
- Create issue in GitHub
- Fill out brand survey (quarterly)
- Attend design reviews (open to all)

---

## Appendix: Quick Reference

### Brand Colors (Quick Copy)
```
Primary Purple: #667eea
Deep Purple: #764ba2
Accent Green: #10b981
Accent Amber: #f59e0b
Text Primary: #1a1a1a
Text Secondary: #4b5563
```

### Typography Quick Copy
```
H1: 3.5rem, weight 700
H2: 2.25rem, weight 700
H3: 1.875rem, weight 600
Body: 1rem, weight 400
Font: -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif
```

### File Locations
```
Logo: assets/logo/OrphanTracker_Logo_*.svg
Colors: COLOR_PALETTE.md
Typography: TYPOGRAPHY.md
Images: IMAGERY_GUIDELINES.md
CSS: frontend/src/styles/design-tokens.css
```

---

**This is a living document. Last updated December 2024.**  
**Review and update quarterly. Share feedback with the design team.**

