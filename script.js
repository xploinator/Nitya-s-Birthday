/**
 * A Little World of Nitya: Interactive Birthday Experience
 * Pure Vanilla JavaScript: zero dependencies, lightweight, responsive.
 */

/* ==========================================================================
   1. EDITABLE CONFIGURATION SECTION
   Customize recipient, sender, messages, and photos here!
   ========================================================================== */
const CONFIG = {
  // Recipient and Sender details
  recipientName: "Nitya",
  senderName: "yuvi", // Sender name in lowercase as requested
  siteTitle: "A Little World of Nitya",
  
  // Hero section texts (no em-dashes, natural human tone)
  heroGreeting: "Happy Birthday, Nitya!",
  heroSubheading: "Hope your day is packed with smiles, great food, and good company.",
  
  // Birthday Letter (exact human tone requested, signed by yuvi)
  letterDate: "October 2026",
  letterText: `Happy birthday, Nitya! 🥳

Hope you have the best day, with lots of laughs, good food, and people who make you happy. Wishing you a year full of exciting moments, new experiences, and plenty of reasons to smile.

Enjoy your day, have fun, and make lots of lovely memories!

Birthday wishes,

yuvi`,

  // Make a Wish section
  wishTitle: "Before you go, make a wish! 🎂",
  wishSubheading: "Take a second, close your eyes, and blow out the candles.",
  wishMessage: "Wishing you happiness, good health, exciting adventures, and plenty of reasons to smile every single day. Here is to a fantastic year ahead!",

  // Optional Video Configuration
  showVideo: true,
  videoPath: "assets/video/birthday-video.mp4",
  videoTitle: "A Little Video Memory",
  videoSubtitle: "A clip from the celebration moments.",

  // 23 Scrapbook Photographs (grounded, natural captions, no invented stories)
  photos: [
    {
      id: 1,
      src: "assets/photos/photo-01.jpeg",
      title: "Festive celebration",
      category: "Festive moments",
      caption: "Dressed up and glowing in celebration",
      alt: "Nitya in festive traditional attire looking radiant"
    },
    {
      id: 2,
      src: "assets/photos/photo-02.jpeg",
      title: "Big smiles",
      category: "Festive moments",
      caption: "A bright and happy moment",
      alt: "A warm festive photo of Nitya smiling"
    },
    {
      id: 3,
      src: "assets/photos/photo-03.jpeg",
      title: "Unfiltered laughter",
      category: "Candid chaos",
      caption: "Mid-laugh and completely in the moment",
      alt: "A cheerful candid laughing photograph"
    },
    {
      id: 4,
      src: "assets/photos/photo-04.jpeg",
      title: "Casual day out",
      category: "Little everyday moments",
      caption: "Easy conversations and relaxed vibes",
      alt: "A relaxed casual outing snapshot"
    },
    {
      id: 5,
      src: "assets/photos/photo-05.jpeg",
      title: "Celebration time",
      category: "Celebration mode",
      caption: "Front and center for the party",
      alt: "Nitya enjoying an evening celebration"
    },
    {
      id: 6,
      src: "assets/photos/photo-06.jpeg",
      title: "Traditional festive look",
      category: "Festive moments",
      caption: "Festive colors and good company",
      alt: "A portrait in traditional attire"
    },
    {
      id: 7,
      src: "assets/photos/photo-07.jpeg",
      title: "With family and friends",
      category: "Festive moments",
      caption: "Surrounded by warmth and loved ones",
      alt: "A celebratory group gathering"
    },
    {
      id: 8,
      src: "assets/photos/photo-08.jpeg",
      title: "Between the poses",
      category: "Candid chaos",
      caption: "The candid moments are always the funniest",
      alt: "A fun and spontaneous blooper moment"
    },
    {
      id: 9,
      src: "assets/photos/photo-09.jpeg",
      title: "Evening walk",
      category: "Little everyday moments",
      caption: "Peaceful moments and golden light",
      alt: "Outdoor snapshot in warm afternoon light"
    },
    {
      id: 10,
      src: "assets/photos/photo-10.jpeg",
      title: "Birthday sparkler",
      category: "Celebration mode",
      caption: "A little celebration for the new year",
      alt: "Birthday celebration party scene"
    },
    {
      id: 11,
      src: "assets/photos/photo-11.jpeg",
      title: "Festive celebration",
      category: "Festive moments",
      caption: "Cheerful energy and festival vibes",
      alt: "A colorful festival celebration photo"
    },
    {
      id: 12,
      src: "assets/photos/photo-12.jpeg",
      title: "Inside jokes",
      category: "Candid chaos",
      caption: "Never taking things too seriously",
      alt: "A playful candid expression"
    },
    {
      id: 13,
      src: "assets/photos/photo-13.jpeg",
      title: "Weekend outing",
      category: "Little everyday moments",
      caption: "Out and about, enjoying the day",
      alt: "A casual daytime walk snapshot"
    },
    {
      id: 14,
      src: "assets/photos/photo-14.jpeg",
      title: "A birthday toast",
      category: "Celebration mode",
      caption: "Cheers to good health and great times",
      alt: "Raising a toast at a celebration"
    },
    {
      id: 15,
      src: "assets/photos/photo-15.jpeg",
      title: "Birthday outfit",
      category: "Celebration mode",
      caption: "Looking sharp on her special day",
      alt: "A celebratory birthday outfit photograph"
    },
    {
      id: 16,
      src: "assets/photos/photo-16.jpeg",
      title: "Dressed to celebrate",
      category: "Festive moments",
      caption: "Looking great for the occasion",
      alt: "Traditional attire celebration photo"
    },
    {
      id: 17,
      src: "assets/photos/photo-17.jpeg",
      title: "Caught in the breeze",
      category: "Candid chaos",
      caption: "A spontaneous laugh",
      alt: "A natural candid portrait"
    },
    {
      id: 18,
      src: "assets/photos/photo-18.jpeg",
      title: "A moment worth keeping",
      category: "Little everyday moments",
      caption: "Simple, sweet, and happy",
      alt: "A sweet everyday smile photo"
    },
    {
      id: 19,
      src: "assets/photos/photo-19.jpeg",
      title: "Cake time",
      category: "Celebration mode",
      caption: "Ready to celebrate and blow out the candles",
      alt: "Cutting the birthday cake celebration"
    },
    {
      id: 20,
      src: "assets/photos/photo-20.jpeg",
      title: "Party smiles",
      category: "Celebration mode",
      caption: "Surrounded by cheer and good wishes",
      alt: "Joyful party celebration atmosphere"
    },
    {
      id: 21,
      src: "assets/photos/photo-21.jpeg",
      title: "Dancing through the day",
      category: "Candid chaos",
      caption: "Bringing all the energy to the room",
      alt: "A fun spontaneous dance movement"
    },
    {
      id: 22,
      src: "assets/photos/photo-22.jpeg",
      title: "Quiet evening",
      category: "Little everyday moments",
      caption: "Taking it all in with a smile",
      alt: "A calm and peaceful portrait"
    },
    {
      id: 23,
      src: "assets/photos/photo-23.jpeg",
      title: "Smiling forward",
      category: "Candid chaos",
      caption: "Looking ahead to a great year",
      alt: "A happy candid photo looking towards the camera"
    }
  ]
};

/* ==========================================================================
   2. CONTEXT-AWARE CONFETTI SYSTEM
   Single configurable engine with intensity modes (gift, wish, letter, celebrate)
   ========================================================================== */
class ConfettiEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.animating = false;
    this.colors = ['#D4A359', '#E28574', '#3D1E36', '#F3A69A', '#6E8B74', '#FAF6F0', '#F7E5C4'];

    this.resize();
    window.addEventListener('resize', () => this.resize(), { passive: true });
  }

  resize() {
    if (!this.canvas) return;
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  /**
   * Universal, context-aware celebration burst
   * @param {Object} options
   * @param {string} options.type - 'gift' | 'wish' | 'letter' | 'celebrate'
   * @param {number} [options.originX] - Center X in pixels
   * @param {number} [options.originY] - Center Y in pixels
   */
  burst(options = {}) {
    // Respect user's reduced-motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const {
      type = 'gift',
      originX = window.innerWidth / 2,
      originY = window.innerHeight * 0.45
    } = options;

    // Define context-aware configuration presets
    let count = 90;
    let speedMin = 4;
    let speedMax = 12;
    let gravity = 0.28;
    let decayMin = 0.008;
    let decayMax = 0.016;
    let starChance = 0.3;

    switch (type) {
      case 'gift':
        // Most impressive burst, short-lived and joyful
        count = 110;
        speedMin = 5;
        speedMax = 14;
        gravity = 0.32;
        decayMin = 0.012;
        decayMax = 0.022; // Clean up quickly so user can read hero immediately
        starChance = 0.35;
        break;

      case 'wish':
        // Medium burst for blowing out candles
        count = 60;
        speedMin = 3;
        speedMax = 9;
        gravity = 0.25;
        decayMin = 0.01;
        decayMax = 0.02;
        starChance = 0.4;
        break;

      case 'letter':
        // Tiny, delicate sparkle effect on first letter open
        count = 20;
        speedMin = 1.5;
        speedMax = 5;
        gravity = 0.18;
        decayMin = 0.014;
        decayMax = 0.024;
        starChance = 0.6; // mostly stars
        break;

      case 'celebrate':
        // Satisfying, prominent burst that does not overwhelm
        count = 80;
        speedMin = 4;
        speedMax = 11;
        gravity = 0.3;
        decayMin = 0.01;
        decayMax = 0.018;
        starChance = 0.3;
        break;
    }

    // Safety limit to avoid performance issues on repeated clicks
    if (this.particles.length > 250) {
      this.particles.splice(0, this.particles.length - 150);
    }

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = speedMin + Math.random() * (speedMax - speedMin);
      const isStar = Math.random() < starChance;

      this.particles.push({
        x: originX,
        y: originY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2.5,
        size: isStar ? 7 + Math.random() * 5 : 5 + Math.random() * 6,
        color: this.colors[Math.floor(Math.random() * this.colors.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
        gravity: gravity + Math.random() * 0.08,
        drag: 0.96,
        alpha: 1,
        decay: decayMin + Math.random() * (decayMax - decayMin),
        isStar: isStar
      });
    }

    if (!this.animating) {
      this.animating = true;
      requestAnimationFrame(() => this.loop());
    }
  }

  loop() {
    if (!this.ctx) return;
    this.ctx.clearRect(0, 0, this.width, this.height);

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];

      p.vx *= p.drag;
      p.vy = p.vy * p.drag + p.gravity;
      p.x += p.vx;
      p.y += p.vy;
      p.rotation += p.rotationSpeed;
      p.alpha -= p.decay;

      if (p.alpha <= 0 || p.y > this.height + 25) {
        this.particles.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate((p.rotation * Math.PI) / 180);
      this.ctx.globalAlpha = Math.max(0, p.alpha);
      this.ctx.fillStyle = p.color;

      if (p.isStar) {
        this.drawStar(this.ctx, 0, 0, 5, p.size, p.size / 2);
      } else {
        this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
      }

      this.ctx.restore();
    }

    if (this.particles.length > 0) {
      requestAnimationFrame(() => this.loop());
    } else {
      this.animating = false;
      this.ctx.clearRect(0, 0, this.width, this.height);
    }
  }

  drawStar(ctx, cx, cy, spikes, outerRadius, innerRadius) {
    let rot = (Math.PI / 2) * 3;
    let x = cx;
    let y = cy;
    const step = Math.PI / spikes;

    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius);
    for (let i = 0; i < spikes; i++) {
      x = cx + Math.cos(rot) * outerRadius;
      y = cy + Math.sin(rot) * outerRadius;
      ctx.lineTo(x, y);
      rot += step;

      x = cx + Math.cos(rot) * innerRadius;
      y = cy + Math.sin(rot) * innerRadius;
      ctx.lineTo(x, y);
      rot += step;
    }
    ctx.lineTo(cx, cy - outerRadius);
    ctx.closePath();
    ctx.fill();
  }
}

/* ==========================================================================
   3. APP CONTROLLER & STATE
   ========================================================================== */
class BirthdayApp {
  constructor() {
    this.confetti = new ConfettiEngine('confetti-canvas');
    this.activeFilter = 'all';
    this.activePhotoList = [...CONFIG.photos];
    this.activePhotoIndex = 0; // index within this.activePhotoList
    this.isCandleBlown = false;
    this.hasLetterBeenOpened = false; // ensures confetti only triggers on very first letter open
    this.lastFocusedElement = null; // for accessible focus restoration
    this.touchStartX = 0;
    this.touchEndX = 0;

    this.init();
  }

  init() {
    this.populateConfig();
    this.renderCategoryFilterCounts();
    this.renderGallery();
    this.bindEvents();
    this.setupHeroParallax();
    this.setupVideoGracefulFallback();
  }

  // Inject user configurations into the DOM
  populateConfig() {
    // Envelope text
    const envSub = document.getElementById('envelope-subtitle');
    if (envSub) envSub.textContent = `A special celebration for ${CONFIG.recipientName} ✨`;

    // Hero title & subtitle
    const heroTitle = document.getElementById('hero-title');
    if (heroTitle) heroTitle.textContent = CONFIG.heroGreeting;

    const heroSub = document.getElementById('hero-sub');
    if (heroSub) heroSub.textContent = CONFIG.heroSubheading;

    // Wish Section
    const wishTitle = document.getElementById('wish-title');
    if (wishTitle) wishTitle.textContent = CONFIG.wishTitle;

    const wishSub = document.getElementById('wish-sub');
    if (wishSub) wishSub.textContent = CONFIG.wishSubheading;

    const wishText = document.getElementById('wish-text');
    if (wishText) wishText.textContent = `"${CONFIG.wishMessage}"`;

    // Letter Section (human wording signed by yuvi)
    const letterDate = document.getElementById('letter-date');
    if (letterDate) letterDate.textContent = CONFIG.letterDate;

    const letterContent = document.getElementById('letter-content');
    if (letterContent) letterContent.textContent = CONFIG.letterText;

    // Closing Section
    const closingTitle = document.getElementById('closing-title');
    if (closingTitle) closingTitle.textContent = `Keep shining, ${CONFIG.recipientName}. Your next chapter starts now. ✨`;

    // Video Section
    const videoSection = document.getElementById('video-section');
    const videoElem = document.getElementById('birthday-video');
    if (videoSection && videoElem) {
      if (!CONFIG.showVideo) {
        videoSection.classList.add('hidden-video');
      } else {
        videoElem.src = CONFIG.videoPath;
      }
    }
  }

  // Count photos per category and update filter tab labels
  renderCategoryFilterCounts() {
    const counts = {
      all: CONFIG.photos.length,
      'festive moments': 0,
      'candid chaos': 0,
      'little everyday moments': 0,
      'celebration mode': 0
    };

    CONFIG.photos.forEach(p => {
      const cat = p.category.toLowerCase();
      if (counts[cat] !== undefined) {
        counts[cat]++;
      }
    });

    const filterTabs = document.querySelectorAll('.filter-tab');
    filterTabs.forEach(tab => {
      const filterKey = tab.dataset.filter.toLowerCase();
      const count = counts[filterKey] !== undefined ? counts[filterKey] : 0;
      const baseLabel = tab.dataset.label || tab.textContent.replace(/\s*\(\d+\)/, '').trim();
      tab.dataset.label = baseLabel;
      tab.textContent = `${baseLabel} (${count})`;
    });
  }

  // Render the 23 Polaroid cards in the scrapbook
  renderGallery() {
    const grid = document.getElementById('gallery-grid');
    if (!grid) return;

    grid.innerHTML = '';

    CONFIG.photos.forEach((photo, globalIndex) => {
      const card = document.createElement('article');
      card.className = 'polaroid-card';
      card.dataset.category = photo.category.toLowerCase();
      card.dataset.id = photo.id;
      card.tabIndex = 0;
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `View ${photo.title}, photo ${photo.id} of 23`);

      // Gentle washi tape on select cards for authentic scrapbook aesthetic
      let tapeHtml = '';
      if (photo.id % 3 === 0) {
        tapeHtml = '<div class="tape tape-left" aria-hidden="true"></div>';
      } else if (photo.id % 5 === 0) {
        tapeHtml = '<div class="tape tape-right" aria-hidden="true"></div>';
      }

      card.innerHTML = `
        ${tapeHtml}
        <div class="polaroid-image-wrapper">
          <img 
            src="${photo.src}" 
            alt="${photo.alt}" 
            loading="lazy" 
            onerror="this.onerror=null; this.parentElement.style.background='linear-gradient(135deg, #FAF6F0 0%, #E28574 100%)'; this.style.opacity='0.4';"
          />
        </div>
        <div class="polaroid-caption-area">
          <p class="polaroid-handwritten">${photo.title}</p>
          <div class="polaroid-meta">
            <span>${photo.category}</span>
            <span aria-hidden="true">·</span>
            <span>#${String(photo.id).padStart(2, '0')}</span>
          </div>
        </div>
      `;

      card.addEventListener('click', () => this.openLightboxByPhotoId(photo.id, card));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.openLightboxByPhotoId(photo.id, card);
        }
      });

      grid.appendChild(card);
    });
  }

  // Bind all interactive controls
  bindEvents() {
    // 1. Envelope Open Button
    const openSurpriseBtn = document.getElementById('open-surprise-btn');
    const surpriseOverlay = document.getElementById('surprise-overlay');
    if (openSurpriseBtn && surpriseOverlay) {
      openSurpriseBtn.addEventListener('click', () => {
        // Trigger impressive but short-lived confetti burst
        this.confetti.burst({ type: 'gift', originX: window.innerWidth / 2, originY: window.innerHeight * 0.45 });

        // Animate overlay dismissal
        surpriseOverlay.classList.add('hidden');

        // Scroll smoothly to hero section
        setTimeout(() => {
          const hero = document.getElementById('hero-section');
          if (hero) hero.scrollIntoView({ behavior: 'smooth' });
        }, 200);
      });
    }

    // 2. Category Filter Tabs
    const filterTabs = document.querySelectorAll('.filter-tab');
    filterTabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        filterTabs.forEach((t) => {
          t.classList.remove('active');
          t.setAttribute('aria-pressed', 'false');
          t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('active');
        tab.setAttribute('aria-pressed', 'true');
        tab.setAttribute('aria-selected', 'true');

        const filter = tab.dataset.filter.toLowerCase();
        this.filterGallery(filter);
      });
    });

    // 3. Hero Polaroid Clicks -> Lightbox
    const heroPolaroids = document.querySelectorAll('.hero-polaroid');
    heroPolaroids.forEach((polaroid) => {
      polaroid.addEventListener('click', () => {
        const photoId = parseInt(polaroid.dataset.photoId, 10);
        if (photoId) {
          // Switch to all photos if currently filtered so this photo is reachable
          if (this.activeFilter !== 'all') {
            const allTab = document.querySelector('.filter-tab[data-filter="all"]');
            if (allTab) allTab.click();
          }
          this.openLightboxByPhotoId(photoId, polaroid);
        }
      });
      polaroid.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          polaroid.click();
        }
      });
    });

    // 4. Lightbox Controls
    const closeBtn = document.getElementById('lightbox-close');
    const prevBtn = document.getElementById('lightbox-prev');
    const nextBtn = document.getElementById('lightbox-next');
    const lightbox = document.getElementById('lightbox-modal');

    if (closeBtn) closeBtn.addEventListener('click', () => this.closeLightbox());
    if (prevBtn) prevBtn.addEventListener('click', (e) => { e.stopPropagation(); this.prevPhoto(); });
    if (nextBtn) nextBtn.addEventListener('click', (e) => { e.stopPropagation(); this.nextPhoto(); });

    if (lightbox) {
      lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) this.closeLightbox();
      });

      // Accessible Tab Focus Trap inside modal
      lightbox.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          this.trapLightboxFocus(e);
        }
      });

      // Mobile Touch Swipe Handling
      lightbox.addEventListener('touchstart', (e) => {
        this.touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });

      lightbox.addEventListener('touchend', (e) => {
        this.touchEndX = e.changedTouches[0].screenX;
        this.handleTouchSwipe();
      }, { passive: true });
    }

    // Keyboard navigation (Esc, ArrowLeft, ArrowRight)
    window.addEventListener('keydown', (e) => {
      const lb = document.getElementById('lightbox-modal');
      if (lb && lb.classList.contains('active')) {
        if (e.key === 'Escape') this.closeLightbox();
        if (e.key === 'ArrowLeft') this.prevPhoto();
        if (e.key === 'ArrowRight') this.nextPhoto();
      }
    });

    // 5. Make a Wish Interaction
    const wishBtn = document.getElementById('make-wish-btn');
    if (wishBtn) {
      wishBtn.addEventListener('click', () => this.toggleMakeWish());
    }

    // 6. Letter Unfold Toggle
    const letterBtn = document.getElementById('toggle-letter-btn');
    const letterBody = document.getElementById('letter-body');
    if (letterBtn && letterBody) {
      letterBtn.addEventListener('click', () => {
        const isUnfolded = letterBody.classList.toggle('unfolded');
        letterBtn.textContent = isUnfolded ? 'Fold note ✉️' : 'Read full letter ✉️';

        // Trigger delicate confetti ONLY on the first time the letter is opened
        if (isUnfolded && !this.hasLetterBeenOpened) {
          this.hasLetterBeenOpened = true;
          const rect = letterBtn.getBoundingClientRect();
          this.confetti.burst({
            type: 'letter',
            originX: rect.left + rect.width / 2,
            originY: rect.top
          });
        }
      });
    }

    // 7. Celebrate Again Final Button
    const celebrateAgainBtn = document.getElementById('celebrate-again-btn');
    if (celebrateAgainBtn) {
      celebrateAgainBtn.addEventListener('click', () => {
        const rect = celebrateAgainBtn.getBoundingClientRect();
        this.confetti.burst({
          type: 'celebrate',
          originX: rect.left + rect.width / 2,
          originY: rect.top
        });
      });
    }
  }

  // Filter photos by category and update active list for Lightbox navigation
  filterGallery(filter) {
    this.activeFilter = filter;
    const cards = document.querySelectorAll('.polaroid-card');

    if (filter === 'all') {
      this.activePhotoList = [...CONFIG.photos];
      cards.forEach(card => card.classList.remove('filtered-out'));
    } else {
      this.activePhotoList = CONFIG.photos.filter(p => p.category.toLowerCase() === filter);
      cards.forEach(card => {
        if (card.dataset.category === filter) {
          card.classList.remove('filtered-out');
        } else {
          card.classList.add('filtered-out');
        }
      });
    }
  }

  // Open lightbox by matching photo ID and active filtered list
  openLightboxByPhotoId(photoId, triggerElement) {
    this.lastFocusedElement = triggerElement || document.activeElement;

    // Find index in current activePhotoList
    let index = this.activePhotoList.findIndex(p => p.id === photoId);
    if (index === -1) {
      // If not in active filtered list, reset to all
      this.filterGallery('all');
      const allTab = document.querySelector('.filter-tab[data-filter="all"]');
      if (allTab) {
        document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
        allTab.classList.add('active');
      }
      index = this.activePhotoList.findIndex(p => p.id === photoId);
    }

    this.activePhotoIndex = Math.max(0, index);
    this.renderLightboxContent();

    const lightbox = document.getElementById('lightbox-modal');
    if (lightbox) {
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';

      // Move focus into the lightbox close button
      const closeBtn = document.getElementById('lightbox-close');
      if (closeBtn) closeBtn.focus();
    }
  }

  renderLightboxContent() {
    const photo = this.activePhotoList[this.activePhotoIndex];
    if (!photo) return;

    const img = document.getElementById('lightbox-img');
    const counter = document.getElementById('lightbox-counter');
    const caption = document.getElementById('lightbox-caption');
    const details = document.getElementById('lightbox-details');

    if (img) {
      img.src = photo.src;
      img.alt = photo.alt;
    }
    if (counter) {
      counter.textContent = `${this.activePhotoIndex + 1} of ${this.activePhotoList.length}`;
    }
    if (caption) caption.textContent = photo.title;
    if (details) details.textContent = `${photo.category} · "${photo.caption}"`;
  }

  closeLightbox() {
    const lightbox = document.getElementById('lightbox-modal');
    if (lightbox) {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';

      // Return focus to the trigger element that opened it
      if (this.lastFocusedElement && typeof this.lastFocusedElement.focus === 'function') {
        this.lastFocusedElement.focus();
      }
    }
  }

  // Circular navigation respecting active category filter
  nextPhoto() {
    if (this.activePhotoList.length === 0) return;
    this.activePhotoIndex = (this.activePhotoIndex + 1) % this.activePhotoList.length;
    this.renderLightboxContent();
  }

  prevPhoto() {
    if (this.activePhotoList.length === 0) return;
    this.activePhotoIndex = (this.activePhotoIndex - 1 + this.activePhotoList.length) % this.activePhotoList.length;
    this.renderLightboxContent();
  }

  // Focus trap for accessibility
  trapLightboxFocus(e) {
    const focusable = [
      document.getElementById('lightbox-close'),
      document.getElementById('lightbox-prev'),
      document.getElementById('lightbox-next')
    ].filter(Boolean);

    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  handleTouchSwipe() {
    const swipeDistance = this.touchEndX - this.touchStartX;
    const threshold = 40; // minimum horizontal px to count as intentional swipe

    if (swipeDistance > threshold) {
      this.prevPhoto(); // swiped right -> previous
    } else if (swipeDistance < -threshold) {
      this.nextPhoto(); // swiped left -> next
    }
  }

  // Cake candle wish interaction
  toggleMakeWish() {
    const flames = document.querySelectorAll('.candle-flame');
    const smokePuffs = document.querySelectorAll('.smoke-puff');
    const wishBox = document.getElementById('wish-reveal-box');
    const wishBtn = document.getElementById('make-wish-btn');

    if (!this.isCandleBlown) {
      // Extinguish candles
      flames.forEach(f => f.classList.add('flame-extinguished'));
      smokePuffs.forEach(s => s.classList.add('show'));

      // Medium joyful confetti burst
      const btnRect = wishBtn ? wishBtn.getBoundingClientRect() : null;
      const x = btnRect ? btnRect.left + btnRect.width / 2 : window.innerWidth / 2;
      const y = btnRect ? btnRect.top : window.innerHeight * 0.5;
      this.confetti.burst({ type: 'wish', originX: x, originY: y });

      // Reveal wish text
      if (wishBox) wishBox.classList.add('active');
      if (wishBtn) wishBtn.textContent = 'Relight & make another wish 🕯️';

      this.isCandleBlown = true;
    } else {
      // Relight candles
      flames.forEach(f => f.classList.remove('flame-extinguished'));
      smokePuffs.forEach(s => s.classList.remove('show'));
      if (wishBox) wishBox.classList.remove('active');
      if (wishBtn) wishBtn.textContent = 'Blow out the candles & make a wish 🎂';

      this.isCandleBlown = false;
    }
  }

  /**
   * Subtle, restrained hero parallax effect
   * Moves photographs only a few pixels relative to each other.
   * Completely pauses when hero is scrolled out of view.
   * Disabled on mobile / touch and when prefers-reduced-motion is active.
   */
  setupHeroParallax() {
    // Guards: Reduced motion or mobile devices (< 768px)
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || window.innerWidth < 768) {
      return;
    }

    const hero = document.getElementById('hero-section');
    const cards = document.querySelectorAll('.hero-polaroid');
    if (!hero || cards.length === 0) return;

    // Subtle individual speed multipliers and base rotations
    const configs = [
      { speed: -0.035, baseRotate: -3 },
      { speed: 0.03,  baseRotate: 2, baseY: 10 },
      { speed: -0.02, baseRotate: -2 },
      { speed: 0.04,  baseRotate: 3, baseY: 6 }
    ];

    let ticking = false;
    let inView = true;

    // Observe when hero is in viewport so we do zero scroll work when past hero
    const observer = new IntersectionObserver((entries) => {
      inView = entries[0].isIntersecting;
    }, { threshold: 0.05 });
    observer.observe(hero);

    const onScroll = () => {
      if (!inView || ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        cards.forEach((card, i) => {
          const cfg = configs[i % configs.length];
          const deltaY = (cfg.baseY || 0) + scrollY * cfg.speed;
          card.style.transform = `translateY(${deltaY.toFixed(2)}px) rotate(${cfg.baseRotate}deg)`;
        });
        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Gracefully hide video section if file cannot load or is disabled
  setupVideoGracefulFallback() {
    const videoElem = document.getElementById('birthday-video');
    const videoSection = document.getElementById('video-section');
    if (!videoElem || !videoSection) return;

    videoElem.addEventListener('error', () => {
      videoSection.classList.add('hidden-video');
    });
  }
}

// Global initialization on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  window.birthdayApp = new BirthdayApp();
});
