var SymbolPolygone6 = function () {
    SymbolInterface.call(this);

    this.points = [];

    /**
     * Create elips
     * @param width
     * @param height
     * @param fill
     * @returns {*}
     */
    this.create = function (width, height, fill) {
        var polygone = new PIXI.Graphics();
        polygone.beginFill(fill.replace(/^#/, '0x'));

        var scaleX = width / 100;
        var scaleY = height / 50;

        this.points = [
            [-79 * scaleX, -3 * scaleY],
            [-34 * scaleX, 63 * scaleY],
            [56 * scaleX, 43 * scaleY],
            [70 * scaleX, -28 * scaleY],
            [90 * scaleX, -68 * scaleY],
            [-10 * scaleX, -55 * scaleY]
        ];

        polygone.drawPolygon(this.points.map(function (e) {
            return new PIXI.Point(e[0], e[1]);
        }));

        polygone.endFill();
        return polygone;
    };

    /**
     * Get area from 5 points from polygone
     * @returns {number}
     */
    this.getArea = function () {
        var p1 = (this.points[0][0] * this.points[1][1]);
        var p2 = (this.points[1][0] * this.points[2][1]);
        var p3 = (this.points[2][0] * this.points[3][1]);
        var p4 = (this.points[3][0] * this.points[4][1]);
        var p5 = (this.points[4][0] * this.points[5][1]);
        var p6 = (this.points[5][0] * this.points[0][1]);
        var p7 = (this.points[1][0] * this.points[0][1]);
        var p8 = (this.points[2][0] * this.points[1][1]);
        var p9 = (this.points[3][0] * this.points[2][1]);
        var p10 = (this.points[4][0] * this.points[3][1]);
        var p11 = (this.points[5][0] * this.points[4][1]);
        var p12 = (this.points[0][0] * this.points[5][1]);

        return (Math.abs(p1 + p2 + p3 + p4 + p5 + p6 - p7 - p8 - p9 - p10 - p11 - p12)) * 0.5;
    }
};

SymbolPolygone6.prototype = Object.create(SymbolInterface.prototype);