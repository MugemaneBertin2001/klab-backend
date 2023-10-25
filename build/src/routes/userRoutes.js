"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _UserController = require("../controllers/UserController");
var userRoutes = _express["default"].Router();
userRoutes.post("/create", _UserController.createUser);
userRoutes.get("/read", _UserController.viewAllUsers);
userRoutes.get("/:id", _UserController.getSingle);
var _default = exports["default"] = userRoutes;
//# sourceMappingURL=userRoutes.js.map