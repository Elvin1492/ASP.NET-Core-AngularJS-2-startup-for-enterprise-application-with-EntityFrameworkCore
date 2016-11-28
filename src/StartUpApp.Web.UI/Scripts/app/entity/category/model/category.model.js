System.register(["../../base/base.entity"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var base_entity_1;
    var Category;
    return {
        setters:[
            function (base_entity_1_1) {
                base_entity_1 = base_entity_1_1;
            }],
        execute: function() {
            Category = (function (_super) {
                __extends(Category, _super);
                function Category() {
                    _super.apply(this, arguments);
                }
                return Category;
            }(base_entity_1.EntityBase));
            exports_1("Category", Category);
        }
    }
});
