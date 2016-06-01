import { QueryList, ElementRef, Renderer, AfterContentInit } from '@angular/core';
export declare class MdList {
}
export declare class MdLine {
}
export declare class MdListAvatar {
}
export declare class MdListItem implements AfterContentInit {
    private _renderer;
    private _element;
    _lines: QueryList<MdLine>;
    /** TODO: internal */
    ngAfterContentInit(): void;
    private _hasAvatar;
    constructor(_renderer: Renderer, _element: ElementRef);
    private _setLineClass(count);
    private _resetClasses();
    private _setClass(className, bool);
}
export declare const MD_LIST_DIRECTIVES: (typeof MdList | typeof MdListItem)[];
