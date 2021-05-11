"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var commentController = _interopRequireWildcard(require("../controllers/commentController.js"));

var _isAuth = require("../middleware/isAuth.js");

var _authRole = _interopRequireDefault(require("../middleware/authRole.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var router = _express["default"].Router();
/* GET */


router.get('/', function (req, res, next) {
  return res.json({
    route: 'question'
  });
});
router.get('/all', commentController.getAllComments);
router.get('/:commentId', commentController.getComment);
router.get('/question/:questionId', commentController.getQuestionComments);
/* POST */

router.post('/create', commentController.create);
router.post('/delete-soft', commentController.deleteSoft);
router.post('/answer-promote', _isAuth.isAuth, (0, _authRole["default"])('TEACHER'), commentController.answerPromote);
router.post('/answer-demote', _isAuth.isAuth, (0, _authRole["default"])('TEACHER'), commentController.answerDemote);
/* PATCH */
// change to patch

router.post('/update', commentController.update);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=comment.js.map