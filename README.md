<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Programlar — Cozy English</title>
  <link rel="stylesheet" href="css/style.css" />
  <style>
    .page-hero {
      background: var(--forest);
      padding: 5rem 2rem 4rem;
      text-align: center;
      position: relative; overflow: hidden;
    }
    .page-hero::before {
      content: '';
      position: absolute; inset: 0;
      background: radial-gradient(ellipse at 50% 0%, rgba(184,137,58,0.18) 0%, transparent 65%);
    }
    .page-hero-inner { position: relative; z-index: 1; }
    .page-hero .section-label { color: var(--gold-light); margin-bottom: 1rem; }
    .page-hero h1 {
      font-family: 'Playfair Display', serif;
      font-size: clamp(2.25rem, 4vw, 3.25rem);
      font-weight: 700; font-style: italic;
      color: var(--white); line-height: 1.15;
      margin-bottom: 1.25rem;
    }
    .page-hero p {
      font-size: 1.0625rem; color: rgba(255,255,255,0.65);
      max-width: 560px; margin: 0 auto; line-height: 1.75;
    }

    /* ── PROGRAM CARDS ── */
    .programs-section { padding: 5rem 0; background: var(--cream); }

    .prog-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
      margin-bottom: 4rem;
    }

    .prog-card {
      background: var(--white);
      border: 1px solid var(--border);
      border-radius: 14px;
      overflow: hidden;
      transition: all 0.25s;
    }

    .prog-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-hover);
      border-color: var(--border-strong);
    }

    .prog-card.featured {
      border: 2px solid var(--forest);
    }

    .prog-badge {
      background: var(--forest);
      color: var(--white);
      font-size: 0.6875rem; font-weight: 500;
      letter-spacing: 0.1em; text-transform: uppercase;
      padding: 6px 14px; text-align: center;
    }

    .prog-card-body { padding: 2rem 1.75rem; }

    .prog-icon {
      font-size: 1.75rem; margin-bottom: 1rem;
    }

    .prog-card h3 {
      font-family: 'Playfair Display', serif;
      font-size: 1.25rem; font-weight: 700;
      color: var(--ink); margin-bottom: 0.5rem;
    }

    .prog-card .tagline {
      font-size: 0.875rem; color: var(--gold);
      font-weight: 500; margin-bottom: 1rem;
    }

    .prog-card p {
      font-size: 0.875rem; line-height: 1.75; color: var(--ink-light);
      margin-bottom: 1.5rem;
    }

    .prog-features { list-style: none; margin-bottom: 2rem; }
    .prog-features li {
      font-size: 0.8125rem; color: var(--ink-mid);
      padding: 5px 0;
      display: flex; align-items: flex-start; gap: 8px;
    }
    .prog-features li::before {
      content: '—';
      color: var(--gold); flex-shrink: 0; font-size: 0.75rem; margin-top: 1px;
    }

    .prog-cta {
      display: block; width: 100%; text-align: center;
      padding: 11px 0;
      background: var(--forest);
      color: var(--white);
      border: none; border-radius: 7px;
      font-family: 'DM Sans', sans-serif;
      font-size: 0.875rem; font-weight: 500;
      cursor: pointer; text-decoration: none;
      transition: all 0.2s;
    }

    .prog-cta:hover { background: var(--forest-light); }
    .prog-cta.outline {
      background: transparent;
      color: var(--forest);
      border: 1.5px solid var(--forest);
    }
    .prog-cta.outline:hover { background: var(--forest); color: var(--white); }

    /* ── METHODOLOGY SNAPSHOT ── */
    .method-strip {
      background: var(--gold-pale);
      border: 1px solid var(--border-strong);
      border-radius: 14px;
      padding: 3rem;
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 3rem;
      align-items: center;
    }

    .method-strip h3 {
      font-family: 'Playfair Display', serif;
      font-size: 1.5rem; font-weight: 700;
      color: var(--ink); line-height: 1.3;
    }

    .method-strip h3 em { color: var(--forest); }

    .method-pills {
      display: flex; flex-wrap: wrap; gap: 8px;
    }

    .pill {
      background: var(--white);
      border: 1px solid var(--border);
      border-radius: 20px;
      padding: 5px 14px;
      font-size: 0.8125rem; color: var(--forest);
      font-weight: 500;
    }

    /* ── SESSION BREAKDOWN ── */
    .session-section { padding: 5rem 0; background: var(--white); }

    .session-timeline {
      max-width: 680px; margin: 0 auto;
    }

    .session-row {
      display: grid; grid-template-columns: 72px 1fr;
      gap: 1.5rem; align-items: start;
      margin-bottom: 2rem;
      padding-bottom: 2rem;
      border-bottom: 1px solid var(--border);
    }

    .session-row:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }

    .session-time {
      font-family: 'Playfair Display', serif;
      font-size: 1.25rem; font-weight: 500; font-style: italic;
      color: var(--gold); text-align: right;
      padding-top: 2px;
    }

    .session-content h4 {
      font-size: 0.9375rem; font-weight: 500; color: var(--ink); margin-bottom: 4px;
    }

    .session-content p {
      font-size: 0.875rem; line-height: 1.7; color: var(--ink-light);
    }

    /* ── PROGRESS ── */
    .progress-section { padding: 5rem 0; background: var(--cream); }

    .progress-grid {
      display: grid; grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
    }

    .prog-step {
      text-align: center;
      padding: 2rem 1.5rem;
      background: var(--white);
      border: 1px solid var(--border);
      border-radius: 12px;
    }

    .prog-step-num {
      width: 48px; height: 48px;
      border-radius: 50%;
      background: var(--forest-pale);
      color: var(--forest);
      display: flex; align-items: center; justify-content: center;
      font-family: 'Playfair Display', serif;
      font-size: 1.125rem; font-weight: 700;
      margin: 0 auto 1.25rem;
    }

    .prog-step h4 {
      font-family: 'Playfair Display', serif;
      font-size: 1rem; font-weight: 500; color: var(--ink); margin-bottom: 0.5rem;
    }

    .prog-step p { font-size: 0.85rem; line-height: 1.65; color: var(--ink-light); }

    @media (max-width: 900px) {
      .prog-grid { grid-template-columns: 1fr; }
      .method-strip { grid-template-columns: 1fr; gap: 1.5rem; }
      .progress-grid { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>

<nav>
  <a href="index.html" class="nav-logo">Cozy <span>English</span></a>
  <ul class="nav-links">
    <li><a href="index.html" data-tr="nav_home">Ana Sayfa</a></li>
    <li><a href="programs.html" class="active" data-tr="nav_programs">Programlar</a></li>
    <li><a href="about.html" data-tr="nav_about">Hakkımızda</a></li>
    <li><a href="community.html" data-tr="nav_community">Topluluk</a></li>
    <li><a href="contact.html" data-tr="nav_contact">İletişim</a></li>
  </ul>
  <div class="nav-right">
    <div class="lang-toggle">
      <button class="lang-btn active" data-lang="tr">TR</button>
      <button class="lang-btn" data-lang="en">EN</button>
    </div>
    <a href="contact.html" class="btn-nav">Ücretsiz Demo</a>
  </div>
</nav>

<div class="page-wrap">

  <div class="page-hero">
    <div class="page-hero-inner">
      <p class="section-label">Programlar</p>
      <h1>Her hedef için<br>doğru program var.</h1>
      <p>Kariyer İngilizcesinden seyahate, sunumdan günlük konuşmaya — program sizi bekliyor.</p>
    </div>
  </div>

  <!-- ── PROGRAMS ── -->
  <section class="programs-section">
    <div class="container">

      <div class="prog-grid">

        <!-- Business English -->
        <div class="prog-card featured">
          <div class="prog-badge">En Popüler</div>
          <div class="prog-card-body">
            <div class="prog-icon">💼</div>
            <h3>Business English</h3>
            <p class="tagline">Kariyerinizde bir üst seviye</p>
            <p>Yöneticiler, profesyoneller ve girişimciler için. Toplantı İngilizcesinden e-posta yazımına, sunum tekniklerinden müzakere diline kadar kapsamlı program.</p>
            <ul class="prog-features">
              <li>İş toplantısı ve sunum pratiği</li>
              <li>Profesyonel e-posta ve yazışma</li>
              <li>Müzakere ve ikna dili</li>
              <li>C-suite ve yönetici iletişimi</li>
              <li>Sektöre özel kelime hazinesi</li>
            </ul>
            <a href="contact.html" class="prog-cta">Demo Ders Ayarla →</a>
          </div>
        </div>

        <!-- Conversational English -->
        <div class="prog-card">
          <div class="prog-card-body">
            <div class="prog-icon">🗣️</div>
            <h3>Conversational & Fluency</h3>
            <p class="tagline">Dil engeli kalmayacak</p>
            <p>Bilginiz var ama konuşurken duraksiyor musunuz? Fluency ve özgüven inşasına odaklanan yoğun konuşma programı. Gerçek günlük İngilizce.</p>
            <ul class="prog-features">
              <li>Akıcılık ve özgüven geliştirme</li>
              <li>Günlük sohbet ve sosyal dil</li>
              <li>Telaffuz çalışması</li>
              <li>Türkçe->İngilizce geçiş kalıpları</li>
              <li>Role-play senaryoları</li>
            </ul>
            <a href="contact.html" class="prog-cta outline">Demo Ders Ayarla →</a>
          </div>
        </div>

        <!-- Travel & International -->
        <div class="prog-card">
          <div class="prog-card-body">
            <div class="prog-icon">✈️</div>
            <h3>Travel & International Life</h3>
            <p class="tagline">Dünyaya açılın</p>
            <p>Seyahat, yurt dışı yaşam veya boarding school hazırlığı için. Gerçek senaryolara dayalı pratik İngilizce. Otel'den İngiliz okul mülakatına.</p>
            <ul class="prog-features">
              <li>Seyahat İngilizcesi (tüm senaryolar)</li>
              <li>Boarding school mülakat hazırlığı</li>
              <li>Yurt dışı üniversite başvurusu</li>
              <li>Günlük yurt dışı yaşam dili</li>
              <li>Kültürel dil nüansları</li>
            </ul>
            <a href="contact.html" class="prog-cta outline">Demo Ders Ayarla →</a>
          </div>
        </div>

      </div>

      <!-- Methodology strip -->
      <div class="method-strip">
        <div>
          <h3>Tüm programların arkasında <em>bilim var.</em></h3>
          <p style="font-size:0.875rem; color:var(--ink-light); line-height:1.7; margin-top:0.75rem;">Her program, kanıtlanmış pedagojik çerçevelerin karışımıyla tasarlanır. Siz sadece konuşun.</p>
        </div>
        <div class="method-pills">
          <span class="pill">Task-Based Learning</span>
          <span class="pill">Input Flood</span>
          <span class="pill">ECRIF Framework</span>
          <span class="pill">Processing Instruction</span>
          <span class="pill">Communicative Language Teaching</span>
          <span class="pill">Strategic Repetition</span>
          <span class="pill">Contextual Teaching</span>
          <span class="pill">Input Enhancement</span>
        </div>
      </div>

    </div>
  </section>

  <!-- ── SESSION BREAKDOWN ── -->
  <section class="session-section">
    <div class="container">
      <div class="section-header">
        <p class="section-label">Ders yapısı</p>
        <h2 class="section-title">Tipik bir ders nasıl geçer?</h2>
        <p class="section-sub">Her oturum, sizi konuşturmak için bilinçli tasarlanmış bir akıştan oluşur.</p>
      </div>

      <div class="session-timeline">
        <div class="session-row">
          <div class="session-time">10'</div>
          <div class="session-content">
            <h4>Tanılama check-in</h4>
            <p>Son dersten bu yana neler oldu? Günlük konuşmayla doğal bir giriş; hem kelime aktivasyonu hem de iletişim kalitesinin takibi sağlanır.</p>
          </div>
        </div>
        <div class="session-row">
          <div class="session-time">30'</div>
          <div class="session-content">
            <h4>Hedefli içerik bloğu</h4>
            <p>Gramer, kelime ve konuşmanın entegre edildiği yapılandırılmış bölüm. Açıklamalar, alıştırmalar, deep-dive ve role-play içerir.</p>
          </div>
        </div>
        <div class="session-row">
          <div class="session-time">15'</div>
          <div class="session-content">
            <h4>Serbest konuşma pratiği</h4>
            <p>Öğrendiklerinizi gerçekçi senaryolarda test ediyorsunuz. En az müdahaleyle akış ve özgüven gelişimi.</p>
          </div>
        </div>
        <div class="session-row">
          <div class="session-time">5'</div>
          <div class="session-content">
            <h4>Özet & ödev</h4>
            <p>Dersin kilit noktaları özetlenir; Google Classroom'a kişiselleştirilmiş ödev eklenir.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ── PROGRESS TRACKING ── -->
  <section class="progress-section">
    <div class="container">
      <div class="section-header">
        <p class="section-label">İlerleme takibi</p>
        <h2 class="section-title">Gelişiminizi somut görürsünüz</h2>
      </div>

      <div class="progress-grid">
        <div class="prog-step">
          <div class="prog-step-num">A</div>
          <h4>Başlangıç seviye testi</h4>
          <p>Konuşma bazlı diagnostic ile gerçek seviyeniz ve öğrenme stiliniz belirlenir.</p>
        </div>
        <div class="prog-step">
          <div class="prog-step-num">B</div>
          <h4>Ders içi takip</h4>
          <p>Her derste siz konuşursunuz (%70–80). Bu, sürekli gerçek zamanlı geri bildirim sağlar.</p>
        </div>
        <div class="prog-step">
          <div class="prog-step-num">C</div>
          <h4>Seviye değerlendirmesi</h4>
          <p>Her seviye tamamlandığında resmi CEFR bazlı değerlendirme yapılır, sonuçlar paylaşılır.</p>
        </div>
      </div>

    </div>
  </section>

  <!-- CTA -->
  <section class="cta-band" style="margin-top: 0;">
    <div class="cta-band-inner">
      <h2>"Başlamak için mükemmel seviyeyi beklemeyin."</h2>
      <p>Şu anki seviyenizden başlıyoruz ve oradan inşa ediyoruz. Ücretsiz demo dersiniz sizi taahhütsüz tanıştırır.</p>
      <div class="cta-band-actions">
        <a href="contact.html" class="btn-gold">Demo Dersi Ayarla →</a>
      </div>
    </div>
  </section>

</div>

<footer>
  <div class="footer-inner">
    <div class="footer-brand">
      <div class="logo">Cozy <span>English</span></div>
      <p>Nöropskoloji ve öğrenme psikolojisi temelli, birebir İngilizce eğitimi. Kozyatağı, Kadıköy.</p>
    </div>
    <div class="footer-col">
      <h4>Sayfalar</h4>
      <ul>
        <li><a href="index.html">Ana Sayfa</a></li>
        <li><a href="programs.html">Programlar</a></li>
        <li><a href="about.html">Hakkımızda</a></li>
        <li><a href="community.html">Topluluk</a></li>
        <li><a href="contact.html">İletişim</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>İletişim</h4>
      <ul>
        <li><a href="contact.html">Demo Ders Ayarla</a></li>
        <li><a href="#">WhatsApp ile Yaz</a></li>
        <li><a href="#">Instagram</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2025 Cozy English. Tüm hakları saklıdır.</span>
    <span>Kozyatağı, Kadıköy — İstanbul</span>
  </div>
</footer>

<script src="js/main.js"></script>
</body>
</html>
