---
layout: page
published: true
title: "Social Networking Icons"
description: "An icon font"
categories: on sale, icons
thumbnail: ""

features:
  - 6 available styles
  - Opentype accessible features
  - Webpage embedding
  - Free updates

in_use:
  - image: ""
    title: Myfonts.com
    link: "http://www.myfonts.com"

vendors:
  - title: "Myfonts"
    licence: Webfont & Desktop
    url: "https://www.myfonts.com/fonts/matt-grey/social-networking-icons/"

  - title: "Fontspring"
    licence: Webfont & Desktop
    url: "https://www.fontspring.com/fonts/matt-grey-design/social-networking-icons"

  - title: "Fontspace"
    licence: "Free trial"
    url: "http://www.fontspace.com/matt-grey-design/social-networking-icons"

initial_release: 2012

releases:
  - version: v1.0
    date: 05 January 2012
    details: >
      - Initial release
        - Now for sale on Myfonts.com in both regular and rounded versions

  - version: v2.0
    date: 06 September 2012
    details: >
      - New weight
        - Minimal

      - Opentype support
        - Can merge multiple glyphs and access additional icons

      - New Icons Added/replaced
        - 500px
        - New StumbleUpon (Replaced)
        - Additional Digg (Logo Text)
        - Google+
        - Twitter (Bird Icon)
        - Instagram
        - Pinterest
        - Spotify
        - Steam
        - Speech bubble (Apple Style)
        - Map Marker
        - Multiple utilities (tick, face, music note, sun, infinity etc.)


  - version: v3.0
    date: 13 February 2013
    details: >
      - New weights
        - Square
        - Outline
        - Unboxed

      - New additions
        - Discogs
        - Reverbnation
        - Foursquare
        - Bandcamp
        - Google Play
        - Android
        - Grooveshark
        - Fork Repository

      - Updated
        - Google +
        - Github
        - MSN
        - Youtube
        - Facebook
        - Ebay
        - Spotify
        - Microsoft
        - All other utility icons

  - version: v3.5 (Closed beta)
    date: 10 December 2015
    details: >
      - New additions
        - Vine
        - Ask.fm
        - Slack

      - Updated
        - Google
        - Foursquare
        - Deviantart

      - Removed
        - Grooveshark
        - Forrst
---


Page content

<section>
{% if page.features %}
  <h2>Features</h2>
  <ul>
  {% for feature in page.features %}
    <li>{{ feature }}</li>
  {% endfor %}
  </ul>
{% endif %}
</section>



<article class="vendors">
<h2>Get {{ page.title }}</h2>
{% if page.vendors %}
  {% for vendor in page.vendors %}
  <section>
    <header>
      <a class="button" href="{{ vendor.url}}">{{ vendor.title | escape_once }}</a>
      <p>{{ vendor.licence }}</p>
    </header>
  </section>
  {% endfor %}
{% endif %}
</article>

<article>
<dl>
<dt>First released</dt>
<dd>{{ page.initial_release }}</dd>
</dl>

<dl>
<dt>Latest revision</dt>
{% if page.releases %}
  {% for release in page.releases reversed %}
    {% if forloop.first == true %}
      <dd>{{ release.version }} ({{ release.date }})</dd>
    {% endif %}
  {% endfor %}
{% endif %}
</dl>
</article>


<article class="releases">
  <header>
    <h2>Releases</h2>
  </header>
  {% if page.releases %}
    {% for release in page.releases reversed %}
    <section>
      <header>
        <h3>{{ release.version }}</h3>
        <p>{{ release.date }}</p>
      </header>
      <dl>
        <dt>Details</dt>
        <dd>
          {{ release.details | markdownify }}
        </dd>
      </dl>
      <br>
    </section>
    {% endfor %}
  {% endif %}
</article>
