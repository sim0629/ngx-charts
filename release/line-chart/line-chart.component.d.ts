import { EventEmitter, TemplateRef } from '@angular/core';
import { ViewDimensions } from '../common/view-dimensions.helper';
import { ColorHelper } from '../common/color.helper';
import { BaseChartComponent } from '../common/base-chart.component';
export declare class LineChartComponent extends BaseChartComponent {
    legend: any;
    legendTitle: string;
    xAxis: any;
    yAxis: any;
    showXAxisLabel: any;
    showYAxisLabel: any;
    xAxisLabel: any;
    yAxisLabel: any;
    autoScale: any;
    timeline: any;
    gradient: boolean;
    showGridLines: boolean;
    curve: any;
    activeEntries: any[];
    hiddenEntries: any[];
    schemeType: string;
    rangeFillOpacity: number;
    xAxisTickFormatting: any;
    yAxisTickFormatting: any;
    xAxisTicks: any[];
    yAxisTicks: any[];
    roundDomains: boolean;
    tooltipDisabled: boolean;
    showRefLines: boolean;
    referenceLines: any;
    showRefLabels: boolean;
    xScaleMin: any;
    xScaleMax: any;
    yScaleMin: number;
    yScaleMax: number;
    activate: EventEmitter<any>;
    deactivate: EventEmitter<any>;
    hidden: EventEmitter<any>;
    shown: EventEmitter<any>;
    tooltipTemplate: TemplateRef<any>;
    seriesTooltipTemplate: TemplateRef<any>;
    dims: ViewDimensions;
    xSet: any;
    xDomain: any;
    yDomain: any;
    yLabelDomain: any;
    seriesDomain: any;
    yScale: any;
    xScale: any;
    colors: ColorHelper;
    scaleType: string;
    transform: string;
    clipPath: string;
    clipPathId: string;
    series: any;
    areaPath: any;
    margin: number[];
    hoveredVertical: any;
    xAxisHeight: number;
    yAxisWidth: number;
    filteredDomain: any;
    legendOptions: any;
    hasRange: boolean;
    timelineWidth: any;
    timelineHeight: number;
    timelineXScale: any;
    timelineYScale: any;
    timelineXDomain: any;
    timelineTransform: any;
    timelinePadding: number;
    update(): void;
    isHidden(entry: any): boolean;
    toggleHidden(item: any): void;
    updateTimeline(): void;
    getUniqueXDomainValues(results: any[], hidden?: boolean): any[];
    getXDomain(): any[];
    getYDomain(hidden: boolean): any[];
    getSeriesDomain(): any[];
    getXScale(domain: any, width: any): any;
    getYScale(domain: any, height: any): any;
    getScaleType(values: any): string;
    isDate(value: any): boolean;
    updateDomain(domain: any): void;
    updateHoveredVertical(item: any): void;
    hideCircles(): void;
    onClick(data: any, series?: any): void;
    trackBy(index: any, item: any): string;
    setColors(): void;
    getLegendOptions(): {
        scaleType: string;
        colors: any;
        domain: any[];
        title: any;
    };
    updateYAxisWidth({width}: {
        width: any;
    }): void;
    updateXAxisHeight({height}: {
        height: any;
    }): void;
    onActivate(item: any): void;
    onDeactivate(item: any): void;
    deactivateAll(): void;
}
