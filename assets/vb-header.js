/* VB Header — Mega Menu + Mobile Drawer JS
   Vanilla JS, no dependencies, deferred load
   ============================================================ */
(function () {
  'use strict';

  /* ---- Sticky scroll ---- */
  const header = document.getElementById('vb-header');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('vb-header--scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---- Mega menu (desktop) ---- */
  const triggers = document.querySelectorAll('.vb-nav__link--trigger');
  let openMega = null;

  function openMenu(trigger) {
    if (openMega && openMega !== trigger) closeMenu(openMega);
    const id = trigger.getAttribute('aria-controls');
    const panel = document.getElementById(id);
    if (!panel) return;
    trigger.setAttribute('aria-expanded', 'true');
    panel.hidden = false;
    openMega = trigger;
  }

  function closeMenu(trigger) {
    if (!trigger) return;
    const id = trigger.getAttribute('aria-controls');
    const panel = document.getElementById(id);
    if (panel) panel.hidden = true;
    trigger.setAttribute('aria-expanded', 'false');
    if (openMega === trigger) openMega = null;
  }

  triggers.forEach((trigger) => {
    // Open on click (touch-friendly)
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      if (trigger.getAttribute('aria-expanded') === 'true') {
        closeMenu(trigger);
      } else {
        openMenu(trigger);
      }
    });

    // Open on hover (desktop)
    trigger.addEventListener('mouseenter', () => openMenu(trigger));

    const id = trigger.getAttribute('aria-controls');
    const panel = document.getElementById(id);
    if (panel) {
      panel.addEventListener('mouseleave', () => closeMenu(trigger));
      trigger.parentElement.addEventListener('mouseleave', () => closeMenu(trigger));
    }

    // Close on Escape
    trigger.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu(trigger);
    });
  });

  // Close when clicking outside
  document.addEventListener('click', () => {
    if (openMega) closeMenu(openMega);
  });

  /* ---- Mobile drawer ---- */
  const menuBtn   = document.getElementById('vb-menu-btn');
  const closeBtn  = document.getElementById('vb-menu-close');
  const drawer    = document.getElementById('vb-mobile-drawer');
  const overlay   = document.getElementById('vb-drawer-overlay');

  function openDrawer() {
    if (!drawer) return;
    drawer.hidden = false;
    document.body.style.overflow = 'hidden';
    menuBtn && menuBtn.setAttribute('aria-expanded', 'true');
    // Allow transition
    requestAnimationFrame(() => {
      drawer.classList.add('vb-mobile-drawer--open');
    });
    closeBtn && closeBtn.focus();
  }

  function closeDrawer() {
    if (!drawer) return;
    drawer.hidden = true;
    document.body.style.overflow = '';
    menuBtn && menuBtn.setAttribute('aria-expanded', 'false');
    drawer.classList.remove('vb-mobile-drawer--open');
  }

  if (menuBtn) menuBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);

  // Escape key closes drawer
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer && !drawer.hidden) closeDrawer();
  });

  /* ---- Mobile accordion ---- */
  const mobileTrigers = document.querySelectorAll('.vb-mobile-nav__trigger');
  mobileTrigers.forEach((btn) => {
    btn.addEventListener('click', () => {
      const sub = btn.nextElementSibling;
      if (!sub) return;
      const isOpen = !sub.hidden;
      // Close all
      mobileTrigers.forEach((b) => {
        const s = b.nextElementSibling;
        if (s) s.hidden = true;
        b.setAttribute('aria-expanded', 'false');
        const chevron = b.querySelector('.vb-nav__chevron');
        if (chevron) chevron.style.transform = '';
      });
      // Toggle clicked
      if (!isOpen) {
        sub.hidden = false;
        btn.setAttribute('aria-expanded', 'true');
        const chevron = btn.querySelector('.vb-nav__chevron');
        if (chevron) chevron.style.transform = 'rotate(180deg)';
      }
    });
  });

})();
