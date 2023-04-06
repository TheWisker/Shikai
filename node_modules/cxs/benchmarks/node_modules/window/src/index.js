'use strict';

const { JSDOM } = require('jsdom');

// Class to return a window instance.
// Accepts a jsdom config object.
// Config object must be cloned before passing through otherwise jsdom will add
// lots of properties to the original reference.
module.exports = class Window {
	constructor(jsdomConfig) {
		return (new JSDOM('', Object.assign({}, jsdomConfig))).window;
	}
};
