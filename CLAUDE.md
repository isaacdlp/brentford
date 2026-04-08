# Valantum — Project Brief for Claude

This file documents all key facts, brand decisions, and guidelines for building and iterating on the Valantum website. Read this before making any changes.

---

## Identity

| Field        | Value |
|--------------|-------|
| Company      | Valantum LLC |
| Website      | valantum.com |
| Entity Type  | US Registered Investment Advisor (SEC) |
| Tagline      | "Where Capital Meets Conviction" |
| Target Client | High-net-worth individuals, family offices, sophisticated investors |
| Tone          | Confident, institutional, elegant — never loud or salesy |

---

## Color Palette

| Name               | Hex       | Role |
|--------------------|-----------|------|
| Midnight Navy      | `#0D1F3C` | Primary — authority, trust, headlines, dark surfaces |
| Navy Dark          | `#071429` | Footer, deepest backgrounds |
| Navy Mid           | `#122844` | Contact/CTA sections |
| Metallic Champagne | `#C8A96A` | Accent — icons, eyebrow labels, CTA buttons, borders |
| Champagne Dark     | `#B8924E` | Hover states for champagne elements |
| Champagne Light    | `#D9BF8E` | Hero italic text, subtle tints |
| Slate Grey         | `#5D6B82` | Secondary text, supporting UI elements |
| Cream / Off-White  | `#F8F3EC` | Background — alternate sections (warmer, more luxurious than pure white) |
| Border             | `#E2D8CC` | Subtle dividers and card outlines |

**Usage rules:**
- Navy backgrounds → white or champagne text
- Cream backgrounds → navy text, champagne accents
- Never use bright gold or yellow — champagne must feel muted and refined
- Avoid pure black (#000000) — use navy-dark instead

---

## Typography

| Role     | Font               | Weight / Style |
|----------|--------------------|----------------|
| Headings | Cormorant Garamond | 300–600, italic for emphasis |
| Body     | Inter              | 300–600 |

- H1: `clamp(2.8rem, 5.5vw, 5.2rem)` — light weight (300–400), line-height 1.08–1.12
- H2: `clamp(2rem, 3.5vw, 3.2rem)`
- Eyebrow labels: Inter, 0.68rem, 600 weight, 0.22em letter-spacing, ALL CAPS, champagne color
- Body: 1rem / 1.72 line-height
- Load both fonts from Google Fonts

---

## Lines of Business (4 Core Services)

### 1. Wealth Management
- **Target**: High-net-worth individuals and family offices
- **Key services**: Investment management, tax optimization, estate/legacy planning coordination, family office services
- **Messaging**: Personalized, multigenerational, fiduciary, "quarterback of your financial life"

### 2. Fund Management
- **Strategies**: Real Estate (core/value-add/opportunistic), Venture Capital, Private Equity (buyout/growth/special situations), Hedge Funds
- **Messaging**: Institutional rigor, endowment-level discipline, access to strategies "previously reserved for the largest institutions"

### 3. Technology Secondaries
- **What it is**: Pre-IPO access to late-stage private companies; buying existing positions from early investors/employees
- **Key features**: Secondary purchases, primary allocations, founder/employee liquidity, portfolio construction
- **Messaging**: "Before they become household names", asymmetric returns, coveted access, proprietary network

### 4. Stock Loan Financing
- **What it is**: Securities-based lending against publicly traded equity
- **Key features**: Portfolio-based loans, tax deferral (no taxable sale event), non-recourse structures, preserve market exposure
- **Messaging**: "Unlock liquidity without surrendering upside"

---

## Messaging Rules — What to Say and What NOT to Say

### ✅ DO use
- "Institutional-grade", "institutional rigor", "endowment-level"
- "Seasoned", "rigorous", "disciplined", "process-driven"
- "Discerning", "sophisticated", "high-net-worth", "family office"
- "Multigenerational", "long-term", "generational wealth"
- "Fiduciary", "SEC-registered", "acting in your best interest"
- "Access", "network", "relationships" (implies connections without numbers)
- "Thoughtful", "personalized", "direct access"

### ❌ DO NOT include
- Specific AUM figures (e.g., "$500M under management")
- Specific team/headcount numbers
- Specific client count or portfolio count
- Performance figures or return numbers of any kind
- Years-in-business figures (unless confirmed accurate)
- Any specific fund names or company names as clients/investments
- Superlatives without backing: "largest", "best", "most successful"

---

## Visual Style

### Photography
- Style: Aspirational, lifestyle-focused, warm natural light, high-end editorial
- Subjects: Yachts/superyachts, vineyards, horse racing, luxury estates (interior and exterior), happy wealthy families outdoors, infinity pools, private jets, coastal estates
- Treatment: Always apply a dark navy overlay (40–65% opacity) on hero images
- Source: Unsplash CDN — `https://images.unsplash.com/photo-{ID}?auto=format&fit=crop&w={W}&q=80`

### Key Unsplash Photo IDs
| Subject | ID |
|---------|-----|
| Manhattan skyline (hero) | `1486325212027-8081e485255e` |
| Modern luxury home exterior (hero) | `1600596542815-ffad4c1539a9` |
| Superyacht at sea (hero/lifestyle) | `1567899378494-47b22a2ae96a` |
| Vineyard at golden hour (hero/lifestyle) | `1516594915697-87eb3b1c14ea` |
| Horse racing | `1553284966-19b8815c7817` |
| Happy wealthy family outdoors | `1511895426328-dc8714191011` |
| Elegant estate interior (Wealth Mgmt) | `1600566752355-35792bedcfea` |
| Modern glass building (Fund Mgmt) | `1560518883-ce09059eeffa` |
| Technology/circuit board (Tech) | `1518770660439-4636190af475` |
| Financial charts/screens (Stock Loan) | `1611974789855-9c2a0a7236a3` |
| Luxury pool / villa | `1520250497591-112f2f40a3f4` |
| Portrait/advisor meeting | `1568605117036-5fe5e7bab0b7` |

### Icons
- All inline SVG, stroke-based (not filled), stroke-width: 1.4–1.5
- Color: `var(--champagne)` on dark backgrounds; `var(--champagne)` on cream
- Size: 30–40px in section headers, 18–22px in feature lists

---

## Page Structure (index.html)

```
#nav              — Fixed navigation, transparent → navy on scroll
#hero             — Full-viewport slideshow (4 images), Ken Burns effect, 7s interval
#philosophy       — 4 pillars strip on cream bg (Fiduciary, Long-term, Rigor, Personal)
#services         — 2×2 service card grid on white bg
#lifestyle        — Mosaic grid (4 images) on navy-dark bg
#wealth-management — Service detail: image left, content right (white bg)
#fund-management  — Service detail: content left, image right (cream bg)
#tech-secondaries — Service detail: image left, content right (white bg)
#stock-loan       — Service detail: content left, image right (cream bg)
#about            — Approach section: 3-column cards on navy bg + quote
#insights         — 3 article cards on cream bg
#contact          — CTA section on navy-mid bg (centered, full-width)
#footer           — Dark navy: brand + 4-col nav + legal disclaimer
```

---

## File Structure

```
valantum.com/
  index.html          ← Main single-page website
  css/
    main.css          ← All styles (design system, layout, responsive, animations)
  js/
    main.js           ← Slideshow, nav scroll, reveal animations, mobile menu
  CLAUDE.md           ← This file
  store/              ← Legacy directory — ignore, do not modify
```

---

## Components & Interactions

| Component | Behavior |
|-----------|----------|
| Hero slideshow | 4 images, 7s interval, JS-controlled opacity crossfade, CSS Ken Burns zoom |
| Navigation | Fixed; transparent on hero, `rgba(7,20,41,.97)` on scroll (>50px) |
| Nav dropdown | CSS hover-driven, appears on "Capabilities" hover, champagne top border |
| Mobile menu | Hamburger at <768px, stacked links with full-width overlay |
| Scroll reveal | IntersectionObserver, threshold 0.1, `translateY(26px)` → `translateY(0)` |
| Stagger | Grid children (pillars, cards, insights) get `.stagger-1` through `.stagger-4` |
| Lifestyle mosaic | CSS Grid explicit placement: item 1 tall (rows 1–2), item 4 wide (cols 2–3) |

---

## Reference Websites

1. **Corient** — https://corient.com/us/en — Primary design reference. Note their clean hierarchy, confident large typography, understated color palette, and limited use of decoration.
2. **Glenmede** — https://www.glenmede.com — Secondary reference. Focus on institutional credibility, fiduciary emphasis, and conservative elegance.

---

## Legal / Compliance (Required on Every Page)

Always include this disclaimer in the footer:

> "Valantum LLC is a Registered Investment Advisor with the U.S. Securities and Exchange Commission. Registration does not imply a certain level of skill or training. The information on this website is for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any security. Investing involves risk, including the possible loss of principal. Past performance is not indicative of future results. Alternative investments involve unique risks and are not suitable for all investors."

---

## Responsive Breakpoints

| Breakpoint | Behavior changes |
|------------|-----------------|
| >960px | Full desktop: 2-col services, side-by-side details, 3-col insights |
| ≤960px | Services stack to 1-col, details stack, mosaic reflows to 2-col |
| ≤768px | Mobile nav (hamburger), hero text shrinks |
| ≤480px | All grids 1-col, buttons stack vertically |
