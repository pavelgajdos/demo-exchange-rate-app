export class LineChartDataset {
    private _labels: string[];
    private _values: Number[];

    constructor(labels: string[], values: Number[]) {
        this._labels = labels;
        this._values = values;
    }


    get labels(): string[] {
        return this._labels;
    }

    get values(): Number[] {
        return this._values;
    }
}