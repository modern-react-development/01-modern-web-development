# The Modern Web

## Objectives

- Describe the modern web development ecosystem using words like Node.js, npm, Transpiler, and Bundler
- Use the features of modern JavaScript to build front-end applications
- Use Node.js and npm to manage application dependencies

## The Modern Web Development Ecosystem

> To understand why we use the tools we use today, we should take a look at what we did _before_ those tools existed.

### Static File Development

- Just like HTML, CSS, and JavaScript files (the only 3\* languagages the web browser understands...)
- Libraries (like jquery, lodash, or bootstrap) are included from a CDN or served directly from the same folder
- No server run time (Like PHP, Python, or C#)
- No pre-build process
- Just code the files and then open them up in a web browser or host them on a static file server or CDN
- The code your users are running in their web browser is exactly the code you wrote

### Let's discuss: What are some of the downsides to building websites this way?

#### Things to consider

- File management - What happens to our code base when we have 10+ HTML files, and 20+ JavaScript files and 10+ CSS files
- Code Re-use - How can we share common code / elements / styles / layout without duplication (copy + paste)
- Dependency Management - How do we manage all our dependencies (things like jquery, lodash, bootstrap, etc.)?
- Browser Support - What if some of our users are using older browsers, or web browser we didn't test with? Will our website still work?
- Page load time - With 30+ files to download, will the site load quick enough? Will we be putting a strain on our users bandwidth?

### How We Manage These Things in Modern Web Development

#### File Management

We can treat all of our files like _modules_ and share them across our code base. We create / define them once, and then import and use them where needed. (Tools like Webpack, Rollup, Parcel help with this)
