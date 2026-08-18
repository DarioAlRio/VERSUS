/* VERSUS CrossFit VSG — site behaviour
   Vanilla JS, no dependencies. Safari 13+ / Chrome / Firefox / Edge safe. */
(function () {
  'use strict';

  var doc = document;
  var body = doc.body;
  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (s, c) { return (c || doc).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || doc).querySelectorAll(s)); };

  /* ------------------------------------------------------------------ *
   * Header: solid on scroll + hide on scroll down (mobile)
   * ------------------------------------------------------------------ */
  var header = $('.site-header');
  var mobileBar = $('.mobile-bar');
  var lastY = window.pageYOffset || 0;
  var ticking = false;

  function onScroll() {
    var y = window.pageYOffset || doc.documentElement.scrollTop;

    if (header) {
      if (y > 24) header.classList.add('is-solid');
      else header.classList.remove('is-solid');

      var mobile = window.innerWidth < 1100;
      if (mobile && !body.classList.contains('nav-open')) {
        if (y > lastY && y > 260) header.classList.add('is-hidden');
        else header.classList.remove('is-hidden');
      } else {
        header.classList.remove('is-hidden');
      }
    }

    if (mobileBar) {
      if (y > 520) mobileBar.classList.add('is-visible');
      else mobileBar.classList.remove('is-visible');
    }

    lastY = y <= 0 ? 0 : y;
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) { window.requestAnimationFrame(onScroll); ticking = true; }
  }, { passive: true });
  onScroll();

  /* ------------------------------------------------------------------ *
   * Desktop mega menu — hover + click + keyboard
   * ------------------------------------------------------------------ */
  var navItems = $$('.nav-item');
  var closeTimer = null;

  function closeAll(except) {
    navItems.forEach(function (item) {
      if (item === except) return;
      item.classList.remove('is-open');
      var t = $('.nav-link', item);
      if (t) t.setAttribute('aria-expanded', 'false');
    });
  }

  function openItem(item) {
    clearTimeout(closeTimer);
    closeAll(item);
    item.classList.add('is-open');
    var t = $('.nav-link', item);
    if (t) t.setAttribute('aria-expanded', 'true');
  }

  function closeItem(item) {
    item.classList.remove('is-open');
    var t = $('.nav-link', item);
    if (t) t.setAttribute('aria-expanded', 'false');
  }

  navItems.forEach(function (item) {
    var trigger = $('.nav-link', item);
    if (!trigger) return;

    item.addEventListener('mouseenter', function () {
      if (window.matchMedia('(hover: hover)').matches) openItem(item);
    });
    item.addEventListener('mouseleave', function () {
      if (window.matchMedia('(hover: hover)').matches) {
        closeTimer = setTimeout(function () { closeItem(item); }, 140);
      }
    });

    trigger.addEventListener('click', function (e) {
      e.preventDefault();
      if (item.classList.contains('is-open')) closeItem(item);
      else openItem(item);
    });

    item.addEventListener('focusin', function () { openItem(item); });
    item.addEventListener('focusout', function (e) {
      if (!item.contains(e.relatedTarget)) closeItem(item);
    });
  });

  doc.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' || e.key === 'Esc') {
      closeAll(null);
      if (body.classList.contains('nav-open')) toggleDrawer(false);
      closeLightbox();
    }
  });

  doc.addEventListener('click', function (e) {
    if (!e.target.closest || !e.target.closest('.nav-item')) closeAll(null);
  });

  /* ------------------------------------------------------------------ *
   * Mobile drawer
   * ------------------------------------------------------------------ */
  var burger = $('.burger');
  var drawer = $('.drawer');
  var scrollLock = 0;

  function toggleDrawer(open) {
    var isOpen = typeof open === 'boolean' ? open : !body.classList.contains('nav-open');
    if (isOpen) {
      scrollLock = window.pageYOffset;
      body.classList.add('nav-open');
      body.style.position = 'fixed';
      body.style.top = -scrollLock + 'px';
      body.style.width = '100%';
      if (burger) burger.setAttribute('aria-expanded', 'true');
      if (drawer) drawer.removeAttribute('aria-hidden');
    } else {
      body.classList.remove('nav-open');
      body.style.position = '';
      body.style.top = '';
      body.style.width = '';
      window.scrollTo(0, scrollLock);
      if (burger) burger.setAttribute('aria-expanded', 'false');
      if (drawer) drawer.setAttribute('aria-hidden', 'true');
    }
  }

  if (burger) burger.addEventListener('click', function () { toggleDrawer(); });
  if (drawer) {
    $$('a', drawer).forEach(function (a) {
      a.addEventListener('click', function () { toggleDrawer(false); });
    });
  }
  window.addEventListener('resize', function () {
    if (window.innerWidth >= 1100 && body.classList.contains('nav-open')) toggleDrawer(false);
  });

  /* ------------------------------------------------------------------ *
   * Accordions (drawer + FAQ)
   * ------------------------------------------------------------------ */
  $$('.acc').forEach(function (acc) {
    var btn = $('.acc-btn', acc);
    var panel = $('.acc-panel', acc);
    if (!btn || !panel) return;

    btn.setAttribute('aria-expanded', 'false');

    btn.addEventListener('click', function () {
      var open = acc.classList.contains('is-open');
      var group = acc.parentNode;
      if (group && group.hasAttribute('data-acc-single')) {
        $$('.acc', group).forEach(function (other) {
          if (other !== acc && other.classList.contains('is-open')) {
            other.classList.remove('is-open');
            $('.acc-panel', other).style.height = '0px';
            $('.acc-btn', other).setAttribute('aria-expanded', 'false');
          }
        });
      }
      if (open) {
        panel.style.height = panel.scrollHeight + 'px';
        void panel.offsetHeight;
        panel.style.height = '0px';
        acc.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
      } else {
        acc.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
        panel.style.height = panel.scrollHeight + 'px';
        window.setTimeout(function () {
          if (acc.classList.contains('is-open')) panel.style.height = 'auto';
        }, 400);
      }
    });
  });

  /* ------------------------------------------------------------------ *
   * Scroll reveal
   * ------------------------------------------------------------------ */
  var revealables = $$('[data-reveal],[data-stagger]');
  if (reduced || !('IntersectionObserver' in window)) {
    revealables.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealables.forEach(function (el) { io.observe(el); });
  }

  /* ------------------------------------------------------------------ *
   * Pricing tabs
   * ------------------------------------------------------------------ */
  $$('[data-tabs]').forEach(function (group) {
    var tabs = $$('[role="tab"]', group);
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        tabs.forEach(function (t) {
          t.setAttribute('aria-selected', 'false');
          var p = doc.getElementById(t.getAttribute('aria-controls'));
          if (p) p.hidden = true;
        });
        tab.setAttribute('aria-selected', 'true');
        var panel = doc.getElementById(tab.getAttribute('aria-controls'));
        if (panel) panel.hidden = false;
      });
      tab.addEventListener('keydown', function (e) {
        var i = tabs.indexOf(tab);
        var next = null;
        if (e.key === 'ArrowRight') next = tabs[(i + 1) % tabs.length];
        if (e.key === 'ArrowLeft') next = tabs[(i - 1 + tabs.length) % tabs.length];
        if (next) { e.preventDefault(); next.focus(); next.click(); }
      });
    });
  });

  /* ------------------------------------------------------------------ *
   * Lightbox
   * ------------------------------------------------------------------ */
  var lb = $('.lb');
  var lbImg = lb ? $('img', lb) : null;

  function openLightbox(src, alt) {
    if (!lb || !lbImg) return;
    lbImg.src = src;
    lbImg.alt = alt || '';
    lb.classList.add('is-open');
    lb.setAttribute('aria-hidden', 'false');
    var close = $('.lb-close', lb);
    if (close) close.focus();
  }
  function closeLightbox() {
    if (!lb) return;
    lb.classList.remove('is-open');
    lb.setAttribute('aria-hidden', 'true');
  }

  $$('.zoomable').forEach(function (el) {
    el.addEventListener('click', function () {
      var img = el.tagName === 'IMG' ? el : $('img', el);
      if (img) openLightbox(img.getAttribute('data-full') || img.src, img.alt);
    });
  });
  if (lb) {
    lb.addEventListener('click', function (e) {
      if (e.target === lb || (e.target.closest && e.target.closest('.lb-close'))) closeLightbox();
    });
  }

  /* ------------------------------------------------------------------ *
   * Cookie notice
   * ------------------------------------------------------------------ */
  var cookie = $('.cookie');
  if (cookie) {
    var KEY = 'vsg-cookies-v1';
    var stored = null;
    try { stored = window.localStorage.getItem(KEY); } catch (err) { stored = 'skip'; }
    if (!stored) {
      window.setTimeout(function () { cookie.classList.add('is-visible'); }, 1200);
    }
    $$('[data-cookie]', cookie).forEach(function (btn) {
      btn.addEventListener('click', function () {
        try { window.localStorage.setItem(KEY, btn.getAttribute('data-cookie')); } catch (err) { /* noop */ }
        cookie.classList.remove('is-visible');
      });
    });
  }

  /* ------------------------------------------------------------------ *
   * Contact form → opens the user's mail client with a prefilled message
   * ------------------------------------------------------------------ */
  $$('form[data-mailto]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var to = form.getAttribute('data-mailto');
      var data = new FormData(form);
      var subject = data.get('asunto') || 'Consulta desde versuscrossfit.com';
      var lines = [];
      lines.push('Nombre: ' + (data.get('nombre') || ''));
      lines.push('Email: ' + (data.get('email') || ''));
      if (data.get('telefono')) lines.push('Teléfono: ' + data.get('telefono'));
      if (data.get('interes')) lines.push('Interés: ' + data.get('interes'));
      lines.push('');
      lines.push(data.get('mensaje') || '');
      window.location.href = 'mailto:' + to +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(lines.join('\n'));
      var status = $('[data-form-status]', form);
      if (status) {
        status.hidden = false;
        status.textContent = 'Abriendo tu gestor de correo… Si no se abre, escríbenos a ' + to;
      }
    });
  });

  /* ------------------------------------------------------------------ *
   * Current year
   * ------------------------------------------------------------------ */
  $$('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
