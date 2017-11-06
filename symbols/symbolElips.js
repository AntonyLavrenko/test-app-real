var SymbolElips = function () {
    SymbolInterface.call(this);

    this.width = 0;
    this.height = 0;

    /**
     * Create elips
     * @param width
     * @param height
     * @param fill
     * @returns {*}
     */
    this.create = function (width, height, fill) {
        this.width = width;
        this.height = height;

        let elips = new PIXI.Graphics();

        elips.beginFill(fill.replace(/^#/, '0x'));

        elips.drawEllipse(0, 0, this.width, this.height);
        elips.endFill();
        return elips;
    };

    /**
     * Get area for Circle
     * @returns {number}
     */
    this.getArea = function () {
        return Math.PI * this.width * this.height;
    }
};

SymbolElips.prototype = Object.create(SymbolInterface.prototype);