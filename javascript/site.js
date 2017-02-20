---
---
{% include /javascript/menu.js %}
{% include /javascript/headroom.js %}

$(function () {
    var header = new Headroom(document.querySelector('[data-header]'),
    {
        tolerance: 15,
        offset: 10,
        classes: {
            initial: "fixed",
            pinned: "slideDown",
            unpinned: "slideUp",

            top: "top",
            notTop: "notTop",
            bottom: "end",
            notBottom: "notEnd"
        }
    });
    header.init();
}());
