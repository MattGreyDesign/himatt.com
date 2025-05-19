---
layout: base
title: About
permalink: /about/
priority: 0.9

intro: |
  Hi, I'm Matt Grey, a multi-disciplined designer, particularly focussed around
  Digital Product Design, User Experience (UX), and Usability. Adopting a
  user-centred process, I design, prototype and test multi-platform websites
  and apps, as well as architect and manage design systems to drive efficiency 
  and consistency.

  I aim to bridge the gap between design, tech, and the business by working
  cross-functionally to research and deliver real products with
  effective, engaging, and accessible user experiences.

  I am currently based in London and work as a Product Designer at
  [Dojo](//www.dojo.tech/), previously at
  [ClearScore](//www.clearscore.com/), [Acuris](//www.acuris.com/) and
  [Tesco](//www.tesco.com/).

  Prior to that I was working in Southampton as a Designer and Consultant at
  [Alliants](//alliants.com), where I worked with a number of global clients, including:
  [Four Seasons Hotels and Resorts](//fourseasons.com),
  [Babylon Health](//babylonhealth.com),
  [Travelodge](//travelodge.co.uk),
  [Ski Solutions](//skisolutions.com),
  [Sun Life Financial](//www.sunlife.com),
  [CooperVision/Specsavers](//www.specsavers.co.uk/contact-lenses/coopervision),
  [Channel 5](//channel5.com),
  [butterfly.life](//www.butterfly.life/),
  [VisitBritain](//www.visitbritain.com/gb/en),
  and [OpenJaw Technologies](//www.openjawtech.com).

  In 2010 I founded a [font foundry](//www.myfonts.com/foundry/Matt_Grey/),
  which has released a number of free and commercial [fonts](/fonts).

profile_picture: /assets/images/profile-pictures/profile.jpg

experience:
  - company: Zonama
    position: Head of product design
    period: March 2025 – Present

  - company: Dojo
    position: Product designer (Senior)
    period: August 2020 – March 2025

  - company: Clearscore
    position: Product designer, Design Systems
    period: July 2019 – August 2020

  - company: Acuris
    position: Product designer (UX/UI)
    period: Jan 2019 – July 2019

  - company: Tesco
    position: UI Designer
    period: Mar 2018 – Jan 2019

  - company: Alliants
    position: Visual/UI/UX designer and Consultant
    period: Jun 2014 – Feb 2018

  # - company: Techbods
  #   position: Graphic Designer
  #   period: Jul 2013 - Sep 2013

  # - company: Leepeckgroup
  #   position: Work Experience - Designer
  #   period: Sep 2010

  # - company: Hampshire County Council
  #   position: Work Experience - Graphic Designer
  #   period: Oct 2009

education:
  - course: Two-day User Experience Design Bootcamp
    place: General Assembly
    period: 2017

  - course: Foundation Certificate in User Experience
    place: BCS, The Chartered Institute for IT
    period: 2016

  - course: BA(Hons) Graphic design
    place: Falmouth University
    period: 2011–2014

  - course: Short course, Graphic design
    place: Central Saint Martins (UAL)
    period: 2010

competitions:
  - event: ImmutableX Hackathon
    period: 2023
    result: 3rd place - Team Leaguewon
    link: //finance.yahoo.com/news/inaugural-zencon-resounding-success-214500370.html

  - event: Zencon Hackathon
    period: 2022
    result: Category winner for Defi - Team Truecommit
    link: //finance.yahoo.com/news/inaugural-zencon-resounding-success-214500370.html

  - event: Culture Mile Fusion Prize
    period: 2019–2020
    result: Shortlisted - Team Knolo
    link: //www.youtube.com/watch?v=ufmXwUdZJeY&feature=emb_title&ab_channel=CultureMile
    # //www.culturemile.london/fusion-prize-shortlist/knolo

  - event: RESI Hackathon
    period: 2018
    result: Winners - Team FreeCycle
    link: //medium.com/@bemyapp/resi-hackathon-2018-cbf185c29838

skills:
  - User Experience design (UX)
  - User Interface design (UI)
  - Graphic design
  - Cross platform design (Desktop, Native Mobile, responsive, smartwatch, kiosk etc.)
  - Design libraries and Styleguides
  - User journey mapping
  - User interviews and Usability testing
  - Information Architecture
  - Wireframing
  - Interactive prototypes
  - Contextual inquiry

tools:
  - Figma, Sketch
  - Flinto, Balsamiq, Invision, Zeplin, Marvel app
  - Adobe Creative Cloud Suite (Photoshop, XD, Illustrator, After Effects...)
  - HTML
  - CSS and SASS (SCSS)
  - jQuery (for prototyping only)
  - Frontend templating languages (ERB, Handlebars, Blade, Liquid)
  - Glyphs app, Fontlab, Fontographer

about_site: |
  - Designed and built from scratch by me using
  [11ty static site generator](//11ty.dev/).

  - The typefaces used are
  [DM Sans](//fonts.google.com/specimen/DM+Sans) and
  [DM Serif Display](//fonts.google.com/specimen/DM+Serif+Display),
  designed by [Colophon Foundry](//www.colophon-foundry.org/).

  - Other tools and libraries used include, [SASS](http://sass-lang.com/),
  [Headspace](//github.com/gdub22/headspace) and
  [Normalize.css](http://github.com/necolas/normalize.css).

  - All the code for this site is open source and available on
  [Github](//github.com/mattgreydesign/mattgreydesign.github.io), deployed
  and hosted using [Netlify](http://netlify.com/).

  - Although the code is opensource under the GNU General Public License v3, all
  content is Copyrighted. [Read more](//github.com/MattGreyDesign/mattgreydesign.github.io/blob/master/LICENSE)
  {:.list--dashed .list--small}
---

<script type="application/ld+json">
  {
    "@context": "http://schema.org/",
    "@type": "Person",
    "name": "Matt Grey",
    "jobTitle": "Product Designer",
    "nationality": "British",
    "url": "http://www.himatt.com/",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "London",
      "addressCountry": "United Kingdom"
    }
  }
</script>

<div class="about-wrapper">
  <div class="about">
    <div class="about-intro-image">
      <img src="{{ profile_picture }}" alt="">
    </div>

    <div class="about-intro-description paragraph-normal">
      {{ intro }}
    </div>

    <div class="about-attributes">
      <div class="about-experience">
        <div class="about-section">
          <h3 class="about-section-title type-level-2">Experience</h3>
          <dl class="relational-list">
            {% for experience-item in experience %}
              <dt class="relational-list__title">{{ experience-item.company }}</dt>
              <dd class="relational-list__description relational-list__description--period">{{ experience-item.period }}</dd>
              <dd class="relational-list__description">{{ experience-item.position }}</dd>
            {% endfor %}
          </dl>
        </div>
      </div>

      <div class="about-education">
        <div class="about-section">
          <h3 class="about-section-title type-level-2">Education</h3>
          <dl class="relational-list">
            {% for education-item in education %}
              <dt class="relational-list__title">{{ education-item.course }}</dt>
              <dd class="relational-list__description">{{ education-item.place }}</dd>
            {% endfor %}
          </dl>
        </div>

        <div class="about-section about-section--nested">
          <h3 class="about-section-title type-level-2">Competitions</h3>
          <dl class="relational-list">
            {% for competition-item in competitions %}
              <dt class="relational-list__title">{{ competition-item.event }}</dt>
              <dd class="relational-list__description relational-list__description--period">{{ competition-item.period }}</dd>
              <dd class="relational-list__description"><a href="{{ competition-item.link }}">{{ competition-item.result }}</a></dd>
            {% endfor %}
          </dl>
        </div>
      </div>

      <div class="about-tools">
        <div class="about-section">
          <h3 class="about-section-title type-level-2">Tools &amp; technologies</h3>
          <ul class="list--dashed list--small">
            {% for tool in tools %}
              <li>{{ tool }}</li>
            {% endfor %}
          </ul>
        </div>
      </div>

      <div class="about-skills">
        <div class="about-section">
          <h3 class="about-section-title type-level-2">Skills</h3>
          <ul class="list--dashed">
            {% for skill in skills %}
              <li>{{ skill }}</li>
            {% endfor %}
          </ul>
        </div>
      </div>
    </div>

    <div class="about-site">
      <div class="about-section about-site-description">
        <h3 class="about-section-title type-level-2">Colophon: about this site</h3>
        <div class="paragraph-small">{{ about_site }}</div>
      </div>
    </div>

  </div>
</div>
