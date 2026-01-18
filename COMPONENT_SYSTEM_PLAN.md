# UI Component System Implementation Plan

## Overview
Build a reusable, dark-themed component system based on the provided design references. All styling will use CSS variables for maximum configurability.

## Design Analysis from Images

### Color Scheme
- **Background Colors:**
  - Primary background: `#0f1419` (very dark blue-gray)
  - Secondary background: `#1a1f2e` (dark blue-gray)
  - Card background: `#1e2433` (slightly lighter dark blue)
  - Hover/elevated: `#252d3d`
  
- **Accent Colors:**
  - Primary accent: `#6366f1` (indigo/purple)
  - Success/active: `#10b981` (green)
  - Error/failed: `#ef4444` (red)
  - Warning: `#f59e0b` (amber)
  
- **Text Colors:**
  - Primary text: `#e5e7eb` (light gray)
  - Secondary text: `#9ca3af` (medium gray)
  - Muted text: `#6b7280` (dark gray)
  
- **Border Colors:**
  - Default border: `#2d3748`
  - Hover border: `#4a5568`
  - Focus border: `#6366f1`

### Typography
- Font family: System fonts (Inter, SF Pro, Segoe UI)
- Font sizes: 12px, 14px, 16px, 18px, 24px
- Font weights: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)

### Spacing & Layout
- Border radius: 6px (small), 8px (medium), 12px (large), 16px (xlarge)
- Spacing scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px
- Shadows: Subtle elevation shadows for cards and dropdowns

### UI Patterns Observed
1. **Navigation sidebar** - Dark with icon + text items
2. **Search bar** - Rounded with icon, subtle background
3. **Project cards** - List items with status indicators, badges, timestamps
4. **Status badges** - Rounded pills with colored backgrounds
5. **Buttons** - Primary (accent color), secondary (outline), ghost
6. **Activity feed** - Timeline-style list with avatars
7. **Charts/visualizations** - Bar charts with gradient colors
8. **Code blocks** - Syntax highlighted with dark background
9. **Icons** - Circular backgrounds, subtle elevation

## Phase 1: Foundation Setup

### 1.1 CSS Variables File
**File:** `src/renderer/src/styles/variables.css`

Define all design tokens:
- Color palette (backgrounds, accents, text, borders)
- Typography (font families, sizes, weights, line heights)
- Spacing scale
- Border radius values
- Shadow definitions
- Transition/animation values

### 1.2 Global Styles
**File:** `src/renderer/src/styles/global.css`

- CSS reset/normalize
- Base typography
- Smooth scrolling
- Focus styles
- Selection colors
- Scrollbar styling

### 1.3 Component Structure
**Directory:** `src/renderer/src/components/ui/`

Create individual component folders with:
- Component file (`.tsx`)
- Component styles (`.css`)
- Type definitions (inline or separate)

## Phase 2: Core Components (10+ Components)

### 2.1 Button Component
**File:** `components/ui/Button/Button.tsx`

Variants:
- Primary (filled with accent color)
- Secondary (outlined)
- Ghost (transparent)
- Danger (red accent)

Sizes: small, medium, large
States: default, hover, active, disabled, loading

### 2.2 Input Component
**File:** `components/ui/Input/Input.tsx`

Features:
- Text input with icon support (left/right)
- Search variant with search icon
- Error state with message
- Disabled state
- Focus ring styling

### 2.3 Card Component
**File:** `components/ui/Card/Card.tsx`

Variants:
- Default card
- Elevated card (with shadow)
- Interactive card (hover effect)
- Outlined card

### 2.4 Badge Component
**File:** `components/ui/Badge/Badge.tsx`

Variants:
- Default
- Success (green)
- Error (red)
- Warning (amber)
- Info (blue)
- Production/Preview labels

### 2.5 Avatar Component
**File:** `components/ui/Avatar/Avatar.tsx`

Features:
- Image avatar
- Initials fallback
- Status indicator (online/offline)
- Sizes: small, medium, large

### 2.6 Dropdown Component
**File:** `components/ui/Dropdown/Dropdown.tsx`

Features:
- Trigger button
- Menu items with icons
- Dividers
- Keyboard navigation
- Portal rendering

### 2.7 List Component
**File:** `components/ui/List/List.tsx`

Features:
- List container
- List item with icon, title, subtitle
- Status indicators
- Hover effects
- Click handlers

### 2.8 Sidebar Navigation Component
**File:** `components/ui/Sidebar/Sidebar.tsx`

Features:
- Navigation items with icons
- Active state highlighting
- Collapsible sections
- Team switcher

### 2.9 StatusIndicator Component
**File:** `components/ui/StatusIndicator/StatusIndicator.tsx`

Features:
- Colored dot indicator
- Sizes: small, medium, large
- Colors: success, error, warning, info, neutral
- Optional pulse animation

### 2.10 IconButton Component
**File:** `components/ui/IconButton/IconButton.tsx`

Features:
- Circular or square
- Various sizes
- Tooltip support
- Variants: default, primary, ghost

### 2.11 SearchBar Component
**File:** `components/ui/SearchBar/SearchBar.tsx`

Features:
- Search icon
- Keyboard shortcut hint
- Clear button
- Autocomplete support

### 2.12 Chart Component (Bonus)
**File:** `components/ui/Chart/Chart.tsx`

Features:
- Bar chart visualization
- Gradient colors
- Responsive
- Data labels

## Phase 3: App.tsx Demo Page

### 3.1 Replace App.tsx Content
**File:** `src/renderer/src/App.tsx`

Create a showcase page demonstrating:
- All components in various states
- Grid/flex layout examples
- Interactive examples
- Color palette display
- Typography scale display

Layout sections:
1. **Header** - Title and description
2. **Buttons Section** - All button variants
3. **Inputs Section** - Input fields and search bars
4. **Cards Section** - Different card styles
5. **Badges & Status** - Badge and status indicator examples
6. **Lists & Navigation** - List items and sidebar preview
7. **Avatars** - Avatar variations
8. **Dropdowns** - Dropdown menu examples
9. **Color Palette** - Visual display of all colors
10. **Typography** - Font size and weight examples

## Phase 4: Documentation

### 4.1 Component README
**File:** `src/renderer/src/components/ui/README.md`

Document:
- How to use each component
- Props API
- Examples
- Customization guide

### 4.2 Design System Guide
**File:** `DESIGN_SYSTEM.md`

Document:
- Color usage guidelines
- Typography scale
- Spacing system
- Component composition patterns
- Accessibility considerations

## Implementation Priorities

### Must Have (Phase 1 & 2)
1. CSS Variables setup
2. Global styles
3. Button, Input, Card components
4. Badge, Avatar components
5. Basic layout components

### Should Have (Phase 3)
6. Dropdown, List components
7. Sidebar navigation
8. SearchBar component
9. Demo page in App.tsx

### Nice to Have (Phase 4)
10. Chart component
11. Additional variants
12. Documentation
13. Animation refinements

## Key Principles

1. **Single Source of Truth**: All design values in CSS variables
2. **Composability**: Components should work together seamlessly
3. **Accessibility**: Proper ARIA labels, keyboard navigation, focus management
4. **Performance**: Minimal re-renders, efficient CSS
5. **Type Safety**: Full TypeScript support with proper prop types
6. **Consistency**: Follow established patterns across all components
7. **Flexibility**: Easy to extend and customize without breaking changes

## CSS Variable Naming Convention

```
--color-[category]-[variant]-[state]
--spacing-[size]
--radius-[size]
--font-[property]-[variant]
--shadow-[size]
--transition-[property]
```

Examples:
- `--color-bg-primary`
- `--color-accent-primary`
- `--color-text-secondary`
- `--spacing-md`
- `--radius-lg`
- `--font-size-base`
- `--shadow-card`

## Next Steps

1. ✅ Create this plan document
2. ⏳ Set up CSS variables and global styles
3. ⏳ Implement 10+ core components
4. ⏳ Create demo showcase in App.tsx
5. ⏳ Test and refine components
6. ⏳ Add documentation

---

**Estimated Timeline**: 2-3 hours for full implementation
**Files to Create**: ~25-30 files (components, styles, demos)
**Lines of Code**: ~2000-2500 lines
