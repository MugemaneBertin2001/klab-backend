"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
// Define the Student schema
var studentSchema = new _mongoose["default"].Schema({
  firstName: {
    type: String,
    require: true
  },
  lastName: {
    type: String,
    require: true
  },
  dateOfBirth: {
    type: Date,
    require: true
  },
  email: {
    type: String,
    require: true
  }
});

// Create the Student model
var Student = _mongoose["default"].model('Student', studentSchema);
var _default = exports["default"] = Student;
//# sourceMappingURL=UserModel.js.map