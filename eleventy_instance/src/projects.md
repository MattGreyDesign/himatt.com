---
title: Projects
layout: base.liquid
---
# Projects
<ul>
  {% for project in collections.projects %}
    <li>
      <a href="{{ project.url }}">{{ project.data.title }}</a><br>
      <small>{{ project.date | date: "%B %d, %Y" }}</small>
    </li>
  {% endfor %}
</ul>
