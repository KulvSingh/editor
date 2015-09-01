/// <reference path="../../../typings/tsd.d.ts" />
import {
    bootstrap,
    Component,
    View,
    ViewEncapsulation,
    onInit,
    Host,
    SkipSelf,
    Attribute,
    Optional
} from 'angular2/angular2';



// Annotation section
@Component({
    selector: 'editor-line',
    lifecycle: [onInit]
})
@View({
    templateUrl: '../pages/line.html',
    encapsulation: ViewEncapsulation.NONE
})
export class LineCmp {

    constructor() {

    }
    onInit() {

    }

}

