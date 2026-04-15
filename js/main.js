// ── Language data ──
const t = {
  tr: {
    nav_home: "Ana Sayfa", nav_programs: "Programlar", nav_about: "Hakkımızda",
    nav_contact: "İletişim", nav_community: "Topluluk", nav_cta: "Ücretsiz Demo",
    // Hero
    hero_eyebrow: "Bilim Destekli · Kişiye Özel · Güvenle Konuşun",
    hero_title_1: "İngilizce'de", hero_title_2: "gerçekten", hero_title_3: "ilerlemenin yolu burada başlar.",
    hero_sub: "Nöropskoloji ve öğrenme psikolojisine dayalı, tamamen kişiselleştirilmiş 1:1 İngilizce eğitimi. Sınıfta öğrendiğinizi gerçek hayatta kullanın.",
    hero_cta1: "Ücretsiz Demo Dersi Al →", hero_cta2: "Programları Keşfet",
    hero_stat1_num: "7+", hero_stat1_label: "Yıl Türkiye deneyimi",
    hero_stat2_num: "1:1", hero_stat2_label: "Birebir, kişiye özel",
    hero_stat3_num: "%100", hero_stat3_label: "Araştırma destekli",
    footer_copy: "© 2025 Cozy English. Tüm hakları saklıdır.",
    footer_location: "Kozyatağı, Kadıköy — İstanbul"
  },
  en: {
    nav_home: "Home", nav_programs: "Programs", nav_about: "About",
    nav_contact: "Contact", nav_community: "Community", nav_cta: "Free Demo",
    hero_eyebrow: "Science-Backed · Personalised · Speak with Confidence",
    hero_title_1: "Your path to", hero_title_2: "real", hero_title_3: "English progress starts here.",
    hero_sub: "Fully personalised 1:1 English coaching grounded in neuropsychology and learning psychology. Use what you learn — in real life, not just the classroom.",
    hero_cta1: "Book a Free Demo →", hero_cta2: "Explore Programs",
    hero_stat1_num: "7+", hero_stat1_label: "Years in Turkey",
    hero_stat2_num: "1:1", hero_stat2_label: "Personalised sessions",
    hero_stat3_num: "100%", hero_stat3_label: "Research-backed",
    footer_copy: "© 2025 Cozy English. All rights reserved.",
    footer_location: "Kozyatağı, Kadıköy — Istanbul"
  }
};

let lang = localStorage.getItem('ce_lang') || 'tr';

function applyLang(l) {
  lang = l;
  localStorage.setItem('ce_lang', l);

  // Update lang buttons everywhere
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === l);
  });

  // Update all [data-i18n] elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[l] && t[l][key] !== undefined) {
      el.textContent = t[l][key];
    }
  });

  // Update html lang attribute
  document.documentElement.lang = l === 'tr' ? 'tr' : 'en';
}

// ── Scroll reveal ──
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
}

// ── Nav scroll state ──
function initNavScroll() {
  const nav = document.querySelector('nav');
  if (!nav) return;
  const update = () => nav.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', update, { passive: true });
  update();
}

// ── Mobile menu ──
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close on link click
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// ── Active nav link ──
function initActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a[data-nav]').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
}

// ── Hero headline draw animation ──
function initHeroLine() {
  const line = document.querySelector('.hero-line');
  if (!line) return;
  setTimeout(() => line.classList.add('drawn'), 800);
}

// ── Parallax on hero bg ──
function initParallax() {
  const heroBg = document.querySelector('.hero-parallax-bg');
  if (!heroBg) return;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    heroBg.style.transform = `translateY(${y * 0.35}px)`;
  }, { passive: true });
}

// ── Init all ──
document.addEventListener('DOMContentLoaded', () => {
  initReveal();
  initNavScroll();
  initMobileMenu();
  initActiveNav();
  initHeroLine();
  initParallax();

  // Lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });

  applyLang(lang);
});
