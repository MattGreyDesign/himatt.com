---
layout: default
---

<style>
  .nts {
    background-color: black;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 60;
  }

  .nts p, .nts h1 {
    text-align: center;
  }
</style>

<div class="nts">
  <div>
    <h1>Nothing to see here... Yet</h1>
    <p><a href="http://www.himatt.com">Hi Matt</a></p>
  </div>
</div>

<div class="home">

  <h1 class="page-heading">Posts</h1>

  <ul class="post-list">
    {% for post in site.posts %}
      <li>
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>

        <h2>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
        </h2>
      </li>
    {% endfor %}
  </ul>

  <p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | prepend: site.baseurl }}">via RSS</a></p>

</div>
