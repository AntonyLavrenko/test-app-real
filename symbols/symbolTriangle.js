var SymbolTriangle = function () {
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
        var triangle = new PIXI.Graphics();
        triangle.beginFill(fill.replace(/^#/, '0x'));

        this.points = [
            [0, 0],
            [width, -(width)],
            [width * 2, width]
        ];

        triangle.drawPolygon(this.points.map(function (e) {
            return new PIXI.Point(e[0], e[1]);
        }));

        triangle.endFill();
        return triangle;
    };


    /**
     * Get area for triangle
     * @returns {number}
     */
    this.getArea = function () {
        var p1 = (this.points[0][0] - this.points[2][0]) * (this.points[1][1] - this.points[2][1]);
        var p2 = (this.points[1][0] - this.points[2][0]) * (this.points[0][1] - this.points[2][1]);
        return (Math.abs(p1 - p2)) * 0.5;
    };
};

SymbolTriangle.prototype = Object.create(SymbolInterface.prototype);