/**
 * Symbol interface
 * @constructor
 */
var SymbolInterface = function () {
    /**
     * Create with props
     * @param width
     * @param height
     * @param fill
     */
    this.create = function (width, height, fill) {
        throw new Error("Method Create in \"" + this.constructor.name + "\" can not be empty!");
    };

    /**
     * Get area
     */
    this.getArea = function () {
        throw new Error("Method Get Area in \"" + this.constructor.name + "\" can not be empty!");
    }
};