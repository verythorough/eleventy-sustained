# eleventy-sustained

A starter repository built with [Eleventy](https://github.com/11ty/eleventy) static site generator, adapted from the [sustain](http://www.github.com/jekyller/sustain) Jekyll theme.

## Demo

* [https://eleventy-sustained.netlify.com/](https://eleventy-sustained.netlify.com/)

## Instant Deploy

To get your own instance of this 11ty starter project cloned and deploying to Netlify very quickly, just click the button below and follow the instructions.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/verythorough/eleventy-sustained)

### Wait, what happens when I click that button?

Good question. Here's what it will do...

1. Netlify will clone the Git repository of this project into your Github or GitLab account. It will be asking for permission to add the repo for you.
2. We'll create a new site for you in Netlify, and configure it to use your shiny new repo. Right away you'll be able to deploy changes simply by pushing changes to your repo.
3. That's it really.

## Run Locally

### 1. Clone this repository:

```
git clone https://github.com/verythorough/eleventy-sustained.git my-blog-name
```

### 2. Navigate to the directory

```
cd my-blog-name
```

Specifically have a look at `.eleventy.js` to see if you want to configure any Eleventy options differently.

### 3. Install dependencies

```
npm install
```

### 4. Edit _data/site.json

### 5. Run Eleventy

```
npx eleventy
```

Or serve and build automatically when a template changes:
```
npx eleventy --serve
```

Or in debug mode:
```
DEBUG=* npx eleventy
```

### Implementation Notes

* `posts/` has the blog posts.
* Content can be any template format (blog posts needn’t be markdown, for example). Configure your supported templates in `.eleventy.js` -> `templateFormats`.
* Anything in the `static/` folder will be copied without modification to the output (while keeping the same directory structure).
* The blog post feed template is in `feed/feed.njk`. This is also a good example of using a global data files in that it uses `_data/site.json`.
* This example uses two layouts:
  * `_includes/layouts/base.html`: the top level HTML structure, using [Liquid](https://shopify.github.io/liquid/) templating
  * `_includes/layouts/post.html`: the blog post template (wrapped into `base.njk`)