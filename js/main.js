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
});
