# AZ Catering (Formerly Belly Darbar) · Royal Event Catering

A high-performance, multi-page static web application recreating and elevating the culinary brand **Belly Darbar** (`https://bellydarbar.in/`) under the new brand identity **AZ Catering** for GitHub user **[Aman22kr](https://github.com/Aman22kr)**.

Built using **Vite + React (JSX) + Tailwind CSS + React Router (HashRouter) + Framer Motion**, with client-side state persisted via browser **`localStorage`** and continuous static deployment through **GitHub Actions** to **GitHub Pages**.

---

## 1. Project Overview & Brand Identity

* **Reference Website**: [https://bellydarbar.in/](https://bellydarbar.in/) (Belly Darbar - Chembur, Mumbai)
* **New Brand Name**: **AZ Catering**
* **Target GitHub User**: [Aman22kr](https://github.com/Aman22kr)
* **Culinary Heritage**: Renowned for slow-dum Hyderabadi biryanis, Awadhi kebabs (Galouti, Murgh Malai, Chimichurri Chicken Tikka), 24-hour charcoal Dal Makhani, and live flame tandoor counters.
* **Scope**: Recreated as a full-spectrum catering website with per-plate event packages, dynamic menu explorer, real-time custom quote builder, photo gallery, client reviews, FAQs, inquiry tracking, and video presentation placeholders.

---

## 2. Key Pages & Implemented Features

| Route | Page | Description |
|---|---|---|
| `#/` | **Home Page** | Hero section with fast guest estimator, Belly Darbar heritage story, catering vertical cards, signature dishes, feast packages preview, YouTube video presentation showcase, and verified host testimonials. |
| `#/menu` | **Interactive Menu** | Live search, category tabs (Biryani, Starters, Curries, Breads, Live Counters, Desserts, Coolers), dietary filters (Pure Veg vs. Halal Non-Veg), spice levels, portions, favorite dish bookmarks, and detail modals. |
| `#/packages` | **Feast Packages** | Transparent per-plate tiers: Silver Classic (₹499), Gold Celebration (₹799), Royal Diamond (₹1,299), and Mughlai Dastarkhwan (₹999) with course breakdowns and one-click transfer to Quote Builder. |
| `#/services` | **Catering Services** | Overview of 5 verticals: Grand Weddings, Corporate Summits, House Parties, Live Food Stations, and Bulk Biryani Deg Deliveries. |
| `#/services/:serviceId` | **Service Detail** | Dynamic detail breakdown with guest capacities, staffing ratios, equipment setups, photo galleries, and direct quote shortcuts. |
| `#/quote` | **Custom Quote Builder** | Interactive 5-step event estimator: guest count slider (25 to 1,500+), package tier selection, dish pickers, live food counter add-ons, itemized cost breakdown (subtotal + 5% GST), and booking inquiry registration. |
| `#/gallery` | **Banquet Gallery** | Filterable photo portfolio (Weddings, Corporate, Live Counters, Food Styling) with high-definition lightbox preview modal. |
| `#/reviews` | **Reviews & Ratings** | Aggregated 4.9/5 scorecard and host testimonials, with working review submission form. |
| `#/faq` | **Frequently Asked Questions** | Searchable accordion interface covering tasting sessions, minimum orders, cancellation policies, crockery, and Halal/Jain segregation. |
| `#/contact` | **Contact & Tasting Booking** | Booking inquiry form with automated tracking code generation (`AZ-XXXXX`), commercial kitchen address (Chembur East, Mumbai), operating hours, WhatsApp direct link, and service coverage representation. |
| `#/my-inquiries` | **Inquiry & Quote Tracker** | Client dashboard tracking registered inquiries with live status badges (`In Review`, `Menu Planning`, `Tasting Scheduled`, `Confirmed`), active quote draft, and bookmarked favorite dishes. |
| `*` | **404 Not Found** | Custom culinary 404 handler with quick navigation links back to the home page or menu. |

---

## 3. Technology Stack & Architectural Highlights

* **Build Tool**: Vite 8 with relative asset resolution (`base: './'`).
* **Framework**: React 19 with JSX & TypeScript.
* **Styling**: Tailwind CSS v4 with custom serif typography (`Playfair Display` & `Plus Jakarta Sans`).
* **Routing**: `HashRouter` from `react-router-dom` to ensure direct links and browser page refreshes work seamlessly on GitHub Pages without requiring server-side URL rewrite rules.
* **Icons**: `lucide-react`.
* **Animations**: Normal speed and strong intensity via CSS and Framer Motion, with full compliance for `prefers-reduced-motion`.
* **YouTube Embeds**: Complies with the requirement to render high-definition 16:9 presentation placeholders with playback controls and aspect ratio preservation instead of live iframes.
* **Advertising**: Includes `<AdPlaceholder />`, a compact, unobtrusive banner above the footer for banquet venue partners.
* **Data Persistence**: Browser `localStorage` for:
  * Event inquiry submissions (`az_catering_inquiries`)
  * Custom quote draft state (`az_catering_quote_draft`)
  * Bookmarked favorite dishes (`az_catering_favorites`)
  * User-submitted reviews (`az_catering_reviews`)

---

## 4. Project Structure

```
az-catering/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Authoritative GitHub Actions deployment workflow
├── public/                     # Static public assets
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── AdPlaceholder.tsx      # Reusable advertisement banner
│   │   │   ├── DishCard.tsx           # Menu dish card with dietary & spice tags
│   │   │   ├── DishDetailModal.tsx    # Modal for dish specs & portion guides
│   │   │   └── VideoPlaceholder.tsx   # 16:9 YouTube placeholder
│   │   └── layout/
│   │       ├── Navbar.tsx             # Responsive header with mobile drawer
│   │       └── Footer.tsx             # Footer with kitchen address & ad slot
│   ├── context/
│   │   └── CateringContext.tsx        # React context & LocalStorage synchronization
│   ├── data/
│   │   └── cateringData.ts            # Authentic menu, package, and service data
│   ├── pages/
│   │   ├── AboutPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── FaqPage.tsx
│   │   ├── GalleryPage.tsx
│   │   ├── HomePage.tsx
│   │   ├── MenuPage.tsx
│   │   ├── MyInquiriesPage.tsx
│   │   ├── NotFoundPage.tsx
│   │   ├── PackagesPage.tsx
│   │   ├── QuoteBuilderPage.tsx
│   │   ├── ReviewsPage.tsx
│   │   ├── ServiceDetailPage.tsx
│   │   └── ServicesPage.tsx
│   ├── types/
│   │   └── index.ts                   # TypeScript interfaces
│   ├── App.tsx                        # Route definitions and layout
│   ├── index.css                      # Tailwind theme & typography rules
│   └── main.tsx                       # Entry point
├── .env.example
├── .gitignore
├── index.html                         # Document title, SEO meta, and fonts
├── metadata.json
├── package.json
├── package-lock.json                  # Valid committed npm lockfile
├── tsconfig.json
├── vite.config.ts                     # Configured with base: './'
└── README.md
```

---

## 5. Prerequisites & Local Development

### Prerequisites
* **Node.js**: `v20.x` or `v22.x` (LTS recommended)
* **npm**: `v10.x` or higher

### Step 1: Clone the repository
```bash
git clone https://github.com/Aman22kr/az-catering.git
cd az-catering
```

### Step 2: Install dependencies
Ensure strict installation using the committed lockfile:
```bash
npm ci
```
*(If developing locally without a pre-existing cache, `npm install` may also be used).*

### Step 3: Run the development server
```bash
npm run dev
```
Open `http://localhost:3000` in your web browser.

---

## 6. Production Build & Local Preview

To verify that the application compiles and bundles cleanly for static distribution:

```bash
# 1. Type-check the codebase
npm run lint

# 2. Generate the static production build into /dist
npm run build

# 3. Preview the production build locally
npm run preview
```

The build will emit production files into the `./dist` folder with relative `./assets/...` links.

---

## 7. GitHub Actions Deployment to GitHub Pages

The repository uses the official GitHub Pages deployment workflow configured in `.github/workflows/deploy.yml`.

### Step 1: Configure GitHub Repository Settings
1. Go to your repository on GitHub: `https://github.com/Aman22kr/<repo-name>`.
2. Click on **Settings** > **Pages** (in the left sidebar).
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.

### Step 2: Push to Main Branch
When you push any commit to the `main` branch, the workflow triggers automatically:
```bash
git add .
git commit -m "Deploy AZ Catering static web app"
git push origin main
```

### Step 3: Deployment Workflow Execution
The workflow:
1. Checks out the code using `actions/checkout@v4`.
2. Sets up Node.js 22 with npm caching.
3. Runs `npm ci` and `npm run build`.
4. Uploads the `./dist` directory as the Pages artifact using `actions/upload-pages-artifact@v3`.
5. Deploys to your live GitHub Pages URL (e.g., `https://aman22kr.github.io/<repo-name>/`) using `actions/deploy-pages@v4`.

### Optional Manual Deployment (Alternative)
An optional `deploy` script (`gh-pages -d dist`) is included in `package.json` for manual branch deployments:
```bash
npm run build
npm run deploy
```
*Note: GitHub Actions remains the primary and recommended method.*

---

## 8. Client-Side Persistence via LocalStorage

This application uses browser `localStorage` for state persistence without requiring a backend database:
* `az_catering_inquiries`: Stores submitted event inquiries and quotes with generated tracking codes (`AZ-XXXXX`).
* `az_catering_quote_draft`: Stores the active custom quote state (guest count, selected dishes, package tier, location).
* `az_catering_favorites`: Stores user-bookmarked dish IDs.
* `az_catering_reviews`: Stores user-submitted feedback so new reviews appear immediately in the review list.

**Limitations**:
* Data is stored strictly on the user's specific browser and device.
* Clearing browser cache or switching to Private/Incognito mode will reset saved data to default values.
* It does not create an external server-side database record.

---

## 9. Reusing and Rebranding This Project

To adapt this codebase for another catering brand or client:
1. **Brand Identity**: Update names and taglines in:
   * `/metadata.json`
   * `/index.html` (Title & OpenGraph tags)
   * `src/components/layout/Navbar.tsx` & `Footer.tsx`
2. **Menu & Packages Data**:
   * Edit `src/data/cateringData.ts` to customize dishes, prices per plate, ingredients, package tiers, and testimonials.
3. **Color Theme**:
   * Adjust color tokens in `src/index.css` (e.g. `--color-royal-amber`, `--color-royal-gold`).
4. **GitHub Configuration**:
   * Update the repository URL and username in `package.json` and `README.md`.

---

## 10. License & Credits

* Recreated from reference website: **Belly Darbar** (`https://bellydarbar.in/`)
* Rebranded and developed for: **[Aman22kr](https://github.com/Aman22kr)**
* License: [Apache-2.0](LICENSE)
