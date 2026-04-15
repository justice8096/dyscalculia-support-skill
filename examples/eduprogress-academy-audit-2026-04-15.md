# Web Site Audit Report
## EduProgress Academy — K-12 Math Learning Platform

**Audit Date**: 2026-04-15
**URL**: https://eduprogress.example.com
**Target Audience**: K-12 students (ages 6-18), parents, and educators
**Framework**: React 18, Next.js 14, Tailwind CSS
**Auditor**: Web Site Audit Skill v1.1.0

---

## Scorecard

| Dimension                    | Score | Grade | Critical Issues |
|------------------------------|-------|-------|-----------------|
| Dyslexia-Friendly Design     | 2/5   | D     | 4               |
| Dyscalculia-Friendly Design  | 1/5   | F     | 5               |
| WCAG 2.1 AA Accessibility    | 3/5   | C     | 2               |
| UX / Usability               | 4/5   | B     | 0               |
| Visual Design                | 4/5   | B     | 0               |
| Code Quality                 | 3/5   | C     | 1               |
| Performance                  | 3/5   | C     | 1               |
| SEO & Security               | 4/5   | B     | 0               |
|------------------------------|-------|-------|-----------------|
| **Weighted Overall**         | **2.8/5** | **C** | **13**        |

**Weighted calculation**: (2×0.15)+(1×0.10)+(3×0.20)+(4×0.13)+(4×0.08)+(3×0.12)+(3×0.12)+(4×0.10) = 2.84

---

## 1. Dyslexia-Friendly Design — 2/5 (D)

### What's Working
- Clean, uncluttered layout with generous whitespace between sections
- Headings are descriptive and preview content well
- Navigation is consistent across all pages

### Issues Found

🔴 **Critical: Body text uses 14px serif font (Georgia)**
- Location: Global stylesheet, `body { font-family: Georgia, serif; font-size: 14px; }`
- Impact: Georgia is a serif font that creates visual crowding for dyslexic readers. 14px is below the 16px minimum.
- WCAG: 1.4.12 (Text Spacing)

🔴 **Critical: Justified text alignment on lesson content**
- Location: `.lesson-content { text-align: justify; }`
- Impact: Justified text creates uneven word spacing ("rivers of white") that disrupts tracking for dyslexic readers.

🔴 **Critical: Pure black on white (#000000 on #FFFFFF)**
- Location: All text content uses `color: #000; background: #fff;`
- Impact: Maximum contrast creates visual stress. Off-white backgrounds (#F5F5DC, #FAFAF0) significantly reduce eye strain for dyslexic users.

🔴 **Critical: Line length exceeds 90 characters on desktop**
- Location: Lesson pages, blog posts
- Impact: Lines over 65 characters cause dyslexic readers to lose their place when returning to the left margin.

🟡 **Major: No reading mode or dyslexia-friendly toggle**
- The platform serves K-12 students, a population where 5-10% have dyslexia, yet offers no way to adjust typography, spacing, or contrast.

🟡 **Major: Line height is 1.3 (below 1.5 minimum)**
- Location: `.prose { line-height: 1.3; }`
- Impact: Insufficient vertical spacing causes line merging for dyslexic readers.

🟢 **Minor: Letter spacing not set (browser default ~0)**
- Recommendation: Add `letter-spacing: 0.12em` to body text for improved character separation.

### Recommendations

**Quick wins (< 1 hour):**
```css
body {
  font-family: 'Lexend', 'Atkinson Hyperlegible', system-ui, sans-serif;
  font-size: 18px;
  line-height: 1.6;
  letter-spacing: 0.05em;
  color: #1a1a2e;
  background-color: #faf9f6;
}
.lesson-content {
  text-align: left;
  max-width: 65ch;
  margin: 0 auto;
}
```

**Medium effort (1-3 days):**
- Implement a dyslexia-friendly reading mode toggle (see `examples/react/DyslexiaToggle.tsx` in this repo)
- Add CSS custom properties for user-adjustable typography

---

## 2. Dyscalculia-Friendly Design — 1/5 (F)

### What's Working
- Currency values consistently use the $ symbol

### Issues Found

🔴 **Critical: Math-based account verification**
- Location: Login page, "Verify you're human: What is 15 + 7?"
- Impact: Math CAPTCHAs are exclusionary by design for dyscalculic users. This is the single most harmful pattern for number-anxious students.
- Fix: Replace with image-based CAPTCHA, honeypot field, or invisible reCAPTCHA.

🔴 **Critical: Students required to calculate grade percentages manually**
- Location: Grade dashboard shows "Raw Score: 47/62" without computing the percentage or grade letter.
- Impact: Forces mental division, a task that causes acute anxiety for dyscalculic learners.

🔴 **Critical: Dense progress tables with no row tracking**
- Location: Student progress page — 12-column table with no zebra striping, no row hover, 4px cell padding.
- Impact: Dyscalculic students cannot visually track across rows. Data becomes a wall of indistinguishable numbers.

🔴 **Critical: Countdown timer on timed assessments with no pause/extend option**
- Location: Quiz pages — `03:42` counts down with no way to pause or request additional time.
- Impact: Rapidly changing numbers create panic. IDEA requires extended time as a standard accommodation.

🔴 **Critical: Inconsistent decimal usage in pricing**
- Location: Pricing page shows "$9.99/mo", "$29/mo", "$99.00/yr" — three different decimal conventions.
- Impact: "$99.00" can be misread as "$9,900" by dyscalculic users when decimal conventions are inconsistent.

🟡 **Major: Percentages shown without plain-language alternatives**
- Location: "Your child scored in the 73rd percentile" — no explanation of what percentile means.
- Fix: Add "Your child scored better than about 7 out of 10 students."

🟡 **Major: Large numbers displayed without grouping aids**
- Location: "Total practice problems completed: 14729"
- Fix: Display as "14,729" or better yet "nearly 15,000 problems completed."

### Recommendations

**Immediate (remove blockers):**
1. Replace math CAPTCHA with reCAPTCHA v3 (invisible)
2. Auto-calculate and display grade percentages and letter grades
3. Add pause/extend option to all timed assessments

**Quick wins:**
```css
/* Progress tables */
.progress-table tr:nth-child(even) { background: #f8f7f4; }
.progress-table tr:hover { background: #e8e6df; }
.progress-table td {
  padding: 12px 16px;
  font-variant-numeric: tabular-nums;
}
.progress-table .numeric { text-align: right; }
```

**Medium effort:**
- Add text summaries above all data tables ("This week, Alex completed 23 problems with 87% accuracy")
- Standardize all currency to `$X.XX` format
- Add plain-language alternatives to all percentages and statistics

---

## 3. WCAG 2.1 AA Accessibility — 3/5 (C)

### Perceivable
- ✅ Images have alt text
- ✅ Color contrast meets 4.5:1 for most text (though pure B&W is not ideal for dyslexic users)
- 🔴 No captions on instructional videos (7 videos found without captions)
- 🟡 Some icons convey meaning without text labels (achievement badges)

### Operable
- ✅ Skip-to-content link present
- ✅ Logical tab order
- 🔴 Focus indicators removed: `*:focus { outline: none; }` in global styles
- 🟡 Some dropdown menus not keyboard-accessible (require mouse hover)

### Understandable
- ✅ `lang="en"` declared
- ✅ Form labels present on most inputs
- 🟡 Error messages are generic ("Invalid input" instead of "Please enter a number between 1 and 100")

### Robust
- ✅ Valid HTML structure (no broken nesting)
- 🟡 Some ARIA roles used incorrectly (`role="button"` on `<div>` elements without keyboard handlers)

### Recommendations
```css
/* Restore focus indicators */
*:focus-visible {
  outline: 3px solid #4A90D9;
  outline-offset: 2px;
}
```

---

## 4. UX / Usability — 4/5 (B)

### What's Working
- Clear information architecture with logical hierarchy
- Responsive design works well on tablet and phone
- Breadcrumbs on all nested pages
- Search functionality with autocomplete
- Progress indicators on multi-step workflows

### Issues Found
- 🟡 Mobile hamburger menu requires two taps to access (first tap opens, second scrolls to section)
- 🟢 404 page lacks search bar and helpful navigation links

---

## 5. Visual Design — 4/5 (B)

### What's Working
- Consistent color palette (blue/green educational theme)
- Clear visual hierarchy with distinct heading levels
- Whitespace used effectively between content sections
- Illustrations are high-quality and culturally diverse

### Issues Found
- 🟢 Inconsistent button styles across pages (primary buttons use 3 different border-radius values)
- 🟢 Achievement badge icons lack sufficient visual distinction between levels

---

## 6. Code Quality — 3/5 (C)

### What's Working
- Semantic HTML for most content (`<article>`, `<nav>`, `<main>`, `<aside>`)
- TypeScript used throughout with strict mode
- Component architecture is clean and well-organized

### Issues Found
- 🔴 27 `<div>` elements with `onClick` handlers instead of `<button>` elements
- 🟡 Duplicate `id` attributes found on quiz pages (dynamic IDs reuse templates)
- 🟡 Several `any` casts in TypeScript quiz components
- 🟢 Some CSS uses `!important` overrides (12 instances)

### Recommendations
```tsx
// Before (inaccessible)
<div className="btn" onClick={handleSubmit}>Submit Answer</div>

// After (accessible)
<button type="button" className="btn" onClick={handleSubmit}>Submit Answer</button>
```

---

## 7. Performance — 3/5 (C)

### Core Web Vitals (estimated)
| Metric | Value | Target | Status |
|--------|-------|--------|--------|
| LCP (Largest Contentful Paint) | 3.8s | < 2.5s | 🟡 Needs improvement |
| FID (First Input Delay) | 85ms | < 100ms | ✅ Good |
| CLS (Cumulative Layout Shift) | 0.18 | < 0.1 | 🟡 Needs improvement |

### Issues Found
- 🔴 Hero images not using `<picture>` with WebP/AVIF formats (3.2MB PNG on landing page)
- 🟡 CLS caused by late-loading ad banners shifting content
- 🟡 No `loading="lazy"` on below-fold images
- 🟢 Bundle size 487KB gzipped (acceptable but could be code-split further)

### Recommendations
```html
<picture>
  <source srcset="/hero.avif" type="image/avif">
  <source srcset="/hero.webp" type="image/webp">
  <img src="/hero.jpg" alt="Students learning math" width="1200" height="600" loading="eager">
</picture>
```

---

## 8. SEO & Security — 4/5 (B)

### SEO
- ✅ Unique `<title>` and `<meta description>` per page
- ✅ Proper heading hierarchy (single `<h1>`, logical nesting)
- ✅ Structured data (Schema.org Course, Organization)
- ✅ Sitemap.xml and robots.txt present
- 🟢 Some pages missing Open Graph tags

### Security
- ✅ HTTPS with valid certificate
- ✅ `X-Content-Type-Options: nosniff`
- ✅ `X-Frame-Options: DENY`
- 🟡 Missing `Content-Security-Policy` header
- 🟡 Missing `Strict-Transport-Security` header

---

## Dyslexia-Friendly Deep Dive

### Typography Checklist
- [ ] ❌ Font family is sans-serif — **Uses Georgia (serif)**
- [ ] ❌ Body text ≥ 16px — **14px**
- [ ] ❌ Line height ≥ 1.5× — **1.3**
- [ ] ❌ Letter spacing ≥ 0.12em — **Not set**
- [ ] ❌ Word spacing ≥ 0.16em — **Not set**
- [ ] ❌ Line length 45-65 characters — **~90 characters**
- [ ] ❌ Text is left-aligned — **Justified in lesson content**
- [ ] ✅ No all-caps blocks for body text
- [ ] ❌ Font differentiates similar characters — **Georgia has ambiguous I/l**

**Result: 1/9 — Failing**

### Color & Contrast Checklist
- [ ] ❌ Avoids pure black on white — **Uses #000 on #FFF**
- [ ] ✅ Normal text contrast ≥ 4.5:1
- [ ] ✅ Large text contrast ≥ 3:1
- [ ] ✅ UI component contrast ≥ 3:1
- [ ] ✅ Information not conveyed by color alone
- [ ] ❌ User can toggle high-contrast / dyslexia mode — **No toggle**

**Result: 4/6 — Needs Improvement**

### Content & Layout Checklist
- [ ] ✅ Plain language used
- [ ] ✅ Short paragraphs
- [ ] ✅ Descriptive headings
- [ ] ✅ Adequate whitespace
- [ ] ✅ No text in images
- [ ] ✅ Tables have headers
- [ ] ✅ Consistent navigation
- [ ] ✅ Predictable layouts

**Result: 8/8 — Strong**

### Assistive Features Checklist
- [ ] ✅ Semantic HTML (mostly)
- [ ] ✅ Works at 200% zoom
- [ ] ✅ Touch targets ≥ 44×44px
- [ ] ❌ Focus indicators removed
- [ ] ✅ Keyboard accessible (mostly)
- [ ] ✅ Text alternatives present

**Result: 5/6 — Good**

---

## Dyscalculia-Friendly Deep Dive

### Number Presentation
- [ ] ❌ Numbers rounded where precision isn't critical — **Raw scores shown as "47/62"**
- [ ] ❌ Decimals used consistently — **Mixed: "$9.99", "$29", "$99.00"**
- [ ] ❌ Percentages have plain-language alternatives — **"73rd percentile" unexplained**
- [ ] ❌ Large numbers use words — **"14729" problems**
- [ ] ❌ Generous spacing around numbers — **Numbers cramped inline**
- [ ] ❌ Numbers accompanied by context — **Many raw numbers without explanation**
- [ ] ✅ Currency symbols always shown

**Result: 1/7 — Failing**

### Data Table Design
- [ ] ❌ Text summaries for tables — **No summaries**
- [ ] ❌ Zebra striping — **No alternating colors**
- [ ] ❌ Row hover highlight — **No hover styling**
- [ ] ❌ Generous cell padding — **4px padding**
- [ ] ❌ Numbers right-aligned with tabular-nums — **Left-aligned**
- [ ] ❌ Tables ≤ 5 columns — **12-column progress table**
- [ ] ❌ Text alternative for complex tables — **No alternative view**

**Result: 0/7 — Critical Failure**

### Forms & Input
- [ ] ❌ Known values pre-filled — **Students must re-enter IDs**
- [ ] ❌ Flexible number formats — **Rejects "1,000" (requires "1000")**
- [ ] ❌ No mental math required — **Grade calculation left to student**
- [ ] ❌ Running totals displayed — **No live totals**
- [ ] ❌ Helpful validation errors — **"Invalid input" only**
- [ ] ❌ Fields not cleared on error — **All fields clear on submit failure**
- [ ] ❌ No math CAPTCHA — **"What is 15 + 7?" on login**

**Result: 0/7 — Critical Failure**

---

## Prioritized Action Plan

### Quick Wins (< 1 day)
1. Replace serif font with Lexend/Atkinson Hyperlegible, bump to 18px
2. Set `text-align: left` and `max-width: 65ch` on all content
3. Change background to `#faf9f6`, text to `#1a1a2e`
4. Restore focus indicators (`*:focus-visible`)
5. Add zebra striping and hover to all data tables
6. Auto-calculate and display grade percentages

### Medium Effort (1-2 weeks)
7. Remove math CAPTCHA, replace with reCAPTCHA v3
8. Add pause/extend to timed assessments
9. Build dyslexia-friendly reading mode toggle
10. Add text summaries above all data tables
11. Add captions to all instructional videos
12. Convert hero images to WebP/AVIF with `<picture>`

### Long-term (1-3 months)
13. Implement comprehensive dyscalculia mode with number simplification
14. Build user preference system (font size, spacing, contrast, number format)
15. Add Content-Security-Policy and HSTS headers
16. Redesign progress tables to max 5 columns with card-based mobile alternative

---

## References

- [W3C WCAG 2.1 AA](https://www.w3.org/TR/WCAG21/)
- [British Dyslexia Association Style Guide](https://www.bdadyslexia.org.uk/advice/employers/creating-a-dyslexia-friendly-workplace/dyslexia-friendly-style-guide)
- [Dyscalculia.org Design Standards](https://www.dyscalculia.org/)
- [Web Content Accessibility Guidelines — Understanding SC 1.4.12](https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html)
- [IDEA Section 504 Accommodation Requirements](https://www.ed.gov/laws-and-policy/individuals-disabilities/idea)
