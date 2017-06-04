---
---
{% include /javascript/menu.js %}
{% include /javascript/headspace.js %}

$(function () {
  Headspace(document.querySelector('[data-header]'), {
    classNames: {
      base: 'sticky-header',
      fixed: 'sticky-header--fixed',
      hidden: 'sticky-header--hidden'
    }
  })
}());
