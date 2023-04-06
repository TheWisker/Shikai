'use strict';

var cache = {};
var prefix = '_cxs';
var cssRules = [];
var insert = function insert(rule) {
  return cssRules.push(rule);
};

var hyph = function hyph(s) {
  return s.replace(/[A-Z]|^ms/g, '-$&').toLowerCase();
};
var mx = function mx(rule, media) {
  return media ? media + '{' + rule + '}' : rule;
};
var noAnd = function noAnd(s) {
  return s.replace(/&/g, '');
};
var createDeclaration = function createDeclaration(key, value) {
  return hyph(key) + ':' + value;
};
var createRule = function createRule(_ref) {
  var className = _ref.className,
      child = _ref.child,
      media = _ref.media,
      declarations = _ref.declarations;
  return mx('.' + (className + child) + '{' + declarations.join(';') + '}', media);
};

var parseRules = function parseRules(obj) {
  var child = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var media = arguments[2];

  var rules = [];
  var declarations = [];

  for (var key in obj) {
    var value = obj[key];

    if (value === null) continue;

    if (typeof value === 'object') {
      var _media = /^@/.test(key) ? key : null;
      var _child = _media ? child : child + noAnd(key);
      parseRules(value, _child, _media).forEach(function (r) {
        return rules.push(r);
      });
      continue;
    }

    var dec = createDeclaration(key, value);
    declarations.push(dec);
  }

  rules.unshift({
    media: media,
    child: child,
    declarations: declarations
  });

  return rules;
};

var parse = function parse(obj) {
  var rules = parseRules(obj);
  var classNames = [];

  rules.forEach(function (rule) {
    var cacheKey = JSON.stringify(rule);
    if (cache[cacheKey]) {
      classNames.push(cache[cacheKey]);
      return;
    }
    var className = prefix + cssRules.length.toString(36);
    classNames.push(className);
    var ruleset = createRule(Object.assign(rule, { className: className }));
    insert(ruleset);
    cache[cacheKey] = className;
  });

  return classNames.join(' ');
};

module.exports = function () {
  for (var _len = arguments.length, styles = Array(_len), _key = 0; _key < _len; _key++) {
    styles[_key] = arguments[_key];
  }

  return styles.map(function (style) {
    return parse(style);
  }).join(' ').trim();
};

module.exports.css = function () {
  return cssRules.sort().join('');
};

module.exports.reset = function () {
  cache = {};
  while (cssRules.length) {
    cssRules.pop();
  }
};

module.exports.prefix = function (val) {
  return prefix = val;
};

if (typeof document !== 'undefined') {
  var style = document.head.appendChild(document.createElement('style'));
  var sheet = style.sheet;
  style.id = '_cxs_';
  insert = function insert(rule) {
    cssRules.push(rule);
    sheet.insertRule(rule, sheet.cssRules.length);
  };
}