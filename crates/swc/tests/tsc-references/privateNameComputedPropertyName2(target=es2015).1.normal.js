//// [privateNameComputedPropertyName2.ts]
import _class_private_field_get from "@swc/helpers/src/_class_private_field_get.mjs";
import _class_private_field_init from "@swc/helpers/src/_class_private_field_init.mjs";
let getX;
var _x = /*#__PURE__*/ new WeakMap();
let _tmp = (getX = (a)=>_class_private_field_get(a, _x), "_");
class A {
    [_tmp]() {}
    constructor(){
        _class_private_field_init(this, _x, {
            writable: true,
            value: 100
        });
    }
}
console.log(getX(new A));
