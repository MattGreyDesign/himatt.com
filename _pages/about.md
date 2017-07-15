---
layout: page
title: About
permalink: /about/
priority: 0.9

intro: |
  Hi, I'm Matt Grey, a multi-disciplined designer particularly focussed around
  Digital Product design, User Experience (UX) and Usability. I aim to bridge
  the gap between design and technical implementation by working alongside
  developers to deliver products with engaging user experiences.

  I currently live and work in Southampton as a UX designer and consultant at
  [Alliants](http://alliants.com). I've worked for clients such as Ski Solutions,
  Babylon Health, CooperVision/Specsavers, Channel 5 and OpenJaw Technologies.

  I design multi-platform websites and apps, prototype them with programs like
  flinto or html and css and sometimes develop branding and styleguides. I have
  also worked with print and illustration producing album artwork, brochures and
  books.

  In 2010 I founded a [font foundry](https://www.myfonts.com/foundry/Matt_Grey/),
  which has released a number of free and commercial [fonts](/fonts).

profile_picture: /images/profile-bw.jpg

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
  - Cross platform (Desktop, Native Mobile, responsive, Watch, Kiosk etc.)
  - User Centered Design, user journeys
  - Information Architecture
  - Usability testing
  - Prototyping

tools:
  - Sketch app, Flinto, Balsamiq, Adobe XD, Invision, Zeplin
  - Adobe Creative Cloud Suite
  - Glyphs app, Fontlab, Fontographer
  - HTML
  - CSS and SASS (SCSS)
  - Jekyll
  - Templating languages (ERB, Handlebars Blade)

about_site: |
  - Designed and built by Matt Grey, from scratch using
  [Jekyll](https://jekyllrb.com/).

  - Styles are mobile first, responsive, and utilise
  [SASS](http://sass-lang.com/), [Bourbon Neat](http://neat.bourbon.io/) for the
  grid, and [Normalize.css](http://github.com/necolas/normalize.css).

  - The typeface used is
  [HK Grotesk Pro](https://hanken.co/product/hk-grotesk-pro/), designed by
  [Alfredo Marco Pradil](http://alfredomarcopradil.com/) at
  [Hanken Design Co](https://hanken.co/).

  - Other tools and libraries used include [jQuery](https://jquery.com/),
  [Headspace](https://github.com/gdub22/headspace), and
  [Google Analytics](http://google.com/analytics).

  - All the code for this site is open source and available on
  [Github](https://github.com/mattgreydesign/mattgreydesign.github.io), and
  deployed and hosted using [Netlify](http://netlify.com/).
  {:.list--dashed .list--small}
---

<div class="about-wrapper">
  <div class="about">
    <div class="about-intro">
      <div class="about-intro-image paragraph-main">
        <img src="{{ page.profile_picture }}" alt="">
      </div>

      <div class="about-intro-description paragraph-main">
        {{ page.intro | markdownify }}
      </div>
    </div>

    <div class="about-attributes">
      <div class="about-education">
        <div class="about-section">
          <h3 class="about-section-title">Education</h3>
          <dl class="relational-list">
            {% for education-item in page.education %}
              <dt>{{ education-item.course | markdownify}}</dt>
              <dd>{{ education-item.place | markdownify}}</dd>
            {% endfor %}
          </dl>
        </div>
      </div>

      <div class="about-tools">
        <div class="about-section">
          <h3 class="about-section-title">Tools &amp; Technologies</h3>
          <ul class="list--dashed list--small">
            {% for tool in page.tools %}
              <li>{{ tool | markdownify }}</li>
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

    <div class="about-site">
      <div class="about-section about-site-description">
        <h3 class="about-section-title">Colophon: about this site</h3>
        <div class="paragraph-small">{{ page.about_site | markdownify }}</div>
      </div>
    </div>

  </div>
</div>
