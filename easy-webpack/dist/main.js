(function(graph){
      function require(moduleId){ 
        function localRequire(relativePath){
          return require(graph[moduleId].dependecies[relativePath])
        }
        var exports = {};
        (function(require,exports,code){
          eval(code)
        })(localRequire,exports,graph[moduleId].code);
        return exports;
      }
      require('./src/index.js')
    })({"./src/index.js":{"dependecies":{"./hello.js":"./src\\hello.js"},"code":"\"use strict\";\n\nvar _hello = require(\"./hello.js\");\ndocument.write((0, _hello.say)(\"webpack\"));"},"./src\\hello.js":{"dependecies":{"./add.js":"./src\\add.js"},"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.say = say;\nvar _add = _interopRequireDefault(require(\"./add.js\"));\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\nfunction say(name) {\n  return \"hello \".concat(name, \", 1 + 1 \\u7B49\\u4E8E\").concat((0, _add[\"default\"])(1, 1));\n}"},"./src\\add.js":{"dependecies":{"./sub.js":"./src\\sub.js"},"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = add;\nvar _sub = _interopRequireDefault(require(\"./sub.js\"));\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\nfunction add(a, b) {\n  debugger;\n  return (0, _sub[\"default\"])(a, b);\n}"},"./src\\sub.js":{"dependecies":{},"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = sub;\nfunction sub(a, b) {\n  return a - b;\n}"}})