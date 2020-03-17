"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.router = router;
const vacation_routes_1 = require("./vacation.routes");
router.use('/', vacation_routes_1.vacationRoutes);
//# sourceMappingURL=index.js.map