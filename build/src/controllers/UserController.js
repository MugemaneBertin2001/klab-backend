"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.viewAllUsers = exports.getSingle = exports.createUser = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _UserModel = _interopRequireDefault(require("../models/UserModel"));
// createUser
var createUser = exports.createUser = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, firstName, lastName, dateOfBirth, email, makeUser;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, firstName = _req$body.firstName, lastName = _req$body.lastName, dateOfBirth = _req$body.dateOfBirth, email = _req$body.email;
          _context.next = 4;
          return _UserModel["default"].create({
            firstName: firstName,
            lastName: lastName,
            dateOfBirth: dateOfBirth,
            email: email
          });
        case 4:
          makeUser = _context.sent;
          return _context.abrupt("return", res.status(201).json({
            status: "201",
            message: "Success To create User",
            data: makeUser
          }));
        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", res.status(500).json({
            status: "500",
            message: "Failed To create User",
            error: _context.t0.message
          }));
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 8]]);
  }));
  return function createUser(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var viewAllUsers = exports.viewAllUsers = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var users;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return _UserModel["default"].find();
        case 3:
          users = _context2.sent;
          return _context2.abrupt("return", res.status(200).json({
            status: "200",
            message: "List found",
            data: users
          }));
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", res.status(500).json({
            status: "500",
            message: "Failed To retrieve Users",
            error: _context2.t0.message
          }));
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return function viewAllUsers(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var getSingle = exports.getSingle = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, users;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          id = req.params.id;
          _context3.next = 4;
          return _UserModel["default"].findById(id);
        case 4:
          users = _context3.sent;
          if (users) {
            _context3.next = 7;
            break;
          }
          return _context3.abrupt("return", res.status(404).json({
            status: "404",
            message: "ID Not Found"
            // data:users
          }));
        case 7:
          return _context3.abrupt("return", res.status(200).json({
            status: "200",
            message: "Single User found",
            data: users
          }));
        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          return _context3.abrupt("return", res.status(500).json({
            status: "500",
            message: "Failed To retrieve Users",
            error: _context3.t0.message
          }));
        case 13:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 10]]);
  }));
  return function getSingle(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
//# sourceMappingURL=UserController.js.map