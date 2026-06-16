// ============================================================
//  Han Bin Lee site — small progressive-enhancement scripts
// ============================================================
(function () {
  // Render Lucide icons
  function icons() { if (window.lucide) window.lucide.createIcons(); }
  icons();

  // Mobile nav toggle
  var toggle = document.querySelector('[data-nav-toggle]');
  var nav = document.querySelector('[data-nav]');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  // Segmented controls (data-seg with data-target panels)
  document.querySelectorAll('[data-seg]').forEach(function (seg) {
    var buttons = seg.querySelectorAll('button');
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        buttons.forEach(function (b) { b.setAttribute('aria-selected', 'false'); });
        btn.setAttribute('aria-selected', 'true');
        var target = btn.getAttribute('data-target');
        var group = seg.getAttribute('data-seg');
        document.querySelectorAll('[data-panel="' + group + '"]').forEach(function (p) {
          p.hidden = (p.getAttribute('data-panel-value') !== target);
        });
        // notify listeners (e.g. booking form conditional fields)
        seg.dispatchEvent(new CustomEvent('seg:change', { detail: { value: target } }));
      });
    });
  });

  // Booking form: conditional insurer field + fake success
  var form = document.querySelector('[data-booking-form]');
  if (form) {
    var paySeg = document.querySelector('[data-seg="pay"]');
    var insurerField = form.querySelector('[data-insurer-field]');
    if (paySeg && insurerField) {
      paySeg.addEventListener('seg:change', function (e) {
        insurerField.hidden = (e.detail.value !== 'Insured');
      });
    }
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var wrap = document.querySelector('[data-booking-wrap]');
      var success = document.querySelector('[data-booking-success]');
      if (wrap && success) { wrap.hidden = true; success.hidden = false; icons(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
    });
  }
})();
