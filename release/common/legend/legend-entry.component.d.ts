import { EventEmitter } from '@angular/core';
export declare class LegendEntryComponent {
    color: string;
    label: any;
    formattedLabel: string;
    isActive: boolean;
    isHidden: boolean;
    select: EventEmitter<any>;
    activate: EventEmitter<any>;
    deactivate: EventEmitter<any>;
    toggleHide: EventEmitter<any>;
    toggle: EventEmitter<any>;
    onToggleHide(): void;
    readonly trimmedLabel: string;
    onMouseEnter(): void;
    onMouseLeave(): void;
}
