/// <reference path="../../../typings/tsd.d.ts" />
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
var angular2_1 = require('angular2/angular2');
var line_1 = require('app/line');
// Annotation section
var EditorCmp = (function () {
    function EditorCmp() {
        this.name = 'EditorCmp';
    }
    EditorCmp.prototype.onInit = function () {
        console.log('Parent ' + this.name);
    };
    EditorCmp = __decorate([
        angular2_1.Component({
            selector: 'editor',
            properties: ['name'],
            lifecycle: [angular2_1.onInit]
        }),
        angular2_1.View({
            templateUrl: '../pages/ed.html',
            encapsulation: angular2_1.ViewEncapsulation.NONE,
            directives: [line_1.LineCmp]
        }), 
        __metadata('design:paramtypes', [])
    ], EditorCmp);
    return EditorCmp;
})();
exports.EditorCmp = EditorCmp;
angular2_1.bootstrap(EditorCmp);

//# sourceMappingURL=../app/app.js.map