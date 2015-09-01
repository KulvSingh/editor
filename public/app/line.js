var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="../../../typings/tsd.d.ts" />
var angular2_1 = require('angular2/angular2');
// Annotation section
var LineCmp = (function () {
    function LineCmp() {
    }
    LineCmp.prototype.onInit = function () {
    };
    LineCmp = __decorate([
        angular2_1.Component({
            selector: 'editor-line',
            lifecycle: [angular2_1.onInit]
        }),
        angular2_1.View({
            templateUrl: '../pages/line.html',
            encapsulation: angular2_1.ViewEncapsulation.NONE
        }), 
        __metadata('design:paramtypes', [])
    ], LineCmp);
    return LineCmp;
})();
exports.LineCmp = LineCmp;

//# sourceMappingURL=../app/line.js.map