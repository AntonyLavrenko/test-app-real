var SymbolRectangle = function () {
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

        var rect = new PIXI.Graphics();
        rect.beginFill(fill.replace(/^#/, '0x'));

        rect.drawRect(0, 0, width, height);

        rect.endFill();
        return rect;
    };

    /**
     * Get area for rectangle
     * @returns {number}
     */
    this.getArea = function () {
        return this.width * this.height;
    };
};

SymbolRectangle.prototype = Object.create(SymbolInterface.prototype);