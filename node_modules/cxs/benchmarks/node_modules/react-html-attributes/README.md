[![Build Status][build-badge]][build-page]
[![version][version-badge]][package]

# react-html-attributes

A store of React HTML attributes keyed by their respective tags. Global
attributes and React specific attributes are under `'*'`. A HTML tag will map
to all the html attributes supported by React. HTML tags that don't have any
React-supported non-global attributes won't have keys in the store.

The store also has all HTML and SVG tags supported by React under the key,
`'elements'` which will map to an object with keys, `'svg'` and `'html'`.
The React docs have been updated to remove a list of tags supported, so it
is assumed that React now supports all available tags. If that is not the
case, please raise an issue [here](https://github.com/facebook/react/issues/new).

One more note: all SVG element attributes supported by React are under the
`'svg'` key to avoid too many duplicated values and unnecessary file size.

Reference:
[React docs](https://facebook.github.io/react/docs/dom-elements.html)

## Installation

npm:

```bash
npm install react-html-attributes
```

## Usage

```javascript
var htmlElementAttributes = require('html-element-attributes');
```

```javascript
htmlElementAttributes['*'];
```

Returns:

```javascript
[
  "acceptCharset",
  "accessKey",
  "allowFullScreen",
  "allowTransparency",
  "autoComplete",
  "autoFocus",
  "autoPlay",
  "capture",
  "cellPadding",
  "cellSpacing",
  "charSet",
  "classID",
  "className",
  "colSpan",
  "contentEditable",
  "contextMenu",
  "crossOrigin",
  "dangerouslySetInnerHTML",
  "dateTime",
  "dir",
  "draggable",
  "encType",
  "formAction",
  "formEncType",
  "formMethod",
  "formNoValidate",
  "formTarget",
  "frameBorder",
  "hidden",
  "hrefLang",
  "htmlFor",
  "httpEquiv",
  "id",
  "inputMode",
  "is",
  "itemID",
  "itemProp",
  "itemRef",
  "itemScope",
  "itemType",
  "keyParams",
  "keyType",
  "lang",
  "marginHeight",
  "marginWidth",
  "maxLength",
  "mediaGroup",
  "minLength",
  "noValidate",
  "radioGroup",
  "readOnly",
  "role",
  "rowSpan",
  "scoped",
  "seamless",
  "spellCheck",
  "srcDoc",
  "srcLang",
  "srcSet",
  "style",
  "suppressContentEditableWarning",
  "tabIndex",
  "title",
  "useMap",
  "wmode"
]
```

```javascript
htmlElementAttributes['elements']['svg'];
```

returns:

```javascript
[
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
]
```

## Contributing

Commit by

```bash
npm run commit
```

I am open to suggestions in improving this library. If you know any page that
has a better list related to SVG properties, HTML properties or React-supported
HTML properties to be crawled. Please let me know!

## License

[MIT][license] © Jacky Ho

<!-- Definition -->
[license]: LICENSE
[build-page]: https://travis-ci.org/jackyho112/react-html-attributes.svg
[build-badge]: https://img.shields.io/travis/jackyho112/react-html-attributes.svg
[version-badge]: https://img.shields.io/npm/v/react-html-attributes.svg?style=flat-square
[package]: https://www.npmjs.com/package/react-html-attributes
