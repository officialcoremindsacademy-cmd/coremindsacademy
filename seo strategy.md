
## 🔍 STEP 6 — SEO STRATEGY (DETAILED)

### 6.1 Keyword Placement Strategy

| Location | Content | Priority |
|---|---|---|
| `<title>` | `[Primary Keyword] \| [INPUT_NAME] \| [Secondary Keyword]` | P1 |
| `<meta description>` | Include primary keyword + phone + CTA within 155 chars | P1 |
| `<h1>` | Primary keyword + brand name (one per page only) | P1 |
| `<h2>` tags | Secondary keywords, service names, location terms | P2 |
| First 100 words | Primary keyword naturally embedded | P1 |
| Image `alt` | Describe content + keyword (e.g., "Tantrik baba in Vrindavan") | P2 |
| Anchor text (internal) | Use keywords as link text, never "click here" | P2 |
| URL slugs | `keyword-location.html` format | P1 |

### 6.2 On-Page SEO Checklist (Per Page)

```
[ ] Unique <title> (50–60 chars, includes primary keyword)
[ ] Unique <meta description> (140–155 chars, includes CTA)
[ ] One canonical <link rel="canonical"> pointing to self
[ ] Open Graph tags (og:title, og:description, og:image, og:url)
[ ] One H1 per page only
[ ] H2/H3 hierarchy for sections
[ ] Image alt tags on all <img> elements
[ ] Internal link to at least 3 related pages
[ ] Google Maps iframe embedded (local SEO signal)
[ ] No duplicate content (each page unique)
[ ] Mobile responsive layout verified
[ ] Language attributes on <html lang="en">
[ ] robots.txt allows all crawlers
[ ] sitemap.xml lists all pages
```

### 6.3 Technical SEO

```html
<!-- robots.txt content -->
User-agent: *
Allow: /
Sitemap: [INPUT_DOMAIN]/sitemap.xml
```

**sitemap.xml structure:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>[INPUT_DOMAIN]/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- Add all sub-pages below -->
</urlset>
```

**Schema Markup (Local Business — Add to every page `<head>`):**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "[INPUT_NAME]",
  "telephone": "[INPUT_PHONE]",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "[INPUT_LOCATION]",
    "postalCode": "[INPUT_PINCODE]",
    "addressCountry": "IN"
  },
  "url": "[INPUT_DOMAIN]",
  "priceRange": "₹₹",
  "openingHours": "Mo-Su 06:00-22:00"
}
</script>
```

### 6.4 Content Uniqueness Strategy

- ✅ Each page must have minimum 300 unique words
- ✅ Do NOT copy content across pages — reframe same service for different intent
- ✅ Use semantic variations: "black magic removal" ≠ "kala jadoo hatana" ≠ "negative energy cleansing"
- ✅ Location pages must mention the city at least 3–4 times naturally
- ❌ NEVER use spinner tools or AI-detectable spun content
- ❌ NEVER embed the homepage text verbatim on sub-pages

---

## 📄 STEP 7 — SEO PAGES STRATEGY

### 7.1 Required Page Types

| Type | Count | Naming Format |
|---|---|---|
| Homepage | 1 | `index.html` |
| About Page | 1 | `about.html` |
| Services Hub | 1 | `services.html` |
| Contact Page | 1 | `contact.html` |
| Service-Specific Pages | 6–10 | `[service-slug].html` |
| Location-Specific Pages | 3–8 | `[city-service].html` |
| Blog/Article Pages | 3–5 (optional) | `[topic-slug].html` |

**Total recommended pages: 17–26**

### 7.2 Service-Specific Pages (Mandatory)

Create one page per core service. Each page:
- Unique H1 with service + location keyword
- 400–600 words unique content
- Embedded testimonial (pick 1 relevant one)
- CTA (call/WhatsApp) above fold and at end
- Internal links to 3 other service pages + homepage



### 7.3 Location Pages Strategy

Target nearby cities. Structure:
```
[service]-[city].html  
```

Content variation per location page:
1. Change city name throughout (3–4 natural occurrences)
2. Add local reference ("serving people of [city] for X years")
3. Mention local landmark or region if possible
4. Unique intro paragraph per page

### 7.4 Internal Linking Structure

```
Homepage
├── About
├── Services (hub)
│   ├── Service Page 1
│   ├── Service Page 2
│   └── Service Page N
├── Location Pages (1–8)
│   └── Each links back to Services hub + homepage
├── Blog Pages (optional)
└── Contact
```

**Each page must link:**
- Back to homepage
- To services page
- To 2–3 related service/location pages
- To contact page

**SEO Internal Link Section (bottom of all pages):**
```html
<section class="seo-links-section">
  <h2>Explore More</h2>
  <div class="links-grid">
    <a href="service-1.html">Service 1 Name</a>
    <a href="service-2.html">Service 2 Name</a>
    <!-- 8–12 total links -->
  </div>
</section>
```