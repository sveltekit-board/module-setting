"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Setting_data;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Setting = void 0;
const fs = __importStar(require("fs"));
class Setting {
    constructor() {
        _Setting_data.set(this, {});
    }
    add(name, data) {
        __classPrivateFieldGet(this, _Setting_data, "f")[name] = data;
        return true;
    }
    get(name, detail) {
        var _a;
        return (_a = __classPrivateFieldGet(this, _Setting_data, "f")[name]) === null || _a === void 0 ? void 0 : _a[detail];
        ;
    }
    getAll(name) {
        return __classPrivateFieldGet(this, _Setting_data, "f")[name];
    }
    set(name, detail, value) {
        if (__classPrivateFieldGet(this, _Setting_data, "f")[name]) {
            __classPrivateFieldGet(this, _Setting_data, "f")[name][detail] = value;
            fs.writeFileSync(`setting/${name}.json`, JSON.stringify(__classPrivateFieldGet(this, _Setting_data, "f")[name]), 'utf-8');
            return true;
        }
        else {
            return false;
        }
    }
}
exports.Setting = Setting;
_Setting_data = new WeakMap();
