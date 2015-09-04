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
    Optional,
    Inject,
    forwardRef
} from 'angular2/angular2';


// Annotation section
@Component({
    selector: 'editor-line',
    lifecycle: [LifecycleEvent.onInit]
})
@View({
    templateUrl: '../pages/line.html',
    encapsulation: ViewEncapsulation.NONE,
    directives: []
})
export class LineCmp {

    constructor(@Host(forwardRef(()=> EditorComp)) ed:EditorCmp) {
        console.log(ed.name);

    }
    onInit() {

    }

}


// Annotation section
@Component({
    selector: 'editor',
    properties: ['name'],
    lifecycle: [LifecycleEvent.onInit]
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


changed

class Type  extends 
bootstrap(EditorCmp);
