# himatt.com

Personal portfolio made with [Jekyll](https://jekyllrb.com/), deployed via [Netlify](https://netlify.com/)

## Setup

This site runs on Jekyll, an opensource static site generating platform.

- Clone or download a zip of this project to your computer and navigate to the
  project directory in your terminal
- Download Ruby [here](https://www.ruby-lang.org/en/documentation/installation/#rubyinstaller).

- To ensure Ruby is installed, from the command line type:

  ```
  ruby -v
  ```

- Install the Jekyll bundler from the commandline:

  ```
  gem install jekyll bundler
  ```

  For more information about installing Jekyll, refer to the [Jekyll website](https://jekyllrb.com/docs/quickstart/)

    <br>

- Install Gem dependencies in the by running:
  ```
  bundle install
  ```
- To run the server in your local environment run:
  ```
  bundle exec jekyll server
  ```
- Go to http://localhost:4000/ in your browser
- To compile a static build run:
  ```
  bundle exec jekyll build
  ```

## General information

- Static website
- Optimised for efficient [PageSpeed Insights benchmarks](https://developers.google.com/speed/pagespeed/insights/?url=himatt.com) (still more to do in this space)
- No Jekyll plugin dependancies (previously used Bourbon and Neat, now uses CSS Grid and CSS Custom properties)
- Continuously deployed using Netlify

[![Netlify Status](https://api.netlify.com/api/v1/badges/01ca9c4b-b99d-411f-9003-9fad58ccbcf3/deploy-status)](https://app.netlify.com/sites/mattgrey/deploys)

## Licenses

### Underlying source code

[GNU General Public License v3.0](LICENSE) (open source)

### Content

© Matthew Grey and himatt.com. Unauthorised use and/or duplication and
adaptation of this material (all image formats, text and additional media files)
without express and written permission from this site’s author and/or owner is
strictly prohibited. Excerpts and links may be used, provided that full and
clear credit is given to Matthew Grey and/or himatt.com with appropriate and
specific direction to the original content.
