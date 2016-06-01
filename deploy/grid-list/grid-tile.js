"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var grid_list_1 = require('./grid-list');
var MdGridTile = (function () {
    function MdGridTile(_renderer, element) {
        this._renderer = _renderer;
        this._rowspan = 1;
        this._colspan = 1;
        this._element = element.nativeElement;
    }
    Object.defineProperty(MdGridTile.prototype, "rowspan", {
        get: function () {
            return this._rowspan;
        },
        set: function (value) {
            this._rowspan = grid_list_1.coerceToNumber(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdGridTile.prototype, "colspan", {
        get: function () {
            return this._colspan;
        },
        set: function (value) {
            this._colspan = grid_list_1.coerceToNumber(value);
        },
        enumerable: true,
        configurable: true
    });
    /** Sets the style of the grid-tile element.  Needs to be set manually to avoid
     * "Changed after checked" errors that would occur with HostBinding.
     * @internal
     */
    MdGridTile.prototype.setStyle = function (property, value) {
        this._renderer.setElementStyle(this._element, property, value);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MdGridTile.prototype, "rowspan", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MdGridTile.prototype, "colspan", null);
    MdGridTile = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'md-grid-tile',
            host: { 'role': 'listitem' },
            template: "<!-- TODO(kara): Revisit why this is a figure.--> <figure> <ng-content></ng-content> </figure>",
            styles: ["md-grid-list { display: block; position: relative; } md-grid-tile { display: block; position: absolute; } md-grid-tile figure { display: -webkit-box; display: -ms-flexbox; display: flex; position: absolute; -webkit-box-align: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -ms-flex-pack: center; justify-content: center; height: 100%; top: 0; right: 0; bottom: 0; left: 0; padding: 0; margin: 0; } md-grid-tile md-grid-tile-header, md-grid-tile md-grid-tile-footer { display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -ms-flex-direction: row; flex-direction: row; -webkit-box-align: center; -ms-flex-align: center; align-items: center; height: 48px; color: #fff; background: rgba(0, 0, 0, 0.18); overflow: hidden; position: absolute; left: 0; right: 0; } md-grid-tile md-grid-tile-header h3, md-grid-tile md-grid-tile-header h4, md-grid-tile md-grid-tile-footer h3, md-grid-tile md-grid-tile-footer h4 { font-weight: 400; margin: 0 0 0 16px; } md-grid-tile md-grid-tile-header h3, md-grid-tile md-grid-tile-footer h3 { font-size: 14px; } md-grid-tile md-grid-tile-header h4, md-grid-tile md-grid-tile-footer h4 { font-size: 12px; } md-grid-tile md-grid-tile-header { top: 0; } md-grid-tile md-grid-tile-footer { bottom: 0; } "],
            encapsulation: core_1.ViewEncapsulation.None,
        }), 
        __metadata('design:paramtypes', [core_1.Renderer, core_1.ElementRef])
    ], MdGridTile);
    return MdGridTile;
}());
exports.MdGridTile = MdGridTile;
//# sourceMappingURL=C:/code/Awesomeweb/material2/tmp/broccoli_type_script_compiler-input_base_path-PUdNP9c8.tmp/0/components/grid-list/grid-tile.js.map