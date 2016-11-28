System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var EntityBase;
    return {
        setters:[],
        execute: function() {
            EntityBase = (function () {
                function EntityBase() {
                }
                Object.defineProperty(EntityBase.prototype, "IsNewEntity", {
                    get: function () {
                        return this.Id == 0;
                    },
                    enumerable: true,
                    configurable: true
                });
                return EntityBase;
            }());
            exports_1("EntityBase", EntityBase);
        }
    }
});
