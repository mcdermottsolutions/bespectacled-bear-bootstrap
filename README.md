## Bespectacled Bear Bootstrap

This is an empty Grunt starter project, preloaded with goodies like Bootstrap (3.3.6), Sass, livereload, jQuery (2.2.1), and Font Awesome (4.5.0).  If you already have Grunt, there's very little setup.  It's just an empty web project, ready to go.

Demo of just the dev (uncompressed) folder pushed live:

http://www.mcdermottsolutions.com/demos/bespectacled-bear-bootstrap/dev/index.html


Demo of just the dist (compressed for production) folder pushed live:

http://www.mcdermottsolutions.com/demos/bespectacled-bear-bootstrap/dist/index.html

![alt text](https://raw.githubusercontent.com/mcdermottsolutions/bespectacled-bear/master/dist/img/bespectacled-bear.png "Bespectacled Bear Logo")



## Motivation

Originally I made this to mess with Babel (which I've since removed).  Now I use this for livereload and also for grunt's compressed and combined production compile.  It's also nice to know where all my files are and to not have to do all the setup from scratch everytime I start a new project.

## Installation

If you don't have have Node, NPM & Grunt installed, install those first.
See https://docs.npmjs.com/getting-started/installing-node & http://gruntjs.com/getting-started

---

Once you have Node, NPM & Grunt installed, do the following to install Bespectacled Bear:

```shell
git clone https://github.com/mcdermottsolutions/bespectacled-bear.git
cd bespectacled-bear
npm install
```
That last line there, npm install, just installs the required node modules specified in package.json.

The project directory structure looks like this:

```
-- dev
   -- css
      - style1.css
      - style1.css.map
      - style2.css
      - style2.css.map
   -- img
      - bespectacled-bear.png
   -- js
      - script1.js
      - script1.js.map
      - script2.js
      - script2.js.map
   - index.html

-- dist
   -- css
      - style.min.css
   -- img
      - bespectacled-bear.png
   -- js
      - main.min.js
   - index.html

-- src
   -- img
      - bespectacled-bear.png
   -- js
      - script1.es6
      - script2.es6
  -- scss
      - style1.scss
      - style2.scss
  - index.html

- Gruntfile.js
- package.json
```

The src folder is for working in.  The dev folder is the browser viewable output of the src folder.  The dist folder is the minimized and compressed version of dev - dist is production ready.

---

If you make any changes, you'll want to run
```shell
grunt
````
to recompile the sass, retranspile the js and copy everything from src to dev.

---

If you just want to watch for changes as you work and use livereload, run
```shell
grunt server
````
and everytime you save, it will recompile the sass, retranspile the js, minimize the sass & js and copy everything from src to dev. When you run the command, it will open localhost:9000 in your browser.  You'll need to add the livereload extension to your browser to get livereload working.  http://livereload.com/extensions/

---

When you're ready to make the compressed, minified production version, run
```shell
grunt prod
````
and this will put the production version in the dist folder.  All css files are combined and minified to style.min.css and all js files are combined and minified to main.min.js

---

I've attempted to include all 3rd party asset files like jquery, font awesome and the google font in the dev version so you can develop locally without an internet connection.  And then when you run grunt prod and make your dist version, the grunt preprocess module makes the links in your production index.html file to link to the external CDN version of the 3rd party asset for faster load time.  The local versions of the files are not copied over to the dist folder, so it's all nice and clean.

---

Let me know if you have any questions or anything.
