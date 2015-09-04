/// <reference path="../../../typings/tsd.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var angular2_1 = require('angular2/angular2');
// Annotation section
var LineCmp = (function () {
    function LineCmp(ed) {
        console.log(ed.name);
    }
    LineCmp.prototype.onInit = function () {
    };
    LineCmp = __decorate([
        angular2_1.Component({
            selector: 'editor-line',
            lifecycle: [angular2_1.LifecycleEvent.onInit]
        }),
        angular2_1.View({
            templateUrl: '../pages/line.html',
            encapsulation: angular2_1.ViewEncapsulation.NONE,
            directives: []
        }),
        __param(0, angular2_1.Host(angular2_1.forwardRef(function () { return EditorComp; }))), 
        __metadata('design:paramtypes', [EditorCmp])
    ], LineCmp);
    return LineCmp;
})();
exports.LineCmp = LineCmp;
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
            lifecycle: [angular2_1.LifecycleEvent.onInit]
        }),
        angular2_1.View({
            templateUrl: '../pages/ed.html',
            encapsulation: angular2_1.ViewEncapsulation.NONE,
            directives: [LineCmp]
        }), 
        __metadata('design:paramtypes', [])
    ], EditorCmp);
    return EditorCmp;
})();
exports.EditorCmp = EditorCmp;
changed;
var Type = (function (_super) {
    __extends(Type, _super);
    function Type() {
        _super.apply(this, arguments);
    }
    return Type;
})(bootstrap(EditorCmp));

//# sourceMappingURL=../app/app.js.map