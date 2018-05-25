var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, ChangeDetectionStrategy, HostListener, EventEmitter } from '@angular/core';
var LegendEntryComponent = /** @class */ (function () {
    function LegendEntryComponent() {
        this.isActive = false;
        this.isHidden = false;
        this.select = new EventEmitter();
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
        this.toggleHide = new EventEmitter();
        this.toggle = new EventEmitter();
    }
    LegendEntryComponent.prototype.onToggleHide = function () {
        this.toggleHide.emit({ name: this.label });
    };
    Object.defineProperty(LegendEntryComponent.prototype, "trimmedLabel", {
        get: function () {
            return this.formattedLabel || '(empty)';
        },
        enumerable: true,
        configurable: true
    });
    LegendEntryComponent.prototype.onMouseEnter = function () {
        this.activate.emit({ name: this.label });
    };
    LegendEntryComponent.prototype.onMouseLeave = function () {
        this.deactivate.emit({ name: this.label });
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], LegendEntryComponent.prototype, "color", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], LegendEntryComponent.prototype, "label", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], LegendEntryComponent.prototype, "formattedLabel", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], LegendEntryComponent.prototype, "isActive", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], LegendEntryComponent.prototype, "isHidden", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], LegendEntryComponent.prototype, "select", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], LegendEntryComponent.prototype, "activate", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], LegendEntryComponent.prototype, "deactivate", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], LegendEntryComponent.prototype, "toggleHide", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], LegendEntryComponent.prototype, "toggle", void 0);
    __decorate([
        HostListener('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], LegendEntryComponent.prototype, "onMouseEnter", null);
    __decorate([
        HostListener('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], LegendEntryComponent.prototype, "onMouseLeave", null);
    LegendEntryComponent = __decorate([
        Component({
            selector: 'ngx-charts-legend-entry',
            template: "\n    <span \n      [title]=\"formattedLabel\"\n      tabindex=\"-1\"\n      [class.active]=\"isActive\"\n      [class.hidden]=\"isHidden\"\n      (click)=\"select.emit(formattedLabel); onToggleHide();\">\n      <span\n        class=\"legend-label-color\"\n        [style.background-color]=\"color\"\n        (click)=\"toggle.emit(formattedLabel)\">\n      </span>\n      <span class=\"legend-label-text\">\n        {{trimmedLabel}}\n      </span>\n    </span>\n  ",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], LegendEntryComponent);
    return LegendEntryComponent;
}());
export { LegendEntryComponent };
//# sourceMappingURL=legend-entry.component.js.map