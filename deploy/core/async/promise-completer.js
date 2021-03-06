"use strict";
var PromiseCompleter = (function () {
    function PromiseCompleter() {
        var _this = this;
        this.promise = new Promise(function (res, rej) {
            _this.resolve = res;
            _this.reject = rej;
        });
    }
    return PromiseCompleter;
}());
exports.PromiseCompleter = PromiseCompleter;
//# sourceMappingURL=C:/code/Awesomeweb/material2/tmp/broccoli_type_script_compiler-input_base_path-PUdNP9c8.tmp/0/core/async/promise-completer.js.map