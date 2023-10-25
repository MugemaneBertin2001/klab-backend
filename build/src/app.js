"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _morgan = _interopRequireDefault(require("morgan"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _userRoutes = _interopRequireDefault(require("./routes/userRoutes"));
// routes

// app initialisation

var app = (0, _express["default"])();
_dotenv["default"].config();

// dependencies configuartion
app.use((0, _cors["default"])());
app.use((0, _morgan["default"])('dev'));
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));

// getRoutes
app.use("/klab/users", _userRoutes["default"]);
app.get('/', function (req, res) {
  res.status(200).json({
    status: "200",
    message: "Success",
    author: 'Trainer Muhoza'
  });
});
var _default = exports["default"] = app;
//# sourceMappingURL=app.js.map