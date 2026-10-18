# A Little World of Nitya ✨
> A personalized, interactive birthday celebration website and digital scrapbook.

Built with **HTML5, CSS3, and Vanilla JavaScript**, with zero dependencies, no complex frameworks, no database, and no API keys required. It works straight out of the box in any browser and can be deployed in seconds to any static web hosting platform (GitHub Pages, Netlify, Vercel, Cloudflare Pages, etc.).

---

## 🎂 Features

1. **The Surprise Invitation (Digital Envelope)**
   - Interactive sealed gift envelope overlay with a smooth opening animation and multi-color celebratory confetti burst.
2. **The Birthday Hero with Restrained Parallax**
   - Editorial headline ("Happy Birthday, Nitya!"), heartfelt subheading, and an interactive 4-photo Polaroid collage with washi-tape details.
   - Restrained, subtle parallax on desktop where the Polaroid photographs move at slightly different gentle speeds as you scroll, creating natural depth. Automatically disabled on touchscreens and when reduced motion is preferred.
   - Clicking any hero photo opens that exact photo directly in the lightbox.
3. **The Photo Scrapbook (All 23 Memories)**
   - Organic Polaroid layout with subtle rotations, shadows, and natural captions.
   - Interactive category filter tabs showing exact counts:
     - *All Memories (23)*
     - *Festive Moments (6)*
     - *Candid Chaos (6)*
     - *Little Everyday Moments (5)*
     - *Celebration Mode (6)*
   - Fullscreen **Lightbox Modal** with:
     - Crisp image display with no face-cropping (`object-fit: contain`).
     - Filter-aware circular previous and next navigation (cycles only within the selected category).
     - Accurate image counter (e.g., `2 of 6` when filtered, or `3 of 23` in all view).
     - Full accessibility with focus trap inside the modal and focus restoration to the trigger card upon closing.
     - Keyboard arrow keys (`←`, `→`) and `Escape` support.
     - **Mobile touch swipe gestures** (swipe left or right to browse photos).
     - Automatic fallback styling if a photo is missing.
4. **Make a Wish (Interactive Cake)**
   - Handcrafted illustrated birthday cake with 3 animated candle flames.
   - Tap "Blow out the candles & make a wish" to extinguish the flames with animated smoke puffs, trigger a medium celebratory confetti shower, and reveal a warm birthday wish.
   - Tap "Relight & make another wish" to repeat anytime.
5. **A Little Birthday Letter**
   - Personal stationery card with wax seal and timestamp.
   - Clean folding and unfolding toggle with smooth transition and a delicate first-time sparkle effect.
   - Warm, respectful, friendly message signed by yuvi.
6. **Optional Video Memory**
   - Clean native HTML5 video player for `assets/video/birthday-video.mp4`.
   - Never autoplays sound or media unexpectedly.
   - Gracefully and automatically hides if video is disabled or the file is missing.
7. **Closing & Celebration Replay**
   - "Celebrate again 🎊" button to trigger fresh confetti showers.
   - "Back to memories ↑" button for smooth scrolling.

---

## 📁 File Structure

```text
├── index.html                     # Main semantic HTML5 webpage
├── style.css                      # CSS3 custom styles, scrapbook aesthetic, animations
├── script.js                      # Vanilla JavaScript (CONFIG, confetti, parallax, lightbox, filters)
├── README.md                      # Setup and deployment guide
├── assets/
│   ├── photos/                    # 23 scrapbook photographs
│   │   ├── photo-01.jpeg
│   │   ├── photo-02.jpeg
│   │   └── ... through photo-23.jpeg
│   └── video/                     # Optional birthday video
│       └── birthday-video.mp4
└── test/
    └── logic.test.ts              # Unit tests for navigation and swipe logic
```

---

## 🛠️ How to Customize

All text, names, messages, and photos can be edited in **one single place** right at the top of `script.js` in the `CONFIG` object:

```javascript
const CONFIG = {
  recipientName: "Nitya",         // Change to any name
  senderName: "yuvi",             // Sender name in lowercase
  siteTitle: "A Little World of Nitya",
  
  heroGreeting: "Happy Birthday, Nitya!",
  heroSubheading: "Hope your day is packed with smiles, great food, and good company.",
  
  letterDate: "October 2026",
  letterText: `Happy birthday, Nitya! 🥳
...`,

  wishTitle: "Before you go, make a wish! 🎂",
  wishMessage: "Wishing you happiness, good health...",

  showVideo: true,                 // Set to false to hide video section
  videoPath: "assets/video/birthday-video.mp4",

  photos: [
    {
      id: 1,
      src: "assets/photos/photo-01.jpeg",
      title: "Festive celebration",
      category: "Festive moments",
      caption: "Dressed up and glowing in celebration",
      alt: "Photo description"
    },
    // ... photos 2 through 23
  ]
};
```

### Adding Your Own Photos:
1. Copy your 23 photos into `assets/photos/` and name them:
   `photo-01.jpeg`, `photo-02.jpeg`, ... `photo-23.jpeg`.
2. (Optional) If you have a video clip, place it at `assets/video/birthday-video.mp4`. If you don't have a video, set `showVideo: false` in `script.js` or simply remove the video file. The site automatically detects missing videos and hides the section with zero visual glitches.

---

## 🚀 How to Run Locally

### Option 1: Direct in Browser (No installation needed)
Double-click `index.html` to open it in Google Chrome, Safari, Firefox, or Edge.

### Option 2: Using Any Lightweight Local Server
- **Python:**
  ```bash
  python3 -m http.server 3000
  ```
  Open `http://localhost:3000` in your browser.
- **Node (npx serve):**
  ```bash
  npx serve .
  ```
- **Vite:**
  ```bash
  npm run dev
  ```

---

## 🌐 Free 1-Minute Deployment

### 1. GitHub Pages
1. Push this repository to GitHub.
2. In your GitHub repository, go to **Settings** -> **Pages**.
3. Under **Branch**, select `main` (or `master`), select `/ (root)` folder, and click **Save**.
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

### 2. Netlify
1. Go to [netlify.com](https://www.netlify.com/) and drag-and-drop the project folder onto the dashboard.
2. It goes live instantly with an HTTPS link you can send to Nitya!

### 3. Vercel
1. Run `npx vercel` in the terminal or import your GitHub repository on [vercel.com](https://vercel.com).
2. Deploy as a static website with zero configuration.

---

## ♿ Accessibility and Mobile-First Design
- **Fully responsive**: optimized for viewports from 360px mobile up to 1440px desktop.
- **Accessible controls**: semantic buttons, ARIA labels, focus states, and dialog focus trap.
- **Motion sensitive**: respects `prefers-reduced-motion` settings.
- **Privacy-first**: zero third-party tracking, zero cookies, zero external API dependencies.
