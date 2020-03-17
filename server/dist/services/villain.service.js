"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const data = __importStar(require("./data"));
function getVillains(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const villains = data.getVillains();
            res.status(200).json(villains);
        }
        catch (error) {
            res.status(500).send(error);
        }
    });
}
function postVillain(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const villain = {
            name: req.body.name,
            description: req.body.description,
            id: undefined
        };
        try {
            const newVillain = data.addVillain(villain);
            res.status(201).json(newVillain);
        }
        catch (error) {
            res.status(500).send(error);
        }
    });
}
function putVillain(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const villain = {
            id: req.params.id,
            name: req.body.name,
            description: req.body.description
        };
        try {
            const udpatedVillain = data.updateVillain(villain);
            res.status(200).json(udpatedVillain);
        }
        catch (error) {
            res.status(500).send(error);
        }
    });
}
function deleteVillain(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            data.deleteVillain(id);
            res.status(200).json({});
        }
        catch (error) {
            res.status(500).send(error);
        }
    });
}
exports.default = { getVillains, postVillain, putVillain, deleteVillain };
//# sourceMappingURL=villain.service.js.map