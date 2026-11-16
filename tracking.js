(function () {
  var AW = 'AW-16666507745';
  var PHONE = AW + '/_GwdCPq0z7kdEOHzmos-';
  var WHATSAPP = AW + '/oKmXCP20z7kdEOHzmos-';

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;

  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + AW;
  document.head.appendChild(s);

  gtag('js', new Date());
  gtag('config', AW);

  document.addEventListener('click', function (e) {
    var el = e.target.closest && e.target.closest('a[href], [onclick]');
    if (!el) return;
    var href = el.getAttribute('href') || '';
    var on = el.getAttribute('onclick') || '';
    var label = null;
    if (href.indexOf('tel:') === 0 || on.indexOf('tel:') !== -1) label = PHONE;
    else if (href.indexOf('wa.me') !== -1) label = WHATSAPP;
    if (label) gtag('event', 'conversion', { send_to: label, transport_type: 'beacon' });
  }, true);
})();
