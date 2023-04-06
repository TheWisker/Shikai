# camelcase-css [![NPM Version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][david-image]][david-url]

> Convert a dash-separated CSS property to a camelCased DOM property.


## Installation
[Node.js](http://nodejs.org/) `>= 0.10` is required. Type this at the command line:
```shell
npm install camelcase-css
```


## Usage
```js
var camelCaseCSS = require("camelcase-css");

camelCaseCSS("-webkit-border-radius");  //-> WebkitBorderRadius
camelCaseCSS("-moz-border-radius");     //-> MozBorderRadius
camelCaseCSS("-ms-border-radius");      //-> msBorderRadius
camelCaseCSS("border-radius");          //-> borderRadius
```


[npm-image]: https://img.shields.io/npm/v/camelcase-css.svg
[npm-url]: https://npmjs.org/package/camelcase-css
[travis-image]: https://img.shields.io/travis/stevenvachon/camelcase-css.svg
[travis-url]: https://travis-ci.org/stevenvachon/camelcase-css
[david-image]: https://img.shields.io/david/stevenvachon/camelcase-css.svg
[david-url]: https://david-dm.org/stevenvachon/camelcase-css
