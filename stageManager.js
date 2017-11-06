/**
 * Main class
 * @constructor
 */
var StageManager = function (canvasID, width, height) {
    PIXI.utils.EventEmitter.call(this);

    this.canvasID = canvasID;
    this.width = width;
    this.height = height;
    this.stage = null;

    /**
     * Get canvas DOM
     */
    this.getDOM = function () {
        return document.getElementById(this.canvasID)
    };

    /**
     * Init stage
     */
    this.initStage = function () {
        this.renderer = PIXI.autoDetectRenderer(
            this.width, this.height,
            {transparent: true}
        );

        this.getDOM().appendChild(this.renderer.view);

        this.stage = new PIXI.Container();
    };

    /**
     * Get stage
     * @returns {null}
     */
    this.getStage = function () {
        return this.stage;
    };

    /**
     * Init ticker
     */
    this.initTicker = function () {
        PIXI.ticker.shared.speed = 0.5;

        PIXI.ticker.shared.add((time) => {
            this.renderUpdate();
        });
    };

    /**
     * Render update stage
     */
    this.renderUpdate = function () {
        this.emit('update');
        this.renderer.render(this.stage);
    }
};

StageManager.prototype = Object.create(PIXI.utils.EventEmitter.prototype);