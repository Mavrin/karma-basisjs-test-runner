// resources (46):
//   [string] [style#2] -> 0.css
//   [string] core/env/iframe_inject.code -> 0.code
//   [array] reporter/app/template/test.tmpl -> 4.tmpl
//   [array] reporter/module/toc/template/toc-item.tmpl -> 1.tmpl
//   [array] reporter/module/toc/template/toc.tmpl -> 2.tmpl
//   [array] reporter/app/template/test-source.tmpl -> 3.tmpl
//   [array] core/env/iframe.tmpl -> 0.tmpl
//   [array] reporter/app/template/test-suite.tmpl -> 5.tmpl
//   [array] reporter/app/template/test-case.tmpl -> 6.tmpl
//   [array] reporter/module/test-tree/template/view.tmpl -> 7.tmpl
//   [array] reporter/template/view.tmpl -> 8.tmpl
//   [object] reporter/template/view.l10n -> 0.l10n
//   [function] ../bower_components/basisjs/src/basis/template/tokenize.js -> q.js
//   [function] ../bower_components/basisjs/src/basis/template/isolateCss.js -> r.js
//   [function] ../bower_components/basisjs/src/basis/template/theme.js -> c.js
//   [function] ../bower_components/basisjs/src/basis/dom/wrapper.js -> d.js
//   [function] core/runner.js -> e.js
//   [function] ../bower_components/basisjs/src/basis/data/dataset.js -> f.js
//   [function] ../bower_components/basisjs/src/basis/data/index.js -> g.js
//   [function] ../bower_components/basisjs/src/basis/utils/benchmark.js -> h.js
//   [function] core/test.js -> i.js
//   [function] core/utils.js -> s.js
//   [function] core/source/info.js -> t.js
//   [function] ../bower_components/basisjs/src/basis/data.js -> 1.js
//   [function] core/env/iframe.js -> u.js
//   [function] ../bower_components/basisjs/src/basis/utils/info.js -> k.js
//   [function] reporter/app.js -> 0.js
//   [function] ../bower_components/basisjs/src/basis/event.js -> 2.js
//   [function] core/source.js -> l.js
//   [function] core/source/utils.js -> v.js
//   [function] ../bower_components/esprima/esprima.js -> m.js
//   [function] reporter/module/toc/index.js -> w.js
//   [function] ../bower_components/basisjs/src/basis/data/value.js -> 3.js
//   [function] ../bower_components/basisjs/src/basis/ui.js -> 4.js
//   [function] reporter/module/test-tree/index.js -> x.js
//   [function] reporter/app/test.js -> n.js
//   [function] reporter/app/highlight.js -> o.js
//   [function] ../bower_components/jsdiff/diff.js -> p.js
//   [function] ../bower_components/basisjs/src/basis/template/html.js -> 5.js
//   [function] ../bower_components/basisjs/src/basis/dom/event.js -> 6.js
//   [function] ../bower_components/basisjs/src/basis/l10n.js -> 7.js
//   [function] ../bower_components/basisjs/src/basis/template/htmlfgen.js -> 8.js
//   [function] ../bower_components/basisjs/src/basis/template/const.js -> 9.js
//   [function] ../bower_components/basisjs/src/basis/template.js -> a.js
//   [function] ../bower_components/basisjs/src/basis/template/declaration.js -> b.js
//   [function] core/env.js -> j.js
//
// filelist (2): 
//   reporter/app.js
//   ../bower_components/jsdiff/diff.js
(function(){
"use strict";

var __namespace_map__ = {"0.js":"app","1.js":"basis.data","2.js":"basis.event","3.js":"basis.data.value","4.js":"basis.ui","5.js":"basis.template.html","6.js":"basis.dom.event","7.js":"basis.l10n","8.js":"basis.template.htmlfgen","9.js":"basis.template.const","a.js":"basis.template","b.js":"basis.template.declaration","c.js":"basis.template.theme","d.js":"basis.dom.wrapper","e.js":"core.runner","f.js":"basis.data.dataset","g.js":"basis.data.index","h.js":"basis.utils.benchmark","i.js":"core.test","j.js":"core.env","k.js":"basis.utils.info","l.js":"core.source","m.js":"esprima","n.js":"app.test","o.js":"app.highlight","p.js":"diff"};
var __resources__ = {
  "0.css": "",
  "0.code": "function importScripts(){\n  function importScript(url){\n    var req = new XMLHttpRequest();\n    req.open('GET', url, false);\n    req.setRequestHeader('If-Modified-Since', new Date(0).toGMTString());\n    req.send(null);\n\n    if (req.status >= 200 && req.status < 400)\n      (window.execScript || function(fn){\n        window['eval'].call(window, fn);\n      })(req.responseText);\n    else\n      throw 'Can\\'t load script: ' + url;\n  }\n\n  for (var i = 0; i < arguments.length; i++)\n    importScript(arguments[i])\n}\n\nfunction __initTestEnvironment(initCode, deprecateTestEnvironment){\n  // basis.js default behaviour\n  if (typeof basisjsToolsFileSync != 'undefined')\n    basisjsToolsFileSync.notifications.attach(function(type, filename){\n      if (typeof basis == 'undefined')\n        return; // no basis.js available\n\n      if (type == 'update' && (\n            (basis.filename_ == filename) ||\n            (basis.resource && basis.resource.exists(filename))\n         ))\n        deprecateTestEnvironment();\n    });\n\n  // fallback deprecate function\n  if (typeof deprecateTestEnvironment != 'function')\n    deprecateTestEnvironment = function(){};\n\n  // main part\n  return eval(initCode + ';(function(__code){\\n' +\n  '  return eval(\"(\" + __code + \")\");' +\n  '})');\n}\n",
  "4.tmpl": [ [ 1, 0, [ "element" ], "div", [ 4, [ [ "if452hqzn7oxgv0o1__", "hasOwnEnvironment", 2, "hasOwnEnvironment", 0 ] ], 0, "iu1gknzivq51w5tgw__test" ], [ 1, 1, [ "header" ], "div", [ 4, 0, 0, "if452hqzn7oxgv0o1__header" ], [ 6, "click", "openLoc" ], [ 1, 0, 0, "span", [ 4, 0, 0, "if452hqzn7oxgv0o1__select-button" ], [ 6, "click", "select" ], [ 3, 0, 0, "pick up" ] ], [ 1, 0, 0, "span", [ 1, 0, 0, "span", [ 5, [ [ [ "loc" ], [ 0 ], "display", "hide" ] ], 0 ], [ 3, "name", 0 ] ], [ 1, 0, 0, "span", [ 4, 0, 0, "if452hqzn7oxgv0o1__loc-link" ], [ 2, [ [ "loc" ], [ "Location: ", 0 ] ], 0, "title", "Location: {loc}" ], [ 5, [ [ [ "loc" ], [ 0 ], "display", "show" ] ], 0, "display: none" ], [ 3, 1, [ "name" ] ] ] ], [ 1, 0, 0, "span", [ 4, [ [ "if452hqzn7oxgv0o1__splitter_", "state", 1, "state", 0, [ "processing", "ready", "error" ] ] ], 0, "if452hqzn7oxgv0o1__splitter" ], [ 3, 0, 0, " — " ] ], [ 1, 0, 0, "span", [ 4, [ [ "if452hqzn7oxgv0o1__state_state-", "state", 1, "state", 0, [ "processing", "ready", "error" ] ], [ "if452hqzn7oxgv0o1__state_", "pending", 2, "pending", 0 ] ], 0 ], [ 3, 1, [ "stateMessage" ] ] ] ] ] ],
  "1.tmpl": [ [ 1, 0, [ "element" ], "div", [ 4, [ [ "iefqhcfb8kdsr9hmn__app-toc-item_", "selected", 2, "selected", 0 ] ], 0, "iefqhcfb8kdsr9hmn__app-toc-item" ], [ 6, "click", "select" ], [ 6, "dblclick", "pickup" ], [ 1, 0, 0, "span", [ 4, [ [ "iefqhcfb8kdsr9hmn__app-toc-item__progress_", "state", 1, "progressState", 0, [ "undefined", "processing" ] ] ], 0, "iefqhcfb8kdsr9hmn__app-toc-item__progress" ], [ 5, [ [ [ "progress" ], [ 0, "%" ], "width" ], [ [ "showProgress" ], [ 0 ], "display", "show" ] ], 0, "display: none" ] ], [ 1, 0, 0, "span", [ 4, [ [ "iefqhcfb8kdsr9hmn__app-toc-item__state-", "state", 1, "state", 0, [ "processing", "ready", "error", "pending" ] ], [ "iefqhcfb8kdsr9hmn__app-toc-item__state-", "pending", 2, "pending", 0 ] ], 0, "iefqhcfb8kdsr9hmn__app-toc-item__state" ], [ 3, 1, [ "stateMessage" ] ] ], [ 1, 0, 0, "span", [ 4, 0, 0, "iefqhcfb8kdsr9hmn__app-toc-item__name" ], [ 3, 1, [ "name" ] ] ] ] ],
  "2.tmpl": [ [ 1, 0, [ "element" ], "div", [ 4, 0, 0, "isflh36kuw6nd55l2__app-toc" ], [ 8, 1, [ "faultTests" ] ], [ 8, 1, [ "levelUp" ] ] ] ],
  "3.tmpl": [ [ 1, 1, [ "code", "element" ], "pre", [ 4, 0, 0, "Basis-SyntaxHighlight" ], [ 1, 0, 0, "div", [ 4, 0, 0, "part part-before" ], [ 5, [ [ [ "beforeCount" ], [ 0 ], "display", "show" ] ], 0, "display: none" ], [ 1, 0, 0, "div", [ 4, [ [ "part-header__", "hasParent", 2, "hasParent", 0 ] ], 0, "part-header" ], [ 6, "click", "toggleBefore" ], [ 5, [ [ [ "beforeCollapsed" ], [ 0 ], "display", "show" ] ], 0, "display: none" ], [ 1, 0, 0, "span", [ 4, 0, 0, "caption" ], [ 3, 0, 0, "Show before each code" ] ], [ 1, 0, 0, "span", [ 4, [ [ "before-count__", "beforeCount", 1, "beforeCount", 0, [ "1" ] ] ], 0 ], [ 3, 0, 0, " x " ], [ 3, 1, [ "beforeCount" ] ] ] ], [ 1, 0, 0, "div", [ 4, 0, 0, "content" ], [ 5, [ [ [ "beforeCollapsed" ], [ 0 ], "display", "hide" ] ], 0 ], [ 8, 1, [ "beforeCode" ] ] ] ], [ 1, 0, 0, "div", [ 4, 0, 0, "part content" ], [ 8, 1, [ "sourceCode" ] ] ], [ 1, 0, 0, "div", [ 4, 0, 0, "part part-after" ], [ 5, [ [ [ "afterCount" ], [ 0 ], "display", "show" ] ], 0, "display: none" ], [ 1, 0, 0, "div", [ 4, [ [ "part-header__", "hasParent", 2, "hasParent", 0 ] ], 0, "part-header part-header__after" ], [ 6, "click", "toggleAfter" ], [ 5, [ [ [ "afterCollapsed" ], [ 0 ], "display", "show" ] ], 0, "display: none" ], [ 1, 0, 0, "span", [ 4, 0, 0, "caption" ], [ 3, 0, 0, "Show after each code" ] ], [ 1, 0, 0, "span", [ 4, [ [ "after-count__", "afterCount", 1, "afterCount", 0, [ "1" ] ] ], 0 ], [ 3, 0, 0, " x " ], [ 3, 1, [ "afterCount" ] ] ] ], [ 1, 0, 0, "div", [ 4, 0, 0, "content" ], [ 5, [ [ [ "afterCollapsed" ], [ 0 ], "display", "hide" ] ], 0 ], [ 8, 1, [ "afterCode" ] ] ] ] ] ],
  "0.tmpl": [ [ 1, 0, [ "element" ], "iframe", [ 2, [ [ "src" ], [ 0 ] ], 0, "src", "{src}" ], [ 6, "load", "ready" ], [ 5, 0, 0, "width: 10px; height: 10px; top: -100px; position: absolute; border: none; opacity: 0.0001;" ] ] ],
  "5.tmpl": [ [ 1, 0, [ "element" ], "div", [ 4, [ [ "iw94y9t2rtaqugy1d__", "hasOwnEnvironment", 2, "hasOwnEnvironment", 0 ] ], 0, "iu1gknzivq51w5tgw__test iw94y9t2rtaqugy1d__suite" ], [ 1, 1, [ "header" ], "div", [ 4, 0, 0, "iw94y9t2rtaqugy1d__header" ], [ 6, "click", "openLoc" ], [ 1, 0, 0, "span", [ 4, 0, 0, "iw94y9t2rtaqugy1d__select-button" ], [ 6, "click", "select" ], [ 3, 0, 0, "pick up" ] ], [ 1, 0, 0, "span", [ 1, 0, 0, "span", [ 5, [ [ [ "loc" ], [ 0 ], "display", "hide" ] ], 0 ], [ 3, "name", 0 ] ], [ 1, 0, 0, "span", [ 4, 0, 0, "iw94y9t2rtaqugy1d__loc-link" ], [ 2, [ [ "loc" ], [ "Location: ", 0 ] ], 0, "title", "Location: {loc}" ], [ 5, [ [ [ "loc" ], [ 0 ], "display", "show" ] ], 0, "display: none" ], [ 3, 1, [ "name" ] ] ] ], [ 1, 0, 0, "span", [ 4, [ [ "iw94y9t2rtaqugy1d__splitter_", "state", 1, "state", 0, [ "processing", "ready", "error" ] ] ], 0, "iw94y9t2rtaqugy1d__splitter" ], [ 3, 0, 0, " — " ] ], [ 1, 0, 0, "span", [ 4, [ [ "iw94y9t2rtaqugy1d__state_state-", "state", 1, "state", 0, [ "processing", "ready", "error" ] ], [ "iw94y9t2rtaqugy1d__state_", "pending", 2, "pending", 0 ] ], 0 ], [ 3, 1, [ "stateMessage" ] ] ] ], [ 1, 1, [ "childNodesElement" ], "div", [ 4, 0, 0, "iw94y9t2rtaqugy1d__content" ] ] ] ],
  "6.tmpl": [ [ 1, 0, [ "element" ], "div", [ 4, [ [ "iwfp5a0hbg75vmypc__", "hasOwnEnvironment", 2, "hasOwnEnvironment", 0 ] ], 0, "iu1gknzivq51w5tgw__test" ], [ 1, 1, [ "header" ], "div", [ 4, 0, 0, "iwfp5a0hbg75vmypc__header" ], [ 6, "click", "openLoc" ], [ 1, 0, 0, "span", [ 4, 0, 0, "iwfp5a0hbg75vmypc__select-button" ], [ 6, "click", "select" ], [ 3, 0, 0, "pick up" ] ], [ 1, 0, 0, "span", [ 1, 0, 0, "span", [ 5, [ [ [ "loc" ], [ 0 ], "display", "hide" ] ], 0 ], [ 3, "name", 0 ] ], [ 1, 0, 0, "span", [ 4, 0, 0, "iwfp5a0hbg75vmypc__loc-link" ], [ 2, [ [ "loc" ], [ "Location: ", 0 ] ], 0, "title", "Location: {loc}" ], [ 5, [ [ [ "loc" ], [ 0 ], "display", "show" ] ], 0, "display: none" ], [ 3, 1, [ "name" ] ] ] ], [ 1, 0, 0, "span", [ 4, [ [ "iwfp5a0hbg75vmypc__splitter_", "state", 1, "state", 0, [ "processing", "ready", "error" ] ] ], 0, "iwfp5a0hbg75vmypc__splitter" ], [ 3, 0, 0, " — " ] ], [ 1, 0, 0, "span", [ 4, [ [ "iwfp5a0hbg75vmypc__state_state-", "state", 1, "state", 0, [ "processing", "ready", "error" ] ], [ "iwfp5a0hbg75vmypc__state_", "pending", 2, "pending", 0 ] ], 0 ], [ 3, 1, [ "stateMessage" ] ] ] ], [ 8, 1, [ "source" ] ] ] ],
  "7.tmpl": [ [ 1, 0, [ "element" ], "div", [ 4, [ [ "iihy0ktbmkfb2z5ce__", "hasDelegate", 2, "hasDelegate", 0 ] ], 0, "iihy0ktbmkfb2z5ce__test" ], [ 1, 0, 0, "div", [ 4, 0, 0, "iihy0ktbmkfb2z5ce__header" ], [ 1, 0, 0, "div", [ 4, 0, 0, "iihy0ktbmkfb2z5ce__buttons" ], [ 1, 0, 0, "span", [ 4, [ [ "iihy0ktbmkfb2z5ce__button-pickup_", "type", 1, "type", 0, [ "suite" ] ] ], 0, "iihy0ktbmkfb2z5ce__button iihy0ktbmkfb2z5ce__button-pickup" ], [ 6, "click", "select" ], [ 3, 0, 0, "pick up" ] ] ], [ 1, 0, 0, "span", [ 4, 0, 0, "iihy0ktbmkfb2z5ce__caption" ], [ 3, 1, [ "name" ] ] ], [ 1, 0, 0, "span", [ 4, [ [ "iihy0ktbmkfb2z5ce__splitter_", "state", 1, "state", 0, [ "processing", "ready", "error" ] ] ], 0, "iihy0ktbmkfb2z5ce__splitter" ], [ 3, 0, 0, " — " ] ], [ 1, 0, 0, "span", [ 4, [ [ "iihy0ktbmkfb2z5ce__state_state-", "state", 1, "state", 0, [ "processing", "ready", "error" ] ], [ "iihy0ktbmkfb2z5ce__state_", "pending", 2, "pending", 0 ] ], 0 ], [ 3, 1, [ "stateMessage" ] ] ], [ 1, 0, 0, "div", [ 4, 0, 0, "iihy0ktbmkfb2z5ce__location" ], [ 5, [ [ [ "loc" ], [ 0 ], "display", "show" ] ], 0, "display: none" ], [ 1, 0, 0, "span", [ 4, 0, 0, "iihy0ktbmkfb2z5ce__loc-link" ], [ 6, "click", "openLoc" ], [ 2, 0, 0, "title", "Open location" ], [ 3, 1, [ "loc" ] ] ] ] ], [ 1, 1, [ "childNodesElement" ], "div", [ 4, 0, 0, "iu1gknzivq51w5tgw__tree" ] ], [ 8, 1, [ "sourceCode" ] ] ] ],
  "8.tmpl": [ [ 1, 0, [ "element" ], "div", [ 2, 0, 0, "id", "layout" ], [ 1, 0, 0, "div", [ 2, 0, 0, "id", "header" ], [ 4, [ [ "izzlkdijqf7n5nzej__header_", "runnerState", 1, "runnerState", 0, [ "running", "fault", "ok" ] ] ], 0 ], [ 1, 0, 0, "div", [ 4, 0, 0, "izzlkdijqf7n5nzej__header__buttons" ], [ 1, 0, 0, "button", [ 4, 0, 0, "izzlkdijqf7n5nzej__header-button" ], [ 6, "click", "run" ], [ 3, "l10n:button.caption.{runnerState}@0.l10n", 0 ] ] ], [ 1, 0, 0, "span", [ 4, 0, 0, "izzlkdijqf7n5nzej__header-caption" ], [ 1, 0, 0, "span", [ 5, [ [ [ "name" ], [ 0 ], "display", "hide" ] ], 0 ], [ 3, 0, 0, "Untitled test suite" ] ], [ 1, 0, 0, "span", [ 5, [ [ [ "name" ], [ 0 ], "display", "show" ] ], 0, "display: none" ], [ 3, 1, [ "name" ] ] ] ], [ 1, 0, 0, "div", [ 4, 0, 0, "izzlkdijqf7n5nzej__header__stat" ], [ 5, [ [ [ "name" ], [ 0 ], "display", "show" ] ], 0, "display: none" ], [ 1, 0, 0, "span", [ 4, 0, 0, "izzlkdijqf7n5nzej__stat" ], [ 1, 0, 0, "span", [ 4, 0, 0, "izzlkdijqf7n5nzej__stat__label" ], [ 3, 0, 0, "Test total" ] ], [ 1, 0, 0, "span", [ 4, 0, 0, "izzlkdijqf7n5nzej__stat__value" ], [ 3, 1, [ "total" ] ] ] ], [ 1, 0, 0, "span", [ 4, 0, 0, "izzlkdijqf7n5nzej__stat" ], [ 1, 0, 0, "span", [ 4, 0, 0, "izzlkdijqf7n5nzej__stat__label" ], [ 3, 0, 0, "Done tests" ] ], [ 1, 0, 0, "span", [ 4, 0, 0, "izzlkdijqf7n5nzej__stat__value" ], [ 3, 1, [ "done" ] ] ] ], [ 1, 0, 0, "span", [ 4, 0, 0, "izzlkdijqf7n5nzej__stat" ], [ 1, 0, 0, "span", [ 4, 0, 0, "izzlkdijqf7n5nzej__stat__label" ], [ 3, 0, 0, "Done asserts" ] ], [ 1, 0, 0, "span", [ 4, 0, 0, "izzlkdijqf7n5nzej__stat__value" ], [ 3, 1, [ "assert" ] ] ] ], [ 1, 0, 0, "span", [ 4, 0, 0, "izzlkdijqf7n5nzej__stat" ], [ 1, 0, 0, "span", [ 4, 0, 0, "izzlkdijqf7n5nzej__stat__label" ], [ 3, 0, 0, "Time" ] ], [ 1, 0, 0, "span", [ 4, 0, 0, "izzlkdijqf7n5nzej__stat__value" ], [ 3, 1, [ "time" ] ], [ 3, 0, 0, " " ], [ 1, 0, 0, "span", [ 4, 0, 0, "izzlkdijqf7n5nzej__stat__unit" ], [ 3, 0, 0, "s" ] ] ] ] ] ], [ 1, 0, 0, "div", [ 2, 0, 0, "id", "sidebar" ], [ 8, 1, [ "toc" ] ] ], [ 1, 0, 0, "div", [ 2, 0, 0, "id", "content" ], [ 8, 1, [ "tests" ] ] ] ] ],
  "0.l10n": {
    "en-US": {
      button: {
        caption: {
          running: "Running...",
          fault: "Start!",
          ok: "Start!",
          stopped: "Start!"
        }
      }
    }
  },
  "q.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var consts = basis.require("./9.js");
    var TYPE_ELEMENT = consts.TYPE_ELEMENT;
    var TYPE_ATTRIBUTE = consts.TYPE_ATTRIBUTE;
    var TYPE_TEXT = consts.TYPE_TEXT;
    var TYPE_COMMENT = consts.TYPE_COMMENT;
    var ATTR_TYPE_BY_NAME = consts.ATTR_TYPE_BY_NAME;
    var SYNTAX_ERROR = "Invalid or unsupported syntax";
    var TEXT = /((?:.|[\r\n])*?)(\{(?:l10n:([a-zA-Z_][a-zA-Z0-9_\-]*(?:\.[a-zA-Z_][a-zA-Z0-9_\-]*)*(?:\.\{[a-zA-Z_][a-zA-Z0-9_\-]*\})?)\})?|<(\/|!--(\s*\{)?)?|$)/g;
    var TAG_NAME = /([a-z_][a-z0-9\-_]*)(:|\{|\s*(\/?>)?)/ig;
    var ATTRIBUTE_NAME_OR_END = /([a-z_][a-z0-9_\-]*)(:|\{|=|\s*)|(\/?>)/ig;
    var COMMENT = /(.|[\r\n])*?-->/g;
    var CLOSE_TAG = /([a-z_][a-z0-9_\-]*(?::[a-z_][a-z0-9_\-]*)?)>/ig;
    var REFERENCE = /([a-z_][a-z0-9_]*)(\||\}\s*)/ig;
    var ATTRIBUTE_VALUE = /"((?:(\\")|[^"])*?)"\s*/g;
    var QUOTE_UNESCAPE = /\\"/g;
    var BREAK_TAG_PARSE = /^/g;
    var SINGLETON_TAG = /^(area|base|br|col|command|embed|hr|img|input|link|meta|param|source)$/i;
    var TAG_IGNORE_CONTENT = {
      text: /((?:.|[\r\n])*?)(?:<\/b:text>|$)/g,
      style: /((?:.|[\r\n])*?)(?:<\/b:style>|$)/g
    };
    var ATTR_BINDING = /\{([a-z_][a-z0-9_]*|l10n:[a-z_][a-z0-9_]*(?:\.[a-z_][a-z0-9_]*)*(?:\.\{[a-z_][a-z0-9_]*\})?)\}/i;
    var CLASS_ATTR_PARTS = /(\S+)/g;
    var CLASS_ATTR_BINDING = /^((?:[a-z_][a-z0-9_\-]*)?(?::(?:[a-z_][a-z0-9_\-]*)?)?)\{((anim:)?[a-z_][a-z0-9_\-]*)\}$/i;
    var STYLE_ATTR_PARTS = /\s*[^:]+?\s*:(?:\(.*?\)|".*?"|'.*?'|[^;]+?)+(?:;|$)/gi;
    var STYLE_PROPERTY = /\s*([^:]+?)\s*:((?:\(.*?\)|".*?"|'.*?'|[^;]+?)+);?$/i;
    var STYLE_ATTR_BINDING = /\{([a-z_][a-z0-9_]*)\}/i;
    var decodeHTMLTokens = function(string) {
      var tokenMap = {};
      var tokenElement = !basis.NODE_ENV ? document.createElement("div") : null;
      var NAMED_CHARACTER_REF = /&([a-z]+\d*|#\d+|#x[0-9a-f]{1,4});?/gi;
      if (basis.NODE_ENV) tokenMap = __nodejsRequire("./htmlentity.json");
      function namedCharReplace(m, token) {
        if (!tokenMap[token]) {
          if (token.charAt(0) == "#") {
            tokenMap[token] = String.fromCharCode(token.charAt(1) == "x" || token.charAt(1) == "X" ? parseInt(token.substr(2), 16) : token.substr(1));
          } else {
            if (tokenElement) {
              tokenElement.innerHTML = m;
              tokenMap[token] = tokenElement.firstChild ? tokenElement.firstChild.nodeValue : m;
            }
          }
        }
        return tokenMap[token] || m;
      }
      return function decodeHTMLTokens(string) {
        return String(string).replace(NAMED_CHARACTER_REF, namedCharReplace);
      };
    }();
    function buildAttrExpression(parts) {
      var bindName;
      var names = [];
      var expression = [];
      var map = {};
      for (var j = 0; j < parts.length; j++) if (j % 2) {
        bindName = parts[j];
        if (!map[bindName]) {
          map[bindName] = names.length;
          names.push(bindName);
        }
        expression.push(map[bindName]);
      } else {
        if (parts[j]) expression.push(decodeHTMLTokens(parts[j]));
      }
      return [ names, expression ];
    }
    function processAttr(token, mode, convertRange) {
      var value = token.value;
      var bindings = 0;
      var parts;
      var m;
      if (value) {
        switch (mode) {
          case "class":
            var pos = token.valueRange.start_;
            var rx = /(\s*)(\S+)/g;
            var newValue = [];
            var partMap = [];
            var binding;
            bindings = [];
            while (part = rx.exec(value)) {
              var val = part[2];
              var valInfo = {
                value: val,
                range: {
                  start_: pos += part[1].length,
                  end_: pos += val.length
                }
              };
              convertRange(valInfo);
              if (m = val.match(CLASS_ATTR_BINDING)) {
                binding = [ m[1] || "", m[2] ];
                binding.info_ = valInfo;
                bindings.push(binding);
              } else newValue.push(val);
              partMap.push(valInfo);
            }
            value = newValue.join(" ");
            token.map_ = partMap;
            break;
          case "style":
            var props = [];
            bindings = [];
            if (parts = value.match(STYLE_ATTR_PARTS)) {
              for (var j = 0, part; part = parts[j]; j++) {
                var m = part.match(STYLE_PROPERTY);
                var propertyName = m[1];
                var value = m[2].trim();
                var valueParts = value.split(STYLE_ATTR_BINDING);
                if (valueParts.length > 1) {
                  var expr = buildAttrExpression(valueParts);
                  expr.push(propertyName);
                  bindings.push(expr);
                } else props.push(propertyName + ": " + decodeHTMLTokens(value));
              }
            } else {
              if (/\S/.test(value)) basis.dev.warn("Bad value for style attribute (value ignored):", value);
            }
            value = props.join("; ");
            if (value) value += ";";
            break;
          default:
            parts = value.split(ATTR_BINDING);
            if (parts.length > 1) bindings = buildAttrExpression(parts); else value = decodeHTMLTokens(value);
        }
      }
      if (bindings && !bindings.length) bindings = 0;
      token.binding = bindings;
      token.value = value;
      token.type = ATTR_TYPE_BY_NAME[mode] || TYPE_ATTRIBUTE;
    }
    function postProcessing(tokens, options, source) {
      function tokenName(token) {
        return (token.prefix ? token.prefix + ":" : "") + token.name;
      }
      function getTokenAttrs(token) {
        return token.attrs.reduce(function(res, attr) {
          res[tokenName(attr)] = attr.value;
          return res;
        }, {});
      }
      function buildLocationIndex() {
        var line = 1;
        var column = 0;
        lineIdx = new Array(source.length);
        columnIdx = new Array(source.length);
        for (var i = 0; i < source.length + 1; i++) {
          lineIdx[i] = line;
          columnIdx[i] = column;
          if (source[i] === "\n") {
            line++;
            column = 0;
          } else column++;
        }
      }
      function findLocationByOffset(offset) {
        return {
          line: lineIdx[offset],
          column: columnIdx[offset]
        };
      }
      function getLocationFromRange(range) {
        return {
          start: findLocationByOffset(range.start_),
          end: findLocationByOffset(range.end_)
        };
      }
      function convertRange(token) {
        if (options.loc) {
          token.loc = getLocationFromRange(token.range);
          if (token.valueRange) token.valueLoc = getLocationFromRange(token.valueRange);
        }
        if (options.range) {
          token.range = [ token.range.start_, token.range.end_ ];
          if (token.valueRange) token.valueRange = [ token.valueRange.start_, token.valueRange.end_ ];
        } else {
          delete token.range;
          delete token.valueRange;
        }
      }
      function walk(tokens) {
        var token;
        var prev;
        for (var i = 0; token = tokens[i++]; prev = token) {
          if (token.type == TYPE_ELEMENT) {
            var attrs = getTokenAttrs(token);
            for (var j = 0, attr; attr = token.attrs[j++]; ) {
              var mode;
              if (token.prefix == "b") {
                if (attr.name == "value") {
                  if (/^(|append-|set-|remove-)class$/.test(token.name)) mode = "class"; else if (/^(|append-|set-|remove-)attr$/.test(token.name)) mode = attrs.name;
                } else if (token.name == "include") {
                  if (attr.name == "class") mode = "class"; else if (attr.name == "id") mode = "id";
                }
              } else {
                mode = attr.name;
              }
              if (mode) {
                processAttr(attr, mode, convertRange);
              } else {
                attr.value = decodeHTMLTokens(attr.value || "");
              }
              convertRange(attr);
            }
            walk(token.children);
          }
          if (token.type == TYPE_TEXT) {
            token.value = decodeHTMLTokens(token.value);
            if (!token.refs && prev && prev.type == TYPE_TEXT && !prev.refs) {
              prev.value += token.value;
              prev.end_ = token.end_;
              tokens.splice(--i, 1);
            }
          }
          if (token.type == TYPE_COMMENT) {
            token.value = decodeHTMLTokens(token.value);
          }
          convertRange(token);
        }
      }
      var lineIdx;
      var columnIdx;
      if (options.loc) buildLocationIndex();
      walk(tokens);
    }
    function tokenize(source, options) {
      var result = [];
      var tagStack = [];
      var lastTag = {
        children: result
      };
      var parseTag = false;
      var token;
      var state = TEXT;
      var pos = 0;
      var textStateEndPos = 0;
      var textEndPos;
      var bufferPos;
      var startPos;
      var m;
      result.source_ = source;
      result.warns = [];
      if (!options || options.trim !== false) {
        pos = textStateEndPos = source.match(/^\s*/)[0].length;
        source = source.trimRight();
      }
      while (pos < source.length || state != TEXT) {
        state.lastIndex = pos;
        startPos = pos;
        m = state.exec(source);
        if (!m || m.index !== pos) {
          if (state == REFERENCE && token && token.type == TYPE_COMMENT) {
            state = COMMENT;
            continue;
          }
          if (parseTag) lastTag = tagStack.pop();
          if (token) lastTag.children.pop();
          if (token = lastTag.children.pop()) {
            if (token.type == TYPE_TEXT && !token.refs) textStateEndPos -= "len" in token ? token.len : token.value.length; else lastTag.children.push(token);
          }
          parseTag = false;
          state = TEXT;
          continue;
        }
        pos = state.lastIndex;
        switch (state) {
          case TEXT:
            textEndPos = startPos + m[1].length;
            if (textStateEndPos != textEndPos) {
              var sourceText = textStateEndPos == startPos ? m[1] : source.substring(textStateEndPos, textEndPos);
              sourceText = sourceText.replace(/\s*(\r\n?|\n\r?)\s*/g, "");
              if (sourceText) lastTag.children.push({
                type: TYPE_TEXT,
                len: sourceText.length,
                value: sourceText,
                range: {
                  start_: textStateEndPos,
                  end_: textEndPos
                }
              });
            }
            textStateEndPos = textEndPos;
            if (m[3]) {
              lastTag.children.push({
                type: TYPE_TEXT,
                refs: [ "l10n:" + m[3] ],
                value: "{l10n:" + m[3] + "}",
                range: {
                  start_: textEndPos,
                  end_: pos
                }
              });
            } else if (m[2] == "{") {
              bufferPos = pos - 1;
              lastTag.children.push(token = {
                type: TYPE_TEXT,
                range: {
                  start_: textEndPos,
                  end_: textEndPos
                }
              });
              state = REFERENCE;
            } else if (m[4]) {
              if (m[4] == "/") {
                token = null;
                state = CLOSE_TAG;
              } else {
                lastTag.children.push(token = {
                  type: TYPE_COMMENT,
                  range: {
                    start_: textEndPos,
                    end_: textEndPos
                  }
                });
                if (m[5]) {
                  bufferPos = pos - m[5].length;
                  state = REFERENCE;
                } else {
                  bufferPos = pos;
                  state = COMMENT;
                }
              }
            } else if (m[2]) {
              parseTag = true;
              tagStack.push(lastTag);
              lastTag.children.push(token = {
                type: TYPE_ELEMENT,
                attrs: [],
                children: [],
                range: {
                  start_: textEndPos,
                  end_: textEndPos
                }
              });
              lastTag = token;
              state = TAG_NAME;
            }
            break;
          case CLOSE_TAG:
            if (m[1] !== (lastTag.prefix ? lastTag.prefix + ":" : "") + lastTag.name) {
              lastTag.children.push({
                type: TYPE_TEXT,
                value: "</" + m[0],
                range: {
                  start_: startPos - 2,
                  end_: startPos + m[0].length
                }
              });
            } else lastTag = tagStack.pop();
            state = TEXT;
            break;
          case TAG_NAME:
          case ATTRIBUTE_NAME_OR_END:
            if (m[2] == ":") {
              if (token.prefix) state = BREAK_TAG_PARSE; else token.prefix = m[1];
              break;
            }
            if (m[1]) {
              token.name = m[1];
              token.range.end_ = startPos + m[1].length;
              if (token.type == TYPE_ATTRIBUTE) lastTag.attrs.push(token);
            }
            if (m[2] == "{") {
              if (token.type == TYPE_ELEMENT) state = REFERENCE; else state = BREAK_TAG_PARSE;
              break;
            }
            if (m[3]) {
              parseTag = false;
              lastTag.range.end_ = pos;
              if (m[3] == "/>" || !lastTag.prefix && SINGLETON_TAG.test(lastTag.name)) {
                if (m[3] != "/>") result.warns.push([ "Tag <" + lastTag.name + "> doesn't closed explicit (use `/>` as tag ending)", lastTag ]);
                lastTag = tagStack.pop();
              } else {
                if (lastTag.prefix == "b" && lastTag.name in TAG_IGNORE_CONTENT) {
                  state = TAG_IGNORE_CONTENT[lastTag.name];
                  break;
                }
              }
              state = TEXT;
              break;
            }
            if (m[2] == "=") {
              state = ATTRIBUTE_VALUE;
              break;
            }
            token = {
              type: TYPE_ATTRIBUTE,
              range: {
                start_: pos,
                end_: pos
              }
            };
            state = ATTRIBUTE_NAME_OR_END;
            break;
          case COMMENT:
            token.value = source.substring(bufferPos, pos - 3);
            token.range.end_ = pos;
            state = TEXT;
            break;
          case REFERENCE:
            if (token.refs) token.refs.push(m[1]); else token.refs = [ m[1] ];
            if (m[2] != "|") {
              if (token.type == TYPE_TEXT) {
                pos -= m[2].length - 1;
                token.value = source.substring(bufferPos, pos);
                token.range.end_ = pos;
                state = TEXT;
              } else if (token.type == TYPE_COMMENT) {
                state = COMMENT;
              } else if (token.type == TYPE_ATTRIBUTE && source[pos] == "=") {
                pos++;
                state = ATTRIBUTE_VALUE;
              } else {
                token = {
                  type: TYPE_ATTRIBUTE,
                  range: {
                    start_: pos,
                    end_: pos
                  }
                };
                state = ATTRIBUTE_NAME_OR_END;
              }
            }
            break;
          case ATTRIBUTE_VALUE:
            token.value = m[1].replace(QUOTE_UNESCAPE, '"');
            token.range.end_ = pos;
            token.valueRange = {
              start_: startPos + 1,
              end_: startPos + 1 + m[1].length
            };
            token = {
              type: TYPE_ATTRIBUTE,
              range: {
                start_: pos,
                end_: pos
              }
            };
            state = ATTRIBUTE_NAME_OR_END;
            break;
          case TAG_IGNORE_CONTENT.text:
          case TAG_IGNORE_CONTENT.style:
            lastTag.children.push({
              type: TYPE_TEXT,
              value: m[1],
              range: {
                start_: startPos,
                end_: startPos + m[1].length
              }
            });
            lastTag = tagStack.pop();
            state = TEXT;
            break;
          default:
            throw "Parser bug";
        }
        if (state == TEXT) textStateEndPos = pos;
      }
      if (textStateEndPos != pos) lastTag.children.push({
        type: TYPE_TEXT,
        value: source.substring(textStateEndPos, pos),
        range: {
          start_: textStateEndPos,
          end_: pos
        }
      });
      postProcessing(result, options || {}, source);
      if (lastTag.name) result.warns.push([ "No close tag for <" + lastTag.name + ">", lastTag ]);
      if (!result.warns.length) delete result.warns;
      result.templateTokens = true;
      return result;
    }
    module.exports = tokenize;
  },
  "r.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var CSS_CLASSNAME_START = /^\-?([_a-z]|[^\x00-\xb1]|\\[0-9a-f]{1,6}(\r\n|[ \n\r\t\f])?|\\[^\n\r\f0-9a-f])/i;
    var CSS_CLASSNAME_START_MAXLEN = 8;
    var CSS_NESTED_ATRULE = /^(media|supports|document)\b/i;
    var CSS_NESTED_ATRULE_MAXLEN = 8;
    var CSS_FNSELECTOR = /^(not|has|matches|nth-child|nth-last-child)\(/i;
    var CSS_FNSELECTOR_MAXLEN = 15;
    function genIsolateMarker() {
      return "i" + basis.genUID() + "__";
    }
    function isolateCss(css, prefix) {
      function jumpAfter(str, offset) {
        var index = css.indexOf(str, offset);
        i = index !== -1 ? index + str.length : sym.length;
      }
      function parseString(endSym) {
        var quote = sym[i];
        if (quote !== '"' && quote !== "'") return;
        for (i++; i < len && sym[i] !== quote; i++) if (sym[i] === "\\") i++;
        return true;
      }
      function parseBraces(endSym) {
        var bracket = sym[i];
        if (bracket === "(") {
          jumpAfter(")", i + 1);
          return true;
        }
        if (bracket === "[") {
          for (i++; i < len && sym[i] !== "]"; i++) parseString();
          return true;
        }
      }
      function parseComment() {
        if (sym[i] !== "/" || sym[i + 1] !== "*") return;
        jumpAfter("*/", i + 2);
        return true;
      }
      function parsePseudoContent() {
        for (; i < len && sym[i] != ")"; i++) if (parseComment() || parseBraces() || parsePseudo() || parseClassName()) continue;
      }
      function parsePseudo() {
        if (sym[i] !== ":") return;
        var m = css.substr(i + 1, CSS_FNSELECTOR_MAXLEN).match(CSS_FNSELECTOR);
        if (m) {
          i += m[0].length + 1;
          parsePseudoContent();
        }
        return true;
      }
      function parseAtRule() {
        if (sym[i] !== "@") return;
        var m = css.substr(i + 1, CSS_NESTED_ATRULE_MAXLEN).match(CSS_NESTED_ATRULE);
        if (m) {
          i += m[0].length;
          nestedStyleSheet = true;
        }
        return true;
      }
      function parseBlock() {
        if (sym[i] !== "{") return;
        if (nestedStyleSheet) {
          i++;
          parseStyleSheet(true);
          return;
        }
        for (i++; i < len && sym[i] !== "}"; i++) parseString() || parseBraces();
        return true;
      }
      function parseClassName() {
        if (sym[i] !== ".") return;
        var m = css.substr(i + 1, CSS_CLASSNAME_START_MAXLEN).match(CSS_CLASSNAME_START);
        if (m) {
          i++;
          result.push(css.substring(lastMatchPos, i), prefix);
          lastMatchPos = i;
        }
        return true;
      }
      function parseStyleSheet(nested) {
        for (nestedStyleSheet = false; i < len; i++) {
          if (parseComment() || parseAtRule() || parsePseudo() || parseBraces() || parseClassName()) continue;
          if (nested && sym[i] == "}") return;
          parseBlock();
        }
      }
      var result = [];
      var sym = css.split("");
      var len = sym.length;
      var lastMatchPos = 0;
      var i = 0;
      var nestedStyleSheet;
      if (!prefix) prefix = genIsolateMarker();
      parseStyleSheet(false);
      return result.join("") + css.substring(lastMatchPos);
    }
    module.exports = isolateCss;
  },
  "c.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var namespace = this.path;
    var themes = {};
    var sourceByPath = {};
    var themeChangeHandlers = [];
    var currentThemeName = "base";
    var baseTheme;
    var Theme = basis.Class(null, {
      className: namespace + ".Theme",
      get: getSourceByPath
    });
    var SourceWrapper = basis.Class(basis.Token, {
      className: namespace + ".SourceWrapper",
      path: "",
      url: "",
      baseURI: "",
      init: function(value, path) {
        this.path = path;
        basis.Token.prototype.init.call(this, "");
      },
      get: function() {
        return this.value && this.value.bindingBridge ? this.value.bindingBridge.get(this.value) : this.value;
      },
      set: function() {
        var content = getThemeSource(currentThemeName, this.path);
        if (this.value != content) {
          if (this.value && this.value.bindingBridge) this.value.bindingBridge.detach(this.value, SourceWrapper.prototype.apply, this);
          this.value = content;
          this.url = content && content.url || "";
          this.baseURI = (typeof content == "object" || typeof content == "function") && "baseURI" in content ? content.baseURI : basis.path.dirname(this.url) + "/";
          if (this.value && this.value.bindingBridge) this.value.bindingBridge.attach(this.value, SourceWrapper.prototype.apply, this);
          this.apply();
        }
      },
      destroy: function() {
        this.url = null;
        this.baseURI = null;
        if (this.value && this.value.bindingBridge) this.value.bindingBridge.detach(this.value, this.apply, this);
        basis.Token.prototype.destroy.call(this);
      }
    });
    function getSourceByPath() {
      var path = basis.array(arguments).join(".");
      var source = sourceByPath[path];
      if (!source) {
        source = new SourceWrapper("", path);
        sourceByPath[path] = source;
      }
      return source;
    }
    function normalize(list) {
      var used = {};
      var result = [];
      for (var i = 0; i < list.length; i++) if (!used[list[i]]) {
        used[list[i]] = true;
        result.push(list[i]);
      }
      return result;
    }
    function extendFallback(themeName, list) {
      var result = [];
      result.source = normalize(list).join("/");
      var used = {
        base: true
      };
      for (var i = 0; i < list.length; i++) {
        var name = list[i] || "base";
        if (name == themeName || used[name]) continue;
        var theme = getTheme(name);
        used[name] = true;
        result.push(name);
        list.splice.apply(list, [ i + 1, 0 ].concat(themes[name].fallback));
      }
      result.unshift(themeName);
      if (themeName != "base") result.push("base");
      result.value = result.join("/");
      return result;
    }
    function getThemeSource(name, path) {
      var sourceList = themes[name].sourcesList;
      for (var i = 0, map; map = sourceList[i]; i++) if (map.hasOwnProperty(path)) return map[path];
      return "";
    }
    function themeHasEffect(themeName) {
      return themes[currentThemeName].fallback.indexOf(themeName) != -1;
    }
    function syncCurrentThemePath(path) {
      getSourceByPath(path).set();
    }
    function syncCurrentTheme(changed) {
      basis.dev.log("re-apply templates");
      for (var path in sourceByPath) syncCurrentThemePath(path);
    }
    function getTheme(name) {
      if (!name) name = "base";
      if (themes[name]) return themes[name].theme;
      if (!/^([a-z0-9\_\-]+)$/.test(name)) throw "Bad name for theme - " + name;
      var sources = {};
      var sourceList = [ sources ];
      var themeInterface = new Theme;
      themes[name] = {
        theme: themeInterface,
        sources: sources,
        sourcesList: sourceList,
        fallback: []
      };
      var addSource = function(path, source) {
        if (path in sources == false) {
          sources[path] = source;
          if (themeHasEffect(name)) syncCurrentThemePath(path);
        } else basis.dev.warn("Template path `" + path + "` is already defined for theme `" + name + "` (definition ignored).");
        return getSourceByPath(path);
      };
      basis.object.extend(themeInterface, {
        name: name,
        fallback: function(value) {
          if (themeInterface !== baseTheme && arguments.length > 0) {
            var newFallback = typeof value == "string" ? value.split("/") : [];
            var changed = {};
            newFallback = extendFallback(name, newFallback);
            if (themes[name].fallback.source != newFallback.source) {
              themes[name].fallback.source = newFallback.source;
              basis.dev.log("fallback changed");
              for (var themeName in themes) {
                var curFallback = themes[themeName].fallback;
                var newFallback = extendFallback(themeName, (curFallback.source || "").split("/"));
                if (newFallback.value != curFallback.value) {
                  changed[themeName] = true;
                  themes[themeName].fallback = newFallback;
                  var sourceList = themes[themeName].sourcesList;
                  sourceList.length = newFallback.length;
                  for (var i = 0; i < sourceList.length; i++) sourceList[i] = themes[newFallback[i]].sources;
                }
              }
            }
            var currentFallback = themes[currentThemeName].fallback;
            for (var themeName in changed) {
              if (themeHasEffect(themeName)) {
                syncCurrentTheme();
                break;
              }
            }
          }
          var result = themes[name].fallback.slice(1);
          result.source = themes[name].fallback.source;
          return result;
        },
        define: function(what, wherewith) {
          if (typeof what == "function") what = what();
          if (typeof what == "string") {
            if (typeof wherewith == "object") {
              var namespace = what;
              var dictionary = wherewith;
              var result = {};
              for (var key in dictionary) if (dictionary.hasOwnProperty(key)) result[key] = addSource(namespace + "." + key, dictionary[key]);
              return result;
            } else {
              if (arguments.length == 1) {
                return getSourceByPath(what);
              } else {
                return addSource(what, wherewith);
              }
            }
          } else {
            if (typeof what == "object") {
              var dictionary = what;
              for (var path in dictionary) if (dictionary.hasOwnProperty(path)) addSource(path, dictionary[path]);
              return themeInterface;
            } else {
              basis.dev.warn("Wrong first argument for basis.template.Theme#define");
            }
          }
        },
        apply: function() {
          if (name != currentThemeName) {
            currentThemeName = name;
            syncCurrentTheme();
            for (var i = 0, handler; handler = themeChangeHandlers[i]; i++) handler.fn.call(handler.context, name);
            basis.dev.info("Template theme switched to `" + name + "`");
          }
          return themeInterface;
        },
        getSource: function(path, withFallback) {
          return withFallback ? getThemeSource(name, path) : sources[path];
        },
        drop: function(path) {
          if (sources.hasOwnProperty(path)) {
            delete sources[path];
            if (themeHasEffect(name)) syncCurrentThemePath(path);
          }
        }
      });
      themes[name].fallback = extendFallback(name, []);
      sourceList.push(themes.base.sources);
      return themeInterface;
    }
    function onThemeChange(fn, context, fire) {
      themeChangeHandlers.push({
        fn: fn,
        context: context
      });
      if (fire) fn.call(context, currentThemeName);
    }
    basis.cleaner.add({
      destroy: function() {
        for (var path in sourceByPath) sourceByPath[path].destroy();
        themes = null;
        sourceByPath = null;
      }
    });
    baseTheme = getTheme();
    module.exports = {
      SourceWrapper: SourceWrapper,
      Theme: Theme,
      theme: getTheme,
      getThemeList: function() {
        return basis.object.keys(themes);
      },
      currentTheme: function() {
        return themes[currentThemeName].theme;
      },
      setTheme: function(name) {
        return getTheme(name).apply();
      },
      onThemeChange: onThemeChange,
      define: baseTheme.define,
      get: getSourceByPath,
      getPathList: function() {
        return basis.object.keys(sourceByPath);
      }
    };
    getTheme("base").define({
      "#1": basis.resource("0.tmpl"),
      "#2": basis.resource("1.tmpl"),
      "#3": basis.resource("2.tmpl"),
      "#4": basis.resource("3.tmpl"),
      "#5": basis.resource("4.tmpl"),
      "#6": basis.resource("5.tmpl"),
      "#7": basis.resource("6.tmpl"),
      "#8": basis.resource("7.tmpl"),
      "#9": basis.resource("8.tmpl")
    });
  },
  "d.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var namespace = this.path;
    var Class = basis.Class;
    var complete = basis.object.complete;
    var arrayFrom = basis.array;
    var arrayRemove = basis.array.remove;
    var $undef = basis.fn.$undef;
    var getter = basis.getter;
    var nullGetter = basis.fn.nullGetter;
    var oneFunctionProperty = Class.oneFunctionProperty;
    var basisEvent = basis.require("./2.js");
    var createEvent = basisEvent.create;
    var events = basisEvent.events;
    var basisData = basis.require("./1.js");
    var resolveValue = basisData.resolveValue;
    var resolveDataset = basisData.resolveDataset;
    var SUBSCRIPTION = basisData.SUBSCRIPTION;
    var STATE = basisData.STATE;
    var AbstractData = basisData.AbstractData;
    var DataObject = basisData.Object;
    var ReadOnlyDataset = basisData.ReadOnlyDataset;
    var Dataset = basisData.Dataset;
    var EXCEPTION_CANT_INSERT = namespace + ": Node can't be inserted at specified point in hierarchy";
    var EXCEPTION_NODE_NOT_FOUND = namespace + ": Node was not found";
    var EXCEPTION_BAD_CHILD_CLASS = namespace + ": Child node has wrong class";
    var EXCEPTION_NULL_CHILD = namespace + ": Child node is null";
    var EXCEPTION_DATASOURCE_CONFLICT = namespace + ": Operation is not allowed because node is under dataSource control";
    var EXCEPTION_DATASOURCEADAPTER_CONFLICT = namespace + ": Operation is not allowed because node is under dataSource adapter control";
    var EXCEPTION_PARENTNODE_OWNER_CONFLICT = namespace + ": Node can't has owner and parentNode";
    var EXCEPTION_NO_CHILDCLASS = namespace + ": Node can't has children and dataSource as childClass isn't specified";
    var DELEGATE = {
      ANY: true,
      NONE: false,
      PARENT: "parent",
      OWNER: "owner"
    };
    var childNodesDatasetMap = {};
    function warnOnDataSourceItemNodeDestoy() {
      basis.dev.warn(namespace + ": node can't be destroyed as representing dataSource item, destroy delegate item or remove it from dataSource first");
    }
    function warnOnAutoSatelliteOwnerChange() {
      basis.dev.warn(namespace + ": satellite can't change owner as it auto-satellite");
    }
    function warnOnAutoSatelliteDestoy() {
      basis.dev.warn(namespace + ": satellite can't be destroyed as it auto-create satellite, and could be destroyed on owner destroy");
    }
    function lockDataSourceItemNode(node) {
      node.setDelegate = basis.fn.$undef;
      node.destroy = warnOnDataSourceItemNodeDestoy;
    }
    function unlockDataSourceItemNode(node) {
      var proto = node.constructor.prototype;
      node.setDelegate = proto.setDelegate;
      node.destroy = proto.destroy;
    }
    function sortingSearch(node) {
      return node.sortingValue || 0;
    }
    function sortAsc(a, b) {
      a = a.sortingValue || 0;
      b = b.sortingValue || 0;
      return +(a > b) || -(a < b);
    }
    function sortDesc(a, b) {
      a = a.sortingValue || 0;
      b = b.sortingValue || 0;
      return -(a > b) || +(a < b);
    }
    function sortChildNodes(obj) {
      return obj.childNodes.sort(obj.sortingDesc ? sortDesc : sortAsc);
    }
    function binarySearchPos(array, value, getter_, desc) {
      if (!array.length) return 0;
      desc = !!desc;
      var pos;
      var compareValue;
      var l = 0;
      var r = array.length - 1;
      do {
        pos = l + r >> 1;
        compareValue = getter_(array[pos]);
        if (desc ? value > compareValue : value < compareValue) r = pos - 1; else if (desc ? value < compareValue : value > compareValue) l = pos + 1; else return value == compareValue ? pos : 0;
      } while (l <= r);
      return pos + (compareValue < value ^ desc);
    }
    function updateNodeContextSelection(root, oldSelection, newSelection, rootUpdate, ignoreRootSelection) {
      if (oldSelection === newSelection) return;
      var nextNode;
      var cursor = root;
      var selected = [];
      if (rootUpdate) {
        root.contextSelection = newSelection;
        if (root.selected && !root.selectedRA_) selected.push(root);
      }
      while (cursor) {
        nextNode = !cursor.selection || ignoreRootSelection && cursor === root ? cursor.firstChild : null;
        if (nextNode && nextNode.contextSelection !== oldSelection) throw "Try change wrong context selection";
        while (!nextNode) {
          if (cursor === root) {
            if (selected.length) {
              if (oldSelection) oldSelection.remove(selected);
              if (newSelection) {
                newSelection.add(selected);
                for (var i = 0; i < selected.length; i++) {
                  var node = selected[i];
                  if (node.selected && !newSelection.has(node)) {
                    node.selected = false;
                    node.emit_unselect();
                  }
                }
              }
            }
            return;
          }
          nextNode = cursor.nextSibling;
          if (!nextNode) cursor = cursor.parentNode;
        }
        cursor = nextNode;
        if (cursor.selected && !cursor.selectedRA_) selected.push(cursor);
        cursor.contextSelection = newSelection;
      }
    }
    function updateNodeDisableContext(node, disabled) {
      if (node.contextDisabled != disabled) {
        node.contextDisabled = disabled;
        if (node.disabled) return;
        if (disabled) node.emit_disable(); else node.emit_enable();
      }
    }
    SUBSCRIPTION.addProperty("owner");
    SUBSCRIPTION.addProperty("dataSource");
    SUBSCRIPTION.add("CHILD", {
      childNodesModified: function(object, delta) {
        var array;
        if (array = delta.inserted) for (var i = 0, item; item = array[i]; i++) SUBSCRIPTION.link("child", object, array[i]);
        if (array = delta.deleted) for (var i = 0, item; item = array[i]; i++) SUBSCRIPTION.unlink("child", object, array[i]);
      }
    }, function(action, object) {
      var childNodes = object.childNodes || [];
      for (var i = 0, child; child = childNodes[i]; i++) action("child", object, child);
    });
    SUBSCRIPTION.add("SATELLITE", {
      satelliteChanged: function(object, name, oldSatellite) {
        if (oldSatellite) SUBSCRIPTION.unlink("satellite", object, oldSatellite);
        if (object.satellite[name]) SUBSCRIPTION.link("satellite", object, object.satellite[name]);
      }
    }, function(action, object) {
      var satellites = object.satellite;
      if (satellites !== NULL_SATELLITE) for (var name in satellites) if (name !== "__auto__") action("satellite", object, satellites[name]);
    });
    function processSatelliteConfig(satelliteConfig) {
      if (!satelliteConfig) return null;
      if (satelliteConfig.isSatelliteConfig) return satelliteConfig;
      if (satelliteConfig instanceof AbstractNode) return satelliteConfig;
      if (Class.isClass(satelliteConfig)) satelliteConfig = {
        satelliteClass: satelliteConfig
      };
      if (satelliteConfig.constructor === Object) {
        var handlerRequired = false;
        var events = "update";
        var satelliteClass;
        var config = {
          isSatelliteConfig: true
        };
        for (var key in satelliteConfig) {
          var value = satelliteConfig[key];
          switch (key) {
            case "instance":
              if (value instanceof AbstractNode) config[key] = value; else basis.dev.warn(namespace + ": `instance` value in satellite config must be an instance of basis.dom.wrapper.AbstractNode");
              break;
            case "instanceOf":
            case "satelliteClass":
              if (key == "instanceOf") {
                basis.dev.warn(namespace + ": `instanceOf` in satellite config is deprecated, use `satelliteClass` instead");
                if ("satelliteClass" in satelliteConfig) {
                  basis.dev.warn(namespace + ": `instanceOf` in satellite config has ignored, as `satelliteClass` is specified");
                  break;
                }
              }
              if (Class.isClass(value) && value.isSubclassOf(AbstractNode)) satelliteClass = value; else basis.dev.warn(namespace + ": `satelliteClass` value in satellite config should be a subclass of basis.dom.wrapper.AbstractNode");
              break;
            case "existsIf":
            case "delegate":
            case "dataSource":
              if (value) {
                if (typeof value == "string") value = getter(value);
                if (typeof value != "function") value = basis.fn.$const(value); else handlerRequired = true;
              }
              config[key] = value;
              break;
            case "config":
              config[key] = typeof value == "string" ? getter(value) : value;
              break;
            case "events":
              events = satelliteConfig.events;
              break;
            default:
              basis.dev.warn("Unknown satellite config option – " + key);
          }
        }
        if (!config.instance) config.satelliteClass = satelliteClass || AbstractNode; else {
          if (satelliteClass) basis.dev.warn(namespace + ": `satelliteClass` can't be set with `instance` value in satellite config, value ignored");
        }
        if (handlerRequired) {
          if (Array.isArray(events)) events = events.join(" ");
          if (typeof events == "string") {
            var handler = {};
            events = events.split(/\s+/);
            for (var i = 0, eventName; eventName = events[i]; i++) {
              handler[eventName] = SATELLITE_UPDATE;
              config.handler = handler;
            }
          }
        }
        return config;
      }
      return null;
    }
    function applySatellites(node, satellites) {
      for (var name in satellites) if (satellites[name] && typeof satellites[name] == "object") node.setSatellite(name, satellites[name]);
    }
    var NULL_SATELLITE = Class.customExtendProperty({}, function(result, extend) {
      for (var name in extend) result[name] = processSatelliteConfig(extend[name]);
    });
    var SATELLITE_UPDATE = function() {
      var name = this.name;
      var config = this.config;
      var owner = this.owner;
      var satellite = this.instance;
      var exists = "existsIf" in config == false || config.existsIf(owner);
      if (resolveValue(this, SATELLITE_UPDATE, exists, "existsAdapter")) {
        if (satellite) {
          if (config.delegate) satellite.setDelegate(config.delegate(owner));
          if (config.dataSource) satellite.setDataSource(config.dataSource(owner));
        } else {
          satellite = config.instance;
          if (!satellite) {
            var listenHandler;
            var satelliteConfig = (typeof config.config == "function" ? config.config(owner) : config.config) || {};
            satelliteConfig.owner = owner;
            if (config.delegate) {
              satelliteConfig.autoDelegate = false;
              satelliteConfig.delegate = config.delegate(owner);
            }
            if (config.dataSource) satelliteConfig.dataSource = config.dataSource(owner);
            satellite = new config.satelliteClass(satelliteConfig);
            satellite.destroy = warnOnAutoSatelliteDestoy;
            if (listenHandler = owner.listen.satellite) satellite.addHandler(listenHandler, owner);
            if (listenHandler = owner.listen["satellite:" + name]) satellite.addHandler(listenHandler, owner);
          } else {
            if (config.delegate) satellite.setDelegate(config.delegate(owner));
            if (config.dataSource) satellite.setDataSource(config.dataSource(owner));
          }
          this.instance = satellite;
          owner.setSatellite(name, satellite, true);
        }
      } else {
        if (satellite) {
          if (config.instance) {
            if (config.delegate) satellite.setDelegate();
            if (config.dataSource) satellite.setDataSource();
          }
          this.instance = null;
          owner.setSatellite(name, null, true);
        }
      }
    };
    var AUTO_SATELLITE_INSTANCE_HANDLER = {
      destroy: function() {
        this.owner.setSatellite(this.name, null);
      }
    };
    var AbstractNode = Class(DataObject, {
      className: namespace + ".AbstractNode",
      subscribeTo: DataObject.prototype.subscribeTo + SUBSCRIPTION.DATASOURCE + SUBSCRIPTION.SATELLITE,
      isSyncRequired: function() {
        return this.state == STATE.UNDEFINED || this.state == STATE.DEPRECATED;
      },
      syncEvents: {
        activeChanged: false
      },
      emit_update: function(delta) {
        DataObject.prototype.emit_update.call(this, delta);
        var parentNode = this.parentNode;
        if (parentNode) {
          if (parentNode.matchFunction) this.match(parentNode.matchFunction);
          parentNode.insertBefore(this, this.nextSibling);
        }
      },
      listen: {
        owner: {
          destroy: function() {
            if (!this.ownerSatelliteName) this.setOwner();
          }
        }
      },
      autoDelegate: DELEGATE.NONE,
      name: null,
      childNodes: null,
      emit_childNodesModified: createEvent("childNodesModified", "delta") && function(delta) {
        events.childNodesModified.call(this, delta);
        var listen = this.listen.childNode;
        var array;
        if (listen) {
          if (array = delta.inserted) for (var i = 0, child; child = array[i]; i++) child.addHandler(listen, this);
          if (array = delta.deleted) for (var i = 0, child; child = array[i]; i++) child.removeHandler(listen, this);
        }
      },
      childNodesState: STATE.UNDEFINED,
      emit_childNodesStateChanged: createEvent("childNodesStateChanged", "oldState"),
      childClass: AbstractNode,
      dataSource: null,
      emit_dataSourceChanged: createEvent("dataSourceChanged", "oldDataSource"),
      dataSourceRA_: null,
      dataSourceMap_: null,
      destroyDataSourceMember: true,
      parentNode: null,
      emit_parentChanged: createEvent("parentChanged", "oldParentNode"),
      nextSibling: null,
      previousSibling: null,
      firstChild: null,
      lastChild: null,
      sorting: nullGetter,
      sortingDesc: false,
      emit_sortingChanged: createEvent("sortingChanged", "oldSorting", "oldSortingDesc"),
      groupingClass: null,
      grouping: null,
      emit_groupingChanged: createEvent("groupingChanged", "oldGrouping"),
      groupNode: null,
      groupId: NaN,
      satellite: NULL_SATELLITE,
      ownerSatelliteName: null,
      emit_satelliteChanged: createEvent("satelliteChanged", "name", "oldSatellite"),
      owner: null,
      emit_ownerChanged: createEvent("ownerChanged", "oldOwner"),
      init: function() {
        DataObject.prototype.init.call(this);
        var childNodes = this.childNodes;
        var dataSource = this.dataSource;
        if (childNodes) this.childNodes = null;
        if (dataSource) this.dataSource = null;
        var grouping = this.grouping;
        if (grouping) {
          this.grouping = null;
          this.setGrouping(grouping);
        }
        if (this.childClass) {
          this.childNodes = [];
          if (dataSource) {
            this.setDataSource(dataSource);
          } else {
            if (childNodes) this.setChildNodes(childNodes);
          }
        }
        var satellites = this.satellite;
        if (satellites !== NULL_SATELLITE) {
          this.satellite = NULL_SATELLITE;
          applySatellites(this, satellites);
        }
        var owner = this.owner;
        if (owner) {
          this.owner = null;
          this.setOwner(owner);
        }
      },
      setChildNodesState: function(state, data) {
        var stateCode = String(state);
        var oldState = this.childNodesState;
        if (!STATE.values[stateCode]) throw new Error("Wrong state value");
        if (oldState != stateCode || oldState.data != data) {
          this.childNodesState = Object(stateCode);
          this.childNodesState.data = data;
          this.emit_childNodesStateChanged(oldState);
        }
      },
      appendChild: function(newChild) {},
      insertBefore: function(newChild, refChild) {},
      removeChild: function(oldChild) {},
      replaceChild: function(newChild, oldChild) {},
      clear: function(alive) {},
      setChildNodes: function(nodes) {},
      setGrouping: function(grouping, alive) {},
      setSorting: function(sorting, desc) {},
      setDataSource: function(dataSource) {},
      setOwner: function(owner) {
        if (!owner || owner instanceof AbstractNode == false) owner = null;
        if (owner && this.parentNode) throw EXCEPTION_PARENTNODE_OWNER_CONFLICT;
        var oldOwner = this.owner;
        if (oldOwner !== owner) {
          var listenHandler = this.listen.owner;
          if (oldOwner) {
            if (this.ownerSatelliteName && oldOwner.satellite.__auto__ && this.ownerSatelliteName in oldOwner.satellite.__auto__) {
              basis.dev.warn(namespace + ": auto-satellite can't change it's owner");
              return;
            }
            if (listenHandler) oldOwner.removeHandler(listenHandler, this);
            if (this.ownerSatelliteName) {
              this.owner = null;
              oldOwner.setSatellite(this.ownerSatelliteName, null);
            }
          }
          if (owner && listenHandler) owner.addHandler(listenHandler, this);
          this.owner = owner;
          this.emit_ownerChanged(oldOwner);
          if (this.autoDelegate == DELEGATE.OWNER || this.autoDelegate === DELEGATE.ANY) this.setDelegate(owner);
        }
      },
      setSatellite: function(name, satellite, autoSet) {
        var oldSatellite = this.satellite[name] || null;
        var auto = this.satellite.__auto__;
        var autoConfig = auto && auto[name];
        var preserveAuto = autoSet && autoConfig;
        if (preserveAuto) {
          satellite = autoConfig.instance;
          if (satellite && autoConfig.config.instance) delete autoConfig.config.instance.setOwner;
        } else {
          satellite = processSatelliteConfig(satellite);
          if (satellite && satellite.owner === this && auto && satellite.ownerSatelliteName && auto[satellite.ownerSatelliteName]) {
            basis.dev.warn(namespace + ": auto-create satellite can't change name inside owner");
            return;
          }
          if (autoConfig) {
            delete auto[name];
            if (autoConfig.config.instance) autoConfig.config.instance.removeHandler(AUTO_SATELLITE_INSTANCE_HANDLER, autoConfig);
            if (autoConfig.config.handler) this.removeHandler(autoConfig.config.handler, autoConfig);
          }
        }
        if (oldSatellite !== satellite) {
          var satelliteListen = this.listen.satellite;
          var satellitePersonalListen = this.listen["satellite:" + name];
          var destroySatellite;
          if (oldSatellite) {
            delete this.satellite[name];
            oldSatellite.ownerSatelliteName = null;
            if (autoConfig && oldSatellite.destroy === warnOnAutoSatelliteDestoy) {
              destroySatellite = oldSatellite;
            } else {
              if (satelliteListen) oldSatellite.removeHandler(satelliteListen, this);
              if (satellitePersonalListen) oldSatellite.removeHandler(satellitePersonalListen, this);
              oldSatellite.setOwner(null);
            }
            if (preserveAuto && !satellite && autoConfig.config.instance) autoConfig.config.instance.setOwner = warnOnAutoSatelliteOwnerChange;
          }
          if (satellite) {
            if (satellite instanceof AbstractNode == false) {
              var autoConfig = {
                owner: this,
                name: name,
                config: satellite,
                instance: null,
                existsAdapter: null
              };
              if (satellite.handler) this.addHandler(satellite.handler, autoConfig);
              if (satellite.instance) {
                satellite.instance.addHandler(AUTO_SATELLITE_INSTANCE_HANDLER, autoConfig);
                satellite.instance.setOwner = warnOnAutoSatelliteOwnerChange;
              }
              if (!auto) {
                if (this.satellite === NULL_SATELLITE) this.satellite = {};
                auto = this.satellite.__auto__ = {};
              }
              auto[name] = autoConfig;
              SATELLITE_UPDATE.call(autoConfig, this);
              if (!autoConfig.instance && oldSatellite) this.emit_satelliteChanged(name, oldSatellite);
              if (destroySatellite) {
                delete destroySatellite.destroy;
                destroySatellite.destroy();
              }
              return;
            }
            if (satellite.owner !== this) {
              if (autoConfig && autoConfig.config.delegate) {
                var autoDelegate = satellite.autoDelegate;
                satellite.autoDelegate = false;
                satellite.setOwner(this);
                satellite.autoDelegate = autoDelegate;
              } else satellite.setOwner(this);
              if (satellite.owner !== this) return;
              if (satelliteListen) satellite.addHandler(satelliteListen, this);
              if (satellitePersonalListen) satellite.addHandler(satellitePersonalListen, this);
            } else {
              if (satellite.ownerSatelliteName) {
                delete this.satellite[satellite.ownerSatelliteName];
                this.emit_satelliteChanged(satellite.ownerSatelliteName, satellite);
              }
            }
            if (this.satellite == NULL_SATELLITE) this.satellite = {};
            this.satellite[name] = satellite;
            satellite.ownerSatelliteName = name;
          }
          this.emit_satelliteChanged(name, oldSatellite);
          if (destroySatellite) {
            delete destroySatellite.destroy;
            destroySatellite.destroy();
          }
        }
      },
      getChildNodesDataset: function() {
        return childNodesDatasetMap[this.basisObjectId] || new ChildNodesDataset({
          sourceNode: this
        });
      },
      destroy: function() {
        DataObject.prototype.destroy.call(this);
        if (this.dataSource || this.dataSourceRA_) {
          this.setDataSource();
        } else {
          if (this.firstChild) this.clear();
        }
        if (this.parentNode) this.parentNode.removeChild(this);
        if (this.grouping) {
          this.grouping.setOwner();
          this.grouping = null;
        }
        if (this.owner) this.setOwner();
        var satellites = this.satellite;
        if (satellites !== NULL_SATELLITE) {
          var auto = satellites.__auto__;
          delete satellites.__auto__;
          for (var name in auto) {
            if (auto[name].config.instance && !auto[name].instance) auto[name].config.instance.destroy();
            if (auto[name].existsAdapter) resolveValue(auto[name], null, null, "existsAdapter");
          }
          for (var name in satellites) {
            var satellite = satellites[name];
            satellite.owner = null;
            satellite.ownerSatelliteName = null;
            if (satellite.destroy === warnOnAutoSatelliteDestoy) delete satellite.destroy;
            satellite.destroy();
          }
          this.satellite = null;
        }
        this.childNodes = null;
      }
    });
    var PartitionNode = Class(AbstractNode, {
      className: namespace + ".PartitionNode",
      autoDestroyIfEmpty: false,
      nodes: null,
      first: null,
      last: null,
      init: function() {
        this.nodes = [];
        AbstractNode.prototype.init.call(this);
      },
      insert: function(newNode, refNode) {
        var nodes = this.nodes;
        var pos = refNode ? nodes.indexOf(refNode) : -1;
        if (pos == -1) {
          nodes.push(newNode);
          this.last = newNode;
        } else nodes.splice(pos, 0, newNode);
        this.first = nodes[0];
        newNode.groupNode = this;
        this.emit_childNodesModified({
          inserted: [ newNode ]
        });
      },
      remove: function(oldNode) {
        var nodes = this.nodes;
        if (arrayRemove(nodes, oldNode)) {
          this.first = nodes[0] || null;
          this.last = nodes[nodes.length - 1] || null;
          oldNode.groupNode = null;
          this.emit_childNodesModified({
            deleted: [ oldNode ]
          });
        }
        if (!this.first && this.autoDestroyIfEmpty) this.destroy();
      },
      clear: function() {
        if (!this.first) return;
        var nodes = this.nodes;
        for (var i = nodes.length; i-- > 0; ) nodes[i].groupNode = null;
        this.nodes = [];
        this.first = null;
        this.last = null;
        this.emit_childNodesModified({
          deleted: nodes
        });
        if (this.autoDestroyIfEmpty) this.destroy();
      },
      destroy: function() {
        AbstractNode.prototype.destroy.call(this);
        this.nodes = null;
        this.first = null;
        this.last = null;
      }
    });
    var DOMMIXIN_DATASOURCE_HANDLER = {
      itemsChanged: function(dataSource, delta) {
        var newDelta = {};
        var deleted = [];
        if (delta.deleted) {
          newDelta.deleted = deleted;
          if (this.childNodes.length == delta.deleted.length) {
            deleted = arrayFrom(this.childNodes);
            for (var i = 0, child; child = deleted[i]; i++) unlockDataSourceItemNode(child);
            var tmp = this.dataSource;
            this.dataSource = null;
            this.clear(true);
            this.dataSource = tmp;
            this.dataSourceMap_ = {};
          } else {
            for (var i = 0, item; item = delta.deleted[i]; i++) {
              var delegateId = item.basisObjectId;
              var oldChild = this.dataSourceMap_[delegateId];
              unlockDataSourceItemNode(oldChild);
              delete this.dataSourceMap_[delegateId];
              this.removeChild(oldChild);
              deleted.push(oldChild);
            }
          }
        }
        if (delta.inserted) {
          newDelta.inserted = [];
          for (var i = 0, item; item = delta.inserted[i]; i++) {
            var newChild = createChildByFactory(this, {
              delegate: item
            });
            lockDataSourceItemNode(newChild);
            this.dataSourceMap_[item.basisObjectId] = newChild;
            newDelta.inserted.push(newChild);
            if (this.firstChild) this.insertBefore(newChild);
          }
        }
        if (!this.firstChild) this.setChildNodes(newDelta.inserted); else this.emit_childNodesModified(newDelta);
        if (this.destroyDataSourceMember && deleted.length) for (var i = 0, item; item = deleted[i]; i++) item.destroy();
      },
      stateChanged: function(dataSource) {
        this.setChildNodesState(dataSource.state, dataSource.state.data);
      },
      destroy: function(dataSource) {
        if (!this.dataSourceRA_) this.setDataSource();
      }
    };
    var MIXIN_DATASOURCE_WRAPPER_HANDLER = {
      datasetChanged: function(wrapper) {
        this.setDataSource(wrapper);
      },
      destroy: function() {
        this.setDataSource();
      }
    };
    function fastChildNodesOrder(node, order) {
      var lastIndex = order.length - 1;
      node.childNodes = order;
      node.firstChild = order[0] || null;
      node.lastChild = order[lastIndex] || null;
      for (var orderNode, i = lastIndex; orderNode = order[i]; i--) {
        orderNode.nextSibling = order[i + 1] || null;
        orderNode.previousSibling = order[i - 1] || null;
        node.insertBefore(orderNode, orderNode.nextSibling);
      }
    }
    function fastChildNodesGroupOrder(node, order) {
      for (var i = 0, child; child = order[i]; i++) child.groupNode.nodes.push(child);
      order.length = 0;
      for (var group = node.grouping.nullGroup; group; group = group.nextSibling) {
        var nodes = group.nodes;
        group.first = nodes[0] || null;
        group.last = nodes[nodes.length - 1] || null;
        order.push.apply(order, nodes);
        group.emit_childNodesModified({
          inserted: nodes
        });
      }
      return order;
    }
    function createChildByFactory(node, config) {
      var child;
      if (typeof node.childFactory == "function") {
        child = node.childFactory(config);
        if (child instanceof node.childClass) return child;
      }
      if (!child) throw EXCEPTION_NULL_CHILD;
      basis.dev.warn(EXCEPTION_BAD_CHILD_CLASS + " (expected " + (node.childClass && node.childClass.className) + " but " + (child && child.constructor && child.constructor.className) + ")");
      throw EXCEPTION_BAD_CHILD_CLASS;
    }
    var DomMixin = {
      childClass: AbstractNode,
      childFactory: null,
      listen: {
        dataSource: DOMMIXIN_DATASOURCE_HANDLER
      },
      getChild: function(value, getter) {
        return basis.array.search(this.childNodes, value, getter);
      },
      getChildByName: function(name) {
        return this.getChild(name, "name");
      },
      appendChild: function(newChild) {
        return this.insertBefore(newChild);
      },
      insertBefore: function(newChild, refChild) {
        if (!this.childClass) throw EXCEPTION_NO_CHILDCLASS;
        if (newChild.firstChild) {
          var cursor = this;
          while (cursor = cursor.parentNode) {
            if (cursor === newChild) throw EXCEPTION_CANT_INSERT;
          }
        }
        var isChildClassInstance = newChild && newChild instanceof this.childClass;
        if (this.dataSource) {
          if (!isChildClassInstance || !newChild.delegate || this.dataSourceMap_[newChild.delegate.basisObjectId] !== newChild) throw EXCEPTION_DATASOURCE_CONFLICT;
        } else {
          if (this.dataSourceRA_) throw EXCEPTION_DATASOURCEADAPTER_CONFLICT;
        }
        if (!isChildClassInstance) newChild = createChildByFactory(this, newChild instanceof DataObject ? {
          delegate: newChild
        } : newChild);
        if (newChild.owner) throw EXCEPTION_PARENTNODE_OWNER_CONFLICT;
        var isInside = newChild.parentNode === this;
        var childNodes = this.childNodes;
        var grouping = this.grouping;
        var groupNodes;
        var currentNewChildGroup = newChild.groupNode;
        var group = null;
        var sorting = this.sorting;
        var sortingDesc;
        var correctSortPos = false;
        var newChildValue;
        var pos = -1;
        var nextSibling;
        var prevSibling;
        if (isInside) {
          nextSibling = newChild.nextSibling;
          prevSibling = newChild.previousSibling;
        }
        if (sorting !== nullGetter) {
          refChild = null;
          sortingDesc = this.sortingDesc;
          newChildValue = sorting(newChild) || 0;
          if (isInside) {
            if (newChildValue === newChild.sortingValue) {
              correctSortPos = true;
            } else {
              if ((!nextSibling || (sortingDesc ? nextSibling.sortingValue <= newChildValue : nextSibling.sortingValue >= newChildValue)) && (!prevSibling || (sortingDesc ? prevSibling.sortingValue >= newChildValue : prevSibling.sortingValue <= newChildValue))) {
                newChild.sortingValue = newChildValue;
                correctSortPos = true;
              }
            }
          }
        }
        if (grouping) {
          var cursor;
          group = grouping.getGroupNode(newChild, true);
          groupNodes = group.nodes;
          if (currentNewChildGroup === group) if (correctSortPos || sorting === nullGetter && nextSibling === refChild) return newChild;
          if (sorting !== nullGetter) {
            if (currentNewChildGroup === group && correctSortPos) {
              if (nextSibling && nextSibling.groupNode === group) pos = groupNodes.indexOf(nextSibling); else pos = groupNodes.length;
            } else {
              pos = binarySearchPos(groupNodes, newChildValue, sortingSearch, sortingDesc);
              newChild.sortingValue = newChildValue;
            }
          } else {
            if (refChild && refChild.groupNode === group) pos = groupNodes.indexOf(refChild); else pos = groupNodes.length;
          }
          if (pos < groupNodes.length) {
            refChild = groupNodes[pos];
          } else {
            if (group.last) {
              refChild = group.last.nextSibling;
            } else {
              cursor = group;
              refChild = null;
              while (cursor = cursor.nextSibling) if (refChild = cursor.first) break;
            }
          }
          if (newChild === refChild || isInside && nextSibling === refChild) {
            if (currentNewChildGroup !== group) {
              if (currentNewChildGroup) currentNewChildGroup.remove(newChild);
              group.insert(newChild, refChild);
            }
            return newChild;
          }
          pos = -1;
        } else {
          if (sorting !== nullGetter) {
            if (correctSortPos) return newChild;
            pos = binarySearchPos(childNodes, newChildValue, sortingSearch, sortingDesc);
            refChild = childNodes[pos];
            newChild.sortingValue = newChildValue;
            if (newChild === refChild || isInside && nextSibling === refChild) return newChild;
          } else {
            if (refChild && refChild.parentNode !== this) throw EXCEPTION_NODE_NOT_FOUND;
            if (isInside) {
              if (nextSibling === refChild) return newChild;
              if (newChild === refChild) throw EXCEPTION_CANT_INSERT;
            }
          }
        }
        if (isInside) {
          if (nextSibling) {
            nextSibling.previousSibling = prevSibling;
            newChild.nextSibling = null;
          } else this.lastChild = prevSibling;
          if (prevSibling) {
            prevSibling.nextSibling = nextSibling;
            newChild.previousSibling = null;
          } else this.firstChild = nextSibling;
          if (pos == -1) arrayRemove(childNodes, newChild); else {
            var oldPos = childNodes.indexOf(newChild);
            childNodes.splice(oldPos, 1);
            pos -= oldPos < pos;
          }
          if (currentNewChildGroup) {
            currentNewChildGroup.remove(newChild);
            currentNewChildGroup = null;
          }
        } else {
          if (newChild.parentNode) newChild.parentNode.removeChild(newChild);
        }
        if (currentNewChildGroup != group) group.insert(newChild, refChild);
        if (refChild) {
          if (pos == -1) pos = childNodes.indexOf(refChild);
          if (pos == -1) throw EXCEPTION_NODE_NOT_FOUND;
          newChild.nextSibling = refChild;
          childNodes.splice(pos, 0, newChild);
        } else {
          pos = childNodes.length;
          childNodes.push(newChild);
          refChild = {
            previousSibling: this.lastChild
          };
          this.lastChild = newChild;
        }
        newChild.parentNode = this;
        newChild.previousSibling = refChild.previousSibling;
        if (pos == 0) this.firstChild = newChild; else refChild.previousSibling.nextSibling = newChild;
        refChild.previousSibling = newChild;
        if (!isInside) {
          updateNodeContextSelection(newChild, newChild.contextSelection, this.selection || this.contextSelection, true);
          updateNodeDisableContext(newChild, this.disabled || this.contextDisabled);
          if ((newChild.underMatch_ || this.matchFunction) && newChild.match) newChild.match(this.matchFunction);
          if (newChild.autoDelegate == DELEGATE.PARENT || newChild.autoDelegate === DELEGATE.ANY) newChild.setDelegate(this);
          newChild.emit_parentChanged(null);
          if (!this.dataSource) this.emit_childNodesModified({
            inserted: [ newChild ]
          });
          if (newChild.listen.parentNode) this.addHandler(newChild.listen.parentNode, newChild);
        }
        return newChild;
      },
      removeChild: function(oldChild) {
        if (!oldChild || oldChild.parentNode !== this) throw EXCEPTION_NODE_NOT_FOUND;
        if (oldChild instanceof this.childClass == false) throw EXCEPTION_BAD_CHILD_CLASS;
        if (this.dataSource) {
          if (this.dataSource.has(oldChild.delegate)) throw EXCEPTION_DATASOURCE_CONFLICT;
        } else {
          if (this.dataSourceRA_) throw EXCEPTION_DATASOURCEADAPTER_CONFLICT;
        }
        var pos = this.childNodes.indexOf(oldChild);
        if (pos == -1) throw EXCEPTION_NODE_NOT_FOUND;
        this.childNodes.splice(pos, 1);
        oldChild.parentNode = null;
        if (oldChild.nextSibling) oldChild.nextSibling.previousSibling = oldChild.previousSibling; else this.lastChild = oldChild.previousSibling;
        if (oldChild.previousSibling) oldChild.previousSibling.nextSibling = oldChild.nextSibling; else this.firstChild = oldChild.nextSibling;
        oldChild.nextSibling = null;
        oldChild.previousSibling = null;
        if (oldChild.listen.parentNode) this.removeHandler(oldChild.listen.parentNode, oldChild);
        updateNodeContextSelection(oldChild, oldChild.contextSelection, null, true);
        if (oldChild.groupNode) oldChild.groupNode.remove(oldChild);
        oldChild.emit_parentChanged(this);
        if (!this.dataSource) this.emit_childNodesModified({
          deleted: [ oldChild ]
        });
        if (oldChild.autoDelegate == DELEGATE.PARENT || oldChild.autoDelegate === DELEGATE.ANY) oldChild.setDelegate();
        return oldChild;
      },
      replaceChild: function(newChild, oldChild) {
        if (this.dataSource) throw EXCEPTION_DATASOURCE_CONFLICT;
        if (this.dataSourceRA_) throw EXCEPTION_DATASOURCEADAPTER_CONFLICT;
        if (oldChild == null || oldChild.parentNode !== this) throw EXCEPTION_NODE_NOT_FOUND;
        this.insertBefore(newChild, oldChild);
        return this.removeChild(oldChild);
      },
      clear: function(alive) {
        if (this.dataSource && this.dataSource.itemCount) throw EXCEPTION_DATASOURCE_CONFLICT;
        if (!this.firstChild) return;
        if (alive) updateNodeContextSelection(this, this.selection || this.contextSelection, null, false, true);
        var childNodes = this.childNodes;
        this.firstChild = null;
        this.lastChild = null;
        this.childNodes = [];
        this.emit_childNodesModified({
          deleted: childNodes
        });
        for (var i = childNodes.length; i-- > 0; ) {
          var child = childNodes[i];
          if (child.listen.parentNode) child.parentNode.removeHandler(child.listen.parentNode, child);
          child.parentNode = null;
          child.groupNode = null;
          if (alive) {
            child.nextSibling = null;
            child.previousSibling = null;
            child.emit_parentChanged(this);
            if (child.autoDelegate == DELEGATE.PARENT || child.autoDelegate === DELEGATE.ANY) child.setDelegate();
          } else child.destroy();
        }
        if (this.grouping) {
          for (var childNodes = this.grouping.childNodes, i = childNodes.length - 1, group; group = childNodes[i]; i--) group.clear();
        }
      },
      setChildNodes: function(newChildNodes, keepAlive) {
        if (!this.dataSource && !this.dataSourceRA_) this.clear(keepAlive);
        if (newChildNodes) {
          if ("length" in newChildNodes == false) newChildNodes = [ newChildNodes ];
          if (newChildNodes.length) {
            var tmp = this.emit_childNodesModified;
            this.emit_childNodesModified = $undef;
            for (var i = 0, len = newChildNodes.length; i < len; i++) this.insertBefore(newChildNodes[i]);
            this.emit_childNodesModified = tmp;
            this.emit_childNodesModified({
              inserted: this.childNodes
            });
          }
        }
      },
      setDataSource: function(dataSource) {
        if (!this.childClass) throw EXCEPTION_NO_CHILDCLASS;
        dataSource = resolveDataset(this, this.setDataSource, dataSource, "dataSourceRA_");
        if (this.dataSource !== dataSource) {
          var oldDataSource = this.dataSource;
          var listenHandler = this.listen.dataSource;
          if (oldDataSource) {
            this.dataSourceMap_ = null;
            this.dataSource = null;
            if (listenHandler) oldDataSource.removeHandler(listenHandler, this);
          }
          if (this.firstChild) {
            if (oldDataSource) for (var i = 0, child; child = this.childNodes[i]; i++) unlockDataSourceItemNode(child);
            this.clear(!this.destroyDataSourceMember);
          }
          this.dataSource = dataSource;
          if (dataSource) {
            this.dataSourceMap_ = {};
            this.setChildNodesState(dataSource.state, dataSource.state.data);
            if (listenHandler) {
              dataSource.addHandler(listenHandler, this);
              if (dataSource.itemCount && listenHandler.itemsChanged) {
                listenHandler.itemsChanged.call(this, dataSource, {
                  inserted: dataSource.getItems()
                });
              }
            }
          } else {
            this.setChildNodesState(STATE.UNDEFINED);
          }
          this.emit_dataSourceChanged(oldDataSource);
        }
      },
      setGrouping: function(grouping, alive) {
        if (typeof grouping == "function" || typeof grouping == "string") grouping = {
          rule: grouping
        };
        if (grouping instanceof GroupingNode == false) {
          grouping = grouping && typeof grouping == "object" ? new this.groupingClass(grouping) : null;
        }
        if (this.grouping !== grouping) {
          var oldGrouping = this.grouping;
          var order;
          if (oldGrouping) {
            this.grouping = null;
            if (!grouping) {
              if (this.firstChild) {
                if (this.sorting !== nullGetter) order = sortChildNodes(this); else order = this.childNodes;
                oldGrouping.nullGroup.clear();
                var groups = oldGrouping.childNodes.slice(0);
                for (var i = 0; i < groups.length; i++) groups[i].clear();
                fastChildNodesOrder(this, order);
              }
            }
            oldGrouping.setOwner();
          }
          if (grouping) {
            this.grouping = grouping;
            grouping.setOwner(this);
            if (this.firstChild) {
              if (this.sorting !== nullGetter) order = sortChildNodes(this); else order = this.childNodes;
              for (var i = 0, child; child = order[i]; i++) child.groupNode = this.grouping.getGroupNode(child, true);
              order = fastChildNodesGroupOrder(this, order);
              fastChildNodesOrder(this, order);
            }
          }
          this.emit_groupingChanged(oldGrouping);
        }
      },
      setSorting: function(sorting, sortingDesc) {
        sorting = getter(sorting);
        sortingDesc = !!sortingDesc;
        if (this.sorting !== sorting || this.sortingDesc != !!sortingDesc) {
          var oldSorting = this.sorting;
          var oldSortingDesc = this.sortingDesc;
          this.sorting = sorting;
          this.sortingDesc = !!sortingDesc;
          if (sorting !== nullGetter && this.firstChild) {
            var order = [];
            var nodes;
            for (var node = this.firstChild; node; node = node.nextSibling) node.sortingValue = sorting(node) || 0;
            if (this.grouping) {
              for (var group = this.grouping.nullGroup; group; group = group.nextSibling) {
                nodes = group.nodes = sortChildNodes({
                  childNodes: group.nodes,
                  sortingDesc: this.sortingDesc
                });
                group.first = nodes[0] || null;
                group.last = nodes[nodes.length - 1] || null;
                order.push.apply(order, nodes);
              }
            } else {
              order = sortChildNodes(this);
            }
            fastChildNodesOrder(this, order);
          }
          this.emit_sortingChanged(oldSorting, oldSortingDesc);
        }
      },
      setMatchFunction: function(matchFunction) {
        if (this.matchFunction != matchFunction) {
          var oldMatchFunction = this.matchFunction;
          this.matchFunction = matchFunction;
          for (var node = this.lastChild; node; node = node.previousSibling) node.match(matchFunction);
          this.emit_matchFunctionChanged(oldMatchFunction);
        }
      }
    };
    var Node = Class(AbstractNode, DomMixin, {
      className: namespace + ".Node",
      emit_enable: createEvent("enable") && function() {
        for (var child = this.firstChild; child; child = child.nextSibling) updateNodeDisableContext(child, false);
        events.enable.call(this);
      },
      emit_disable: createEvent("disable") && function() {
        for (var child = this.firstChild; child; child = child.nextSibling) updateNodeDisableContext(child, true);
        events.disable.call(this);
      },
      emit_satelliteChanged: function(name, oldSatellite) {
        AbstractNode.prototype.emit_satelliteChanged.call(this, name, oldSatellite);
        if (this.satellite[name] instanceof Node) updateNodeDisableContext(this.satellite[name], this.disabled || this.contextDisabled);
      },
      emit_select: createEvent("select"),
      emit_unselect: createEvent("unselect"),
      emit_match: createEvent("match"),
      emit_unmatch: createEvent("unmatch"),
      emit_matchFunctionChanged: createEvent("matchFunctionChanged", "oldMatchFunction"),
      selected: false,
      selectedRA_: null,
      selection: null,
      contextSelection: null,
      matchFunction: null,
      matched: true,
      disabled: false,
      disabledRA_: null,
      contextDisabled: false,
      listen: {
        owner: {
          enable: function() {
            updateNodeDisableContext(this, false);
          },
          disable: function() {
            updateNodeDisableContext(this, true);
          }
        },
        selection: {
          destroy: function() {
            this.setSelection();
          }
        }
      },
      init: function() {
        var disabled = this.disabled;
        this.disabled = false;
        var selection = this.selection;
        if (selection) {
          this.selection = null;
          this.setSelection(selection);
        }
        AbstractNode.prototype.init.call(this);
        if (disabled) {
          disabled = !!resolveValue(this, this.setDisabled, disabled, "disabledRA_");
          if (disabled) {
            this.disabled = disabled;
            for (var child = this.firstChild; child; child = child.nextSibling) updateNodeDisableContext(child, true);
          }
        }
        if (this.selected) this.selected = !!resolveValue(this, this.setSelected, this.selected, "selectedRA_");
      },
      setSelection: function(selection) {
        if (selection instanceof Selection === false) selection = selection ? new Selection(selection) : null;
        if (this.selection !== selection) {
          updateNodeContextSelection(this, this.selection || this.contextSelection, selection || this.contextSelection, false, true);
          if (this.selection && this.listen.selection) this.selection.removeHandler(this.listen.selection, this);
          this.selection = selection;
          if (selection && this.listen.selection) selection.addHandler(this.listen.selection, this);
          return true;
        }
      },
      select: function(multiple) {
        return this.setSelected(true, multiple);
      },
      unselect: function() {
        return this.setSelected(false);
      },
      setSelected: function(selected, multiple) {
        var selection = this.contextSelection;
        selected = !!resolveValue(this, this.setSelected, selected, "selectedRA_");
        if (this.selected && selection) {
          if (this.selectedRA_) {
            if (selection.has(this)) {
              this.selected = false;
              selection.remove(this);
              this.selected = true;
            }
          } else {
            if (!selection.has(this)) selection.add(this);
          }
        }
        if (selected !== this.selected) {
          if (this.selectedRA_) {
            this.selected = selected;
            if (selected) this.emit_select(); else this.emit_unselect();
          } else {
            if (selected) {
              if (selection) {
                if (multiple) selection.add(this); else selection.set(this);
              } else {
                this.selected = true;
                this.emit_select();
              }
            } else {
              if (selection) {
                selection.remove(this);
              } else {
                this.selected = false;
                this.emit_unselect();
              }
            }
          }
          return true;
        } else {
          if (!this.selectedRA_ && selected && selection) {
            if (multiple) selection.remove(this); else selection.set(this);
          }
        }
        return false;
      },
      enable: function() {
        return this.setDisabled(false);
      },
      disable: function() {
        return this.setDisabled(true);
      },
      setDisabled: function(disabled) {
        disabled = !!resolveValue(this, this.setDisabled, disabled, "disabledRA_");
        if (this.disabled !== disabled) {
          this.disabled = disabled;
          if (!this.contextDisabled) if (disabled) this.emit_disable(); else this.emit_enable();
          return true;
        }
      },
      isDisabled: function() {
        return this.disabled || this.contextDisabled;
      },
      match: function(func) {
        if (typeof func != "function") func = null;
        if (this.underMatch_ && !func) this.underMatch_(this, true);
        this.underMatch_ = func;
        var matched = !func || func(this);
        if (this.matched != matched) {
          this.matched = matched;
          if (matched) this.emit_match(); else this.emit_unmatch();
        }
      },
      destroy: function() {
        if (this.disabledRA_) resolveValue(this, null, null, "disabledRA_");
        if (this.selectedRA_) resolveValue(this, null, null, "selectedRA_");
        this.contextSelection = null;
        if (this.selection) this.setSelection();
        AbstractNode.prototype.destroy.call(this);
      }
    });
    var GroupingNode = Class(AbstractNode, DomMixin, {
      className: namespace + ".GroupingNode",
      emit_childNodesModified: function(delta) {
        events.childNodesModified.call(this, delta);
        this.nullGroup.nextSibling = this.firstChild;
        var array;
        if (array = delta.inserted) {
          for (var i = 0, child; child = array[i++]; ) {
            child.groupId_ = child.delegate ? child.delegate.basisObjectId : child.data.id;
            this.map_[child.groupId_] = child;
          }
          if (this.dataSource && this.nullGroup.first) {
            var parentNode = this.owner;
            var nodes = arrayFrom(this.nullGroup.nodes);
            for (var i = nodes.length; i-- > 0; ) parentNode.insertBefore(nodes[i], nodes[i].nextSibling);
          }
        }
      },
      emit_ownerChanged: function(oldOwner) {
        if (oldOwner && oldOwner.grouping === this) oldOwner.setGrouping(null, true);
        if (this.owner && this.owner.grouping !== this) this.owner.setGrouping(this);
        events.ownerChanged.call(this, oldOwner);
        if (!this.owner && this.autoDestroyWithNoOwner) this.destroy();
      },
      map_: null,
      nullGroup: null,
      autoDestroyWithNoOwner: true,
      autoDestroyEmptyGroups: true,
      rule: nullGetter,
      childClass: PartitionNode,
      childFactory: function(config) {
        return new this.childClass(complete({
          autoDestroyIfEmpty: this.dataSource ? false : this.autoDestroyEmptyGroups
        }, config));
      },
      init: function() {
        this.map_ = {};
        this.nullGroup = new PartitionNode;
        AbstractNode.prototype.init.call(this);
      },
      getGroupNode: function(node, autocreate) {
        var groupRef = this.rule(node);
        var isDelegate = groupRef instanceof DataObject;
        var group = this.map_[isDelegate ? groupRef.basisObjectId : groupRef];
        if (this.dataSource) autocreate = false;
        if (!group && autocreate) {
          group = this.appendChild(isDelegate ? groupRef : {
            data: {
              id: groupRef,
              title: groupRef
            }
          });
        }
        return group || this.nullGroup;
      },
      setDataSource: function(dataSource) {
        var curDataSource = this.dataSource;
        DomMixin.setDataSource.call(this, dataSource);
        var owner = this.owner;
        if (owner && this.dataSource !== curDataSource) {
          var nodes = arrayFrom(owner.childNodes);
          for (var i = nodes.length - 1; i >= 0; i--) owner.insertBefore(nodes[i], nodes[i + 1]);
        }
      },
      insertBefore: function(newChild, refChild) {
        newChild = DomMixin.insertBefore.call(this, newChild, refChild);
        var firstNode = newChild.first;
        if (firstNode) {
          var parent = firstNode.parentNode;
          var lastNode = newChild.last;
          var beforePrev;
          var beforeNext;
          var afterPrev;
          var afterNext = null;
          var cursor = newChild;
          while (cursor = cursor.nextSibling) {
            if (afterNext = cursor.first) break;
          }
          afterPrev = afterNext ? afterNext.previousSibling : parent.lastChild;
          beforePrev = firstNode.previousSibling;
          beforeNext = lastNode.nextSibling;
          if (beforeNext !== afterNext) {
            var parentChildNodes = parent.childNodes;
            var nodes = newChild.nodes;
            var nodesCount = nodes.length;
            if (beforePrev) beforePrev.nextSibling = beforeNext;
            if (beforeNext) beforeNext.previousSibling = beforePrev;
            if (afterPrev) afterPrev.nextSibling = firstNode;
            if (afterNext) afterNext.previousSibling = lastNode;
            firstNode.previousSibling = afterPrev;
            lastNode.nextSibling = afterNext;
            var firstPos = parentChildNodes.indexOf(firstNode);
            var afterNextPos = afterNext ? parentChildNodes.indexOf(afterNext) : parentChildNodes.length;
            if (afterNextPos > firstPos) afterNextPos -= nodesCount;
            parentChildNodes.splice(firstPos, nodesCount);
            parentChildNodes.splice.apply(parentChildNodes, [ afterNextPos, 0 ].concat(nodes));
            if (!afterPrev || !beforePrev) parent.firstChild = parentChildNodes[0];
            if (!afterNext || !beforeNext) parent.lastChild = parentChildNodes[parentChildNodes.length - 1];
            if (firstNode instanceof PartitionNode) for (var i = nodesCount, insertBefore = afterNext; i-- > 0; ) {
              parent.insertBefore(nodes[i], insertBefore);
              insertBefore = nodes[i];
            }
          }
        }
        return newChild;
      },
      removeChild: function(oldChild) {
        if (oldChild = DomMixin.removeChild.call(this, oldChild)) {
          delete this.map_[oldChild.groupId_];
          for (var i = 0, node; node = oldChild.nodes[i]; i++) node.parentNode.insertBefore(node);
        }
        return oldChild;
      },
      clear: function(alive) {
        var nodes = [];
        var getGroupNode = this.getGroupNode;
        var nullGroup = this.nullGroup;
        this.getGroupNode = function() {
          return nullGroup;
        };
        for (var group = this.firstChild; group; group = group.nextSibling) nodes.push.apply(nodes, group.nodes);
        for (var i = 0, child; child = nodes[i]; i++) child.parentNode.insertBefore(child);
        this.getGroupNode = getGroupNode;
        DomMixin.clear.call(this, alive);
        this.map_ = {};
      },
      destroy: function() {
        this.autoDestroyWithNoOwner = false;
        AbstractNode.prototype.destroy.call(this);
        this.nullGroup.destroy();
        this.nullGroup = null;
        this.map_ = null;
      }
    });
    AbstractNode.prototype.groupingClass = GroupingNode;
    var CHILDNODESDATASET_HANDLER = {
      childNodesModified: function(sender, delta) {
        var memberMap = this.members_;
        var newDelta = {};
        var node;
        var insertCount = 0;
        var deleteCount = 0;
        var inserted = delta.inserted;
        var deleted = delta.deleted;
        if (inserted && inserted.length) {
          newDelta.inserted = inserted;
          while (node = inserted[insertCount]) {
            memberMap[node.basisObjectId] = node;
            insertCount++;
          }
        }
        if (deleted && deleted.length) {
          newDelta.deleted = deleted;
          while (node = deleted[deleteCount]) {
            delete memberMap[node.basisObjectId];
            deleteCount++;
          }
        }
        if (insertCount || deleteCount) this.emit_itemsChanged(newDelta);
      },
      destroy: function() {
        this.destroy();
      }
    };
    var ChildNodesDataset = Class(ReadOnlyDataset, {
      className: namespace + ".ChildNodesDataset",
      sourceNode: null,
      init: function() {
        ReadOnlyDataset.prototype.init.call(this);
        var sourceNode = this.sourceNode;
        childNodesDatasetMap[sourceNode.basisObjectId] = this;
        if (sourceNode.firstChild) CHILDNODESDATASET_HANDLER.childNodesModified.call(this, sourceNode, {
          inserted: sourceNode.childNodes
        });
        sourceNode.addHandler(CHILDNODESDATASET_HANDLER, this);
      },
      destroy: function() {
        this.sourceNode.removeHandler(CHILDNODESDATASET_HANDLER, this);
        delete childNodesDatasetMap[this.sourceNode.basisObjectId];
        ReadOnlyDataset.prototype.destroy.call(this);
      }
    });
    var Selection = Class(Dataset, {
      className: namespace + ".Selection",
      multiple: false,
      emit_itemsChanged: function(delta) {
        var array;
        Dataset.prototype.emit_itemsChanged.call(this, delta);
        if (array = delta.deleted) for (var i = 0, node; node = array[i]; i++) {
          if (node.selected && node.contextSelection === this) {
            node.selected = false;
            node.emit_unselect();
          }
        }
        if (array = delta.inserted) for (var i = 0, node; node = array[i]; i++) {
          if (!node.selected && node.contextSelection === this) {
            node.selected = true;
            node.emit_select();
          }
        }
      },
      add: function(nodes) {
        if (!nodes) return;
        if (!this.multiple && this.itemCount) return this.set(nodes);
        if (!Array.isArray(nodes)) nodes = [ nodes ];
        nodes = nodes.filter(this.filter, this);
        if (!this.multiple && nodes.length > 1) {
          basis.dev.warn(namespace + ".Selection#add() can't accept more than one node as not in multiple mode");
          nodes = [ nodes[0] ];
        }
        if (nodes.length) return Dataset.prototype.add.call(this, nodes);
      },
      set: function(nodes) {
        if (!nodes) return this.clear();
        if (!Array.isArray(nodes)) nodes = [ nodes ];
        nodes = nodes.filter(this.filter, this);
        if (!this.multiple && nodes.length > 1) {
          basis.dev.warn(namespace + ".Selection#set() can't accept more than one node as not in multiple mode");
          nodes = [ nodes[0] ];
        }
        if (nodes.length) return Dataset.prototype.set.call(this, nodes); else return this.clear();
      },
      filter: function(node) {
        return node instanceof Node && !node.selectedRA_ && node.contextSelection === this;
      }
    });
    module.exports = {
      DELEGATE: DELEGATE,
      AbstractNode: AbstractNode,
      Node: Node,
      GroupingNode: GroupingNode,
      PartitionNode: PartitionNode,
      ChildNodesDataset: ChildNodesDataset,
      Selection: Selection,
      nullSelection: new ReadOnlyDataset
    };
  },
  "e.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var STATE = basis.require("./1.js").STATE;
    var Value = basis.require("./1.js").Value;
    var DataObject = basis.require("./1.js").Object;
    var Dataset = basis.require("./1.js").Dataset;
    var Expression = basis.require("./3.js").Expression;
    var Subset = basis.require("./f.js").Filter;
    var Slice = basis.require("./f.js").Slice;
    var count = basis.require("./g.js").count;
    var sum = basis.require("./g.js").sum;
    var getTime = basis.require("./h.js").time;
    var TestCase = basis.require("./i.js").TestCase;
    var runnerState = new basis.Token("stopped");
    var notifier = new basis.Token;
    var elapsedTime = new Value({
      value: 0
    });
    var startTime;
    var flush = 0;
    var testsToRun = new Dataset;
    var awaitProcessingTests = new Dataset({
      listen: {
        item: {
          stateChanged: function(item) {
            if (item.state != STATE.PROCESSING) this.remove(item);
          }
        }
      }
    });
    var doneTests = new Subset({
      source: testsToRun,
      ruleEvents: "stateChanged",
      rule: function(test) {
        return test.state == STATE.ERROR || test.state == STATE.READY;
      },
      handler: {
        itemsChanged: function(sender, delta) {
          if (delta.inserted) delta.inserted.forEach(function(test) {
            var errors = [];
            var path = [];
            var cursor = test;
            var data = test.state.data instanceof DataObject ? test.state.data.data : {};
            if (data.error) {
              for (var line in data.errorLines) errors.push.apply(errors, data.errorLines[line].map(function(error) {
                return {
                  line: line,
                  type: error.error,
                  expected: error.expectedStr,
                  actual: error.actualStr
                };
              }));
            }
            while (cursor = cursor.parentNode) path.unshift(cursor.data.name);
            notifier.set({
              action: "report",
              name: test.data.name,
              path: path,
              source: data.testSource,
              success: test.state != STATE.ERROR,
              skipped: data.pending,
              time: data.time,
              exception: data.exception ? "Exception on line " + data.lastLine + ": " + data.exception : null,
              errors: errors.length ? errors : null
            });
          });
        }
      }
    });
    var faultTests = new Subset({
      source: doneTests,
      ruleEvents: "stateChanged",
      rule: function(test) {
        return test.state == STATE.ERROR;
      }
    });
    var processingQueue = new Subset({
      ruleEvents: "stateChanged",
      rule: function(test) {
        return test.state != STATE.READY && test.state != STATE.ERROR;
      }
    });
    var processingQueueTop = new Slice({
      source: processingQueue,
      rule: "basisObjectId",
      limit: 1,
      handler: {
        itemsChanged: function(sender, delta) {
          if (delta.inserted) delta.inserted.forEach(function(item) {
            (flush++ % 4 ? basis.asap : basis.nextTick)(function() {
              if (processingQueueTop.has(item)) item.run();
            });
          });
        }
      }
    });
    var assertCount = sum(testsToRun, "stateChanged", function(test) {
      if (test.state.data instanceof DataObject) return test.state.data.data.testCount;
      return 0;
    });
    var testCount = count(testsToRun);
    var testDoneCount = count(doneTests);
    var testFaultCount = count(faultTests);
    var testLeft = new Expression(testCount, testDoneCount, function(total, done) {
      return total - done;
    });
    testLeft.addHandler({
      change: function(sender, oldValue) {
        if (startTime) elapsedTime.set(getTime(startTime));
        if (!this.value && oldValue) {
          runnerState.set("stopped");
          notifier.set({
            action: "finish",
            time: elapsedTime.value
          });
        }
      }
    });
    function extractTests(data) {
      var result = [];
      for (var i = 0, item; item = data[i]; i++) {
        var test = item.root;
        if (test instanceof TestCase) result.push(test);
        if (test.firstChild) result.push.apply(result, extractTests(test.childNodes));
      }
      return result;
    }
    function loadTests(data) {
      stop();
      testsToRun.set(extractTests(data));
    }
    function run() {
      stop();
      startTime = getTime();
      runnerState.set("running");
      notifier.set({
        action: "start",
        testCount: testCount.value
      });
      if (awaitProcessingTests.itemCount) return setTimeout(run, 10);
      testsToRun.forEach(function(item) {
        var env = item.getEnvRunner();
        if (env) env.destroy();
      });
      processingQueue.setSource(testsToRun);
    }
    function stop() {
      if (processingQueue.itemCount) {
        awaitProcessingTests.add(processingQueue.getItems().filter(function(test) {
          return test.state == STATE.PROCESSING;
        }));
      }
      processingQueue.setSource();
    }
    module.exports = {
      state: runnerState,
      time: elapsedTime,
      doneTests: doneTests,
      faultTests: faultTests,
      count: {
        assert: assertCount,
        total: testCount,
        left: testLeft,
        done: testDoneCount,
        fault: testFaultCount
      },
      loadTests: loadTests,
      run: run,
      stop: stop,
      subscribe: function(fn, context) {
        return notifier.attach(fn, context);
      },
      unsubscribe: function(fn, context) {
        return notifier.detach(fn, context);
      },
      on: function(eventName, fn, context) {
        notifier.attach(function(event) {
          if (event.action == eventName) fn.call(context, basis.object.slice(event));
        });
      }
    };
  },
  "f.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var namespace = this.path;
    var Class = basis.Class;
    var oneFunctionProperty = Class.oneFunctionProperty;
    var extend = basis.object.extend;
    var values = basis.object.values;
    var objectSlice = basis.object.slice;
    var arrayAdd = basis.array.add;
    var arrayRemove = basis.array.remove;
    var getter = basis.getter;
    var $self = basis.fn.$self;
    var $true = basis.fn.$true;
    var $false = basis.fn.$false;
    var $undef = basis.fn.$undef;
    var arrayFrom = basis.array.from;
    var basisEvent = basis.require("./2.js");
    var createEvent = basisEvent.create;
    var createEventHandler = basisEvent.createHandler;
    var Emitter = basisEvent.Emitter;
    var basisData = basis.require("./1.js");
    var SUBSCRIPTION = basisData.SUBSCRIPTION;
    var Value = basisData.Value;
    var DataObject = basisData.Object;
    var KeyObjectMap = basisData.KeyObjectMap;
    var ReadOnlyDataset = basisData.ReadOnlyDataset;
    var Dataset = basisData.Dataset;
    var DatasetWrapper = basisData.DatasetWrapper;
    var resolveDataset = basisData.resolveDataset;
    var setAccumulateState = Dataset.setAccumulateState;
    SUBSCRIPTION.add("SOURCE", {
      sourceChanged: function(object, oldSource) {
        if (oldSource) SUBSCRIPTION.unlink("source", object, oldSource);
        if (object.source) SUBSCRIPTION.link("source", object, object.source);
      },
      sourcesChanged: function(object, delta) {
        var array;
        if (array = delta.inserted) for (var i = 0, item; item = array[i]; i++) SUBSCRIPTION.link("source", object, array[i]);
        if (array = delta.deleted) for (var i = 0, item; item = array[i]; i++) SUBSCRIPTION.unlink("source", object, array[i]);
      }
    }, function(action, object) {
      var sources = object.sources || (object.source ? [ object.source ] : []);
      for (var i = 0, source; source = sources[i++]; ) action("source", object, source);
    });
    SUBSCRIPTION.addProperty("minuend");
    SUBSCRIPTION.addProperty("subtrahend");
    function getDelta(inserted, deleted) {
      var delta = {};
      var result;
      if (inserted && inserted.length) result = delta.inserted = inserted;
      if (deleted && deleted.length) result = delta.deleted = deleted;
      if (result) return delta;
    }
    function createRuleEvents(fn, events) {
      return function createRuleEventsExtend(events) {
        if (!events) return null;
        if (events.__extend__) return events;
        if (typeof events != "string" && !Array.isArray(events)) events = null;
        return extend(createEventHandler(events, fn), {
          __extend__: createRuleEventsExtend
        });
      }(events);
    }
    function createKeyMap(config, keyGetter, ItemClass, SubsetClass) {
      return new KeyObjectMap(extend({
        keyGetter: keyGetter,
        itemClass: ItemClass,
        create: function(key, object) {
          var datasetWrapper = KeyObjectMap.prototype.create.call(this, key, object);
          datasetWrapper.ruleValue = key;
          datasetWrapper.setDataset(new SubsetClass({
            ruleValue: key
          }));
          return datasetWrapper;
        }
      }, config));
    }
    var MERGE_DATASET_HANDLER = {
      itemsChanged: function(source, delta) {
        var memberMap = this.members_;
        var updated = {};
        var object;
        var objectId;
        if (delta.inserted) {
          for (var i = 0; object = delta.inserted[i]; i++) {
            objectId = object.basisObjectId;
            if (memberMap[objectId]) {
              memberMap[objectId].count++;
            } else {
              memberMap[objectId] = {
                count: 1,
                object: object
              };
            }
            updated[objectId] = memberMap[objectId];
          }
        }
        if (delta.deleted) {
          for (var i = 0; object = delta.deleted[i]; i++) {
            objectId = object.basisObjectId;
            updated[objectId] = memberMap[objectId];
            memberMap[objectId].count--;
          }
        }
        this.applyRule(updated);
      }
    };
    var Merge = Class(ReadOnlyDataset, {
      className: namespace + ".Merge",
      subscribeTo: SUBSCRIPTION.SOURCE,
      emit_sourcesChanged: createEvent("sourcesChanged", "delta"),
      sources: null,
      sourceValues_: null,
      sourcesMap_: null,
      sourceDelta_: null,
      rule: function(count, sourceCount) {
        return count > 0;
      },
      emit_ruleChanged: createEvent("ruleChanged", "oldRule"),
      listen: {
        source: MERGE_DATASET_HANDLER,
        sourceValue: {
          destroy: function(sender) {
            this.removeSource(sender);
          }
        }
      },
      init: function() {
        ReadOnlyDataset.prototype.init.call(this);
        var sources = this.sources;
        this.sources = [];
        this.sourcesMap_ = {};
        this.sourceValues_ = [];
        if (sources) this.setSources(sources);
      },
      setRule: function(rule) {
        rule = getter(rule || Merge.UNION);
        if (this.rule !== rule) {
          var oldRule = this.rule;
          this.rule = rule;
          this.emit_ruleChanged(oldRule);
          return this.applyRule();
        }
      },
      applyRule: function(scope) {
        var memberMap = this.members_;
        var rule = this.rule;
        var sourceCount = this.sources.length;
        var inserted = [];
        var deleted = [];
        var memberCounter;
        var isMember;
        var delta;
        if (!scope) scope = memberMap;
        for (var objectId in scope) {
          memberCounter = memberMap[objectId];
          isMember = sourceCount && memberCounter.count && rule(memberCounter.count, sourceCount);
          if (isMember != objectId in this.items_) {
            if (isMember) inserted.push(memberCounter.object); else deleted.push(memberCounter.object);
          }
          if (memberCounter.count == 0) delete memberMap[objectId];
        }
        if (delta = getDelta(inserted, deleted)) this.emit_itemsChanged(delta);
        return delta;
      },
      addDataset_: function(dataset) {
        this.sources.push(dataset);
        if (this.listen.source) dataset.addHandler(this.listen.source, this);
        var memberMap = this.members_;
        for (var objectId in dataset.items_) {
          if (memberMap[objectId]) {
            memberMap[objectId].count++;
          } else {
            memberMap[objectId] = {
              count: 1,
              object: dataset.items_[objectId]
            };
          }
        }
        return true;
      },
      removeDataset_: function(dataset) {
        arrayRemove(this.sources, dataset);
        if (this.listen.source) dataset.removeHandler(this.listen.source, this);
        var memberMap = this.members_;
        for (var objectId in dataset.items_) memberMap[objectId].count--;
      },
      updateDataset_: function(source) {
        var merge = this.owner;
        var sourcesMap_ = merge.sourcesMap_;
        var dataset = resolveDataset(this, merge.updateDataset_, source, "adapter", merge);
        var inserted;
        var deleted;
        var delta;
        if (this.dataset === dataset) return;
        if (dataset) {
          var count = (sourcesMap_[dataset.basisObjectId] || 0) + 1;
          sourcesMap_[dataset.basisObjectId] = count;
          if (count == 1) {
            merge.addDataset_(dataset);
            inserted = [ dataset ];
          }
        }
        if (this.dataset) {
          var count = (sourcesMap_[this.dataset.basisObjectId] || 0) - 1;
          sourcesMap_[this.dataset.basisObjectId] = count;
          if (count == 0) {
            merge.removeDataset_(this.dataset);
            deleted = [ this.dataset ];
          }
        }
        this.dataset = dataset;
        merge.applyRule();
        if (delta = getDelta(inserted, deleted)) {
          var setSourcesTransaction = merge.sourceDelta_;
          if (setSourcesTransaction) {
            if (delta.inserted) delta.inserted.forEach(function(item) {
              if (!arrayRemove(this.deleted, item)) arrayAdd(this.inserted, item);
            }, setSourcesTransaction);
            if (delta.deleted) delta.deleted.forEach(function(item) {
              if (!arrayRemove(this.inserted, item)) arrayAdd(this.deleted, item);
            }, setSourcesTransaction);
          } else {
            merge.emit_sourcesChanged(delta);
          }
        }
        return delta;
      },
      getSourceValues: function() {
        return this.sourceValues_.map(function(item) {
          return item.source;
        });
      },
      addSource: function(source) {
        if (!source || typeof source != "object" && typeof source != "function") {
          basis.dev.warn(this.constructor.className + ".addSource: value should be a dataset instance or to be able to resolve in dataset");
          return;
        }
        if (this.hasSource(source)) {
          basis.dev.warn(this.constructor.className + ".addSource: value is already in source list");
          return;
        }
        var sourceInfo = {
          owner: this,
          source: source,
          adapter: null,
          dataset: null
        };
        this.sourceValues_.push(sourceInfo);
        this.updateDataset_.call(sourceInfo, source);
        if (this.listen.sourceValue && source instanceof Emitter) source.addHandler(this.listen.sourceValue, this);
      },
      removeSource: function(source) {
        for (var i = 0, sourceInfo; sourceInfo = this.sourceValues_[i]; i++) if (sourceInfo.source === source) {
          if (this.listen.sourceValue && source instanceof Emitter) source.removeHandler(this.listen.sourceValue, this);
          this.updateDataset_.call(sourceInfo, null);
          this.sourceValues_.splice(i, 1);
          return;
        }
        basis.dev.warn(this.constructor.className + ".removeSource: source value isn't found in source list");
      },
      hasSource: function(source) {
        for (var i = 0, sourceInfo; sourceInfo = this.sourceValues_[i]; i++) if (sourceInfo.source === source) return true;
        return false;
      },
      setSources: function(sources) {
        var exists = this.sourceValues_.map(function(sourceInfo) {
          return sourceInfo.source;
        });
        var inserted = [];
        var deleted = [];
        var delta;
        if (!sources) sources = [];
        this.sourceDelta_ = {
          inserted: inserted,
          deleted: deleted
        };
        for (var i = 0; i < sources.length; i++) {
          var source = sources[i];
          if (!arrayRemove(exists, source)) this.addSource(source);
        }
        exists.forEach(this.removeSource, this);
        this.sourceDelta_ = null;
        if (delta = getDelta(inserted, deleted)) this.emit_sourcesChanged(delta);
        return delta;
      },
      destroy: function() {
        this.setSources();
        ReadOnlyDataset.prototype.destroy.call(this);
        this.sourceValues_ = null;
        this.sourcesMap_ = null;
        this.sourceDelta_ = null;
        this.sources = null;
      }
    });
    Merge.UNION = Merge.prototype.rule;
    Merge.INTERSECTION = function(count, sourceCount) {
      return count == sourceCount;
    };
    Merge.DIFFERENCE = function(count, sourceCount) {
      return count == 1;
    };
    Merge.MORE_THAN_ONE_INCLUDE = function(count, sourceCount) {
      return sourceCount == 1 || count > 1;
    };
    Merge.AT_LEAST_ONE_EXCLUDE = function(count, sourceCount) {
      return sourceCount == 1 || count < sourceCount;
    };
    var datasetAbsentFilter = function(item) {
      return !this.has(item);
    };
    var SUBTRACTDATASET_MINUEND_HANDLER = {
      itemsChanged: function(dataset, delta) {
        if (!this.subtrahend) return;
        var newDelta = getDelta(delta.inserted && delta.inserted.filter(datasetAbsentFilter, this.subtrahend), delta.deleted && delta.deleted.filter(this.has, this));
        if (newDelta) this.emit_itemsChanged(newDelta);
      },
      destroy: function() {
        if (!this.minuendRA_) this.setMinuend(null);
      }
    };
    var SUBTRACTDATASET_SUBTRAHEND_HANDLER = {
      itemsChanged: function(dataset, delta) {
        if (!this.minuend) return;
        var newDelta = getDelta(delta.deleted && delta.deleted.filter(this.minuend.has, this.minuend), delta.inserted && delta.inserted.filter(this.has, this));
        if (newDelta) this.emit_itemsChanged(newDelta);
      },
      destroy: function() {
        if (!this.subtrahendRA_) this.setSubtrahend(null);
      }
    };
    var Subtract = Class(ReadOnlyDataset, {
      className: namespace + ".Subtract",
      subscribeTo: SUBSCRIPTION.MINUEND + SUBSCRIPTION.SUBTRAHEND,
      minuend: null,
      minuendRA_: null,
      emit_minuendChanged: createEvent("minuendChanged", "oldMinuend"),
      subtrahend: null,
      subtrahendRA_: null,
      emit_subtrahendChanged: createEvent("subtrahendChanged", "oldSubtrahend"),
      listen: {
        minuend: SUBTRACTDATASET_MINUEND_HANDLER,
        subtrahend: SUBTRACTDATASET_SUBTRAHEND_HANDLER
      },
      init: function() {
        ReadOnlyDataset.prototype.init.call(this);
        var minuend = this.minuend;
        var subtrahend = this.subtrahend;
        this.minuend = null;
        this.subtrahend = null;
        if (minuend || subtrahend) this.setOperands(minuend, subtrahend);
      },
      setOperands: function(minuend, subtrahend) {
        var delta;
        var operandsChanged = false;
        minuend = resolveDataset(this, this.setMinuend, minuend, "minuendRA_");
        subtrahend = resolveDataset(this, this.setSubtrahend, subtrahend, "subtrahendRA_");
        var oldMinuend = this.minuend;
        var oldSubtrahend = this.subtrahend;
        if (oldMinuend !== minuend) {
          operandsChanged = true;
          this.minuend = minuend;
          var listenHandler = this.listen.minuend;
          if (listenHandler) {
            if (oldMinuend) oldMinuend.removeHandler(listenHandler, this);
            if (minuend) minuend.addHandler(listenHandler, this);
          }
          this.emit_minuendChanged(oldMinuend);
        }
        if (oldSubtrahend !== subtrahend) {
          operandsChanged = true;
          this.subtrahend = subtrahend;
          var listenHandler = this.listen.subtrahend;
          if (listenHandler) {
            if (oldSubtrahend) oldSubtrahend.removeHandler(listenHandler, this);
            if (subtrahend) subtrahend.addHandler(listenHandler, this);
          }
          this.emit_subtrahendChanged(oldSubtrahend);
        }
        if (!operandsChanged) return false;
        if (!minuend || !subtrahend) {
          if (this.itemCount) this.emit_itemsChanged(delta = {
            deleted: this.getItems()
          });
        } else {
          var deleted = [];
          var inserted = [];
          for (var key in this.items_) if (!minuend.items_[key] || subtrahend.items_[key]) deleted.push(this.items_[key]);
          for (var key in minuend.items_) if (!this.items_[key] && !subtrahend.items_[key]) inserted.push(minuend.items_[key]);
          if (delta = getDelta(inserted, deleted)) this.emit_itemsChanged(delta);
        }
        return delta;
      },
      setMinuend: function(minuend) {
        return this.setOperands(minuend, this.subtrahendRA_ ? this.subtrahendRA_.source : this.subtrahend);
      },
      setSubtrahend: function(subtrahend) {
        return this.setOperands(this.minuendRA_ ? this.minuendRA_.source : this.minuend, subtrahend);
      },
      destroy: function() {
        this.setOperands();
        ReadOnlyDataset.prototype.destroy.call(this);
      }
    });
    var SourceDataset = Class(ReadOnlyDataset, {
      className: namespace + ".SourceDataset",
      subscribeTo: SUBSCRIPTION.SOURCE,
      source: null,
      emit_sourceChanged: createEvent("sourceChanged", "oldSource"),
      sourceRA_: null,
      sourceMap_: null,
      listen: {
        source: {
          destroy: function() {
            if (!this.sourceRA_) this.setSource();
          }
        }
      },
      init: function() {
        this.sourceMap_ = {};
        ReadOnlyDataset.prototype.init.call(this);
        var source = this.source;
        if (source) {
          this.source = null;
          this.setSource(source);
        }
      },
      setSource: function(source) {
        source = resolveDataset(this, this.setSource, source, "sourceRA_");
        if (this.source !== source) {
          var oldSource = this.source;
          var listenHandler = this.listen.source;
          this.source = source;
          if (listenHandler) {
            var itemsChangedHandler = listenHandler.itemsChanged;
            setAccumulateState(true);
            if (oldSource) {
              oldSource.removeHandler(listenHandler, this);
              if (itemsChangedHandler) itemsChangedHandler.call(this, oldSource, {
                deleted: oldSource.getItems()
              });
            }
            if (source) {
              source.addHandler(listenHandler, this);
              if (itemsChangedHandler) itemsChangedHandler.call(this, source, {
                inserted: source.getItems()
              });
            }
            setAccumulateState(false);
          }
          this.emit_sourceChanged(oldSource);
        }
      },
      destroy: function() {
        this.setSource();
        ReadOnlyDataset.prototype.destroy.call(this);
        this.sourceMap_ = null;
      }
    });
    var MAPFILTER_SOURCEOBJECT_UPDATE = function(sourceObject) {
      var newMember = this.map ? this.map(sourceObject) : object;
      if (newMember instanceof DataObject == false || this.filter(newMember)) newMember = null;
      var sourceMap = this.sourceMap_[sourceObject.basisObjectId];
      var curMember = sourceMap.member;
      if (curMember !== newMember) {
        var memberMap = this.members_;
        var delta;
        var inserted;
        var deleted;
        sourceMap.member = newMember;
        if (curMember) {
          var curMemberId = curMember.basisObjectId;
          if (this.removeMemberRef) this.removeMemberRef(curMember, sourceObject);
          if (--memberMap[curMemberId] == 0) {
            delete memberMap[curMemberId];
            deleted = [ curMember ];
          }
        }
        if (newMember) {
          var newMemberId = newMember.basisObjectId;
          if (this.addMemberRef) this.addMemberRef(newMember, sourceObject);
          if (memberMap[newMemberId]) {
            memberMap[newMemberId]++;
          } else {
            memberMap[newMemberId] = 1;
            inserted = [ newMember ];
          }
        }
        if (delta = getDelta(inserted, deleted)) this.emit_itemsChanged(delta);
      }
    };
    var MAPFILTER_SOURCE_HANDLER = {
      itemsChanged: function(source, delta) {
        var sourceMap = this.sourceMap_;
        var memberMap = this.members_;
        var inserted = [];
        var deleted = [];
        var sourceObject;
        var sourceObjectId;
        var member;
        var updateHandler = this.ruleEvents;
        setAccumulateState(true);
        if (delta.inserted) {
          for (var i = 0; sourceObject = delta.inserted[i]; i++) {
            member = this.map ? this.map(sourceObject) : sourceObject;
            if (member instanceof DataObject == false || this.filter(member)) member = null;
            if (updateHandler) sourceObject.addHandler(updateHandler, this);
            sourceMap[sourceObject.basisObjectId] = {
              sourceObject: sourceObject,
              member: member
            };
            if (member) {
              var memberId = member.basisObjectId;
              if (memberMap[memberId]) {
                memberMap[memberId]++;
              } else {
                memberMap[memberId] = 1;
                inserted.push(member);
              }
              if (this.addMemberRef) this.addMemberRef(member, sourceObject);
            }
          }
        }
        if (delta.deleted) {
          for (var i = 0; sourceObject = delta.deleted[i]; i++) {
            sourceObjectId = sourceObject.basisObjectId;
            member = sourceMap[sourceObjectId].member;
            if (updateHandler) sourceObject.removeHandler(updateHandler, this);
            delete sourceMap[sourceObjectId];
            if (member) {
              var memberId = member.basisObjectId;
              if (--memberMap[memberId] == 0) {
                delete memberMap[memberId];
                deleted.push(member);
              }
              if (this.removeMemberRef) this.removeMemberRef(member, sourceObject);
            }
          }
        }
        setAccumulateState(false);
        if (delta = getDelta(inserted, deleted)) this.emit_itemsChanged(delta);
      }
    };
    var MapFilter = Class(SourceDataset, {
      className: namespace + ".MapFilter",
      map: $self,
      filter: $false,
      rule: getter($true),
      emit_ruleChanged: createEvent("ruleChanged", "oldRule"),
      ruleEvents: createRuleEvents(MAPFILTER_SOURCEOBJECT_UPDATE, "update"),
      addMemberRef: null,
      removeMemberRef: null,
      listen: {
        source: MAPFILTER_SOURCE_HANDLER
      },
      setMap: function(map) {
        if (typeof map != "function") map = $self;
        if (this.map !== map) {
          this.map = map;
          return this.applyRule();
        }
      },
      setFilter: function(filter) {
        if (typeof filter != "function") filter = $false;
        if (this.filter !== filter) {
          this.filter = filter;
          return this.applyRule();
        }
      },
      setRule: function(rule) {
        rule = getter(rule || $true);
        if (this.rule !== rule) {
          var oldRule = this.rule;
          this.rule = rule;
          this.emit_ruleChanged(oldRule);
          return this.applyRule();
        }
      },
      applyRule: function() {
        var sourceMap = this.sourceMap_;
        var memberMap = this.members_;
        var curMember;
        var newMember;
        var curMemberId;
        var newMemberId;
        var sourceObject;
        var sourceObjectInfo;
        var inserted = [];
        var deleted = [];
        var delta;
        for (var sourceObjectId in sourceMap) {
          sourceObjectInfo = sourceMap[sourceObjectId];
          sourceObject = sourceObjectInfo.sourceObject;
          curMember = sourceObjectInfo.member;
          newMember = this.map ? this.map(sourceObject) : sourceObject;
          if (newMember instanceof DataObject == false || this.filter(newMember)) newMember = null;
          if (curMember != newMember) {
            sourceObjectInfo.member = newMember;
            if (curMember) {
              curMemberId = curMember.basisObjectId;
              if (this.removeMemberRef) this.removeMemberRef(curMember, sourceObject);
              memberMap[curMemberId]--;
            }
            if (newMember) {
              newMemberId = newMember.basisObjectId;
              if (this.addMemberRef) this.addMemberRef(newMember, sourceObject);
              if (newMemberId in memberMap) {
                memberMap[newMemberId]++;
              } else {
                memberMap[newMemberId] = 1;
                inserted.push(newMember);
              }
            }
          }
        }
        for (curMemberId in this.items_) if (memberMap[curMemberId] == 0) {
          delete memberMap[curMemberId];
          deleted.push(this.items_[curMemberId]);
        }
        if (delta = getDelta(inserted, deleted)) this.emit_itemsChanged(delta);
        return delta;
      }
    });
    var Filter = Class(MapFilter, {
      className: namespace + ".Filter",
      filter: function(object) {
        return !this.rule(object);
      }
    });
    var Split = Class(MapFilter, {
      className: namespace + ".Split",
      subsetClass: ReadOnlyDataset,
      subsetWrapperClass: DatasetWrapper,
      keyMap: null,
      map: function(sourceObject) {
        return this.keyMap.resolve(sourceObject);
      },
      rule: getter($undef),
      setRule: function(rule) {
        rule = getter(rule || $undef);
        if (this.rule !== rule) {
          var oldRule = this.rule;
          this.rule = rule;
          this.keyMap.keyGetter = rule;
          this.emit_ruleChanged(oldRule);
          return this.applyRule();
        }
      },
      addMemberRef: function(wrapper, sourceObject) {
        wrapper.dataset.emit_itemsChanged({
          inserted: [ sourceObject ]
        });
      },
      removeMemberRef: function(wrapper, sourceObject) {
        wrapper.dataset.emit_itemsChanged({
          deleted: [ sourceObject ]
        });
      },
      init: function() {
        if (!this.keyMap || this.keyMap instanceof KeyObjectMap == false) this.keyMap = createKeyMap(this.keyMap, this.rule, this.subsetWrapperClass, this.subsetClass);
        MapFilter.prototype.init.call(this);
      },
      getSubset: function(data, autocreate) {
        return this.keyMap.get(data, autocreate);
      },
      destroy: function() {
        MapFilter.prototype.destroy.call(this);
        this.keyMap.destroy();
        this.keyMap = null;
      }
    });
    function binarySearchPos(array, map) {
      if (!array.length) return 0;
      var value = map.value;
      var id = map.object.basisObjectId;
      var cmpValue;
      var cmpId;
      var pos;
      var item;
      var l = 0;
      var r = array.length - 1;
      do {
        pos = l + r >> 1;
        item = array[pos];
        cmpValue = item.value;
        if (value < cmpValue) r = pos - 1; else if (value > cmpValue) l = pos + 1; else {
          cmpId = item.object.basisObjectId;
          if (id < cmpId) r = pos - 1; else if (id > cmpId) l = pos + 1; else return pos;
        }
      } while (l <= r);
      return pos + (cmpValue == value ? cmpId < id : cmpValue < value);
    }
    var SLICE_SOURCEOBJECT_UPDATE = function(sourceObject) {
      var sourceObjectInfo = this.sourceMap_[sourceObject.basisObjectId];
      var newValue = this.rule(sourceObject);
      var index = this.index_;
      if (newValue !== sourceObjectInfo.value) {
        var pos = binarySearchPos(index, sourceObjectInfo);
        var prev = index[pos - 1];
        var next = index[pos + 1];
        sourceObjectInfo.value = newValue;
        if (prev && (prev.value > newValue || prev.value == newValue && prev.object.basisObjectId > sourceObjectInfo.object.basisObjectId) || next && (next.value < newValue || next.value == newValue && next.object.basisObjectId < sourceObjectInfo.object.basisObjectId)) {
          index.splice(pos, 1);
          index.splice(binarySearchPos(index, sourceObjectInfo), 0, sourceObjectInfo);
          this.applyRule();
        }
      }
    };
    function sliceIndexSort(a, b) {
      return +(a.value > b.value) || -(a.value < b.value) || a.object.basisObjectId - b.object.basisObjectId;
    }
    var SLICE_SOURCE_HANDLER = {
      itemsChanged: function(source, delta) {
        var sourceMap = this.sourceMap_;
        var index = this.index_;
        var updateHandler = this.ruleEvents;
        var dropIndex = false;
        var buildIndex = false;
        var sourceObjectInfo;
        var inserted = delta.inserted;
        var deleted = delta.deleted;
        if (deleted) {
          if (deleted.length > index.length - deleted.length) {
            dropIndex = true;
            buildIndex = deleted.length != index.length;
            index.length = 0;
          }
          for (var i = 0, sourceObject; sourceObject = deleted[i]; i++) {
            if (!dropIndex) {
              sourceObjectInfo = sourceMap[sourceObject.basisObjectId];
              index.splice(binarySearchPos(index, sourceObjectInfo), 1);
            }
            delete sourceMap[sourceObject.basisObjectId];
            if (updateHandler) sourceObject.removeHandler(updateHandler, this);
          }
          if (buildIndex) for (var key in sourceMap) {
            sourceObjectInfo = sourceMap[key];
            index.splice(binarySearchPos(index, sourceObjectInfo), 0, sourceObjectInfo);
          }
        }
        if (inserted) {
          buildIndex = !index.length;
          for (var i = 0, sourceObject; sourceObject = inserted[i]; i++) {
            sourceObjectInfo = {
              object: sourceObject,
              value: this.rule(sourceObject)
            };
            sourceMap[sourceObject.basisObjectId] = sourceObjectInfo;
            if (!buildIndex) index.splice(binarySearchPos(index, sourceObjectInfo), 0, sourceObjectInfo); else index.push(sourceObjectInfo);
            if (updateHandler) sourceObject.addHandler(updateHandler, this);
          }
          if (buildIndex) index.sort(sliceIndexSort);
        }
        this.applyRule();
      }
    };
    var Slice = Class(SourceDataset, {
      className: namespace + ".Slice",
      rule: getter($true),
      emit_ruleChanged: createEvent("ruleChanged", "oldRule", "oldOrderDesc"),
      ruleEvents: createRuleEvents(SLICE_SOURCEOBJECT_UPDATE, "update"),
      index_: null,
      left_: null,
      right_: null,
      orderDesc: false,
      offset: 0,
      limit: 10,
      listen: {
        source: SLICE_SOURCE_HANDLER
      },
      emit_rangeChanged: createEvent("rangeChanged", "oldOffset", "oldLimit"),
      init: function() {
        this.index_ = [];
        SourceDataset.prototype.init.call(this);
      },
      setRange: function(offset, limit) {
        var oldOffset = this.offset;
        var oldLimit = this.limit;
        var delta = false;
        if (oldOffset != offset || oldLimit != limit) {
          this.offset = offset;
          this.limit = limit;
          delta = this.applyRule();
          this.emit_rangeChanged(oldOffset, oldLimit);
        }
        return delta;
      },
      setOffset: function(offset) {
        return this.setRange(offset, this.limit);
      },
      setLimit: function(limit) {
        return this.setRange(this.offset, limit);
      },
      setRule: function(rule, orderDesc) {
        rule = getter(rule || $true);
        orderDesc = !!orderDesc;
        if (this.rule != rule || this.orderDesc != orderDesc) {
          var oldRule = this.rule;
          var oldOrderDesc = this.orderDesc;
          if (this.rule != rule) {
            var index = this.index_;
            for (var i = 0; i < index.length; i++) index[i].value = rule(index[i].object);
            index.sort(sliceIndexSort);
            this.rule = rule;
          }
          this.orderDesc = orderDesc;
          this.rule = rule;
          this.emit_ruleChanged(oldRule, oldOrderDesc);
          return this.applyRule();
        }
      },
      applyRule: function() {
        var start = this.offset;
        var end = start + this.limit;
        if (this.orderDesc) {
          start = this.index_.length - end;
          end = start + this.limit;
        }
        var curSet = objectSlice(this.members_);
        var newSet = this.index_.slice(Math.max(0, start), Math.max(0, end));
        var inserted = [];
        var delta;
        for (var i = 0, item; item = newSet[i]; i++) {
          var objectId = item.object.basisObjectId;
          if (curSet[objectId]) delete curSet[objectId]; else {
            inserted.push(item.object);
            this.members_[objectId] = item.object;
          }
        }
        for (var objectId in curSet) delete this.members_[objectId];
        if (this.left_) for (var offset in this.left_) {
          var item = this.index_[this.orderDesc ? end + Number(offset) - 1 : start - Number(offset)];
          this.left_[offset].set(item ? item.object : null);
        }
        if (this.right_) for (var offset in this.right_) {
          var item = this.index_[this.orderDesc ? start - Number(offset) : end + Number(offset) - 1];
          this.right_[offset].set(item ? item.object : null);
        }
        if (delta = getDelta(inserted, values(curSet))) this.emit_itemsChanged(delta);
        return delta;
      },
      left: function(offset) {
        offset = parseInt(offset, 10) || 0;
        if (!this.left_) this.left_ = {};
        var value = this.left_[offset];
        if (!value) {
          var start = this.offset;
          var end = start + this.limit;
          if (this.orderDesc) {
            start = this.index_.length - end;
            end = start + this.limit;
          }
          var item = this.index_[this.orderDesc ? end + offset - 1 : start - offset];
          value = this.left_[offset] = new Value({
            value: item ? item.object : null
          });
        }
        return value;
      },
      right: function(offset) {
        offset = parseInt(offset, 10) || 0;
        if (!this.right_) this.right_ = {};
        var value = this.right_[offset];
        if (!value) {
          var start = this.offset;
          var end = start + this.limit;
          if (this.orderDesc) {
            start = this.index_.length - end;
            end = start + this.limit;
          }
          var item = this.index_[this.orderDesc ? start - offset : end + offset - 1];
          value = this.right_[offset] = new Value({
            value: item ? item.object : null
          });
        }
        return value;
      },
      destroy: function() {
        SourceDataset.prototype.destroy.call(this);
        if (this.left_) {
          for (var offset in this.left_) this.left_[offset].destroy();
          this.left_ = null;
        }
        if (this.right_) {
          for (var offset in this.right_) this.right_[offset].destroy();
          this.right_ = null;
        }
        this.index_ = null;
      }
    });
    var CLOUD_SOURCEOBJECT_UPDATE = function(sourceObject) {
      var sourceMap = this.sourceMap_;
      var memberMap = this.members_;
      var sourceObjectId = sourceObject.basisObjectId;
      var oldList = sourceMap[sourceObjectId].list;
      var newList = sourceMap[sourceObjectId].list = {};
      var list = this.rule(sourceObject);
      var delta;
      var inserted = [];
      var deleted = [];
      var subset;
      if (Array.isArray(list)) for (var j = 0; j < list.length; j++) {
        subset = this.keyMap.get(list[j], true);
        if (subset && !subset.has(sourceObject)) {
          subsetId = subset.basisObjectId;
          newList[subsetId] = subset;
          if (!oldList[subsetId]) {
            subset.dataset.emit_itemsChanged({
              inserted: [ sourceObject ]
            });
            if (!memberMap[subsetId]) {
              inserted.push(subset);
              memberMap[subsetId] = 1;
            } else memberMap[subsetId]++;
          }
        }
      }
      for (var subsetId in oldList) if (!newList[subsetId]) {
        var subset = oldList[subsetId];
        subset.dataset.emit_itemsChanged({
          deleted: [ sourceObject ]
        });
        if (!--memberMap[subsetId]) {
          delete memberMap[subsetId];
          deleted.push(subset);
        }
      }
      if (delta = getDelta(inserted, deleted)) this.emit_itemsChanged(delta);
    };
    var CLOUD_SOURCE_HANDLER = {
      itemsChanged: function(dataset, delta) {
        var sourceMap = this.sourceMap_;
        var memberMap = this.members_;
        var updateHandler = this.ruleEvents;
        var array;
        var subset;
        var subsetId;
        var inserted = [];
        var deleted = [];
        setAccumulateState(true);
        if (array = delta.inserted) for (var i = 0, sourceObject; sourceObject = array[i]; i++) {
          var list = this.rule(sourceObject);
          var sourceObjectInfo = {
            object: sourceObject,
            list: {}
          };
          sourceMap[sourceObject.basisObjectId] = sourceObjectInfo;
          if (Array.isArray(list)) for (var j = 0, dupFilter = {}; j < list.length; j++) {
            subset = this.keyMap.get(list[j], true);
            if (subset && !dupFilter[subset.basisObjectId]) {
              subsetId = subset.basisObjectId;
              dupFilter[subsetId] = true;
              sourceObjectInfo.list[subsetId] = subset;
              subset.dataset.emit_itemsChanged({
                inserted: [ sourceObject ]
              });
              if (!memberMap[subsetId]) {
                inserted.push(subset);
                memberMap[subsetId] = 1;
              } else memberMap[subsetId]++;
            }
          }
          if (updateHandler) sourceObject.addHandler(updateHandler, this);
        }
        if (array = delta.deleted) for (var i = 0, sourceObject; sourceObject = array[i]; i++) {
          var sourceObjectId = sourceObject.basisObjectId;
          var list = sourceMap[sourceObjectId].list;
          delete sourceMap[sourceObjectId];
          for (var subsetId in list) {
            subset = list[subsetId];
            subset.dataset.emit_itemsChanged({
              deleted: [ sourceObject ]
            });
            if (!--memberMap[subsetId]) {
              delete memberMap[subsetId];
              deleted.push(subset);
            }
          }
          if (updateHandler) sourceObject.removeHandler(updateHandler, this);
        }
        setAccumulateState(false);
        if (delta = getDelta(inserted, deleted)) this.emit_itemsChanged(delta);
      }
    };
    var Cloud = Class(SourceDataset, {
      className: namespace + ".Cloud",
      subsetClass: ReadOnlyDataset,
      subsetWrapperClass: DatasetWrapper,
      rule: getter($undef),
      ruleEvents: createRuleEvents(CLOUD_SOURCEOBJECT_UPDATE, "update"),
      keyMap: null,
      map: $self,
      listen: {
        source: CLOUD_SOURCE_HANDLER
      },
      init: function() {
        if (!this.keyMap || this.keyMap instanceof KeyObjectMap == false) this.keyMap = createKeyMap(this.keyMap, this.rule, this.subsetWrapperClass, this.subsetClass);
        SourceDataset.prototype.init.call(this);
      },
      getSubset: function(data, autocreate) {
        return this.keyMap.get(data, autocreate);
      },
      destroy: function() {
        SourceDataset.prototype.destroy.call(this);
        this.keyMap.destroy();
        this.keyMap = null;
      }
    });
    var EXTRACT_SOURCEOBJECT_UPDATE = function(sourceObject) {
      var sourceObjectInfo = this.sourceMap_[sourceObject.basisObjectId];
      var newValue = this.rule(sourceObject) || null;
      var oldValue = sourceObjectInfo.value;
      var inserted;
      var deleted;
      var delta;
      if (newValue === oldValue) return;
      if (newValue instanceof DataObject || newValue instanceof ReadOnlyDataset) inserted = addToExtract(this, newValue, sourceObject);
      if (oldValue) deleted = removeFromExtract(this, oldValue, sourceObject);
      sourceObjectInfo.value = newValue;
      if (delta = getDelta(inserted, deleted)) this.emit_itemsChanged(delta);
    };
    var EXTRACT_DATASET_ITEMSCHANGED = function(dataset, delta) {
      var inserted = delta.inserted;
      var deleted = delta.deleted;
      var delta;
      if (inserted) inserted = addToExtract(this, inserted, dataset);
      if (deleted) deleted = removeFromExtract(this, deleted, dataset);
      if (delta = getDelta(inserted, deleted)) this.emit_itemsChanged(delta);
    };
    var EXTRACT_DATASET_HANDLER = {
      itemsChanged: EXTRACT_DATASET_ITEMSCHANGED,
      destroy: function(dataset) {
        var sourceMap = this.sourceMap_;
        for (var cursor = sourceMap[dataset.basisObjectId]; cursor = cursor.ref; ) sourceMap[cursor.object.basisObjectId].value = null;
        delete sourceMap[dataset.basisObjectId];
      }
    };
    function hasExtractSourceRef(extract, object, marker) {
      var sourceObjectInfo = extract.sourceMap_[object.basisObjectId];
      if (sourceObjectInfo && sourceObjectInfo.visited !== marker) {
        for (var cursor = sourceObjectInfo; cursor = cursor.ref; ) if (cursor.object === extract.source) return true;
        sourceObjectInfo.visited = marker;
        for (var cursor = sourceObjectInfo; cursor = cursor.ref; ) if (hasExtractSourceRef(extract, cursor.object, marker || {})) return true;
      }
    }
    function addToExtract(extract, items, ref) {
      var sourceMap = extract.sourceMap_;
      var members = extract.members_;
      var queue = arrayFrom(items);
      var inserted = [];
      for (var i = 0; i < queue.length; i++) {
        var item = queue[i];
        var sourceObjectId = item.basisObjectId;
        if (!sourceObjectId) {
          ref = item.ref;
          item = item.object;
          sourceObjectId = item.basisObjectId;
        }
        var sourceObjectInfo = sourceMap[sourceObjectId];
        if (sourceObjectInfo) {
          sourceObjectInfo.ref = {
            object: ref,
            ref: sourceObjectInfo.ref
          };
        } else {
          sourceObjectInfo = sourceMap[sourceObjectId] = {
            source: item,
            ref: {
              object: ref,
              ref: null
            },
            visited: null,
            value: null
          };
          if (item instanceof DataObject) {
            var value = extract.rule(item) || null;
            if (value instanceof DataObject || value instanceof ReadOnlyDataset) {
              sourceObjectInfo.value = value;
              queue.push({
                object: value,
                ref: item
              });
            }
            members[sourceObjectId] = sourceObjectInfo;
            inserted.push(item);
            if (extract.ruleEvents) item.addHandler(extract.ruleEvents, extract);
          } else {
            item.addHandler(EXTRACT_DATASET_HANDLER, extract);
            for (var j = 0, datasetItems = item.getItems(); j < datasetItems.length; j++) queue.push({
              object: datasetItems[j],
              ref: item
            });
          }
        }
      }
      return inserted;
    }
    function removeFromExtract(extract, items, ref) {
      var sourceMap = extract.sourceMap_;
      var members = extract.members_;
      var queue = arrayFrom(items);
      var deleted = [];
      for (var i = 0; i < queue.length; i++) {
        var item = queue[i];
        var sourceObjectId = item.basisObjectId;
        if (!sourceObjectId) {
          ref = item.ref;
          item = item.object;
          sourceObjectId = item.basisObjectId;
        }
        var sourceObjectInfo = sourceMap[sourceObjectId];
        var sourceObjectValue = sourceObjectInfo.value;
        for (var cursor = sourceObjectInfo, prevCursor = sourceObjectInfo; cursor = cursor.ref; ) {
          if (cursor.object === ref) {
            prevCursor.ref = cursor.ref;
            break;
          }
          prevCursor = cursor;
        }
        if (!sourceObjectInfo.ref) {
          if (item instanceof DataObject) {
            delete members[sourceObjectId];
            deleted.push(item);
            if (extract.ruleEvents) item.removeHandler(extract.ruleEvents, extract);
            if (sourceObjectValue) queue.push({
              object: sourceObjectValue,
              ref: item
            });
          } else {
            item.removeHandler(EXTRACT_DATASET_HANDLER, extract);
            for (var j = 0, datasetItems = item.getItems(); j < datasetItems.length; j++) queue.push({
              object: datasetItems[j],
              ref: item
            });
          }
          delete sourceMap[sourceObjectId];
        } else {
          if (sourceObjectValue && !hasExtractSourceRef(extract, item)) {
            sourceObjectInfo.value = null;
            queue.push({
              object: sourceObjectValue,
              ref: item
            });
          }
        }
      }
      return deleted;
    }
    var Extract = SourceDataset.subclass({
      className: namespace + ".Extract",
      rule: getter($undef),
      emit_ruleChanged: createEvent("ruleChanged", "oldRule"),
      ruleEvents: createRuleEvents(EXTRACT_SOURCEOBJECT_UPDATE, "update"),
      listen: {
        source: {
          itemsChanged: EXTRACT_DATASET_ITEMSCHANGED
        }
      },
      setRule: function(rule) {
        rule = getter(rule || $undef);
        if (this.rule !== rule) {
          var oldRule = this.rule;
          this.rule = rule;
          this.emit_ruleChanged(oldRule);
          return this.applyRule();
        }
      },
      applyRule: function() {
        var insertedMap = {};
        var deletedMap = {};
        var array;
        var delta;
        for (var key in this.sourceMap_) {
          var sourceObjectInfo = this.sourceMap_[key];
          var sourceObject = sourceObjectInfo.source;
          if (sourceObject instanceof DataObject) {
            var newValue = this.rule(sourceObject) || null;
            var oldValue = sourceObjectInfo.value;
            if (newValue === oldValue) continue;
            if (newValue instanceof DataObject || newValue instanceof ReadOnlyDataset) {
              var inserted = addToExtract(this, newValue, sourceObject);
              for (var i = 0; i < inserted.length; i++) {
                var item = inserted[i];
                var id = item.basisObjectId;
                if (deletedMap[id]) delete deletedMap[id]; else insertedMap[id] = item;
              }
            }
            if (oldValue) {
              var deleted = removeFromExtract(this, oldValue, sourceObject);
              for (var i = 0; i < deleted.length; i++) {
                var item = deleted[i];
                var id = item.basisObjectId;
                if (insertedMap[id]) delete insertedMap[id]; else deletedMap[id] = item;
              }
            }
            sourceObjectInfo.value = newValue;
          }
        }
        if (delta = getDelta(values(insertedMap), values(deletedMap))) this.emit_itemsChanged(delta);
        return delta;
      }
    });
    module.exports = {
      getDelta: getDelta,
      createRuleEvents: createRuleEvents,
      Merge: Merge,
      Subtract: Subtract,
      SourceDataset: SourceDataset,
      MapFilter: MapFilter,
      Filter: Filter,
      Split: Split,
      Extract: Extract,
      Slice: Slice,
      Cloud: Cloud
    };
  },
  "g.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var namespace = this.path;
    var Class = basis.Class;
    var basisData = basis.require("./1.js");
    var Value = basisData.Value;
    var DataObject = basisData.Object;
    var KeyObjectMap = basisData.KeyObjectMap;
    var ReadOnlyDataset = basisData.ReadOnlyDataset;
    var DatasetWrapper = basisData.DatasetWrapper;
    var resolveDataset = basisData.resolveDataset;
    var basisDataset = basis.require("./f.js");
    var MapFilter = basisDataset.MapFilter;
    var createRuleEvents = basisDataset.createRuleEvents;
    function binarySearchPos(array, value) {
      if (!array.length) return 0;
      var pos;
      var cmpValue;
      var l = 0;
      var r = array.length - 1;
      do {
        pos = l + r >> 1;
        cmpValue = array[pos] || 0;
        if (value < cmpValue) r = pos - 1; else if (value > cmpValue) l = pos + 1; else return value == cmpValue ? pos : 0;
      } while (l <= r);
      return pos + (cmpValue < value);
    }
    var Index = Class(Value, {
      className: namespace + ".Index",
      explicit: false,
      wrapperCount: 0,
      indexCache_: null,
      valueGetter: basis.fn.$null,
      updateEvents: {},
      value: 0,
      setNullOnEmitterDestroy: false,
      init: function() {
        this.indexCache_ = {};
        Value.prototype.init.call(this);
      },
      add_: function(value) {},
      remove_: function(value) {},
      update_: function(newValue, oldValue) {},
      normalize: function(value) {
        return Number(value) || 0;
      },
      destroy: function() {
        Value.prototype.destroy.call(this);
        this.indexCache_ = null;
      }
    });
    var Sum = Class(Index, {
      className: namespace + ".Sum",
      add_: function(value) {
        this.value += value;
      },
      remove_: function(value) {
        this.value -= value;
      },
      update_: function(newValue, oldValue) {
        this.set(this.value - oldValue + newValue);
      }
    });
    var Count = Class(Index, {
      className: namespace + ".Count",
      valueGetter: basis.fn.$true,
      add_: function(value) {
        this.value += value;
      },
      remove_: function(value) {
        this.value -= value;
      },
      normalize: function(value) {
        return !!value;
      },
      update_: function(newValue, oldValue) {
        this.set(this.value - !!oldValue + !!newValue);
      }
    });
    var Avg = Class(Index, {
      className: namespace + ".Avg",
      sum_: 0,
      count_: 0,
      add_: function(value) {
        this.sum_ += value;
        this.count_ += 1;
        this.value = this.sum_ / this.count_;
      },
      remove_: function(value) {
        this.sum_ -= value;
        this.count_ -= 1;
        this.value = this.count_ ? this.sum_ / this.count_ : 0;
      },
      update_: function(newValue, oldValue) {
        this.sum_ += newValue - oldValue;
        this.set(this.sum_ / this.count_);
      }
    });
    var VectorIndex = Class(Index, {
      className: namespace + ".VectorIndex",
      vectorGetter: basis.fn.$null,
      vector_: null,
      value: undefined,
      init: function() {
        this.vector_ = [];
        Index.prototype.init.call(this);
      },
      add_: function(value) {
        if (value !== null) {
          this.vector_.splice(binarySearchPos(this.vector_, value), 0, value);
          this.value = this.vectorGetter(this.vector_);
        }
      },
      remove_: function(value) {
        if (value !== null) {
          this.vector_.splice(binarySearchPos(this.vector_, value), 1);
          this.value = this.vectorGetter(this.vector_);
        }
      },
      update_: function(newValue, oldValue) {
        if (oldValue !== null) this.vector_.splice(binarySearchPos(this.vector_, oldValue), 1);
        if (newValue !== null) this.vector_.splice(binarySearchPos(this.vector_, newValue), 0, newValue);
        this.set(this.vectorGetter(this.vector_));
      },
      normalize: function(value) {
        return typeof value == "string" || typeof value == "number" ? value : null;
      },
      destroy: function() {
        Index.prototype.destroy.call(this);
        this.vector_ = null;
      }
    });
    var Min = Class(VectorIndex, {
      className: namespace + ".Min",
      vectorGetter: function(vector) {
        return vector[0];
      }
    });
    var Max = Class(VectorIndex, {
      className: namespace + ".Max",
      vectorGetter: function(vector) {
        return vector[vector.length - 1];
      }
    });
    var Distinct = Class(Index, {
      className: namespace + ".Distinct",
      map_: null,
      init: function() {
        this.map_ = {};
        Index.prototype.init.call(this);
      },
      add_: function(value) {
        if (!this.map_.hasOwnProperty(value)) this.map_[value] = 0;
        if (++this.map_[value] == 1) this.value += 1;
      },
      remove_: function(value) {
        if (--this.map_[value] == 0) this.value -= 1;
      },
      update_: function(newValue, oldValue) {
        var delta = 0;
        if (!this.map_.hasOwnProperty(newValue)) this.map_[newValue] = 0;
        if (++this.map_[newValue] == 1) delta += 1;
        if (--this.map_[oldValue] == 0) delta -= 1;
        if (delta) this.set(this.value + delta);
      },
      normalize: String,
      destroy: function() {
        Index.prototype.destroy.call(this);
        this.map_ = null;
      }
    });
    var INDEXWRAPPER_HANDLER = {
      destroy: function() {
        Value.prototype.set.call(this, this.initValue);
        this.index = null;
      }
    };
    var IndexWrapper = Value.subclass({
      className: namespace + ".IndexWrapper",
      extendConstructor_: false,
      source: null,
      dataset: null,
      datasetRA_: null,
      indexConstructor: null,
      index: null,
      init: function(source, indexConstructor) {
        this.source = source;
        this.indexConstructor = indexConstructor;
        this.value = indexConstructorCache[indexConstructor.indexId].indexClass.prototype.value;
        Value.prototype.init.call(this);
        source.bindingBridge.attach(source, basis.fn.$undef, this, this.destroy);
        this.setDataset(source);
        this.source[indexConstructor.indexId] = this;
      },
      setDataset: function(source) {
        var oldDataset = this.dataset;
        var newDataset = resolveDataset(this, this.setDataset, source, "sourceRA_");
        if (newDataset !== oldDataset) {
          var index = this.index;
          if (index) {
            index.removeHandler(INDEXWRAPPER_HANDLER, this);
            index.wrapperCount -= 1;
            if (!index.wrapperCount && !index.explicit) index.destroy();
          }
          if (newDataset) {
            index = getDatasetIndex(newDataset, this.indexConstructor);
            index.wrapperCount += 1;
            index.link(this, Value.prototype.set);
            index.addHandler(INDEXWRAPPER_HANDLER, this);
          } else {
            index = null;
            Value.prototype.set.call(this, this.initValue);
          }
          this.dataset = newDataset;
          this.index = index;
        }
      },
      set: function() {
        basis.dev.warn(this.className + ": value can't be set as IndexWrapper is read only");
      },
      destroy: function() {
        this.source.bindingBridge.detach(this.source, basis.fn.$undef, this);
        this.setDataset();
        Value.prototype.destroy.call(this);
        delete this.source[this.indexConstructor.indexId];
        this.source = null;
        this.indexConstructor = null;
      }
    });
    var indexConstructorIdPrefix = "basisjsIndexConstructor" + basis.genUID();
    var indexConstructorCache = {};
    var resolveIndexCache = {};
    var DATASET_INDEX_HANDLER = {
      destroy: function(object) {
        removeDatasetIndex(this, object);
      }
    };
    function IndexConstructor(indexId) {
      this.indexId = indexId;
    }
    function getIndexConstructor(BaseClass, getter, events) {
      if (!Class.isClass(BaseClass) || !BaseClass.isSubclassOf(Index)) throw "Wrong class for index constructor";
      getter = basis.getter(getter);
      events = events || "update";
      if (typeof events != "string") throw "Events must be a event names space separated string";
      events = events.trim().split(" ").sort();
      var indexId = indexConstructorIdPrefix + [ BaseClass.basisClassId_, getter[basis.getter.ID], events ].join("_");
      var indexConstructor = indexConstructorCache[indexId];
      if (indexConstructor) return indexConstructor.owner;
      var events_ = {};
      for (var i = 0; i < events.length; i++) events_[events[i]] = true;
      indexConstructor = new IndexConstructor(indexId);
      indexConstructorCache[indexId] = {
        owner: indexConstructor,
        indexClass: BaseClass.subclass({
          indexId: indexId,
          updateEvents: events_,
          valueGetter: getter
        })
      };
      return indexConstructor;
    }
    var createIndexConstructor = function(IndexClass, defGetter) {
      return function(source, events, getter) {
        if (typeof source == "function" || typeof source == "string") {
          getter = events;
          events = source;
          source = null;
        }
        if (!getter) {
          getter = events;
          events = "";
        }
        var indexConstructor = getIndexConstructor(IndexClass, getter || defGetter, events);
        if (!source) return indexConstructor;
        if (source instanceof ReadOnlyDataset || source instanceof DatasetWrapper) {
          var index = getDatasetIndex(source, indexConstructor);
          index.explicit = true;
          return index;
        }
        if (source.bindingBridge) return source[indexConstructor.indexId] || new IndexWrapper(source, indexConstructor);
        basis.dev.warn(IndexClass.className + ": wrong source value for index (should be instance of basis.data.ReadOnlyDataset, basis.data.DatasetWrapper or bb-value)");
        return null;
      };
    };
    var count = createIndexConstructor(Count, basis.fn.$true);
    var sum = createIndexConstructor(Sum);
    var avg = createIndexConstructor(Avg);
    var min = createIndexConstructor(Min);
    var max = createIndexConstructor(Max);
    var distinct = createIndexConstructor(Distinct);
    function applyIndexDelta(index, inserted, deleted) {
      var indexCache = index.indexCache_;
      var objectId;
      index.lock();
      if (inserted) for (var i = 0, object; object = inserted[i++]; ) {
        var newValue = index.normalize(index.valueGetter(object));
        indexCache[object.basisObjectId] = newValue;
        index.add_(newValue);
      }
      if (deleted) for (var i = 0, object; object = deleted[i++]; ) {
        objectId = object.basisObjectId;
        index.remove_(indexCache[objectId]);
        delete indexCache[objectId];
      }
      index.unlock();
    }
    var ITEM_INDEX_HANDLER = {
      "*": function(event) {
        var oldValue;
        var newValue;
        var index;
        var eventType = event.type;
        var object = event.sender;
        var objectId = object.basisObjectId;
        var indexes = datasetIndexes[this.basisObjectId];
        for (var indexId in indexes) {
          index = indexes[indexId];
          if (index.updateEvents[eventType]) {
            oldValue = index.indexCache_[objectId];
            newValue = index.normalize(index.valueGetter(object));
            if (newValue !== oldValue) {
              index.update_(newValue, oldValue);
              index.indexCache_[objectId] = newValue;
            }
          }
        }
      }
    };
    var DATASET_WITH_INDEX_HANDLER = {
      itemsChanged: function(object, delta) {
        var array;
        if (array = delta.inserted) for (var i = array.length; i-- > 0; ) array[i].addHandler(ITEM_INDEX_HANDLER, this);
        if (array = delta.deleted) for (var i = array.length; i-- > 0; ) array[i].removeHandler(ITEM_INDEX_HANDLER, this);
        var indexes = datasetIndexes[this.basisObjectId];
        for (var indexId in indexes) applyIndexDelta(indexes[indexId], delta.inserted, delta.deleted);
      },
      destroy: function() {
        var indexes = datasetIndexes[this.basisObjectId];
        for (var indexId in indexes) {
          var index = indexes[indexId];
          removeDatasetIndex(this, index);
          index.destroy();
        }
      }
    };
    var datasetIndexes = {};
    function getDatasetIndex(dataset, indexConstructor) {
      if (indexConstructor instanceof IndexConstructor == false) throw "indexConstructor must be an instance of IndexConstructor";
      var datasetId = dataset.basisObjectId;
      var indexes = datasetIndexes[datasetId];
      if (!indexes) {
        indexes = datasetIndexes[datasetId] = {};
        dataset.addHandler(DATASET_WITH_INDEX_HANDLER);
        DATASET_WITH_INDEX_HANDLER.itemsChanged.call(dataset, dataset, {
          inserted: dataset.getItems()
        });
      }
      var indexId = indexConstructor.indexId;
      var index = indexes[indexId];
      if (!index) {
        indexConstructor = indexConstructorCache[indexId];
        if (!indexConstructor) throw "Wrong index constructor";
        index = new indexConstructor.indexClass;
        index.addHandler(DATASET_INDEX_HANDLER, dataset);
        indexes[indexId] = index;
        applyIndexDelta(index, dataset.getItems());
      }
      return index;
    }
    function removeDatasetIndex(dataset, index) {
      var indexes = datasetIndexes[dataset.basisObjectId];
      if (indexes && indexes[index.indexId]) {
        delete indexes[index.indexId];
        index.removeHandler(DATASET_INDEX_HANDLER, dataset);
        for (var key in indexes) return;
        dataset.removeHandler(DATASET_WITH_INDEX_HANDLER);
        DATASET_WITH_INDEX_HANDLER.itemsChanged.call(dataset, dataset, {
          deleted: dataset.getItems()
        });
        delete datasetIndexes[dataset.basisObjectId];
      }
    }
    var CalcIndexPreset = Class(null, {
      className: namespace + ".CalcIndexPreset",
      extendConstructor_: true,
      indexes: {},
      calc: basis.fn.$null
    });
    var calcIndexPresetSeed = 1;
    function getUniqueCalcIndexId() {
      return "calc-index-preset-" + basis.number.lead(calcIndexPresetSeed++, 8);
    }
    function percentOfRange(events, getter) {
      var minIndex = "min_" + getUniqueCalcIndexId();
      var maxIndex = "max_" + getUniqueCalcIndexId();
      var indexes = {};
      indexes[minIndex] = min(events, getter);
      indexes[maxIndex] = max(events, getter);
      getter = basis.getter(getter || events);
      var calc = function(data, index, object) {
        return (getter(object) - index[minIndex]) / (index[maxIndex] - index[minIndex]);
      };
      return calc.preset = new CalcIndexPreset({
        indexes: indexes,
        calc: calc
      });
    }
    function percentOfMax(events, getter) {
      var maxIndex = "max_" + getUniqueCalcIndexId();
      var indexes = {};
      indexes[maxIndex] = max(events, getter);
      getter = basis.getter(getter || events);
      var calc = function(data, index, object) {
        return getter(object) / index[maxIndex];
      };
      return calc.preset = new CalcIndexPreset({
        indexes: indexes,
        calc: calc
      });
    }
    function percentOfSum(getter, events) {
      var sumIndex = "sum_" + getUniqueCalcIndexId();
      var indexes = {};
      indexes[sumIndex] = sum(events, getter);
      getter = basis.getter(getter || events);
      var calc = function(data, index, object) {
        return getter(object) / index[sumIndex];
      };
      return calc.preset = new CalcIndexPreset({
        indexes: indexes,
        calc: calc
      });
    }
    var IndexMap = Class(MapFilter, {
      className: namespace + ".IndexMap",
      calcs: null,
      indexes: null,
      indexes_: null,
      indexesBind_: null,
      timer_: undefined,
      indexUpdated: null,
      indexValues: null,
      memberSourceMap: null,
      keyMap: null,
      map: function(item) {
        return this.keyMap.get(item, true);
      },
      addMemberRef: function(member, sourceObject) {
        this.memberSourceMap[member.basisObjectId] = sourceObject.basisObjectId;
        if (this.listen.member) member.addHandler(this.listen.member, this);
        this.sourceMap_[sourceObject.basisObjectId].updated = true;
        if (member.subscriberCount > 0) this.calcMember(member);
      },
      removeMemberRef: function(member, sourceObject) {
        delete this.memberSourceMap[member.basisObjectId];
        if (this.listen.member) member.removeHandler(this.listen.member, this);
      },
      emit_sourceChanged: function(oldSource) {
        MapFilter.prototype.emit_sourceChanged.call(this, oldSource);
        for (var indexName in this.indexes_) {
          var index = this.indexes_[indexName];
          if (oldSource) {
            this.removeIndex(indexName);
            removeDatasetIndex(oldSource, this.indexes[indexName]);
          }
          if (this.source) this.addIndex(indexName, getDatasetIndex(this.source, index));
        }
      },
      listen: {
        index: {
          change: function(sender) {
            var indexMap = this.indexMap;
            indexMap.indexValues[this.key] = sender.value;
            indexMap.indexUpdated = true;
            indexMap.recalcRequest();
          }
        },
        member: {
          subscribersChanged: function(object, delta) {
            if (object.subscriberCount > 0) this.calcMember(object);
          }
        }
      },
      ruleEvents: createRuleEvents(function(sender, delta) {
        MapFilter.prototype.ruleEvents.update.call(this, sender, delta);
        this.sourceMap_[sender.basisObjectId].updated = true;
        this.recalcRequest();
      }, "update"),
      init: function() {
        this.recalc = this.recalc.bind(this);
        this.indexUpdated = false;
        this.indexesBind_ = {};
        this.memberSourceMap = {};
        var indexes = this.indexes;
        this.indexes = {};
        this.indexes_ = {};
        this.indexValues = {};
        var calcs = this.calcs;
        this.calcs = {};
        if (!this.keyMap || this.keyMap instanceof KeyObjectMap == false) this.keyMap = new KeyObjectMap(basis.object.complete({
          create: function(key, config) {
            return new this.itemClass(config);
          }
        }, this.keyMap));
        MapFilter.prototype.init.call(this);
        basis.object.iterate(indexes, this.addIndex, this);
        basis.object.iterate(calcs, this.addCalc, this);
      },
      addIndex: function(key, index) {
        if (!this.indexes[key]) {
          if (index instanceof IndexConstructor) {
            if (!this.indexes_[key]) {
              this.indexes_[key] = index;
              index = this.source ? getDatasetIndex(this.source, index) : null;
            } else {
              basis.dev.warn("Index `" + key + "` already exists");
              return;
            }
          }
          if (index instanceof Index) {
            this.indexValues[key] = index.value;
            this.indexes[key] = index;
            this.indexesBind_[key] = {
              key: key,
              indexMap: this
            };
            var listenHandler = this.listen.index;
            if (listenHandler) {
              index.addHandler(listenHandler, this.indexesBind_[key]);
              if (listenHandler.change) listenHandler.change.call(this.indexesBind_[key], index, index.value);
            }
          } else {
            basis.dev.warn("Index should be instance of `basis.data.index.Index`");
          }
        } else {
          basis.dev.warn("Index `" + key + "` already exists");
        }
      },
      removeIndex: function(key) {
        if (this.indexes_[key] || this.indexes[key]) {
          if (this.indexes[key] && this.listen.index) this.indexes[key].removeHandler(this.listen.index, this.indexesBind_[key]);
          delete this.indexValues[key];
          delete this.indexesBind_[key];
          delete this.indexes[key];
          delete this.indexes_[key];
        }
      },
      addCalc: function(name, calcCfg) {
        if (calcCfg instanceof CalcIndexPreset) {
          this.calcs[name] = calcCfg.calc;
          for (var indexName in calcCfg.indexes) this.addIndex(indexName, calcCfg.indexes[indexName]);
        } else this.calcs[name] = calcCfg;
        this.recalcRequest();
      },
      removeCalc: function(name) {
        var calcCfg = this.calcs[name];
        if (calcCfg && calcCfg.preset instanceof CalcIndexPreset) {
          var indexes = calcCfg.preset.indexes;
          for (var indexName in indexes) this.removeIndex(indexName, indexes[indexName]);
        }
        delete this.calcs[name];
      },
      lock: function() {
        for (var indexId in this.indexes) this.indexes[indexId].lock();
      },
      unlock: function() {
        for (var indexId in this.indexes) this.indexes[indexId].unlock();
      },
      recalcRequest: function() {
        if (!this.timer_) this.timer_ = basis.setImmediate(this.recalc);
      },
      recalc: function() {
        for (var idx in this.items_) this.calcMember(this.items_[idx]);
        this.indexUpdated = false;
        this.timer_ = basis.clearImmediate(this.timer_);
      },
      calcMember: function(member) {
        var sourceObject = this.sourceMap_[this.memberSourceMap[member.basisObjectId]];
        if (member.subscriberCount && (sourceObject.updated || this.indexUpdated)) {
          sourceObject.updated = false;
          var data = {};
          var newValue;
          var oldValue;
          var update;
          for (var calcName in this.calcs) {
            newValue = this.calcs[calcName](sourceObject.sourceObject.data, this.indexValues, sourceObject.sourceObject);
            oldValue = member.data[calcName];
            if (member.data[calcName] !== newValue && (typeof newValue != "number" || typeof oldValue != "number" || !isNaN(newValue) || !isNaN(oldValue))) {
              data[calcName] = newValue;
              update = true;
            }
          }
          if (update) member.update(data);
        }
      },
      getMember: function(sourceObject) {
        return this.keyMap.get(sourceObject, true);
      },
      destroy: function() {
        for (var indexName in this.indexes) this.removeIndex(indexName);
        MapFilter.prototype.destroy.call(this);
        this.keyMap.destroy();
        this.keyMap = null;
        this.timer_ = basis.clearImmediate(this.timer_);
        this.calcs = null;
        this.indexes = null;
        this.indexes_ = null;
        this.indexValues = null;
        this.memberSourceMap = null;
        this.indexesBind_ = null;
      }
    });
    module.exports = {
      IndexConstructor: IndexConstructor,
      createIndexConstructor: createIndexConstructor,
      getDatasetIndex: getDatasetIndex,
      removeDatasetIndex: removeDatasetIndex,
      Index: Index,
      Count: Count,
      Sum: Sum,
      Avg: Avg,
      VectorIndex: VectorIndex,
      Min: Min,
      Max: Max,
      Distinct: Distinct,
      count: count,
      sum: sum,
      avg: avg,
      max: max,
      min: min,
      distinct: distinct,
      CalcIndexPreset: CalcIndexPreset,
      percentOfRange: percentOfRange,
      percentOfMax: percentOfMax,
      percentOfSum: percentOfSum,
      IndexMap: IndexMap
    };
  },
  "h.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var host = typeof performance !== "undefined" ? performance : Date;
    var nowMethod = "webkitNow" in host ? "webkitNow" : "now";
    module.exports = {
      time: function(time) {
        return !arguments.length ? host[nowMethod]() : parseInt(host[nowMethod]() - time);
      },
      test: function(times, fn) {
        var t = this.time();
        for (var i = 0; i < times; i++) fn(i);
        return this.time(t);
      }
    };
  },
  "i.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var STATE = basis.require("./1.js").STATE;
    var Value = basis.require("./1.js").Value;
    var DataObject = basis.require("./1.js").Object;
    var Dataset = basis.require("./1.js").Dataset;
    var Expression = basis.require("./3.js").Expression;
    var Split = basis.require("./f.js").Split;
    var Extract = basis.require("./f.js").Extract;
    var DomWrapperNode = basis.require("./d.js").Node;
    var getTime = basis.require("./h.js").time;
    var utils = basis.require("./s.js");
    var envFactory = basis.require("./j.js");
    var sourceUtils = basis.require("./l.js");
    var ERROR_TEST_FAULT = "ERROR_TEST_FAULT";
    var ERROR_EMPTY = "ERROR_EMPTY";
    var ERROR_TEST_CRASH = "ERROR_TEST_CRASH";
    var ERROR_TIMEOUT = "ERROR_TIMEOUT";
    var NOP = function() {};
    function createTestFactory(data) {
      if (data.testcase) basis.dev.warn("`testcase` setting is deprecated, use `test` instead");
      var test = data.test || data.testcase;
      data = basis.object.slice(data);
      basis.object.splice(data, [ "test", "testcase" ]);
      if (test) {
        if (basis.resource.isResource(data)) test = test.fetch();
      } else {
        test = function() {};
      }
      if (!data.name) data.name = "Untitled test";
      var Class;
      var config = {
        data: data
      };
      config.beforeEach = basis.array(this.beforeEach);
      if (typeof data.beforeEach == "function") config.beforeEach.push(sourceUtils.regFunction(data.beforeEach));
      config.afterEach = basis.array(this.afterEach);
      if (typeof data.afterEach == "function") config.afterEach.unshift(sourceUtils.regFunction(data.afterEach));
      if (typeof test == "function") {
        config.data.type = "case";
        config.data.async = test.length > 0;
        config.data.test = sourceUtils.regFunction(test);
        Class = TestCase;
      } else {
        config.data.type = "suite";
        config.childNodes = !Array.isArray(test) ? [] : test;
        Class = TestSuite;
      }
      return new Class(config);
    }
    var AbstractTest = DomWrapperNode.subclass({
      className: "AbstractTest",
      name: "",
      envRunner: null,
      hasOwnEnvironment: function() {
        return Boolean(this.data.init || this.data.html || !this.parentNode);
      },
      getHtml: function() {
        var cursor = this;
        while (!cursor.data.html && cursor.parentNode) cursor = cursor.parentNode;
        return cursor.data.html;
      },
      getEnvRunner: function(autocreate) {
        if (this.envRunner) return this.envRunner;
        var envRunner;
        if (!this.data.init) envRunner = this.parentNode && this.parentNode.getEnvRunner(autocreate);
        if ((this.data.init || this.data.html || !envRunner) && autocreate) {
          envRunner = envFactory.create(this.data.init, this.getHtml());
          envRunner.addHandler({
            destroy: function() {
              this.envRunner = null;
              this.reset();
            }
          }, this);
          this.envRunner = envRunner;
        }
        return envRunner;
      },
      reset: function() {
        if (this.envRunner) {
          this.envRunner.destroy();
          this.envRunner = null;
        }
      },
      destroy: function() {
        DomWrapperNode.prototype.destroy.call(this);
        if (this.envRunner) {
          this.envRunner.destroy();
          this.envRunner = null;
        }
      }
    });
    var TestCase = AbstractTest.subclass({
      className: "TestCase",
      name: "",
      testSource: null,
      testWrappedSources: null,
      beforeEach: null,
      afterEach: null,
      childClass: null,
      emit_update: function(delta) {
        AbstractTest.prototype.init.call(this, delta);
        if ("test" in delta) {
          this.testSource = null;
          this.testWrappedSources = null;
          this.beforeAfterInfo = null;
        }
      },
      getSourceCode: function() {
        if (this.testSource != null) return this.testSource;
        var before = this.beforeEach.map(function(fn) {
          return sourceUtils.getFunctionInfo(fn).body;
        });
        var after = this.afterEach.map(function(fn) {
          return sourceUtils.getFunctionInfo(fn).body;
        });
        var beforeLines = 0;
        var beforeCount = 0;
        var afterLines = 0;
        var afterCount = 0;
        var fnInfo = sourceUtils.getFunctionInfo(this.data.test);
        var source = fnInfo.body;
        if (before.length) {
          beforeCount = before.length;
          before = before.join("\n") + "\n// ----- before each end\n\n";
          beforeLines = before.match(/\n/g).length;
          source = before + source;
        }
        if (after.length) {
          afterCount = after.length;
          after = "\n\n// ----- after each start\n" + after.join("\n");
          afterLines = after.match(/\n/g).length;
          source += after;
        }
        this.testSource = source;
        this.beforeAfterInfo = {
          beforeLines: beforeLines,
          beforeCount: beforeCount,
          afterLines: afterLines,
          afterCount: afterCount
        };
        return source;
      },
      getWrappedSourceCode: function(breakpointAt) {
        var source = this.getSourceCode();
        if (typeof breakpointAt != "number") breakpointAt = "none";
        if (this.testWrappedSources === null) this.testWrappedSources = {};
        if (!this.testWrappedSources[breakpointAt]) this.testWrappedSources[breakpointAt] = "function(" + sourceUtils.getFunctionInfo(this.data.test).args.concat("assert", "__isFor", "__enterLine", "__exception", "__wrapFunctionExpression", "__actual", "__expected").join(", ") + "){\n" + sourceUtils.getWrappedSource(source, breakpointAt) + "\n}";
        return this.testWrappedSources[breakpointAt];
      },
      getBeforeAfterInfo: function() {
        if (!this.beforeAfterInfo) this.getSourceCode();
        return this.beforeAfterInfo;
      },
      reset: function() {
        AbstractTest.prototype.reset.call(this);
        this.setState(STATE.UNDEFINED);
      },
      run: function() {
        var warnMessages = [];
        var errorMessages = [];
        var error;
        var time = NaN;
        var startTime;
        var timeoutTimer;
        var async = this.data.async ? 1 : 0;
        var isNode = null;
        var sourceCode = this.getSourceCode();
        var beforeAfterInfo = this.getBeforeAfterInfo();
        var implicitCompare;
        var actual_;
        var expected_;
        var report = {
          test: null,
          beforeLines: beforeAfterInfo.beforeLines,
          beforeCount: beforeAfterInfo.beforeCount,
          testSource: sourceCode,
          afterLines: beforeAfterInfo.afterLines,
          afterCount: beforeAfterInfo.afterCount,
          time: time,
          lastLine: 0,
          pending: false,
          successCount: 0,
          testCount: 0,
          error: null,
          exception: null,
          errorLines: {},
          warns: null
        };
        var env = {
          async: function(fn) {
            async++;
            basis.nextTick(function() {
              if (async > 0) {
                try {
                  fn.call(this);
                } catch (e) {
                  __exception(e);
                } finally {
                  if (async > 0) {
                    if (!--async) testDone();
                  }
                }
              }
            }.bind(this));
          },
          is: function(expected, actual, deep) {
            var error;
            if (arguments.length == 1) {
              error = utils.isTruthy(expected);
              if (implicitCompare) {
                actual = actual_;
                expected = expected_;
              } else {
                actual = expected;
                expected = true;
              }
            } else {
              error = utils.compareValues(expected, actual, deep);
            }
            if (error) {
              if (isNode) {
                var line = isNode.line;
                var errors = report.errorLines[line];
                if (!errors) errors = report.errorLines[line] = [];
                errors.push({
                  num: report.testCount,
                  node: isNode,
                  error: error,
                  expected: utils.makeStaticCopy(expected),
                  expectedStr: utils.value2string(expected, false, deep),
                  actual: utils.makeStaticCopy(actual),
                  actualStr: utils.value2string(actual, false, deep)
                });
              }
            }
            implicitCompare = false;
            actual_ = undefined;
            expected_ = undefined;
            report.successCount += !error;
            report.testCount++;
          },
          report: report
        };
        var __actual = function(operator, value) {
          implicitCompare = operator;
          actual_ = value;
          return value;
        };
        var __expected = function(value) {
          expected_ = value;
          return value;
        };
        var __isFor = function(start, end, line) {
          report.lastLine = line;
          isNode = {
            range: [ start, end ],
            line: line
          };
        };
        var __enterLine = function(line) {
          report.lastLine = line;
        };
        var __wrapFunctionExpression = function(fn, orig) {
          var wrappedFn = function() {
            try {
              return fn.apply(this, arguments);
            } catch (e) {
              __exception(e);
              throw e;
            }
          };
          wrappedFn.originalFn_ = orig;
          return wrappedFn;
        };
        var __exception = function(e) {
          if (report.exception) return;
          report.exception = e;
          report.testCount = 0;
          report.successCount = 0;
          testDone(ERROR_TEST_CRASH);
        };
        var asyncDone = async ? basis.fn.runOnce(function() {
          if (async > 0) async--;
          if (!async) testDone();
        }) : NOP;
        var testDone = function(error) {
          time = getTime(startTime);
          timeoutTimer = clearTimeout(timeoutTimer);
          async = 0;
          if (!error && report.testCount != report.successCount) error = ERROR_TEST_FAULT;
          basis.object.extend(report, {
            test: this,
            time: time,
            error: error,
            pending: !error && !report.testCount,
            warns: warnMessages.length ? warnMessages : null
          });
          this.setState(error || errorMessages.length ? STATE.ERROR : STATE.READY, new DataObject({
            data: report
          }));
        }.bind(this);
        this.setState(STATE.PROCESSING);
        if (this.data.pending) return testDone();
        this.getEnvRunner(true).run(this.getWrappedSourceCode(), this, function(testFn) {
          startTime = getTime();
          var assert = env.is.bind(env);
          assert.exception = assert["throws"] = function(fn) {
            try {
              report.exception = true;
              fn();
              assert(false);
            } catch (e) {
              assert(true);
            } finally {
              report.exception = false;
            }
          };
          assert.deep = function(expected, actual) {
            assert(expected, actual, true);
          };
          var args = new Array(sourceUtils.getFunctionInfo(this.data.test).args.length);
          if (args.length) args[0] = asyncDone;
          args.push(assert, __isFor, __enterLine, __exception, __wrapFunctionExpression, __actual, __expected);
          try {
            testFn.apply(env, args);
          } catch (e) {
            return __exception(e);
          }
          if (!async) testDone(); else timeoutTimer = setTimeout(function() {
            testDone(ERROR_TIMEOUT);
          }, this.data.timeout || 250);
        });
      }
    });
    var TestSuite = AbstractTest.subclass({
      className: "TestSuite",
      childFactory: createTestFactory,
      childClass: AbstractTest,
      init: function() {
        AbstractTest.prototype.init.call(this);
        this.nestedTests_ = new Dataset({
          items: this.childNodes.reduce(function(res, item) {
            return res.concat(item instanceof TestSuite ? item.nestedTests_.getItems() : item);
          }, [])
        });
        this.testByState_ = new Split({
          source: this.nestedTests_,
          ruleEvents: "stateChanged",
          rule: function(test) {
            return test.state == STATE.READY && test.state.data.data.pending ? "pending" : String(test.state);
          }
        });
        this.state_ = new Expression(Value.from(this.nestedTests_, "itemsChanged", "itemCount"), Value.from(this.testByState_.getSubset("processing", true), "itemsChanged", "itemCount"), Value.from(this.testByState_.getSubset("error", true), "itemsChanged", "itemCount"), Value.from(this.testByState_.getSubset("ready", true), "itemsChanged", "itemCount"), Value.from(this.testByState_.getSubset("pending", true), "itemsChanged", "itemCount"), function(count, processing, error, ready, pending) {
          if (!count) return [ STATE.READY, new DataObject({
            data: {
              pending: true,
              testCount: count,
              successCount: ready
            }
          }) ];
          if (processing + error + ready + pending == 0) return [ STATE.UNDEFINED ];
          if (processing || error + ready + pending < count) return [ STATE.PROCESSING, (error + ready) / count ];
          return [ error ? STATE.ERROR : STATE.READY, new DataObject({
            data: {
              pending: pending == count,
              error: error ? ERROR_TEST_FAULT : null,
              testCount: count,
              successCount: ready + pending
            }
          }) ];
        });
        this.state_.link(this, function(state) {
          this.setState.apply(this, state);
        });
      },
      reset: function() {
        AbstractTest.prototype.reset.call(this);
        this.childNodes.forEach(function(test) {
          test.reset();
        });
      },
      destroy: function() {
        this.testByState_.destroy();
        this.testByState_ = null;
        this.nestedTests_.destroy();
        this.nestedTests_ = null;
        this.state_.destroy();
        this.state_ = null;
        AbstractTest.prototype.destroy.call(this);
      }
    });
    module.exports = {
      AbstractTest: AbstractTest,
      TestCase: TestCase,
      TestSuite: TestSuite,
      create: createTestFactory
    };
  },
  "s.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var arrayFrom = basis.array.from;
    var OBJECT_TOSTRING = Object.prototype.toString;
    var ERROR_WRONG_ANSWER = "ERROR_WRONG_ANSWER";
    var ERROR_TYPE_MISSMATCH = "ERROR_TYPE_MISSMATCH";
    var getFunctionInfo = basis.require("./t.js");
    function sliceOwnOnly(obj) {
      var result = {};
      for (var key in obj) if (obj.hasOwnProperty(key)) result[key] = obj[key];
      return result;
    }
    function makeStaticCopy(value) {
      if (value && typeof value == "object") return Array.isArray(value) ? arrayFrom(value) : sliceOwnOnly(value);
      return value;
    }
    function value2string(value, linear, deep) {
      switch (typeof value) {
        case "boolean":
        case "number":
        case "undefined":
          return String(value);
        case "string":
          return "'" + value.replace(/\'/g, "\\'") + "'";
        case "function":
          if (value.originalFn_) value = value.originalFn_;
          value = String(value);
          return !linear ? value : value.replace(/\{([\r\n]|.)*\}/, "{..}");
        case "object":
          if (value === null) return "null";
          if (Array.isArray(value)) return "[" + value.map(function(val) {
            return value2string(val, !deep, deep);
          }).join(", ") + "]";
          if (OBJECT_TOSTRING.call(value) === "[object Date]" || OBJECT_TOSTRING.call(value) === "[object RegExp]") return String(value);
          if (value && value.constructor === Number) debugger;
          if (!linear) {
            var res = [];
            var keys = Object.keys(value).sort();
            for (var i = 0, key; i < keys.length; i++) {
              key = keys[i];
              if (value.hasOwnProperty(key)) res.push(key + ": " + value2string(value[key], !deep, deep));
            }
            if (!res.length && value.valueOf() !== value) {
              var m = value.constructor.toString().match(/function (Number|String|Boolean)/);
              if (m) return "new Object(" + value2string(value.valueOf()) + ")";
            }
            return "{ " + (res.length ? res.join(", ") + " " : "") + "}";
          } else return "{object}";
        default:
          return "unknown type `" + typeof value + "`";
      }
    }
    function isTruthy(value) {
      if (!value) return ERROR_WRONG_ANSWER;
    }
    function compareValues(actual, expected, deep) {
      var error;
      if (actual === expected) return;
      if (typeof actual != typeof expected) return ERROR_TYPE_MISSMATCH;
      if (actual != null && expected != null && actual.constructor !== expected.constructor) return ERROR_TYPE_MISSMATCH;
      if (actual == expected) return;
      switch (typeof actual) {
        case "string":
        case "boolean":
        case "undefined":
          return ERROR_WRONG_ANSWER;
        case "number":
          if (actual !== actual && expected !== expected) return;
          return ERROR_WRONG_ANSWER;
        case "function":
          if (expected.originalFn_) expected = expected.originalFn_;
          if (actual.originalFn_) actual = actual.originalFn_;
          if (String(expected) == String(actual)) return;
          return ERROR_WRONG_ANSWER;
        default:
          if (!expected && actual || expected && !actual) return ERROR_WRONG_ANSWER;
          if (String(expected) != String(actual)) return ERROR_WRONG_ANSWER;
          if (actual && "length" in actual) {
            if (actual.length != expected.length) return ERROR_WRONG_ANSWER;
            for (var i = 0; i < actual.length; i++) {
              if (actual[i] !== expected[i]) {
                if (deep && !actual.__antirecursion__) {
                  actual.__antirecursion__ = true;
                  error = compareValues(actual[i], expected[i], deep);
                  delete actual.__antirecursion__;
                  if (error) return error;
                  continue;
                }
                return ERROR_WRONG_ANSWER;
              }
            }
          } else {
            for (var i in actual) if (i in expected == false || actual[i] !== expected[i]) {
              if (deep && i in expected && !actual.__antirecursion__) {
                actual.__antirecursion__ = true;
                error = compareValues(actual[i], expected[i], deep);
                delete actual.__antirecursion__;
                if (error) return error;
                continue;
              }
              return ERROR_WRONG_ANSWER;
            }
            for (var i in expected) if (i in actual == false) return ERROR_WRONG_ANSWER;
          }
      }
    }
    module.exports = {
      sliceOwnOnly: sliceOwnOnly,
      makeStaticCopy: makeStaticCopy,
      value2string: value2string,
      compareValues: compareValues,
      isTruthy: isTruthy,
      getFnInfo: function(fn) {
        return getFunctionInfo(fn.toString());
      }
    };
  },
  "t.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var getFunctionInfo = function() {
      function tokenizeFunctionSource(source) {
        var chars = source.split("");
        var res = [];
        var last = 0;
        var j;
        function store(type, pos) {
          if (arguments.length != 2) pos = i;
          if (last != pos) {
            res.push([ type || "content", source.substring(last, pos) ]);
            last = pos;
          }
        }
        for (var i = 0; i < chars.length; i++) mainLoop : {
          var ch = chars[i];
          switch (ch) {
            case "/":
              store();
              j = i;
              if (chars[j + 1] === "/") {
                j = j + 2;
                while (j < chars.length && chars[j] !== "\n" && chars[j] !== "\r") j++;
                store("comment", j);
                i = last - 1;
                break;
              }
              if (chars[j + 1] == "*") {
                j = j + 2;
                while (j < chars.length && !(chars[j] === "*" && chars[j + 1] === "/")) j++;
                store("comment", j + 2);
                i = last - 1;
                break;
              }
              while (j < chars.length) {
                j++;
                if (chars[j] == "\n") break mainLoop;
                if (chars[j] == "\\") {
                  j++;
                } else {
                  if (chars[j] == ch) break;
                }
              }
              store("regexp", j + 1);
              i = last - 1;
              break;
            case '"':
            case "'":
              store();
              j = i;
              while (j < chars.length) {
                j++;
                if (chars[j] == "\\") {
                  j++;
                } else {
                  if (chars[j] == ch) break;
                }
              }
              store("string", j + 1);
              i = last - 1;
              break;
            case "(":
            case "{":
              store();
              last = i + 1;
              res.push([ "open", ch ]);
              break;
            case ")":
            case "}":
              store();
              last = i + 1;
              res.push([ "close", ch ]);
              break;
            default:
              if (/\s/.test(ch)) {
                store();
                j = i + 1;
                while (j < chars.length && /\s/.test(chars[j])) j++;
                store("space", j);
                i = last - 1;
              }
          }
        }
        store();
        return res;
      }
      return function(source) {
        var tokens = tokenizeFunctionSource(source);
        var name = "anonymous";
        var argsContext = false;
        var wasContent = true;
        var args = [];
        var token;
        while (token = tokens.shift()) {
          if (token[1] == "{") break;
          if (token[0] == "content") {
            wasContent = true;
            if (argsContext) args.push(token[1]); else {
              if (token[1] != "function") name = token[1];
            }
          } else {
            if (!argsContext) argsContext = wasContent && token[1] == "(";
          }
        }
        while (token = tokens.pop()) if (token[1] == "}") break;
        for (var i = 0; i < tokens.length; i++) tokens[i] = tokens[i][1];
        args = args.join("").trim().replace(/\s*,\s*/g, ", ");
        args = args ? args.split(/\s*,\s*/) : [];
        var body = tokens.join("").replace(/([\r\n]|\s)*\"use strict\";/, "").replace(/\r/g, "").replace(/^(\s*\n)+|(\n\s*)*$/g, "");
        var minOffset = body.split(/\n+/).map(function(line) {
          return line.match(/^(\s*)/)[0];
        }).sort()[0];
        return {
          source: source,
          name: name,
          fullname: name + "(" + args + ")",
          args: args,
          body: body.replace(new RegExp("(^|\\n)" + minOffset, "g"), "$1") || "// no source code"
        };
      };
    }();
    if (typeof module != "undefined") module.exports = getFunctionInfo;
  },
  "1.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var namespace = this.path;
    var Class = basis.Class;
    var sliceArray = Array.prototype.slice;
    var values = basis.object.values;
    var $self = basis.fn.$self;
    var basisEvent = basis.require("./2.js");
    var Emitter = basisEvent.Emitter;
    var createEvent = basisEvent.create;
    var createEventHandler = basisEvent.createHandler;
    var events = basisEvent.events;
    var NULL_OBJECT = {};
    var EMPTY_ARRAY = [];
    var FACTORY = {};
    var STATE_EXISTS = {};
    var STATE = {
      priority: [],
      values: {},
      add: function(state, order) {
        var name = state;
        var value = state.toLowerCase();
        STATE[name] = value;
        STATE_EXISTS[value] = name;
        this.values[value] = name;
        if (order) order = this.priority.indexOf(order); else order = -1;
        if (order == -1) this.priority.push(value); else this.priority.splice(order, 0, value);
      },
      getList: function() {
        return values(STATE_EXISTS);
      },
      factory: function(events, property) {
        return Value.factory(events, basis.getter(property).as(STATE.from));
      },
      from: function(source) {
        return Value.from(source, "stateChanged", "state") || STATE.UNDEFINED;
      }
    };
    STATE.add("READY");
    STATE.add("DEPRECATED");
    STATE.add("UNDEFINED");
    STATE.add("ERROR");
    STATE.add("PROCESSING");
    var subscriptionConfig = {};
    var subscriptionSeed = 1;
    var SUBSCRIPTION = {
      NONE: 0,
      ALL: 0,
      link: function(type, from, to) {
        var subscriberId = type + from.basisObjectId;
        var subscribers = to.subscribers_;
        if (!subscribers) subscribers = to.subscribers_ = {};
        if (!subscribers[subscriberId]) {
          subscribers[subscriberId] = from;
          var count = to.subscriberCount += 1;
          if (count == 1) to.emit_subscribersChanged(+1);
        } else {
          basis.dev.warn("Attempt to add duplicate subscription");
        }
      },
      unlink: function(type, from, to) {
        var subscriberId = type + from.basisObjectId;
        var subscribers = to.subscribers_;
        if (subscribers && subscribers[subscriberId]) {
          delete subscribers[subscriberId];
          var count = to.subscriberCount -= 1;
          if (count == 0) {
            to.emit_subscribersChanged(-1);
            to.subscribers_ = null;
          }
        } else {
          basis.dev.warn("Trying remove non-exists subscription");
        }
      },
      add: function(name, handler, action) {
        subscriptionConfig[subscriptionSeed] = {
          handler: handler,
          action: action
        };
        SUBSCRIPTION[name] = subscriptionSeed;
        SUBSCRIPTION.ALL |= subscriptionSeed;
        subscriptionSeed <<= 1;
      },
      addProperty: function(propertyName, eventName) {
        var handler = {};
        handler[eventName || propertyName + "Changed"] = function(object, oldValue) {
          if (oldValue instanceof AbstractData) SUBSCRIPTION.unlink(propertyName, object, oldValue);
          if (object[propertyName] instanceof AbstractData) SUBSCRIPTION.link(propertyName, object, object[propertyName]);
        };
        this.add(propertyName.toUpperCase(), handler, function(fn, object) {
          if (object[propertyName]) fn(propertyName, object, object[propertyName]);
        });
      }
    };
    var maskConfig = {};
    function mixFunctions(fnA, fnB) {
      return function() {
        fnA.apply(this, arguments);
        fnB.apply(this, arguments);
      };
    }
    function getMaskConfig(mask) {
      var config = maskConfig[mask];
      if (!config) {
        var actions = [];
        var handler = {};
        var idx = 1;
        config = maskConfig[mask] = {
          actions: actions,
          handler: handler
        };
        while (mask) {
          if (mask & 1) {
            var cfg = subscriptionConfig[idx];
            actions.push(cfg.action);
            for (var key in cfg.handler) handler[key] = handler[key] ? mixFunctions(handler[key], cfg.handler[key]) : cfg.handler[key];
          }
          idx <<= 1;
          mask >>= 1;
        }
      }
      return config;
    }
    function addSub(object, mask) {
      var config = getMaskConfig(mask);
      for (var i = 0, action; action = config.actions[i]; i++) action(SUBSCRIPTION.link, object);
      object.addHandler(config.handler);
    }
    function remSub(object, mask) {
      var config = getMaskConfig(mask);
      for (var i = 0, action; action = config.actions[i++]; ) action(SUBSCRIPTION.unlink, object);
      object.removeHandler(config.handler);
    }
    SUBSCRIPTION.addProperty("delegate");
    SUBSCRIPTION.addProperty("target");
    SUBSCRIPTION.addProperty("dataset");
    SUBSCRIPTION.addProperty("value", "change");
    var AbstractData = Class(Emitter, {
      className: namespace + ".AbstractData",
      state: STATE.UNDEFINED,
      stateRA_: null,
      emit_stateChanged: createEvent("stateChanged", "oldState"),
      active: false,
      activeRA_: null,
      emit_activeChanged: createEvent("activeChanged"),
      subscribeTo: SUBSCRIPTION.NONE,
      subscriberCount: 0,
      subscribers_: null,
      emit_subscribersChanged: createEvent("subscribersChanged", "delta"),
      syncEvents: Class.oneFunctionProperty(function() {
        if (this.isSyncRequired()) this.syncAction();
      }, {
        stateChanged: true,
        subscribersChanged: true
      }),
      syncAction: null,
      init: function() {
        Emitter.prototype.init.call(this);
        if (this.active) {
          this.active = !!resolveValue(this, this.setActive, this.active, "activeRA_");
          if (this.active) this.addHandler(getMaskConfig(this.subscribeTo).handler);
        }
        if (typeof this.state != "string") this.state = String(resolveValue(this, this.setState, this.state, "stateRA_"));
        var syncAction = this.syncAction;
        if (syncAction) {
          this.syncAction = null;
          this.setSyncAction(syncAction);
        }
      },
      setState: function(state, data) {
        state = resolveValue(this, this.setState, state, "stateRA_");
        var stateCode = String(state);
        if (!STATE_EXISTS[stateCode]) throw new Error("Wrong state value");
        if (this.stateRA_ && data === undefined) data = state.data;
        if (this.state != stateCode || this.state.data != data) {
          var oldState = this.state;
          this.state = Object(stateCode);
          this.state.data = data;
          this.emit_stateChanged(oldState);
          return true;
        }
        return false;
      },
      deprecate: function() {
        if (this.state != STATE.PROCESSING) this.setState(STATE.DEPRECATED);
      },
      setActive: function(isActive) {
        isActive = !!resolveValue(this, this.setActive, isActive, "activeRA_");
        if (this.active != isActive) {
          this.active = isActive;
          this.emit_activeChanged();
          if (isActive) addSub(this, this.subscribeTo); else remSub(this, this.subscribeTo);
          return true;
        }
        return false;
      },
      setSubscription: function(subscriptionType) {
        var curSubscriptionType = this.subscribeTo;
        var newSubscriptionType = subscriptionType & SUBSCRIPTION.ALL;
        var delta = curSubscriptionType ^ newSubscriptionType;
        if (delta) {
          this.subscribeTo = newSubscriptionType;
          if (this.active) {
            var curConfig = getMaskConfig(curSubscriptionType);
            var newConfig = getMaskConfig(newSubscriptionType);
            this.removeHandler(curConfig.handler);
            this.addHandler(newConfig.handler);
            var idx = 1;
            while (delta) {
              if (delta & 1) {
                var cfg = subscriptionConfig[idx];
                if (curSubscriptionType & idx) cfg.action(SUBSCRIPTION.unlink, this); else cfg.action(SUBSCRIPTION.link, this);
              }
              idx <<= 1;
              delta >>= 1;
            }
          }
          return true;
        }
        return false;
      },
      isSyncRequired: function() {
        return this.subscriberCount > 0 && (this.state == STATE.UNDEFINED || this.state == STATE.DEPRECATED);
      },
      setSyncAction: function(syncAction) {
        var oldAction = this.syncAction;
        if (typeof syncAction != "function") syncAction = null;
        this.syncAction = syncAction;
        if (syncAction) {
          if (!oldAction) this.addHandler(this.syncEvents);
          if (this.isSyncRequired()) this.syncAction();
        } else {
          if (oldAction) this.removeHandler(this.syncEvents);
        }
      },
      destroy: function() {
        Emitter.prototype.destroy.call(this);
        if (this.active) {
          var config = getMaskConfig(this.subscribeTo);
          for (var i = 0, action; action = config.actions[i]; i++) action(SUBSCRIPTION.unlink, this);
        }
        if (this.activeRA_) resolveValue(this, false, false, "activeRA_");
        if (this.stateRA_) resolveValue(this, false, false, "stateRA_");
        this.state = STATE.UNDEFINED;
      }
    });
    var GETTER_ID = basis.getter.ID;
    var VALUE_EMMITER_HANDLER = {
      destroy: function(object) {
        this.value.unlink(object, this.fn);
      }
    };
    var VALUE_EMMITER_DESTROY_HANDLER = {
      destroy: function(object) {
        this.set(null);
      }
    };
    var computeFunctions = {};
    var valueSetters = {};
    var valueSyncToken = function(value) {
      this.set(this.fn(value));
    };
    var Value = Class(AbstractData, {
      className: namespace + ".Value",
      subscribeTo: SUBSCRIPTION.VALUE,
      emit_change: createEvent("change", "oldValue") && function(oldValue) {
        events.change.call(this, oldValue);
        var cursor = this;
        while (cursor = cursor.links_) cursor.fn.call(cursor.context, this.value, oldValue);
      },
      value: null,
      initValue: null,
      proxy: null,
      locked: 0,
      lockedValue_: null,
      links_: null,
      setNullOnEmitterDestroy: true,
      bindingBridge: {
        attach: function(host, callback, context, onDestroy) {
          host.link(context, callback, true, onDestroy);
        },
        detach: function(host, callback, context) {
          host.unlink(context, callback);
        },
        get: function(host) {
          return host.value;
        }
      },
      init: function() {
        AbstractData.prototype.init.call(this);
        if (this.proxy) this.value = this.proxy(this.value);
        if (this.setNullOnEmitterDestroy && this.value instanceof Emitter) this.value.addHandler(VALUE_EMMITER_DESTROY_HANDLER, this);
        this.initValue = this.value;
      },
      set: function(value) {
        var oldValue = this.value;
        var newValue = this.proxy ? this.proxy(value) : value;
        var changed = newValue !== oldValue;
        if (changed) {
          if (this.setNullOnEmitterDestroy) {
            if (oldValue instanceof Emitter) oldValue.removeHandler(VALUE_EMMITER_DESTROY_HANDLER, this);
            if (newValue instanceof Emitter) newValue.addHandler(VALUE_EMMITER_DESTROY_HANDLER, this);
          }
          this.value = newValue;
          if (!this.locked) this.emit_change(oldValue);
        }
        return changed;
      },
      reset: function() {
        this.set(this.initValue);
      },
      isLocked: function() {
        return this.locked > 0;
      },
      lock: function() {
        this.locked++;
        if (this.locked == 1) this.lockedValue_ = this.value;
      },
      unlock: function() {
        if (this.locked) {
          this.locked--;
          if (!this.locked) {
            var lockedValue = this.lockedValue_;
            this.lockedValue_ = null;
            if (this.value !== lockedValue) this.emit_change(lockedValue);
          }
        }
      },
      compute: function(events, fn) {
        if (!fn) {
          fn = events;
          events = null;
        }
        if (!fn) fn = $self;
        var hostValue = this;
        var handler = createEventHandler(events, function(object) {
          this.set(fn(object, hostValue.value));
        });
        var fnId = fn[GETTER_ID] || String(fn);
        var getComputeTokenId = handler.events.concat(fnId, this.basisObjectId).join("_");
        var getComputeToken = computeFunctions[getComputeTokenId];
        if (!getComputeToken) {
          var tokenMap = {};
          handler.destroy = function(object) {
            delete tokenMap[object.basisObjectId];
            this.destroy();
          };
          this.addHandler({
            change: function() {
              for (var key in tokenMap) {
                var pair = tokenMap[key];
                pair.token.set(fn(pair.object, this.value));
              }
            },
            destroy: function() {
              for (var key in tokenMap) {
                var pair = tokenMap[key];
                pair.object.removeHandler(handler, pair.token);
                pair.token.destroy();
              }
              tokenMap = null;
              hostValue = null;
            }
          });
          getComputeToken = computeFunctions[getComputeTokenId] = function(object) {
            if (object instanceof Emitter == false) basis.dev.warn("basis.data.Value#compute: object should be an instanceof basis.event.Emitter");
            var objectId = object.basisObjectId;
            var pair = tokenMap[objectId];
            var value = fn(object, hostValue.value);
            if (!pair) {
              var token = new basis.Token(value);
              object.addHandler(handler, token);
              pair = tokenMap[objectId] = {
                token: token,
                object: object
              };
            } else {
              pair.token.set(value);
            }
            return pair.token;
          };
          getComputeToken.factory = FACTORY;
          getComputeToken.deferred = function() {
            return function(object) {
              return getComputeToken(object).deferred();
            };
          };
        }
        return getComputeToken;
      },
      as: function(fn, deferred) {
        if (!fn) fn = $self;
        if (this.links_) {
          var cursor = this;
          var fnId = fn[GETTER_ID] || String(fn);
          while (cursor = cursor.links_) {
            var context = cursor.context;
            if (context instanceof basis.Token && (context.fn[GETTER_ID] || String(context.fn)) == fnId) return deferred ? context.deferred() : context;
          }
        }
        var token = new basis.Token;
        token.fn = fn;
        this.link(token, valueSyncToken);
        return deferred ? token.deferred() : token;
      },
      deferred: function(fn) {
        return this.as(fn, true);
      },
      link: function(context, fn, noApply, onDestroy) {
        if (typeof fn != "function") {
          var property = String(fn);
          fn = valueSetters[property];
          if (!fn) fn = valueSetters[property] = function(value) {
            this[property] = value;
          };
        }
        var cursor = this;
        while (cursor = cursor.links_) if (cursor.context === context && cursor.fn === fn) {
          basis.dev.warn(this.constructor.className + "#attach: Duplicate link pair context-fn");
          break;
        }
        this.links_ = {
          value: this,
          context: context,
          fn: fn,
          destroy: onDestroy || null,
          links_: this.links_
        };
        if (context instanceof Emitter) context.addHandler(VALUE_EMMITER_HANDLER, this.links_);
        if (!noApply) fn.call(context, this.value);
        return context;
      },
      unlink: function(context, fn) {
        var cursor = this;
        var prev;
        while (prev = cursor, cursor = cursor.links_) if (cursor.context === context && (!fn || cursor.fn === fn)) {
          cursor.fn = basis.fn.$undef;
          prev.links_ = cursor.links_;
          if (cursor.context instanceof Emitter) cursor.context.removeHandler(VALUE_EMMITER_HANDLER, cursor);
        }
      },
      destroy: function() {
        AbstractData.prototype.destroy.call(this);
        if (this.setNullOnEmitterDestroy && this.value instanceof Emitter) this.value.removeHandler(VALUE_EMMITER_DESTROY_HANDLER, this);
        var cursor = this;
        while (cursor = cursor.links_) {
          if (cursor.context instanceof Emitter) cursor.context.removeHandler(VALUE_EMMITER_HANDLER, cursor);
          if (cursor.destroy) cursor.destroy.call(cursor.context);
        }
        this.proxy = null;
        this.initValue = null;
        this.value = null;
        this.lockedValue_ = null;
        this.links_ = null;
      }
    });
    var valueFromMap = {};
    var valueFromSetProxy = function(sender) {
      Value.prototype.set.call(this, sender);
    };
    Value.from = function(obj, events, getter) {
      var result;
      if (!obj) return null;
      if (obj instanceof Emitter) {
        if (!getter) {
          getter = events;
          events = null;
        }
        if (!getter) getter = $self;
        var handler = createEventHandler(events, valueFromSetProxy);
        var getterId = getter[GETTER_ID] || String(getter);
        var id = handler.events.concat(getterId, obj.basisObjectId).join("_");
        result = valueFromMap[id];
        if (!result) {
          result = valueFromMap[id] = new Value({
            value: obj,
            proxy: basis.getter(getter),
            set: basis.fn.$undef,
            handler: {
              destroy: function() {
                valueFromMap[id] = null;
                obj.removeHandler(handler, this);
              }
            }
          });
          handler.destroy = function(sender) {
            valueFromMap[id] = null;
            this.destroy();
          };
          obj.addHandler(handler, result);
        }
      }
      if (!result) {
        var id = obj.basisObjectId;
        var bindingBridge = obj.bindingBridge;
        if (id && bindingBridge) {
          result = valueFromMap[id];
          if (!result) {
            result = valueFromMap[id] = new Value({
              value: bindingBridge.get(obj),
              set: basis.fn.$undef,
              handler: {
                destroy: function() {
                  valueFromMap[id] = null;
                  bindingBridge.detach(obj, Value.prototype.set, result);
                }
              }
            });
            bindingBridge.attach(obj, Value.prototype.set, result, result.destroy);
          }
        }
      }
      if (!result) throw "Bad object type";
      return result;
    };
    Value.factory = function(events, getter) {
      var result = function(object) {
        return Value.from(object, events, getter);
      };
      result.factory = FACTORY;
      return result;
    };
    var INIT_DATA = {};
    function isConnected(a, b) {
      while (b && b !== a && b !== b.delegate) b = b.delegate;
      return b === a;
    }
    function applyDelegateChanges(object, oldRoot, oldTarget) {
      var delegate = object.delegate;
      if (delegate) {
        object.root = delegate.root;
        object.target = delegate.target;
        object.data = delegate.data;
        object.state = delegate.state;
      }
      if (object.root !== oldRoot) {
        var rootListenHandler = object.listen.root;
        if (rootListenHandler) {
          if (oldRoot && oldRoot !== object) oldRoot.removeHandler(rootListenHandler, object);
          if (object.root && object.root !== object) object.root.addHandler(rootListenHandler, object);
        }
        object.emit_rootChanged(oldRoot);
      }
      if (object.target !== oldTarget) {
        var targetListenHandler = object.listen.target;
        if (targetListenHandler) {
          if (oldTarget && oldTarget !== object) oldTarget.removeHandler(targetListenHandler, object);
          if (object.target && object.target !== object) object.target.addHandler(targetListenHandler, object);
        }
        object.emit_targetChanged(oldTarget);
      }
      var cursor = object.delegates_;
      while (cursor) {
        if (cursor.delegate) applyDelegateChanges(cursor.delegate, oldRoot, oldTarget);
        cursor = cursor.next;
      }
    }
    var DataObject = Class(AbstractData, {
      className: namespace + ".Object",
      subscribeTo: SUBSCRIPTION.DELEGATE + SUBSCRIPTION.TARGET,
      data: null,
      emit_update: createEvent("update", "delta") && function(delta) {
        var cursor = this.delegates_;
        events.update.call(this, delta);
        while (cursor) {
          if (cursor.delegate) cursor.delegate.emit_update(delta);
          cursor = cursor.next;
        }
      },
      emit_stateChanged: function(oldState) {
        var cursor = this.delegates_;
        AbstractData.prototype.emit_stateChanged.call(this, oldState);
        while (cursor) {
          if (cursor.delegate) {
            cursor.delegate.state = this.state;
            cursor.delegate.emit_stateChanged(oldState);
          }
          cursor = cursor.next;
        }
      },
      delegate: null,
      delegateRA_: null,
      delegates_: null,
      debug_delegates: function() {
        var cursor = this.delegates_;
        var result = [];
        while (cursor) {
          result.push(cursor.delegate);
          cursor = cursor.next;
        }
        return result;
      },
      emit_delegateChanged: createEvent("delegateChanged", "oldDelegate"),
      target: null,
      emit_targetChanged: createEvent("targetChanged", "oldTarget"),
      root: null,
      emit_rootChanged: createEvent("rootChanged", "oldRoot"),
      init: function() {
        this.root = this;
        AbstractData.prototype.init.call(this);
        var delegate = this.delegate;
        var data = this.data;
        if (delegate) {
          this.delegate = null;
          this.target = null;
          this.data = INIT_DATA;
          this.setDelegate(delegate);
          if (this.data === INIT_DATA) this.data = data || {};
        } else {
          if (!data) this.data = {};
          if (this.target !== null) this.target = this;
        }
      },
      setSyncAction: function(syncAction) {
        if (syncAction && this.delegate) basis.dev.warn(this.constructor.syncAction + " instance has a delegate and syncAction - it may produce conflics with data & state");
        AbstractData.prototype.setSyncAction.call(this, syncAction);
      },
      setDelegate: function(newDelegate) {
        newDelegate = resolveObject(this, this.setDelegate, newDelegate, "delegateRA_");
        if (newDelegate && newDelegate instanceof DataObject) {
          if (newDelegate.delegate && isConnected(this, newDelegate)) {
            basis.dev.warn("New delegate has already connected to object. Delegate assignment has been ignored.", this, newDelegate);
            return false;
          }
        } else {
          newDelegate = null;
        }
        if (this.delegate !== newDelegate) {
          var oldState = this.state;
          var oldData = this.data;
          var oldDelegate = this.delegate;
          var oldTarget = this.target;
          var oldRoot = this.root;
          var delegateListenHandler = this.listen.delegate;
          var dataChanged = false;
          var delta;
          if (oldDelegate) {
            if (delegateListenHandler) oldDelegate.removeHandler(delegateListenHandler, this);
            var cursor = oldDelegate.delegates_;
            var prev = oldDelegate;
            while (cursor) {
              if (cursor.delegate === this) {
                cursor.delegate = null;
                if (prev === oldDelegate) oldDelegate.delegates_ = cursor.next; else prev.next = cursor.next;
                break;
              }
              prev = cursor;
              cursor = cursor.next;
            }
          }
          if (newDelegate) {
            this.delegate = newDelegate;
            if (delegateListenHandler) newDelegate.addHandler(delegateListenHandler, this);
            newDelegate.delegates_ = {
              delegate: this,
              next: newDelegate.delegates_
            };
            if (this.data !== INIT_DATA) {
              delta = {};
              for (var key in newDelegate.data) if (key in oldData === false) {
                dataChanged = true;
                delta[key] = undefined;
              }
              for (var key in oldData) if (oldData[key] !== newDelegate.data[key]) {
                dataChanged = true;
                delta[key] = oldData[key];
              }
            }
          } else {
            this.delegate = null;
            this.target = null;
            this.root = this;
            this.data = {};
            for (var key in oldData) this.data[key] = oldData[key];
          }
          applyDelegateChanges(this, oldRoot, oldTarget);
          if (dataChanged) this.emit_update(delta);
          if (delta && oldState !== this.state && (String(oldState) != this.state || oldState.data !== this.state.data)) this.emit_stateChanged(oldState);
          this.emit_delegateChanged(oldDelegate);
          return true;
        }
        return false;
      },
      setState: function(state, data) {
        if (this.delegate) return this.root.setState(state, data); else return AbstractData.prototype.setState.call(this, state, data);
      },
      update: function(data) {
        if (this.delegate) return this.root.update(data);
        if (data) {
          var delta = {};
          var changed = false;
          for (var prop in data) if (this.data[prop] !== data[prop]) {
            changed = true;
            delta[prop] = this.data[prop];
            this.data[prop] = data[prop];
          }
          if (changed) {
            this.emit_update(delta);
            return delta;
          }
        }
        return false;
      },
      destroy: function() {
        AbstractData.prototype.destroy.call(this);
        var cursor = this.delegates_;
        this.delegates_ = null;
        while (cursor) {
          cursor.delegate.setDelegate();
          cursor = cursor.next;
        }
        if (this.delegate) this.setDelegate();
        if (this.delegateRA_) resolveObject(this, false, false, "delegateRA_");
        this.data = NULL_OBJECT;
        this.root = null;
        this.target = null;
      }
    });
    var Slot = Class(DataObject, {
      className: namespace + ".Slot"
    });
    var KEYOBJECTMAP_MEMBER_HANDLER = {
      destroy: function() {
        delete this.map[this.id];
      }
    };
    var KeyObjectMap = Class(AbstractData, {
      className: namespace + ".KeyObjectMap",
      itemClass: DataObject,
      keyGetter: basis.getter($self),
      autoDestroyMembers: true,
      map_: null,
      extendConstructor_: true,
      init: function() {
        this.map_ = {};
        AbstractData.prototype.init.call(this);
      },
      resolve: function(object) {
        return this.get(this.keyGetter(object), object);
      },
      create: function(key, object) {
        var itemConfig;
        if (key instanceof DataObject) itemConfig = {
          delegate: key
        }; else itemConfig = {
          data: {
            id: key,
            title: key
          }
        };
        return new this.itemClass(itemConfig);
      },
      get: function(key, autocreate) {
        var itemId = key instanceof DataObject ? key.basisObjectId : key;
        var itemInfo = this.map_[itemId];
        if (!itemInfo && autocreate) {
          itemInfo = this.map_[itemId] = {
            map: this.map_,
            id: itemId,
            item: this.create(key, autocreate)
          };
          itemInfo.item.addHandler(KEYOBJECTMAP_MEMBER_HANDLER, itemInfo);
        }
        if (itemInfo) return itemInfo.item;
      },
      destroy: function() {
        AbstractData.prototype.destroy.call(this);
        var map = this.map_;
        this.map_ = null;
        for (var itemId in map) {
          var itemInfo = map[itemId];
          if (this.autoDestroyMembers) itemInfo.item.destroy(); else itemInfo.item.removeHandler(KEYOBJECTMAP_MEMBER_HANDLER, itemInfo);
        }
      }
    });
    function getDelta(inserted, deleted) {
      var delta = {};
      var result;
      if (inserted && inserted.length) result = delta.inserted = inserted;
      if (deleted && deleted.length) result = delta.deleted = deleted;
      if (result) return delta;
    }
    function getDatasetDelta(a, b) {
      if (!a || !a.itemCount) {
        if (b && b.itemCount) return {
          inserted: b.getItems()
        };
      } else {
        if (!b || !b.itemCount) {
          if (a.itemCount) return {
            deleted: a.getItems()
          };
        } else {
          var inserted = [];
          var deleted = [];
          for (var key in a.items_) {
            var item = a.items_[key];
            if (item.basisObjectId in b.items_ == false) deleted.push(item);
          }
          for (var key in b.items_) {
            var item = b.items_[key];
            if (item.basisObjectId in a.items_ == false) inserted.push(item);
          }
          return getDelta(inserted, deleted);
        }
      }
    }
    var DatasetWrapper = Class(DataObject, {
      className: namespace + ".DatasetWrapper",
      subscribeTo: DataObject.prototype.subscribeTo + SUBSCRIPTION.DATASET,
      listen: {
        dataset: {
          itemsChanged: function(dataset, delta) {
            this.itemCount = dataset.itemCount;
            this.emit_itemsChanged(delta);
          },
          destroy: function() {
            this.setDataset();
          }
        }
      },
      dataset: null,
      datasetRA_: null,
      emit_datasetChanged: createEvent("datasetChanged", "oldDataset"),
      emit_itemsChanged: createEvent("itemsChanged", "delta"),
      init: function() {
        DataObject.prototype.init.call(this);
        var dataset = this.dataset;
        if (dataset) {
          this.dataset = null;
          this.setDataset(dataset);
        }
      },
      setDataset: function(dataset) {
        dataset = resolveDataset(this, this.setDataset, dataset, "datasetRA_");
        if (this.dataset !== dataset) {
          var listenHandler = this.listen.dataset;
          var oldDataset = this.dataset;
          var delta;
          if (listenHandler) {
            if (oldDataset) oldDataset.removeHandler(listenHandler, this);
            if (dataset) dataset.addHandler(listenHandler, this);
          }
          this.itemCount = dataset ? dataset.itemCount : 0;
          this.dataset = dataset;
          if (delta = getDatasetDelta(oldDataset, dataset)) this.emit_itemsChanged(delta);
          this.emit_datasetChanged(oldDataset);
        }
      },
      has: function(object) {
        return this.dataset ? this.dataset.has(object) : null;
      },
      getItems: function() {
        return this.dataset ? this.dataset.getItems() : [];
      },
      getValues: function(getter) {
        return this.dataset ? this.dataset.getValues(getter) : [];
      },
      pick: function() {
        return this.dataset ? this.dataset.pick() : null;
      },
      top: function(count) {
        return this.dataset ? this.dataset.top(count) : [];
      },
      forEach: function(fn) {
        if (this.dataset) return this.dataset.forEach(fn);
      },
      destroy: function() {
        if (this.dataset || this.datasetRA_) this.setDataset();
        DataObject.prototype.destroy.call(this);
      }
    });
    var ReadOnlyDataset = Class(AbstractData, {
      className: namespace + ".ReadOnlyDataset",
      itemCount: 0,
      items_: null,
      members_: null,
      cache_: null,
      emit_itemsChanged: createEvent("itemsChanged", "delta") && function(delta) {
        var items;
        var insertCount = 0;
        var deleteCount = 0;
        var object;
        if (items = delta.inserted) {
          while (object = items[insertCount]) {
            this.items_[object.basisObjectId] = object;
            insertCount++;
          }
        }
        if (items = delta.deleted) {
          while (object = items[deleteCount]) {
            delete this.items_[object.basisObjectId];
            deleteCount++;
          }
        }
        this.itemCount += insertCount - deleteCount;
        this.cache_ = insertCount == this.itemCount ? delta.inserted : null;
        events.itemsChanged.call(this, delta);
      },
      init: function() {
        AbstractData.prototype.init.call(this);
        this.members_ = {};
        this.items_ = {};
      },
      has: function(object) {
        return !!(object && this.items_[object.basisObjectId]);
      },
      getItems: function() {
        if (!this.cache_) this.cache_ = values(this.items_);
        return this.cache_;
      },
      getValues: function(getter) {
        return this.getItems().map(basis.getter(getter || $self));
      },
      pick: function() {
        for (var objectId in this.items_) return this.items_[objectId];
        return null;
      },
      top: function(count) {
        var result = [];
        if (count) for (var objectId in this.items_) if (result.push(this.items_[objectId]) >= count) break;
        return result;
      },
      forEach: function(fn) {
        var items = this.getItems();
        for (var i = 0; i < items.length; i++) fn(items[i]);
      },
      destroy: function() {
        AbstractData.prototype.destroy.call(this);
        this.cache_ = EMPTY_ARRAY;
        this.itemCount = 0;
        this.members_ = null;
        this.items_ = null;
      }
    });
    var Dataset = Class(ReadOnlyDataset, {
      className: namespace + ".Dataset",
      listen: {
        item: {
          destroy: function(object) {
            this.remove([ object ]);
          }
        }
      },
      init: function() {
        ReadOnlyDataset.prototype.init.call(this);
        var items = this.items;
        if (items) {
          this.items = null;
          this.set(items);
        }
      },
      add: function(items) {
        var memberMap = this.members_;
        var listenHandler = this.listen.item;
        var inserted = [];
        var delta;
        if (items && !Array.isArray(items)) items = [ items ];
        for (var i = 0; i < items.length; i++) {
          var object = items[i];
          if (object instanceof DataObject) {
            var objectId = object.basisObjectId;
            if (!memberMap[objectId]) {
              memberMap[objectId] = object;
              if (listenHandler) object.addHandler(listenHandler, this);
              inserted.push(object);
            }
          } else {
            basis.dev.warn("Wrong data type: value should be an instance of basis.data.Object");
          }
        }
        if (inserted.length) {
          this.emit_itemsChanged(delta = {
            inserted: inserted
          });
        }
        return delta;
      },
      remove: function(items) {
        var memberMap = this.members_;
        var listenHandler = this.listen.item;
        var deleted = [];
        var delta;
        if (items && !Array.isArray(items)) items = [ items ];
        for (var i = 0; i < items.length; i++) {
          var object = items[i];
          if (object instanceof DataObject) {
            var objectId = object.basisObjectId;
            if (memberMap[objectId]) {
              if (listenHandler) object.removeHandler(listenHandler, this);
              delete memberMap[objectId];
              deleted.push(object);
            }
          } else {
            basis.dev.warn("Wrong data type: value should be an instance of basis.data.Object");
          }
        }
        if (deleted.length) {
          this.emit_itemsChanged(delta = {
            deleted: deleted
          });
        }
        return delta;
      },
      set: function(items) {
        if (!this.itemCount) return this.add(items);
        if (!items || !items.length) return this.clear();
        var memberMap = this.members_;
        var listenHandler = this.listen.item;
        var exists = {};
        var deleted = [];
        var inserted = [];
        var object;
        var objectId;
        var delta;
        for (var i = 0; i < items.length; i++) {
          object = items[i];
          if (object instanceof DataObject) {
            objectId = object.basisObjectId;
            exists[objectId] = object;
            if (!memberMap[objectId]) {
              memberMap[objectId] = object;
              if (listenHandler) object.addHandler(listenHandler, this);
              inserted.push(object);
            }
          } else {
            basis.dev.warn("Wrong data type: value should be an instance of basis.data.Object");
          }
        }
        for (var objectId in memberMap) {
          if (!exists[objectId]) {
            object = memberMap[objectId];
            if (listenHandler) object.removeHandler(listenHandler, this);
            delete memberMap[objectId];
            deleted.push(object);
          }
        }
        if (delta = getDelta(inserted, deleted)) this.emit_itemsChanged(delta);
        return delta;
      },
      sync: function(items) {
        var delta = this.set(items) || {};
        var deleted = delta.deleted;
        Dataset.setAccumulateState(true);
        if (deleted) for (var i = 0, object; object = deleted[i]; i++) object.destroy();
        Dataset.setAccumulateState(false);
        return delta.inserted;
      },
      clear: function() {
        var deleted = this.getItems();
        var listenHandler = this.listen.item;
        var delta;
        if (deleted.length) {
          if (listenHandler) for (var i = 0; i < deleted.length; i++) deleted[i].removeHandler(listenHandler, this);
          this.emit_itemsChanged(delta = {
            deleted: deleted
          });
          this.members_ = {};
        }
        return delta;
      },
      destroy: function() {
        this.clear();
        ReadOnlyDataset.prototype.destroy.call(this);
      }
    });
    function resolveAdapterProxy() {
      this.fn.call(this.context, this.source);
    }
    var ResolveAdapter = function(context, fn, source, handler) {
      this.context = context;
      this.fn = fn;
      this.source = source;
      this.handler = handler;
    };
    ResolveAdapter.prototype = {
      context: null,
      fn: null,
      source: null,
      handler: null,
      next: null,
      attach: function() {
        this.source.addHandler(this.handler, this);
      },
      detach: function() {
        this.source.removeHandler(this.handler, this);
      }
    };
    var BBResolveAdapter = function() {
      ResolveAdapter.apply(this, arguments);
    };
    BBResolveAdapter.prototype = new ResolveAdapter;
    BBResolveAdapter.prototype.attach = function(destroyCallback) {
      this.source.bindingBridge.attach(this.source, this.handler, this, destroyCallback);
    };
    BBResolveAdapter.prototype.detach = function() {
      this.source.bindingBridge.detach(this.source, this.handler, this);
    };
    var DEFAULT_CHANGE_ADAPTER_HANDLER = function() {
      this.fn.call(this.context, this.source);
    };
    var DEFAULT_DESTROY_ADAPTER_HANDLER = function() {
      this.fn.call(this.context, null);
    };
    var RESOLVEVALUE_DESTROY_ADAPTER_HANDLER = function() {
      this.fn.call(this.context, resolveValue(NULL_OBJECT, null, this.source.bindingBridge.get(this.source)));
    };
    var DATASETWRAPPER_ADAPTER_HANDLER = {
      datasetChanged: DEFAULT_CHANGE_ADAPTER_HANDLER,
      destroy: DEFAULT_DESTROY_ADAPTER_HANDLER
    };
    function resolveDataset(context, fn, source, property, factoryContext) {
      var oldAdapter = context[property] || null;
      var newAdapter = null;
      if (fn !== resolveAdapterProxy && typeof source == "function") source = source.call(factoryContext || context, factoryContext || context);
      if (source) {
        var adapter = newAdapter = oldAdapter && oldAdapter.source === source ? oldAdapter : null;
        if (source instanceof DatasetWrapper) {
          newAdapter = adapter || new ResolveAdapter(context, fn, source, DATASETWRAPPER_ADAPTER_HANDLER);
          source = source.dataset;
        } else if (source.bindingBridge) {
          newAdapter = adapter || new BBResolveAdapter(context, fn, source, DEFAULT_CHANGE_ADAPTER_HANDLER);
          source = resolveDataset(newAdapter, resolveAdapterProxy, source.value, "next");
        }
      }
      if (source instanceof ReadOnlyDataset == false) source = null;
      if (property && oldAdapter !== newAdapter) {
        if (oldAdapter) {
          oldAdapter.detach();
          if (oldAdapter.next) resolveDataset(oldAdapter, null, null, "next");
        }
        if (newAdapter) newAdapter.attach(DEFAULT_DESTROY_ADAPTER_HANDLER);
        context[property] = newAdapter;
      }
      return source;
    }
    function resolveObject(context, fn, source, property, factoryContext) {
      var oldAdapter = context[property] || null;
      var newAdapter = null;
      if (fn !== resolveAdapterProxy && typeof source == "function") source = source.call(factoryContext || context, factoryContext || context);
      if (source && source.bindingBridge) {
        if (!oldAdapter || oldAdapter.source !== source) newAdapter = new BBResolveAdapter(context, fn, source, DEFAULT_CHANGE_ADAPTER_HANDLER); else newAdapter = oldAdapter;
        source = resolveObject(newAdapter, resolveAdapterProxy, source.bindingBridge.get(source), "next");
      }
      if (source instanceof DataObject == false) source = null;
      if (property && oldAdapter !== newAdapter) {
        if (oldAdapter) {
          oldAdapter.detach();
          if (oldAdapter.next) resolveObject(oldAdapter, null, null, "next");
        }
        if (newAdapter) newAdapter.attach(DEFAULT_DESTROY_ADAPTER_HANDLER);
        context[property] = newAdapter;
      }
      return source;
    }
    function resolveValue(context, fn, source, property, factoryContext) {
      var oldAdapter = context[property] || null;
      var newAdapter = null;
      if (source && fn !== resolveAdapterProxy && typeof source == "function" && source.factory === FACTORY) source = source.call(factoryContext || context, factoryContext || context);
      if (source && source.bindingBridge) {
        if (!oldAdapter || oldAdapter.source !== source) newAdapter = new BBResolveAdapter(context, fn, source, DEFAULT_CHANGE_ADAPTER_HANDLER); else newAdapter = oldAdapter;
        source = resolveValue(newAdapter, resolveAdapterProxy, source.bindingBridge.get(source), "next");
      }
      if (property && oldAdapter !== newAdapter) {
        if (oldAdapter) {
          oldAdapter.detach();
          if (oldAdapter.next) resolveValue(oldAdapter, null, null, "next");
        }
        if (newAdapter) newAdapter.attach(RESOLVEVALUE_DESTROY_ADAPTER_HANDLER);
        context[property] = newAdapter;
      }
      return source;
    }
    Dataset.setAccumulateState = function() {
      var proto = ReadOnlyDataset.prototype;
      var eventCache = {};
      var setStateCount = 0;
      var urgentTimer;
      var realEvent;
      function flushCache(cache) {
        var dataset = cache.dataset;
        realEvent.call(dataset, cache);
      }
      function flushAllDataset() {
        var eventCacheCopy = eventCache;
        eventCache = {};
        for (var datasetId in eventCacheCopy) {
          var entry = eventCacheCopy[datasetId];
          if (entry) flushCache(entry);
        }
      }
      function storeDatasetDelta(delta) {
        var dataset = this;
        var datasetId = dataset.basisObjectId;
        var inserted = delta.inserted;
        var deleted = delta.deleted;
        var cache = eventCache[datasetId];
        if (inserted && deleted || cache && cache.mixed) {
          if (cache) {
            eventCache[datasetId] = null;
            flushCache(cache);
          }
          realEvent.call(dataset, delta);
          return;
        }
        if (cache) {
          var mode = inserted ? "inserted" : "deleted";
          var array = cache[mode];
          if (!array) {
            var inCacheMode = inserted ? "deleted" : "inserted";
            var inCache = cache[inCacheMode];
            var inCacheMap = {};
            var deltaItems = inserted || deleted;
            var newInCacheItems = [];
            var inCacheRemoves = 0;
            for (var i = 0; i < inCache.length; i++) inCacheMap[inCache[i].basisObjectId] = i;
            for (var i = 0; i < deltaItems.length; i++) {
              var id = deltaItems[i].basisObjectId;
              if (id in inCacheMap == false) {
                newInCacheItems.push(deltaItems[i]);
              } else {
                if (!inCacheRemoves) inCache = sliceArray.call(inCache);
                inCacheRemoves++;
                inCache[inCacheMap[id]] = null;
              }
            }
            if (inCacheRemoves) {
              if (inCacheRemoves < inCache.length) {
                inCache = inCache.filter(Boolean);
              } else {
                inCache = null;
              }
              cache[inCacheMode] = inCache;
            }
            if (!newInCacheItems.length) {
              newInCacheItems = null;
              if (!inCache) eventCache[datasetId] = null;
            } else {
              cache[mode] = newInCacheItems;
              if (inCache) cache.mixed = true;
            }
          } else array.push.apply(array, inserted || deleted);
          return;
        }
        eventCache[datasetId] = {
          inserted: inserted,
          deleted: deleted,
          dataset: dataset,
          mixed: false
        };
      }
      function urgentFlush() {
        urgentTimer = null;
        if (setStateCount) {
          basis.dev.warn("(debug) Urgent flush dataset changes");
          setStateCount = 0;
          setAccumulateStateOff();
        }
      }
      function setAccumulateStateOff() {
        proto.emit_itemsChanged = realEvent;
        flushAllDataset();
      }
      return function(state) {
        if (state) {
          if (setStateCount == 0) {
            realEvent = proto.emit_itemsChanged;
            proto.emit_itemsChanged = storeDatasetDelta;
            if (!urgentTimer) urgentTimer = basis.setImmediate(urgentFlush);
          }
          setStateCount++;
        } else {
          setStateCount -= setStateCount > 0;
          if (setStateCount == 0) setAccumulateStateOff();
        }
      };
    }();
    function wrapData(data) {
      if (Array.isArray(data)) return data.map(function(item) {
        return {
          data: item
        };
      }); else return {
        data: data
      };
    }
    function wrapObject(data) {
      if (!data || data.constructor !== Object) data = {
        value: data
      };
      return new DataObject({
        data: data
      });
    }
    function wrap(value, retObject) {
      var wrapper = retObject ? wrapObject : wrapData;
      return Array.isArray(value) ? value.map(wrapper) : wrapper(value);
    }
    module.exports = {
      STATE: STATE,
      SUBSCRIPTION: SUBSCRIPTION,
      FACTORY: FACTORY,
      PROXY: Value.factory("subscribersChanged", "subscriberCount"),
      AbstractData: AbstractData,
      Value: Value,
      Object: DataObject,
      Slot: Slot,
      KeyObjectMap: KeyObjectMap,
      ReadOnlyDataset: ReadOnlyDataset,
      Dataset: Dataset,
      DatasetWrapper: DatasetWrapper,
      isConnected: isConnected,
      getDatasetDelta: getDatasetDelta,
      ResolveAdapter: ResolveAdapter,
      resolveDataset: resolveDataset,
      resolveObject: resolveObject,
      resolveValue: resolveValue,
      wrapData: wrapData,
      wrapObject: wrapObject,
      wrap: wrap
    };
  },
  "u.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var fnInfo = basis.require("./k.js").fn;
    var Node = basis.require("./4.js").Node;
    function runInContext(contextWindow, code) {
      (contextWindow.execScript || function(code) {
        contextWindow["eval"].call(contextWindow, code);
      })(code);
    }
    var FrameEnv = Node.subclass({
      applyEnvironment: null,
      initEnv: null,
      html: null,
      postInit: function() {
        Node.prototype.postInit.call(this);
        basis.doc.body.add(this.element);
      },
      template: basis.template.get("#1"),
      binding: {
        src: function(node) {
          if (node.html && node.html != "default") return node.html;
          return "/base/node_modules/karma-basisjs-test-runner/lib/res/_OXc_YC-JNYkD4Cy89EBCg.html";
        }
      },
      action: {
        ready: function() {
          var frameWindow = this.element.contentWindow;
          var initCode = "";
          var code = basis.require("./0.code");
          if (typeof code == "function") code = fnInfo(code).body;
          runInContext(frameWindow, code);
          if (typeof this.initEnv == "function") initCode = fnInfo(this.initEnv).body;
          this.applyEnvironment = frameWindow.__initTestEnvironment(initCode, function() {
            this.destroy();
          }.bind(this));
          if (this.runArgs) {
            this.run.apply(this, this.runArgs);
            this.runArgs = null;
          }
        }
      },
      run: function(code, context, runTest) {
        if (this.applyEnvironment) runTest.call(context, this.applyEnvironment(code)); else this.runArgs = arguments;
      },
      destroy: function() {
        Node.prototype.destroy.call(this);
        this.applyEnvironment = null;
        this.runArgs = null;
      }
    });
    module.exports = FrameEnv;
  },
  "k.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    function normalizeOffset(str) {
      var lines = str.split(/\n/);
      if (lines.length < 2) return str;
      var offsets = lines.map(function(line) {
        return line.match(/^(\s*)/)[0].length;
      });
      var firstLineOffset = offsets.shift();
      var otherLinesMinOffset = Math.min.apply(null, offsets);
      var minOffset = firstLineOffset ? Math.min(firstLineOffset, otherLinesMinOffset) : otherLinesMinOffset;
      if (minOffset) str = lines.map(function(line, idx) {
        return idx || firstLineOffset ? line.substr(minOffset) : line;
      }).join("\n");
      return str;
    }
    function toString(value) {
      var host = typeof value == "function" ? Function : Object;
      var result = host.prototype.toString.call(value);
      if (host === Function) result = normalizeOffset(result);
      return result;
    }
    function resolveGetter(getter) {
      if (getter === basis.fn.nullGetter) return "basis.fn.nullGetter";
      if (getter[basis.getter.ID]) {
        var parent = getter[basis.getter.PARENT];
        var result = parent ? resolveGetter(parent) + ".as(" : "basis.getter(";
        var source = getter[basis.getter.SOURCE];
        if (typeof source == "string") result += '"' + source.replace(/"/g, '\\"') + '"'; else {
          if (!getter.mod) {
            if (typeof source == "function") result += toString(source); else if (typeof JSON !== "undefined") try {
              result += JSON.stringify(source);
            } catch (e) {
              result += toString(source);
            } else result += toString(source);
          } else result += resolveGetter(source);
        }
        if (getter.mod) {
          if (typeof getter.mod == "string") result += ', "' + getter.mod.replace(/"/g, '\\"') + '"'; else result += ", " + resolveGetter(getter.mod);
        }
        return result + ")";
      }
      return toString(getter);
    }
    function tokenizeFunctionSource(source) {
      var chars = source.split("");
      var res = [];
      var last = 0;
      var j;
      function store(type, pos) {
        if (arguments.length != 2) pos = i;
        if (last != pos) {
          res.push([ type || "content", source.substring(last, pos) ]);
          last = pos;
        }
      }
      for (var i = 0; i < chars.length; i++) mainLoop : {
        var ch = chars[i];
        switch (ch) {
          case "/":
            store();
            j = i;
            if (chars[j + 1] === "/") {
              j = j + 2;
              while (j < chars.length && chars[j] !== "\n" && chars[j] !== "\r") j++;
              store("comment", j);
              i = last - 1;
              break;
            }
            if (chars[j + 1] == "*") {
              j = j + 2;
              while (j < chars.length && !(chars[j] === "*" && chars[j + 1] === "/")) j++;
              store("comment", j + 2);
              i = last - 1;
              break;
            }
            while (j < chars.length) {
              j++;
              if (chars[j] == "\n") break mainLoop;
              if (chars[j] == "\\") {
                j++;
              } else {
                if (chars[j] == ch) break;
              }
            }
            store("regexp", j + 1);
            i = last - 1;
            break;
          case '"':
          case "'":
            store();
            j = i;
            while (j < chars.length) {
              j++;
              if (chars[j] == "\\") {
                j++;
              } else {
                if (chars[j] == ch) break;
              }
            }
            store("string", j + 1);
            i = last - 1;
            break;
          case "(":
          case "{":
            store();
            last = i + 1;
            res.push([ "open", ch ]);
            break;
          case ")":
          case "}":
            store();
            last = i + 1;
            res.push([ "close", ch ]);
            break;
          default:
            if (/\s/.test(ch)) {
              store();
              j = i + 1;
              while (j < chars.length && /\s/.test(chars[j])) j++;
              store("space", j);
              i = last - 1;
            }
        }
      }
      store();
      return res;
    }
    function functionInfo(fn) {
      var getter = resolveGetter(fn);
      var source = toString(fn);
      var tokens = tokenizeFunctionSource(source);
      var name = "anonymous";
      var argsContext = false;
      var wasContent = true;
      var args = [];
      var token;
      while (token = tokens.shift()) {
        if (token[1] == "{") break;
        if (token[0] == "content") {
          wasContent = true;
          if (argsContext) args.push(token[1]); else {
            if (token[1] != "function") name = token[1];
          }
        } else {
          if (!argsContext) argsContext = wasContent && token[1] == "(";
        }
      }
      while (token = tokens.pop()) if (token[1] == "}") break;
      for (var i = 0; i < tokens.length; i++) tokens[i] = tokens[i][1];
      args = args.join("").trim().replace(/\s*,\s*/g, ", ");
      return {
        source: source,
        name: name,
        fullname: name + "(" + args + ")",
        args: args,
        body: tokens.join(""),
        getter: getter != source ? getter : false
      };
    }
    module.exports = {
      fn: functionInfo,
      normalizeOffset: normalizeOffset
    };
  },
  "0.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var Value = basis.require("./1.js").Value;
    var Expression = basis.require("./3.js").Expression;
    var DataObject = basis.require("./1.js").Object;
    var Node = basis.require("./4.js").Node;
    var runner = basis.require("./e.js");
    var toc = basis.require("./w.js");
    var testDetails = basis.require("./x.js");
    var rootTestSuite = new DataObject({
      getChildNodesDataset: function() {}
    });
    function findTest(test, filename) {
      if (test.data.filename_ === filename) return test;
      if (test.childNodes) for (var i = 0, child; child = test.childNodes[i]; i++) {
        var res = findTest(child, filename);
        if (res) return res;
      }
    }
    toc.addHandler({
      delegateChanged: function() {
        var cursor = this;
        while (!cursor.data.filename_ && cursor.root.parentNode) cursor = cursor.root.parentNode;
        location.hash = "#" + (cursor.root.parentNode && cursor.data.filename_ ? cursor.data.filename_ : "");
      },
      childNodesModified: function() {
        runner.loadTests(basis.array(this.childNodes));
      }
    });
    toc.selection.addHandler({
      itemsChanged: function(selection) {
        this.setDelegate(selection.pick());
      }
    }, testDetails);
    testDetails.selection.addHandler({
      itemsChanged: function(selection) {
        var selected = selection.pick();
        if (selected) this.setDelegate(selected.root);
      }
    }, toc);
    var view = new Node({
      template: basis.template.get("#9"),
      action: {
        reset: function() {
          toc.setDelegate(rootTestSuite);
        },
        run: function() {
          runner.run();
        }
      },
      binding: {
        toc: toc,
        tests: testDetails,
        runnerState: new Expression(runner.state, runner.count.total, runner.count.fault, runner.count.left, function(state, total, fault, left) {
          if (fault) return "fault";
          if (state != "running" && total && !left) return "ok";
          return state;
        }),
        name: Value.from(rootTestSuite, "update", "data.name"),
        time: runner.time.as(function(val) {
          return (val / 1e3).toFixed(1);
        }),
        total: runner.count.total,
        assert: runner.count.assert,
        left: runner.count.left,
        done: runner.count.done
      }
    });
    var notifyLoader;
    module.exports = {
      notifySupported: new basis.Token(false),
      notifyLoader: function(topic, data) {
        if (notifyLoader) notifyLoader.call(null, topic, data); else basis.dev.warn("Notify callback for loader is not defined");
      },
      loadTests: function(data, autorun, notifyLoaderFunction) {
        if (Array.isArray(data)) data = {
          test: data
        };
        var rootTest = basis.require("./i.js").create(data);
        var marker = location.hash.substr(1);
        var testByFilename;
        if (marker) testByFilename = findTest(rootTest, marker);
        toc.setDelegate(testByFilename || rootTestSuite);
        rootTestSuite.setDelegate(rootTest);
        if (typeof notifyLoaderFunction == "function") notifyLoader = notifyLoaderFunction;
        if (autorun) setTimeout(function() {
          runner.run();
        }, 100);
      }
    };
    if (basis.config.exports) {
      global.basisjsTestRunner = basis.object.extend(module.exports, {
        setup: function(config) {
          for (var key in config) {
            var value = config[key];
            switch (key) {
              case "element":
                if (typeof value == "string") value = document.getElementById(value);
                basis.nextTick(function() {
                  this.appendChild(view.element);
                }.bind(value));
                break;
              case "baseURI":
                basis.require("./j.js").baseURI = value;
                break;
            }
          }
        },
        run: function() {
          runner.run();
        }
      });
    } else {
      basis.ready(function() {
        basis.doc.body.add(view.element);
      });
    }
  },
  "2.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var namespace = this.path;
    var Class = basis.Class;
    var extend = basis.object.extend;
    var slice = Array.prototype.slice;
    var NULL_HANDLER = {};
    var events = {};
    var warnOnDestroy = function() {
      basis.dev.warn("Object had been destroyed before. Destroy method must not be called more than once.");
    };
    function createDispatcher(eventName) {
      var eventFunction = events[eventName];
      if (!eventFunction) {
        eventFunction = function() {
          var cursor = this;
          var args;
          var fn;
          while (cursor = cursor.handler) {
            fn = cursor.callbacks[eventName];
            if (typeof fn == "function") {
              if (!args) {
                args = [ this ];
                for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);
              }
              fn.apply(cursor.context || this, args);
            }
            fn = cursor.callbacks["*"];
            if (typeof fn == "function") {
              if (!args) {
                args = [ this ];
                for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);
              }
              fn.call(cursor.context || this, {
                sender: this,
                type: eventName,
                args: args
              });
            }
          }
          if (this.debug_emit) {
            args = [];
            for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);
            this.debug_emit({
              sender: this,
              type: eventName,
              args: args
            });
          }
        };
        eventFunction = (new Function("slice", 'return {"' + namespace + ".events." + eventName + '":\n\n      ' + "function(" + slice.call(arguments, 1).join(", ") + "){" + eventFunction.toString().replace(/\beventName\b/g, '"' + eventName + '"').replace(/^function[^(]*\(\)[^{]*\{|\}$/g, "") + "}" + '\n\n}["' + namespace + ".events." + eventName + '"];'))(slice);
        events[eventName] = eventFunction;
      }
      return eventFunction;
    }
    function createHandler(events, eventCallback) {
      var handler = {
        events: []
      };
      if (events) {
        events = String(events).trim().split(/\s+|\s*,\s*/).sort();
        handler = {
          events: events
        };
        for (var i = 0, eventName; eventName = events[i]; i++) if (eventName != "destroy") handler[eventName] = eventCallback;
      }
      return handler;
    }
    var Emitter = Class(null, {
      className: namespace + ".Emitter",
      extendConstructor_: true,
      handler: null,
      emit_destroy: createDispatcher("destroy"),
      listen: Class.nestedExtendProperty(),
      debug_handlers: function() {
        var result = [];
        var cursor = this;
        while (cursor = cursor.handler) result.push([ cursor.callbacks, cursor.context ]);
        return result;
      },
      debug_emit: null,
      init: function() {
        if (this.handler && !this.handler.callbacks) this.handler = {
          callbacks: this.handler,
          context: this,
          handler: null
        };
      },
      addHandler: function(callbacks, context) {
        if (!callbacks) basis.dev.warn(namespace + ".Emitter#addHandler: callbacks is not an object (", callbacks, ")");
        context = context || this;
        var cursor = this;
        while (cursor = cursor.handler) {
          if (cursor.callbacks === callbacks && cursor.context === context) {
            basis.dev.warn(namespace + ".Emitter#addHandler: add duplicate event callbacks", callbacks, "to Emitter instance:", this);
            break;
          }
        }
        this.handler = {
          callbacks: callbacks,
          context: context,
          handler: this.handler
        };
      },
      removeHandler: function(callbacks, context) {
        var cursor = this;
        var prev;
        context = context || this;
        while (prev = cursor, cursor = cursor.handler) if (cursor.callbacks === callbacks && cursor.context === context) {
          cursor.callbacks = NULL_HANDLER;
          prev.handler = cursor.handler;
          return;
        }
        basis.dev.warn(namespace + ".Emitter#removeHandler: no handler removed");
      },
      destroy: function() {
        this.destroy = warnOnDestroy;
        this.emit_destroy();
        this.handler = null;
      }
    });
    module.exports = {
      create: createDispatcher,
      createHandler: createHandler,
      events: events,
      Emitter: Emitter
    };
  },
  "l.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var getFnInfo = basis.require("./t.js");
    var sourceUtils = basis.require("./v.js");
    var WORKER_COUNT = global.navigator.hardwareConcurrency || 4;
    var WORKER_MAX_QUEUE = 20;
    var workerTime = new Date;
    var workers = [];
    var workerTaskQueue = [];
    var curWorker = 0;
    var workerFlush = false;
    var sourceMap = {};
    var wrappedSourceMap = {};
    var sentCount = 0;
    var receiveCount = 0;
    function flushWorkerTasks() {
      var workerQueues = basis.array.create(WORKER_COUNT, function() {
        return [];
      });
      for (var i = 0, task; task = workerTaskQueue[i]; i++) {
        var workerId = i % WORKER_COUNT;
        var workerQueue = workerQueues[workerId];
        if (workerQueue.push(task) == WORKER_MAX_QUEUE) {
          sentCount++;
          workers[workerId].postMessage(workerQueue);
          workerQueues[workerId] = [];
        }
      }
      workerQueues.forEach(function(workerQueue, workerId) {
        if (workerQueue.length) {
          sentCount++;
          workers[workerId].postMessage(workerQueue);
        }
      });
      workerTaskQueue = [];
      workerFlush = false;
    }
    function regFunction(fn) {
      var source = fn.toString();
      if (source in sourceMap) return sourceMap[source];
      sourceMap[source] = fn;
      if (workers.length) {
        if (!workerFlush) workerFlush = basis.asap(flushWorkerTasks);
        workerTaskQueue.push({
          source: source,
          breakPointAt: "none"
        });
      }
      return fn;
    }
    function getFunctionInfo(fn) {
      if (!fn.info_) {
        var fnInfo = getFnInfo(fn.toString());
        fn.info_ = {
          args: fnInfo.args,
          body: fnInfo.body
        };
      }
      return fn.info_;
    }
    function getWrappedSource(source) {
      if (!wrappedSourceMap.hasOwnProperty(source)) wrappedSourceMap[source] = sourceUtils.wrapSource(source, "none");
      return wrappedSourceMap[source];
    }
    if (global.Worker) for (var i = 0; i < WORKER_COUNT; i++) {
      var worker = new Worker("/base/node_modules/karma-basisjs-test-runner/lib/res/E6P4bhb55znfCzAa1Pbfbw.js");
      worker.onmessage = function(event) {
        event.data.forEach(function(data) {
          if (++receiveCount === sentCount) console.log("workers time:", new Date - workerTime);
          wrappedSourceMap[data.body] = data.wrapped;
          sourceMap[data.source].info_ = {
            args: data.args,
            body: data.body
          };
        });
      };
      workers.push(worker);
    }
    module.exports = {
      regFunction: regFunction,
      getFunctionInfo: getFunctionInfo,
      getWrappedSource: getWrappedSource
    };
  },
  "v.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var esprima;
    if (typeof importScripts == "function") importScripts("QAugyzpHmXeYBexQaNiCAA.js"); else esprima = basis.require("./m.js");
    var TRAVERSE_ABORT = 1;
    var TRAVERSE_STOP_DEEP = 2;
    var NODE_BRANCHES = {
      ArrayExpression: [ "elements" ],
      AssignmentExpression: [ "left", "right" ],
      BinaryExpression: [ "left", "right" ],
      BlockStatement: [ "body" ],
      BreakStatement: [ "label" ],
      CallExpression: [ "callee", "arguments" ],
      CatchClause: [ "param", "body" ],
      ConditionalExpression: [ "test", "consequent", "alternate" ],
      ContinueStatement: [ "label" ],
      DebuggerStatement: [],
      DoWhileStatement: [ "test", "body" ],
      EmptyStatement: [],
      ExpressionStatement: [ "expression" ],
      ForInStatement: [ "left", "right", "body" ],
      ForStatement: [ "init", "test", "update", "body" ],
      FunctionDeclaration: [ "id", "params", "body" ],
      FunctionExpression: [ "id", "params", "defaults", "body" ],
      Identifier: [],
      IfStatement: [ "test", "consequent", "alternate" ],
      LabeledStatement: [ "label", "body" ],
      Literal: [],
      LogicalExpression: [ "left", "right" ],
      MemberExpression: [ "object", "property" ],
      NewExpression: [ "callee", "arguments" ],
      ObjectExpression: [ "properties" ],
      Program: [ "body" ],
      Property: [ "key", "value" ],
      ReturnStatement: [ "argument" ],
      SequenceExpression: [ "expressions" ],
      SwitchCase: [ "test", "consequent" ],
      SwitchStatement: [ "discriminant", "cases" ],
      ThisExpression: [],
      ThrowStatement: [ "argument" ],
      TryStatement: [ "block", "handlers", "finalizer" ],
      UnaryExpression: [ "argument" ],
      UpdateExpression: [ "argument" ],
      VariableDeclaration: [ "declarations" ],
      VariableDeclarator: [ "id", "init" ],
      WhileStatement: [ "test", "body" ],
      WithStatement: [ "object", "body" ]
    };
    function parse(code) {
      function postProcessing(node) {
        var branches = NODE_BRANCHES[node.type];
        for (var i = 0, key; key = branches[i]; i++) {
          var value = node[key];
          if (typeof value == "object" && value !== null) {
            if (Array.isArray(value)) {
              value.forEach(function(child) {
                postProcessing(child);
                child.root = result;
                child.parentNode = node;
                child.parentCollection = value;
              });
            } else {
              postProcessing(value);
              value.root = result;
              value.parentNode = node;
            }
          }
        }
      }
      var result = esprima.parse(code, {
        loc: true,
        range: true,
        comment: true,
        tokens: true
      });
      postProcessing(result);
      result.source = code;
      result.root = result;
      return result;
    }
    function traverseAst(node, visitor) {
      var res = visitor.call(null, node);
      if (res) return res == TRAVERSE_ABORT ? res : false;
      var branches = NODE_BRANCHES[node.type];
      for (var i = 0, key; key = branches[i]; i++) {
        var value = node[key];
        if (typeof value == "object" && value !== null) {
          if (Array.isArray(value)) {
            for (var j = 0, child; child = value[j]; j++) if (traverseAst(child, visitor) & TRAVERSE_ABORT) return TRAVERSE_ABORT;
          } else {
            if (traverseAst(value, visitor) & TRAVERSE_ABORT) return TRAVERSE_ABORT;
          }
        }
      }
    }
    function getRangeTokens(ast, start, end) {
      var first;
      for (var i = 0, pre, prev, token; i < ast.tokens.length; i++) {
        token = ast.tokens[i];
        if (token.range[0] < start) continue;
        if (token.range[1] > end) {
          token = prev;
          break;
        }
        if (!first) first = token;
        prev = token;
      }
      return [ first, token ];
    }
    function getNodeRangeTokens(node) {
      return getRangeTokens(node.root, node.range[0], node.range[1]);
    }
    function translateAst(ast, start, end) {
      var source = ast.source;
      var buffer = [];
      for (var i = 0, pre, prev, token; i < ast.tokens.length; i++) {
        token = ast.tokens[i];
        if (token.range[0] < start) continue;
        if (token.range[1] > end) {
          token = prev;
          break;
        }
        pre = source.substring(prev ? prev.range[1] : start, token.range[0]);
        if (pre) buffer.push(pre);
        buffer.push(token.value);
        prev = token;
      }
      buffer.push(source.substring(token ? token.range[1] : start, end));
      return buffer.join("");
    }
    function translateNode(node) {
      return translateAst(node.root, node.range[0], node.range[1]);
    }
    function wrapSource(source, breakpointAt) {
      var ast = parse(source);
      if (breakpointAt == "none") {
        traverseAst(ast, function(node) {
          if (node.type == "Program") return;
          if (node.type == "FunctionExpression") {
            var tokens = getNodeRangeTokens(node);
            var orig = translateAst(ast, tokens[0].range[0], tokens[1].range[1]);
            tokens[0].value = "__wrapFunctionExpression(" + tokens[0].value;
            tokens[1].value += ", " + orig + ")";
          }
          if (node.type == "FunctionDeclaration") {
            var tokens = getNodeRangeTokens(node.body);
            tokens[0].value += "\ntry {\n";
            tokens[1].value = "\n} catch(e) {" + "__exception(e);" + "throw e;" + "}\n" + tokens[1].value;
          }
          if (node.type == "CallExpression") {
            if (node.parentNode.type == "ExpressionStatement") {
              var token = getNodeRangeTokens(node)[0];
              var singleArg = node.arguments.length == 1 ? node.arguments[0] : null;
              var isForCode = "__isFor(" + node.range + "," + (node.loc.end.line - 1) + ")";
              var newValue = token.value.replace(/^__enterLine\(\d+\)/, isForCode);
              token.value = newValue != token.value ? newValue : isForCode + " || " + token.value;
              if (singleArg && singleArg.type == "BinaryExpression" && singleArg.operator.match(/^(===?)$/)) {
                var arg0 = node.arguments[0];
                var leftToken = getNodeRangeTokens(arg0.left);
                var rightToken = getNodeRangeTokens(arg0.right);
                leftToken[0].value = '__actual("' + arg0.operator + '",' + leftToken[0].value;
                leftToken[1].value += ")";
                rightToken[0].value = "__expected(" + rightToken[0].value;
                rightToken[1].value += ")";
              }
            }
          }
          if (node.parentNode.type == "BlockStatement" || node.parentNode.type == "Program") {
            var firstToken = getNodeRangeTokens(node)[0];
            firstToken.value = "__enterLine(" + (firstToken.loc.start.line - 1) + "); " + firstToken.value;
          }
        });
      }
      return translateAst(ast, 0, ast.source.length);
    }
    if (typeof module != "undefined") {
      module.exports = {
        TRAVERSE_ABORT: TRAVERSE_ABORT,
        TRAVERSE_STOP_DEEP: TRAVERSE_STOP_DEEP,
        parse: parse,
        traverseAst: traverseAst,
        translateAst: translateAst,
        translateNode: translateNode,
        getRangeTokens: getRangeTokens,
        getNodeRangeTokens: getNodeRangeTokens,
        wrapSource: wrapSource
      };
    }
  },
  "m.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    (function(root, factory) {
      "use strict";
      if (typeof define === "function" && define.amd) {
        define([ "exports" ], factory);
      } else if (typeof exports !== "undefined") {
        factory(exports);
      } else {
        factory(root.esprima = {});
      }
    })(this, function(exports) {
      "use strict";
      var Token, TokenName, FnExprTokens, Syntax, PropertyKind, Messages, Regex, SyntaxTreeDelegate, source, strict, index, lineNumber, lineStart, length, delegate, lookahead, state, extra;
      Token = {
        BooleanLiteral: 1,
        EOF: 2,
        Identifier: 3,
        Keyword: 4,
        NullLiteral: 5,
        NumericLiteral: 6,
        Punctuator: 7,
        StringLiteral: 8,
        RegularExpression: 9
      };
      TokenName = {};
      TokenName[Token.BooleanLiteral] = "Boolean";
      TokenName[Token.EOF] = "<end>";
      TokenName[Token.Identifier] = "Identifier";
      TokenName[Token.Keyword] = "Keyword";
      TokenName[Token.NullLiteral] = "Null";
      TokenName[Token.NumericLiteral] = "Numeric";
      TokenName[Token.Punctuator] = "Punctuator";
      TokenName[Token.StringLiteral] = "String";
      TokenName[Token.RegularExpression] = "RegularExpression";
      FnExprTokens = [ "(", "{", "[", "in", "typeof", "instanceof", "new", "return", "case", "delete", "throw", "void", "=", "+=", "-=", "*=", "/=", "%=", "<<=", ">>=", ">>>=", "&=", "|=", "^=", ",", "+", "-", "*", "/", "%", "++", "--", "<<", ">>", ">>>", "&", "|", "^", "!", "~", "&&", "||", "?", ":", "===", "==", ">=", "<=", "<", ">", "!=", "!==" ];
      Syntax = {
        AssignmentExpression: "AssignmentExpression",
        ArrayExpression: "ArrayExpression",
        BlockStatement: "BlockStatement",
        BinaryExpression: "BinaryExpression",
        BreakStatement: "BreakStatement",
        CallExpression: "CallExpression",
        CatchClause: "CatchClause",
        ConditionalExpression: "ConditionalExpression",
        ContinueStatement: "ContinueStatement",
        DoWhileStatement: "DoWhileStatement",
        DebuggerStatement: "DebuggerStatement",
        EmptyStatement: "EmptyStatement",
        ExpressionStatement: "ExpressionStatement",
        ForStatement: "ForStatement",
        ForInStatement: "ForInStatement",
        FunctionDeclaration: "FunctionDeclaration",
        FunctionExpression: "FunctionExpression",
        Identifier: "Identifier",
        IfStatement: "IfStatement",
        Literal: "Literal",
        LabeledStatement: "LabeledStatement",
        LogicalExpression: "LogicalExpression",
        MemberExpression: "MemberExpression",
        NewExpression: "NewExpression",
        ObjectExpression: "ObjectExpression",
        Program: "Program",
        Property: "Property",
        ReturnStatement: "ReturnStatement",
        SequenceExpression: "SequenceExpression",
        SwitchStatement: "SwitchStatement",
        SwitchCase: "SwitchCase",
        ThisExpression: "ThisExpression",
        ThrowStatement: "ThrowStatement",
        TryStatement: "TryStatement",
        UnaryExpression: "UnaryExpression",
        UpdateExpression: "UpdateExpression",
        VariableDeclaration: "VariableDeclaration",
        VariableDeclarator: "VariableDeclarator",
        WhileStatement: "WhileStatement",
        WithStatement: "WithStatement"
      };
      PropertyKind = {
        Data: 1,
        Get: 2,
        Set: 4
      };
      Messages = {
        UnexpectedToken: "Unexpected token %0",
        UnexpectedNumber: "Unexpected number",
        UnexpectedString: "Unexpected string",
        UnexpectedIdentifier: "Unexpected identifier",
        UnexpectedReserved: "Unexpected reserved word",
        UnexpectedEOS: "Unexpected end of input",
        NewlineAfterThrow: "Illegal newline after throw",
        InvalidRegExp: "Invalid regular expression",
        UnterminatedRegExp: "Invalid regular expression: missing /",
        InvalidLHSInAssignment: "Invalid left-hand side in assignment",
        InvalidLHSInForIn: "Invalid left-hand side in for-in",
        MultipleDefaultsInSwitch: "More than one default clause in switch statement",
        NoCatchOrFinally: "Missing catch or finally after try",
        UnknownLabel: "Undefined label '%0'",
        Redeclaration: "%0 '%1' has already been declared",
        IllegalContinue: "Illegal continue statement",
        IllegalBreak: "Illegal break statement",
        IllegalReturn: "Illegal return statement",
        StrictModeWith: "Strict mode code may not include a with statement",
        StrictCatchVariable: "Catch variable may not be eval or arguments in strict mode",
        StrictVarName: "Variable name may not be eval or arguments in strict mode",
        StrictParamName: "Parameter name eval or arguments is not allowed in strict mode",
        StrictParamDupe: "Strict mode function may not have duplicate parameter names",
        StrictFunctionName: "Function name may not be eval or arguments in strict mode",
        StrictOctalLiteral: "Octal literals are not allowed in strict mode.",
        StrictDelete: "Delete of an unqualified identifier in strict mode.",
        StrictDuplicateProperty: "Duplicate data property in object literal not allowed in strict mode",
        AccessorDataProperty: "Object literal may not have data and accessor property with the same name",
        AccessorGetSet: "Object literal may not have multiple get/set accessors with the same name",
        StrictLHSAssignment: "Assignment to eval or arguments is not allowed in strict mode",
        StrictLHSPostfix: "Postfix increment/decrement may not have eval or arguments operand in strict mode",
        StrictLHSPrefix: "Prefix increment/decrement may not have eval or arguments operand in strict mode",
        StrictReservedWord: "Use of future reserved word in strict mode"
      };
      Regex = {
        NonAsciiIdentifierStart: new RegExp("[ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛰᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〇〡-〩〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ]"),
        NonAsciiIdentifierPart: new RegExp("[ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮ̀-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁ҃-҇Ҋ-ԧԱ-Ֆՙա-և֑-ׇֽֿׁׂׅׄא-תװ-ײؐ-ؚؠ-٩ٮ-ۓە-ۜ۟-۪ۨ-ۼۿܐ-݊ݍ-ޱ߀-ߵߺࠀ-࠭ࡀ-࡛ࢠࢢ-ࢬࣤ-ࣾऀ-ॣ०-९ॱ-ॷॹ-ॿঁ-ঃঅ-ঌএঐও-নপ-রলশ-হ়-ৄেৈো-ৎৗড়ঢ়য়-ৣ০-ৱਁ-ਃਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹ਼ਾ-ੂੇੈੋ-੍ੑਖ਼-ੜਫ਼੦-ੵઁ-ઃઅ-ઍએ-ઑઓ-નપ-રલળવ-હ઼-ૅે-ૉો-્ૐૠ-ૣ૦-૯ଁ-ଃଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହ଼-ୄେୈୋ-୍ୖୗଡ଼ଢ଼ୟ-ୣ୦-୯ୱஂஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹா-ூெ-ைொ-்ௐௗ௦-௯ఁ-ఃఅ-ఌఎ-ఐఒ-నప-ళవ-హఽ-ౄె-ైొ-్ౕౖౘౙౠ-ౣ౦-౯ಂಃಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹ಼-ೄೆ-ೈೊ-್ೕೖೞೠ-ೣ೦-೯ೱೲംഃഅ-ഌഎ-ഐഒ-ഺഽ-ൄെ-ൈൊ-ൎൗൠ-ൣ൦-൯ൺ-ൿංඃඅ-ඖක-නඳ-රලව-ෆ්ා-ුූෘ-ෟෲෳก-ฺเ-๎๐-๙ກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ູົ-ຽເ-ໄໆ່-ໍ໐-໙ໜ-ໟༀ༘༙༠-༩༹༵༷༾-ཇཉ-ཬཱ-྄྆-ྗྙ-ྼ࿆က-၉ၐ-ႝႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ፝-፟ᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛰᜀ-ᜌᜎ-᜔ᜠ-᜴ᝀ-ᝓᝠ-ᝬᝮ-ᝰᝲᝳក-៓ៗៜ៝០-៩᠋-᠍᠐-᠙ᠠ-ᡷᢀ-ᢪᢰ-ᣵᤀ-ᤜᤠ-ᤫᤰ-᤻᥆-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉ᧐-᧙ᨀ-ᨛᨠ-ᩞ᩠-᩿᩼-᪉᪐-᪙ᪧᬀ-ᭋ᭐-᭙᭫-᭳ᮀ-᯳ᰀ-᰷᱀-᱉ᱍ-ᱽ᳐-᳔᳒-ᳶᴀ-ᷦ᷼-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼ‌‍‿⁀⁔ⁱⁿₐ-ₜ⃐-⃥⃜⃡-⃰ℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯ⵿-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⷠ-ⷿⸯ々-〇〡-〯〱-〵〸-〼ぁ-ゖ゙゚ゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘫꙀ-꙯ꙴ-꙽ꙿ-ꚗꚟ-꛱ꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠧꡀ-ꡳꢀ-꣄꣐-꣙꣠-ꣷꣻ꤀-꤭ꤰ-꥓ꥠ-ꥼꦀ-꧀ꧏ-꧙ꨀ-ꨶꩀ-ꩍ꩐-꩙ꩠ-ꩶꩺꩻꪀ-ꫂꫛ-ꫝꫠ-ꫯꫲ-꫶ꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯪ꯬꯭꯰-꯹가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻ︀-️︠-︦︳︴﹍-﹏ﹰ-ﹴﹶ-ﻼ０-９Ａ-Ｚ＿ａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ]")
      };
      function assert(condition, message) {
        if (!condition) {
          throw new Error("ASSERT: " + message);
        }
      }
      function isDecimalDigit(ch) {
        return ch >= 48 && ch <= 57;
      }
      function isHexDigit(ch) {
        return "0123456789abcdefABCDEF".indexOf(ch) >= 0;
      }
      function isOctalDigit(ch) {
        return "01234567".indexOf(ch) >= 0;
      }
      function isWhiteSpace(ch) {
        return ch === 32 || ch === 9 || ch === 11 || ch === 12 || ch === 160 || ch >= 5760 && [ 5760, 6158, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279 ].indexOf(ch) >= 0;
      }
      function isLineTerminator(ch) {
        return ch === 10 || ch === 13 || ch === 8232 || ch === 8233;
      }
      function isIdentifierStart(ch) {
        return ch === 36 || ch === 95 || ch >= 65 && ch <= 90 || ch >= 97 && ch <= 122 || ch === 92 || ch >= 128 && Regex.NonAsciiIdentifierStart.test(String.fromCharCode(ch));
      }
      function isIdentifierPart(ch) {
        return ch === 36 || ch === 95 || ch >= 65 && ch <= 90 || ch >= 97 && ch <= 122 || ch >= 48 && ch <= 57 || ch === 92 || ch >= 128 && Regex.NonAsciiIdentifierPart.test(String.fromCharCode(ch));
      }
      function isFutureReservedWord(id) {
        switch (id) {
          case "class":
          case "enum":
          case "export":
          case "extends":
          case "import":
          case "super":
            return true;
          default:
            return false;
        }
      }
      function isStrictModeReservedWord(id) {
        switch (id) {
          case "implements":
          case "interface":
          case "package":
          case "private":
          case "protected":
          case "public":
          case "static":
          case "yield":
          case "let":
            return true;
          default:
            return false;
        }
      }
      function isRestrictedWord(id) {
        return id === "eval" || id === "arguments";
      }
      function isKeyword(id) {
        if (strict && isStrictModeReservedWord(id)) {
          return true;
        }
        switch (id.length) {
          case 2:
            return id === "if" || id === "in" || id === "do";
          case 3:
            return id === "var" || id === "for" || id === "new" || id === "try" || id === "let";
          case 4:
            return id === "this" || id === "else" || id === "case" || id === "void" || id === "with" || id === "enum";
          case 5:
            return id === "while" || id === "break" || id === "catch" || id === "throw" || id === "const" || id === "yield" || id === "class" || id === "super";
          case 6:
            return id === "return" || id === "typeof" || id === "delete" || id === "switch" || id === "export" || id === "import";
          case 7:
            return id === "default" || id === "finally" || id === "extends";
          case 8:
            return id === "function" || id === "continue" || id === "debugger";
          case 10:
            return id === "instanceof";
          default:
            return false;
        }
      }
      function addComment(type, value, start, end, loc) {
        var comment, attacher;
        assert(typeof start === "number", "Comment must have valid position");
        if (state.lastCommentStart >= start) {
          return;
        }
        state.lastCommentStart = start;
        comment = {
          type: type,
          value: value
        };
        if (extra.range) {
          comment.range = [ start, end ];
        }
        if (extra.loc) {
          comment.loc = loc;
        }
        extra.comments.push(comment);
        if (extra.attachComment) {
          extra.leadingComments.push(comment);
          extra.trailingComments.push(comment);
        }
      }
      function skipSingleLineComment(offset) {
        var start, loc, ch, comment;
        start = index - offset;
        loc = {
          start: {
            line: lineNumber,
            column: index - lineStart - offset
          }
        };
        while (index < length) {
          ch = source.charCodeAt(index);
          ++index;
          if (isLineTerminator(ch)) {
            if (extra.comments) {
              comment = source.slice(start + offset, index - 1);
              loc.end = {
                line: lineNumber,
                column: index - lineStart - 1
              };
              addComment("Line", comment, start, index - 1, loc);
            }
            if (ch === 13 && source.charCodeAt(index) === 10) {
              ++index;
            }
            ++lineNumber;
            lineStart = index;
            return;
          }
        }
        if (extra.comments) {
          comment = source.slice(start + offset, index);
          loc.end = {
            line: lineNumber,
            column: index - lineStart
          };
          addComment("Line", comment, start, index, loc);
        }
      }
      function skipMultiLineComment() {
        var start, loc, ch, comment;
        if (extra.comments) {
          start = index - 2;
          loc = {
            start: {
              line: lineNumber,
              column: index - lineStart - 2
            }
          };
        }
        while (index < length) {
          ch = source.charCodeAt(index);
          if (isLineTerminator(ch)) {
            if (ch === 13 && source.charCodeAt(index + 1) === 10) {
              ++index;
            }
            ++lineNumber;
            ++index;
            lineStart = index;
            if (index >= length) {
              throwError({}, Messages.UnexpectedToken, "ILLEGAL");
            }
          } else if (ch === 42) {
            if (source.charCodeAt(index + 1) === 47) {
              ++index;
              ++index;
              if (extra.comments) {
                comment = source.slice(start + 2, index - 2);
                loc.end = {
                  line: lineNumber,
                  column: index - lineStart
                };
                addComment("Block", comment, start, index, loc);
              }
              return;
            }
            ++index;
          } else {
            ++index;
          }
        }
        throwError({}, Messages.UnexpectedToken, "ILLEGAL");
      }
      function skipComment() {
        var ch, start;
        start = index === 0;
        while (index < length) {
          ch = source.charCodeAt(index);
          if (isWhiteSpace(ch)) {
            ++index;
          } else if (isLineTerminator(ch)) {
            ++index;
            if (ch === 13 && source.charCodeAt(index) === 10) {
              ++index;
            }
            ++lineNumber;
            lineStart = index;
            start = true;
          } else if (ch === 47) {
            ch = source.charCodeAt(index + 1);
            if (ch === 47) {
              ++index;
              ++index;
              skipSingleLineComment(2);
              start = true;
            } else if (ch === 42) {
              ++index;
              ++index;
              skipMultiLineComment();
            } else {
              break;
            }
          } else if (start && ch === 45) {
            if (source.charCodeAt(index + 1) === 45 && source.charCodeAt(index + 2) === 62) {
              index += 3;
              skipSingleLineComment(3);
            } else {
              break;
            }
          } else if (ch === 60) {
            if (source.slice(index + 1, index + 4) === "!--") {
              ++index;
              ++index;
              ++index;
              ++index;
              skipSingleLineComment(4);
            } else {
              break;
            }
          } else {
            break;
          }
        }
      }
      function scanHexEscape(prefix) {
        var i, len, ch, code = 0;
        len = prefix === "u" ? 4 : 2;
        for (i = 0; i < len; ++i) {
          if (index < length && isHexDigit(source[index])) {
            ch = source[index++];
            code = code * 16 + "0123456789abcdef".indexOf(ch.toLowerCase());
          } else {
            return "";
          }
        }
        return String.fromCharCode(code);
      }
      function getEscapedIdentifier() {
        var ch, id;
        ch = source.charCodeAt(index++);
        id = String.fromCharCode(ch);
        if (ch === 92) {
          if (source.charCodeAt(index) !== 117) {
            throwError({}, Messages.UnexpectedToken, "ILLEGAL");
          }
          ++index;
          ch = scanHexEscape("u");
          if (!ch || ch === "\\" || !isIdentifierStart(ch.charCodeAt(0))) {
            throwError({}, Messages.UnexpectedToken, "ILLEGAL");
          }
          id = ch;
        }
        while (index < length) {
          ch = source.charCodeAt(index);
          if (!isIdentifierPart(ch)) {
            break;
          }
          ++index;
          id += String.fromCharCode(ch);
          if (ch === 92) {
            id = id.substr(0, id.length - 1);
            if (source.charCodeAt(index) !== 117) {
              throwError({}, Messages.UnexpectedToken, "ILLEGAL");
            }
            ++index;
            ch = scanHexEscape("u");
            if (!ch || ch === "\\" || !isIdentifierPart(ch.charCodeAt(0))) {
              throwError({}, Messages.UnexpectedToken, "ILLEGAL");
            }
            id += ch;
          }
        }
        return id;
      }
      function getIdentifier() {
        var start, ch;
        start = index++;
        while (index < length) {
          ch = source.charCodeAt(index);
          if (ch === 92) {
            index = start;
            return getEscapedIdentifier();
          }
          if (isIdentifierPart(ch)) {
            ++index;
          } else {
            break;
          }
        }
        return source.slice(start, index);
      }
      function scanIdentifier() {
        var start, id, type;
        start = index;
        id = source.charCodeAt(index) === 92 ? getEscapedIdentifier() : getIdentifier();
        if (id.length === 1) {
          type = Token.Identifier;
        } else if (isKeyword(id)) {
          type = Token.Keyword;
        } else if (id === "null") {
          type = Token.NullLiteral;
        } else if (id === "true" || id === "false") {
          type = Token.BooleanLiteral;
        } else {
          type = Token.Identifier;
        }
        return {
          type: type,
          value: id,
          lineNumber: lineNumber,
          lineStart: lineStart,
          start: start,
          end: index
        };
      }
      function scanPunctuator() {
        var start = index, code = source.charCodeAt(index), code2, ch1 = source[index], ch2, ch3, ch4;
        switch (code) {
          case 46:
          case 40:
          case 41:
          case 59:
          case 44:
          case 123:
          case 125:
          case 91:
          case 93:
          case 58:
          case 63:
          case 126:
            ++index;
            if (extra.tokenize) {
              if (code === 40) {
                extra.openParenToken = extra.tokens.length;
              } else if (code === 123) {
                extra.openCurlyToken = extra.tokens.length;
              }
            }
            return {
              type: Token.Punctuator,
              value: String.fromCharCode(code),
              lineNumber: lineNumber,
              lineStart: lineStart,
              start: start,
              end: index
            };
          default:
            code2 = source.charCodeAt(index + 1);
            if (code2 === 61) {
              switch (code) {
                case 43:
                case 45:
                case 47:
                case 60:
                case 62:
                case 94:
                case 124:
                case 37:
                case 38:
                case 42:
                  index += 2;
                  return {
                    type: Token.Punctuator,
                    value: String.fromCharCode(code) + String.fromCharCode(code2),
                    lineNumber: lineNumber,
                    lineStart: lineStart,
                    start: start,
                    end: index
                  };
                case 33:
                case 61:
                  index += 2;
                  if (source.charCodeAt(index) === 61) {
                    ++index;
                  }
                  return {
                    type: Token.Punctuator,
                    value: source.slice(start, index),
                    lineNumber: lineNumber,
                    lineStart: lineStart,
                    start: start,
                    end: index
                  };
              }
            }
        }
        ch4 = source.substr(index, 4);
        if (ch4 === ">>>=") {
          index += 4;
          return {
            type: Token.Punctuator,
            value: ch4,
            lineNumber: lineNumber,
            lineStart: lineStart,
            start: start,
            end: index
          };
        }
        ch3 = ch4.substr(0, 3);
        if (ch3 === ">>>" || ch3 === "<<=" || ch3 === ">>=") {
          index += 3;
          return {
            type: Token.Punctuator,
            value: ch3,
            lineNumber: lineNumber,
            lineStart: lineStart,
            start: start,
            end: index
          };
        }
        ch2 = ch3.substr(0, 2);
        if (ch1 === ch2[1] && "+-<>&|".indexOf(ch1) >= 0 || ch2 === "=>") {
          index += 2;
          return {
            type: Token.Punctuator,
            value: ch2,
            lineNumber: lineNumber,
            lineStart: lineStart,
            start: start,
            end: index
          };
        }
        if ("<>=!+-*%&|^/".indexOf(ch1) >= 0) {
          ++index;
          return {
            type: Token.Punctuator,
            value: ch1,
            lineNumber: lineNumber,
            lineStart: lineStart,
            start: start,
            end: index
          };
        }
        throwError({}, Messages.UnexpectedToken, "ILLEGAL");
      }
      function scanHexLiteral(start) {
        var number = "";
        while (index < length) {
          if (!isHexDigit(source[index])) {
            break;
          }
          number += source[index++];
        }
        if (number.length === 0) {
          throwError({}, Messages.UnexpectedToken, "ILLEGAL");
        }
        if (isIdentifierStart(source.charCodeAt(index))) {
          throwError({}, Messages.UnexpectedToken, "ILLEGAL");
        }
        return {
          type: Token.NumericLiteral,
          value: parseInt("0x" + number, 16),
          lineNumber: lineNumber,
          lineStart: lineStart,
          start: start,
          end: index
        };
      }
      function scanOctalLiteral(start) {
        var number = "0" + source[index++];
        while (index < length) {
          if (!isOctalDigit(source[index])) {
            break;
          }
          number += source[index++];
        }
        if (isIdentifierStart(source.charCodeAt(index)) || isDecimalDigit(source.charCodeAt(index))) {
          throwError({}, Messages.UnexpectedToken, "ILLEGAL");
        }
        return {
          type: Token.NumericLiteral,
          value: parseInt(number, 8),
          octal: true,
          lineNumber: lineNumber,
          lineStart: lineStart,
          start: start,
          end: index
        };
      }
      function scanNumericLiteral() {
        var number, start, ch;
        ch = source[index];
        assert(isDecimalDigit(ch.charCodeAt(0)) || ch === ".", "Numeric literal must start with a decimal digit or a decimal point");
        start = index;
        number = "";
        if (ch !== ".") {
          number = source[index++];
          ch = source[index];
          if (number === "0") {
            if (ch === "x" || ch === "X") {
              ++index;
              return scanHexLiteral(start);
            }
            if (isOctalDigit(ch)) {
              return scanOctalLiteral(start);
            }
            if (ch && isDecimalDigit(ch.charCodeAt(0))) {
              throwError({}, Messages.UnexpectedToken, "ILLEGAL");
            }
          }
          while (isDecimalDigit(source.charCodeAt(index))) {
            number += source[index++];
          }
          ch = source[index];
        }
        if (ch === ".") {
          number += source[index++];
          while (isDecimalDigit(source.charCodeAt(index))) {
            number += source[index++];
          }
          ch = source[index];
        }
        if (ch === "e" || ch === "E") {
          number += source[index++];
          ch = source[index];
          if (ch === "+" || ch === "-") {
            number += source[index++];
          }
          if (isDecimalDigit(source.charCodeAt(index))) {
            while (isDecimalDigit(source.charCodeAt(index))) {
              number += source[index++];
            }
          } else {
            throwError({}, Messages.UnexpectedToken, "ILLEGAL");
          }
        }
        if (isIdentifierStart(source.charCodeAt(index))) {
          throwError({}, Messages.UnexpectedToken, "ILLEGAL");
        }
        return {
          type: Token.NumericLiteral,
          value: parseFloat(number),
          lineNumber: lineNumber,
          lineStart: lineStart,
          start: start,
          end: index
        };
      }
      function scanStringLiteral() {
        var str = "", quote, start, ch, code, unescaped, restore, octal = false, startLineNumber, startLineStart;
        startLineNumber = lineNumber;
        startLineStart = lineStart;
        quote = source[index];
        assert(quote === "'" || quote === '"', "String literal must starts with a quote");
        start = index;
        ++index;
        while (index < length) {
          ch = source[index++];
          if (ch === quote) {
            quote = "";
            break;
          } else if (ch === "\\") {
            ch = source[index++];
            if (!ch || !isLineTerminator(ch.charCodeAt(0))) {
              switch (ch) {
                case "u":
                case "x":
                  restore = index;
                  unescaped = scanHexEscape(ch);
                  if (unescaped) {
                    str += unescaped;
                  } else {
                    index = restore;
                    str += ch;
                  }
                  break;
                case "n":
                  str += "\n";
                  break;
                case "r":
                  str += "\r";
                  break;
                case "t":
                  str += "	";
                  break;
                case "b":
                  str += "\b";
                  break;
                case "f":
                  str += "\f";
                  break;
                case "v":
                  str += "";
                  break;
                default:
                  if (isOctalDigit(ch)) {
                    code = "01234567".indexOf(ch);
                    if (code !== 0) {
                      octal = true;
                    }
                    if (index < length && isOctalDigit(source[index])) {
                      octal = true;
                      code = code * 8 + "01234567".indexOf(source[index++]);
                      if ("0123".indexOf(ch) >= 0 && index < length && isOctalDigit(source[index])) {
                        code = code * 8 + "01234567".indexOf(source[index++]);
                      }
                    }
                    str += String.fromCharCode(code);
                  } else {
                    str += ch;
                  }
                  break;
              }
            } else {
              ++lineNumber;
              if (ch === "\r" && source[index] === "\n") {
                ++index;
              }
              lineStart = index;
            }
          } else if (isLineTerminator(ch.charCodeAt(0))) {
            break;
          } else {
            str += ch;
          }
        }
        if (quote !== "") {
          throwError({}, Messages.UnexpectedToken, "ILLEGAL");
        }
        return {
          type: Token.StringLiteral,
          value: str,
          octal: octal,
          startLineNumber: startLineNumber,
          startLineStart: startLineStart,
          lineNumber: lineNumber,
          lineStart: lineStart,
          start: start,
          end: index
        };
      }
      function testRegExp(pattern, flags) {
        var value;
        try {
          value = new RegExp(pattern, flags);
        } catch (e) {
          throwError({}, Messages.InvalidRegExp);
        }
        return value;
      }
      function scanRegExpBody() {
        var ch, str, classMarker, terminated, body;
        ch = source[index];
        assert(ch === "/", "Regular expression literal must start with a slash");
        str = source[index++];
        classMarker = false;
        terminated = false;
        while (index < length) {
          ch = source[index++];
          str += ch;
          if (ch === "\\") {
            ch = source[index++];
            if (isLineTerminator(ch.charCodeAt(0))) {
              throwError({}, Messages.UnterminatedRegExp);
            }
            str += ch;
          } else if (isLineTerminator(ch.charCodeAt(0))) {
            throwError({}, Messages.UnterminatedRegExp);
          } else if (classMarker) {
            if (ch === "]") {
              classMarker = false;
            }
          } else {
            if (ch === "/") {
              terminated = true;
              break;
            } else if (ch === "[") {
              classMarker = true;
            }
          }
        }
        if (!terminated) {
          throwError({}, Messages.UnterminatedRegExp);
        }
        body = str.substr(1, str.length - 2);
        return {
          value: body,
          literal: str
        };
      }
      function scanRegExpFlags() {
        var ch, str, flags, restore;
        str = "";
        flags = "";
        while (index < length) {
          ch = source[index];
          if (!isIdentifierPart(ch.charCodeAt(0))) {
            break;
          }
          ++index;
          if (ch === "\\" && index < length) {
            ch = source[index];
            if (ch === "u") {
              ++index;
              restore = index;
              ch = scanHexEscape("u");
              if (ch) {
                flags += ch;
                for (str += "\\u"; restore < index; ++restore) {
                  str += source[restore];
                }
              } else {
                index = restore;
                flags += "u";
                str += "\\u";
              }
              throwErrorTolerant({}, Messages.UnexpectedToken, "ILLEGAL");
            } else {
              str += "\\";
              throwErrorTolerant({}, Messages.UnexpectedToken, "ILLEGAL");
            }
          } else {
            flags += ch;
            str += ch;
          }
        }
        return {
          value: flags,
          literal: str
        };
      }
      function scanRegExp() {
        var start, body, flags, pattern, value;
        lookahead = null;
        skipComment();
        start = index;
        body = scanRegExpBody();
        flags = scanRegExpFlags();
        value = testRegExp(body.value, flags.value);
        if (extra.tokenize) {
          return {
            type: Token.RegularExpression,
            value: value,
            lineNumber: lineNumber,
            lineStart: lineStart,
            start: start,
            end: index
          };
        }
        return {
          literal: body.literal + flags.literal,
          value: value,
          start: start,
          end: index
        };
      }
      function collectRegex() {
        var pos, loc, regex, token;
        skipComment();
        pos = index;
        loc = {
          start: {
            line: lineNumber,
            column: index - lineStart
          }
        };
        regex = scanRegExp();
        loc.end = {
          line: lineNumber,
          column: index - lineStart
        };
        if (!extra.tokenize) {
          if (extra.tokens.length > 0) {
            token = extra.tokens[extra.tokens.length - 1];
            if (token.range[0] === pos && token.type === "Punctuator") {
              if (token.value === "/" || token.value === "/=") {
                extra.tokens.pop();
              }
            }
          }
          extra.tokens.push({
            type: "RegularExpression",
            value: regex.literal,
            range: [ pos, index ],
            loc: loc
          });
        }
        return regex;
      }
      function isIdentifierName(token) {
        return token.type === Token.Identifier || token.type === Token.Keyword || token.type === Token.BooleanLiteral || token.type === Token.NullLiteral;
      }
      function advanceSlash() {
        var prevToken, checkToken;
        prevToken = extra.tokens[extra.tokens.length - 1];
        if (!prevToken) {
          return collectRegex();
        }
        if (prevToken.type === "Punctuator") {
          if (prevToken.value === "]") {
            return scanPunctuator();
          }
          if (prevToken.value === ")") {
            checkToken = extra.tokens[extra.openParenToken - 1];
            if (checkToken && checkToken.type === "Keyword" && (checkToken.value === "if" || checkToken.value === "while" || checkToken.value === "for" || checkToken.value === "with")) {
              return collectRegex();
            }
            return scanPunctuator();
          }
          if (prevToken.value === "}") {
            if (extra.tokens[extra.openCurlyToken - 3] && extra.tokens[extra.openCurlyToken - 3].type === "Keyword") {
              checkToken = extra.tokens[extra.openCurlyToken - 4];
              if (!checkToken) {
                return scanPunctuator();
              }
            } else if (extra.tokens[extra.openCurlyToken - 4] && extra.tokens[extra.openCurlyToken - 4].type === "Keyword") {
              checkToken = extra.tokens[extra.openCurlyToken - 5];
              if (!checkToken) {
                return collectRegex();
              }
            } else {
              return scanPunctuator();
            }
            if (FnExprTokens.indexOf(checkToken.value) >= 0) {
              return scanPunctuator();
            }
            return collectRegex();
          }
          return collectRegex();
        }
        if (prevToken.type === "Keyword") {
          return collectRegex();
        }
        return scanPunctuator();
      }
      function advance() {
        var ch;
        skipComment();
        if (index >= length) {
          return {
            type: Token.EOF,
            lineNumber: lineNumber,
            lineStart: lineStart,
            start: index,
            end: index
          };
        }
        ch = source.charCodeAt(index);
        if (isIdentifierStart(ch)) {
          return scanIdentifier();
        }
        if (ch === 40 || ch === 41 || ch === 59) {
          return scanPunctuator();
        }
        if (ch === 39 || ch === 34) {
          return scanStringLiteral();
        }
        if (ch === 46) {
          if (isDecimalDigit(source.charCodeAt(index + 1))) {
            return scanNumericLiteral();
          }
          return scanPunctuator();
        }
        if (isDecimalDigit(ch)) {
          return scanNumericLiteral();
        }
        if (extra.tokenize && ch === 47) {
          return advanceSlash();
        }
        return scanPunctuator();
      }
      function collectToken() {
        var loc, token, range, value;
        skipComment();
        loc = {
          start: {
            line: lineNumber,
            column: index - lineStart
          }
        };
        token = advance();
        loc.end = {
          line: lineNumber,
          column: index - lineStart
        };
        if (token.type !== Token.EOF) {
          value = source.slice(token.start, token.end);
          extra.tokens.push({
            type: TokenName[token.type],
            value: value,
            range: [ token.start, token.end ],
            loc: loc
          });
        }
        return token;
      }
      function lex() {
        var token;
        token = lookahead;
        index = token.end;
        lineNumber = token.lineNumber;
        lineStart = token.lineStart;
        lookahead = typeof extra.tokens !== "undefined" ? collectToken() : advance();
        index = token.end;
        lineNumber = token.lineNumber;
        lineStart = token.lineStart;
        return token;
      }
      function peek() {
        var pos, line, start;
        pos = index;
        line = lineNumber;
        start = lineStart;
        lookahead = typeof extra.tokens !== "undefined" ? collectToken() : advance();
        index = pos;
        lineNumber = line;
        lineStart = start;
      }
      function Position(line, column) {
        this.line = line;
        this.column = column;
      }
      function SourceLocation(startLine, startColumn, line, column) {
        this.start = new Position(startLine, startColumn);
        this.end = new Position(line, column);
      }
      SyntaxTreeDelegate = {
        name: "SyntaxTree",
        processComment: function(node) {
          var lastChild, trailingComments;
          if (node.type === Syntax.Program) {
            if (node.body.length > 0) {
              return;
            }
          }
          if (extra.trailingComments.length > 0) {
            if (extra.trailingComments[0].range[0] >= node.range[1]) {
              trailingComments = extra.trailingComments;
              extra.trailingComments = [];
            } else {
              extra.trailingComments.length = 0;
            }
          } else {
            if (extra.bottomRightStack.length > 0 && extra.bottomRightStack[extra.bottomRightStack.length - 1].trailingComments && extra.bottomRightStack[extra.bottomRightStack.length - 1].trailingComments[0].range[0] >= node.range[1]) {
              trailingComments = extra.bottomRightStack[extra.bottomRightStack.length - 1].trailingComments;
              delete extra.bottomRightStack[extra.bottomRightStack.length - 1].trailingComments;
            }
          }
          while (extra.bottomRightStack.length > 0 && extra.bottomRightStack[extra.bottomRightStack.length - 1].range[0] >= node.range[0]) {
            lastChild = extra.bottomRightStack.pop();
          }
          if (lastChild) {
            if (lastChild.leadingComments && lastChild.leadingComments[lastChild.leadingComments.length - 1].range[1] <= node.range[0]) {
              node.leadingComments = lastChild.leadingComments;
              delete lastChild.leadingComments;
            }
          } else if (extra.leadingComments.length > 0 && extra.leadingComments[extra.leadingComments.length - 1].range[1] <= node.range[0]) {
            node.leadingComments = extra.leadingComments;
            extra.leadingComments = [];
          }
          if (trailingComments) {
            node.trailingComments = trailingComments;
          }
          extra.bottomRightStack.push(node);
        },
        markEnd: function(node, startToken) {
          if (extra.range) {
            node.range = [ startToken.start, index ];
          }
          if (extra.loc) {
            node.loc = new SourceLocation(startToken.startLineNumber === undefined ? startToken.lineNumber : startToken.startLineNumber, startToken.start - (startToken.startLineStart === undefined ? startToken.lineStart : startToken.startLineStart), lineNumber, index - lineStart);
            this.postProcess(node);
          }
          if (extra.attachComment) {
            this.processComment(node);
          }
          return node;
        },
        postProcess: function(node) {
          if (extra.source) {
            node.loc.source = extra.source;
          }
          return node;
        },
        createArrayExpression: function(elements) {
          return {
            type: Syntax.ArrayExpression,
            elements: elements
          };
        },
        createAssignmentExpression: function(operator, left, right) {
          return {
            type: Syntax.AssignmentExpression,
            operator: operator,
            left: left,
            right: right
          };
        },
        createBinaryExpression: function(operator, left, right) {
          var type = operator === "||" || operator === "&&" ? Syntax.LogicalExpression : Syntax.BinaryExpression;
          return {
            type: type,
            operator: operator,
            left: left,
            right: right
          };
        },
        createBlockStatement: function(body) {
          return {
            type: Syntax.BlockStatement,
            body: body
          };
        },
        createBreakStatement: function(label) {
          return {
            type: Syntax.BreakStatement,
            label: label
          };
        },
        createCallExpression: function(callee, args) {
          return {
            type: Syntax.CallExpression,
            callee: callee,
            arguments: args
          };
        },
        createCatchClause: function(param, body) {
          return {
            type: Syntax.CatchClause,
            param: param,
            body: body
          };
        },
        createConditionalExpression: function(test, consequent, alternate) {
          return {
            type: Syntax.ConditionalExpression,
            test: test,
            consequent: consequent,
            alternate: alternate
          };
        },
        createContinueStatement: function(label) {
          return {
            type: Syntax.ContinueStatement,
            label: label
          };
        },
        createDebuggerStatement: function() {
          return {
            type: Syntax.DebuggerStatement
          };
        },
        createDoWhileStatement: function(body, test) {
          return {
            type: Syntax.DoWhileStatement,
            body: body,
            test: test
          };
        },
        createEmptyStatement: function() {
          return {
            type: Syntax.EmptyStatement
          };
        },
        createExpressionStatement: function(expression) {
          return {
            type: Syntax.ExpressionStatement,
            expression: expression
          };
        },
        createForStatement: function(init, test, update, body) {
          return {
            type: Syntax.ForStatement,
            init: init,
            test: test,
            update: update,
            body: body
          };
        },
        createForInStatement: function(left, right, body) {
          return {
            type: Syntax.ForInStatement,
            left: left,
            right: right,
            body: body,
            each: false
          };
        },
        createFunctionDeclaration: function(id, params, defaults, body) {
          return {
            type: Syntax.FunctionDeclaration,
            id: id,
            params: params,
            defaults: defaults,
            body: body,
            rest: null,
            generator: false,
            expression: false
          };
        },
        createFunctionExpression: function(id, params, defaults, body) {
          return {
            type: Syntax.FunctionExpression,
            id: id,
            params: params,
            defaults: defaults,
            body: body,
            rest: null,
            generator: false,
            expression: false
          };
        },
        createIdentifier: function(name) {
          return {
            type: Syntax.Identifier,
            name: name
          };
        },
        createIfStatement: function(test, consequent, alternate) {
          return {
            type: Syntax.IfStatement,
            test: test,
            consequent: consequent,
            alternate: alternate
          };
        },
        createLabeledStatement: function(label, body) {
          return {
            type: Syntax.LabeledStatement,
            label: label,
            body: body
          };
        },
        createLiteral: function(token) {
          return {
            type: Syntax.Literal,
            value: token.value,
            raw: source.slice(token.start, token.end)
          };
        },
        createMemberExpression: function(accessor, object, property) {
          return {
            type: Syntax.MemberExpression,
            computed: accessor === "[",
            object: object,
            property: property
          };
        },
        createNewExpression: function(callee, args) {
          return {
            type: Syntax.NewExpression,
            callee: callee,
            arguments: args
          };
        },
        createObjectExpression: function(properties) {
          return {
            type: Syntax.ObjectExpression,
            properties: properties
          };
        },
        createPostfixExpression: function(operator, argument) {
          return {
            type: Syntax.UpdateExpression,
            operator: operator,
            argument: argument,
            prefix: false
          };
        },
        createProgram: function(body) {
          return {
            type: Syntax.Program,
            body: body
          };
        },
        createProperty: function(kind, key, value) {
          return {
            type: Syntax.Property,
            key: key,
            value: value,
            kind: kind
          };
        },
        createReturnStatement: function(argument) {
          return {
            type: Syntax.ReturnStatement,
            argument: argument
          };
        },
        createSequenceExpression: function(expressions) {
          return {
            type: Syntax.SequenceExpression,
            expressions: expressions
          };
        },
        createSwitchCase: function(test, consequent) {
          return {
            type: Syntax.SwitchCase,
            test: test,
            consequent: consequent
          };
        },
        createSwitchStatement: function(discriminant, cases) {
          return {
            type: Syntax.SwitchStatement,
            discriminant: discriminant,
            cases: cases
          };
        },
        createThisExpression: function() {
          return {
            type: Syntax.ThisExpression
          };
        },
        createThrowStatement: function(argument) {
          return {
            type: Syntax.ThrowStatement,
            argument: argument
          };
        },
        createTryStatement: function(block, guardedHandlers, handlers, finalizer) {
          return {
            type: Syntax.TryStatement,
            block: block,
            guardedHandlers: guardedHandlers,
            handlers: handlers,
            finalizer: finalizer
          };
        },
        createUnaryExpression: function(operator, argument) {
          if (operator === "++" || operator === "--") {
            return {
              type: Syntax.UpdateExpression,
              operator: operator,
              argument: argument,
              prefix: true
            };
          }
          return {
            type: Syntax.UnaryExpression,
            operator: operator,
            argument: argument,
            prefix: true
          };
        },
        createVariableDeclaration: function(declarations, kind) {
          return {
            type: Syntax.VariableDeclaration,
            declarations: declarations,
            kind: kind
          };
        },
        createVariableDeclarator: function(id, init) {
          return {
            type: Syntax.VariableDeclarator,
            id: id,
            init: init
          };
        },
        createWhileStatement: function(test, body) {
          return {
            type: Syntax.WhileStatement,
            test: test,
            body: body
          };
        },
        createWithStatement: function(object, body) {
          return {
            type: Syntax.WithStatement,
            object: object,
            body: body
          };
        }
      };
      function peekLineTerminator() {
        var pos, line, start, found;
        pos = index;
        line = lineNumber;
        start = lineStart;
        skipComment();
        found = lineNumber !== line;
        index = pos;
        lineNumber = line;
        lineStart = start;
        return found;
      }
      function throwError(token, messageFormat) {
        var error, args = Array.prototype.slice.call(arguments, 2), msg = messageFormat.replace(/%(\d)/g, function(whole, index) {
          assert(index < args.length, "Message reference must be in range");
          return args[index];
        });
        if (typeof token.lineNumber === "number") {
          error = new Error("Line " + token.lineNumber + ": " + msg);
          error.index = token.start;
          error.lineNumber = token.lineNumber;
          error.column = token.start - lineStart + 1;
        } else {
          error = new Error("Line " + lineNumber + ": " + msg);
          error.index = index;
          error.lineNumber = lineNumber;
          error.column = index - lineStart + 1;
        }
        error.description = msg;
        throw error;
      }
      function throwErrorTolerant() {
        try {
          throwError.apply(null, arguments);
        } catch (e) {
          if (extra.errors) {
            extra.errors.push(e);
          } else {
            throw e;
          }
        }
      }
      function throwUnexpected(token) {
        if (token.type === Token.EOF) {
          throwError(token, Messages.UnexpectedEOS);
        }
        if (token.type === Token.NumericLiteral) {
          throwError(token, Messages.UnexpectedNumber);
        }
        if (token.type === Token.StringLiteral) {
          throwError(token, Messages.UnexpectedString);
        }
        if (token.type === Token.Identifier) {
          throwError(token, Messages.UnexpectedIdentifier);
        }
        if (token.type === Token.Keyword) {
          if (isFutureReservedWord(token.value)) {
            throwError(token, Messages.UnexpectedReserved);
          } else if (strict && isStrictModeReservedWord(token.value)) {
            throwErrorTolerant(token, Messages.StrictReservedWord);
            return;
          }
          throwError(token, Messages.UnexpectedToken, token.value);
        }
        throwError(token, Messages.UnexpectedToken, token.value);
      }
      function expect(value) {
        var token = lex();
        if (token.type !== Token.Punctuator || token.value !== value) {
          throwUnexpected(token);
        }
      }
      function expectKeyword(keyword) {
        var token = lex();
        if (token.type !== Token.Keyword || token.value !== keyword) {
          throwUnexpected(token);
        }
      }
      function match(value) {
        return lookahead.type === Token.Punctuator && lookahead.value === value;
      }
      function matchKeyword(keyword) {
        return lookahead.type === Token.Keyword && lookahead.value === keyword;
      }
      function matchAssign() {
        var op;
        if (lookahead.type !== Token.Punctuator) {
          return false;
        }
        op = lookahead.value;
        return op === "=" || op === "*=" || op === "/=" || op === "%=" || op === "+=" || op === "-=" || op === "<<=" || op === ">>=" || op === ">>>=" || op === "&=" || op === "^=" || op === "|=";
      }
      function consumeSemicolon() {
        var line;
        if (source.charCodeAt(index) === 59 || match(";")) {
          lex();
          return;
        }
        line = lineNumber;
        skipComment();
        if (lineNumber !== line) {
          return;
        }
        if (lookahead.type !== Token.EOF && !match("}")) {
          throwUnexpected(lookahead);
        }
      }
      function isLeftHandSide(expr) {
        return expr.type === Syntax.Identifier || expr.type === Syntax.MemberExpression;
      }
      function parseArrayInitialiser() {
        var elements = [], startToken;
        startToken = lookahead;
        expect("[");
        while (!match("]")) {
          if (match(",")) {
            lex();
            elements.push(null);
          } else {
            elements.push(parseAssignmentExpression());
            if (!match("]")) {
              expect(",");
            }
          }
        }
        lex();
        return delegate.markEnd(delegate.createArrayExpression(elements), startToken);
      }
      function parsePropertyFunction(param, first) {
        var previousStrict, body, startToken;
        previousStrict = strict;
        startToken = lookahead;
        body = parseFunctionSourceElements();
        if (first && strict && isRestrictedWord(param[0].name)) {
          throwErrorTolerant(first, Messages.StrictParamName);
        }
        strict = previousStrict;
        return delegate.markEnd(delegate.createFunctionExpression(null, param, [], body), startToken);
      }
      function parseObjectPropertyKey() {
        var token, startToken;
        startToken = lookahead;
        token = lex();
        if (token.type === Token.StringLiteral || token.type === Token.NumericLiteral) {
          if (strict && token.octal) {
            throwErrorTolerant(token, Messages.StrictOctalLiteral);
          }
          return delegate.markEnd(delegate.createLiteral(token), startToken);
        }
        return delegate.markEnd(delegate.createIdentifier(token.value), startToken);
      }
      function parseObjectProperty() {
        var token, key, id, value, param, startToken;
        token = lookahead;
        startToken = lookahead;
        if (token.type === Token.Identifier) {
          id = parseObjectPropertyKey();
          if (token.value === "get" && !match(":")) {
            key = parseObjectPropertyKey();
            expect("(");
            expect(")");
            value = parsePropertyFunction([]);
            return delegate.markEnd(delegate.createProperty("get", key, value), startToken);
          }
          if (token.value === "set" && !match(":")) {
            key = parseObjectPropertyKey();
            expect("(");
            token = lookahead;
            if (token.type !== Token.Identifier) {
              expect(")");
              throwErrorTolerant(token, Messages.UnexpectedToken, token.value);
              value = parsePropertyFunction([]);
            } else {
              param = [ parseVariableIdentifier() ];
              expect(")");
              value = parsePropertyFunction(param, token);
            }
            return delegate.markEnd(delegate.createProperty("set", key, value), startToken);
          }
          expect(":");
          value = parseAssignmentExpression();
          return delegate.markEnd(delegate.createProperty("init", id, value), startToken);
        }
        if (token.type === Token.EOF || token.type === Token.Punctuator) {
          throwUnexpected(token);
        } else {
          key = parseObjectPropertyKey();
          expect(":");
          value = parseAssignmentExpression();
          return delegate.markEnd(delegate.createProperty("init", key, value), startToken);
        }
      }
      function parseObjectInitialiser() {
        var properties = [], property, name, key, kind, map = {}, toString = String, startToken;
        startToken = lookahead;
        expect("{");
        while (!match("}")) {
          property = parseObjectProperty();
          if (property.key.type === Syntax.Identifier) {
            name = property.key.name;
          } else {
            name = toString(property.key.value);
          }
          kind = property.kind === "init" ? PropertyKind.Data : property.kind === "get" ? PropertyKind.Get : PropertyKind.Set;
          key = "$" + name;
          if (Object.prototype.hasOwnProperty.call(map, key)) {
            if (map[key] === PropertyKind.Data) {
              if (strict && kind === PropertyKind.Data) {
                throwErrorTolerant({}, Messages.StrictDuplicateProperty);
              } else if (kind !== PropertyKind.Data) {
                throwErrorTolerant({}, Messages.AccessorDataProperty);
              }
            } else {
              if (kind === PropertyKind.Data) {
                throwErrorTolerant({}, Messages.AccessorDataProperty);
              } else if (map[key] & kind) {
                throwErrorTolerant({}, Messages.AccessorGetSet);
              }
            }
            map[key] |= kind;
          } else {
            map[key] = kind;
          }
          properties.push(property);
          if (!match("}")) {
            expect(",");
          }
        }
        expect("}");
        return delegate.markEnd(delegate.createObjectExpression(properties), startToken);
      }
      function parseGroupExpression() {
        var expr;
        expect("(");
        expr = parseExpression();
        expect(")");
        return expr;
      }
      function parsePrimaryExpression() {
        var type, token, expr, startToken;
        if (match("(")) {
          return parseGroupExpression();
        }
        if (match("[")) {
          return parseArrayInitialiser();
        }
        if (match("{")) {
          return parseObjectInitialiser();
        }
        type = lookahead.type;
        startToken = lookahead;
        if (type === Token.Identifier) {
          expr = delegate.createIdentifier(lex().value);
        } else if (type === Token.StringLiteral || type === Token.NumericLiteral) {
          if (strict && lookahead.octal) {
            throwErrorTolerant(lookahead, Messages.StrictOctalLiteral);
          }
          expr = delegate.createLiteral(lex());
        } else if (type === Token.Keyword) {
          if (matchKeyword("function")) {
            return parseFunctionExpression();
          }
          if (matchKeyword("this")) {
            lex();
            expr = delegate.createThisExpression();
          } else {
            throwUnexpected(lex());
          }
        } else if (type === Token.BooleanLiteral) {
          token = lex();
          token.value = token.value === "true";
          expr = delegate.createLiteral(token);
        } else if (type === Token.NullLiteral) {
          token = lex();
          token.value = null;
          expr = delegate.createLiteral(token);
        } else if (match("/") || match("/=")) {
          if (typeof extra.tokens !== "undefined") {
            expr = delegate.createLiteral(collectRegex());
          } else {
            expr = delegate.createLiteral(scanRegExp());
          }
          peek();
        } else {
          throwUnexpected(lex());
        }
        return delegate.markEnd(expr, startToken);
      }
      function parseArguments() {
        var args = [];
        expect("(");
        if (!match(")")) {
          while (index < length) {
            args.push(parseAssignmentExpression());
            if (match(")")) {
              break;
            }
            expect(",");
          }
        }
        expect(")");
        return args;
      }
      function parseNonComputedProperty() {
        var token, startToken;
        startToken = lookahead;
        token = lex();
        if (!isIdentifierName(token)) {
          throwUnexpected(token);
        }
        return delegate.markEnd(delegate.createIdentifier(token.value), startToken);
      }
      function parseNonComputedMember() {
        expect(".");
        return parseNonComputedProperty();
      }
      function parseComputedMember() {
        var expr;
        expect("[");
        expr = parseExpression();
        expect("]");
        return expr;
      }
      function parseNewExpression() {
        var callee, args, startToken;
        startToken = lookahead;
        expectKeyword("new");
        callee = parseLeftHandSideExpression();
        args = match("(") ? parseArguments() : [];
        return delegate.markEnd(delegate.createNewExpression(callee, args), startToken);
      }
      function parseLeftHandSideExpressionAllowCall() {
        var previousAllowIn, expr, args, property, startToken;
        startToken = lookahead;
        previousAllowIn = state.allowIn;
        state.allowIn = true;
        expr = matchKeyword("new") ? parseNewExpression() : parsePrimaryExpression();
        state.allowIn = previousAllowIn;
        for (;;) {
          if (match(".")) {
            property = parseNonComputedMember();
            expr = delegate.createMemberExpression(".", expr, property);
          } else if (match("(")) {
            args = parseArguments();
            expr = delegate.createCallExpression(expr, args);
          } else if (match("[")) {
            property = parseComputedMember();
            expr = delegate.createMemberExpression("[", expr, property);
          } else {
            break;
          }
          delegate.markEnd(expr, startToken);
        }
        return expr;
      }
      function parseLeftHandSideExpression() {
        var previousAllowIn, expr, property, startToken;
        startToken = lookahead;
        previousAllowIn = state.allowIn;
        expr = matchKeyword("new") ? parseNewExpression() : parsePrimaryExpression();
        state.allowIn = previousAllowIn;
        while (match(".") || match("[")) {
          if (match("[")) {
            property = parseComputedMember();
            expr = delegate.createMemberExpression("[", expr, property);
          } else {
            property = parseNonComputedMember();
            expr = delegate.createMemberExpression(".", expr, property);
          }
          delegate.markEnd(expr, startToken);
        }
        return expr;
      }
      function parsePostfixExpression() {
        var expr, token, startToken = lookahead;
        expr = parseLeftHandSideExpressionAllowCall();
        if (lookahead.type === Token.Punctuator) {
          if ((match("++") || match("--")) && !peekLineTerminator()) {
            if (strict && expr.type === Syntax.Identifier && isRestrictedWord(expr.name)) {
              throwErrorTolerant({}, Messages.StrictLHSPostfix);
            }
            if (!isLeftHandSide(expr)) {
              throwErrorTolerant({}, Messages.InvalidLHSInAssignment);
            }
            token = lex();
            expr = delegate.markEnd(delegate.createPostfixExpression(token.value, expr), startToken);
          }
        }
        return expr;
      }
      function parseUnaryExpression() {
        var token, expr, startToken;
        if (lookahead.type !== Token.Punctuator && lookahead.type !== Token.Keyword) {
          expr = parsePostfixExpression();
        } else if (match("++") || match("--")) {
          startToken = lookahead;
          token = lex();
          expr = parseUnaryExpression();
          if (strict && expr.type === Syntax.Identifier && isRestrictedWord(expr.name)) {
            throwErrorTolerant({}, Messages.StrictLHSPrefix);
          }
          if (!isLeftHandSide(expr)) {
            throwErrorTolerant({}, Messages.InvalidLHSInAssignment);
          }
          expr = delegate.createUnaryExpression(token.value, expr);
          expr = delegate.markEnd(expr, startToken);
        } else if (match("+") || match("-") || match("~") || match("!")) {
          startToken = lookahead;
          token = lex();
          expr = parseUnaryExpression();
          expr = delegate.createUnaryExpression(token.value, expr);
          expr = delegate.markEnd(expr, startToken);
        } else if (matchKeyword("delete") || matchKeyword("void") || matchKeyword("typeof")) {
          startToken = lookahead;
          token = lex();
          expr = parseUnaryExpression();
          expr = delegate.createUnaryExpression(token.value, expr);
          expr = delegate.markEnd(expr, startToken);
          if (strict && expr.operator === "delete" && expr.argument.type === Syntax.Identifier) {
            throwErrorTolerant({}, Messages.StrictDelete);
          }
        } else {
          expr = parsePostfixExpression();
        }
        return expr;
      }
      function binaryPrecedence(token, allowIn) {
        var prec = 0;
        if (token.type !== Token.Punctuator && token.type !== Token.Keyword) {
          return 0;
        }
        switch (token.value) {
          case "||":
            prec = 1;
            break;
          case "&&":
            prec = 2;
            break;
          case "|":
            prec = 3;
            break;
          case "^":
            prec = 4;
            break;
          case "&":
            prec = 5;
            break;
          case "==":
          case "!=":
          case "===":
          case "!==":
            prec = 6;
            break;
          case "<":
          case ">":
          case "<=":
          case ">=":
          case "instanceof":
            prec = 7;
            break;
          case "in":
            prec = allowIn ? 7 : 0;
            break;
          case "<<":
          case ">>":
          case ">>>":
            prec = 8;
            break;
          case "+":
          case "-":
            prec = 9;
            break;
          case "*":
          case "/":
          case "%":
            prec = 11;
            break;
          default:
            break;
        }
        return prec;
      }
      function parseBinaryExpression() {
        var marker, markers, expr, token, prec, stack, right, operator, left, i;
        marker = lookahead;
        left = parseUnaryExpression();
        token = lookahead;
        prec = binaryPrecedence(token, state.allowIn);
        if (prec === 0) {
          return left;
        }
        token.prec = prec;
        lex();
        markers = [ marker, lookahead ];
        right = parseUnaryExpression();
        stack = [ left, token, right ];
        while ((prec = binaryPrecedence(lookahead, state.allowIn)) > 0) {
          while (stack.length > 2 && prec <= stack[stack.length - 2].prec) {
            right = stack.pop();
            operator = stack.pop().value;
            left = stack.pop();
            expr = delegate.createBinaryExpression(operator, left, right);
            markers.pop();
            marker = markers[markers.length - 1];
            delegate.markEnd(expr, marker);
            stack.push(expr);
          }
          token = lex();
          token.prec = prec;
          stack.push(token);
          markers.push(lookahead);
          expr = parseUnaryExpression();
          stack.push(expr);
        }
        i = stack.length - 1;
        expr = stack[i];
        markers.pop();
        while (i > 1) {
          expr = delegate.createBinaryExpression(stack[i - 1].value, stack[i - 2], expr);
          i -= 2;
          marker = markers.pop();
          delegate.markEnd(expr, marker);
        }
        return expr;
      }
      function parseConditionalExpression() {
        var expr, previousAllowIn, consequent, alternate, startToken;
        startToken = lookahead;
        expr = parseBinaryExpression();
        if (match("?")) {
          lex();
          previousAllowIn = state.allowIn;
          state.allowIn = true;
          consequent = parseAssignmentExpression();
          state.allowIn = previousAllowIn;
          expect(":");
          alternate = parseAssignmentExpression();
          expr = delegate.createConditionalExpression(expr, consequent, alternate);
          delegate.markEnd(expr, startToken);
        }
        return expr;
      }
      function parseAssignmentExpression() {
        var token, left, right, node, startToken;
        token = lookahead;
        startToken = lookahead;
        node = left = parseConditionalExpression();
        if (matchAssign()) {
          if (!isLeftHandSide(left)) {
            throwErrorTolerant({}, Messages.InvalidLHSInAssignment);
          }
          if (strict && left.type === Syntax.Identifier && isRestrictedWord(left.name)) {
            throwErrorTolerant(token, Messages.StrictLHSAssignment);
          }
          token = lex();
          right = parseAssignmentExpression();
          node = delegate.markEnd(delegate.createAssignmentExpression(token.value, left, right), startToken);
        }
        return node;
      }
      function parseExpression() {
        var expr, startToken = lookahead;
        expr = parseAssignmentExpression();
        if (match(",")) {
          expr = delegate.createSequenceExpression([ expr ]);
          while (index < length) {
            if (!match(",")) {
              break;
            }
            lex();
            expr.expressions.push(parseAssignmentExpression());
          }
          delegate.markEnd(expr, startToken);
        }
        return expr;
      }
      function parseStatementList() {
        var list = [], statement;
        while (index < length) {
          if (match("}")) {
            break;
          }
          statement = parseSourceElement();
          if (typeof statement === "undefined") {
            break;
          }
          list.push(statement);
        }
        return list;
      }
      function parseBlock() {
        var block, startToken;
        startToken = lookahead;
        expect("{");
        block = parseStatementList();
        expect("}");
        return delegate.markEnd(delegate.createBlockStatement(block), startToken);
      }
      function parseVariableIdentifier() {
        var token, startToken;
        startToken = lookahead;
        token = lex();
        if (token.type !== Token.Identifier) {
          throwUnexpected(token);
        }
        return delegate.markEnd(delegate.createIdentifier(token.value), startToken);
      }
      function parseVariableDeclaration(kind) {
        var init = null, id, startToken;
        startToken = lookahead;
        id = parseVariableIdentifier();
        if (strict && isRestrictedWord(id.name)) {
          throwErrorTolerant({}, Messages.StrictVarName);
        }
        if (kind === "const") {
          expect("=");
          init = parseAssignmentExpression();
        } else if (match("=")) {
          lex();
          init = parseAssignmentExpression();
        }
        return delegate.markEnd(delegate.createVariableDeclarator(id, init), startToken);
      }
      function parseVariableDeclarationList(kind) {
        var list = [];
        do {
          list.push(parseVariableDeclaration(kind));
          if (!match(",")) {
            break;
          }
          lex();
        } while (index < length);
        return list;
      }
      function parseVariableStatement() {
        var declarations;
        expectKeyword("var");
        declarations = parseVariableDeclarationList();
        consumeSemicolon();
        return delegate.createVariableDeclaration(declarations, "var");
      }
      function parseConstLetDeclaration(kind) {
        var declarations, startToken;
        startToken = lookahead;
        expectKeyword(kind);
        declarations = parseVariableDeclarationList(kind);
        consumeSemicolon();
        return delegate.markEnd(delegate.createVariableDeclaration(declarations, kind), startToken);
      }
      function parseEmptyStatement() {
        expect(";");
        return delegate.createEmptyStatement();
      }
      function parseExpressionStatement() {
        var expr = parseExpression();
        consumeSemicolon();
        return delegate.createExpressionStatement(expr);
      }
      function parseIfStatement() {
        var test, consequent, alternate;
        expectKeyword("if");
        expect("(");
        test = parseExpression();
        expect(")");
        consequent = parseStatement();
        if (matchKeyword("else")) {
          lex();
          alternate = parseStatement();
        } else {
          alternate = null;
        }
        return delegate.createIfStatement(test, consequent, alternate);
      }
      function parseDoWhileStatement() {
        var body, test, oldInIteration;
        expectKeyword("do");
        oldInIteration = state.inIteration;
        state.inIteration = true;
        body = parseStatement();
        state.inIteration = oldInIteration;
        expectKeyword("while");
        expect("(");
        test = parseExpression();
        expect(")");
        if (match(";")) {
          lex();
        }
        return delegate.createDoWhileStatement(body, test);
      }
      function parseWhileStatement() {
        var test, body, oldInIteration;
        expectKeyword("while");
        expect("(");
        test = parseExpression();
        expect(")");
        oldInIteration = state.inIteration;
        state.inIteration = true;
        body = parseStatement();
        state.inIteration = oldInIteration;
        return delegate.createWhileStatement(test, body);
      }
      function parseForVariableDeclaration() {
        var token, declarations, startToken;
        startToken = lookahead;
        token = lex();
        declarations = parseVariableDeclarationList();
        return delegate.markEnd(delegate.createVariableDeclaration(declarations, token.value), startToken);
      }
      function parseForStatement() {
        var init, test, update, left, right, body, oldInIteration;
        init = test = update = null;
        expectKeyword("for");
        expect("(");
        if (match(";")) {
          lex();
        } else {
          if (matchKeyword("var") || matchKeyword("let")) {
            state.allowIn = false;
            init = parseForVariableDeclaration();
            state.allowIn = true;
            if (init.declarations.length === 1 && matchKeyword("in")) {
              lex();
              left = init;
              right = parseExpression();
              init = null;
            }
          } else {
            state.allowIn = false;
            init = parseExpression();
            state.allowIn = true;
            if (matchKeyword("in")) {
              if (!isLeftHandSide(init)) {
                throwErrorTolerant({}, Messages.InvalidLHSInForIn);
              }
              lex();
              left = init;
              right = parseExpression();
              init = null;
            }
          }
          if (typeof left === "undefined") {
            expect(";");
          }
        }
        if (typeof left === "undefined") {
          if (!match(";")) {
            test = parseExpression();
          }
          expect(";");
          if (!match(")")) {
            update = parseExpression();
          }
        }
        expect(")");
        oldInIteration = state.inIteration;
        state.inIteration = true;
        body = parseStatement();
        state.inIteration = oldInIteration;
        return typeof left === "undefined" ? delegate.createForStatement(init, test, update, body) : delegate.createForInStatement(left, right, body);
      }
      function parseContinueStatement() {
        var label = null, key;
        expectKeyword("continue");
        if (source.charCodeAt(index) === 59) {
          lex();
          if (!state.inIteration) {
            throwError({}, Messages.IllegalContinue);
          }
          return delegate.createContinueStatement(null);
        }
        if (peekLineTerminator()) {
          if (!state.inIteration) {
            throwError({}, Messages.IllegalContinue);
          }
          return delegate.createContinueStatement(null);
        }
        if (lookahead.type === Token.Identifier) {
          label = parseVariableIdentifier();
          key = "$" + label.name;
          if (!Object.prototype.hasOwnProperty.call(state.labelSet, key)) {
            throwError({}, Messages.UnknownLabel, label.name);
          }
        }
        consumeSemicolon();
        if (label === null && !state.inIteration) {
          throwError({}, Messages.IllegalContinue);
        }
        return delegate.createContinueStatement(label);
      }
      function parseBreakStatement() {
        var label = null, key;
        expectKeyword("break");
        if (source.charCodeAt(index) === 59) {
          lex();
          if (!(state.inIteration || state.inSwitch)) {
            throwError({}, Messages.IllegalBreak);
          }
          return delegate.createBreakStatement(null);
        }
        if (peekLineTerminator()) {
          if (!(state.inIteration || state.inSwitch)) {
            throwError({}, Messages.IllegalBreak);
          }
          return delegate.createBreakStatement(null);
        }
        if (lookahead.type === Token.Identifier) {
          label = parseVariableIdentifier();
          key = "$" + label.name;
          if (!Object.prototype.hasOwnProperty.call(state.labelSet, key)) {
            throwError({}, Messages.UnknownLabel, label.name);
          }
        }
        consumeSemicolon();
        if (label === null && !(state.inIteration || state.inSwitch)) {
          throwError({}, Messages.IllegalBreak);
        }
        return delegate.createBreakStatement(label);
      }
      function parseReturnStatement() {
        var argument = null;
        expectKeyword("return");
        if (!state.inFunctionBody) {
          throwErrorTolerant({}, Messages.IllegalReturn);
        }
        if (source.charCodeAt(index) === 32) {
          if (isIdentifierStart(source.charCodeAt(index + 1))) {
            argument = parseExpression();
            consumeSemicolon();
            return delegate.createReturnStatement(argument);
          }
        }
        if (peekLineTerminator()) {
          return delegate.createReturnStatement(null);
        }
        if (!match(";")) {
          if (!match("}") && lookahead.type !== Token.EOF) {
            argument = parseExpression();
          }
        }
        consumeSemicolon();
        return delegate.createReturnStatement(argument);
      }
      function parseWithStatement() {
        var object, body;
        if (strict) {
          skipComment();
          throwErrorTolerant({}, Messages.StrictModeWith);
        }
        expectKeyword("with");
        expect("(");
        object = parseExpression();
        expect(")");
        body = parseStatement();
        return delegate.createWithStatement(object, body);
      }
      function parseSwitchCase() {
        var test, consequent = [], statement, startToken;
        startToken = lookahead;
        if (matchKeyword("default")) {
          lex();
          test = null;
        } else {
          expectKeyword("case");
          test = parseExpression();
        }
        expect(":");
        while (index < length) {
          if (match("}") || matchKeyword("default") || matchKeyword("case")) {
            break;
          }
          statement = parseStatement();
          consequent.push(statement);
        }
        return delegate.markEnd(delegate.createSwitchCase(test, consequent), startToken);
      }
      function parseSwitchStatement() {
        var discriminant, cases, clause, oldInSwitch, defaultFound;
        expectKeyword("switch");
        expect("(");
        discriminant = parseExpression();
        expect(")");
        expect("{");
        cases = [];
        if (match("}")) {
          lex();
          return delegate.createSwitchStatement(discriminant, cases);
        }
        oldInSwitch = state.inSwitch;
        state.inSwitch = true;
        defaultFound = false;
        while (index < length) {
          if (match("}")) {
            break;
          }
          clause = parseSwitchCase();
          if (clause.test === null) {
            if (defaultFound) {
              throwError({}, Messages.MultipleDefaultsInSwitch);
            }
            defaultFound = true;
          }
          cases.push(clause);
        }
        state.inSwitch = oldInSwitch;
        expect("}");
        return delegate.createSwitchStatement(discriminant, cases);
      }
      function parseThrowStatement() {
        var argument;
        expectKeyword("throw");
        if (peekLineTerminator()) {
          throwError({}, Messages.NewlineAfterThrow);
        }
        argument = parseExpression();
        consumeSemicolon();
        return delegate.createThrowStatement(argument);
      }
      function parseCatchClause() {
        var param, body, startToken;
        startToken = lookahead;
        expectKeyword("catch");
        expect("(");
        if (match(")")) {
          throwUnexpected(lookahead);
        }
        param = parseVariableIdentifier();
        if (strict && isRestrictedWord(param.name)) {
          throwErrorTolerant({}, Messages.StrictCatchVariable);
        }
        expect(")");
        body = parseBlock();
        return delegate.markEnd(delegate.createCatchClause(param, body), startToken);
      }
      function parseTryStatement() {
        var block, handlers = [], finalizer = null;
        expectKeyword("try");
        block = parseBlock();
        if (matchKeyword("catch")) {
          handlers.push(parseCatchClause());
        }
        if (matchKeyword("finally")) {
          lex();
          finalizer = parseBlock();
        }
        if (handlers.length === 0 && !finalizer) {
          throwError({}, Messages.NoCatchOrFinally);
        }
        return delegate.createTryStatement(block, [], handlers, finalizer);
      }
      function parseDebuggerStatement() {
        expectKeyword("debugger");
        consumeSemicolon();
        return delegate.createDebuggerStatement();
      }
      function parseStatement() {
        var type = lookahead.type, expr, labeledBody, key, startToken;
        if (type === Token.EOF) {
          throwUnexpected(lookahead);
        }
        if (type === Token.Punctuator && lookahead.value === "{") {
          return parseBlock();
        }
        startToken = lookahead;
        if (type === Token.Punctuator) {
          switch (lookahead.value) {
            case ";":
              return delegate.markEnd(parseEmptyStatement(), startToken);
            case "(":
              return delegate.markEnd(parseExpressionStatement(), startToken);
            default:
              break;
          }
        }
        if (type === Token.Keyword) {
          switch (lookahead.value) {
            case "break":
              return delegate.markEnd(parseBreakStatement(), startToken);
            case "continue":
              return delegate.markEnd(parseContinueStatement(), startToken);
            case "debugger":
              return delegate.markEnd(parseDebuggerStatement(), startToken);
            case "do":
              return delegate.markEnd(parseDoWhileStatement(), startToken);
            case "for":
              return delegate.markEnd(parseForStatement(), startToken);
            case "function":
              return delegate.markEnd(parseFunctionDeclaration(), startToken);
            case "if":
              return delegate.markEnd(parseIfStatement(), startToken);
            case "return":
              return delegate.markEnd(parseReturnStatement(), startToken);
            case "switch":
              return delegate.markEnd(parseSwitchStatement(), startToken);
            case "throw":
              return delegate.markEnd(parseThrowStatement(), startToken);
            case "try":
              return delegate.markEnd(parseTryStatement(), startToken);
            case "var":
              return delegate.markEnd(parseVariableStatement(), startToken);
            case "while":
              return delegate.markEnd(parseWhileStatement(), startToken);
            case "with":
              return delegate.markEnd(parseWithStatement(), startToken);
            default:
              break;
          }
        }
        expr = parseExpression();
        if (expr.type === Syntax.Identifier && match(":")) {
          lex();
          key = "$" + expr.name;
          if (Object.prototype.hasOwnProperty.call(state.labelSet, key)) {
            throwError({}, Messages.Redeclaration, "Label", expr.name);
          }
          state.labelSet[key] = true;
          labeledBody = parseStatement();
          delete state.labelSet[key];
          return delegate.markEnd(delegate.createLabeledStatement(expr, labeledBody), startToken);
        }
        consumeSemicolon();
        return delegate.markEnd(delegate.createExpressionStatement(expr), startToken);
      }
      function parseFunctionSourceElements() {
        var sourceElement, sourceElements = [], token, directive, firstRestricted, oldLabelSet, oldInIteration, oldInSwitch, oldInFunctionBody, startToken;
        startToken = lookahead;
        expect("{");
        while (index < length) {
          if (lookahead.type !== Token.StringLiteral) {
            break;
          }
          token = lookahead;
          sourceElement = parseSourceElement();
          sourceElements.push(sourceElement);
          if (sourceElement.expression.type !== Syntax.Literal) {
            break;
          }
          directive = source.slice(token.start + 1, token.end - 1);
          if (directive === "use strict") {
            strict = true;
            if (firstRestricted) {
              throwErrorTolerant(firstRestricted, Messages.StrictOctalLiteral);
            }
          } else {
            if (!firstRestricted && token.octal) {
              firstRestricted = token;
            }
          }
        }
        oldLabelSet = state.labelSet;
        oldInIteration = state.inIteration;
        oldInSwitch = state.inSwitch;
        oldInFunctionBody = state.inFunctionBody;
        state.labelSet = {};
        state.inIteration = false;
        state.inSwitch = false;
        state.inFunctionBody = true;
        while (index < length) {
          if (match("}")) {
            break;
          }
          sourceElement = parseSourceElement();
          if (typeof sourceElement === "undefined") {
            break;
          }
          sourceElements.push(sourceElement);
        }
        expect("}");
        state.labelSet = oldLabelSet;
        state.inIteration = oldInIteration;
        state.inSwitch = oldInSwitch;
        state.inFunctionBody = oldInFunctionBody;
        return delegate.markEnd(delegate.createBlockStatement(sourceElements), startToken);
      }
      function parseParams(firstRestricted) {
        var param, params = [], token, stricted, paramSet, key, message;
        expect("(");
        if (!match(")")) {
          paramSet = {};
          while (index < length) {
            token = lookahead;
            param = parseVariableIdentifier();
            key = "$" + token.value;
            if (strict) {
              if (isRestrictedWord(token.value)) {
                stricted = token;
                message = Messages.StrictParamName;
              }
              if (Object.prototype.hasOwnProperty.call(paramSet, key)) {
                stricted = token;
                message = Messages.StrictParamDupe;
              }
            } else if (!firstRestricted) {
              if (isRestrictedWord(token.value)) {
                firstRestricted = token;
                message = Messages.StrictParamName;
              } else if (isStrictModeReservedWord(token.value)) {
                firstRestricted = token;
                message = Messages.StrictReservedWord;
              } else if (Object.prototype.hasOwnProperty.call(paramSet, key)) {
                firstRestricted = token;
                message = Messages.StrictParamDupe;
              }
            }
            params.push(param);
            paramSet[key] = true;
            if (match(")")) {
              break;
            }
            expect(",");
          }
        }
        expect(")");
        return {
          params: params,
          stricted: stricted,
          firstRestricted: firstRestricted,
          message: message
        };
      }
      function parseFunctionDeclaration() {
        var id, params = [], body, token, stricted, tmp, firstRestricted, message, previousStrict, startToken;
        startToken = lookahead;
        expectKeyword("function");
        token = lookahead;
        id = parseVariableIdentifier();
        if (strict) {
          if (isRestrictedWord(token.value)) {
            throwErrorTolerant(token, Messages.StrictFunctionName);
          }
        } else {
          if (isRestrictedWord(token.value)) {
            firstRestricted = token;
            message = Messages.StrictFunctionName;
          } else if (isStrictModeReservedWord(token.value)) {
            firstRestricted = token;
            message = Messages.StrictReservedWord;
          }
        }
        tmp = parseParams(firstRestricted);
        params = tmp.params;
        stricted = tmp.stricted;
        firstRestricted = tmp.firstRestricted;
        if (tmp.message) {
          message = tmp.message;
        }
        previousStrict = strict;
        body = parseFunctionSourceElements();
        if (strict && firstRestricted) {
          throwError(firstRestricted, message);
        }
        if (strict && stricted) {
          throwErrorTolerant(stricted, message);
        }
        strict = previousStrict;
        return delegate.markEnd(delegate.createFunctionDeclaration(id, params, [], body), startToken);
      }
      function parseFunctionExpression() {
        var token, id = null, stricted, firstRestricted, message, tmp, params = [], body, previousStrict, startToken;
        startToken = lookahead;
        expectKeyword("function");
        if (!match("(")) {
          token = lookahead;
          id = parseVariableIdentifier();
          if (strict) {
            if (isRestrictedWord(token.value)) {
              throwErrorTolerant(token, Messages.StrictFunctionName);
            }
          } else {
            if (isRestrictedWord(token.value)) {
              firstRestricted = token;
              message = Messages.StrictFunctionName;
            } else if (isStrictModeReservedWord(token.value)) {
              firstRestricted = token;
              message = Messages.StrictReservedWord;
            }
          }
        }
        tmp = parseParams(firstRestricted);
        params = tmp.params;
        stricted = tmp.stricted;
        firstRestricted = tmp.firstRestricted;
        if (tmp.message) {
          message = tmp.message;
        }
        previousStrict = strict;
        body = parseFunctionSourceElements();
        if (strict && firstRestricted) {
          throwError(firstRestricted, message);
        }
        if (strict && stricted) {
          throwErrorTolerant(stricted, message);
        }
        strict = previousStrict;
        return delegate.markEnd(delegate.createFunctionExpression(id, params, [], body), startToken);
      }
      function parseSourceElement() {
        if (lookahead.type === Token.Keyword) {
          switch (lookahead.value) {
            case "const":
            case "let":
              return parseConstLetDeclaration(lookahead.value);
            case "function":
              return parseFunctionDeclaration();
            default:
              return parseStatement();
          }
        }
        if (lookahead.type !== Token.EOF) {
          return parseStatement();
        }
      }
      function parseSourceElements() {
        var sourceElement, sourceElements = [], token, directive, firstRestricted;
        while (index < length) {
          token = lookahead;
          if (token.type !== Token.StringLiteral) {
            break;
          }
          sourceElement = parseSourceElement();
          sourceElements.push(sourceElement);
          if (sourceElement.expression.type !== Syntax.Literal) {
            break;
          }
          directive = source.slice(token.start + 1, token.end - 1);
          if (directive === "use strict") {
            strict = true;
            if (firstRestricted) {
              throwErrorTolerant(firstRestricted, Messages.StrictOctalLiteral);
            }
          } else {
            if (!firstRestricted && token.octal) {
              firstRestricted = token;
            }
          }
        }
        while (index < length) {
          sourceElement = parseSourceElement();
          if (typeof sourceElement === "undefined") {
            break;
          }
          sourceElements.push(sourceElement);
        }
        return sourceElements;
      }
      function parseProgram() {
        var body, startToken;
        skipComment();
        peek();
        startToken = lookahead;
        strict = false;
        body = parseSourceElements();
        return delegate.markEnd(delegate.createProgram(body), startToken);
      }
      function filterTokenLocation() {
        var i, entry, token, tokens = [];
        for (i = 0; i < extra.tokens.length; ++i) {
          entry = extra.tokens[i];
          token = {
            type: entry.type,
            value: entry.value
          };
          if (extra.range) {
            token.range = entry.range;
          }
          if (extra.loc) {
            token.loc = entry.loc;
          }
          tokens.push(token);
        }
        extra.tokens = tokens;
      }
      function tokenize(code, options) {
        var toString, token, tokens;
        toString = String;
        if (typeof code !== "string" && !(code instanceof String)) {
          code = toString(code);
        }
        delegate = SyntaxTreeDelegate;
        source = code;
        index = 0;
        lineNumber = source.length > 0 ? 1 : 0;
        lineStart = 0;
        length = source.length;
        lookahead = null;
        state = {
          allowIn: true,
          labelSet: {},
          inFunctionBody: false,
          inIteration: false,
          inSwitch: false,
          lastCommentStart: -1
        };
        extra = {};
        options = options || {};
        options.tokens = true;
        extra.tokens = [];
        extra.tokenize = true;
        extra.openParenToken = -1;
        extra.openCurlyToken = -1;
        extra.range = typeof options.range === "boolean" && options.range;
        extra.loc = typeof options.loc === "boolean" && options.loc;
        if (typeof options.comment === "boolean" && options.comment) {
          extra.comments = [];
        }
        if (typeof options.tolerant === "boolean" && options.tolerant) {
          extra.errors = [];
        }
        try {
          peek();
          if (lookahead.type === Token.EOF) {
            return extra.tokens;
          }
          token = lex();
          while (lookahead.type !== Token.EOF) {
            try {
              token = lex();
            } catch (lexError) {
              token = lookahead;
              if (extra.errors) {
                extra.errors.push(lexError);
                break;
              } else {
                throw lexError;
              }
            }
          }
          filterTokenLocation();
          tokens = extra.tokens;
          if (typeof extra.comments !== "undefined") {
            tokens.comments = extra.comments;
          }
          if (typeof extra.errors !== "undefined") {
            tokens.errors = extra.errors;
          }
        } catch (e) {
          throw e;
        } finally {
          extra = {};
        }
        return tokens;
      }
      function parse(code, options) {
        var program, toString;
        toString = String;
        if (typeof code !== "string" && !(code instanceof String)) {
          code = toString(code);
        }
        delegate = SyntaxTreeDelegate;
        source = code;
        index = 0;
        lineNumber = source.length > 0 ? 1 : 0;
        lineStart = 0;
        length = source.length;
        lookahead = null;
        state = {
          allowIn: true,
          labelSet: {},
          inFunctionBody: false,
          inIteration: false,
          inSwitch: false,
          lastCommentStart: -1
        };
        extra = {};
        if (typeof options !== "undefined") {
          extra.range = typeof options.range === "boolean" && options.range;
          extra.loc = typeof options.loc === "boolean" && options.loc;
          extra.attachComment = typeof options.attachComment === "boolean" && options.attachComment;
          if (extra.loc && options.source !== null && options.source !== undefined) {
            extra.source = toString(options.source);
          }
          if (typeof options.tokens === "boolean" && options.tokens) {
            extra.tokens = [];
          }
          if (typeof options.comment === "boolean" && options.comment) {
            extra.comments = [];
          }
          if (typeof options.tolerant === "boolean" && options.tolerant) {
            extra.errors = [];
          }
          if (extra.attachComment) {
            extra.range = true;
            extra.comments = [];
            extra.bottomRightStack = [];
            extra.trailingComments = [];
            extra.leadingComments = [];
          }
        }
        try {
          program = parseProgram();
          if (typeof extra.comments !== "undefined") {
            program.comments = extra.comments;
          }
          if (typeof extra.tokens !== "undefined") {
            filterTokenLocation();
            program.tokens = extra.tokens;
          }
          if (typeof extra.errors !== "undefined") {
            program.errors = extra.errors;
          }
        } catch (e) {
          throw e;
        } finally {
          extra = {};
        }
        return program;
      }
      exports.version = "1.2.2";
      exports.tokenize = tokenize;
      exports.parse = parse;
      exports.Syntax = function() {
        var name, types = {};
        if (typeof Object.create === "function") {
          types = Object.create(null);
        }
        for (name in Syntax) {
          if (Syntax.hasOwnProperty(name)) {
            types[name] = Syntax[name];
          }
        }
        if (typeof Object.freeze === "function") {
          Object.freeze(types);
        }
        return types;
      }();
    });
  },
  "w.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var STATE = basis.require("./1.js").STATE;
    var Value = basis.require("./1.js").Value;
    var DataObject = basis.require("./1.js").Object;
    var Node = basis.require("./4.js").Node;
    var runner = basis.require("./e.js");
    var TestSuite = basis.require("./i.js").TestSuite;
    var Item = Node.subclass({
      template: basis.template.get("#2"),
      startTime: 0,
      progressTimer_: null,
      binding: {
        name: "data:",
        progress: [ "stateChanged", function(node) {
          return node.state == STATE.PROCESSING ? 100 * node.state.data : 100;
        } ],
        showProgress: [ "stateChanged", function(node) {
          return Date.now() - node.startTime > 500;
        } ],
        pending: [ "stateChanged", function(node) {
          return node.state.data instanceof DataObject && Boolean(node.state.data.data.pending);
        } ],
        stateMessage: [ "stateChanged", function(node) {
          var report = node.state.data;
          switch (String(node.state)) {
            case STATE.READY:
              if (report.data && report.data.pending) return "Pending";
              return "OK";
            case STATE.ERROR:
              if (report instanceof DataObject == false) return "Error";
              if (report.data.exception) return "Exception";
              if (report.data.error == "ERROR_TIMEOUT") return "Timeout";
              return report.data.testCount - report.data.successCount + " of " + report.data.testCount + " fault";
            case STATE.PROCESSING:
              return "running";
            default:
              return "";
          }
        } ]
      },
      action: {
        pickup: function(event) {
          if (this.parentNode && this.root instanceof TestSuite) this.parentNode.setDelegate(this.root);
        }
      },
      emit_stateChanged: function(oldState) {
        if (this.state == STATE.PROCESSING && oldState != STATE.PROCESSING) this.startTime = Date.now();
        if (this.state != STATE.PROCESSING) this.startTime = 0;
        Node.prototype.emit_stateChanged.call(this, oldState);
      }
    });
    var view = new Node({
      dataSource: Value.factory("rootChanged", function(node) {
        return node.root.getChildNodesDataset();
      }),
      template: basis.template.get("#3"),
      binding: {
        faultTests: "satellite:",
        levelUp: "satellite:"
      },
      selection: true,
      listen: {
        selection: {
          itemsChanged: function(selection) {
            if (!selection.itemCount) this.satellite.faultTests.select();
          }
        }
      },
      childClass: Item
    });
    view.setSatellite("faultTests", new Item({
      contextSelection: view.selection,
      delegate: new DataObject({
        data: {
          name: "Summary"
        },
        getChildNodesDataset: function() {
          return runner.faultTests;
        }
      })
    }));
    view.setSatellite("levelUp", {
      events: "rootChanged",
      existsIf: function(owner) {
        return owner.root.parentNode;
      },
      delegate: function(owner) {
        return owner.root.parentNode;
      },
      instance: new Item({
        binding: {
          name: function() {
            return "..";
          }
        },
        action: {
          select: function() {
            this.owner.setDelegate(this.root);
          }
        }
      })
    });
    basis.ready(function() {
      if (!view.selection.itemCount) view.satellite.faultTests.select();
    });
    module.exports = view;
  },
  "3.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var namespace = this.path;
    var getter = basis.getter;
    var cleaner = basis.cleaner;
    var basisData = basis.require("./1.js");
    var AbstractData = basisData.AbstractData;
    var Value = basisData.Value;
    var STATE = basisData.STATE;
    var Property = Value.subclass({
      className: namespace + ".Property",
      extendConstructor_: false,
      init: function(initValue, handler, proxy) {
        this.value = initValue;
        this.handler = handler;
        this.proxy = proxy;
        Value.prototype.init.call(this);
      }
    });
    var OBJECTSET_STATE_PRIORITY = STATE.priority;
    var OBJECTSET_HANDLER = {
      stateChanged: function() {
        this.fire(false, true);
      },
      update: function() {
        this.fire(true);
      },
      change: function() {
        this.fire(true);
      },
      destroy: function(object) {
        this.remove(object);
      }
    };
    var objectSetUpdater = function() {
      var objects = {};
      var sheduled = false;
      function process() {
        var etimer = basis.setImmediate(process);
        sheduled = false;
        for (var id in objects) {
          var object = objects[id];
          delete objects[id];
          object.update();
        }
        basis.clearImmediate(etimer);
      }
      return {
        add: function(object) {
          objects[object.basisObjectId] = object;
          if (!sheduled) sheduled = basis.asap(process);
        },
        remove: function(object) {
          delete objects[object.basisObjectId];
        }
      };
    }();
    var ObjectSet = Value.subclass({
      className: namespace + ".ObjectSet",
      objects: null,
      value: 0,
      valueChanged_: false,
      calculateValue: function() {
        return this.value + 1;
      },
      calculateOnInit: false,
      statePriority: OBJECTSET_STATE_PRIORITY,
      stateChanged_: true,
      init: function() {
        Value.prototype.init.call(this);
        var objects = this.objects;
        this.objects = [];
        if (objects && Array.isArray(objects)) {
          this.lock();
          this.add.apply(this, objects);
          this.unlock();
        }
        this.valueChanged_ = this.stateChanged_ = !!this.calculateOnInit;
        this.update();
      },
      add: function() {
        for (var i = 0, len = arguments.length; i < len; i++) {
          var object = arguments[i];
          if (object instanceof AbstractData) {
            if (basis.array.add(this.objects, object)) object.addHandler(OBJECTSET_HANDLER, this);
          } else {
            basis.dev.warn(this.constructor.className + "#add: Instance of AbstractData required");
          }
        }
        this.fire(true, true);
      },
      remove: function(object) {
        if (basis.array.remove(this.objects, object)) object.removeHandler(OBJECTSET_HANDLER, this);
        this.fire(true, true);
      },
      clear: function() {
        for (var i = 0, object; object = this.objects[i]; i++) object.removeHandler(OBJECTSET_HANDLER, this);
        this.objects.length = 0;
        this.fire(true, true);
      },
      fire: function(valueChanged, stateChanged) {
        if (!this.locked) {
          this.valueChanged_ = this.valueChanged_ || !!valueChanged;
          this.stateChanged_ = this.stateChanged_ || !!stateChanged;
          if (this.valueChanged_ || this.stateChanged_) objectSetUpdater.add(this);
        }
      },
      lock: function() {
        this.locked = true;
      },
      unlock: function() {
        this.locked = false;
      },
      update: function() {
        var valueChanged = this.valueChanged_;
        var stateChanged = this.stateChanged_;
        this.valueChanged_ = false;
        this.stateChanged_ = false;
        objectSetUpdater.remove(this);
        if (!cleaner.globalDestroy) {
          if (valueChanged) this.set(this.calculateValue());
          if (stateChanged) {
            var len = this.objects.length;
            if (!len) this.setState(STATE.UNDEFINED); else {
              var maxWeight = -2;
              var curObject;
              for (var i = 0; i < len; i++) {
                var object = this.objects[i];
                var weight = this.statePriority.indexOf(String(object.state));
                if (weight > maxWeight) {
                  curObject = object;
                  maxWeight = weight;
                }
              }
              if (curObject) this.setState(curObject.state, curObject.state.data);
            }
          }
        }
      },
      destroy: function() {
        this.lock();
        this.clear();
        objectSetUpdater.remove(this);
        Value.prototype.destroy.call(this);
      }
    });
    var EXPRESSION_BBVALUE_HANDLER = function() {
      objectSetUpdater.add(this);
    };
    var EXPRESSION_BBVALUE_DESTROY_HANDLER = function() {
      this.destroy();
    };
    var BBVALUE_GETTER = function(value) {
      return value.bindingBridge.get(value);
    };
    var Expression = Value.subclass({
      className: namespace + ".Expression",
      calc_: null,
      values_: null,
      extendConstructor_: false,
      init: function() {
        Value.prototype.init.call(this);
        var count = arguments.length - 1;
        var calc = arguments[count];
        if (typeof calc != "function") throw new Error(this.constructor.className + ": Last argument of constructor must be a function");
        for (var values = new Array(count), i = 0; i < count; i++) {
          var value = values[i] = arguments[i];
          if (!value.bindingBridge) throw new Error(this.constructor.className + ": bb-value required");
          value.bindingBridge.attach(value, EXPRESSION_BBVALUE_HANDLER, this, EXPRESSION_BBVALUE_DESTROY_HANDLER);
        }
        this.calc_ = calc;
        this.values_ = values;
        this.update();
      },
      update: function() {
        objectSetUpdater.remove(this);
        Value.prototype.set.call(this, this.calc_.apply(null, this.values_.map(BBVALUE_GETTER)));
      },
      set: function() {},
      destroy: function() {
        objectSetUpdater.remove(this);
        for (var i = 0, value; value = this.values_[i]; i++) value.bindingBridge.detach(value, EXPRESSION_BBVALUE_HANDLER, this);
        Value.prototype.destroy.call(this);
      }
    });
    module.exports = {
      Property: Property,
      ObjectSet: ObjectSet,
      Expression: Expression
    };
  },
  "4.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var namespace = this.path;
    var document = global.document;
    var Class = basis.Class;
    var createEvent = basis.require("./2.js").create;
    var basisTemplateHtml = basis.require("./5.js");
    var HtmlTemplate = basisTemplateHtml.Template;
    var htmlTemplateIdMarker = basisTemplateHtml.marker;
    var TemplateSwitcher = basis.require("./a.js").TemplateSwitcher;
    var basisDomWrapper = basis.require("./d.js");
    var DWNode = basisDomWrapper.Node;
    var DWPartitionNode = basisDomWrapper.PartitionNode;
    var DWGroupingNode = basisDomWrapper.GroupingNode;
    var instances = {};
    var notifier = new basis.Token;
    var bindingSeed = 1;
    var unknownEventBindingCheck = {};
    function extendBinding(binding, extension) {
      var loc;
      binding.bindingId = bindingSeed++;
      try {
        throw new Error("");
      } catch (e) {
        var stack = String(e.stack);
        var m = stack.match(/devVerboseName\s\((?:.|\s)+?\(([^\)]+)/) || stack.match(/createClass(?:\s*\(.+[\r\n]+.+subclass)\s\((?:.|\s)+?\(([^\)]+)/) || stack.match(/createClass\s\((?:.|\s)+?\(([^\)]+)/) || stack.match(/customExtendProperty\s\((?:.|\s)+?\(([^\)]+)/);
        if (m) {
          loc = m[1].replace(/:(\d+)\:(\d+)$/, function(m, line, col) {
            return ":" + (line - 3) + ":" + col;
          });
        }
      }
      for (var key in extension) {
        var def = null;
        var value = extension[key];
        if (Node && value instanceof Node || basis.resource.isResource(value)) {
          def = {
            events: "satelliteChanged",
            getter: function(key, satellite) {
              var resource = typeof satellite == "function" ? satellite : null;
              var init = function(node) {
                init = false;
                if (resource) {
                  satellite = resource();
                  if (satellite instanceof Node == false) return;
                  resource = null;
                }
                node.setSatellite(key, satellite);
                if (node.satellite[key] !== satellite) basis.dev.warn("basis.ui.binding: implicit satellite `" + key + "` attach to owner failed");
              };
              return function(node) {
                if (init) init(node);
                return resource || (node.satellite[key] ? node.satellite[key].element : null);
              };
            }(key, value)
          };
        } else {
          if (value) {
            if (typeof value == "string") value = BINDING_PRESET.process(key, value); else if (value.bindingBridge) value = basis.fn.$const(value);
            if (typeof value != "object") {
              def = {
                getter: typeof value == "function" ? value : basis.getter(value)
              };
            } else if (Array.isArray(value)) {
              def = {
                events: value[0],
                getter: basis.getter(value[1])
              };
            } else {
              def = {
                events: value.events,
                getter: basis.getter(value.getter)
              };
            }
          }
        }
        if (def && loc) def.loc = loc;
        binding[key] = def;
      }
    }
    var BINDING_PRESET = function() {
      var presets = {};
      var prefixRegExp = /^([a-z_][a-z0-9_]*):(.*)/i;
      return {
        add: function(prefix, func) {
          if (!presets[prefix]) {
            presets[prefix] = func;
          } else {
            basis.dev.warn("Preset `" + prefix + "` already exists, new definition ignored");
          }
        },
        process: function(key, value) {
          var preset;
          var m = value.match(prefixRegExp);
          if (m) {
            preset = presets[m[1]];
            value = m[2] || key;
          }
          return preset ? preset(value) : value;
        }
      };
    }();
    BINDING_PRESET.add("data", function(path) {
      return {
        events: "update",
        getter: "data." + path
      };
    });
    BINDING_PRESET.add("satellite", function(satelliteName) {
      return {
        events: "satelliteChanged",
        getter: function(node) {
          return node.satellite[satelliteName] ? node.satellite[satelliteName].element : null;
        }
      };
    });
    var TEMPLATE_BINDING = Class.customExtendProperty({
      active: {
        events: "activeChanged",
        getter: function(node) {
          return node.active;
        }
      },
      state: {
        events: "stateChanged",
        getter: function(node) {
          return String(node.state);
        }
      },
      childNodesState: {
        events: "childNodesStateChanged",
        getter: function(node) {
          return String(node.childNodesState);
        }
      },
      childCount: {
        events: "childNodesModified",
        getter: function(node) {
          return node.childNodes ? node.childNodes.length : 0;
        }
      },
      hasChildren: {
        events: "childNodesModified",
        getter: function(node) {
          return !!node.firstChild;
        }
      },
      empty: {
        events: "childNodesModified",
        getter: function(node) {
          return !node.firstChild;
        }
      }
    }, extendBinding);
    var BINDING_TEMPLATE_INTERFACE = {
      attach: function(object, handler, context) {
        object.addHandler(handler, context);
      },
      detach: function(object, handler, context) {
        object.removeHandler(handler, context);
      }
    };
    var TEMPLATE_ACTION = Class.extensibleProperty({
      select: function(event) {
        if (this.isDisabled()) return;
        if (this.contextSelection && this.contextSelection.multiple) this.select(event.ctrlKey || event.metaKey); else this.select();
      }
    });
    var TEMPLATE_SWITCHER_HANDLER = {
      "*": function(event) {
        var switcher = this.templateSwitcher_;
        if (switcher && switcher.ruleEvents && switcher.ruleEvents[event.type]) this.setTemplate(switcher.resolve(this));
      }
    };
    var TEMPLATE = new HtmlTemplate("<div/>");
    var fragments = [];
    function getDocumentFragment() {
      return fragments.pop() || document.createDocumentFragment();
    }
    function reinsertPartitionNodes(partition) {
      var nodes = partition.nodes;
      if (nodes) for (var i = nodes.length - 1, child; child = nodes[i]; i--) child.parentNode.insertBefore(child, child.nextSibling);
    }
    var focusTimer;
    var TemplateMixin = function(super_) {
      return {
        template: TEMPLATE,
        emit_templateChanged: createEvent("templateChanged"),
        templateSwitcher_: null,
        binding: TEMPLATE_BINDING,
        action: TEMPLATE_ACTION,
        tmpl: null,
        element: null,
        childNodesElement: null,
        init: function() {
          this.element = this.childNodesElement = getDocumentFragment();
          super_.init.call(this);
        },
        postInit: function() {
          super_.postInit.call(this);
          var template = this.template;
          if (template) {
            var nodeDocumentFragment = this.childNodesElement;
            var bindingId = this.constructor.basisClassId_ + "_" + this.binding.bindingId;
            if (bindingId in unknownEventBindingCheck == false) {
              unknownEventBindingCheck[bindingId] = true;
              for (var bindName in this.binding) {
                var events = this.binding[bindName] && this.binding[bindName].events;
                if (events) {
                  events = String(events).trim().split(/\s+|\s*,\s*/);
                  for (var i = 0, eventName; eventName = events[i]; i++) if ("emit_" + eventName in this == false) basis.dev.warn("basis.ui: binding `" + bindName + "` has unknown event `" + eventName + "` for " + this.constructor.className);
                }
              }
            }
            this.template = null;
            this.setTemplate(template);
            fragments.push(nodeDocumentFragment);
            if (this.container) {
              this.container.appendChild(this.element);
              this.container = null;
            }
          }
          instances[this.basisObjectId] = this;
          notifier.set({
            action: "create",
            instance: this
          });
        },
        templateSync: function() {
          var oldElement = this.element;
          var oldTmpl = this.tmpl;
          var tmpl = this.template.createInstance(this, this.templateAction, this.templateSync, this.binding, BINDING_TEMPLATE_INTERFACE);
          var noChildNodesElement;
          if (tmpl.childNodesHere) {
            tmpl.childNodesElement = tmpl.childNodesHere.parentNode;
            tmpl.childNodesElement.insertPoint = tmpl.childNodesHere;
          }
          this.tmpl = tmpl;
          this.element = tmpl.element;
          this.childNodesElement = tmpl.childNodesElement || tmpl.element;
          noChildNodesElement = this.childNodesElement.nodeType != 1;
          if (noChildNodesElement) this.childNodesElement = document.createDocumentFragment();
          if (noChildNodesElement) this.noChildNodesElement_ = true; else delete this.noChildNodesElement_;
          if (this.grouping) {
            this.grouping.syncDomRefs();
            var cursor = this;
            while (cursor.grouping) cursor = cursor.grouping;
            var topGrouping = cursor;
            for (var groupNode = topGrouping.lastChild; groupNode; groupNode = groupNode.previousSibling) {
              if (groupNode instanceof PartitionNode) topGrouping.insertBefore(groupNode, groupNode.nextSibling); else reinsertPartitionNodes(groupNode);
            }
            reinsertPartitionNodes(topGrouping.nullGroup);
          } else {
            for (var child = this.lastChild; child; child = child.previousSibling) this.insertBefore(child, child.nextSibling);
          }
          if (this instanceof PartitionNode) reinsertPartitionNodes(this);
          if (oldElement && oldElement !== this.element && oldElement.nodeType != 11) {
            var parentNode = oldElement && oldElement.parentNode;
            if (parentNode) {
              if (this.owner && this.owner.tmpl) this.owner.tmpl.set(oldElement, this.element);
              if (this.element.parentNode !== parentNode) parentNode.replaceChild(this.element, oldElement);
            }
          }
          if (oldTmpl) this.emit_templateChanged();
        },
        setTemplate: function(template) {
          var curSwitcher = this.templateSwitcher_;
          var switcher;
          if (template instanceof TemplateSwitcher) {
            switcher = template;
            template = switcher.resolve(this);
          }
          if (template instanceof HtmlTemplate == false) template = null;
          if (!template) {
            basis.dev.warn("basis.ui.Node#setTemplate: set null to template possible only on node destroy");
            return;
          }
          if (switcher) {
            this.templateSwitcher_ = switcher;
            if (!curSwitcher) this.addHandler(TEMPLATE_SWITCHER_HANDLER, this);
          }
          if (curSwitcher && curSwitcher.resolve(this) !== template) {
            this.templateSwitcher_ = null;
            this.removeHandler(TEMPLATE_SWITCHER_HANDLER, this);
          }
          var oldTmpl = this.tmpl;
          var oldTemplate = this.template;
          if (oldTemplate !== template) {
            this.template = template;
            this.templateSync();
            if (oldTemplate) oldTemplate.clearInstance(oldTmpl);
          }
        },
        updateBind: function(bindName) {
          var binding = this.binding[bindName];
          var getter = binding && binding.getter;
          if (getter && this.tmpl) this.tmpl.set(bindName, getter(this));
        },
        templateAction: function(actionName, event) {
          var action = this.action[actionName];
          if (action) action.call(this, event);
          if (!action) basis.dev.warn("template call `" + actionName + "` action, but it isn't defined in action list");
        },
        focus: function(select) {
          var focusElement = this.tmpl ? this.tmpl.focus || this.element : null;
          if (focusElement) {
            if (focusTimer) focusTimer = basis.clearImmediate(focusTimer);
            focusTimer = basis.setImmediate(function() {
              try {
                focusElement.focus();
                if (select) focusElement.select();
              } catch (e) {}
            });
          }
        },
        blur: function() {
          var focusElement = this.tmpl ? this.tmpl.focus || this.element : null;
          if (focusElement) try {
            focusElement.blur();
          } catch (e) {}
        },
        destroy: function() {
          delete instances[this.basisObjectId];
          notifier.set({
            action: "destroy",
            instance: this
          });
          var template = this.template;
          var element = this.element;
          if (this.templateSwitcher_) {
            this.templateSwitcher_ = null;
            this.removeHandler(TEMPLATE_SWITCHER_HANDLER, this);
          }
          template.clearInstance(this.tmpl);
          super_.destroy.call(this);
          this.tmpl = null;
          this.element = null;
          this.childNodesElement = null;
          var parentNode = element && element.parentNode;
          if (parentNode && parentNode.nodeType == 1) parentNode.removeChild(element);
        }
      };
    };
    var ContainerTemplateMixin = function(super_) {
      return {
        insertBefore: function(newChild, refChild) {
          if (this.noChildNodesElement_) {
            delete this.noChildNodesElement_;
            basis.dev.warn("basis.ui: Template has no childNodesElement container, but insertBefore method called; probably it's a bug");
          }
          newChild = super_.insertBefore.call(this, newChild, refChild);
          var target = newChild.groupNode || this;
          var container = target.childNodesElement || this.childNodesElement;
          var nextSibling = newChild.nextSibling;
          var insertPoint = nextSibling && nextSibling.element.parentNode == container ? nextSibling.element : null;
          var childElement = newChild.element;
          var refNode = insertPoint || container.insertPoint || null;
          if (childElement.parentNode !== container || childElement.nextSibling !== refNode) container.insertBefore(childElement, refNode);
          return newChild;
        },
        removeChild: function(oldChild) {
          super_.removeChild.call(this, oldChild);
          var element = oldChild.element;
          var parent = element.parentNode;
          if (parent) parent.removeChild(element);
          return oldChild;
        },
        clear: function(alive) {
          if (alive) {
            var node = this.firstChild;
            while (node) {
              var element = node.element;
              var parent = element.parentNode;
              if (parent) parent.removeChild(element);
              node = node.nextSibling;
            }
          }
          super_.clear.call(this, alive);
        },
        setChildNodes: function(childNodes, keepAlive) {
          if (this.noChildNodesElement_) {
            delete this.noChildNodesElement_;
            basis.dev.warn("basis.ui: Template has no childNodesElement container, but setChildNodes method called; probably it's a bug");
          }
          var domFragment = document.createDocumentFragment();
          var target = this.grouping || this;
          var container = target.childNodesElement;
          target.childNodesElement = domFragment;
          super_.setChildNodes.call(this, childNodes, keepAlive);
          container.insertBefore(domFragment, container.insertPoint || null);
          target.childNodesElement = container;
        }
      };
    };
    var PartitionNode = Class(DWPartitionNode, TemplateMixin, {
      className: namespace + ".PartitionNode",
      binding: {
        title: "data:"
      }
    });
    var GroupingNode = Class(DWGroupingNode, ContainerTemplateMixin, {
      className: namespace + ".GroupingNode",
      childClass: PartitionNode,
      groupingClass: Class.SELF,
      element: null,
      childNodesElement: null,
      emit_ownerChanged: function(oldOwner) {
        this.syncDomRefs();
        DWGroupingNode.prototype.emit_ownerChanged.call(this, oldOwner);
      },
      init: function() {
        this.element = this.childNodesElement = document.createDocumentFragment();
        DWGroupingNode.prototype.init.call(this);
        instances[this.basisObjectId] = this;
        notifier.set({
          action: "create",
          instance: this
        });
      },
      syncDomRefs: function() {
        var cursor = this;
        var owner = this.owner;
        var element = null;
        if (owner) element = owner.tmpl && owner.tmpl.groupsElement || owner.childNodesElement;
        do {
          cursor.element = cursor.childNodesElement = element;
        } while (cursor = cursor.grouping);
      },
      destroy: function() {
        delete instances[this.basisObjectId];
        notifier.set({
          action: "destroy",
          instance: this
        });
        DWGroupingNode.prototype.destroy.call(this);
        this.element = null;
        this.childNodesElement = null;
      }
    });
    var Node = Class(DWNode, TemplateMixin, ContainerTemplateMixin, {
      className: namespace + ".Node",
      binding: {
        selected: {
          events: "select unselect",
          getter: function(node) {
            return node.selected;
          }
        },
        unselected: {
          events: "select unselect",
          getter: function(node) {
            return !node.selected;
          }
        },
        disabled: {
          events: "disable enable",
          getter: function(node) {
            return node.isDisabled();
          }
        },
        enabled: {
          events: "disable enable",
          getter: function(node) {
            return !node.isDisabled();
          }
        },
        tabindex: {
          events: "enable disable",
          getter: function(node) {
            return node.isDisabled() ? -1 : node.tabindex || 0;
          }
        }
      },
      childClass: Class.SELF,
      childFactory: function(config) {
        return new this.childClass(config);
      },
      groupingClass: GroupingNode
    });
    var ShadowNodeList = Node.subclass({
      className: namespace + ".ShadowNodeList",
      emit_ownerChanged: function(oldOwner) {
        Node.prototype.emit_ownerChanged.call(this, oldOwner);
        this.setDataSource(this.owner && this.owner.getChildNodesDataset());
      },
      getChildNodesElement: function(owner) {
        return owner.childNodesElement;
      },
      listen: {
        owner: {
          templateChanged: function() {
            this.childNodes.forEach(function(child) {
              this.appendChild(child.element);
            }, this.getChildNodesElement(this.owner) || this.owner.element);
          }
        }
      },
      childClass: {
        className: namespace + ".ShadowNode",
        getElement: function(node) {
          return node.element;
        },
        templateSync: function() {
          Node.prototype.templateSync.call(this);
          var newElement = this.getElement(this.delegate);
          if (newElement) {
            newElement[htmlTemplateIdMarker] = this.delegate.element[htmlTemplateIdMarker];
            this.element = newElement;
          }
        },
        listen: {
          delegate: {
            templateChanged: function() {
              var oldElement = this.element;
              var oldElementParent = oldElement.parentNode;
              var newElement = this.getElement(this.delegate);
              if (newElement) newElement[htmlTemplateIdMarker] = this.delegate.element[htmlTemplateIdMarker];
              this.element = newElement || this.tmpl.element;
              if (oldElementParent) oldElementParent.replaceChild(this.element, oldElement);
            }
          }
        }
      }
    });
    module.exports = {
      debug_notifier: notifier,
      debug_getInstances: function() {
        return basis.object.values(instances);
      },
      BINDING_PRESET: BINDING_PRESET,
      Node: Node,
      PartitionNode: PartitionNode,
      GroupingNode: GroupingNode,
      ShadowNodeList: ShadowNodeList,
      ShadowNode: ShadowNodeList.prototype.childClass
    };
  },
  "x.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var STATE = basis.require("./1.js").STATE;
    var DataObject = basis.require("./1.js").Object;
    var coreTest = basis.require("./i.js");
    var appTest = basis.require("./n.js");
    var view = new appTest.TestSuiteNode({
      template: basis.template.get("#8"),
      binding: {
        sourceCode: "satellite:",
        type: [ "update", function(node) {
          return node.data.type || "unknown";
        } ],
        hasDelegate: [ "delegateChanged", function(node) {
          return !!node.delegate;
        } ]
      },
      isRootNode: true,
      selection: true,
      satellite: {
        sourceCode: {
          satelliteClass: appTest.CodeView,
          events: "update stateChanged",
          existsIf: function(owner) {
            return owner.data.type == "case";
          },
          delegate: function(owner) {
            return owner.state == STATE.ERROR && owner.state.data instanceof DataObject ? owner.state.data : owner;
          }
        }
      }
    });
    view.contextSelection = view.selection;
    view.addHandler({
      delegateChanged: function() {
        this.selection.clear();
      }
    });
    module.exports = view;
  },
  "n.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var Value = basis.require("./1.js").Value;
    var DataObject = basis.require("./1.js").Object;
    var STATE = basis.require("./1.js").STATE;
    var Node = basis.require("./4.js").Node;
    var document = global.document;
    var highlight = basis.require("./o.js");
    var TestCase = basis.require("./i.js").TestCase;
    var strDiff = basis.require("./p.js");
    function htmlEscape(str) {
      return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
    var CodeView = Node.subclass({
      template: basis.template.get("#4"),
      binding: {
        beforeCode: "beforeElement",
        beforeCount: {
          events: "rootChanged update",
          getter: function(node) {
            return node.getBeforeAfterInfo().beforeCount;
          }
        },
        beforeCollapsed: "beforeCollapsed",
        sourceCode: "mainElement",
        afterCode: "afterElement",
        afterCount: {
          events: "rootChanged update",
          getter: function(node) {
            return node.getBeforeAfterInfo().afterCount;
          }
        },
        afterCollapsed: "afterCollapsed",
        hasParent: {
          events: "ownerChanged",
          getter: function(node) {
            return Value.from(node.owner, "parentChanged", function(owner) {
              return owner.parentNode ? !owner.parentNode.isRootNode : false;
            });
          }
        }
      },
      action: {
        toggleBefore: function() {
          this.beforeCollapsed.set(!this.beforeCollapsed.value);
        },
        toggleAfter: function() {
          this.afterCollapsed.set(!this.afterCollapsed.value);
        }
      },
      init: function() {
        this.beforeElement = document.createElement("div");
        this.beforeCollapsed = new basis.Token(true);
        this.mainElement = document.createElement("div");
        this.afterElement = document.createElement("div");
        this.afterCollapsed = new basis.Token(true);
        Node.prototype.init.call(this);
        this.syncCode();
      },
      destroy: function() {
        this.lines = null;
        this.beforeElement = null;
        this.beforeCollapsed = null;
        this.mainElement = null;
        this.afterElement = null;
        this.afterCollapsed = null;
        Node.prototype.destroy.call(this);
      },
      emit_update: function(delta) {
        Node.prototype.emit_update.call(this, delta);
        this.syncCode();
      },
      getSourceCode: function() {
        return this.root instanceof TestCase == false ? this.data.testSource : this.root.getSourceCode();
      },
      getBeforeAfterInfo: function() {
        return this.root instanceof TestCase == false ? this.data : this.root.getBeforeAfterInfo();
      },
      syncCode: function() {
        var sourceCode = this.getSourceCode();
        var beforeAfterInfo = this.getBeforeAfterInfo();
        this.mainElement.innerHTML = highlight(sourceCode, {
          keepFormating: true,
          noLineNumber: true
        });
        var lines = basis.array.from(this.mainElement.childNodes);
        if (this.data.exception) {
          var startLine = this.data.lastLine;
          if (beforeAfterInfo.beforeLines && startLine < beforeAfterInfo.beforeLines) this.beforeCollapsed.set(false);
          if (beforeAfterInfo.afterLines && startLine >= lines.length - beforeAfterInfo.afterLines) this.afterCollapsed.set(false);
          lines[startLine++].className += " exception-line";
          for (var i = startLine; i < lines.length; i++) lines[i].className += " disabled-line";
        } else {
          var errorLines = this.data.errorLines;
          for (var lineNum in errorLines) {
            lines[lineNum].className += " error-line";
            lines[lineNum].innerHTML += '<div class="error-line-details">' + errorLines[lineNum].map(function(lineError) {
              var diffType = typeof lineError.expected == "string" && typeof lineError.actual == "string" ? "diffChars" : "diffWords";
              var diff = strDiff[diffType](lineError.expectedStr, lineError.actualStr);
              var expected = "";
              var actual = "";
              for (var i = 0, chunk; chunk = diff[i]; i++) {
                if (chunk.removed) {
                  expected += '<span class="diff-removed">' + htmlEscape(chunk.value) + "</span>";
                  continue;
                }
                if (chunk.added) {
                  actual += '<span class="diff-added">' + htmlEscape(chunk.value) + "</span>";
                  continue;
                }
                expected += htmlEscape(chunk.value);
                actual += htmlEscape(chunk.value);
              }
              return '<div class="error-line-details-item">' + '<span class="num">' + (lineError.num + 1) + "</span>" + '<span class="caption">Expected:</span>' + '<span class="expected">' + expected + "</span>" + '<span class="caption">Actual:</span>' + '<span class="actual">' + actual + "</span>" + "</div>";
            }).join("") + "</div>";
          }
        }
        if (beforeAfterInfo.afterLines) {
          this.afterElement.innerHTML = "";
          lines.slice(lines.length - beforeAfterInfo.afterLines).forEach(function(line) {
            this.afterElement.appendChild(line);
          }, this);
        }
        if (beforeAfterInfo.beforeLines) {
          this.beforeElement.innerHTML = "";
          lines.slice(0, beforeAfterInfo.beforeLines).forEach(function(line) {
            this.beforeElement.appendChild(line);
          }, this);
        }
      }
    });
    var TestNode = Node.subclass({
      template: basis.template.get("#5"),
      binding: {
        name: "data:",
        loc: [ "update", function(node) {
          return node.data.loc || "";
        } ],
        hasOwnEnvironment: [ "rootChanged", function(node) {
          return node.root.hasOwnEnvironment();
        } ],
        time: [ "stateChanged", function(node) {
          return node.state.data && node.state.data.data && node.state.data.data.time;
        } ],
        errorMessage: [ "stateChanged", function(node) {
          return node.state == STATE.ERROR && node.state.data ? node.state.data.data.error : "";
        } ],
        pending: [ "stateChanged", function(node) {
          return node.state.data instanceof DataObject && Boolean(node.state.data.data.pending);
        } ],
        stateData: [ "stateChanged", function(node) {
          return node.state == STATE.PROCESSING ? (100 * node.state.data || 0).toFixed(2) : node.state.data instanceof DataObject && node.state.data.data.error || "";
        } ],
        stateMessage: [ "stateChanged", function(node) {
          var report = node.state.data;
          switch (String(node.state)) {
            case STATE.READY:
              if (report instanceof DataObject) {
                if (report.data.pending) return "Pending";
              }
              return "OK";
            case STATE.ERROR:
              if (report instanceof DataObject == false) return "Error";
              if (report.data.exception) return report.data.exception;
              if (report.data.error == "ERROR_TIMEOUT") return "Timeout";
              return report.data.testCount - report.data.successCount + " of " + report.data.testCount + " fault";
            case STATE.PROCESSING:
              return "running";
            default:
              return "";
          }
        } ]
      },
      action: {
        openLoc: function() {
          if (this.data.loc) basis.require("./0.js").notifyLoader("loc", this.data.loc);
        }
      }
    });
    var TestSuiteNode = TestNode.subclass({
      dataSource: Value.factory("rootChanged", function(node) {
        return node.root ? node.root.getChildNodesDataset() : null;
      }),
      template: basis.template.get("#6"),
      childClass: TestNode,
      childFactory: function(config) {
        if (config.delegate.data.type == "case") return new TestCaseNode(config); else return new TestSuiteNode(config);
      }
    });
    var TestCaseNode = TestNode.subclass({
      template: basis.template.get("#7"),
      binding: {
        source: "satellite:"
      },
      satellite: {
        source: {
          events: "stateChanged",
          existsIf: function(owner) {
            return owner.state == STATE.ERROR && owner.state.data instanceof DataObject && owner.state.data.data.testSource;
          },
          delegate: "state.data",
          satelliteClass: CodeView
        }
      }
    });
    module.exports = {
      TestNode: TestNode,
      TestCaseNode: TestCaseNode,
      TestSuiteNode: TestSuiteNode,
      CodeView: CodeView
    };
  },
  "o.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var lead = basis.number.lead;
    var repeat = basis.string.repeat;
    var keywords = "break case catch continue " + "default delete do else false " + "for function if in instanceof " + "new null return super switch " + "this throw true try typeof var while with";
    var keywordRegExp = new RegExp("\\b(" + keywords.split(" ").join("|") + ")\\b", "g");
    function parse(text) {
      function addMatch(kind, start, end, rn) {
        if (lastMatchPos != start) result.push(text.substring(lastMatchPos, start).replace(keywordRegExp, '<span class="token-keyword">$1</span>'));
        lastMatchPos = end + 1;
        if (kind) result.push('<span class="token-' + kind + '">' + text.substring(start, end + 1) + "</span>" + (rn || ""));
      }
      var result = [];
      var sym = text.split("");
      var start;
      var lastMatchPos = 0;
      var strSym;
      for (var i = 0; i < sym.length; i++) {
        if (sym[i] == "'" || sym[i] == '"') {
          strSym = sym[i];
          start = i;
          while (++i < sym.length) {
            if (sym[i] == "\\") {
              if (sym[i + 1] == "\n") {
                addMatch("string", start, i);
                start = ++i + 1;
              } else i += 2;
            }
            if (sym[i] == strSym) {
              addMatch("string", start, i);
              break;
            }
            if (sym[i] == "\n") break;
          }
        } else if (sym[i] == "/") {
          start = i;
          i++;
          if (sym[i] == "/") {
            while (++i < sym.length) {
              if (sym[i] == "\n") break;
            }
            addMatch("comment", start, i - 1);
          } else if (sym[i] == "*") {
            while (++i < sym.length) {
              if (sym[i] == "*" && sym[i + 1] == "/") {
                addMatch("comment", start, ++i);
                break;
              } else if (sym[i] == "\n") {
                addMatch("comment", start, i - 1, "\n");
                lastMatchPos = start = i + 1;
              }
            }
          }
        }
      }
      addMatch(null, text.length);
      return result;
    }
    function highlight(text, options) {
      function normalize(text) {
        text = text.trimRight().replace(/\r\n|\n\r|\r/g, "\n");
        if (!options.keepFormating) text = text.replace(/^(?:\s*[\n]+)+?([ \t]*)/, "$1");
        text = text.replace(/\n[ \t]+/g, function(m) {
          return m.replace(/\t/g, "  ");
        }).replace(/\n[ \t]+\n/g, "\n\n");
        if (!options.keepFormating) {
          var minOffset = 1e3;
          var lines = text.split(/\n+/);
          var startLine = Number(text.match(/^function/) != null);
          for (var i = startLine; i < lines.length; i++) {
            var m = lines[i].match(/^\s*/);
            if (m[0].length < minOffset) minOffset = m[0].length;
            if (minOffset == 0) break;
          }
          if (minOffset > 0) text = text.replace(new RegExp("(^|\\n) {" + minOffset + "}", "g"), "$1");
        }
        text = text.replace(new RegExp("(^|\\n)( +)", "g"), function(m, a, b) {
          return a + repeat(" ", b.length);
        });
        return text;
      }
      if (!options) options = {};
      var html = parse(normalize(text || "").replace(/&/g, "&amp;").replace(/</g, "&lt;"));
      var lines = html.join("").split("\n");
      var numberWidth = String(lines.length).length;
      var lineClass = options.noLineNumber ? "" : " hasLineNumber";
      var res = [];
      for (var i = 0; i < lines.length; i++) res.push('<div class="line ' + (i % 2 ? "odd" : "even") + lineClass + '">' + '<span class="lineContent">' + (!options.noLineNumber ? '<input class="lineNumber" value="' + lead(i + 1, numberWidth) + '" type="none" unselectable="on" readonly="readonly" tabindex="-1" />' + '<span class="over"></span>' : "") + (lines[i] + "\r\n") + "</span>" + "</div>");
      return res.join("");
    }
    module.exports = highlight;
  },
  "p.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var JsDiff = function() {
      function clonePath(path) {
        return {
          newPos: path.newPos,
          components: path.components.slice(0)
        };
      }
      function removeEmpty(array) {
        var ret = [];
        for (var i = 0; i < array.length; i++) {
          if (array[i]) {
            ret.push(array[i]);
          }
        }
        return ret;
      }
      function escapeHTML(s) {
        var n = s;
        n = n.replace(/&/g, "&amp;");
        n = n.replace(/</g, "&lt;");
        n = n.replace(/>/g, "&gt;");
        n = n.replace(/"/g, "&quot;");
        return n;
      }
      var Diff = function(ignoreWhitespace) {
        this.ignoreWhitespace = ignoreWhitespace;
      };
      Diff.prototype = {
        diff: function(oldString, newString) {
          if (newString === oldString) {
            return [ {
              value: newString
            } ];
          }
          if (!newString) {
            return [ {
              value: oldString,
              removed: true
            } ];
          }
          if (!oldString) {
            return [ {
              value: newString,
              added: true
            } ];
          }
          newString = this.tokenize(newString);
          oldString = this.tokenize(oldString);
          var newLen = newString.length, oldLen = oldString.length;
          var maxEditLength = newLen + oldLen;
          var bestPath = [ {
            newPos: -1,
            components: []
          } ];
          var oldPos = this.extractCommon(bestPath[0], newString, oldString, 0);
          if (bestPath[0].newPos + 1 >= newLen && oldPos + 1 >= oldLen) {
            return bestPath[0].components;
          }
          for (var editLength = 1; editLength <= maxEditLength; editLength++) {
            for (var diagonalPath = -1 * editLength; diagonalPath <= editLength; diagonalPath += 2) {
              var basePath;
              var addPath = bestPath[diagonalPath - 1], removePath = bestPath[diagonalPath + 1];
              oldPos = (removePath ? removePath.newPos : 0) - diagonalPath;
              if (addPath) {
                bestPath[diagonalPath - 1] = undefined;
              }
              var canAdd = addPath && addPath.newPos + 1 < newLen;
              var canRemove = removePath && 0 <= oldPos && oldPos < oldLen;
              if (!canAdd && !canRemove) {
                bestPath[diagonalPath] = undefined;
                continue;
              }
              if (!canAdd || canRemove && addPath.newPos < removePath.newPos) {
                basePath = clonePath(removePath);
                this.pushComponent(basePath.components, oldString[oldPos], undefined, true);
              } else {
                basePath = clonePath(addPath);
                basePath.newPos++;
                this.pushComponent(basePath.components, newString[basePath.newPos], true, undefined);
              }
              var oldPos = this.extractCommon(basePath, newString, oldString, diagonalPath);
              if (basePath.newPos + 1 >= newLen && oldPos + 1 >= oldLen) {
                return basePath.components;
              } else {
                bestPath[diagonalPath] = basePath;
              }
            }
          }
        },
        pushComponent: function(components, value, added, removed) {
          var last = components[components.length - 1];
          if (last && last.added === added && last.removed === removed) {
            components[components.length - 1] = {
              value: this.join(last.value, value),
              added: added,
              removed: removed
            };
          } else {
            components.push({
              value: value,
              added: added,
              removed: removed
            });
          }
        },
        extractCommon: function(basePath, newString, oldString, diagonalPath) {
          var newLen = newString.length, oldLen = oldString.length, newPos = basePath.newPos, oldPos = newPos - diagonalPath;
          while (newPos + 1 < newLen && oldPos + 1 < oldLen && this.equals(newString[newPos + 1], oldString[oldPos + 1])) {
            newPos++;
            oldPos++;
            this.pushComponent(basePath.components, newString[newPos], undefined, undefined);
          }
          basePath.newPos = newPos;
          return oldPos;
        },
        equals: function(left, right) {
          var reWhitespace = /\S/;
          if (this.ignoreWhitespace && !reWhitespace.test(left) && !reWhitespace.test(right)) {
            return true;
          } else {
            return left === right;
          }
        },
        join: function(left, right) {
          return left + right;
        },
        tokenize: function(value) {
          return value;
        }
      };
      var CharDiff = new Diff;
      var WordDiff = new Diff(true);
      var WordWithSpaceDiff = new Diff;
      WordDiff.tokenize = WordWithSpaceDiff.tokenize = function(value) {
        return removeEmpty(value.split(/(\s+|\b)/));
      };
      var CssDiff = new Diff(true);
      CssDiff.tokenize = function(value) {
        return removeEmpty(value.split(/([{}:;,]|\s+)/));
      };
      var LineDiff = new Diff;
      LineDiff.tokenize = function(value) {
        var retLines = [], lines = value.split(/^/m);
        for (var i = 0; i < lines.length; i++) {
          var line = lines[i], lastLine = lines[i - 1];
          if (line == "\n" && lastLine && lastLine[lastLine.length - 1] === "\r") {
            retLines[retLines.length - 1] += "\n";
          } else if (line) {
            retLines.push(line);
          }
        }
        return retLines;
      };
      return {
        Diff: Diff,
        diffChars: function(oldStr, newStr) {
          return CharDiff.diff(oldStr, newStr);
        },
        diffWords: function(oldStr, newStr) {
          return WordDiff.diff(oldStr, newStr);
        },
        diffWordsWithSpace: function(oldStr, newStr) {
          return WordWithSpaceDiff.diff(oldStr, newStr);
        },
        diffLines: function(oldStr, newStr) {
          return LineDiff.diff(oldStr, newStr);
        },
        diffCss: function(oldStr, newStr) {
          return CssDiff.diff(oldStr, newStr);
        },
        createPatch: function(fileName, oldStr, newStr, oldHeader, newHeader) {
          var ret = [];
          ret.push("Index: " + fileName);
          ret.push("===================================================================");
          ret.push("--- " + fileName + (typeof oldHeader === "undefined" ? "" : "	" + oldHeader));
          ret.push("+++ " + fileName + (typeof newHeader === "undefined" ? "" : "	" + newHeader));
          var diff = LineDiff.diff(oldStr, newStr);
          if (!diff[diff.length - 1].value) {
            diff.pop();
          }
          diff.push({
            value: "",
            lines: []
          });
          function contextLines(lines) {
            return lines.map(function(entry) {
              return " " + entry;
            });
          }
          function eofNL(curRange, i, current) {
            var last = diff[diff.length - 2], isLast = i === diff.length - 2, isLastOfType = i === diff.length - 3 && (current.added !== last.added || current.removed !== last.removed);
            if (!/\n$/.test(current.value) && (isLast || isLastOfType)) {
              curRange.push("\\ No newline at end of file");
            }
          }
          var oldRangeStart = 0, newRangeStart = 0, curRange = [], oldLine = 1, newLine = 1;
          for (var i = 0; i < diff.length; i++) {
            var current = diff[i], lines = current.lines || current.value.replace(/\n$/, "").split("\n");
            current.lines = lines;
            if (current.added || current.removed) {
              if (!oldRangeStart) {
                var prev = diff[i - 1];
                oldRangeStart = oldLine;
                newRangeStart = newLine;
                if (prev) {
                  curRange = contextLines(prev.lines.slice(-4));
                  oldRangeStart -= curRange.length;
                  newRangeStart -= curRange.length;
                }
              }
              curRange.push.apply(curRange, lines.map(function(entry) {
                return (current.added ? "+" : "-") + entry;
              }));
              eofNL(curRange, i, current);
              if (current.added) {
                newLine += lines.length;
              } else {
                oldLine += lines.length;
              }
            } else {
              if (oldRangeStart) {
                if (lines.length <= 8 && i < diff.length - 2) {
                  curRange.push.apply(curRange, contextLines(lines));
                } else {
                  var contextSize = Math.min(lines.length, 4);
                  ret.push("@@ -" + oldRangeStart + "," + (oldLine - oldRangeStart + contextSize) + " +" + newRangeStart + "," + (newLine - newRangeStart + contextSize) + " @@");
                  ret.push.apply(ret, curRange);
                  ret.push.apply(ret, contextLines(lines.slice(0, contextSize)));
                  if (lines.length <= 4) {
                    eofNL(ret, i, current);
                  }
                  oldRangeStart = 0;
                  newRangeStart = 0;
                  curRange = [];
                }
              }
              oldLine += lines.length;
              newLine += lines.length;
            }
          }
          return ret.join("\n") + "\n";
        },
        applyPatch: function(oldStr, uniDiff) {
          var diffstr = uniDiff.split("\n");
          var diff = [];
          var remEOFNL = false, addEOFNL = false;
          for (var i = diffstr[0][0] === "I" ? 4 : 0; i < diffstr.length; i++) {
            if (diffstr[i][0] === "@") {
              var meh = diffstr[i].split(/@@ -(\d+),(\d+) \+(\d+),(\d+) @@/);
              diff.unshift({
                start: meh[3],
                oldlength: meh[2],
                oldlines: [],
                newlength: meh[4],
                newlines: []
              });
            } else if (diffstr[i][0] === "+") {
              diff[0].newlines.push(diffstr[i].substr(1));
            } else if (diffstr[i][0] === "-") {
              diff[0].oldlines.push(diffstr[i].substr(1));
            } else if (diffstr[i][0] === " ") {
              diff[0].newlines.push(diffstr[i].substr(1));
              diff[0].oldlines.push(diffstr[i].substr(1));
            } else if (diffstr[i][0] === "\\") {
              if (diffstr[i - 1][0] === "+") {
                remEOFNL = true;
              } else if (diffstr[i - 1][0] === "-") {
                addEOFNL = true;
              }
            }
          }
          var str = oldStr.split("\n");
          for (var i = diff.length - 1; i >= 0; i--) {
            var d = diff[i];
            for (var j = 0; j < d.oldlength; j++) {
              if (str[d.start - 1 + j] !== d.oldlines[j]) {
                return false;
              }
            }
            Array.prototype.splice.apply(str, [ d.start - 1, +d.oldlength ].concat(d.newlines));
          }
          if (remEOFNL) {
            while (!str[str.length - 1]) {
              str.pop();
            }
          } else if (addEOFNL) {
            str.push("");
          }
          return str.join("\n");
        },
        convertChangesToXML: function(changes) {
          var ret = [];
          for (var i = 0; i < changes.length; i++) {
            var change = changes[i];
            if (change.added) {
              ret.push("<ins>");
            } else if (change.removed) {
              ret.push("<del>");
            }
            ret.push(escapeHTML(change.value));
            if (change.added) {
              ret.push("</ins>");
            } else if (change.removed) {
              ret.push("</del>");
            }
          }
          return ret.join("");
        },
        convertChangesToDMP: function(changes) {
          var ret = [], change;
          for (var i = 0; i < changes.length; i++) {
            change = changes[i];
            ret.push([ change.added ? 1 : change.removed ? -1 : 0, change.value ]);
          }
          return ret;
        }
      };
    }();
    if (typeof module !== "undefined") {
      module.exports = JsDiff;
    }
  },
  "5.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var namespace = this.path;
    var document = global.document;
    var Node = global.Node;
    var domEvent = basis.require("./6.js");
    var arrayFrom = basis.array.from;
    var camelize = basis.string.camelize;
    var basisL10n = basis.require("./7.js");
    var getL10nToken = basisL10n.token;
    var L10nToken = basisL10n.Token;
    var getFunctions = basis.require("./8.js").getFunctions;
    var basisTemplate = basis.require("./a.js");
    var getL10nTemplate = basisTemplate.getL10nTemplate;
    var TemplateSwitchConfig = basisTemplate.TemplateSwitchConfig;
    var TemplateSwitcher = basisTemplate.TemplateSwitcher;
    var Template = basisTemplate.Template;
    var getSourceByPath = basisTemplate.get;
    var consts = basis.require("./9.js");
    var TYPE_ELEMENT = consts.TYPE_ELEMENT;
    var TYPE_ATTRIBUTE = consts.TYPE_ATTRIBUTE;
    var TYPE_ATTRIBUTE_CLASS = consts.TYPE_ATTRIBUTE_CLASS;
    var TYPE_ATTRIBUTE_STYLE = consts.TYPE_ATTRIBUTE_STYLE;
    var TYPE_ATTRIBUTE_EVENT = consts.TYPE_ATTRIBUTE_EVENT;
    var TYPE_TEXT = consts.TYPE_TEXT;
    var TYPE_COMMENT = consts.TYPE_COMMENT;
    var TOKEN_TYPE = consts.TOKEN_TYPE;
    var TOKEN_BINDINGS = consts.TOKEN_BINDINGS;
    var TOKEN_REFS = consts.TOKEN_REFS;
    var ATTR_NAME = consts.ATTR_NAME;
    var ATTR_VALUE = consts.ATTR_VALUE;
    var ATTR_NAME_BY_TYPE = consts.ATTR_NAME_BY_TYPE;
    var ATTR_VALUE_INDEX = consts.ATTR_VALUE_INDEX;
    var ELEMENT_NAME = consts.ELEMENT_NAME;
    var TEXT_VALUE = consts.TEXT_VALUE;
    var COMMENT_VALUE = consts.COMMENT_VALUE;
    var CLASS_BINDING_ENUM = consts.CLASS_BINDING_ENUM;
    var CLASS_BINDING_BOOL = consts.CLASS_BINDING_BOOL;
    var eventAttr = /^event-(.+)+/;
    var basisTemplateIdMarker = "basisTemplateId_" + basis.genUID();
    var tmplEventListeners = {};
    var templates = {};
    var namespaceURI = {
      svg: "http://www.w3.org/2000/svg"
    };
    var afterEventAction = {};
    var insideElementEvent = {};
    var MOUSE_ENTER_LEAVE_SUPPORT = "onmouseenter" in document.documentElement;
    var CAPTURE_FALLBACK = !document.addEventListener && "__basisTemplate" + parseInt(1e9 * Math.random());
    if (CAPTURE_FALLBACK) global[CAPTURE_FALLBACK] = function(eventName, event) {
      domEvent.fireEvent(document, eventName);
      event.returnValue = true;
      var listener = tmplEventListeners[eventName];
      if (listener) listener(new domEvent.Event(event));
    };
    var CLONE_NORMALIZATION_TEXT_BUG = function() {
      var element = document.createElement("div");
      element.appendChild(document.createTextNode("a"));
      element.appendChild(document.createTextNode("a"));
      return element.cloneNode(true).childNodes.length == 1;
    }();
    var SET_CLASS_ATTRIBUTE_BUG = function() {
      var element = document.createElement("div");
      element.setAttribute("class", "a");
      return !element.className;
    }();
    var SET_STYLE_ATTRIBUTE_BUG = function() {
      var element = document.createElement("div");
      element.setAttribute("style", "position:absolute");
      return element.style.position != "absolute";
    }();
    var IS_SET_STYLE_SAFE = !!function() {
      try {
        return document.documentElement.style.color = "x";
      } catch (e) {}
    }();
    var contains = function(parent, child) {
      return parent.contains(child);
    };
    if (Node && !Node.prototype.contains) contains = function(parent, child) {
      return !!(parent.compareDocumentPosition(child) & 16);
    };
    var l10nTemplates = {};
    function getSourceFromL10nToken(token) {
      var dict = token.dictionary;
      var url = dict.resource ? dict.resource.url : "";
      var id = token.name + "@" + url;
      var sourceWrapper;
      var result = token.as(function(value) {
        if (token.type == "markup") {
          if (value != this.value) if (sourceWrapper) {
            sourceWrapper.detach(token, token.apply);
            sourceWrapper = null;
          }
          if (value && value.substr(0, 5) == "path:") {
            sourceWrapper = getSourceByPath(value.substr(5));
            sourceWrapper.attach(token, token.apply);
          }
          return sourceWrapper ? sourceWrapper.bindingBridge.get(sourceWrapper) : value;
        }
        return this.value;
      });
      result.id = "{l10n:" + id + "}";
      result.url = url + ":" + token.name;
      return result;
    }
    function getL10nHtmlTemplate(token) {
      if (typeof token == "string") token = getL10nToken(token);
      if (!token) return null;
      var id = token.basisObjectId;
      var htmlTemplate = l10nTemplates[id];
      if (!htmlTemplate) htmlTemplate = l10nTemplates[id] = new HtmlTemplate(getSourceFromL10nToken(token));
      return htmlTemplate;
    }
    function createEventHandler(attrName) {
      return function(event) {
        if (event.type == "click" && event.which == 3) return;
        var bubble = insideElementEvent[event.type] || event.type != "mouseenter" && event.type != "mouseleave";
        var attrCursor = event.sender;
        var attr;
        while (attrCursor) {
          attr = attrCursor.getAttribute && attrCursor.getAttribute(attrName);
          if (!bubble || typeof attr == "string") break;
          attrCursor = attrCursor.parentNode;
        }
        if (typeof attr == "string") {
          var cursor = attrCursor;
          var actionTarget = cursor;
          var refId;
          var tmplRef;
          if (insideElementEvent[event.type]) {
            var relTarget = event.relatedTarget;
            if (relTarget && (cursor === relTarget || contains(cursor, relTarget))) cursor = null;
          }
          while (cursor) {
            refId = cursor[basisTemplateIdMarker];
            if (typeof refId == "number") {
              if (tmplRef = resolveInstanceById(refId)) break;
            }
            cursor = cursor.parentNode;
          }
          if (tmplRef && tmplRef.action) {
            var actions = attr.trim().split(/\s+/);
            event.actionTarget = actionTarget;
            for (var i = 0, actionName; actionName = actions[i++]; ) switch (actionName) {
              case "prevent-default":
                event.preventDefault();
                break;
              case "stop-propagation":
                event.stopPropagation();
                break;
              case "log-event":
                basis.dev.log("Template event:", event);
                break;
              default:
                tmplRef.action.call(tmplRef.context, actionName, event);
            }
          }
        }
        if (event.type in afterEventAction) afterEventAction[event.type](event, attrCursor);
      };
    }
    var buildHtml = function(tokens, parent) {
      function emulateEvent(origEventName, emulEventName) {
        regEventHandler(emulEventName);
        insideElementEvent[origEventName] = true;
        afterEventAction[emulEventName] = function(event) {
          event = new domEvent.Event(event);
          event.type = origEventName;
          tmplEventListeners[origEventName](event);
        };
        afterEventAction[origEventName] = function(event, cursor) {
          cursor = cursor && cursor.parentNode;
          if (cursor) {
            event = new domEvent.Event(event);
            event.type = origEventName;
            event.sender = cursor;
            tmplEventListeners[origEventName](event);
          }
        };
      }
      function regEventHandler(eventName) {
        if (!tmplEventListeners[eventName]) {
          tmplEventListeners[eventName] = createEventHandler("event-" + eventName);
          if (!CAPTURE_FALLBACK) {
            if (!MOUSE_ENTER_LEAVE_SUPPORT && eventName == "mouseenter") return emulateEvent(eventName, "mouseover");
            if (!MOUSE_ENTER_LEAVE_SUPPORT && eventName == "mouseleave") return emulateEvent(eventName, "mouseout");
            for (var i = 0, names = domEvent.browserEvents(eventName), browserEventName; browserEventName = names[i]; i++) domEvent.addGlobalHandler(browserEventName, tmplEventListeners[eventName]);
          }
        }
      }
      function setEventAttribute(eventName, actions) {
        regEventHandler(eventName);
        if (CAPTURE_FALLBACK) result.setAttribute("on" + eventName, CAPTURE_FALLBACK + '("' + eventName + '",event)');
        result.setAttribute("event-" + eventName, actions);
      }
      function setAttribute(name, value) {
        if (SET_CLASS_ATTRIBUTE_BUG && name == "class") name = "className";
        if (SET_STYLE_ATTRIBUTE_BUG && name == "style") return result.style.cssText = value;
        result.setAttribute(name, value);
      }
      var result = parent || document.createDocumentFragment();
      var tokenType;
      for (var i = parent ? 4 : 0, token; token = tokens[i]; i++) {
        tokenType = token[TOKEN_TYPE];
        switch (tokenType) {
          case TYPE_ELEMENT:
            var tagName = token[ELEMENT_NAME];
            var parts = tagName.split(/:/);
            var element = parts.length > 1 ? document.createElementNS(namespaceURI[parts[0]], tagName) : document.createElement(tagName);
            buildHtml(token, element);
            result.appendChild(element);
            break;
          case TYPE_ATTRIBUTE:
            if (!token[TOKEN_BINDINGS]) setAttribute(token[ATTR_NAME], token[ATTR_VALUE] || "");
            break;
          case TYPE_ATTRIBUTE_CLASS:
            var value = token[ATTR_VALUE_INDEX[tokenType]];
            value = value ? [ value ] : [];
            if (token[TOKEN_BINDINGS]) for (var j = 0, binding; binding = token[TOKEN_BINDINGS][j]; j++) {
              var defaultValue = binding[4];
              if (defaultValue) {
                var prefix = binding[0];
                if (Array.isArray(prefix)) {
                  value.push(binding[0][defaultValue - 1]);
                } else {
                  switch (binding[2]) {
                    case CLASS_BINDING_BOOL:
                      value.push(prefix + binding[3]);
                      break;
                    case CLASS_BINDING_ENUM:
                      value.push(prefix + binding[5][defaultValue - 1]);
                      break;
                  }
                }
              }
            }
            value = value.join(" ").trim();
            if (value) setAttribute("class", value);
            break;
          case TYPE_ATTRIBUTE_STYLE:
            var attrValue = token[ATTR_VALUE_INDEX[tokenType]];
            if (attrValue) setAttribute("style", attrValue);
            break;
          case TYPE_ATTRIBUTE_EVENT:
            setEventAttribute(token[1], token[2] || token[1]);
            break;
          case TYPE_COMMENT:
            result.appendChild(document.createComment(token[COMMENT_VALUE] || (token[TOKEN_REFS] ? "{" + token[TOKEN_REFS].join("|") + "}" : "")));
            break;
          case TYPE_TEXT:
            if (CLONE_NORMALIZATION_TEXT_BUG && i && tokens[i - 1][TOKEN_TYPE] == TYPE_TEXT) result.appendChild(document.createComment(""));
            result.appendChild(document.createTextNode(token[TEXT_VALUE] || (token[TOKEN_REFS] ? "{" + token[TOKEN_REFS].join("|") + "}" : "") || (token[TOKEN_BINDINGS] ? "{" + token[TOKEN_BINDINGS] + "}" : "")));
            break;
        }
      }
      if (!parent && tokens.length == 1) result = result.firstChild;
      return result;
    };
    function resolveTemplateById(refId) {
      var templateId = refId & 4095;
      var object = templates[templateId];
      return object && object.template;
    }
    function resolveInstanceById(refId) {
      var templateId = refId & 4095;
      var instanceId = refId >> 12;
      var object = templates[templateId];
      return object && object.instances[instanceId];
    }
    function resolveObjectById(refId) {
      var templateRef = resolveInstanceById(refId);
      return templateRef && templateRef.context;
    }
    function resolveTmplById(refId) {
      var templateRef = resolveInstanceById(refId);
      return templateRef && templateRef.tmpl;
    }
    function getDebugInfoById(refId) {
      var templateRef = resolveInstanceById(refId);
      return templateRef && templateRef.debug && templateRef.debug();
    }
    var builder = function() {
      var WHITESPACE = /\s+/;
      var CLASSLIST_SUPPORTED = global.DOMTokenList && document && document.documentElement.classList instanceof global.DOMTokenList;
      var W3C_DOM_NODE_SUPPORTED = function() {
        try {
          return document instanceof Node;
        } catch (e) {}
      }() || false;
      var bind_node = W3C_DOM_NODE_SUPPORTED ? function(domRef, oldNode, newValue, domNodeBindingProhibited) {
        var newNode = !domNodeBindingProhibited && newValue && newValue instanceof Node ? newValue : domRef;
        if (newNode !== oldNode) {
          if (newNode.nodeType === 11 && !newNode.insertedNodes) {
            newNode.insertBefore(document.createTextNode(""), newNode.firstChild);
            newNode.insertedNodes = basis.array(newNode.childNodes);
          }
          if (oldNode.nodeType === 11) {
            var insertedNodes = oldNode.insertedNodes;
            if (insertedNodes) {
              oldNode = insertedNodes[0];
              for (var i = 1, node; node = insertedNodes[i]; i++) oldNode.parentNode.removeChild(node);
            }
          }
          oldNode.parentNode.replaceChild(newNode, oldNode);
        }
        return newNode;
      } : function(domRef, oldNode, newValue, domNodeBindingProhibited) {
        var newNode = !domNodeBindingProhibited && newValue && typeof newValue == "object" ? newValue : domRef;
        if (newNode !== oldNode) {
          try {
            oldNode.parentNode.replaceChild(newNode, oldNode);
          } catch (e) {
            newNode = domRef;
            if (oldNode !== newNode) oldNode.parentNode.replaceChild(newNode, oldNode);
          }
        }
        return newNode;
      };
      var bind_element = function(domRef, oldNode, newValue, domNodeBindingProhibited) {
        var newNode = bind_node(domRef, oldNode, newValue, domNodeBindingProhibited);
        if (newNode === domRef && typeof newValue == "string") domRef.innerHTML = newValue;
        return newNode;
      };
      var bind_comment = bind_node;
      var bind_textNode = function(domRef, oldNode, newValue, domNodeBindingProhibited) {
        var newNode = bind_node(domRef, oldNode, newValue, domNodeBindingProhibited);
        if (newNode === domRef) domRef.nodeValue = String(newValue);
        return newNode;
      };
      var bind_attrClass = CLASSLIST_SUPPORTED ? function(domRef, oldClass, newValue, anim) {
        var newClass = newValue ? newValue : "";
        if (newClass != oldClass) {
          if (oldClass) domRef.classList.remove(oldClass);
          if (newClass) {
            domRef.classList.add(newClass);
            if (anim) {
              domRef.classList.add(newClass + "-anim");
              basis.nextTick(function() {
                domRef.classList.remove(newClass + "-anim");
              });
            }
          }
        }
        return newClass;
      } : function(domRef, oldClass, newValue, anim) {
        var newClass = newValue ? newValue : "";
        if (newClass != oldClass) {
          var className = domRef.className;
          var classNameIsObject = typeof className != "string";
          var classList;
          if (classNameIsObject) className = className.baseVal;
          classList = className.split(WHITESPACE);
          if (oldClass) basis.array.remove(classList, oldClass);
          if (newClass) {
            classList.push(newClass);
            if (anim) {
              basis.array.add(classList, newClass + "-anim");
              basis.nextTick(function() {
                var classList = (classNameIsObject ? domRef.className.baseVal : domRef.className).split(WHITESPACE);
                basis.array.remove(classList, newClass + "-anim");
                if (classNameIsObject) domRef.className.baseVal = classList.join(" "); else domRef.className = classList.join(" ");
              });
            }
          }
          if (classNameIsObject) domRef.className.baseVal = classList.join(" "); else domRef.className = classList.join(" ");
        }
        return newClass;
      };
      var bind_attrStyle = IS_SET_STYLE_SAFE ? function(domRef, propertyName, oldValue, newValue) {
        if (oldValue !== newValue) domRef.style[camelize(propertyName)] = newValue;
        return newValue;
      } : function(domRef, propertyName, oldValue, newValue) {
        if (oldValue !== newValue) {
          try {
            domRef.style[camelize(propertyName)] = newValue;
          } catch (e) {}
        }
        return newValue;
      };
      var bind_attr = function(domRef, attrName, oldValue, newValue) {
        if (oldValue !== newValue) {
          if (newValue) domRef.setAttribute(attrName, newValue); else domRef.removeAttribute(attrName);
        }
        return newValue;
      };
      function updateAttach() {
        this.set(this.name, this.value);
      }
      function resolveValue(bindingName, value, Attaches) {
        var bridge = value && value.bindingBridge;
        var oldAttach = this.attaches && this.attaches[bindingName];
        var tmpl = null;
        if (bridge || oldAttach) {
          if (bridge) {
            if (!oldAttach || value !== oldAttach.value) {
              if (oldAttach) {
                if (oldAttach.tmpl) getL10nHtmlTemplate(oldAttach.value).clearInstance(oldAttach.tmpl);
                oldAttach.value.bindingBridge.detach(oldAttach.value, updateAttach, oldAttach);
              }
              if (value.type == "markup" && value instanceof L10nToken) {
                var template = getL10nHtmlTemplate(value);
                var context = this.context;
                var bindings = this.bindings;
                var bindingInterface = this.bindingInterface;
                tmpl = template.createInstance(context, null, function onRebuild() {
                  tmpl = newAttach.tmpl = template.createInstance(context, null, onRebuild, bindings, bindingInterface);
                  tmpl.parent = tmpl.element.parentNode || tmpl.element;
                  updateAttach.call(newAttach);
                }, bindings, bindingInterface);
                tmpl.parent = tmpl.element.parentNode || tmpl.element;
              }
              if (!this.attaches) this.attaches = new Attaches;
              var newAttach = this.attaches[bindingName] = {
                name: bindingName,
                value: value,
                tmpl: tmpl,
                set: this.tmpl.set
              };
              bridge.attach(value, updateAttach, newAttach);
            } else tmpl = value && value.type == "markup" ? oldAttach.tmpl : null;
            if (tmpl) return tmpl.parent;
            value = bridge.get(value);
          } else {
            if (oldAttach) {
              if (oldAttach.tmpl) getL10nHtmlTemplate(oldAttach.value).clearInstance(oldAttach.tmpl);
              oldAttach.value.bindingBridge.detach(oldAttach.value, updateAttach, oldAttach);
              this.attaches[bindingName] = null;
            }
          }
        }
        return value;
      }
      function createBindingUpdater(names, getters) {
        var name1 = names[0];
        var name2 = names[1];
        var getter1 = getters[name1];
        var getter2 = getters[name2];
        switch (names.length) {
          case 1:
            return function bindingUpdater1(object) {
              this(name1, getter1(object));
            };
          case 2:
            return function bindingUpdater2(object) {
              this(name1, getter1(object));
              this(name2, getter2(object));
            };
          default:
            var getters_ = names.map(function(name) {
              return getters[name];
            });
            return function bindingUpdaterN(object) {
              for (var i = 0; i < names.length; i++) this(names[i], getters_[i](object));
            };
        }
      }
      function makeHandler(events, getters) {
        for (var name in events) events[name] = createBindingUpdater(events[name], getters);
        return name ? events : null;
      }
      function createBindingFunction(keys) {
        var bindingCache = {};
        return function getBinding(bindings, obj, set, bindingInterface) {
          if (!bindings) return {};
          var cacheId = "bindingId" in bindings ? bindings.bindingId : null;
          if (!cacheId) basis.dev.warn("basis.template.Template.getBinding: bindings has no bindingId property, cache is not used");
          var result = bindingCache[cacheId];
          if (!result) {
            var names = [];
            var getters = {};
            var events = {};
            for (var i = 0, bindingName; bindingName = keys[i]; i++) {
              var binding = bindings[bindingName];
              var getter = binding && binding.getter;
              if (getter) {
                getters[bindingName] = getter;
                names.push(bindingName);
                if (binding.events) {
                  var eventList = String(binding.events).trim().split(/\s+|\s*,\s*/);
                  for (var j = 0, eventName; eventName = eventList[j]; j++) {
                    if (events[eventName]) events[eventName].push(bindingName); else events[eventName] = [ bindingName ];
                  }
                }
              }
            }
            result = {
              names: names,
              sync: createBindingUpdater(names, getters),
              handler: makeHandler(events, getters)
            };
            if (cacheId) bindingCache[cacheId] = result;
          }
          if (set) result.sync.call(set, obj);
          if (!bindingInterface) return;
          if (result.handler) bindingInterface.attach(obj, result.handler, set);
          return result.handler;
        };
      }
      var tools = {
        bind_textNode: bind_textNode,
        bind_node: bind_node,
        bind_element: bind_element,
        bind_comment: bind_comment,
        bind_attr: bind_attr,
        bind_attrClass: bind_attrClass,
        bind_attrStyle: bind_attrStyle,
        resolve: resolveValue,
        l10nToken: getL10nToken,
        createBindingFunction: createBindingFunction
      };
      return function(tokens) {
        var fn = getFunctions(tokens, true, this.source.url, tokens.source_, !CLONE_NORMALIZATION_TEXT_BUG, basisTemplateIdMarker);
        var createInstance;
        var instances = {};
        var l10nMap = {};
        var l10nLinks = [];
        var l10nMarkupTokens = [];
        var seed = 0;
        var proto = buildHtml(tokens);
        var id = this.templateId;
        templates[id] = {
          template: this,
          instances: instances
        };
        if (fn.createL10nSync) {
          var l10nProtoSync = fn.createL10nSync(proto, l10nMap, bind_attr, CLONE_NORMALIZATION_TEXT_BUG);
          if (fn.l10nKeys) for (var i = 0, key; key = fn.l10nKeys[i]; i++) {
            var token = getL10nToken(key);
            var link = {
              path: key,
              token: token,
              handler: function(value) {
                var isMarkup = this.token.type == "markup";
                if (isMarkup) basis.array.add(l10nMarkupTokens, this); else basis.array.remove(l10nMarkupTokens, this);
                l10nProtoSync(this.path, isMarkup ? null : value);
                for (var key in instances) instances[key].tmpl.set(this.path, isMarkup ? this.token : value);
              }
            };
            link.token.attach(link.handler, link);
            l10nLinks.push(link);
            if (token.type == "markup") {
              l10nMarkupTokens.push(link);
              l10nProtoSync(key, null);
            } else {
              l10nProtoSync(key, token.value);
            }
            link = null;
            token = null;
          }
        }
        createInstance = fn.createInstance(id, instances, proto, tools, l10nMap, CLONE_NORMALIZATION_TEXT_BUG);
        return {
          createInstance: function(obj, onAction, onRebuild, bindings, bindingInterface) {
            var instanceId = seed++;
            var instance = createInstance(instanceId, obj, onAction, onRebuild, bindings, bindingInterface);
            for (var i = 0, len = l10nMarkupTokens.length; i < len; i++) instance.tmpl.set(l10nMarkupTokens[i].path, l10nMarkupTokens[i].token);
            instances[instanceId] = instance;
            return instance.tmpl;
          },
          destroyInstance: function(tmpl) {
            var instanceId = tmpl.templateId_;
            var instance = instances[instanceId];
            if (instance) {
              if (instance.handler) instance.bindingInterface.detach(instance.context, instance.handler, instance.tmpl.set);
              for (var key in instance.attaches) resolveValue.call(instance, key, null);
              delete instances[instanceId];
            }
          },
          keys: fn.keys,
          instances_: instances,
          destroy: function(rebuild) {
            for (var i = 0, link; link = l10nLinks[i]; i++) link.token.detach(link.handler, link);
            for (var key in instances) {
              var instance = instances[key];
              if (rebuild && instance.rebuild) instance.rebuild.call(instance.context);
              if (!rebuild || key in instances) {
                if (instance.handler) instance.bindingInterface.detach(instance.context, instance.handler, instance.tmpl.set);
                for (var key in instance.attaches) resolveValue.call(key, null);
              }
            }
            if (templates[id] && templates[id].instances === instances) delete templates[id];
            fn = null;
            proto = null;
            l10nMap = null;
            l10nLinks = null;
            l10nProtoSync = null;
            instances = null;
          }
        };
      };
    }();
    var HtmlTemplate = Template.subclass({
      className: namespace + ".Template",
      __extend__: function(value) {
        if (value instanceof HtmlTemplate) return value;
        if (value instanceof TemplateSwitchConfig) return new HtmlTemplateSwitcher(value);
        return new HtmlTemplate(value);
      },
      builder: builder
    });
    var HtmlTemplateSwitcher = TemplateSwitcher.subclass({
      className: namespace + ".TemplateSwitcher",
      templateClass: HtmlTemplate
    });
    module.exports = {
      marker: basisTemplateIdMarker,
      Template: HtmlTemplate,
      TemplateSwitcher: HtmlTemplateSwitcher
    };
    basis.namespace("basis.template").extend({
      getDebugInfoById: getDebugInfoById,
      buildHtml: buildHtml,
      resolveTemplateById: resolveTemplateById,
      resolveObjectById: resolveObjectById,
      resolveTmplById: resolveTmplById
    });
  },
  "6.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var namespace = this.path;
    var document = global.document;
    var $null = basis.fn.$null;
    var arrayFrom = basis.array.from;
    var globalEvents = {};
    var EVENT_HOLDER = "basisEvents_" + basis.genUID();
    var W3CSUPPORT = !!document.addEventListener;
    var KEY = {
      BACKSPACE: 8,
      TAB: 9,
      CTRL_ENTER: 10,
      ENTER: 13,
      SHIFT: 16,
      CTRL: 17,
      ALT: 18,
      ESC: 27,
      ESCAPE: 27,
      SPACE: 32,
      PAGEUP: 33,
      PAGEDOWN: 34,
      END: 35,
      HOME: 36,
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40,
      INSERT: 45,
      DELETE: 46,
      F1: 112,
      F2: 113,
      F3: 114,
      F4: 115,
      F5: 116,
      F6: 117,
      F7: 118,
      F8: 119,
      F9: 120,
      F10: 121,
      F11: 122,
      F12: 123
    };
    var MOUSE_LEFT = {
      VALUE: 1,
      BIT: 1
    };
    var MOUSE_MIDDLE = {
      VALUE: 2,
      BIT: 4
    };
    var MOUSE_RIGHT = {
      VALUE: 3,
      BIT: 2
    };
    var BROWSER_EVENTS = {
      mousewheel: [ "wheel", "mousewheel", "DOMMouseScroll" ]
    };
    function browserEvents(eventName) {
      return BROWSER_EVENTS[eventName] || [ eventName ];
    }
    var Event = basis.Class(null, {
      className: namespace + ".Event",
      KEY: KEY,
      init: function(event) {
        event = wrap(event);
        for (var name in event) if (name != "returnValue" && name != "keyLocation" && name != "layerX" && name != "layerY" && (event.type != "progress" || name != "totalSize" && name != "position")) if (typeof event[name] != "function" && name in this == false) this[name] = event[name];
        var target = sender(event);
        basis.object.extend(this, {
          event_: event,
          sender: target,
          target: target,
          key: key(event),
          charCode: charCode(event),
          mouseLeft: mouseButton(event, MOUSE_LEFT),
          mouseMiddle: mouseButton(event, MOUSE_MIDDLE),
          mouseRight: mouseButton(event, MOUSE_RIGHT),
          mouseX: mouseX(event),
          mouseY: mouseY(event),
          wheelDelta: wheelDelta(event)
        });
      },
      stopBubble: function() {
        cancelBubble(this.event_);
      },
      stopPropagation: function() {
        cancelBubble(this.event_);
      },
      preventDefault: function() {
        cancelDefault(this.event_);
      },
      die: function() {
        this.stopBubble();
        this.preventDefault();
      }
    });
    function wrap(event) {
      return event instanceof Event ? event.event_ : event || global.event;
    }
    function getNode(ref) {
      return typeof ref == "string" ? document.getElementById(ref) : ref;
    }
    function sender(event) {
      var target = event.target || event.srcElement || document;
      return target.nodeType == 3 ? target.parentNode : target;
    }
    function cancelBubble(event) {
      if (event.stopPropagation) event.stopPropagation(); else event.cancelBubble = true;
    }
    function cancelDefault(event) {
      if (event.preventDefault) event.preventDefault(); else event.returnValue = false;
    }
    function kill(event, node) {
      node = getNode(node);
      if (node) addHandler(node, event, kill); else {
        cancelDefault(event);
        cancelBubble(event);
      }
    }
    function key(event) {
      return event.keyCode || event.which || 0;
    }
    function charCode(event) {
      return event.charCode || event.keyCode || 0;
    }
    function mouseButton(event, button) {
      if (typeof event.which == "number") return event.which == button.VALUE; else return !!(event.button & button.BIT);
    }
    function mouseX(event) {
      if (event.changedTouches) return event.changedTouches[0].pageX; else if ("pageX" in event) return event.pageX; else return "clientX" in event ? event.clientX + (document.compatMode == "CSS1Compat" ? document.documentElement.scrollLeft : document.body.scrollLeft) : 0;
    }
    function mouseY(event) {
      if (event.changedTouches) return event.changedTouches[0].pageY; else if ("pageY" in event) return event.pageY; else return "clientY" in event ? event.clientY + (document.compatMode == "CSS1Compat" ? document.documentElement.scrollTop : document.body.scrollTop) : 0;
    }
    function wheelDelta(event) {
      var delta = 0;
      if ("deltaY" in event) delta = -event.deltaY; else if ("wheelDelta" in event) delta = event.wheelDelta; else if (event.type == "DOMMouseScroll") delta = -event.detail;
      return delta && delta / Math.abs(delta);
    }
    var globalHandlers = {};
    var captureHandlers = {};
    var noCaptureScheme = !W3CSUPPORT;
    var flushAsap = true;
    var lastAsapEvent;
    function processAsap(event) {
      if (flushAsap && event !== lastAsapEvent) {
        lastAsapEvent = event;
        basis.asap.process();
      }
    }
    function observeGlobalEvents(event) {
      var handlers = arrayFrom(globalHandlers[event.type]);
      var captureHandler = captureHandlers[event.type];
      var wrappedEvent = new Event(event);
      if (captureHandler) {
        captureHandler.handler.call(captureHandler.thisObject, wrappedEvent);
      } else {
        if (handlers) {
          for (var i = handlers.length; i-- > 0; ) {
            var handlerObject = handlers[i];
            handlerObject.handler.call(handlerObject.thisObject, wrappedEvent);
          }
        }
      }
      processAsap(event);
    }
    function captureEvent(eventType, handler, thisObject) {
      if (captureHandlers[eventType]) releaseEvent(eventType);
      if (!handler) handler = basis.fn.$undef;
      addGlobalHandler(eventType, handler, thisObject);
      captureHandlers[eventType] = {
        handler: handler,
        thisObject: thisObject
      };
    }
    function releaseEvent(eventType) {
      var handlerObject = captureHandlers[eventType];
      if (handlerObject) {
        removeGlobalHandler(eventType, handlerObject.handler, handlerObject.thisObject);
        delete captureHandlers[eventType];
      }
    }
    function addGlobalHandler(eventType, handler, thisObject) {
      var handlers = globalHandlers[eventType];
      if (handlers) {
        for (var i = 0, item; item = handlers[i]; i++) if (item.handler === handler && item.thisObject === thisObject) return;
      } else {
        if (noCaptureScheme) addHandler(document, eventType, $null); else document.addEventListener(eventType, observeGlobalEvents, true);
        handlers = globalHandlers[eventType] = [];
      }
      handlers.push({
        handler: handler,
        thisObject: thisObject
      });
    }
    function removeGlobalHandler(eventType, handler, thisObject) {
      var handlers = globalHandlers[eventType];
      if (handlers) {
        for (var i = 0, item; item = handlers[i]; i++) {
          if (item.handler === handler && item.thisObject === thisObject) {
            handlers.splice(i, 1);
            if (!handlers.length) {
              delete globalHandlers[eventType];
              if (noCaptureScheme) removeHandler(document, eventType, $null); else document.removeEventListener(eventType, observeGlobalEvents, true);
            }
            return;
          }
        }
      }
    }
    function addHandler(node, eventType, handler, thisObject) {
      node = getNode(node);
      if (!node) throw "basis.event.addHandler: can't attach event listener to undefined";
      if (typeof handler != "function") throw "basis.event.addHandler: handler is not a function";
      var handlers = node === global ? globalEvents : node[EVENT_HOLDER];
      if (!handlers) handlers = node[EVENT_HOLDER] = {};
      var eventTypeHandlers = handlers[eventType];
      var handlerObject = {
        handler: handler,
        thisObject: thisObject
      };
      if (!eventTypeHandlers) {
        eventTypeHandlers = handlers[eventType] = [ handlerObject ];
        eventTypeHandlers.fireEvent = function(event) {
          event = wrap(event);
          if (noCaptureScheme && event && globalHandlers[eventType]) {
            if (typeof event.returnValue == "undefined") {
              observeGlobalEvents(event);
              if (event.cancelBubble === true) return;
              if (typeof event.returnValue == "undefined") event.returnValue = true;
            }
          }
          for (var i = 0, wrappedEvent = new Event(event), item; item = eventTypeHandlers[i++]; ) item.handler.call(item.thisObject, wrappedEvent);
          processAsap(event);
        };
        if (W3CSUPPORT) node.addEventListener(eventType, eventTypeHandlers.fireEvent, false); else node.attachEvent("on" + eventType, eventTypeHandlers.fireEvent);
      } else {
        for (var i = 0, item; item = eventTypeHandlers[i]; i++) if (item.handler === handler && item.thisObject === thisObject) return;
        eventTypeHandlers.push(handlerObject);
      }
    }
    function addHandlers(node, handlers, thisObject) {
      node = getNode(node);
      for (var eventType in handlers) addHandler(node, eventType, handlers[eventType], thisObject);
    }
    function removeHandler(node, eventType, handler, thisObject) {
      node = getNode(node);
      var handlers = node === global ? globalEvents : node[EVENT_HOLDER];
      if (handlers) {
        var eventTypeHandlers = handlers[eventType];
        if (eventTypeHandlers) {
          for (var i = 0, item; item = eventTypeHandlers[i]; i++) {
            if (item.handler === handler && item.thisObject === thisObject) {
              eventTypeHandlers.splice(i, 1);
              if (!eventTypeHandlers.length) clearHandlers(node, eventType);
              return;
            }
          }
        }
      }
    }
    function clearHandlers(node, eventType) {
      node = getNode(node);
      var handlers = node === global ? globalEvents : node[EVENT_HOLDER];
      if (handlers) {
        if (typeof eventType != "string") {
          for (eventType in handlers) clearHandlers(node, eventType);
        } else {
          var eventTypeHandlers = handlers[eventType];
          if (eventTypeHandlers) {
            if (node.removeEventListener) node.removeEventListener(eventType, eventTypeHandlers.fireEvent, false); else node.detachEvent("on" + eventType, eventTypeHandlers.fireEvent);
            delete handlers[eventType];
          }
        }
      }
    }
    function fireEvent(node, eventType, event) {
      node = getNode(node);
      var handlers = node === global ? globalEvents : node[EVENT_HOLDER];
      if (handlers && handlers[eventType]) {
        try {
          flushAsap = false;
          handlers[eventType].fireEvent(event);
        } finally {
          flushAsap = true;
        }
      }
    }
    function onUnload(handler, thisObject) {
      basis.dev.warn("basis.dom.event.onUnload() is deprecated, use basis.teardown() instead");
      basis.teardown(handler, thisObject);
    }
    var tagNameEventMap = {};
    function getEventInfo(eventName, tagName) {
      if (!tagName) tagName = "div";
      var id = tagName + "-" + eventName;
      if (tagNameEventMap[id]) return tagNameEventMap[id]; else {
        var supported = false;
        var bubble = false;
        if (!W3CSUPPORT) {
          var onevent = "on" + eventName;
          var host = document.createElement("div");
          var target = host.appendChild(document.createElement(tagName));
          host[onevent] = function() {
            bubble = true;
          };
          try {
            target.fireEvent(onevent);
            supported = true;
          } catch (e) {}
        }
        return tagNameEventMap[id] = {
          supported: supported,
          bubble: bubble
        };
      }
    }
    function wrapEventFunction(fn) {
      return function(event, arg) {
        return fn(wrap(event), arg);
      };
    }
    module.exports = {
      W3CSUPPORT: W3CSUPPORT,
      browserEvents: browserEvents,
      getEventInfo: getEventInfo,
      KEY: KEY,
      MOUSE_LEFT: MOUSE_LEFT,
      MOUSE_RIGHT: MOUSE_RIGHT,
      MOUSE_MIDDLE: MOUSE_MIDDLE,
      Event: Event,
      sender: wrapEventFunction(sender),
      cancelBubble: wrapEventFunction(cancelBubble),
      cancelDefault: wrapEventFunction(cancelDefault),
      kill: wrapEventFunction(kill),
      key: wrapEventFunction(key),
      charCode: wrapEventFunction(charCode),
      mouseButton: wrapEventFunction(mouseButton),
      mouseX: wrapEventFunction(mouseX),
      mouseY: wrapEventFunction(mouseY),
      wheelDelta: wrapEventFunction(wheelDelta),
      addGlobalHandler: addGlobalHandler,
      removeGlobalHandler: removeGlobalHandler,
      captureEvent: captureEvent,
      releaseEvent: releaseEvent,
      addHandler: addHandler,
      addHandlers: addHandlers,
      removeHandler: removeHandler,
      clearHandlers: clearHandlers,
      fireEvent: fireEvent,
      onUnload: onUnload,
      wrap: wrap
    };
  },
  "7.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var namespace = this.path;
    var Class = basis.Class;
    var Emitter = basis.require("./2.js").Emitter;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    basis.resource.extensions[".l10n"] = function(content, url) {
      return resolveDictionary(url).update(basis.resource.extensions[".json"](content, url));
    };
    function ownKeys(object) {
      var result = [];
      for (var key in object) if (hasOwnProperty.call(object, key)) result.push(key);
      return result;
    }
    var tokenIndex = [];
    var tokenComputeFn = {};
    var tokenComputes = {};
    var updateToken = basis.Token.prototype.set;
    var ComputeToken = Class(basis.Token, {
      className: namespace + ".ComputeToken",
      init: function(value, token) {
        token.computeTokens[this.basisObjectId] = this;
        this.token = token;
        basis.Token.prototype.init.call(this, value);
      },
      get: function() {
        var isPlural = this.token.type == "plural";
        var key = isPlural ? cultures[currentCulture].plural(this.value) : this.value;
        var value = this.token.dictionary.getValue(this.token.name + "." + key);
        if (isPlural) value = String(value).replace(/#/g, this.value);
        return value;
      },
      toString: function() {
        return this.get();
      },
      destroy: function() {
        delete this.token.computeTokens[this.basisObjectId];
        this.token = null;
        basis.Token.prototype.destroy.call(this);
      }
    });
    var Token = Class(basis.Token, {
      className: namespace + ".Token",
      index: NaN,
      dictionary: null,
      name: "",
      type: "default",
      computeTokens: null,
      init: function(dictionary, tokenName, type, value) {
        basis.Token.prototype.init.call(this, value);
        this.index = tokenIndex.push(this) - 1;
        this.name = tokenName;
        this.dictionary = dictionary;
        this.computeTokens = {};
        if (type) this.setType(type); else this.apply();
      },
      toString: function() {
        return this.get();
      },
      apply: function() {
        for (var key in this.computeTokens) this.computeTokens[key].apply();
        basis.Token.prototype.apply.call(this);
      },
      set: function() {
        basis.dev.warn("basis.l10n: Value for l10n token can't be set directly, but through dictionary update only");
      },
      setType: function(type) {
        if (type != "plural" && (!module.exports.enableMarkup || type != "markup")) type = "default";
        if (this.type != type) {
          this.type = type;
          this.apply();
        }
      },
      compute: function(events, getter) {
        if (arguments.length == 1) {
          getter = events;
          events = "";
        }
        getter = basis.getter(getter);
        events = String(events).trim().split(/\s+|\s*,\s*/).sort();
        var tokenId = this.basisObjectId;
        var enumId = events.concat(tokenId, getter[basis.getter.ID]).join("_");
        if (tokenComputeFn[enumId]) return tokenComputeFn[enumId];
        var token = this;
        var objectTokenMap = {};
        var updateValue = function(object) {
          updateToken.call(this, getter(object));
        };
        var handler = {
          destroy: function(object) {
            delete objectTokenMap[object.basisObjectId];
            this.destroy();
          }
        };
        for (var i = 0, eventName; eventName = events[i]; i++) if (eventName != "destroy") handler[eventName] = updateValue;
        return tokenComputeFn[enumId] = function(object) {
          if (object instanceof Emitter == false) throw "basis.l10n.Token#compute: object must be an instanceof Emitter";
          var objectId = object.basisObjectId;
          var computeToken = objectTokenMap[objectId];
          if (!computeToken) {
            computeToken = objectTokenMap[objectId] = new ComputeToken(getter(object), token);
            object.addHandler(handler, computeToken);
          }
          return computeToken;
        };
      },
      computeToken: function(value) {
        return new ComputeToken(value, this);
      },
      token: function(name) {
        if (this.type == "plural") name = cultures[currentCulture].plural(name);
        if (this.dictionary) return this.dictionary.token(this.name + "." + name);
      },
      destroy: function() {
        for (var key in this.computeTokens) this.computeTokens[key].destroy();
        this.computeTokens = null;
        this.value = null;
        this.dictionary = null;
        tokenIndex[this.index] = null;
        basis.Token.prototype.destroy.call(this);
      }
    });
    function resolveToken(path) {
      if (path.charAt(0) == "#") {
        return tokenIndex[parseInt(path.substr(1), 36)];
      } else {
        var parts = path.match(/^(.+?)@(.+)$/);
        if (parts) return resolveDictionary(basis.path.resolve(parts[2])).token(parts[1]);
        basis.dev.warn("basis.l10n.token accepts token references in format `token.path@path/to/dict.l10n` only");
      }
    }
    var dictionaries = [];
    var dictionaryByUrl = {};
    var createDictionaryNotifier = new basis.Token;
    function walkTokens(dictionary, culture, tokens, path) {
      var cultureValues = dictionary.cultureValues[culture];
      path = path ? path + "." : "";
      for (var name in tokens) {
        if (name.indexOf(".") != -1) {
          basis.dev.warn((dictionary.resource ? dictionary.resource.url : "[anonymous dictionary]") + ": wrong token name `" + name + "`, token ignored.");
          continue;
        }
        if (hasOwnProperty.call(tokens, name)) {
          var tokenName = path + name;
          var tokenValue = tokens[name];
          cultureValues[tokenName] = tokenValue;
          if (tokenValue && (typeof tokenValue == "object" || Array.isArray(tokenValue))) walkTokens(dictionary, culture, tokenValue, tokenName);
        }
      }
    }
    var Dictionary = Class(null, {
      className: namespace + ".Dictionary",
      tokens: null,
      types: null,
      cultureValues: null,
      index: NaN,
      resource: null,
      init: function(content) {
        this.tokens = {};
        this.types = {};
        this.cultureValues = {};
        this.index = dictionaries.push(this) - 1;
        if (basis.resource.isResource(content)) {
          var resource = content;
          this.resource = resource;
          if (!dictionaryByUrl[resource.url]) {
            dictionaryByUrl[resource.url] = this;
            createDictionaryNotifier.set(resource.url);
          }
          resource.fetch();
        } else {
          basis.dev.warn("Use object as content of dictionary is experimental and not production-ready");
          this.update(content || {});
        }
      },
      update: function(data) {
        if (!data) data = {};
        this.cultureValues = {};
        for (var culture in data) if (!/^_|_$/.test(culture)) {
          this.cultureValues[culture] = {};
          walkTokens(this, culture, data[culture]);
        }
        this.types = data._meta && data._meta.type || {};
        for (var key in this.tokens) this.tokens[key].setType(this.types[key]);
        this.syncValues();
        return this;
      },
      syncValues: function() {
        for (var tokenName in this.tokens) updateToken.call(this.tokens[tokenName], this.getValue(tokenName));
      },
      getValue: function(tokenName) {
        var fallback = cultureFallback[currentCulture] || [];
        for (var i = 0, cultureName; cultureName = fallback[i]; i++) {
          var cultureValues = this.cultureValues[cultureName];
          if (cultureValues && tokenName in cultureValues) return cultureValues[tokenName];
        }
      },
      getCultureValue: function(culture, tokenName) {
        return this.cultureValues[culture] && this.cultureValues[culture][tokenName];
      },
      token: function(tokenName) {
        var token = this.tokens[tokenName];
        if (!token) {
          token = this.tokens[tokenName] = new Token(this, tokenName, this.types[tokenName], this.getValue(tokenName));
        }
        return token;
      },
      destroy: function() {
        this.tokens = null;
        this.cultureValues = null;
        basis.array.remove(dictionaries, this);
        if (this.resource) {
          delete dictionaryByUrl[this.resource.url];
          this.resource = null;
        }
      }
    });
    function resolveDictionary(source) {
      var dictionary;
      if (typeof source == "string") {
        var location = source;
        var extname = basis.path.extname(location);
        if (extname != ".l10n") location = location.replace(new RegExp(extname + "([#?]|$)"), ".l10n$1");
        source = basis.resource(location);
      }
      if (basis.resource.isResource(source)) dictionary = dictionaryByUrl[source.url];
      return dictionary || new Dictionary(source);
    }
    function getDictionaries() {
      return dictionaries.slice(0);
    }
    var cultureList = [];
    var currentCulture = null;
    var cultures = {};
    var cultureFallback = {};
    var pluralFormsMap = {};
    var pluralForms = [ [ 1, function(n) {
      return 0;
    } ], [ 2, function(n) {
      return n == 1 || n % 10 == 1 ? 0 : 1;
    } ], [ 2, function(n) {
      return n == 0 ? 0 : 1;
    } ], [ 2, function(n) {
      return n == 1 ? 0 : 1;
    } ], [ 2, function(n) {
      return n == 0 || n == 1 ? 0 : 1;
    } ], [ 2, function(n) {
      return n % 10 != 1 || n % 100 == 11 ? 1 : 0;
    } ], [ 3, function(n) {
      return n == 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
    } ], [ 3, function(n) {
      return n % 10 == 1 && n % 100 != 11 ? 0 : n != 0 ? 1 : 2;
    } ], [ 3, function(n) {
      return n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
    } ], [ 3, function(n) {
      return n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
    } ], [ 3, function(n) {
      return n == 0 ? 0 : n == 1 ? 1 : 2;
    } ], [ 3, function(n) {
      return n == 1 ? 0 : n == 0 || n % 100 > 0 && n % 100 < 20 ? 1 : 2;
    } ], [ 3, function(n) {
      return n == 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
    } ], [ 3, function(n) {
      return n == 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2;
    } ], [ 4, function(n) {
      return n == 1 ? 0 : n == 2 ? 1 : n != 8 && n != 11 ? 2 : 3;
    } ], [ 4, function(n) {
      return n == 1 ? 0 : n == 2 ? 1 : n == 3 ? 2 : 3;
    } ], [ 4, function(n) {
      return n % 100 == 1 ? 1 : n % 100 == 2 ? 2 : n % 100 == 3 || n % 100 == 4 ? 3 : 0;
    } ], [ 4, function(n) {
      return n == 1 ? 0 : n == 0 || n % 100 > 1 && n % 100 < 11 ? 1 : n % 100 > 10 && n % 100 < 20 ? 2 : 3;
    } ], [ 4, function(n) {
      return n == 1 || n == 11 ? 0 : n == 2 || n == 12 ? 1 : n > 2 && n < 20 ? 2 : 3;
    } ], [ 5, function(n) {
      return n == 1 ? 0 : n == 2 ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4;
    } ], [ 6, function(n) {
      return n == 0 ? 0 : n == 1 ? 1 : n == 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5;
    } ] ];
    [ "ay bo cgg dz fa id ja jbo ka kk km ko ky lo ms my sah su th tt ug vi wo zh", "mk", "jv", "af an ast az bg bn brx ca da de doi el en eo es es-AR et eu ff fi fo fur fy gl gu ha he hi hne hu hy ia it kn ku lb mai ml mn mni mr nah nap nb ne nl nn no nso or pa pap pms ps pt rm rw sat sco sd se si so son sq sv sw ta te tk ur yo", "ach ak am arn br fil fr gun ln mfe mg mi oc pt-BR tg ti tr uz wa zh", "is", "csb", "lv", "lt", "be bs hr ru sr uk", "mnk", "ro", "pl", "cs sk", "cy", "kw", "sl", "mt", "gd", "ga", "ar" ].forEach(function(langs, idx) {
      langs.split(" ").forEach(function(lang) {
        pluralFormsMap[lang] = this;
      }, pluralForms[idx]);
    });
    var Culture = basis.Class(null, {
      className: namespace + ".Culture",
      name: "",
      pluralForm: null,
      init: function(name, pluralForm) {
        this.name = name;
        if (!cultures[name]) cultures[name] = this;
        this.pluralForm = pluralForm || pluralFormsMap[name] || pluralFormsMap[name.split("-")[0]] || pluralForms[0];
      },
      plural: function(value) {
        return Number(this.pluralForm[1](Math.abs(parseInt(value, 10))));
      }
    });
    function resolveCulture(name, pluralForm) {
      if (name && !cultures[name]) cultures[name] = new Culture(name, pluralForm);
      return cultures[name || currentCulture];
    }
    basis.object.extend(resolveCulture, new basis.Token);
    resolveCulture.set = setCulture;
    function getCulture() {
      return currentCulture;
    }
    function setCulture(culture) {
      if (!culture) return;
      if (currentCulture != culture) {
        if (cultureList.indexOf(culture) == -1) {
          basis.dev.warn("basis.l10n.setCulture: culture `" + culture + "` not in the list, the culture isn't changed");
          return;
        }
        currentCulture = culture;
        for (var i = 0, dictionary; dictionary = dictionaries[i]; i++) dictionary.syncValues();
        basis.Token.prototype.set.call(resolveCulture, culture);
      }
    }
    function getCultureList() {
      return cultureList.slice(0);
    }
    function setCultureList(list) {
      if (typeof list == "string") list = list.trim().split(" ");
      if (!list.length) {
        basis.dev.warn("basis.l10n.setCultureList: culture list can't be empty, the culture list isn't changed");
        return;
      }
      var cultures = {};
      var cultureRow;
      var baseCulture;
      cultureFallback = {};
      for (var i = 0, culture, cultureName; culture = list[i]; i++) {
        cultureRow = culture.split("/");
        if (cultureRow.length > 2) {
          basis.dev.warn("basis.l10n.setCultureList: only one fallback culture can be set for certain culture, try to set `" + culture + "`; other cultures except first one was ignored");
          cultureRow = cultureRow.slice(0, 2);
        }
        cultureName = cultureRow[0];
        if (!baseCulture) baseCulture = cultureName;
        cultures[cultureName] = resolveCulture(cultureName);
        cultureFallback[cultureName] = cultureRow;
      }
      for (var cultureName in cultureFallback) {
        cultureFallback[cultureName] = basis.array.flatten(cultureFallback[cultureName].map(function(name) {
          return cultureFallback[name];
        })).concat(baseCulture).filter(function(item, idx, array) {
          return !idx || array.lastIndexOf(item, idx - 1) == -1;
        });
      }
      cultureList = basis.object.keys(cultures);
      if (currentCulture in cultures == false) setCulture(baseCulture);
    }
    function onCultureChange(fn, context, fire) {
      resolveCulture.attach(fn, context);
      if (fire) fn.call(context, currentCulture);
    }
    setCultureList("en-US");
    setCulture("en-US");
    module.exports = {
      ComputeToken: ComputeToken,
      Token: Token,
      token: resolveToken,
      Dictionary: Dictionary,
      dictionary: resolveDictionary,
      getDictionaries: getDictionaries,
      addCreateDictionaryHandler: createDictionaryNotifier.attach.bind(createDictionaryNotifier),
      removeCreateDictionaryHandler: createDictionaryNotifier.detach.bind(createDictionaryNotifier),
      Culture: Culture,
      culture: resolveCulture,
      getCulture: getCulture,
      setCulture: setCulture,
      getCultureList: getCultureList,
      setCultureList: setCultureList,
      pluralForms: pluralForms,
      onCultureChange: onCultureChange
    };
  },
  "8.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var namespace = this.path;
    var consts = basis.require("./9.js");
    var TYPE_ELEMENT = consts.TYPE_ELEMENT;
    var TYPE_ATTRIBUTE = consts.TYPE_ATTRIBUTE;
    var TYPE_ATTRIBUTE_CLASS = consts.TYPE_ATTRIBUTE_CLASS;
    var TYPE_ATTRIBUTE_STYLE = consts.TYPE_ATTRIBUTE_STYLE;
    var TYPE_ATTRIBUTE_EVENT = consts.TYPE_ATTRIBUTE_EVENT;
    var TYPE_TEXT = consts.TYPE_TEXT;
    var TYPE_COMMENT = consts.TYPE_COMMENT;
    var TOKEN_TYPE = consts.TOKEN_TYPE;
    var TOKEN_BINDINGS = consts.TOKEN_BINDINGS;
    var TOKEN_REFS = consts.TOKEN_REFS;
    var ATTR_NAME = consts.ATTR_NAME;
    var ATTR_NAME_BY_TYPE = consts.ATTR_NAME_BY_TYPE;
    var ELEMENT_NAME = consts.ELEMENT_NAME;
    var ELEMENT_ATTRS = consts.ELEMENT_ATTRS;
    var ELEMENT_CHILDS = consts.ELEMENT_CHILDS;
    var TEXT_VALUE = consts.TEXT_VALUE;
    var COMMENT_VALUE = consts.COMMENT_VALUE;
    var CLASS_BINDING_ENUM = consts.CLASS_BINDING_ENUM;
    var CLASS_BINDING_BOOL = consts.CLASS_BINDING_BOOL;
    var tmplFunctions = {};
    var inlineSeed = 1;
    var buildPathes = function() {
      var PATH_REF_NAME = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
      var pathList;
      var refList;
      var bindingList;
      var markedElementList;
      var rootPath;
      var attrExprId;
      function putRefs(refs, pathIdx) {
        for (var i = 0, refName; refName = refs[i]; i++) if (refName.indexOf(":") == -1) refList.push(refName + ":" + pathIdx);
      }
      function putPath(path) {
        var len = pathList.length;
        var pathRef = PATH_REF_NAME[len] || "r" + len;
        pathList.push(pathRef + "=" + path);
        return pathRef;
      }
      function putBinding(binding) {
        bindingList.push(binding);
      }
      function processTokens(tokens, path, noTextBug, templateMarker) {
        var localPath;
        var refs;
        var myRef;
        var explicitRef;
        var bindings;
        for (var i = 0, cp = 0, closeText = 0, token; token = tokens[i]; i++, cp++, explicitRef = false) {
          if (!i) localPath = path + ".firstChild"; else {
            if (!tokens[i + 1]) localPath = path + ".lastChild"; else {
              if (token[TOKEN_TYPE] == tokens[i - 1][TOKEN_TYPE] && token[TOKEN_TYPE] == TYPE_TEXT) closeText++;
              localPath = path + ".childNodes[" + (noTextBug ? cp : cp + (closeText ? " + " + closeText + " * TEXT_BUG" : "")) + "]";
            }
          }
          if (refs = token[TOKEN_REFS]) {
            explicitRef = true;
            localPath = putPath(localPath);
            putRefs(refs, localPath);
          }
          if (token[TOKEN_BINDINGS]) {
            if (token[TOKEN_BINDINGS] && typeof token[TOKEN_BINDINGS] == "number") token[TOKEN_BINDINGS] = token[TOKEN_REFS][token[TOKEN_BINDINGS] - 1];
            if (!explicitRef) {
              explicitRef = true;
              localPath = putPath(localPath);
            }
            putBinding([ token[TOKEN_TYPE], localPath, token[TOKEN_BINDINGS], refs ? refs.indexOf("element") != -1 : false ]);
          }
          if (token[TOKEN_TYPE] == TYPE_ELEMENT) {
            myRef = -1;
            if (path == rootPath) markedElementList.push(localPath + "." + templateMarker);
            if (!explicitRef) {
              localPath = putPath(localPath);
              myRef = pathList.length;
            }
            var attrs = [];
            var children = [];
            for (var j = ELEMENT_ATTRS, t; t = token[j]; j++) if (t[TOKEN_TYPE] == TYPE_ELEMENT || t[TOKEN_TYPE] == TYPE_TEXT || t[TOKEN_TYPE] == TYPE_COMMENT) children.push(t); else attrs.push(t);
            for (var j = 0, attr; attr = attrs[j]; j++) {
              var attrTokenType = attr[TOKEN_TYPE];
              if (attrTokenType == TYPE_ATTRIBUTE_EVENT) continue;
              var attrName = ATTR_NAME_BY_TYPE[attrTokenType] || attr[ATTR_NAME];
              if (refs = attr[TOKEN_REFS]) {
                explicitRef = true;
                putRefs(refs, putPath(localPath + '.getAttributeNode("' + attrName + '")'));
              }
              if (bindings = attr[TOKEN_BINDINGS]) {
                explicitRef = true;
                switch (attrTokenType) {
                  case TYPE_ATTRIBUTE_CLASS:
                    for (var k = 0, binding; binding = bindings[k]; k++) putBinding([ 2, localPath, binding[1], attrName, binding[0] ].concat(binding[2] == -1 ? [] : binding.slice(2)));
                    break;
                  case TYPE_ATTRIBUTE_STYLE:
                    for (var k = 0, property; property = bindings[k]; k++) {
                      attrExprId++;
                      for (var m = 0, bindName; bindName = property[0][m]; m++) putBinding([ 2, localPath, bindName, attrName, property[0], property[1], property[2], property[3], attrExprId ]);
                    }
                    break;
                  default:
                    attrExprId++;
                    for (var k = 0, bindName; bindName = bindings[0][k]; k++) putBinding([ 2, localPath, bindName, attrName, bindings[0], bindings[1], token[ELEMENT_NAME], attrExprId ]);
                }
              }
            }
            if (children.length) processTokens(children, localPath, noTextBug);
            if (!explicitRef && myRef == pathList.length) pathList.pop();
          }
        }
      }
      return function(tokens, path, noTextBug, templateMarker) {
        pathList = [];
        refList = [];
        bindingList = [];
        markedElementList = [];
        rootPath = path || "_";
        attrExprId = 0;
        processTokens(tokens, rootPath, noTextBug, templateMarker);
        return {
          path: pathList,
          ref: refList,
          binding: bindingList,
          markedElementList: markedElementList
        };
      };
    }();
    var buildBindings = function() {
      var L10N_BINDING = /\.\{([a-zA-Z_][a-zA-Z0-9_\-]*)\}/;
      var SPECIAL_ATTR_MAP = {
        disabled: "*",
        checked: [ "input" ],
        indeterminate: [ "input" ],
        value: [ "input", "textarea", "select" ],
        minlength: [ "input" ],
        maxlength: [ "input" ],
        readonly: [ "input" ],
        selected: [ "option" ],
        multiple: [ "select" ]
      };
      var SPECIAL_ATTR_SINGLE = {
        disabled: true,
        checked: true,
        selected: true,
        readonly: true,
        multiple: true,
        indeterminate: true
      };
      var STYLE_EXPR_VALUE = {
        show: '"none"',
        visible: '"hidden"'
      };
      var STYLE_EXPR_TOGGLE = {
        hide: '?"none":""',
        show: '?"":"none"',
        hidden: '?"hidden":""',
        visible: '?"":"hidden"'
      };
      var bindFunctions = {
        1: "bind_element",
        3: "bind_textNode",
        8: "bind_comment"
      };
      function simpleStringify(val) {
        return typeof val == "string" ? '"' + val.replace(/"/g, '\\"') + '"' : val;
      }
      function buildAttrExpression(binding, special, l10n) {
        var expression = [];
        var symbols = binding[5];
        var dictionary = binding[4];
        var exprVar;
        var colonPos;
        for (var j = 0; j < symbols.length; j++) {
          if (typeof symbols[j] == "string") expression.push('"' + symbols[j].replace(/"/g, '\\"') + '"'); else {
            exprVar = dictionary[symbols[j]];
            colonPos = exprVar.indexOf(":");
            if (colonPos == -1) {
              expression.push(special == "l10n" ? '"{' + exprVar + '}"' : special == "bool" ? "(__" + exprVar + '||"")' : "__" + exprVar);
            } else {
              var bindingName = null;
              var l10nPath = exprVar.substr(colonPos + 1).replace(L10N_BINDING, function(m, name) {
                bindingName = name;
                return "";
              });
              if (bindingName) expression.push(l10n[exprVar.substr(colonPos + 1)]); else expression.push('l10n["' + l10nPath + '"]');
            }
          }
        }
        if (expression.length == 1) expression.push('""');
        return expression.join("+");
      }
      return function(bindings) {
        function putBindCode(type) {
          toolsUsed[type] = true;
          bindCode.push(bindVar + "=" + type + "(" + basis.array(arguments, 1) + ");");
        }
        var bindMap = {};
        var bindCode;
        var bindVar;
        var bindVarSeed = 0;
        var varList = [];
        var result = [];
        var bindingsWoL10nCompute = [];
        var varName;
        var l10nMap;
        var l10nCompute = [];
        var l10nBindings = {};
        var l10nBindSeed = 0;
        var attrExprId;
        var attrExprMap = {};
        var debugList = [];
        var toolsUsed = {
          resolve: true
        };
        for (var i = 0, binding; binding = bindings[i]; i++) {
          var bindType = binding[0];
          var domRef = binding[1];
          var bindName = binding[2];
          var nodeBindingProhibited = binding[3];
          var namePart = bindName.split(":");
          if (namePart[0] == "l10n" && namePart[1]) {
            var l10nFullPath = namePart[1];
            var l10nBinding = null;
            var l10nName = l10nFullPath.replace(L10N_BINDING, function(m, name) {
              l10nBinding = name;
              return "";
            });
            if (l10nBinding) {
              if (l10nFullPath in l10nBindings == false) {
                varName = "$l10n_" + l10nBindSeed++;
                l10nBindings[l10nFullPath] = varName;
                l10nCompute.push('set("' + varName + '",' + varName + ")");
                varList.push(varName + '=tools.l10nToken("' + l10nName + '").computeToken()');
                bindCode = bindMap[l10nBinding];
                if (!bindCode) {
                  bindCode = bindMap[l10nBinding] = [];
                  varList.push("__" + l10nBinding);
                }
                bindCode.push(varName + ".set(__" + l10nBinding + ");");
              }
              bindName = l10nBindings[l10nFullPath];
              bindVar = "_" + bindVarSeed++;
              varName = "__" + bindName;
              bindCode = bindMap[bindName];
              if (!bindCode) {
                bindCode = bindMap[bindName] = [];
                varList.push(varName);
              }
              if (bindType == TYPE_TEXT) {
                debugList.push("{" + [ 'binding:"' + bindName + '"', "dom:" + domRef, "val:" + bindVar, "attachment:" + bindName ] + "}");
                varList.push(bindVar + "=" + domRef);
                putBindCode(bindFunctions[bindType], domRef, bindVar, "value", nodeBindingProhibited);
              } else {
                attrName = '"' + binding[ATTR_NAME] + '"';
                debugList.push("{" + [ 'binding:"' + l10nFullPath + '"', "dom:" + domRef, "attr:" + attrName, "val:" + bindVar, "attachment:" + bindName ] + "}");
                varList.push(bindVar);
                putBindCode("bind_attr", domRef, attrName, bindVar, buildAttrExpression(binding, false, l10nBindings));
              }
              continue;
            }
          }
          bindingsWoL10nCompute.push(binding);
        }
        for (var i = 0, binding; binding = bindingsWoL10nCompute[i]; i++) {
          var bindType = binding[0];
          var domRef = binding[1];
          var bindName = binding[2];
          var nodeBindingProhibited = binding[3];
          if ([ "get", "set", "templateId_" ].indexOf(bindName) != -1) {
            basis.dev.warn("binding name `" + bindName + "` is prohibited, binding ignored");
            continue;
          }
          var namePart = bindName.split(":");
          var anim = namePart[0] == "anim";
          var l10n = namePart[0] == "l10n";
          if (anim) bindName = namePart[1];
          bindCode = bindMap[bindName];
          bindVar = "_" + bindVarSeed++;
          varName = "__" + bindName;
          if (l10n && namePart[1]) {
            var l10nFullPath = namePart[1];
            var l10nBinding = null;
            var l10nName = l10nFullPath;
            if (!l10nMap) l10nMap = {};
            if (!bindMap[l10nName]) {
              bindMap[l10nName] = [];
              bindMap[l10nName].l10n = "$l10n_" + l10nBindSeed++;
              varList.push("__" + bindMap[l10nName].l10n + '=l10n["' + l10nName + '"]');
              l10nMap[l10nName] = [];
            }
            bindCode = bindMap[l10nName];
            if (bindType == TYPE_TEXT) {
              debugList.push("{" + [ 'binding:"' + l10nFullPath + '"', "dom:" + domRef, 'val:l10n["' + l10nName + '"]', 'attachment:l10nToken("' + l10nName + '")' ] + "}");
              toolsUsed.l10nToken = true;
              l10nMap[l10nName].push(domRef + ".nodeValue=value;");
              if (!bindCode.nodeBind) {
                varList.push(bindVar + "=" + domRef);
                putBindCode(bindFunctions[bindType], domRef, bindVar, "value", nodeBindingProhibited);
                bindCode.nodeBind = bindVar;
              } else {
                bindCode.push(domRef + ".nodeValue=value;");
              }
              continue;
            } else {
              l10nMap[l10nName].push("bind_attr(" + [ domRef, '"' + binding[ATTR_NAME] + '"', "NaN", buildAttrExpression(binding, "l10n", l10nBindings) ] + ");");
            }
          }
          if (!bindCode) {
            bindCode = bindMap[bindName] = [];
            varList.push(varName);
          }
          if (bindType != TYPE_ATTRIBUTE) {
            debugList.push("{" + [ 'binding:"' + bindName + '"', "dom:" + domRef, "val:" + (bindCode.nodeBind ? varName : bindVar), "updates:$$" + bindName, 'attachment:instance.attaches&&instance.attaches["' + bindName + '"]&&instance.attaches["' + bindName + '"].value' ] + "}");
            if (!bindCode.nodeBind) {
              varList.push(bindVar + "=" + domRef);
              putBindCode(bindFunctions[bindType], domRef, bindVar, "value", nodeBindingProhibited);
              bindCode.nodeBind = bindVar;
            } else {
              switch (bindType) {
                case TYPE_ELEMENT:
                  putBindCode(bindFunctions[bindType], domRef, domRef, "value!==null?String(value):null");
                  break;
                case TYPE_TEXT:
                  bindCode.push(domRef + ".nodeValue=value;");
                  break;
              }
            }
          } else {
            var attrName = binding[ATTR_NAME];
            switch (attrName) {
              case "class":
                var defaultExpr = "";
                var valueExpr = "value";
                var bindingType = binding[5];
                var defaultValue = binding[7];
                switch (bindingType) {
                  case CLASS_BINDING_BOOL:
                    var values = [ binding[6] ];
                    var prefix = binding[4];
                    var classes = Array.isArray(prefix) ? prefix : values.map(function(val) {
                      return prefix + val;
                    });
                    valueExpr = 'value?"' + classes[0] + '":""';
                    if (defaultValue) defaultExpr = classes[defaultValue - 1];
                    break;
                  case CLASS_BINDING_ENUM:
                    var values = binding[8];
                    var prefix = binding[4];
                    var classes = Array.isArray(prefix) ? prefix : values.map(function(val) {
                      return prefix + val;
                    });
                    valueExpr = values.map(function(val, idx) {
                      return 'value=="' + val + '"?"' + classes[idx] + '"';
                    }).join(":") + ':""';
                    if (defaultValue) defaultExpr = classes[defaultValue - 1];
                    break;
                  default:
                    var prefix = binding[4];
                    valueExpr = 'typeof value=="string"||typeof value=="number"?"' + prefix + '"+value:(value?"' + prefix + bindName + '":"")';
                }
                varList.push(bindVar + '="' + defaultExpr + '"');
                putBindCode("bind_attrClass", domRef, bindVar, valueExpr, anim);
                debugList.push("{" + [ 'binding:"' + bindName + '"', "raw:__" + bindName, 'prefix:"' + "???" + '"', "anim:" + anim, "dom:" + domRef, 'attr:"' + attrName + '"', "val:" + bindVar, 'attachment:instance.attaches&&instance.attaches["' + bindName + '"]&&instance.attaches["' + bindName + '"].value' ] + "}");
                break;
              case "style":
                var expr = buildAttrExpression(binding, false, l10nBindings);
                attrExprId = binding[8];
                if (!attrExprMap[attrExprId]) {
                  attrExprMap[attrExprId] = bindVar;
                  varList.push(bindVar + "=" + (STYLE_EXPR_VALUE[binding[7]] || '""'));
                }
                if (binding[7]) expr = expr.replace(/\+""$/, "") + (STYLE_EXPR_TOGGLE[binding[7]] || "");
                bindVar = attrExprMap[attrExprId];
                putBindCode("bind_attrStyle", domRef, '"' + binding[6] + '"', bindVar, expr);
                debugList.push("{" + [ 'binding:"' + bindName + '"', "raw:__" + bindName, 'property:"' + binding[6] + '"', "expr:[[" + binding[5].map(simpleStringify) + "],[" + binding[4].map(simpleStringify) + "]]", "dom:" + domRef, 'attr:"' + attrName + '"', "val:" + bindVar, 'attachment:instance.attaches&&instance.attaches["' + bindName + '"]&&instance.attaches["' + bindName + '"].value' ] + "}");
                break;
              default:
                var specialAttr = SPECIAL_ATTR_MAP[attrName];
                var tagName = binding[6].toLowerCase();
                var expr = specialAttr && SPECIAL_ATTR_SINGLE[attrName] ? buildAttrExpression(binding, "bool", l10nBindings) + '?"' + attrName + '":""' : buildAttrExpression(binding, false, l10nBindings);
                attrExprId = binding[7];
                if (!attrExprMap[attrExprId]) {
                  varList.push(bindVar + "=" + expr);
                  attrExprMap[attrExprId] = bindVar;
                }
                bindVar = attrExprMap[attrExprId];
                if (attrName == "tabindex") putBindCode("bind_attr", domRef, '"' + attrName + '"', bindVar, expr + "==-1?" + ([ "input", "button", "textarea" ].indexOf(tagName) == -1 ? '""' : "-1") + ":" + expr); else putBindCode("bind_attr", domRef, '"' + attrName + '"', bindVar, expr);
                if (specialAttr && (specialAttr == "*" || specialAttr.indexOf(tagName) != -1)) bindCode.push("if(" + domRef + "." + attrName + "!=" + bindVar + ")" + domRef + "." + attrName + "=" + (SPECIAL_ATTR_SINGLE[attrName] ? "!!" + bindVar : bindVar) + ";");
                debugList.push("{" + [ 'binding:"' + bindName + '"', "raw:" + (l10n ? 'l10n["' + bindName + '"]' : "__" + bindName), 'type:"' + (specialAttr && SPECIAL_ATTR_SINGLE[attrName] ? "bool" : "string") + '"', "expr:[[" + binding[5].map(simpleStringify) + "],[" + binding[4].map(simpleStringify) + "]]", "dom:" + domRef, 'attr:"' + attrName + '"', "val:" + bindVar, 'attachment:instance.attaches&&instance.attaches["' + bindName + '"]&&instance.attaches["' + bindName + '"].value' ] + "}");
            }
          }
        }
        result.push(";function set(bindName,value){" + 'if(typeof bindName!="string")');
        for (var bindName in bindMap) if (bindMap[bindName].nodeBind) {
          result.push("if(bindName===" + bindMap[bindName].nodeBind + ")" + 'bindName="' + bindName + '";' + "else ");
        }
        result.push("return;");
        result.push("value=resolve.call(instance,bindName,value,Attaches);" + "switch(bindName){");
        for (var bindName in bindMap) {
          var stateVar = bindMap[bindName].l10n || bindName;
          varList.push("$$" + stateVar + "=0");
          result.push('case"' + bindName + '":' + "if(__" + stateVar + "!==value)" + "{" + "$$" + stateVar + "++;" + "__" + stateVar + "=value;" + bindMap[bindName].join("") + "}" + "break;");
        }
        result.push("}}");
        var toolsVarList = [];
        for (var key in toolsUsed) toolsVarList.push(key + "=tools." + key);
        return {
          debugList: debugList,
          keys: basis.object.keys(bindMap).filter(function(key) {
            return key.indexOf("@") == -1;
          }),
          tools: toolsVarList,
          vars: varList,
          set: result.join(""),
          l10n: l10nMap,
          l10nCompute: l10nCompute
        };
      };
    }();
    function compileFunction(args, body) {
      try {
        return new Function(args, body);
      } catch (e) {
        basis.dev.error("Can't build template function: " + e + "\n", "function(" + args + "){\n" + body + "\n}");
      }
    }
    var getFunctions = function(tokens, debug, uri, source, noTextBug, templateMarker) {
      var fn = tmplFunctions[uri && basis.path.relative(uri)];
      if (fn) return fn;
      var paths = buildPathes(tokens, "_", noTextBug, templateMarker);
      var bindings = buildBindings(paths.binding);
      var objectRefs = paths.markedElementList.join("=");
      var createInstance;
      var fnBody;
      var result = {
        keys: bindings.keys,
        l10nKeys: basis.object.keys(bindings.l10n)
      };
      if (tokens.length == 1) paths.path[0] = "a=_";
      if (!uri) uri = basis.path.baseURI + "inline_template" + inlineSeed++ + ".tmpl";
      if (bindings.l10n) {
        var code = [];
        for (var key in bindings.l10n) code.push('case"' + key + '":' + 'if(value==null)value="{' + key + '}";' + "l10n[path]=value;" + bindings.l10n[key].join("") + "break;");
        result.createL10nSync = compileFunction([ "_", "l10n", "bind_attr", "TEXT_BUG" ], (source ? "\n// " + source.split(/\r\n?|\n\r?/).join("\n// ") + "\n\n" : "") + "var " + paths.path + ";" + "return function(path, value){" + "switch(path){" + code.join("") + "}" + "}" + "\n\n//# sourceURL=" + basis.path.origin + uri + "_l10n");
      }
      result.createInstance = compileFunction([ "tid", "map", "proto", "tools", "l10n", "TEXT_BUG" ], (source ? "\n// " + source.split(/\r\n?|\n\r?/).join("\n// ") + "\n\n" : "") + "var getBindings=tools.createBindingFunction([" + bindings.keys.map(function(key) {
        return '"' + key + '"';
      }) + "])," + (bindings.tools.length ? bindings.tools + "," : "") + "Attaches=function(){};" + "Attaches.prototype={" + bindings.keys.map(function(key) {
        return key + ":null";
      }) + "};" + "return function createInstance_(id,obj,onAction,onRebuild,bindings,bindingInterface){" + "var _=proto.cloneNode(true)," + paths.path.concat(bindings.vars) + "," + "instance={" + "context:obj," + "action:onAction," + "rebuild:onRebuild," + (debug ? "debug:function debug(){return[" + bindings.debugList + "]}," : "") + "handler:null," + "bindings:bindings," + "bindingInterface:bindingInterface," + "attaches:null," + "tmpl:{" + [ paths.ref, "templateId_:id", "set:set" ] + "}" + "}" + (objectRefs ? ";if(obj||onAction)" + objectRefs + "=(id<<12)|tid" : "") + bindings.set + ";if(bindings)instance.handler=getBindings(bindings,obj,set,bindingInterface)" + ";" + bindings.l10nCompute + ";return instance" + "}" + "\n\n//# sourceURL=" + basis.path.origin + uri);
      return result;
    };
    module.exports = {
      getFunctions: getFunctions
    };
  },
  "9.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var DECLARATION_VERSION = 2;
    var TYPE_ELEMENT = 1;
    var TYPE_ATTRIBUTE = 2;
    var TYPE_ATTRIBUTE_CLASS = 4;
    var TYPE_ATTRIBUTE_STYLE = 5;
    var TYPE_ATTRIBUTE_EVENT = 6;
    var TYPE_TEXT = 3;
    var TYPE_COMMENT = 8;
    var TOKEN_TYPE = 0;
    var TOKEN_BINDINGS = 1;
    var TOKEN_REFS = 2;
    var ATTR_NAME = 3;
    var ATTR_VALUE = 4;
    var ATTR_NAME_BY_TYPE = {
      4: "class",
      5: "style"
    };
    var ATTR_TYPE_BY_NAME = {
      "class": TYPE_ATTRIBUTE_CLASS,
      style: TYPE_ATTRIBUTE_STYLE
    };
    var ATTR_VALUE_INDEX = {
      2: ATTR_VALUE,
      4: ATTR_VALUE - 1,
      5: ATTR_VALUE - 1,
      6: 2
    };
    var ELEMENT_NAME = 3;
    var ELEMENT_ATTRS = 4;
    var ELEMENT_CHILDS = 5;
    var TEXT_VALUE = 3;
    var COMMENT_VALUE = 3;
    var CLASS_BINDING_ENUM = 1;
    var CLASS_BINDING_BOOL = 2;
    var CLASS_BINDING_INVERT = 3;
    var CLASS_BINDING_EQUAL = 4;
    var CLASS_BINDING_NOTEQUAL = 5;
    module.exports = {
      TYPE_ELEMENT: TYPE_ELEMENT,
      TYPE_ATTRIBUTE: TYPE_ATTRIBUTE,
      TYPE_ATTRIBUTE_CLASS: TYPE_ATTRIBUTE_CLASS,
      TYPE_ATTRIBUTE_STYLE: TYPE_ATTRIBUTE_STYLE,
      TYPE_ATTRIBUTE_EVENT: TYPE_ATTRIBUTE_EVENT,
      TYPE_TEXT: TYPE_TEXT,
      TYPE_COMMENT: TYPE_COMMENT,
      TOKEN_TYPE: TOKEN_TYPE,
      TOKEN_BINDINGS: TOKEN_BINDINGS,
      TOKEN_REFS: TOKEN_REFS,
      ATTR_NAME: ATTR_NAME,
      ATTR_VALUE: ATTR_VALUE,
      ATTR_NAME_BY_TYPE: ATTR_NAME_BY_TYPE,
      ATTR_TYPE_BY_NAME: ATTR_TYPE_BY_NAME,
      ATTR_VALUE_INDEX: ATTR_VALUE_INDEX,
      ELEMENT_NAME: ELEMENT_NAME,
      ELEMENT_ATTRS: ELEMENT_ATTRS,
      ELEMENT_CHILDS: ELEMENT_CHILDS,
      TEXT_VALUE: TEXT_VALUE,
      COMMENT_VALUE: COMMENT_VALUE,
      CLASS_BINDING_ENUM: CLASS_BINDING_ENUM,
      CLASS_BINDING_BOOL: CLASS_BINDING_BOOL,
      CLASS_BINDING_INVERT: CLASS_BINDING_INVERT,
      CLASS_BINDING_EQUAL: CLASS_BINDING_EQUAL,
      CLASS_BINDING_NOTEQUAL: CLASS_BINDING_NOTEQUAL
    };
  },
  "a.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var namespace = this.path;
    var Class = basis.Class;
    var cleaner = basis.cleaner;
    var path = basis.path;
    var arrayAdd = basis.array.add;
    var arrayRemove = basis.array.remove;
    var consts = basis.require("./9.js");
    var getDeclFromSource = basis.require("./b.js").getDeclFromSource;
    var makeDeclaration = basis.require("./b.js").makeDeclaration;
    var theme = basis.require("./c.js");
    var getSourceByPath = theme.get;
    var getTheme = theme.theme;
    var DECLARATION_VERSION = 3;
    var templateList = [];
    var sourceByDocumentId = {};
    function resolveSourceByDocumentId(sourceId) {
      var resource = sourceByDocumentId[sourceId];
      if (!resource) {
        var host = document.getElementById(sourceId);
        var source = "";
        if (host && host.tagName == "SCRIPT" && host.type == "text/basis-template") source = host.textContent || host.text; else if (!host) basis.dev.warn("Template script element with id `" + id + "` not found"); else basis.dev.warn('Template should be declared in <script type="text/basis-template"> element (id `' + sourceId + "`)");
        resource = sourceByDocumentId[sourceId] = basis.resource.virtual("tmpl", source || "");
        resource.id = sourceId;
        resource.url = '<script id="' + sourceId + '"/>';
      }
      return resource;
    }
    function resolveResource(ref, baseURI) {
      if (/^#\d+$/.test(ref)) return templateList[ref.substr(1)];
      if (/^id:/.test(ref)) return resolveSourceByDocumentId(ref.substr(3));
      if (/^[a-z0-9\.]+$/i.test(ref) && !/\.tmpl$/.test(ref)) return getSourceByPath(ref);
      return basis.resource(basis.resource.resolveURI(ref, baseURI, '<b:include src="{url}"/>'));
    }
    function templateSourceUpdate() {
      if (this.destroyBuilder) buildTemplate.call(this);
      var cursor = this;
      while (cursor = cursor.attaches_) cursor.handler.call(cursor.context);
    }
    function buildTemplate() {
      var declaration = getDeclFromSource(this.source, this.baseURI, false, {
        isolate: this.getIsolatePrefix()
      });
      var destroyBuilder = this.destroyBuilder;
      var funcs = this.builder(declaration.tokens, this);
      this.createInstance = funcs.createInstance;
      this.clearInstance = funcs.destroyInstance;
      this.destroyBuilder = funcs.destroy;
      this.getBinding = function() {
        return {
          names: funcs.keys
        };
      };
      this.instances_ = funcs.instances_;
      this.decl_ = declaration;
      var newDeps = declaration.deps;
      var oldDeps = this.deps_;
      this.deps_ = newDeps;
      if (oldDeps) for (var i = 0, dep; dep = oldDeps[i]; i++) dep.bindingBridge.detach(dep, buildTemplate, this);
      if (newDeps) for (var i = 0, dep; dep = newDeps[i]; i++) dep.bindingBridge.attach(dep, buildTemplate, this);
      var newResources = declaration.resources;
      var oldResources = this.resources;
      this.resources = newResources;
      if (newResources) for (var i = 0, url; url = newResources[i]; i++) {
        var resource = basis.resource(url).fetch();
        if (typeof resource.startUse == "function") resource.startUse();
      }
      if (oldResources) for (var i = 0, url; url = oldResources[i]; i++) {
        var resource = basis.resource(url).fetch();
        if (typeof resource.stopUse == "function") resource.stopUse();
      }
      if (destroyBuilder) destroyBuilder(true);
    }
    var Template = Class(null, {
      className: namespace + ".Template",
      __extend__: function(value) {
        if (value instanceof Template) return value;
        if (value instanceof TemplateSwitchConfig) return new TemplateSwitcher(value);
        return new Template(value);
      },
      source: "",
      baseURI: "",
      url: "",
      attaches_: null,
      init: function(source) {
        if (templateList.length == 4096) throw "Too many templates (maximum 4096)";
        this.setSource(source || "");
        this.templateId = templateList.push(this) - 1;
      },
      bindingBridge: {
        attach: function(template, handler, context) {
          var cursor = template;
          while (cursor = cursor.attaches_) if (cursor.handler === handler && cursor.context === context) basis.dev.warn("basis.template.Template#bindingBridge.attach: duplicate handler & context pair");
          template.attaches_ = {
            handler: handler,
            context: context,
            attaches_: template.attaches_
          };
        },
        detach: function(template, handler, context) {
          var cursor = template;
          var prev;
          while (prev = cursor, cursor = cursor.attaches_) if (cursor.handler === handler && cursor.context === context) {
            prev.attaches_ = cursor.attaches_;
            return;
          }
          basis.dev.warn("basis.template.Template#bindingBridge.detach: handler & context pair not found, nothing was removed");
        },
        get: function(template) {
          var source = template.source;
          return source && source.bindingBridge ? source.bindingBridge.get(source) : source;
        }
      },
      createInstance: function(object, actionCallback, updateCallback, bindings, bindingInterface) {
        buildTemplate.call(this);
        return this.createInstance(object, actionCallback, updateCallback, bindings, bindingInterface);
      },
      getBinding: function(bindings) {
        buildTemplate.call(this);
        return this.getBinding(bindings);
      },
      clearInstance: function(tmpl) {},
      getIsolatePrefix: function() {
        return "i" + this.templateId + "__";
      },
      setSource: function(source) {
        var oldSource = this.source;
        if (oldSource != source) {
          if (typeof source == "string") {
            var m = source.match(/^([a-z]+):/);
            if (m) {
              source = source.substr(m[0].length);
              switch (m[1]) {
                case "id":
                  source = resolveSourceByDocumentId(source);
                  break;
                case "path":
                  source = getSourceByPath(source);
                  break;
                default:
                  basis.dev.warn(namespace + ".Template.setSource: Unknown prefix " + prefix + " for template source was ingnored.");
              }
            }
          }
          if (oldSource && oldSource.bindingBridge) {
            this.url = "";
            this.baseURI = "";
            oldSource.bindingBridge.detach(oldSource, templateSourceUpdate, this);
          }
          if (source && source.bindingBridge) {
            if (source.url) {
              this.url = source.url;
              this.baseURI = path.dirname(source.url) + "/";
            }
            source.bindingBridge.attach(source, templateSourceUpdate, this);
          }
          this.source = source;
          templateSourceUpdate.call(this);
        }
      },
      destroy: function() {
        if (this.destroyBuilder) this.destroyBuilder();
        this.attaches_ = null;
        this.createInstance = null;
        this.getBinding = null;
        this.resources = null;
        this.source = null;
        this.instances_ = null;
        this.decl_ = null;
      }
    });
    var TemplateSwitchConfig = function(config) {
      basis.object.extend(this, config);
    };
    var TemplateSwitcher = basis.Class(null, {
      className: namespace + ".TemplateSwitcher",
      ruleRet_: null,
      templates_: null,
      templateClass: Template,
      ruleEvents: null,
      rule: String,
      init: function(config) {
        this.ruleRet_ = [];
        this.templates_ = [];
        this.rule = config.rule;
        var events = config.events;
        if (events && events.length) {
          this.ruleEvents = {};
          for (var i = 0, eventName; eventName = events[i]; i++) this.ruleEvents[eventName] = true;
        }
        cleaner.add(this);
      },
      resolve: function(object) {
        var ret = this.rule(object);
        var idx = this.ruleRet_.indexOf(ret);
        if (idx == -1) {
          this.ruleRet_.push(ret);
          idx = this.templates_.push(new this.templateClass(ret)) - 1;
        }
        return this.templates_[idx];
      },
      destroy: function() {
        this.rule = null;
        this.templates_ = null;
        this.ruleRet_ = null;
      }
    });
    function switcher(events, rule) {
      var args = basis.array(arguments);
      var rule = args.pop();
      return new TemplateSwitchConfig({
        rule: rule,
        events: args.join(" ").trim().split(/\s+/)
      });
    }
    cleaner.add({
      destroy: function() {
        for (var i = 0, template; template = templateList[i]; i++) template.destroy();
        templateList = null;
      }
    });
    module.exports = {
      DECLARATION_VERSION: DECLARATION_VERSION,
      TYPE_ELEMENT: consts.TYPE_ELEMENT,
      TYPE_ATTRIBUTE: consts.TYPE_ATTRIBUTE,
      TYPE_ATTRIBUTE_CLASS: consts.TYPE_ATTRIBUTE_CLASS,
      TYPE_ATTRIBUTE_STYLE: consts.TYPE_ATTRIBUTE_STYLE,
      TYPE_ATTRIBUTE_EVENT: consts.TYPE_ATTRIBUTE_EVENT,
      TYPE_TEXT: consts.TYPE_TEXT,
      TYPE_COMMENT: consts.TYPE_COMMENT,
      TOKEN_TYPE: consts.TOKEN_TYPE,
      TOKEN_BINDINGS: consts.TOKEN_BINDINGS,
      TOKEN_REFS: consts.TOKEN_REFS,
      ATTR_NAME: consts.ATTR_NAME,
      ATTR_VALUE: consts.ATTR_VALUE,
      ATTR_NAME_BY_TYPE: consts.ATTR_NAME_BY_TYPE,
      CLASS_BINDING_ENUM: consts.CLASS_BINDING_ENUM,
      CLASS_BINDING_BOOL: consts.CLASS_BINDING_BOOL,
      ELEMENT_NAME: consts.ELEMENT_NAME,
      ELEMENT_ATTRS: consts.ELEMENT_ATTRS,
      ELEMENT_CHILDS: consts.ELEMENT_CHILDS,
      TEXT_VALUE: consts.TEXT_VALUE,
      COMMENT_VALUE: consts.COMMENT_VALUE,
      TemplateSwitchConfig: TemplateSwitchConfig,
      TemplateSwitcher: TemplateSwitcher,
      Template: Template,
      switcher: switcher,
      getDeclFromSource: getDeclFromSource,
      makeDeclaration: makeDeclaration,
      resolveResource: resolveResource,
      SourceWrapper: theme.SourceWrapper,
      Theme: theme.Theme,
      theme: theme.theme,
      getThemeList: theme.getThemeList,
      currentTheme: theme.currentTheme,
      setTheme: theme.setTheme,
      onThemeChange: theme.onThemeChange,
      define: theme.define,
      get: theme.get,
      getPathList: theme.getPathList
    };
  },
  "b.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var arraySearch = basis.array.search;
    var arrayAdd = basis.array.add;
    var arrayRemove = basis.array.remove;
    var tokenize = basis.require("./q.js");
    var isolateCss = basis.require("./r.js");
    var consts = basis.require("./9.js");
    var TYPE_ELEMENT = consts.TYPE_ELEMENT;
    var TYPE_ATTRIBUTE = consts.TYPE_ATTRIBUTE;
    var TYPE_ATTRIBUTE_CLASS = consts.TYPE_ATTRIBUTE_CLASS;
    var TYPE_ATTRIBUTE_STYLE = consts.TYPE_ATTRIBUTE_STYLE;
    var TYPE_ATTRIBUTE_EVENT = consts.TYPE_ATTRIBUTE_EVENT;
    var TYPE_TEXT = consts.TYPE_TEXT;
    var TYPE_COMMENT = consts.TYPE_COMMENT;
    var TOKEN_TYPE = consts.TOKEN_TYPE;
    var TOKEN_BINDINGS = consts.TOKEN_BINDINGS;
    var TOKEN_REFS = consts.TOKEN_REFS;
    var ATTR_NAME = consts.ATTR_NAME;
    var ATTR_VALUE = consts.ATTR_VALUE;
    var ATTR_NAME_BY_TYPE = consts.ATTR_NAME_BY_TYPE;
    var ATTR_TYPE_BY_NAME = consts.ATTR_TYPE_BY_NAME;
    var ATTR_VALUE_INDEX = consts.ATTR_VALUE_INDEX;
    var ELEMENT_NAME = consts.ELEMENT_NAME;
    var ELEMENT_ATTRS = consts.ELEMENT_ATTRS;
    var ELEMENT_CHILDS = consts.ELEMENT_CHILDS;
    var TEXT_VALUE = consts.TEXT_VALUE;
    var COMMENT_VALUE = consts.COMMENT_VALUE;
    var CLASS_BINDING_ENUM = consts.CLASS_BINDING_ENUM;
    var CLASS_BINDING_BOOL = consts.CLASS_BINDING_BOOL;
    var IDENT = /^[a-z_][a-z0-9_\-]*$/i;
    var ATTR_EVENT_RX = /^event-(.+)$/;
    var Template = function() {};
    var resolveResource = function() {};
    function genIsolateMarker() {
      return "i" + basis.genUID() + "__";
    }
    var makeDeclaration = function() {
      var includeStack = [];
      var styleNamespaceIsolate = {};
      var styleNamespaceResource = {};
      function getTokenName(token) {
        return (token.prefix ? token.prefix + ":" : "") + token.name;
      }
      function refList(token) {
        var array = token.refs;
        if (!array || !array.length) return 0;
        return array;
      }
      function addTokenRef(token, refName) {
        if (!token[TOKEN_REFS]) token[TOKEN_REFS] = [];
        arrayAdd(token[TOKEN_REFS], refName);
        if (refName != "element") token[TOKEN_BINDINGS] = token[TOKEN_REFS].length == 1 ? refName : 0;
      }
      function removeTokenRef(token, refName) {
        var idx = token[TOKEN_REFS].indexOf(refName);
        if (idx != -1) {
          var indexBinding = token[TOKEN_BINDINGS] && typeof token[TOKEN_BINDINGS] == "number";
          token[TOKEN_REFS].splice(idx, 1);
          if (indexBinding) if (idx == token[TOKEN_BINDINGS] - 1) token[TOKEN_BINDINGS] = refName;
          if (!token[TOKEN_REFS].length) token[TOKEN_REFS] = 0; else {
            if (indexBinding) token[TOKEN_BINDINGS] -= idx < token[TOKEN_BINDINGS] - 1;
          }
        }
      }
      function tokenAttrs(token) {
        var result = {};
        if (token.attrs) for (var i = 0, attr; attr = token.attrs[i]; i++) result[getTokenName(attr)] = attr.value;
        return result;
      }
      function tokenAttrs_(token) {
        var result = {};
        if (token.attrs) for (var i = 0, attr; attr = token.attrs[i]; i++) result[getTokenName(attr)] = attr;
        return result;
      }
      function addUnique(array, items) {
        for (var i = 0; i < items.length; i++) arrayAdd(array, items[i]);
      }
      function addStyles(array, items, prefix) {
        for (var i = 0, item; item = items[i]; i++) if (item[1] !== styleNamespaceIsolate) item[1] = prefix + item[1];
        array.unshift.apply(array, items);
      }
      function addStyle(template, token, src, isolatePrefix) {
        var url;
        if (src) {
          url = basis.resource.resolveURI(src, template.baseURI, "<b:" + token.name + ' src="{url}"/>');
        } else {
          var text = token.children[0];
          url = basis.resource.virtual("css", text ? text.value : "", template.sourceUrl).url;
        }
        template.resources.push([ url, isolatePrefix ]);
        return url;
      }
      function getLocation(template, loc) {
        if (loc) return (template.sourceUrl || "") + ":" + loc.start.line + ":" + (loc.start.column + 1);
      }
      function addTemplateWarn(template, options, message, loc) {
        if (loc && options.loc) {
          message = Object(message);
          message.loc = typeof loc == "string" ? loc : getLocation(template, loc);
        }
        template.warns.push(message);
      }
      function applyTokenLocation(template, options, dest, source) {
        if (options.loc && source.loc && !dest.loc) dest.loc = getLocation(template, source.loc);
      }
      function process(tokens, template, options) {
        function addTokenLocation(item, token) {
          applyTokenLocation(template, options, item, token);
        }
        function attrs(token, declToken) {
          function setStylePropertyBinding(attr, property, byDefault, defaultValue) {
            if (!styleAttr) {
              styleAttr = [ TYPE_ATTRIBUTE_STYLE, 0, 0 ];
              addTokenLocation(styleAttr, attr);
              result.push(styleAttr);
            }
            var binding = attr.binding;
            var addDefault = false;
            var show = attr.name == byDefault;
            if (!binding || binding[0].length != binding[1].length) {
              addDefault = !(show ^ attr.value === "");
            } else {
              addDefault = show;
              if (!styleAttr[1]) styleAttr[1] = [];
              styleAttr[1].push(binding.concat(property, attr.name));
            }
            if (addDefault) styleAttr[3] = (styleAttr[3] ? styleAttr[3] + "; " : "") + defaultValue;
          }
          var result = [];
          var styleAttr;
          var displayAttr;
          var visibilityAttr;
          var item;
          var m;
          for (var i = 0, attr; attr = token.attrs[i]; i++) {
            if (attr.prefix == "b") {
              switch (attr.name) {
                case "ref":
                  var refs = (attr.value || "").trim().split(/\s+/);
                  for (var j = 0; j < refs.length; j++) addTokenRef(declToken, refs[j]);
                  break;
                case "show":
                case "hide":
                  displayAttr = attr;
                  break;
                case "visible":
                case "hidden":
                  visibilityAttr = attr;
                  break;
              }
              continue;
            }
            if (m = attr.name.match(ATTR_EVENT_RX)) {
              item = m[1] == attr.value ? [ TYPE_ATTRIBUTE_EVENT, m[1] ] : [ TYPE_ATTRIBUTE_EVENT, m[1], attr.value ];
            } else {
              item = [ attr.type, attr.binding, refList(attr) ];
              if (attr.type == 2) item.push(getTokenName(attr));
              if (attr.value && (!options.optimizeSize || !attr.binding || attr.type != 2)) item.push(attr.value);
              if (attr.type == TYPE_ATTRIBUTE_STYLE) styleAttr = item;
            }
            addTokenLocation(item, attr);
            result.push(item);
          }
          if (displayAttr) setStylePropertyBinding(displayAttr, "display", "show", "display: none");
          if (visibilityAttr) setStylePropertyBinding(visibilityAttr, "visibility", "visible", "visibility: hidden");
          return result.length ? result : 0;
        }
        function modifyAttr(token, name, action) {
          var attrs = tokenAttrs(token);
          var attrs_ = tokenAttrs_(token);
          if (name) attrs.name = name;
          if (!attrs.name) {
            addTemplateWarn(template, options, "Instruction <b:" + token.name + "> has no attribute name", token.loc);
            return;
          }
          if (!IDENT.test(attrs.name)) {
            addTemplateWarn(template, options, "Bad attribute name `" + attrs.name + "`", token.loc);
            return;
          }
          var includedToken = tokenRefMap[attrs.ref || "element"];
          if (includedToken) {
            if (includedToken.token[TOKEN_TYPE] == TYPE_ELEMENT) {
              var itAttrs = includedToken.token;
              var isEvent = attrs.name.match(ATTR_EVENT_RX);
              var itType = isEvent ? TYPE_ATTRIBUTE_EVENT : ATTR_TYPE_BY_NAME[attrs.name] || TYPE_ATTRIBUTE;
              var valueIdx = ATTR_VALUE_INDEX[itType] || ATTR_VALUE;
              var itAttrToken = itAttrs && arraySearch(itAttrs, attrs.name, function(token) {
                if (token[TOKEN_TYPE] == TYPE_ATTRIBUTE_EVENT) return "event-" + token[1];
                return ATTR_NAME_BY_TYPE[token[TOKEN_TYPE]] || token[ATTR_NAME];
              }, ELEMENT_ATTRS);
              if (!itAttrToken && action != "remove" && action != "remove-class") {
                if (isEvent) {
                  itAttrToken = [ itType, isEvent[1] ];
                } else {
                  itAttrToken = [ itType, 0, 0, itType == TYPE_ATTRIBUTE ? attrs.name : "" ];
                  if (itType == TYPE_ATTRIBUTE) itAttrToken.push("");
                }
                if (!itAttrs) {
                  itAttrs = [];
                  includedToken.token.push(itAttrs);
                }
                itAttrs.push(itAttrToken);
                addTokenLocation(itAttrToken, token);
              }
              var classOrStyle = attrs.name == "class" || attrs.name == "style";
              switch (action) {
                case "set":
                  if (itAttrToken[TOKEN_TYPE] == TYPE_ATTRIBUTE_EVENT) {
                    if (attrs.value == isEvent[1]) itAttrToken.length = 2; else itAttrToken[valueIdx] = attrs.value;
                    return;
                  }
                  var valueAttr = attrs_.value || {};
                  itAttrToken[TOKEN_BINDINGS] = valueAttr.binding || 0;
                  if (!options.optimizeSize || !itAttrToken[TOKEN_BINDINGS] || classOrStyle) itAttrToken[valueIdx] = valueAttr.value || ""; else itAttrToken.length = valueIdx;
                  if (classOrStyle) if (!itAttrToken[TOKEN_BINDINGS] && !itAttrToken[valueIdx]) {
                    arrayRemove(itAttrs, itAttrToken);
                    return;
                  }
                  break;
                case "append":
                  var valueAttr = attrs_.value || {};
                  var appendValue = valueAttr.value || "";
                  var appendBinding = valueAttr.binding;
                  if (!isEvent) {
                    if (appendBinding) {
                      var attrBindings = itAttrToken[TOKEN_BINDINGS];
                      if (attrBindings) {
                        switch (attrs.name) {
                          case "style":
                            var currentBindingMap = {};
                            for (var i = 0, oldBinding; oldBinding = attrBindings[i]; i++) currentBindingMap[oldBinding[2]] = i;
                            for (var i = 0, newBinding; newBinding = appendBinding[i]; i++) if (newBinding[2] in currentBindingMap) attrBindings[currentBindingMap[newBinding[2]]] = newBinding; else attrBindings.push(newBinding);
                            break;
                          case "class":
                            attrBindings.push.apply(attrBindings, appendBinding);
                            break;
                          default:
                            appendBinding[0].forEach(function(name) {
                              arrayAdd(this, name);
                            }, attrBindings[0]);
                            for (var i = 0; i < appendBinding[1].length; i++) {
                              var value = appendBinding[1][i];
                              if (typeof value == "number") value = attrBindings[0].indexOf(appendBinding[0][value]);
                              attrBindings[1].push(value);
                            }
                        }
                      } else {
                        itAttrToken[TOKEN_BINDINGS] = appendBinding;
                        if (!classOrStyle) itAttrToken[TOKEN_BINDINGS][1].unshift(itAttrToken[valueIdx]);
                      }
                    } else {
                      if (!classOrStyle && itAttrToken[TOKEN_BINDINGS]) itAttrToken[TOKEN_BINDINGS][1].push(attrs.value);
                    }
                  }
                  if (appendValue) itAttrToken[valueIdx] = (itAttrToken[valueIdx] || "") + (itAttrToken[valueIdx] && (isEvent || classOrStyle) ? " " : "") + appendValue;
                  if (classOrStyle && !itAttrToken[TOKEN_BINDINGS] && !itAttrToken[valueIdx]) arrayRemove(itAttrs, itAttrToken);
                  break;
                case "remove-class":
                  if (itAttrToken) {
                    var valueAttr = attrs_.value || {};
                    var remValues = (valueAttr.value || "").split(" ");
                    var values = (itAttrToken[valueIdx] || "").split(" ");
                    var bindings = itAttrToken[TOKEN_BINDINGS];
                    if (valueAttr.binding && bindings) {
                      for (var i = 0, remBinding; remBinding = valueAttr.binding[i]; i++) for (var j = bindings.length - 1, classBinding; classBinding = bindings[j]; j--) {
                        var prefix = classBinding[0];
                        var bindingName = classBinding[3] || classBinding[1];
                        if (prefix === remBinding[0] && bindingName === remBinding[1]) bindings.splice(j, 1);
                      }
                      if (!bindings.length) itAttrToken[TOKEN_BINDINGS] = 0;
                    }
                    for (var i = 0; i < remValues.length; i++) arrayRemove(values, remValues[i]);
                    itAttrToken[valueIdx] = values.join(" ");
                    if (!itAttrToken[TOKEN_BINDINGS] && !itAttrToken[valueIdx]) arrayRemove(itAttrs, itAttrToken);
                  }
                  break;
                case "remove":
                  if (itAttrToken) arrayRemove(itAttrs, itAttrToken);
                  break;
              }
            } else {
              addTemplateWarn(template, options, "Attribute modificator is not reference to element token (reference name: " + (attrs.ref || "element") + ")", token.loc);
            }
          }
        }
        var result = [];
        for (var i = 0, token, item; token = tokens[i]; i++) {
          var refs = refList(token);
          var bindings = refs && refs.length == 1 ? refs[0] : 0;
          switch (token.type) {
            case TYPE_ELEMENT:
              if (token.prefix == "b") {
                var elAttrs = tokenAttrs(token);
                var elAttrs_ = tokenAttrs_(token);
                switch (token.name) {
                  case "style":
                    var styleNamespace = elAttrs.namespace || elAttrs.ns;
                    var styleIsolate = styleNamespace ? styleNamespaceIsolate : "";
                    var src = addStyle(template, token, elAttrs.src, styleIsolate);
                    if (styleNamespace) {
                      if (src in styleNamespaceIsolate == false) styleNamespaceIsolate[src] = genIsolateMarker();
                      template.styleNSPrefix[styleNamespace] = styleNamespaceIsolate[src];
                    }
                    break;
                  case "isolate":
                    if (!template.isolate) template.isolate = elAttrs.prefix || options.isolate || genIsolateMarker(); else addTemplateWarn(template, options, "<b:isolate> is already set to `" + template.isolate + "`", token.loc);
                    break;
                  case "l10n":
                    if (elAttrs.src) template.dictURI = basis.resource.resolveURI(elAttrs.src, template.baseURI, "<b:" + token.name + ' src="{url}"/>');
                    break;
                  case "define":
                    if ("name" in elAttrs == false) addTemplateWarn(template, options, "Define has no `name` attribute", token.loc);
                    if (hasOwnProperty.call(template.defines, elAttrs.name)) addTemplateWarn(template, options, "Define for `" + elAttrs.name + "` has already defined", token.loc);
                    if ("name" in elAttrs && !template.defines[elAttrs.name]) {
                      var bindingName = elAttrs.from || elAttrs.name;
                      var defineName = elAttrs.name;
                      var define = false;
                      var defaultIndex;
                      var values;
                      switch (elAttrs.type) {
                        case "bool":
                          define = [ bindingName, CLASS_BINDING_BOOL, defineName, elAttrs["default"] == "true" ? 1 : 0 ];
                          break;
                        case "enum":
                          if ("values" in elAttrs == false) {
                            addTemplateWarn(template, options, "Enum define has no `values` attribute", token);
                            break;
                          }
                          values = (elAttrs.values || "").trim();
                          if (!values) {
                            addTemplateWarn(template, options, "Enum define has no variants (`values` attribute is empty)", elAttrs_.values);
                            break;
                          }
                          values = values.split(/\s+/);
                          defaultIndex = values.indexOf(elAttrs["default"]);
                          if ("default" in elAttrs && defaultIndex == -1) addTemplateWarn(template, options, "Enum define has bad value as default (value ignored)", elAttrs_["default"]);
                          define = [ bindingName, CLASS_BINDING_ENUM, defineName, defaultIndex + 1, values ];
                          break;
                        default:
                          addTemplateWarn(template, options, "Bad define type `" + elAttrs.type + "` for " + defineName, elAttrs_.type && elAttrs_.type.valueLoc);
                      }
                      if (define) {
                        addTokenLocation(define, token);
                        template.defines[defineName] = define;
                      }
                    }
                    break;
                  case "text":
                    var text = token.children[0];
                    tokens[i--] = basis.object.extend(text, {
                      refs: (elAttrs.ref || "").trim().split(/\s+/),
                      value: "notrim" in elAttrs ? text.value : text.value.replace(/^\s*[\r\n]+|[\r\n]+\s*$/g, "")
                    });
                    break;
                  case "include":
                    var templateSrc = elAttrs.src;
                    if (templateSrc) {
                      var resource = resolveResource(templateSrc, template.baseURI);
                      if (!resource) {
                        addTemplateWarn(template, options, '<b:include src="' + templateSrc + '"> is not resolved, instruction ignored', token.loc);
                        continue;
                      }
                      if (includeStack.indexOf(resource) == -1) {
                        var isolatePrefix = elAttrs_.isolate ? elAttrs_.isolate.value || genIsolateMarker() : "";
                        var decl = getDeclFromSource(resource, "", true, options);
                        arrayAdd(template.deps, resource);
                        template.includes.push([ elAttrs_.src, resource, decl.includes ]);
                        if (decl.deps) addUnique(template.deps, decl.deps);
                        if (decl.warns) template.warns.push.apply(template.warns, decl.warns);
                        if (decl.resources && "no-style" in elAttrs == false) addStyles(template.resources, decl.resources, isolatePrefix);
                        var tokenRefMap = normalizeRefs(decl.tokens);
                        var instructions = (token.children || []).slice();
                        var styleNSPrefixMap = basis.object.slice(decl.styleNSPrefix);
                        if (elAttrs_["class"]) {
                          instructions.unshift({
                            type: TYPE_ELEMENT,
                            prefix: "b",
                            name: "append-class",
                            attrs: [ basis.object.extend(basis.object.slice(elAttrs_["class"]), {
                              name: "value"
                            }) ]
                          });
                        }
                        if (elAttrs.id) instructions.unshift({
                          type: TYPE_ELEMENT,
                          prefix: "b",
                          name: "set-attr",
                          attrs: [ {
                            type: TYPE_ATTRIBUTE,
                            name: "name",
                            value: "id"
                          }, {
                            type: TYPE_ATTRIBUTE,
                            name: "value",
                            value: elAttrs.id
                          } ]
                        });
                        if (elAttrs.ref) if (tokenRefMap.element) elAttrs.ref.trim().split(/\s+/).map(function(refName) {
                          addTokenRef(tokenRefMap.element.token, refName);
                        });
                        for (var j = 0, child; child = instructions[j]; j++) {
                          if (child.type == TYPE_ELEMENT && child.prefix == "b") {
                            switch (child.name) {
                              case "style":
                                var childAttrs = tokenAttrs(child);
                                var styleNamespace = childAttrs.namespace || childAttrs.ns;
                                var styleIsolate = styleNamespace ? styleNamespaceIsolate : isolatePrefix;
                                var src = addStyle(template, child, childAttrs.src, styleIsolate);
                                if (styleNamespace) {
                                  if (src in styleNamespaceIsolate == false) styleNamespaceIsolate[src] = genIsolateMarker();
                                  styleNSPrefixMap[styleNamespace] = styleNamespaceIsolate[src];
                                }
                                break;
                              case "replace":
                              case "remove":
                              case "before":
                              case "after":
                                var replaceOrRemove = child.name == "replace" || child.name == "remove";
                                var childAttrs = tokenAttrs(child);
                                var ref = "ref" in childAttrs || !replaceOrRemove ? childAttrs.ref : "element";
                                var tokenRef = ref && tokenRefMap[ref];
                                if (tokenRef) {
                                  var pos = tokenRef.owner.indexOf(tokenRef.token);
                                  if (pos != -1) {
                                    var args = [ pos + (child.name == "after"), replaceOrRemove ];
                                    if (child.name != "remove") args = args.concat(process(child.children, template, options) || []);
                                    tokenRef.owner.splice.apply(tokenRef.owner, args);
                                  }
                                }
                                break;
                              case "prepend":
                              case "append":
                                var childAttrs = tokenAttrs(child);
                                var ref = "ref" in childAttrs ? childAttrs.ref : "element";
                                var tokenRef = ref && tokenRefMap[ref];
                                var token = tokenRef && tokenRef.token;
                                if (token && token[TOKEN_TYPE] == TYPE_ELEMENT) {
                                  var children = process(child.children, template, options) || [];
                                  if (child.name == "prepend") token.splice.apply(token, [ ELEMENT_ATTRS, 0 ].concat(children)); else token.push.apply(token, children);
                                }
                                break;
                              case "attr":
                              case "set-attr":
                                modifyAttr(child, false, "set");
                                break;
                              case "append-attr":
                                modifyAttr(child, false, "append");
                                break;
                              case "remove-attr":
                                modifyAttr(child, false, "remove");
                                break;
                              case "class":
                              case "append-class":
                                modifyAttr(child, "class", "append");
                                break;
                              case "set-class":
                                modifyAttr(child, "class", "set");
                                break;
                              case "remove-class":
                                modifyAttr(child, "class", "remove-class");
                                break;
                              case "add-ref":
                                var childAttrs = tokenAttrs(child);
                                var ref = "ref" in childAttrs ? childAttrs.ref : "element";
                                var tokenRef = ref && tokenRefMap[ref];
                                var token = tokenRef && tokenRef.token;
                                if (token && childAttrs.name) addTokenRef(token, childAttrs.name);
                                break;
                              case "remove-ref":
                                var childAttrs = tokenAttrs(child);
                                var ref = "ref" in childAttrs ? childAttrs.ref : "element";
                                var tokenRef = ref && tokenRefMap[ref];
                                var token = tokenRef && tokenRef.token;
                                if (token) removeTokenRef(token, childAttrs.name || childAttrs.ref);
                                break;
                              default:
                                addTemplateWarn(template, options, "Unknown instruction tag <b:" + child.name + ">", child.loc);
                            }
                          } else {
                            decl.tokens.push.apply(decl.tokens, process([ child ], template, options) || []);
                          }
                        }
                        if (tokenRefMap.element) removeTokenRef(tokenRefMap.element.token, "element");
                        basis.object.complete(template.styleNSPrefix, styleNSPrefixMap);
                        if (isolatePrefix) isolateTokens(decl.tokens, isolatePrefix); else if (decl.isolate && !template.isolate) template.isolate = options.isolate || genIsolateMarker();
                        result.push.apply(result, decl.tokens);
                      } else {
                        var stack = includeStack.slice(includeStack.indexOf(resource) || 0).concat(resource).map(function(res) {
                          if (res instanceof Template) res = res.source;
                          return res.id || res.url || "[inline template]";
                        });
                        template.warns.push("Recursion: ", stack.join(" -> "));
                        basis.dev.warn("Recursion in template: ", stack.join(" -> "));
                      }
                    }
                    break;
                }
                continue;
              }
              item = [ 1, bindings, refs, getTokenName(token) ];
              item.push.apply(item, attrs(token, item, options.optimizeSize) || []);
              item.push.apply(item, process(token.children, template, options) || []);
              addTokenLocation(item, token);
              break;
            case TYPE_TEXT:
              if (refs && refs.length == 2 && arraySearch(refs, "element")) bindings = refs[+!refs.lastSearchIndex];
              item = [ 3, bindings, refs ];
              if (!refs || token.value != "{" + refs.join("|") + "}") item.push(token.value);
              addTokenLocation(item, token);
              break;
            case TYPE_COMMENT:
              if (options.optimizeSize && !bindings && !refs) continue;
              item = [ 8, bindings, refs ];
              if (!options.optimizeSize) if (!refs || token.value != "{" + refs.join("|") + "}") item.push(token.value);
              addTokenLocation(item, token);
              break;
          }
          while (item[item.length - 1] === 0) item.pop();
          result.push(item);
        }
        return result.length ? result : 0;
      }
      function absl10n(value, dictURI, l10nMap) {
        if (typeof value == "string") {
          var parts = value.split(":");
          var l10n = parts[0] == "l10n";
          if (l10n) if (parts.length == 2 && value.indexOf("@") == -1) {
            if (!dictURI) return false;
            parts[1] = parts[1] + "@" + dictURI;
          }
          value = parts.join(":");
          if (l10n) l10nMap[value] = true;
        }
        return value;
      }
      function normalizeRefs(tokens, dictURI, map, stIdx) {
        if (!map) map = {};
        for (var i = stIdx || 0, token; token = tokens[i]; i++) {
          var tokenType = token[TOKEN_TYPE];
          var refs = token[TOKEN_REFS];
          if (tokenType !== TYPE_ATTRIBUTE_EVENT && refs) {
            for (var j = refs.length - 1, refName; refName = refs[j]; j--) {
              if (refName.indexOf(":") != -1) {
                removeTokenRef(token, refName);
                continue;
              }
              if (map[refName]) removeTokenRef(map[refName].token, refName);
              if (token[TOKEN_BINDINGS] == refName) token[TOKEN_BINDINGS] = j + 1;
              map[refName] = {
                owner: tokens,
                token: token
              };
            }
          }
          if (tokenType === TYPE_ELEMENT) normalizeRefs(token, dictURI, map, ELEMENT_ATTRS);
        }
        return map;
      }
      function applyDefines(tokens, template, options, stIdx) {
        for (var i = stIdx || 0, token; token = tokens[i]; i++) {
          var tokenType = token[TOKEN_TYPE];
          var bindings = token[TOKEN_BINDINGS];
          switch (token[TOKEN_TYPE]) {
            case TYPE_ELEMENT:
              applyDefines(token, template, options, ELEMENT_ATTRS);
              break;
            case TYPE_TEXT:
              if (bindings) {
                var binding = absl10n(bindings, template.dictURI, template.l10nTokens);
                token[TOKEN_BINDINGS] = binding || 0;
                if (binding === false) {
                  addTemplateWarn(template, options, "Dictionary for l10n binding on text node can't be resolved: {" + bindings + "}", token.loc);
                  token[TEXT_VALUE] = "{" + bindings + "}";
                }
              }
              break;
            case TYPE_ATTRIBUTE:
              if (bindings) {
                var array = bindings[0];
                for (var j = 0; j < array.length; j++) {
                  var binding = absl10n(array[j], template.dictURI, template.l10nTokens);
                  array[j] = binding === false ? "{" + array[j] + "}" : binding;
                  if (binding === false) addTemplateWarn(template, options, "Dictionary for l10n binding on attribute can't be resolved: {" + array[j] + "}", token.loc);
                }
              }
              break;
            case TYPE_ATTRIBUTE_CLASS:
              if (bindings) {
                for (var k = 0, bind; bind = bindings[k]; k++) {
                  if (bind.length > 2) continue;
                  applyTokenLocation(template, options, bind, bind.info_);
                  var bindNameParts = bind[1].split(":");
                  var bindName = bindNameParts.pop();
                  var bindPrefix = bindNameParts.pop() || "";
                  var define = template.defines[bindName];
                  if (define) {
                    bind[1] = (bindPrefix ? bindPrefix + ":" : "") + define[0];
                    bind.push.apply(bind, define.slice(1));
                    define.used = true;
                  } else {
                    bind.push(0);
                    addTemplateWarn(template, options, "Unpredictable class binding: " + bind[0] + "{" + bind[1] + "}", bind.loc);
                  }
                }
                if (options.optimizeSize) {
                  var valueIdx = ATTR_VALUE_INDEX[tokenType];
                  if (!token[valueIdx]) token.length = valueIdx;
                }
              }
              break;
          }
        }
      }
      function isolateTokens(tokens, isolate, template, stIdx) {
        function processName(name) {
          var parts = name.split(":");
          if (parts.length == 1) return isolate + parts[0];
          if (!template) return name;
          if (!parts[0]) return parts[1];
          if (parts[0] in template.styleNSPrefix == false) {
            template.warns.push("Namespace `" + parts[0] + "` is not defined in template, no prefix added");
            return name;
          }
          return template.styleNSPrefix[parts[0]] + parts[1];
        }
        for (var i = stIdx || 0, token; token = tokens[i]; i++) {
          var tokenType = token[TOKEN_TYPE];
          if (tokenType == TYPE_ELEMENT) isolateTokens(token, isolate, template, ELEMENT_ATTRS);
          if (tokenType == TYPE_ATTRIBUTE_CLASS) {
            var bindings = token[TOKEN_BINDINGS];
            var valueIndex = ATTR_VALUE_INDEX[tokenType];
            if (token[valueIndex]) token[valueIndex] = token[valueIndex].split(/\s+/).map(processName).join(" ");
            if (bindings) for (var k = 0, bind; bind = bindings[k]; k++) bind[0] = processName(bind[0]);
          }
        }
      }
      return function makeDeclaration(source, baseURI, options, sourceUrl, sourceOrigin) {
        var warns = [];
        var source_;
        options = options || {};
        var result = {
          sourceUrl: sourceUrl,
          baseURI: baseURI || "",
          dictURI: sourceUrl ? basis.path.resolve(sourceUrl) : baseURI || "",
          tokens: null,
          styleNSPrefix: {},
          resources: [],
          includes: [],
          deps: [],
          defines: {},
          l10nTokens: {},
          warns: warns,
          isolate: false
        };
        if (result.dictURI) {
          var extname = basis.path.extname(result.dictURI);
          if (extname && extname != ".l10n") result.dictURI = result.dictURI.substr(0, result.dictURI.length - extname.length) + ".l10n";
        }
        if (!source.templateTokens) {
          source_ = source;
          source = tokenize(String(source), {
            loc: !!options.loc,
            range: !!options.range
          });
        }
        if (source.warns) source.warns.forEach(function(warn) {
          addTemplateWarn(result, options, warn[0], warn[1].loc);
        });
        includeStack.push(sourceOrigin !== true && sourceOrigin || {});
        result.tokens = process(source, result, options);
        includeStack.pop();
        if (!result.tokens) result.tokens = [ [ TYPE_TEXT, 0, 0, "" ] ];
        if (source_) result.tokens.source_ = source_;
        addTokenRef(result.tokens[0], "element");
        normalizeRefs(result.tokens, result.dictURI);
        applyDefines(result.tokens, result, options);
        if (/^[^a-z]/i.test(result.isolate)) basis.dev.error("basis.template: isolation prefix `" + result.isolate + "` should not starts with symbol other than letter, otherwise it leads to incorrect css class names and broken styles");
        if (includeStack.length == 0) {
          isolateTokens(result.tokens, result.isolate || "", result);
          if (result.isolate) for (var i = 0, item; item = result.resources[i]; i++) if (item[1] !== styleNamespaceIsolate) item[1] = result.isolate + item[1];
          result.resources = result.resources.filter(function(item, idx, array) {
            return !basis.array.search(array, String(item), String, idx + 1);
          }).map(function(item) {
            var url = item[0];
            var isolate = item[1];
            var namespaceIsolate = isolate === styleNamespaceIsolate;
            if (namespaceIsolate) {
              isolate = styleNamespaceIsolate[url];
              if (url in styleNamespaceResource) return styleNamespaceResource[url].url;
            }
            if (!isolate) return url;
            var resource = basis.resource.virtual("css", "").ready(function(cssResource) {
              cssResource.url = url + "?isolate-prefix=" + isolate;
              cssResource.baseURI = basis.path.dirname(url) + "/";
              sourceResource();
            });
            var sourceResource = basis.resource(url).ready(function(cssResource) {
              var cssText = isolateCss(cssResource.cssText || "", isolate);
              if (typeof btoa == "function") cssText += "\n/*# sourceMappingURL=data:application/json;base64," + btoa('{"version":3,"sources":["' + basis.path.origin + url + '"],' + '"mappings":"AAAA' + basis.string.repeat(";AACA", cssText.split("\n").length) + '"}') + " */";
              resource.update(cssText);
            });
            if (namespaceIsolate) styleNamespaceResource[url] = resource;
            return resource.url;
          });
        }
        for (var key in result.defines) {
          var define = result.defines[key];
          if (!define.used) addTemplateWarn(result, options, "Unused define: " + key, define.loc);
        }
        if (!warns.length) result.warns = false;
        return result;
      };
    }();
    function cloneDecl(array) {
      var result = [];
      if (array.source_) result.source_ = array.source_;
      for (var i = 0; i < array.length; i++) result.push(Array.isArray(array[i]) ? cloneDecl(array[i]) : array[i]);
      return result;
    }
    function getDeclFromSource(source, baseURI, clone, options) {
      var result = source;
      var sourceUrl;
      if (source.bindingBridge) {
        baseURI = "baseURI" in source ? source.baseURI : "url" in source ? basis.path.dirname(source.url) : baseURI;
        sourceUrl = "url" in source ? source.url : sourceUrl;
        result = source.bindingBridge.get(source);
      }
      if (Array.isArray(result)) {
        if (clone) result = cloneDecl(result);
        result = {
          tokens: result
        };
      } else {
        if (typeof result != "object" || !Array.isArray(result.tokens)) result = String(result);
      }
      if (typeof result == "string") result = makeDeclaration(result, baseURI, options, sourceUrl, source);
      return result;
    }
    basis.resource("./a.js").ready(function(exports) {
      resolveResource = exports.resolveResource;
      Template = exports.Template;
    });
    module.exports = {
      makeDeclaration: makeDeclaration,
      getDeclFromSource: getDeclFromSource
    };
  },
  "j.js": function(exports, module, basis, global, __filename, __dirname, require, resource, asset) {
    var document = global.document;
    var EnvClass;
    if (document) EnvClass = basis.require("./u.js");
    module.exports = {
      create: function(init, html) {
        return new EnvClass({
          initEnv: init,
          html: html
        });
      }
    };
  }
};

(function createBasisInstance(context, __basisFilename, __config) {
  "use strict";
  var VERSION = "1.4.0-dev";
  var global = Function("return this")();
  var NODE_ENV = global !== context ? global : false;
  var document = global.document;
  var toString = Object.prototype.toString;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  global = context;
  function genUID(len) {
    function base36(val) {
      return Math.round(val).toString(36);
    }
    var result = base36(10 + 25 * Math.random());
    if (!len) len = 16;
    while (result.length < len) result += base36(new Date * Math.random());
    return result.substr(0, len);
  }
  var warnPropertyAccess = function(object, name, value, warning) {
    try {
      if (Object.defineProperty) {
        var obj = {};
        Object.defineProperty(obj, "foo", {
          get: function() {
            return true;
          }
        });
        if (obj.foo === true) {
          return function(object, name, value, warning) {
            Object.defineProperty(object, name, {
              get: function() {
                consoleMethods.warn(warning);
                return value;
              },
              set: function(newValue) {
                value = newValue;
              }
            });
          };
        }
      }
    } catch (e) {}
    return function() {};
  }();
  function extend(dest, source) {
    for (var key in source) dest[key] = source[key];
    return dest;
  }
  function complete(dest, source) {
    for (var key in source) if (key in dest == false) dest[key] = source[key];
    return dest;
  }
  function keys(object) {
    var result = [];
    for (var key in object) result.push(key);
    return result;
  }
  function values(object) {
    var result = [];
    for (var key in object) result.push(object[key]);
    return result;
  }
  function slice(source, keys) {
    var result = {};
    if (!keys) return extend(result, source);
    for (var i = 0, key; key = keys[i++]; ) if (key in source) result[key] = source[key];
    return result;
  }
  function splice(source, keys) {
    var result = {};
    if (!keys) return extend(result, source);
    for (var i = 0, key; key = keys[i++]; ) if (key in source) {
      result[key] = source[key];
      delete source[key];
    }
    return result;
  }
  function merge() {
    var result = {};
    for (var i = 0; i < arguments.length; i++) extend(result, arguments[i]);
    return result;
  }
  function iterate(object, callback, thisObject) {
    var result = [];
    for (var key in object) result.push(callback.call(thisObject, key, object[key]));
    return result;
  }
  function $undefined(value) {
    return value == undefined;
  }
  function $defined(value) {
    return value != undefined;
  }
  function $isNull(value) {
    return value == null || value == undefined;
  }
  function $isNotNull(value) {
    return value != null && value != undefined;
  }
  function $isSame(value) {
    return value === this;
  }
  function $isNotSame(value) {
    return value !== this;
  }
  function $self(value) {
    return value;
  }
  function $const(value) {
    return function() {
      return value;
    };
  }
  function $false() {
    return false;
  }
  function $true() {
    return true;
  }
  function $null() {
    return null;
  }
  function $undef() {}
  var getter = function() {
    var GETTER_ID_PREFIX = "basisGetterId" + genUID() + "_";
    var GETTER_ID = GETTER_ID_PREFIX + "root";
    var ID = GETTER_ID_PREFIX;
    var SOURCE = GETTER_ID_PREFIX + "base";
    var PARENT = GETTER_ID_PREFIX + "parent";
    var getterSeed = 1;
    var pathCache = {};
    function as(path) {
      var self = this;
      var wrapper;
      var result;
      var id;
      if (typeof path == "function" || typeof path == "string") {
        wrapper = resolveFunction(path, self[ID]);
        id = GETTER_ID_PREFIX + wrapper[ID];
        if (hasOwnProperty.call(self, id)) return self[id];
        if (typeof wrapper[SOURCE] == "function") wrapper = wrapper[SOURCE];
        result = function(value) {
          return wrapper(self(value));
        };
      } else {
        var map = path;
        if (!map) return nullGetter;
        result = function(value) {
          return map[self(value)];
        };
      }
      result[PARENT] = self;
      result[ID] = getterSeed++;
      result[SOURCE] = path;
      result.__extend__ = getter;
      result.as = as;
      if (id) self[id] = result;
      return result;
    }
    function buildFunction(path) {
      return new Function("object", "return object != null ? object." + path + " : object");
    }
    function resolveFunction(value, id) {
      var fn = value;
      var result;
      if (value && typeof value == "string") {
        if (hasOwnProperty.call(pathCache, value)) return pathCache[value];
        fn = pathCache[value] = buildFunction(value);
      }
      if (typeof fn != "function") {
        basis.dev.warn("path for root getter should be function or non-empty string");
        return nullGetter;
      }
      if (fn.__extend__ === getter) return fn;
      if (hasOwnProperty.call(fn, id)) return fn[id];
      result = fn[id] = fn !== value ? fn : function(value) {
        return fn(value);
      };
      result[ID] = getterSeed++;
      result[SOURCE] = value;
      result.__extend__ = getter;
      result.as = as;
      return result;
    }
    function getter(path, value) {
      var result = path && path !== nullGetter ? resolveFunction(path, GETTER_ID) : nullGetter;
      if (value || value === "") {
        basis.dev.warn("second argument for getter is deprecated, use `as` method of getter instead");
        if (typeof value == "string") value = stringFunctions.formatter(value);
        return result.as(value);
      }
      return result;
    }
    getter.ID = ID;
    getter.SOURCE = SOURCE;
    getter.PARENT = PARENT;
    return getter;
  }();
  var nullGetter = function() {
    var nullGetter = function() {};
    nullGetter[getter.ID] = getter.ID + "nullGetter";
    nullGetter.__extend__ = getter, nullGetter.as = function() {
      return nullGetter;
    };
    return nullGetter;
  }();
  function wrapper(key) {
    return function(value) {
      var result = {};
      result[key] = value;
      return result;
    };
  }
  function lazyInit(init, thisObject) {
    var inited = 0;
    var self;
    var data;
    return self = function() {
      if (!(inited++)) {
        self.inited = true;
        self.data = data = init.apply(thisObject || this, arguments);
        if (typeof data == "undefined") consoleMethods.warn("lazyInit function returns nothing:\n" + init);
      }
      return data;
    };
  }
  function lazyInitAndRun(init, run, thisObject) {
    var inited = 0;
    var self;
    var data;
    return self = function() {
      if (!(inited++)) {
        self.inited = true;
        self.data = data = init.call(thisObject || this);
        if (typeof data == "undefined") consoleMethods.warn("lazyInitAndRun function returns nothing:\n" + init);
      }
      run.apply(data, arguments);
      return data;
    };
  }
  function runOnce(run, thisObject) {
    var fired = 0;
    return function() {
      if (!(fired++)) return run.apply(thisObject || this, arguments);
    };
  }
  function publicCallback(fn, permanent) {
    var name = "basisjsCallback" + genUID();
    global[name] = permanent ? fn : function() {
      delete global[name];
      fn.apply(this, arguments);
    };
    return name;
  }
  var consoleMethods = function() {
    var methods = {
      log: $undef,
      info: $undef,
      warn: $undef,
      error: $undef
    };
    if (typeof console != "undefined") iterate(methods, function(methodName) {
      methods[methodName] = "bind" in Function.prototype && typeof console[methodName] == "function" ? Function.prototype.bind.call(console[methodName], console) : function() {
        Function.prototype.apply.call(console[methodName], console, arguments);
      };
    });
    return methods;
  }();
  var setImmediate = global.setImmediate || global.msSetImmediate;
  var clearImmediate = global.clearImmediate || global.msSetImmediate;
  if (setImmediate) setImmediate = setImmediate.bind(global);
  if (clearImmediate) clearImmediate = clearImmediate.bind(global);
  if (!setImmediate) {
    (function() {
      var runTask = function() {
        var taskById = {};
        var taskId = 0;
        setImmediate = function(fn) {
          if (typeof fn != "function") {
            consoleMethods.warn("basis.setImmediate() and basis.nextTick() accept functions only (call ignored)");
            return;
          }
          taskById[++taskId] = {
            fn: fn,
            args: arrayFrom(arguments, 1)
          };
          addToQueue(taskId);
          return taskId;
        };
        clearImmediate = function(taskId) {
          delete taskById[taskId];
        };
        return function(taskId) {
          var task = taskById[taskId];
          if (task) {
            delete taskById[taskId];
            task.fn.apply(undefined, task.args);
          }
          asap.process();
        };
      }();
      var addToQueue = function(taskId) {
        setTimeout(function() {
          runTask(taskId);
        }, 0);
      };
      if (NODE_ENV && NODE_ENV.process && typeof process.nextTick == "function") {
        addToQueue = function(taskId) {
          process.nextTick(function() {
            runTask(taskId);
          });
        };
      } else {
        var postMessageSupported = global.postMessage && !global.importScripts;
        if (postMessageSupported) {
          var oldOnMessage = global.onmessage;
          global.onmessage = function() {
            postMessageSupported = false;
          };
          global.postMessage("", "*");
          global.onmessage = oldOnMessage;
        }
        if (postMessageSupported) {
          var taskIdByMessage = {};
          var setImmediateHandler = function(event) {
            if (event && event.source == global) {
              var data = event.data;
              if (hasOwnProperty.call(taskIdByMessage, data)) {
                var taskId = taskIdByMessage[data];
                delete taskIdByMessage[data];
                runTask(taskId);
              }
            }
          };
          if (global.addEventListener) global.addEventListener("message", setImmediateHandler, true); else global.attachEvent("onmessage", setImmediateHandler);
          addToQueue = function(taskId) {
            var message = genUID(32);
            taskIdByMessage[message] = taskId;
            global.postMessage(message, "*");
          };
        } else {
          if (global.MessageChannel) {
            var channel = new global.MessageChannel;
            channel.port1.onmessage = function(event) {
              runTask(event.data);
            };
            addToQueue = function(taskId) {
              channel.port2.postMessage(taskId);
            };
          } else {
            var createScript = function() {
              return document.createElement("script");
            };
            if (document && "onreadystatechange" in createScript()) {
              var defaultAddToQueue = addToQueue;
              addToQueue = function beforeHeadReady(taskId) {
                if (typeof documentInterface != "undefined") {
                  addToQueue = defaultAddToQueue;
                  documentInterface.head.ready(function() {
                    addToQueue = function(taskId) {
                      var scriptEl = createScript();
                      scriptEl.onreadystatechange = function() {
                        scriptEl.onreadystatechange = null;
                        documentInterface.remove(scriptEl);
                        scriptEl = null;
                        runTask(taskId);
                      };
                      documentInterface.head.add(scriptEl);
                    };
                  });
                }
                if (addToQueue === beforeHeadReady) defaultAddToQueue(taskId); else addToQueue(taskId);
              };
            }
          }
        }
      }
    })();
  }
  var asap = function() {
    var queue = [];
    var processing = false;
    var timer;
    function processQueue() {
      try {
        processing = true;
        var item;
        while (item = queue.shift()) item.fn.call(item.context);
      } finally {
        processing = false;
        if (queue.length) timer = setImmediate(process);
      }
    }
    function process() {
      if (timer) timer = clearImmediate(timer);
      if (queue.length) processQueue();
    }
    var asap = function(fn, context) {
      queue.push({
        fn: fn,
        context: context
      });
      if (!timer) timer = setImmediate(process);
      return true;
    };
    asap.process = function() {
      if (!processing) process();
    };
    return asap;
  }();
  var pathUtils = function() {
    var ABSOLUTE_RX = /^([^\/]+:|\/)/;
    var PROTOCOL_RX = /^[a-zA-Z0-9\-]+:\/?/;
    var ORIGIN_RX = /^(?:[a-zA-Z0-9\-]+:)?\/\/[^\/]+\/?/;
    var SEARCH_HASH_RX = /[\?#].*$/;
    var baseURI;
    var origin;
    var utils;
    if (NODE_ENV) {
      var path = (process.basisjsBaseURI || require("path").resolve(".")).replace(/\\/g, "/");
      baseURI = path.replace(/^[^\/]*/, "");
      origin = path.replace(/\/.*/, "");
    } else {
      baseURI = location.pathname.replace(/[^\/]+$/, "");
      origin = location.protocol + "//" + location.host;
    }
    utils = {
      baseURI: baseURI,
      origin: origin,
      normalize: function(path) {
        path = (path || "").replace(PROTOCOL_RX, "/").replace(ORIGIN_RX, "/").replace(SEARCH_HASH_RX, "");
        var result = [];
        var parts = path.split("/");
        for (var i = 0; i < parts.length; i++) {
          if (parts[i] == "..") {
            if (result.length > 1 || result[0]) result.pop();
          } else {
            if ((parts[i] || !i) && parts[i] != ".") result.push(parts[i]);
          }
        }
        return result.join("/") || (path[0] === "/" ? "/" : "");
      },
      dirname: function(path) {
        var result = utils.normalize(path);
        return result.replace(/\/([^\/]*)$|^[^\/]+$/, "") || (result[0] == "/" ? "/" : ".");
      },
      extname: function(path) {
        var ext = utils.normalize(path).match(/[^\/](\.[^\/\.]*)$/);
        return ext ? ext[1] : "";
      },
      basename: function(path, ext) {
        var filename = utils.normalize(path).match(/[^\\\/]*$/);
        filename = filename ? filename[0] : "";
        if (ext == utils.extname(filename)) filename = filename.substring(0, filename.length - ext.length);
        return filename;
      },
      resolve: function(from, to) {
        var args = arrayFrom(arguments).reverse();
        var path = [];
        var absoluteFound = false;
        for (var i = 0; !absoluteFound && i < args.length; i++) if (typeof args[i] == "string") {
          path.unshift(args[i]);
          absoluteFound = ABSOLUTE_RX.test(args[i]);
        }
        if (!absoluteFound) path.unshift(baseURI == "/" ? "" : baseURI);
        return utils.normalize(path.join("/"));
      },
      relative: function(from, to) {
        if (typeof to != "string") {
          to = from;
          from = baseURI;
        }
        from = utils.normalize(from);
        to = utils.normalize(to);
        if (from[0] == "/" && to[0] != "/") return from;
        if (to[0] == "/" && from[0] != "/") return to;
        var base = from.replace(/^\/$/, "").split(/\//);
        var path = to.replace(/^\/$/, "").split(/\//);
        var result = [];
        var i = 0;
        while (path[i] == base[i] && typeof base[i] == "string") i++;
        for (var j = base.length - i; j > 0; j--) result.push("..");
        return result.concat(path.slice(i).filter(Boolean)).join("/");
      }
    };
    return utils;
  }();
  var basisFilename = __basisFilename || "";
  var config = __config || {
    modules: {},
    exports: true,
    implicitExt: true,
    autoload: [ "./0.js" ]
  };
  function fetchConfig() {
    var config = __config;
    if (!config) {
      if (NODE_ENV) {
        basisFilename = __filename.replace(/\\/g, "/");
        if (process.basisjsConfig) {
          config = process.basisjsConfig;
          if (typeof config == "string") {
            try {
              config = Function("return{" + config + "}")();
            } catch (e) {
              consoleMethods.error("basis-config: basis.js config parse fault: " + e);
            }
          }
        }
      } else {
        var scripts = document.scripts;
        for (var i = 0, scriptEl; scriptEl = scripts[i]; i++) {
          var configAttrValue = scriptEl.hasAttribute("basis-config") ? scriptEl.getAttribute("basis-config") : scriptEl.getAttribute("data-basis-config");
          scriptEl.removeAttribute("basis-config");
          scriptEl.removeAttribute("data-basis-config");
          if (configAttrValue !== null) {
            basisFilename = pathUtils.normalize(scriptEl.src);
            try {
              config = Function("return{" + configAttrValue + "}")();
            } catch (e) {
              consoleMethods.error("basis-config: basis.js config parse fault: " + e);
            }
            break;
          }
        }
      }
    }
    return processConfig(config);
  }
  function processConfig(config, verbose) {
    config = slice(config);
    complete(config, {
      implicitExt: NODE_ENV ? true : "warn"
    });
    if ("extProto" in config) consoleMethods.warn("basis-config: `extProto` option in basis-config is not support anymore");
    if ("path" in config) consoleMethods.warn("basis-config: `path` option in basis-config is deprecated, use `modules` instead");
    var autoload = [];
    var modules = merge(config.path, config.modules, {
      basis: basisFilename
    });
    config.modules = {};
    if (config.autoload) {
      var m = String(config.autoload).match(/^((?:[^\/]*\/)*)([a-z$_][a-z0-9$_]*)((?:\.[a-z$_][a-z0-9$_]*)*)$/i);
      if (m) {
        modules[m[2]] = {
          autoload: true,
          filename: m[1] + m[2] + (m[3] || ".js")
        };
      } else {
        consoleMethods.warn("basis-config: wrong `autoload` value (setting ignored): " + config.autoload);
      }
      delete config.autoload;
    }
    for (var name in modules) {
      var module = modules[name];
      if (typeof module == "string") module = {
        filename: module.replace(/\/$/, "/" + name + ".js")
      };
      var filename = module.filename;
      var path = module.path;
      if (filename && !path) {
        filename = pathUtils.resolve(filename);
        path = filename.substr(0, filename.length - pathUtils.extname(filename).length);
        filename = "../" + pathUtils.basename(filename);
      }
      path = pathUtils.resolve(path);
      if (!filename && path) {
        filename = pathUtils.basename(path);
        path = pathUtils.dirname(path);
      }
      if (!pathUtils.extname(filename)) filename += ".js";
      filename = pathUtils.resolve(path, filename);
      config.modules[name] = {
        path: path,
        filename: filename
      };
      if (module.autoload) {
        config.autoload = autoload;
        autoload.push(name);
      }
    }
    return config;
  }
  var Class = function() {
    var instanceSeed = {
      id: 1
    };
    var classSeed = 1;
    var classes = [];
    var SELF = {};
    function isClass(object) {
      return typeof object == "function" && !!object.basisClassId_;
    }
    function isSubclassOf(superClass) {
      var cursor = this;
      while (cursor && cursor !== superClass) cursor = cursor.superClass_;
      return cursor === superClass;
    }
    function devVerboseName(name, args, fn) {
      return (new Function(keys(args), 'return {"' + name + '": ' + fn + '\n}["' + name + '"]')).apply(null, values(args));
    }
    var TOSTRING_BUG = function() {
      for (var key in {
        toString: 1
      }) return false;
      return true;
    }();
    function createClass(SuperClass, extensions) {
      var classId = classSeed++;
      if (typeof SuperClass != "function") SuperClass = BaseClass;
      var className = "";
      for (var i = 1, extension; extension = arguments[i]; i++) if (typeof extension != "function" && extension.className) className = extension.className;
      if (!className) className = SuperClass.className + "._Class" + classId;
      var NewClassProto = function() {};
      NewClassProto = devVerboseName(className, {}, NewClassProto);
      NewClassProto.prototype = SuperClass.prototype;
      var newProto = new NewClassProto;
      var newClassProps = {
        className: className,
        basisClassId_: classId,
        superClass_: SuperClass,
        extendConstructor_: !!SuperClass.extendConstructor_,
        isSubclassOf: isSubclassOf,
        subclass: function() {
          return createClass.apply(null, [ newClass ].concat(arrayFrom(arguments)));
        },
        extend: extendClass,
        __extend__: function(value) {
          if (value && value !== SELF && (typeof value == "object" || typeof value == "function" && !isClass(value))) return BaseClass.create.call(null, newClass, value); else return value;
        },
        prototype: newProto
      };
      for (var i = 1, extension; extension = arguments[i]; i++) newClassProps.extend(extension);
      if (newProto.init !== BaseClass.prototype.init && !/^function[^(]*\(\)/.test(newProto.init) && newClassProps.extendConstructor_) consoleMethods.warn("probably wrong extendConstructor_ value for " + newClassProps.className);
      var newClass = newClassProps.extendConstructor_ ? function(extend) {
        this.basisObjectId = instanceSeed.id++;
        var prop;
        for (var key in extend) {
          prop = this[key];
          this[key] = prop && prop.__extend__ ? prop.__extend__(extend[key]) : extend[key];
        }
        this.init();
        this.postInit();
      } : function() {
        this.basisObjectId = instanceSeed.id++;
        this.init.apply(this, arguments);
        this.postInit();
      };
      newClass = devVerboseName(className, {
        instanceSeed: instanceSeed
      }, newClass);
      newProto.constructor = newClass;
      for (var key in newProto) if (newProto[key] === SELF) newProto[key] = newClass;
      extend(newClass, newClassProps);
      classes.push(newClass);
      return newClass;
    }
    function extendClass(source) {
      var proto = this.prototype;
      if (typeof source == "function" && !isClass(source)) source = source(this.superClass_.prototype, slice(proto));
      if (source.prototype) source = source.prototype;
      for (var key in source) {
        var value = source[key];
        var protoValue = proto[key];
        if (key == "className" || key == "extendConstructor_") this[key] = value; else {
          if (protoValue && protoValue.__extend__) proto[key] = protoValue.__extend__(value); else {
            proto[key] = value;
          }
        }
      }
      if (TOSTRING_BUG && source[key = "toString"] !== toString) proto[key] = source[key];
      return this;
    }
    var BaseClass = extend(createClass, {
      className: "basis.Class",
      extendConstructor_: false,
      prototype: {
        basisObjectId: 0,
        constructor: null,
        init: function() {},
        postInit: function() {},
        toString: function() {
          return "[object " + (this.constructor || this).className + "]";
        },
        destroy: function() {
          for (var prop in this) if (hasOwnProperty.call(this, prop)) this[prop] = null;
          this.destroy = $undef;
        }
      }
    });
    var customExtendProperty = function(extension, fn, devName) {
      return {
        __extend__: function(extension) {
          if (!extension) return extension;
          if (extension && extension.__extend__) return extension;
          var Base = function() {};
          Base = devVerboseName(devName || "customExtendProperty", {}, Base);
          Base.prototype = this;
          var result = new Base;
          fn(result, extension);
          return result;
        }
      }.__extend__(extension || {});
    };
    var extensibleProperty = function(extension) {
      return customExtendProperty(extension, extend, "extensibleProperty");
    };
    var nestedExtendProperty = function(extension) {
      return customExtendProperty(extension, function(result, extension) {
        for (var key in extension) if (hasOwnProperty.call(extension, key)) {
          var value = result[key];
          var newValue = extension[key];
          if (newValue) result[key] = value && value.__extend__ ? value.__extend__(newValue) : extensibleProperty(newValue); else result[key] = null;
        }
      }, "nestedExtendProperty");
    };
    var oneFunctionProperty = function(fn, keys) {
      var create = function(keys) {
        var result = {
          __extend__: create
        };
        if (keys) {
          if (keys.__extend__) return keys;
          var Cls = devVerboseName("oneFunctionProperty", {}, function() {});
          result = new Cls;
          result.__extend__ = create;
          for (var key in keys) if (hasOwnProperty.call(keys, key) && keys[key]) result[key] = fn;
        }
        return result;
      };
      return create(keys || {});
    };
    return extend(BaseClass, {
      all_: classes,
      SELF: SELF,
      create: createClass,
      isClass: isClass,
      customExtendProperty: customExtendProperty,
      extensibleProperty: extensibleProperty,
      nestedExtendProperty: nestedExtendProperty,
      oneFunctionProperty: oneFunctionProperty
    });
  }();
  var Token = Class(null, {
    className: "basis.Token",
    value: null,
    handler: null,
    deferredToken: null,
    bindingBridge: {
      attach: function(host, fn, context, onDestroy) {
        host.attach(fn, context, onDestroy);
      },
      detach: function(host, fn, context) {
        host.detach(fn, context);
      },
      get: function(host) {
        return host.get();
      }
    },
    init: function(value) {
      this.value = value;
    },
    get: function() {
      return this.value;
    },
    set: function(value) {
      if (this.value !== value) {
        this.value = value;
        this.apply();
      }
    },
    attach: function(fn, context, onDestroy) {
      var cursor = this;
      while (cursor = cursor.handler) if (cursor.fn === fn && cursor.context === context) consoleMethods.warn("basis.Token#attach: duplicate fn & context pair");
      this.handler = {
        fn: fn,
        context: context,
        destroy: onDestroy || null,
        handler: this.handler
      };
    },
    detach: function(fn, context) {
      var cursor = this;
      var prev;
      while (prev = cursor, cursor = cursor.handler) if (cursor.fn === fn && cursor.context === context) {
        cursor.fn = $undef;
        cursor.destroy = cursor.destroy && $undef;
        prev.handler = cursor.handler;
        return;
      }
      consoleMethods.warn("basis.Token#detach: fn & context pair not found, nothing was removed");
    },
    apply: function() {
      var value = this.get();
      var cursor = this;
      while (cursor = cursor.handler) cursor.fn.call(cursor.context, value);
    },
    deferred: function() {
      var token = this.deferredToken;
      if (!token) {
        token = this.deferredToken = new DeferredToken(this.get());
        this.attach(token.set, token);
      }
      return token;
    },
    as: function(fn) {
      var token = new Token;
      var setter = function(value) {
        this.set(fn.call(this, value));
      };
      setter.call(token, this.get());
      this.attach(setter, token, token.destroy);
      token.attach($undef, this, function() {
        this.detach(setter, token);
      });
      return token;
    },
    destroy: function() {
      if (this.deferredToken) {
        this.deferredToken.destroy();
        this.deferredToken = null;
      }
      this.attach = $undef;
      this.detach = $undef;
      var cursor = this;
      while (cursor = cursor.handler) if (cursor.destroy) cursor.destroy.call(cursor.context);
      this.handler = null;
      this.value = null;
    }
  });
  var awaitToApply = function() {
    var tokens = {};
    var timer;
    function applyTokens() {
      var list = tokens;
      tokens = {};
      timer = null;
      for (var key in list) list[key].apply();
    }
    return function(token) {
      if (token.basisObjectId in tokens) return;
      tokens[token.basisObjectId] = token;
      if (!timer) setImmediate(applyTokens);
    };
  }();
  var DeferredToken = Token.subclass({
    className: "basis.DeferredToken",
    set: function(value) {
      if (this.value !== value) {
        this.value = value;
        awaitToApply(this);
      }
    },
    deferred: function() {
      return this;
    }
  });
  var resources = {};
  var resourceContentCache = {};
  var resourcePatch = {};
  var virtualResourceSeed = 1;
  var resourceResolvingStack = [];
  var requires;
  (function() {
    var map = typeof __resources__ != "undefined" ? __resources__ : null;
    if (map) {
      for (var key in map) resourceContentCache[pathUtils.resolve(key)] = map[key];
    }
  })();
  function applyResourcePatches(resource) {
    var patches = resourcePatch[resource.url];
    if (patches) for (var i = 0; i < patches.length; i++) {
      consoleMethods.info("Apply patch for " + resource.url);
      patches[i](resource.get(), resource.url);
    }
  }
  var resolveResourceUri = function(url, baseURI, clr) {
    var rootNS = url.match(/^([a-zA-Z0-9\_\-]+):/);
    if (rootNS) {
      var namespaceRoot = rootNS[1];
      if (namespaceRoot in nsRootPath == false) nsRootPath[namespaceRoot] = pathUtils.baseURI + namespaceRoot + "/";
      url = nsRootPath[namespaceRoot] + pathUtils.normalize("./" + url.substr(rootNS[0].length));
    } else {
      url = pathUtils.resolve(baseURI, url);
    }
    if (!/^(\.\/|\.\.|\/)/.test(url)) consoleMethods.warn("Bad usage: " + (clr ? clr.replace("{url}", url) : url) + ".\nFilenames should starts with `./`, `..` or `/`. Otherwise it will treats as special reference in next minor release.");
    return url;
  };
  var getResourceContent = function(url, ignoreCache) {
    if (ignoreCache || !hasOwnProperty.call(resourceContentCache, url)) {
      var resourceContent = "";
      if (!NODE_ENV) {
        var req = new XMLHttpRequest;
        req.open("GET", url, false);
        req.setRequestHeader("If-Modified-Since", (new Date(0)).toGMTString());
        req.setRequestHeader("X-Basis-Resource", 1);
        req.send("");
        if (req.status >= 200 && req.status < 400) resourceContent = req.responseText; else {
          consoleMethods.error("basis.resource: Unable to load " + url + " (status code " + req.status + ")");
        }
      } else {
        try {
          resourceContent = process.basisjsReadFile ? process.basisjsReadFile(url) : require("fs").readFileSync(url, "utf-8");
        } catch (e) {
          consoleMethods.error("basis.resource: Unable to load " + url, e);
        }
      }
      resourceContentCache[url] = resourceContent;
    }
    return resourceContentCache[url];
  };
  var createResource = function(resourceUrl, content) {
    var contentType = pathUtils.extname(resourceUrl);
    var contentWrapper = getResource.extensions[contentType];
    var isVirtual = arguments.length > 1;
    var resolved = false;
    var wrapped = false;
    var wrappedContent;
    if (isVirtual) resourceUrl += "#virtual";
    var resource = function() {
      if (resolved) return content;
      var urlContent = isVirtual ? content : getResourceContent(resourceUrl);
      var idx = resourceResolvingStack.indexOf(resourceUrl);
      if (idx != -1) consoleMethods.warn("basis.resource recursion:", resourceResolvingStack.slice(idx).concat(resourceUrl).map(pathUtils.relative, pathUtils).join(" -> "));
      resourceResolvingStack.push(resourceUrl);
      if (contentWrapper) {
        if (!wrapped) {
          wrapped = true;
          content = contentWrapper(urlContent, resourceUrl);
          wrappedContent = urlContent;
        }
      } else {
        content = urlContent;
      }
      resolved = true;
      applyResourcePatches(resource);
      resource.apply();
      resourceResolvingStack.pop();
      return content;
    };
    extend(resource, extend(new Token, {
      url: resourceUrl,
      type: contentType,
      virtual: isVirtual,
      fetch: function() {
        return resource();
      },
      toString: function() {
        return "[basis.resource " + resourceUrl + "]";
      },
      isResolved: function() {
        return resolved;
      },
      hasChanges: function() {
        return contentWrapper ? resourceContentCache[resourceUrl] !== wrappedContent : false;
      },
      update: function(newContent) {
        if (!resolved || isVirtual || newContent != resourceContentCache[resourceUrl]) {
          if (!isVirtual) resourceContentCache[resourceUrl] = newContent;
          if (contentWrapper) {
            if (!wrapped && isVirtual) content = newContent;
            if (wrapped && !contentWrapper.permanent) {
              content = contentWrapper(newContent, resourceUrl, content);
              applyResourcePatches(resource);
              resource.apply();
            }
          } else {
            content = newContent;
            resolved = true;
            applyResourcePatches(resource);
            resource.apply();
          }
        }
      },
      reload: function() {
        if (isVirtual) return;
        var oldContent = resourceContentCache[resourceUrl];
        var newContent = getResourceContent(resourceUrl, true);
        if (newContent != oldContent) {
          resolved = false;
          resource.update(newContent);
        }
      },
      get: function(source) {
        if (isVirtual) if (source) return contentWrapper ? wrappedContent : content;
        return source ? getResourceContent(resourceUrl) : resource();
      },
      ready: function(fn, context) {
        if (resolved) {
          fn.call(context, resource());
          if (contentWrapper && contentWrapper.permanent) return;
        }
        resource.attach(fn, context);
        return resource;
      }
    }));
    resources[resourceUrl] = resource;
    return resource;
  };
  var getResource = function(url) {
    var resource = resources[url];
    if (!resource) {
      var resolvedUrl = resolveResourceUri(url, null, "basis.resource('{url}')");
      resource = resources[resolvedUrl] || createResource(resolvedUrl);
      resources[url] = resource;
    }
    return resource;
  };
  extend(getResource, {
    resolveURI: resolveResourceUri,
    isResource: function(value) {
      return value ? resources[value.url] === value : false;
    },
    isResolved: function(resourceUrl) {
      var resource = getResource.get(resourceUrl);
      return resource ? resource.isResolved() : false;
    },
    exists: function(resourceUrl) {
      return hasOwnProperty.call(resources, resolveResourceUri(resourceUrl, null, "basis.resource.exists('{url}')"));
    },
    get: function(resourceUrl) {
      resourceUrl = resolveResourceUri(resourceUrl, null, "basis.resource.get('{url}')");
      if (!getResource.exists(resourceUrl)) return null;
      return getResource(resourceUrl);
    },
    getFiles: function(cache) {
      return cache ? keys(resourceContentCache) : keys(resources).filter(function(filename) {
        return !resources[filename].virtual;
      });
    },
    virtual: function(type, content, ownerUrl) {
      return createResource((ownerUrl ? ownerUrl + ":" : pathUtils.normalize(pathUtils.baseURI == "/" ? "" : pathUtils.baseURI) + "/") + "virtual-resource" + virtualResourceSeed++ + "." + type, content);
    },
    extensions: {
      ".js": extend(function processJsResourceContent(content, filename) {
        var namespace = filename2namespace[filename];
        if (!namespace) {
          var implicitNamespace = true;
          var resolvedFilename = pathUtils.dirname(filename) + "/" + pathUtils.basename(filename, pathUtils.extname(filename));
          for (var ns in nsRootPath) {
            var path = nsRootPath[ns] + ns + "/";
            if (resolvedFilename.substr(0, path.length) == path) {
              implicitNamespace = false;
              resolvedFilename = resolvedFilename.substr(nsRootPath[ns].length);
              break;
            }
          }
          namespace = resolvedFilename.replace(/\./g, "_").replace(/^\//g, "").replace(/\//g, ".");
          if (implicitNamespace) namespace = "implicit." + namespace;
        }
        if (requires) arrayFunctions.add(requires, namespace);
        if (!namespaces[namespace]) {
          var ns = getNamespace(namespace);
          var savedRequires = requires;
          requires = [];
          ns.exports = runScriptInContext({
            path: ns.path,
            exports: ns.exports
          }, filename, content).exports;
          if (ns.exports && ns.exports.constructor === Object) {
            if (config.implicitExt) {
              if (config.implicitExt == "warn") {
                for (var key in ns.exports) if (key in ns == false && key != "path") {
                  ns[key] = ns.exports[key];
                  warnPropertyAccess(ns, key, ns.exports[key], "basis.js: Access to implicit namespace property `" + namespace + "." + key + "`");
                }
              } else complete(ns, ns.exports);
            }
          }
          ns.filename_ = filename;
          ns.source_ = content;
          ns.requires_ = requires;
          requires = savedRequires;
        }
        return namespaces[namespace].exports;
      }, {
        permanent: true
      }),
      ".css": function processCssResourceContent(content, url, cssResource) {
        if (!cssResource) cssResource = new CssResource(url);
        cssResource.updateCssText(content);
        return cssResource;
      },
      ".json": function processJsonResourceContent(content, url) {
        if (typeof content == "object") return content;
        var result;
        try {
          content = String(content);
          result = basis.json.parse(content);
        } catch (e) {
          consoleMethods.warn("basis.resource: Can't parse JSON from " + url, {
            url: url,
            content: content
          });
        }
        return result || null;
      }
    }
  });
  function compileFunction(sourceURL, args, body) {
    try {
      return new Function(args, '"use strict";\n' + (NODE_ENV ? "var __nodejsRequire = require;\n" : "") + body + "\n\n//# sourceURL=" + pathUtils.origin + sourceURL);
    } catch (e) {
      if (document && "line" in e == false && "addEventListener" in global) {
        global.addEventListener("error", function onerror(event) {
          if (event.filename == pathUtils.origin + sourceURL) {
            global.removeEventListener("error", onerror);
            consoleMethods.error("Compilation error at " + event.filename + ":" + event.lineno + ": " + e);
            event.preventDefault();
          }
        });
        var script = document.createElement("script");
        script.src = sourceURL;
        script.async = false;
        document.head.appendChild(script);
        document.head.removeChild(script);
      }
      consoleMethods.error("Compilation error at " + sourceURL + ("line" in e ? ":" + (e.line - 1) : "") + ": " + e);
    }
  }
  var runScriptInContext = function(context, sourceURL, sourceCode) {
    var baseURL = pathUtils.dirname(sourceURL) + "/";
    var compiledSourceCode = sourceCode;
    if (!context.exports) context.exports = {};
    if (typeof compiledSourceCode != "function") compiledSourceCode = compileFunction(sourceURL, [ "exports", "module", "basis", "global", "__filename", "__dirname", "resource", "require", "asset" ], sourceCode);
    if (typeof compiledSourceCode == "function") {
      compiledSourceCode.displayName = "[module] " + (filename2namespace[sourceURL] || sourceURL);
      compiledSourceCode.call(context.exports, context.exports, context, basis, global, sourceURL, baseURL, function(path) {
        return getResource(resolveResourceUri(path, baseURL, "resource('{url}')"));
      }, function(path, base) {
        return requireNamespace(path, base || baseURL);
      }, function(path) {
        return resolveResourceUri(path, baseURL, "asset('{url}')");
      });
    }
    return context;
  };
  var namespaces = {};
  var namespace2filename = {};
  var filename2namespace = {};
  var nsRootPath = {};
  iterate(config.modules, function(name, module) {
    nsRootPath[name] = module.path + "/";
    namespace2filename[name] = module.filename;
    filename2namespace[module.filename] = name;
  });
  (function(map) {
    var map = typeof __namespace_map__ != "undefined" ? __namespace_map__ : null;
    if (map) {
      for (var key in map) {
        var filename = pathUtils.resolve(key);
        var namespace = map[key];
        filename2namespace[filename] = namespace;
        namespace2filename[namespace] = filename;
      }
    }
  })();
  var Namespace = Class(null, {
    className: "basis.Namespace",
    init: function(name) {
      this.name = name;
      this.exports = {
        path: this.name
      };
    },
    toString: function() {
      return "[basis.namespace " + this.path + "]";
    },
    extend: function(names) {
      extend(this.exports, names);
      return complete(this, names);
    }
  });
  function resolveNSFilename(namespace) {
    if (namespace in namespace2filename == false) {
      var parts = namespace.split(".");
      var namespaceRoot = parts.shift();
      var filename = resolveResourceUri(namespaceRoot + ":" + parts.join("/") + ".js").replace(/\/\.js$/, ".js");
      namespace2filename[namespace] = filename;
      filename2namespace[filename] = namespace;
    }
    return namespace2filename[namespace];
  }
  function getRootNamespace(name) {
    var namespace = namespaces[name];
    if (!namespace) {
      namespace = namespaces[name] = new Namespace(name);
      namespace.namespaces_ = {};
      namespace.namespaces_[name] = namespace;
      if (!config.noConflict) global[name] = namespace;
    }
    return namespace;
  }
  function getNamespace(path) {
    if (hasOwnProperty.call(namespaces, path)) return namespaces[path];
    path = path.split(".");
    var rootNs = getRootNamespace(path[0]);
    var cursor = rootNs;
    for (var i = 1, name; name = path[i]; i++) {
      var nspath = path.slice(0, i + 1).join(".");
      if (!hasOwnProperty.call(rootNs.namespaces_, nspath)) {
        var namespace = new Namespace(nspath);
        if (config.implicitExt) {
          cursor[name] = namespace;
          if (config.implicitExt == "warn") {
            cursor[name] = namespace;
            warnPropertyAccess(cursor, name, namespace, "basis.js: Access to implicit namespace `" + nspath + "`");
          }
        }
        rootNs.namespaces_[nspath] = namespace;
      }
      cursor = rootNs.namespaces_[nspath];
    }
    namespaces[path.join(".")] = cursor;
    return cursor;
  }
  var requireNamespace = function(filename, dirname) {
    if (!/[^a-z0-9_\.]/i.test(filename) && pathUtils.extname(filename) != ".js") {
      filename = resolveNSFilename(filename);
    } else {
      filename = resolveResourceUri(filename, dirname, "require('{url}')");
    }
    return getResource(filename).fetch();
  };
  requireNamespace.displayName = "basis.require";
  function patch(filename, patchFn) {
    if (!/[^a-z0-9_\.]/i.test(filename) && pathUtils.extname(filename) != ".js") {
      filename = resolveNSFilename(filename);
    } else {
      filename = resolveResourceUri(filename, null, "basis.patch('{url}')");
    }
    if (!resourcePatch[filename]) resourcePatch[filename] = [ patchFn ]; else resourcePatch[filename].push(patchFn);
    var resource = getResource.get(filename);
    if (resource && resource.isResolved()) {
      consoleMethods.info("Apply patch for " + resource.url);
      patchFn(resource.get(), resource.url);
    }
  }
  complete(Function.prototype, {
    bind: function(thisObject) {
      var fn = this;
      var params = arrayFrom(arguments, 1);
      return params.length ? function() {
        return fn.apply(thisObject, params.concat.apply(params, arguments));
      } : function() {
        return fn.apply(thisObject, arguments);
      };
    }
  });
  complete(Array, {
    isArray: function(value) {
      return toString.call(value) === "[object Array]";
    }
  });
  function arrayFrom(object, offset) {
    if (object != null) {
      var len = object.length;
      if (typeof len == "undefined" || toString.call(object) == "[object Function]") return [ object ];
      if (!offset) offset = 0;
      if (len - offset > 0) {
        for (var result = [], k = 0, i = offset; i < len; ) result[k++] = object[i++];
        return result;
      }
    }
    return [];
  }
  function createArray(length, fillValue, thisObject) {
    var result = [];
    var isFunc = typeof fillValue == "function";
    for (var i = 0; i < length; i++) result[i] = isFunc ? fillValue.call(thisObject, i, result) : fillValue;
    return result;
  }
  complete(Array.prototype, {
    indexOf: function(searchElement, offset) {
      offset = parseInt(offset, 10) || 0;
      if (offset < 0) return -1;
      for (; offset < this.length; offset++) if (this[offset] === searchElement) return offset;
      return -1;
    },
    lastIndexOf: function(searchElement, offset) {
      var len = this.length;
      offset = parseInt(offset, 10);
      if (isNaN(offset) || offset >= len) offset = len - 1; else offset = (offset + len) % len;
      for (; offset >= 0; offset--) if (this[offset] === searchElement) return offset;
      return -1;
    },
    forEach: function(callback, thisObject) {
      for (var i = 0, len = this.length; i < len; i++) if (i in this) callback.call(thisObject, this[i], i, this);
    },
    every: function(callback, thisObject) {
      for (var i = 0, len = this.length; i < len; i++) if (i in this && !callback.call(thisObject, this[i], i, this)) return false;
      return true;
    },
    some: function(callback, thisObject) {
      for (var i = 0, len = this.length; i < len; i++) if (i in this && callback.call(thisObject, this[i], i, this)) return true;
      return false;
    },
    filter: function(callback, thisObject) {
      var result = [];
      for (var i = 0, len = this.length; i < len; i++) if (i in this && callback.call(thisObject, this[i], i, this)) result.push(this[i]);
      return result;
    },
    map: function(callback, thisObject) {
      var result = [];
      for (var i = 0, len = this.length; i < len; i++) if (i in this) result[i] = callback.call(thisObject, this[i], i, this);
      return result;
    },
    reduce: function(callback, initialValue) {
      var len = this.length;
      var argsLen = arguments.length;
      if (len == 0 && argsLen == 1) throw new TypeError;
      var result;
      var inited = 0;
      if (argsLen > 1) {
        result = initialValue;
        inited = 1;
      }
      for (var i = 0; i < len; i++) if (i in this) if (inited++) result = callback.call(null, result, this[i], i, this); else result = this[i];
      return result;
    }
  });
  var arrayFunctions = {
    from: arrayFrom,
    create: createArray,
    flatten: function(this_) {
      return this_.concat.apply([], this_);
    },
    repeat: function(this_, count) {
      return arrayFunctions.flatten(createArray(parseInt(count, 10) || 0, this_));
    },
    search: function(this_, value, getter_, offset) {
      this_.lastSearchIndex = -1;
      getter_ = getter(getter_ || $self);
      for (var index = parseInt(offset, 10) || 0, len = this_.length; index < len; index++) if (getter_(this_[index]) === value) return this_[this_.lastSearchIndex = index];
    },
    lastSearch: function(this_, value, getter_, offset) {
      this_.lastSearchIndex = -1;
      getter_ = getter(getter_ || $self);
      var len = this_.length;
      var index = isNaN(offset) || offset == null ? len : parseInt(offset, 10);
      for (var i = index > len ? len : index; i-- > 0; ) if (getter_(this_[i]) === value) return this_[this_.lastSearchIndex = i];
    },
    add: function(this_, value) {
      return this_.indexOf(value) == -1 && !!this_.push(value);
    },
    remove: function(this_, value) {
      var index = this_.indexOf(value);
      return index != -1 && !!this_.splice(index, 1);
    },
    has: function(this_, value) {
      return this_.indexOf(value) != -1;
    },
    sortAsObject: function() {
      consoleMethods.warn("basis.array.sortAsObject is deprecated, use basis.array.sort instead");
      return arrayFunctions.sort.apply(this, arguments);
    },
    sort: function(this_, getter_, comparator, desc) {
      getter_ = getter(getter_);
      desc = desc ? -1 : 1;
      return this_.map(function(item, index) {
        return {
          i: index,
          v: getter_(item)
        };
      }).sort(comparator || function(a, b) {
        return desc * (a.v > b.v || -(a.v < b.v) || (a.i > b.i ? 1 : -1));
      }).map(function(item) {
        return this[item.i];
      }, this_);
    }
  };
  if (![ 1, 2 ].splice(1).length) {
    var nativeArraySplice = Array.prototype.splice;
    Array.prototype.splice = function() {
      var params = arrayFrom(arguments);
      if (params.length < 2) params[1] = this.length;
      return nativeArraySplice.apply(this, params);
    };
  }
  var ESCAPE_FOR_REGEXP = /([\/\\\(\)\[\]\?\{\}\|\*\+\-\.\^\$])/g;
  var FORMAT_REGEXP = /\{([a-z\d_]+)(?::([\.0])(\d+)|:(\?))?\}/gi;
  var stringFormatCache = {};
  complete(String, {
    toLowerCase: function(value) {
      return String(value).toLowerCase();
    },
    toUpperCase: function(value) {
      return String(value).toUpperCase();
    },
    trim: function(value) {
      return String(value).trim();
    },
    trimLeft: function(value) {
      return String(value).trimLeft();
    },
    trimRight: function(value) {
      return String(value).trimRight();
    }
  });
  complete(String.prototype, {
    trimLeft: function() {
      return this.replace(/^\s+/, "");
    },
    trimRight: function() {
      return this.replace(/\s+$/, "");
    },
    trim: function() {
      return this.trimLeft().trimRight();
    }
  });
  var stringFunctions = {
    toObject: function(this_, rethrow) {
      try {
        return (new Function("return 0," + this_))();
      } catch (e) {
        if (rethrow) throw e;
      }
    },
    repeat: function(this_, count) {
      return (new Array(parseInt(count, 10) + 1 || 0)).join(this_);
    },
    qw: function(this_) {
      var trimmed = this_.trim();
      return trimmed ? trimmed.split(/\s+/) : [];
    },
    forRegExp: function(this_) {
      return this_.replace(ESCAPE_FOR_REGEXP, "\\$1");
    },
    format: function(this_, first) {
      var data = arrayFrom(arguments, 1);
      if (typeof first == "object") extend(data, first);
      return this_.replace(FORMAT_REGEXP, function(m, key, numFormat, num, noNull) {
        var value = key in data ? data[key] : noNull ? "" : m;
        if (numFormat && !isNaN(value)) {
          value = Number(value);
          return numFormat == "." ? value.toFixed(num) : numberFunctions.lead(value, num);
        }
        return value;
      });
    },
    formatter: function(formatString) {
      formatString = String(formatString);
      if (hasOwnProperty.call(stringFormatCache, formatString)) return stringFormatCache[formatString];
      var formatter = function(value) {
        return stringFunctions.format(formatString, value);
      };
      var escapsedFormatString = '"' + formatString.replace(/"/g, '\\"') + '"';
      formatter = (new Function("stringFunctions", "return " + formatter.toString().replace("formatString", escapsedFormatString)))(stringFunctions);
      formatter.toString = function() {
        return "basis.string.formatter(" + escapsedFormatString + ")";
      };
      stringFormatCache[formatString] = formatter;
      return formatter;
    },
    capitalize: function(this_) {
      return this_.charAt(0).toUpperCase() + this_.substr(1).toLowerCase();
    },
    camelize: function(this_) {
      return this_.replace(/-(.)/g, function(m, chr) {
        return chr.toUpperCase();
      });
    },
    dasherize: function(this_) {
      return this_.replace(/[A-Z]/g, function(m) {
        return "-" + m.toLowerCase();
      });
    },
    isEmpty: function(value) {
      return value == null || String(value) == "";
    },
    isNotEmpty: function(value) {
      return value != null && String(value) != "";
    }
  };
  if ("|||".split(/\|/).length + "|||".split(/(\|)/).length != 11) {
    var nativeStringSplit = String.prototype.split;
    String.prototype.split = function(pattern, count) {
      if (!pattern || pattern instanceof RegExp == false || pattern.source == "") return nativeStringSplit.apply(this, arguments);
      var result = [];
      var pos = 0;
      var match;
      if (!pattern.global) pattern = new RegExp(pattern.source, /\/([mi]*)$/.exec(pattern)[1] + "g");
      while (match = pattern.exec(this)) {
        match[0] = this.substring(pos, match.index);
        result.push.apply(result, match);
        pos = pattern.lastIndex;
      }
      result.push(this.substr(pos));
      return result;
    };
  }
  if ("12".substr(-1) != "2") {
    var nativeStringSubstr = String.prototype.substr;
    String.prototype.substr = function(start, end) {
      return nativeStringSubstr.call(this, start < 0 ? Math.max(0, this.length + start) : start, end);
    };
  }
  var numberFunctions = {
    fit: function(this_, min, max) {
      if (!isNaN(min) && this_ < min) return Number(min);
      if (!isNaN(max) && this_ > max) return Number(max);
      return this_;
    },
    lead: function(this_, len, leadChar) {
      return String(this_).replace(/\d+/, function(number) {
        return (len -= number.length - 1) > 1 ? (new Array(len)).join(leadChar || 0) + number : number;
      });
    },
    group: function(this_, len, splitter) {
      return String(this_).replace(/\d+/, function(number) {
        return number.replace(/\d/g, function(m, pos) {
          return !pos + (number.length - pos) % (len || 3) ? m : (splitter || " ") + m;
        });
      });
    },
    format: function(this_, prec, gs, prefix, postfix, comma) {
      var res = this_.toFixed(prec);
      if (gs || comma) res = res.replace(/(\d+)(\.?)/, function(m, number, c) {
        return (gs ? basis.number.group(Number(number), 3, gs) : number) + (c ? comma || c : "");
      });
      if (prefix) res = res.replace(/^-?/, "$&" + (prefix || ""));
      return res + (postfix || "");
    }
  };
  complete(Date, {
    now: function() {
      return Number(new Date);
    }
  });
  var ready = function() {
    var eventFired = !document || document.readyState == "complete";
    var readyHandlers = [];
    var timer;
    function processReadyHandler() {
      var handler;
      if (timer) timer = clearImmediate(timer);
      if (readyHandlers.length > 1) timer = setImmediate(processReadyHandler);
      while (handler = readyHandlers.shift()) handler[0].call(handler[1]);
      timer = clearImmediate(timer);
      asap.process();
    }
    function fireHandlers(e) {
      if (!(eventFired++)) processReadyHandler();
    }
    function doScrollCheck() {
      try {
        document.documentElement.doScroll("left");
        fireHandlers();
      } catch (e) {
        setTimeout(doScrollCheck, 1);
      }
    }
    if (!eventFired) {
      if (document.addEventListener) {
        document.addEventListener("DOMContentLoaded", fireHandlers, false);
        global.addEventListener("load", fireHandlers, false);
      } else {
        document.attachEvent("onreadystatechange", fireHandlers);
        global.attachEvent("onload", fireHandlers);
        try {
          if (!global.frameElement && document.documentElement.doScroll) doScrollCheck();
        } catch (e) {}
      }
    }
    return function(callback, context) {
      if (!readyHandlers.length && eventFired && !timer) timer = setImmediate(processReadyHandler);
      readyHandlers.push([ callback, context ]);
    };
  }();
  var teardown = function(callback, context) {
    if ("addEventListener" in global) return function(callback, context) {
      global.addEventListener("unload", function(event) {
        callback.call(context || null, event || global.event);
      }, false);
    };
    if ("attachEvent" in global) return function(callback, context) {
      global.attachEvent("onunload", function(event) {
        callback.call(context || null, event || global.event);
      });
    };
    return $undef;
  }();
  var documentInterface = function() {
    var timer;
    var reference = {};
    var callbacks = {
      head: [],
      body: []
    };
    function getParent(name) {
      if (document && !reference[name]) {
        reference[name] = document[name] || document.getElementsByTagName(name)[0];
        if (reference[name]) {
          var items = callbacks[name];
          delete callbacks[name];
          for (var i = 0, cb; cb = items[i]; i++) cb[0].call(cb[1], reference[name]);
        }
      }
      return reference[name];
    }
    function add() {
      var name = this[0];
      var node = this[1];
      var ref = this[2];
      remove(node);
      var parent = getParent(name);
      if (parent) {
        if (ref === true) ref = parent.firstChild;
        if (!ref || ref.parentNode !== parent) ref = null;
        parent.insertBefore(node, ref);
      } else callbacks[name].push([ add, [ name, node, ref ] ]);
    }
    function docReady(name, fn, context) {
      if (callbacks[name]) callbacks[name].push([ fn, context ]); else fn.call(context, reference[name]);
    }
    function remove(node) {
      for (var key in callbacks) {
        var entry = arrayFunctions.search(callbacks[key], node, function(item) {
          return item[1] && item[1][1];
        });
        if (entry) arrayFunctions.remove(callbacks[key], entry);
      }
      if (node && node.parentNode && node.parentNode.nodeType == 1) node.parentNode.removeChild(node);
    }
    function checkParents() {
      if (timer && getParent("head") && getParent("body")) timer = clearInterval(timer);
    }
    if (document && (!getParent("head") || !getParent("body"))) {
      timer = setInterval(checkParents, 5);
      ready(checkParents);
    }
    return {
      head: {
        ready: function(fn, context) {
          docReady("head", fn, context);
        },
        add: function(node, ref) {
          add.call([ "head", node, ref ]);
        }
      },
      body: {
        ready: function(fn, context) {
          docReady("body", fn, context);
        },
        add: function(node, ref) {
          add.call([ "body", node, ref ]);
        }
      },
      remove: remove
    };
  }();
  var cleaner = function() {
    var objects = [];
    function destroy(log) {
      var logDestroy = log && typeof log == "boolean";
      result.globalDestroy = true;
      result.add = $undef;
      result.remove = $undef;
      var object;
      while (object = objects.pop()) {
        if (typeof object.destroy == "function") {
          try {
            if (logDestroy) consoleMethods.log("destroy", "[" + String(object.className) + "]", object);
            object.destroy();
          } catch (e) {
            consoleMethods.warn(String(object), e);
          }
        } else {
          for (var prop in object) object[prop] = null;
        }
      }
      objects = [];
    }
    if (teardown === $undef) return {
      add: $undef,
      remove: $undef
    };
    teardown(destroy);
    var result = {
      add: function(object) {
        if (object != null) objects.push(object);
      },
      remove: function(object) {
        arrayFunctions.remove(objects, object);
      }
    };
    result.destroy_ = destroy;
    result.objects_ = objects;
    return result;
  }();
  var CssResource = function() {
    var STYLE_APPEND_BUGGY = function() {
      try {
        return !document.createElement("style").appendChild(document.createTextNode(""));
      } catch (e) {
        return true;
      }
    }();
    var baseEl = document && document.createElement("base");
    function setBase(baseURI) {
      baseEl.setAttribute("href", baseURI);
      documentInterface.head.add(baseEl, true);
    }
    function restoreBase() {
      baseEl.setAttribute("href", location.href);
      documentInterface.remove(baseEl);
    }
    function injectStyleToHead() {
      setBase(this.baseURI);
      if (!this.element) {
        this.element = document.createElement("style");
        if (!STYLE_APPEND_BUGGY) this.element.appendChild(document.createTextNode(""));
        this.element.setAttribute("src", this.url);
      }
      documentInterface.head.add(this.element);
      this.syncCssText();
      restoreBase();
    }
    return Class(null, {
      className: "basis.CssResource",
      inUse: 0,
      url: "",
      baseURI: "",
      cssText: undefined,
      element: null,
      init: function(url) {
        this.url = url;
        this.baseURI = pathUtils.dirname(url) + "/";
      },
      updateCssText: function(cssText) {
        if (this.cssText != cssText) {
          this.cssText = cssText;
          if (this.inUse && this.element) {
            setBase(this.baseURI);
            this.syncCssText();
            restoreBase();
          }
        }
      },
      syncCssText: STYLE_APPEND_BUGGY ? function() {
        this.element.styleSheet.cssText = this.cssText;
      } : function() {
        var cssText = this.cssText;
        cssText += "\n/*# sourceURL=" + pathUtils.origin + this.url + " */";
        this.element.firstChild.nodeValue = cssText;
      },
      startUse: function() {
        if (!this.inUse) documentInterface.head.ready(injectStyleToHead, this);
        this.inUse += 1;
      },
      stopUse: function() {
        if (this.inUse) {
          this.inUse -= 1;
          if (!this.inUse && this.element) documentInterface.remove(this.element);
        }
      },
      destroy: function() {
        if (this.element) documentInterface.remove(this.element);
        this.element = null;
        this.cssText = null;
      }
    });
  }();
  var basis = getNamespace("basis").extend({
    filename_: basisFilename,
    processConfig: processConfig,
    version: VERSION,
    NODE_ENV: NODE_ENV,
    config: config,
    createSandbox: function(config) {
      return createBasisInstance(global, basisFilename, complete({
        noConflict: true
      }, config));
    },
    dev: (new Namespace("basis.dev")).extend(consoleMethods).extend({
      warnPropertyAccess: warnPropertyAccess
    }),
    resolveNSFilename: resolveNSFilename,
    patch: patch,
    namespace: getNamespace,
    require: requireNamespace,
    resource: getResource,
    asset: function(path) {
      return resolveResourceUri(path, null, "basis.asset('{url}')");
    },
    setImmediate: setImmediate,
    clearImmediate: clearImmediate,
    nextTick: function() {
      setImmediate.apply(null, arguments);
    },
    asap: asap,
    Class: Class,
    Token: Token,
    DeferredToken: DeferredToken,
    ready: ready,
    teardown: teardown,
    cleaner: cleaner,
    genUID: genUID,
    getter: getter,
    console: consoleMethods,
    path: pathUtils,
    doc: documentInterface,
    object: {
      extend: extend,
      complete: complete,
      keys: keys,
      values: values,
      slice: slice,
      splice: splice,
      merge: merge,
      iterate: iterate
    },
    fn: {
      $undefined: $undefined,
      $defined: $defined,
      $isNull: $isNull,
      $isNotNull: $isNotNull,
      $isSame: $isSame,
      $isNotSame: $isNotSame,
      $self: $self,
      $const: $const,
      $false: $false,
      $true: $true,
      $null: $null,
      $undef: $undef,
      getter: getter,
      nullGetter: nullGetter,
      wrapper: wrapper,
      lazyInit: lazyInit,
      lazyInitAndRun: lazyInitAndRun,
      runOnce: runOnce,
      publicCallback: publicCallback
    },
    array: extend(arrayFrom, arrayFunctions),
    string: stringFunctions,
    number: numberFunctions,
    bool: {
      invert: function(value) {
        return !value;
      }
    },
    json: {
      parse: typeof JSON != "undefined" ? JSON.parse : function(str) {
        return stringFunctions.toObject(str, true);
      }
    }
  });
  if (config.autoload && !NODE_ENV) config.autoload.forEach(function(name) {
    requireNamespace(name);
  });
  if (NODE_ENV && exports) exports.basis = basis;
  return basis;
})(this);
}).call(this);