"use strict";

Object.defineProperty(exports, "__esModule", {
        value: true
});

exports.default = function (context) {
        var devicePixelRatio = window.devicePixelRatio || 1;
        var backingStoreRatio = context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || context.backingStorePixelRatio || 1;

        return devicePixelRatio / backingStoreRatio;
};