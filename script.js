/* ===================================================
   Pizza Fiamma — Interactions & Animations
   =================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Navbar Scroll ---------- */
  const navbar = document.getElementById('navbar');

  const handleScroll = () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // run once on load


  /* ---------- Mobile Menu Toggle ---------- */
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
    });
  });


  /* ---------- Active Nav Link Highlight ---------- */
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = navLinks.querySelectorAll('a:not(.nav-cta)');

  const highlightNav = () => {
    const scrollY = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollY >= top && scrollY < top + height) {
        navAnchors.forEach(a => a.classList.remove('active'));
        const match = navLinks.querySelector(`a[href="#${id}"]`);
        if (match) match.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', highlightNav);


  /* ---------- Scroll Reveal (fade-up / fade-left / fade-right) ---------- */
  const reveals = document.querySelectorAll('.fade-up, .fade-left, .fade-right');

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.88;

    reveals.forEach(el => {
      const elTop = el.getBoundingClientRect().top;
      if (elTop < triggerBottom) {
        el.classList.add('visible');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // fire once on load so above-fold items show


  /* ---------- Smooth Scroll for Anchor Links ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });


  /* ---------- Counter Animation for Stats ---------- */
  const counters = document.querySelectorAll('.stat-number');
  let counterAnimated = false;

  const animateCounters = () => {
    if (counterAnimated) return;

    const statsBar = document.querySelector('.stats-bar');
    if (!statsBar) return;

    const rect = statsBar.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.9) {
      counterAnimated = true;

      counters.forEach(counter => {
        const text = counter.textContent.trim();

        // Extract numeric part and suffix
        const match = text.match(/^([\d.]+)(.*)$/);
        if (!match) return;

        const target = parseFloat(match[1]);
        const suffix = match[2]; // e.g. '+', 'k+'
        const isDecimal = text.includes('.');
        const duration = 1500;
        const start = performance.now();

        const step = (timestamp) => {
          const progress = Math.min((timestamp - start) / duration, 1);
          // Ease-out cubic
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = eased * target;

          if (isDecimal) {
            counter.textContent = current.toFixed(1) + suffix;
          } else {
            counter.textContent = Math.floor(current) + suffix;
          }

          if (progress < 1) {
            requestAnimationFrame(step);
          } else {
            counter.textContent = text; // restore exact original text
          }
        };

        counter.textContent = isDecimal ? '0.0' + suffix : '0' + suffix;
        requestAnimationFrame(step);
      });
    }
  };

  window.addEventListener('scroll', animateCounters);
  animateCounters(); // check on load

});
