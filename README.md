# The Modern Web

---

## Objectives

- Describe the modern web development ecosystem using words like Node.js, npm, Transpiler, and Bundler
- Use the features of modern JavaScript to build front-end applications
- Use Node.js and npm to manage application dependencies

---

## The Modern Web Development Ecosystem

> To understand why we use the tools we use today, we should take a look at what we did _before_ those tools existed.

---

### Static File Development

- Just like HTML, CSS, and JavaScript files (the only 3\* languagages the web browser understands...)
- Libraries (like jquery, lodash, or bootstrap) are included from a CDN or served directly from the same folder
- No server run time (Like PHP, Python, or C#)
- No pre-build process
- Just code the files and then open them up in a web browser or host them on a static file server or CDN
- The code your users are running in their web browser is exactly the code you wrote

---

### Let's discuss: What are some of the downsides to building websites this way?

---

### Things to consider

- File management - What happens to our code base when we have 10+ HTML files, and 20+ JavaScript files and 10+ CSS files
- Code Re-use - How can we share common code / elements / styles / layout without duplication (copy + paste)
- Dependency Management - How do we manage all our dependencies (things like jquery, lodash, bootstrap, etc.)?
- Browser Support - What if some of our users are using older browsers, or web browser we didn't test with? Will our website still work?
- Page load time - With 30+ files to download, will the site load quick enough? Will we be putting a strain on our users bandwidth?

---

## How We Manage These Things in Modern Web Development

### File Management

We can treat all of our files like _modules_ and share them across our code base. We create / define them once, and then import and use them where needed. (Tools like Webpack, Rollup, Parcel help with this)

---

### Code Re-use

If we break down our UI into individual components, those components can be shared and re-used across our code base. (Component libraries like React, Vue, Angular, Lit help with this)

---

### Dependency Management

We can easily manage what version of a given dependency is needed for our project, and import those dependencies as needed (npm uses the package.json for this)

---

### Browser Support

Tools like [Babel](https://babeljs.io) allow us to write code that uses the latest features of JavaScript or custom languages like [JSX](https://reactjs.org/docs/introducing-jsx.html), the code we write is than _transpiled_ into code that is currently [supported by all web browsers](https://caniuse.com/). CSS has a similar tools like SASS, Less, or Stylus and Post-CSS which automatically adds browser prefixes to our CSS properties as needed.

---

### Page Load Time

After being _transpiled_ our code can be _minified_ and _bundled_ to produce the smallest number of files and smallest possible file size for our end users.

---

## Use the features of modern JavaScript to build front-end applications

---

### JavaScript -> ECMAScript

- JS has a _long_ history and was initially introduced in 1995
- Feature support across web browsers was notoriously inconsistent (competing web browsers like NetScape and Internet Explorer would only support certain features or have different implementations)
- The ECMAScript standard committee was formed to unify the language
  - The committee consists of industry veterans from many of the top companies. They meet and decide on what new features will be in the language.

---

### ECMAScript 2015 Features

- Arrow functions
  - Lexical `this` binding
- Template Strings
- Destructuring
- Modules
- let and const variable declarations
  - Block Scope
- Object literal features (property assignments and computed property assignments)
- Spread and Rest Operators
- Functions &mdash; Default parameter assignment
- Map and Set Data Structures
- Classes
- Symbols, Iterators, and Generators
- Tail Calls
- Proxies, and the Reflect API

---

## Use Node.js and npm to manage application dependencies

---

### Node.js

- Created in 2009 by Ryan Dahl
- A JavaScript runtime environment
- Can be used to run JavaScript on a _server_
  - Build APIs
  - Access Databases
  - Process files
  - General scripting
- We will use it to run our build tasks (general scripting!) (the react code we write will _not_ be running on a sever, it will only be running in the browser as static files)
- We can run node programs from the command line: `node filename.js`

---

## NPM

- A package manager &mdash; manage the dependencies of our code base.
- We will use this to install react as a dependency later
- [https://npmjs.com](http://npmjs.com) &mdash; a repository for JavaScript dependencies, anyone can publish a module here (the react dependency is hosted [here](https://www.npmjs.com/package/react)
- We can install packages and automatically add them to our `package.json` file with `npm install <package name>`

---

## package.json

```json
{
  "name": "01-the-modern-web",
  "version": "1.0.0",
  "description": "",
  "scripts": {},
  "keywords": [],
  "author": "",
  "type": "module",
  "license": "MIT",
  "dependencies": {},
  "devDependencies": {}
}
```

---

## `node_modules` folder

All the dependencies we install are stored in this folder (for every project we create!).
