var SymbolCircle = function () {
    SymbolInterface.call(this);

    this.radius = 0;

    /**
     * Create elips
     * @param width
     * @param height
     * @param fill
     * @returns {*}
     */
    this.create = function (width, height, fill) {
        let elips = new PIXI.Graphics();

        elips.beginFill(fill.replace(/^#/, '0x'));

        this.radius = width / 2;

        elips.drawCircle(0, 0, this.radius);
        elips.endFill();
        return elips;
    };

    /**
     * Get area for Circle
     * @returns {number}
     */
    this.getArea = function () {
        return Math.PI * (this.radius * this.radius);
    }
};

SymbolCircle.prototype = Object.create(SymbolInterface.prototype);