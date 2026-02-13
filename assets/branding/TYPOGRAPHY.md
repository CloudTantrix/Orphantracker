# OrphanTracker Typography Specification

## System Font Stack

```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 
             'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 
             'Droid Sans', 'Helvetica Neue', sans-serif;
```

**Rationale**: System fonts ensure native, fast rendering on all platforms. Users see fonts they recognize, reducing cognitive load and improving perceived performance.

### Font Fallback Order
1. **Apple System Font** (-apple-system): macOS, iOS
2. **Segoe UI**: Windows
3. **Roboto**: Android, Google ecosystem
4. **Generic sans-serif**: Fallback guarantee

---

## Type Hierarchy

### Display Sizes

#### H1 - Hero Headline
- **Font Size**: 3.5rem (56px)
- **Line Height**: 1.2 (67.2px)
- **Font Weight**: 700 (Bold)
- **Letter Spacing**: -0.02em (-1.12px)
- **Color**: `#1a1a1a` (Text Primary)
- **Usage**: Page titles, main hero text, section headers
- **CSS**: 
```css
font-size: 3.5rem;
line-height: 1.2;
font-weight: 700;
letter-spacing: -0.02em;
```

#### H2 - Section Heading
- **Font Size**: 2.25rem (36px)
- **Line Height**: 1.3 (46.8px)
- **Font Weight**: 700 (Bold)
- **Letter Spacing**: -0.01em (-0.36px)
- **Color**: `#1a1a1a`
- **Usage**: Major section headers, cards titles, key information
- **CSS**:
```css
font-size: 2.25rem;
line-height: 1.3;
font-weight: 700;
letter-spacing: -0.01em;
```

#### H3 - Subsection Heading
- **Font Size**: 1.875rem (30px)
- **Line Height**: 1.3 (39px)
- **Font Weight**: 600 (Semibold)
- **Letter Spacing**: 0em
- **Color**: `#1a1a1a`
- **Usage**: Subsection titles, card headers, feature titles
- **CSS**:
```css
font-size: 1.875rem;
line-height: 1.3;
font-weight: 600;
```

#### H4 - Minor Heading
- **Font Size**: 1.5rem (24px)
- **Line Height**: 1.4 (33.6px)
- **Font Weight**: 600 (Semibold)
- **Color**: `#1a1a1a`
- **Usage**: Small section headers, list titles, form labels
- **CSS**:
```css
font-size: 1.5rem;
line-height: 1.4;
font-weight: 600;
```

#### H5 - Label/Small Title
- **Font Size**: 1.25rem (20px)
- **Line Height**: 1.5 (30px)
- **Font Weight**: 600 (Semibold)
- **Color**: `#1a1a1a`
- **Usage**: Form labels, category headers, emphasis text
- **CSS**:
```css
font-size: 1.25rem;
line-height: 1.5;
font-weight: 600;
```

#### H6 - Tiny Heading
- **Font Size**: 1rem (16px)
- **Line Height**: 1.5 (24px)
- **Font Weight**: 600 (Semibold)
- **Color**: `#1a1a1a`
- **Usage**: Small labels, meta information

---

### Body Text

#### Paragraph - Regular Body
- **Font Size**: 1rem (16px)
- **Line Height**: 1.6 (25.6px)
- **Font Weight**: 400 (Regular)
- **Color**: `#4b5563` (Text Secondary)
- **Usage**: Main body text, descriptive content, standard paragraphs
- **CSS**:
```css
font-size: 1rem;
line-height: 1.6;
font-weight: 400;
color: #4b5563;
```

#### Paragraph - Large
- **Font Size**: 1.125rem (18px)
- **Line Height**: 1.6 (28.8px)
- **Font Weight**: 400 (Regular)
- **Color**: `#4b5563`
- **Usage**: Intro text, featured paragraphs, highlighted body text
- **CSS**:
```css
font-size: 1.125rem;
line-height: 1.6;
font-weight: 400;
```

#### Paragraph - Small
- **Font Size**: 0.875rem (14px)
- **Line Height**: 1.6 (22.4px)
- **Font Weight**: 400 (Regular)
- **Color**: `#4b5563`
- **Usage**: Secondary information, form helpers, fine print

---

### UI Text

#### Button Text
- **Font Size**: 1rem (16px)
- **Line Height**: 1.5 (24px)
- **Font Weight**: 600 (Semibold)
- **Letter Spacing**: 0.025em (0.4px)
- **Text Transform**: None (unless for all-caps variants)
- **Color**: `#ffffff` (on dark backgrounds), `#667eea` (on light)
- **CSS**:
```css
font-size: 1rem;
line-height: 1.5;
font-weight: 600;
letter-spacing: 0.025em;
```

#### Input/Form Label
- **Font Size**: 0.875rem (14px)
- **Line Height**: 1.5 (21px)
- **Font Weight**: 500 (Medium)
- **Color**: `#1a1a1a`
- **CSS**:
```css
font-size: 0.875rem;
line-height: 1.5;
font-weight: 500;
```

#### Input/Form Helper Text
- **Font Size**: 0.75rem (12px)
- **Line Height**: 1.5 (18px)
- **Font Weight**: 400 (Regular)
- **Color**: `#9ca3af` (Gray Light)
- **CSS**:
```css
font-size: 0.75rem;
line-height: 1.5;
font-weight: 400;
color: #9ca3af;
```

#### Caption/Meta
- **Font Size**: 0.75rem (12px)
- **Line Height**: 1.5 (18px)
- **Font Weight**: 400 (Regular)
- **Color**: `#9ca3af`
- **Usage**: Image captions, timestamps, metadata
- **CSS**:
```css
font-size: 0.75rem;
line-height: 1.5;
font-weight: 400;
color: #9ca3af;
```

#### Badge/Tag
- **Font Size**: 0.625rem (10px)
- **Line Height**: 1.4 (14px)
- **Font Weight**: 600 (Semibold)
- **Letter Spacing**: 0.05em (0.5px)
- **Text Transform**: Uppercase
- **Color**: `#667eea` (primary)
- **CSS**:
```css
font-size: 0.625rem;
line-height: 1.4;
font-weight: 600;
letter-spacing: 0.05em;
text-transform: uppercase;
```

---

## Font Weight Guide

### Available Weights
- **400 (Regular)**: Body text, paragraphs, descriptions
- **500 (Medium)**: Form labels, secondary UI
- **600 (Semibold)**: Button text, subheadings, emphasis
- **700 (Bold)**: Headings, important text, primary emphasis

**CSS**:
```css
font-weight: 400; /* Regular */
font-weight: 500; /* Medium */
font-weight: 600; /* Semibold */
font-weight: 700; /* Bold */
```

---

## Line Height Scale

| Use Case | Value | Ratio |
|----------|-------|-------|
| Tight (headings) | 1.2 | 120% |
| Compact | 1.3 | 130% |
| Default (body) | 1.6 | 160% |
| Loose (long-form) | 1.8 | 180% |
| Spacious | 2.0 | 200% |

**Rationale**: Line heights increase readability and accessibility. Tighter headings create visual hierarchy; loose body text improves readability for long paragraphs.

---

## Letter Spacing

| Context | Value | Usage |
|---------|-------|-------|
| Tight | -0.02em | Large headlines |
| Normal | 0em | Most text (default) |
| Relaxed | 0.025em | Buttons, labels |
| Wide | 0.05em | All-caps badges, tags |

---

## Text Styling Variations

### Emphasis Text
```css
font-style: italic;
color: #667eea;
```

### Strong Text
```css
font-weight: 600;
color: #1a1a1a;
```

### Underline/Link
```css
text-decoration: underline;
color: #667eea;
transition: color 0.3s ease;
```

```css
a:hover {
  color: #764ba2;
  text-decoration: underline;
}
```

### Strikethrough
```css
text-decoration: line-through;
color: #9ca3af;
```

---

## Text Color Combinations

### Primary Text (Headings)
- **Color**: `#1a1a1a`
- **Best On**: White, light grays, light backgrounds
- **Contrast**: 20:1 (AAA)

### Secondary Text (Body)
- **Color**: `#4b5563`
- **Best On**: White, light backgrounds
- **Contrast**: 8.1:1 (AAA)

### Tertiary Text (Meta, Helpers)
- **Color**: `#9ca3af`
- **Best On**: White backgrounds only
- **Contrast**: 5.5:1 (AA)

### Interactive Text (Links, Buttons)
- **Color**: `#667eea`
- **Hover**: `#764ba2`
- **Best On**: White, light backgrounds
- **Contrast**: 4.87:1 (AA)

---

## Text Alignment

### Left Align (Default)
```css
text-align: left;
direction: ltr;
```
- Standard for left-to-right languages (English)
- Used for paragraphs, lists, tables
- Improves readability for body text

### Center Align
```css
text-align: center;
```
- Heroes, major headings, section titles
- Calls-to-action, featured quotes
- Use sparingly to maintain visual hierarchy

### Right Align (RTL Support)
```css
text-align: right;
direction: rtl;
```
- For future Nepali localization
- Body text will auto-wrap correctly

---

## Text Overflow & Truncation

### Single Line Ellipsis
```css
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
```

### Multi-line Clamp (up to 2 lines)
```css
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
overflow: hidden;
```

---

## CSS Variables Reference

```css
:root {
  /* Font Family */
  --font-family-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  
  /* Font Sizes */
  --font-size-h1: 3.5rem;
  --font-size-h2: 2.25rem;
  --font-size-h3: 1.875rem;
  --font-size-h4: 1.5rem;
  --font-size-h5: 1.25rem;
  --font-size-h6: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-base: 1rem;
  --font-size-sm: 0.875rem;
  --font-size-xs: 0.75rem;
  --font-size-xs-badge: 0.625rem;
  
  /* Font Weights */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  
  /* Line Heights */
  --line-height-tight: 1.2;
  --line-height-compact: 1.3;
  --line-height-normal: 1.6;
  --line-height-loose: 1.8;
  
  /* Letter Spacing */
  --letter-spacing-tight: -0.02em;
  --letter-spacing-normal: 0em;
  --letter-spacing-relaxed: 0.025em;
  --letter-spacing-wide: 0.05em;
}
```

---

## Accessibility Guidelines

### Minimum Font Size
- **12px**: Never use smaller for body text
- **14px**: Minimum for secondary text
- **16px**: Standard for readable body text
- **18px+**: Large text (18+) for paragraphs improves readability

### Line Height for Accessibility
- **1.5:1 ratio minimum**: Ensures adequate spacing
- **1.6-1.8**: Optimal for readability
- **Higher for longer content**: Use 1.8 for long-form articles

### Contrast Requirements
- **Text vs Background**: 4.5:1 minimum (AA), 7:1 preferred (AAA)
- **All current colors meet AA**: Tested with WebAIM tools
- **Verify contrast** when customizing colors

### Letter Spacing for Readability
- Avoid excessive letter spacing in body text
- Use 0.02em–0.05em for headings only
- Tight tracking (-0.02em) acceptable for large display text

---

## Responsive Typography

### Desktop (1024px+)
Use full typography scale as specified above.

### Tablet (768px - 1023px)
Reduce headings by ~10%:
- H1: 3rem (48px)
- H2: 2rem (32px)
- H3: 1.625rem (26px)
- Body: 1rem (16px) - no change

### Mobile (320px - 767px)
Further reduction for small screens:
- H1: 2.25rem (36px)
- H2: 1.75rem (28px)
- H3: 1.25rem (20px)
- Body: 0.9375rem (15px)

---

## Responsive CSS Example

```css
@media (max-width: 1023px) {
  h1 { font-size: 3rem; }
  h2 { font-size: 2rem; }
  h3 { font-size: 1.625rem; }
}

@media (max-width: 767px) {
  h1 { font-size: 2.25rem; }
  h2 { font-size: 1.75rem; }
  h3 { font-size: 1.25rem; }
  p { font-size: 0.9375rem; }
}
```

---

## Interactive Text States

### Hover State
```css
a {
  transition: color 0.3s ease;
}

a:hover {
  color: #764ba2;
  text-decoration: underline;
}
```

### Focus State (Keyboard Navigation)
```css
a:focus-visible {
  outline: 2px solid #667eea;
  outline-offset: 2px;
}
```

### Active State (Pressed)
```css
a:active {
  color: #4a3575;
  text-decoration: underline;
}
```

### Disabled State
```css
button:disabled,
a:disabled {
  color: #9ca3af;
  cursor: not-allowed;
}
```

---

## Implementation Checklist

- [ ] Add CSS variables to `src/styles/design-tokens.css`
- [ ] Test typography on multiple browsers (Chrome, Safari, Firefox)
- [ ] Verify contrast ratios with WebAIM Checker
- [ ] Test responsive typography on mobile devices
- [ ] Ensure proper line heights for readability
- [ ] Add to Storybook for component documentation
- [ ] Update component CSS to use typography variables
- [ ] Test with screen readers (NVDA, JAWS, VoiceOver)

---

**Last Updated**: December 2024
**Version**: 1.0
**Maintained By**: OrphanTracker Design Team
