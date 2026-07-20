# Resultant Landing Page

A single responsive page built at `/` (replacing the placeholder in `src/routes/index.tsx`).

## Layout

### Header (all breakpoints)

- Left: "Resultant" wordmark logo(the logo has to be made using the work Resultant)
- Right: two dropdowns — "Iteration" and "Agent count"
- On mobile the two dropdowns stay in the header (compact), stacked if needed

### Hero

- Desktop / tablet: two-column grid
  - Left column: form card
    - Board (select)
    - Year (select, options 1990 → current year)
    - Roll no. (text input)
    - Registration no. (text input)
    - Submit button
  - Right column: image placeholder, solid black, 16:9 (YouTube thumbnail ratio), `aspect-video`, rounded  
  Also has a download button
- Mobile: single column — form on top, image below

### Footer

- Centered text: "© {year} Resultant. All rights reserved. Developed by ItsshimantoMe."

## Styling

- Sans-serif system font stack (Tailwind default `font-sans`)
- Use existing semantic tokens (`bg-background`, `text-foreground`, `border`, `bg-primary`, etc.) — no hardcoded colors except the intentional black hero image placeholder
- Responsive via Tailwind breakpoints (`md:` for tablet+, grid → stacked on mobile)
- Follow the responsive header pattern (`grid-cols-[minmax(0,1fr)_auto]` on mobile, `sm:flex`) so the logo and dropdowns don't collide on narrow screens

## Files to change

- `src/routes/index.tsx` — replace placeholder with the full page (header + hero + footer)
- `src/routes/__root.tsx` — update `head()` title/description/OG tags to "Resultant"
- Reuse existing shadcn primitives: `@/components/ui/select`, `input`, `label`, `button`, `card` (view first; add via shadcn if any are missing)

## Verification

After building, drive Playwright against `http://localhost:8080` at three viewports (375, 768, 1280), screenshot each, and confirm:

- Header shows logo + both dropdowns
- Form fields are present and the Year dropdown lists from 1990
- Hero image renders in 16:9 to the right on desktop/tablet, below the form on mobile
- Footer shows the "Itsshimanto" credit
- No console errors