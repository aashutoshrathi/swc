//// [privateNameES5Ban.ts]
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
import _class_private_field_init from "@swc/helpers/src/_class_private_field_init.mjs";
import _class_private_method_init from "@swc/helpers/src/_class_private_method_init.mjs";
var _field = /*#__PURE__*/ new WeakMap(), _method = /*#__PURE__*/ new WeakSet(), _acc = /*#__PURE__*/ new WeakMap();
var A = function A() {
    "use strict";
    _class_call_check(this, A);
    _class_private_method_init(this, _method);
    _class_private_field_init(this, _acc, {
        get: get_acc,
        set: set_acc
    });
    _class_private_field_init(this, _field, {
        writable: true,
        value: 123
    });
};
var _sAcc = {
    get: get_sAcc,
    set: set_sAcc
};
var _sField = {
    writable: true,
    value: "hello world"
};
function method() {}
function sMethod() {}
function get_acc() {
    return "";
}
function set_acc(x) {}
function get_sAcc() {
    return 0;
}
function set_sAcc(x) {}
