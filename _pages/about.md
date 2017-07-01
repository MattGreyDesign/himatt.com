---
layout: page
title: About
permalink: /about/
priority: 0.9

education:
  - course: Foundation Certificate in User Experience
    place: BCS, The Chartered Institute for IT

  - course: BA(Hons) Graphic design
    place: Falmouth University

  - course: Short course, Graphic design
    place: Central Saint Martins (UAL)

skills:
  - User Experience Design (UX)
  - Graphic Design
  - User Centered Design, user journeys
  - Information Architecture
  - Usability testing
  - Prototyping

tools:
  - Sketch app, Flinto, Balsamiq, Adobe XD, Invision, Zeplin
  - Adobe Creative Cloud Suite
  - Glyphs app, Fontlab, Fontographer

technologies:
  - HTML
  - CSS and [SASS (SCSS)](http://sass-lang.com/)
  - Jekyll
  - Templating languages (ERB, Handlebars, Blade)

---

<div class="about-wrapper">
  <div class="about">

    <div class="about-attributes">
      <div class="about-education">
        <div class="about-section">
          <h3 class="about-section-title">Education</h3>
          <dl class="relational-list">
            {% for education-item in page.education %}
              <dt>{{ education-item.course }}</dt>
              <dd>{{ education-item.place }}</dd>
            {% endfor %}
          </dl>
        </div>
      </div>

      <div class="about-tools">
        <div class="about-section">
          <h3 class="about-section-title">Tools</h3>
          <ul class="list--dashed list--small">
            {% for tool in page.tools %}
              <li>{{ tool }}</li>
            {% endfor %}
          </ul>
        </div>

        <div class="about-section">
          <h3 class="about-section-title">Technologies</h3>
          <ul class="list--dashed list--small">
            {% for technology in page.technologies %}
              <li>{{ technology | markdownify}}</li>
            {% endfor %}
          </ul>
        </div>
      </div>

      <div class="about-skills">
        <div class="about-section">
          <h3 class="about-section-title">Skills</h3>
          <ul class="list--dashed list--small">
            {% for skill in page.skills %}
              <li>{{ skill }}</li>
            {% endfor %}
          </ul>
        </div>
      </div>
    </div>

  </div>
</div>

Hi, I'm Matt Grey, a multi-disciplined designer particularly focussed around Digital Product design, User Experience (UX) and Usability.

I currently live and work in Southampton as a UX designer and consultant at [Alliants](http://alliants.com).

I design multi-platform websites and apps and sometimes develop branding and styleguides.

Outside of work I produce [fonts](/fonts)

I also work with print and illustration on album artwork, brochures and books.


## About this site
Designed and made by Matt Grey, built from scratch using [Jekyll](https://jekyllrb.com/).

Styles are mobile first and responsive and utilise [SASS](http://sass-lang.com/), [Bourbon Neat](http://neat.bourbon.io/) for the grid, and [Normalize.css](http://github.com/necolas/normalize.css).

The typeface used is [HK Grotesk Pro](https://hanken.co/product/hk-grotesk-pro/), designed by [Alfredo Marco Pradil](http://alfredomarcopradil.com/) at [Hanken Design Co](https://hanken.co/).

Other tools and libraries used include [jQuery](https://jquery.com/), [Headspace](https://github.com/gdub22/headspace), and [Google Analytics](http://google.com/analytics).

All the code for this site is open source and available on [Github](https://github.com/mattgreydesign/mattgreydesign.github.io), and deployed and hosted using [Netlify](http://netlify.com/).
