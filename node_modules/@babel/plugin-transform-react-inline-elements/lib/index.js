"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _helperPluginUtils = require("@babel/helper-plugin-utils");
var _helperBuilderReactJsx = require("@babel/helper-builder-react-jsx");
var _core = require("@babel/core");
var _default = (0, _helperPluginUtils.declare)(api => {
  api.assertVersion(7);
  function hasRefOrSpread(attrs) {
    for (let i = 0; i < attrs.length; i++) {
      const attr = attrs[i];
      if (_core.types.isJSXSpreadAttribute(attr)) return true;
      if (isJSXAttributeOfName(attr, "ref")) return true;
    }
    return false;
  }
  function isJSXAttributeOfName(attr, name) {
    return _core.types.isJSXAttribute(attr) && _core.types.isJSXIdentifier(attr.name, {
      name: name
    });
  }
  const visitor = (0, _helperBuilderReactJsx.default)({
    filter(node) {
      return node.type === "JSXElement" && !hasRefOrSpread(node.openingElement.attributes);
    },
    pre(state) {
      const tagName = state.tagName;
      const args = state.args;
      if (_core.types.react.isCompatTag(tagName)) {
        args.push(_core.types.stringLiteral(tagName));
      } else {
        args.push(state.tagExpr);
      }
    },
    post(state, pass) {
      state.callee = pass.addHelper("jsx");
      const props = state.args[1];
      let hasKey = false;
      if (_core.types.isObjectExpression(props)) {
        const keyIndex = props.properties.findIndex(prop => _core.types.isIdentifier(prop.key, {
          name: "key"
        }));
        if (keyIndex > -1) {
          state.args.splice(2, 0, props.properties[keyIndex].value);
          props.properties.splice(keyIndex, 1);
          hasKey = true;
        }
      } else if (_core.types.isNullLiteral(props)) {
        state.args.splice(1, 1, _core.types.objectExpression([]));
      }
      if (!hasKey && state.args.length > 2) {
        state.args.splice(2, 0, _core.types.unaryExpression("void", _core.types.numericLiteral(0)));
      }
      state.pure = true;
    }
  });
  return {
    name: "transform-react-inline-elements",
    visitor
  };
});
exports.default = _default;

//# sourceMappingURL=index.js.map
