import { Renderer, ElementRef } from '@angular/core';
export declare class MdGridTile {
    private _renderer;
    _rowspan: number;
    _colspan: number;
    _element: HTMLElement;
    constructor(_renderer: Renderer, element: ElementRef);
    rowspan: number;
    colspan: number;
}
