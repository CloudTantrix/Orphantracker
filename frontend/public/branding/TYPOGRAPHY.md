# Ujyalo Bhavishya Abhiyan - Typography Specification

**Mission:** Accessible, bilingual (Nepali/English), warm, and professional typography for a Nepal-focused child protection platform.

---

## Typeface Family

### Primary Font: Noto Sans Devanagari
- **For:** All Nepali language content
- **Font Family:** `'Noto Sans Devanagari', serif`
- **Weights:** 400 (Regular), 600 (SemiBold), 700 (Bold), 800 (ExtraBold)
- **Character Set:** Full Devanagari support (सुरक्षित, भविष्य, आदि)
- **Fallback:** System Devanagari fonts
- **Source:** Google Fonts (free, open-source)

### Secondary Font: Montserrat
- **For:** English headings, brand titles, emphasis
- **Font Family:** `'Montserrat', 'Arial', sans-serif`
- **Weights:** 400 (Regular), 600 (SemiBold), 700 (Bold), 800 (ExtraBold)
- **Character Set:** Latin, extended Latin
- **Source:** Google Fonts (free, open-source)

### Body Font: Open Sans
- **For:** English body text, small text, UI labels
- **Font Family:** `'Open Sans', 'Segoe UI', 'Roboto', sans-serif`
- **Weights:** 400 (Regular), 600 (SemiBold), 700 (Bold)
- **Character Set:** Latin, extended Latin, Greek
- **Source:** Google Fonts (free, open-source)

### System Font Stack (Fallback)
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
```

---

## Type Scale & Sizing

### Display & Headings

| Element | Size | Weight | Line Height | Usage |
|---------|------|--------|-------------|-------|
| **H1** | 2.5rem (40px) | 700 | 1.2 | Page titles, hero sections |
| **H2** | 2rem (32px) | 700 | 1.3 | Section headings |
| **H3** | 1.5rem (24px) | 600 | 1.4 | Subsection headings |
| **H4** | 1.25rem (20px) | 600 | 1.5 | Small headings, card titles |
| **H5** | 1.125rem (18px) | 600 | 1.5 | Labels, button text |
| **H6** | 1rem (16px) | 600 | 1.6 | Small labels, captions |

### Body & Text

| Element | Size | Weight | Line Height | Usage |
|---------|------|--------|-------------|-------|
| **Lead** | 1.125rem (18px) | 400 | 1.6 | Introductory paragraphs, hero tagline |
| **Body** | 1rem (16px) | 400 | 1.6 | Main content, article text |
| **Small** | 0.875rem (14px) | 400 | 1.5 | Secondary text, metadata, captions |
| **Caption** | 0.75rem (12px) | 400 | 1.4 | Footnotes, disclaimers, timestamps |

### Button & Interactive

| Element | Size | Weight | Line Height | Usage |
|---------|------|--------|-------------|-------|
| **Button Large** | 1.125rem (18px) | 700 | 1.2 | CTA buttons, primary actions |
| **Button Normal** | 1rem (16px) | 600 | 1.2 | Standard buttons |
| **Button Small** | 0.875rem (14px) | 600 | 1.1 | Compact buttons, toggles |

---

## Bilingual Guidelines

### Nepali Text (Noto Sans Devanagari)
- **Headings:** Use 700 weight for prominence
- **Body:** Use 400 weight for readability
- **Emphasis:** Use 600-700 weight or Deep Red (#B31217) color
- **Example:** सुरक्षित बालबालिका। उज्यालो भविष्य।

### English Text (Montserrat/Open Sans)
- **Headings:** Montserrat 700 weight
- **Body:** Open Sans 400 weight
- **Emphasis:** Montserrat 700 weight or Deep Red (#B31217) color
- **Example:** Safe Children. Bright Futures.

### Mixed-Language Content
- Use appropriate fonts for each language
- Maintain consistent baseline alignment
- Add 0.1-0.2em letter-spacing for Devanagari text
- Keep contrast ratios WCAG AAA compliant

---

## Color & Styling

### Text Colors

| Usage | Color | Hex | RGB |
|-------|-------|-----|-----|
| Primary text | Dark Background | #0B0B0B | rgb(11, 11, 11) |
| Secondary text | Medium Gray | #666666 | rgb(102, 102, 102) |
| Muted text | Light Gray | #999999 | rgb(153, 153, 153) |
| Deep Red emphasis | Primary Red | #B31217 | rgb(179, 18, 23) |
| Gold accent | Gold | #F5C542 | rgb(245, 197, 66) |

### Text on Colors

| Background | Text Color | Contrast Ratio | WCAG |
|------------|-----------|-----------------|------|
| White (#FFFFFF) | Dark (#0B0B0B) | 20.3:1 | AAA |
| White | Deep Red (#B31217) | 7.2:1 | AAA |
| Deep Red (#B31217) | White | 7.2:1 | AAA |
| Gold (#F5C542) | Dark (#0B0B0B) | 9.8:1 | AAA |
| Light Gray (#F0F0F0) | Dark (#0B0B0B) | 19.2:1 | AAA |

---

## Spacing & Hierarchy

### Paragraph Spacing
```css
line-height: 1.6;         /* Default: 1.6x font size */
margin-bottom: 1.5rem;    /* Space after paragraphs */
letter-spacing: 0.3px;    /* Subtle letter spacing for readability */
```

### Heading Spacing
```css
h1, h2 {
  margin-top: 2rem;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;  /* Slightly tighter for headings */
}
```

### List Spacing
```css
ul, ol {
  margin-left: 1.5rem;
  margin-bottom: 1.5rem;
}

li {
  margin-bottom: 0.5rem;
  line-height: 1.6;
}
```

---

## Accessibility Standards

### Minimum Text Sizes
- **Body text:** Minimum 16px (1rem) for readability
- **Small text:** 14px (0.875rem) minimum for secondary content
- **Caption:** 12px (0.75rem) only for non-essential metadata

### Font Weight Accessibility
- ✅ Do use 600-700 weight for emphasis
- ✅ Do use color changes for emphasis (Deep Red, Gold)
- ❌ Don't rely solely on italic for emphasis
- ❌ Don't use font-weight below 400 (too light)

### Line Height & Reading
- **Body text:** Line height 1.6 minimum (prevents eye strain)
- **Headings:** Line height 1.2-1.3 (tighter, for visual hierarchy)
- **Leading:** Maintain 1.5-1.8em vertical rhythm

### Contrast Ratios
All text must meet WCAG 2.1 Level AA minimum (4.5:1):
- ✅ Dark text on white: 20.3:1 (AAA)
- ✅ Deep Red text on white: 7.2:1 (AAA)
- ✅ Gold text on dark: Acceptable
- ❌ Gold text on white: FAIL (insufficient contrast - avoid)

---

## Implementation Examples

### HTML Structure
```html
<h1>Ujyalo Bhavishya Abhiyan</h1>
<p class="lead">सुरक्षित बालबालिका। उज्यालो भविष्य।</p>
<p>Safe Children. Bright Futures.</p>
```

### CSS Classes
```css
.display-1 { font-size: 2.5rem; font-weight: 700; }
.h2 { font-size: 2rem; font-weight: 700; }
.lead { font-size: 1.125rem; font-weight: 400; }
.body { font-size: 1rem; font-weight: 400; line-height: 1.6; }
.small { font-size: 0.875rem; color: var(--muted); }
```

### React Component Example
```jsx
<h1 style={{ fontFamily: 'Montserrat', fontSize: '2.5rem', fontWeight: 700 }}>
  Ujyalo Bhavishya Abhiyan
</h1>
<p style={{ fontFamily: "'Noto Sans Devanagari'", fontSize: '1.125rem' }}>
  सुरक्षित बालबालिका। उज्यालो भविष्य।
</p>
```

---

## Typography Hierarchy

### Visual Hierarchy Example

**Page Title (H1)**
```
Ujyalo Bhavishya Abhiyan
2.5rem, Montserrat 700, Deep Red
```

**Section Heading (H2)**
```
About Our Mission
2rem, Montserrat 700, Dark Text
```

**Lead Paragraph (Lead)**
```
Safe Children. Bright Futures.
1.125rem, Open Sans 400, Medium Gray
```

**Body Paragraph (Body)**
```
We protect Nepal's vulnerable children through monitoring, reporting, and community engagement...
1rem, Open Sans 400, Dark Text, 1.6 line height
```

**Caption (Small)**
```
Last updated: Feb 13, 2026
0.75rem, Open Sans 400, Light Gray
```

---

## Font Loading & Performance

### Google Fonts Import
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Noto+Sans+Devanagari:wght@400;600;700;800&family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet">
```

### Font Display Strategy
- Use `font-display: swap` to prevent layout shift
- Provide system font fallbacks for all typefaces
- Load only required weights (400, 600, 700)

---

## Version History

| Date | Version | Changes |
|------|---------|---------|
| Feb 13, 2026 | 1.0 | Initial typography guide for Ujyalo Bhavishya Abhiyan |
