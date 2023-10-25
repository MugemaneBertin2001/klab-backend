"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _app = _interopRequireDefault(require("./app"));
var _mongoose = _interopRequireDefault(require("mongoose"));
_mongoose["default"].set("strictQuery", false);
_mongoose["default"].connect(process.env.MONGODB_URL).then(function () {
  console.log("Connected Successfully!");
})["catch"](function (err) {
  console.log(err);
});
var PORT = process.env.PORT || 1800;
_app["default"].listen(PORT, function () {
  console.log("Server is running on :: http://localhost:".concat(PORT));
});
//# sourceMappingURL=index.js.map