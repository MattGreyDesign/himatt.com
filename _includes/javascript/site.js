{% include /javascript/menu.js %}
{% include /javascript/headspace.js %}

$(function () {
  Headspace(document.querySelector('[data-header]'), {
    startOffset: 90,     // default: height of element
    tolerance: 5,        // default: 8
    showAtBottom: false, // default: true
    classNames: {
      base: 'sticky-header',
      fixed: 'sticky-header--fixed',
      hidden: 'sticky-header--hidden'
    }
  })
}());
