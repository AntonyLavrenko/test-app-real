/**
 * Model
 * @constructor
 */
var Model = function () {
    PIXI.utils.EventEmitter.call(this);

    this.symbols = 0;
    this.gravity = 0;

    this.countSymbols = null;
    this.surfaceArea = null;

    var $this = this;

    Object.observe(this, function (updates) {
        if (!updates || updates.length == 0) return;

        var i, l;
        for (i = 0, l = updates.length; i < l; i++) {
            let update = updates[i];
            $this.emit(update.name, $this[update.name]);
        }
    });
};

Model.prototype = Object.create(PIXI.utils.EventEmitter.prototype);