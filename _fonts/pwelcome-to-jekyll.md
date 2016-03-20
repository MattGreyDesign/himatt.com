---
layout: page
published: true
title:  "Social Networking Icons"
categories: on sale, icons

thumbnail: ""

vendors:
  - title: "Myfonts"
    licence: "Webfont & Desktop"
    url: "https://www.myfonts.com/fonts/matt-grey/social-networking-icons/"

  - title: "Fontspring"
    licence: "Webfont & Desktop"
    url: "https://www.fontspring.com/fonts/matt-grey-design/social-networking-icons"

  - title: "Fontspring"
    licence: "Free trial"
    url: "http://www.fontspace.com/matt-grey-design/social-networking-icons"

initial_release: 2014

releases:
  - version: v1.0
    date: 05 January 2012
    details: Lorem ipsum dolar
  - version: v2.0
    date: 06 September 2012
    details: Lorem ipsum dolar
  - version: v3.0
    date: 13 February 2013
    details: Lorem ipsum dolar
  - version: v3.5 (Closed beta)
    date: 10 December 2015
    details: Lorem ipsum dolar

---


You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: http://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/


<h4>Releases:</h4>

<p>First released: {{ page.initial_release }}</p>

<ul>
{% for release in page.releases %}
  <li>{{ release.version }}</li>
  <li>{{ release.date }}</li>
  <li>{{ release.details }}</li>
  <br>
{% endfor %}
</ul>
