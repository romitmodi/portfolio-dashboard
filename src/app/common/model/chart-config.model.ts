export class ChartConfig {
    constructor(
        public type: string,
        public data: any[],
        public columnNames: string[],
        public options: {
            hAxis: { title: string },
            vAxis: { title: string }
        },
        public height: string,
        public width: string) { }
}