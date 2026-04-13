// ── Language toggle ──
const translations = {
  en: {
    nav_home: "Home", nav_programs: "Programs", nav_about: "About",
    nav_contact: "Contact", nav_community: "Community",
    nav_cta: "Free Demo"
  },
  tr: {
    nav_home: "Ana Sayfa", nav_programs: "Programlar", nav_about: "Hakkımızda",
    nav_contact: "İletişim", nav_community: "Topluluk",
    nav_cta: "Ücretsiz Demo"
  }
};

let currentLang = localStorage.getItem('ce_lang') || 'tr';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('ce_lang', lang);
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  document.querySelectorAll('[data-tr]').forEach(el => {
    const key = el.dataset.tr;
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Mark active nav link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });

  // Lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
  setLang(currentLang);
});
