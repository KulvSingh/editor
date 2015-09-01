/// <reference path="../../../typings/tsd.d.ts" />

import {
    bootstrap,
    Component,
    View,
    ViewEncapsulation,
    LifecycleEvent,
    Host,
    onInit,
    SkipSelf,
    Attribute,
    Optional
} from 'angular2/angular2';

import {LineCmp} from 'app/line';

// Annotation section
@Component({
    selector: 'editor',
    properties: ['name'],
    lifecycle: [onInit]
})
@View({
    templateUrl: '../pages/ed.html',
    encapsulation: ViewEncapsulation.NONE,
    directives: [LineCmp]
})
export class EditorCmp {

    name: string;

    constructor() {
        this.name='EditorCmp';
    }
    onInit() {
        console.log('Parent ' + this.name);

    }

}


bootstrap(EditorCmp);
