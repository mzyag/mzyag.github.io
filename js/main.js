document.addEventListener('DOMContentLoaded', function () {
  var nav = document.getElementById('nav');
  var hamburger = document.getElementById('navHamburger');
  var navLinks = document.getElementById('navLinks');
  var langToggle = document.getElementById('langToggle');

  window.addEventListener('scroll', function () {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });

  if (hamburger) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
  }

  if (navLinks) {
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

  if (langToggle) {
    langToggle.addEventListener('click', function () {
      var html = document.documentElement;
      var current = html.getAttribute('data-lang');
      var next = current === 'en' ? 'zh' : 'en';
      html.setAttribute('data-lang', next);
      try { localStorage.setItem('lang', next); } catch (e) {}
    });
  }

  try {
    var saved = localStorage.getItem('lang');
    if (saved && (saved === 'en' || saved === 'zh')) {
      document.documentElement.setAttribute('data-lang', saved);
    }
  } catch (e) {}

  var reveals = document.querySelectorAll('.project-card, .article-card, .about-grid, .timeline-item, .contact-row');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal', 'visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    reveals.forEach(function (el) {
      el.classList.add('reveal');
      observer.observe(el);
    });
  }

  if (document.querySelector('.article-page')) {
    var bar = document.createElement('div');
    bar.className = 'reading-progress';
    document.body.appendChild(bar);
    window.addEventListener('scroll', function () {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (h > 0 ? (window.scrollY / h * 100) : 0) + '%';
    });
  }

  var sections = document.querySelectorAll('.section, .hero');
  var navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
  if (sections.length && navAnchors.length) {
    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          navAnchors.forEach(function (a) { a.classList.remove('active'); });
          var id = entry.target.id;
          var match = document.querySelector('.nav-links a[href="#' + id + '"]');
          if (match) match.classList.add('active');
        }
      });
    }, { threshold: 0.3 });
    sections.forEach(function (s) { sectionObserver.observe(s); });
  }

  // SVG fullscreen viewer — auto-wraps diagram SVGs in article pages
  var expandIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="#e2e8f0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3"/></svg>';
  document.querySelectorAll('.article-page svg[viewBox]').forEach(function (svg) {
    var vb = svg.getAttribute('viewBox').split(/\s+/);
    if (parseInt(vb[2]) < 200) return;
    var wrap = document.createElement('div');
    wrap.className = 'svg-fullscreen-wrap';
    svg.parentNode.insertBefore(wrap, svg);
    wrap.appendChild(svg);
    var btn = document.createElement('button');
    btn.className = 'svg-fullscreen-btn';
    btn.setAttribute('aria-label', 'Fullscreen');
    btn.innerHTML = expandIcon;
    wrap.insertBefore(btn, svg);
    btn.addEventListener('click', function () {
      var el = document.fullscreenElement || document.webkitFullscreenElement;
      if (el === wrap) {
        (document.exitFullscreen || document.webkitExitFullscreen).call(document);
      } else {
        (wrap.requestFullscreen || wrap.webkitRequestFullscreen).call(wrap);
      }
    });
  });
});
