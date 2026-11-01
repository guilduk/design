// Only for the example pages: light and dark switch, the form errors, the dialog, the toast and the stamp.
(function () {
  'use strict';
  var root = document.documentElement;
  try { var saved = localStorage.getItem('gu-theme'); if (saved) root.setAttribute('data-theme', saved); } catch (e) { /* private window */ }
  var toggle = document.querySelector('[data-theme-toggle]');
  if (toggle) toggle.addEventListener('click', function () {
    var dark = root.getAttribute('data-theme') ? root.getAttribute('data-theme') === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    var next = dark ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('gu-theme', next); } catch (e) { /* fine */ }
  });

  var form = document.querySelector('[data-demo-form]');
  if (form) form.addEventListener('submit', function (e) {
    e.preventDefault();
    var bad = [];
    [['f-name', function (v) { return v.trim().length > 0; }], ['f-email', function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v); }]].forEach(function (pair) {
      var el = document.getElementById(pair[0]); var ok = pair[1](el.value);
      el.closest('.gu-field').classList.toggle('gu-field--bad', !ok); el.setAttribute('aria-invalid', String(!ok));
      if (!ok) bad.push(el);
    });
    var box = form.querySelector('[data-problems]');
    box.hidden = !bad.length;
    if (bad.length) { box.setAttribute('tabindex', '-1'); box.focus(); } else showToast('Thanks. That would be sent now.');
  });

  var dialog = document.querySelector('[data-dialog]');
  var opener = document.querySelector('[data-open-dialog]');
  if (dialog && opener) opener.addEventListener('click', function () { dialog.showModal(); });

  var toast = document.querySelector('[data-toast-box]'), timer;
  function showToast(text) {
    if (!toast) return;
    toast.firstChild.textContent = text + ' ';
    toast.hidden = false; clearTimeout(timer);
    timer = setTimeout(function () { toast.hidden = true; }, 5000);
  }
  var t = document.querySelector('[data-toast]'); if (t) t.addEventListener('click', function () { showToast('Saved.'); });
  var close = document.querySelector('[data-toast-close]'); if (close) close.addEventListener('click', function () { toast.hidden = true; });

  var stamp = document.querySelector('[data-stamp]');
  var replay = document.querySelector('[data-replay]');
  function play() { if (!stamp) return; stamp.classList.remove('gu-stamp--play'); void stamp.offsetWidth; stamp.classList.add('gu-stamp--play'); }
  if (replay) replay.addEventListener('click', play);
  if (stamp && 'IntersectionObserver' in window) new IntersectionObserver(function (es, o) { if (es[0].isIntersecting) { play(); o.disconnect(); } }).observe(stamp);
})();
