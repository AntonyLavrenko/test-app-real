/**
 * Main class
 * @param model
 * @param stage
 * @constructor
 */
var Main = function (model, stage) {
    this.model = model;
    this.stage = stage;
    this.symbolsContainer = null;

    this.types = [SymbolElips, SymbolCircle, SymbolTriangle, SymbolRectangle, SymbolPolygone5, SymbolPolygone6];
    this.minY = -200;

    /**
     * Random integer
     * @param min
     * @param max
     * @returns {*}
     */
    this.getRand = function (min, max) {
        var rand = min + Math.random() * (max - min);
        rand = Math.round(rand);
        return rand;
    };

    /**
     * Get random color
     * @returns {string}
     */
    this.getRandColor = function () {
        return '#' + (~~(Math.random() * (1 << 24))).toString(16);
    };

    /**
     * Add symbol
     * @param x
     * @param y
     * @param type
     */
    this.addSymbol = function (x, y, type) {
        if (typeof x == "undefined") x = this.getRand(0, this.stage.width);
        if (typeof y == "undefined") y = this.minY;
        if (typeof type == "undefined") type = this.getRand(0, this.types.length - 1);
        var symbol = new this.types[type]();
        var symbolEl = this.symbolsContainer.addChild(symbol.create(
            this.getRand(10, 100),
            this.getRand(5, 50),
            this.getRandColor()
        ));
        symbolEl.x = x;
        symbolEl.y = y;
        symbolEl.rotation = this.getRand(0, 200) / 100;

        symbolEl.interactive = true;
        symbolEl.buttonMode = "pointer";
        symbolEl.on('pointerdown', function (e) {
            this.removeSymbol(symbolEl);
            e.stopPropagation();
        }.bind(this));

        symbolEl._instance = symbol;
    };

    /**
     * Remove child from stage
     * @param symbol
     */
    this.removeSymbol = function (symbol) {
        if (!symbol) return;
        symbol.parent.removeChild(symbol);
        symbol.destroy();
        symbol._instance = null;
        delete symbol;
    };

    /**
     * Init symbols
     */
    this.initSymbols = function () {
        this.initBackground();

        this.symbolsContainer = new PIXI.Container();
        this.stage.getStage().addChild(this.symbolsContainer);

        var i;
        for (i = 0; i < this.model.symbols; i++) {
            this.addSymbol()
        }

        this.stage.on("update", this.updateSymbols.bind(this));
    };

    /**
     * Init bg
     */
    this.initBackground = function () {
        let bg = new PIXI.Graphics();
        bg.beginFill("0xFFFFFF");
        bg.drawRect(0, 0, this.stage.width, this.stage.height);
        bg.endFill();
        this.stage.getStage().addChild(bg);

        bg.interactive = true;
        bg.buttonMode = "pointer";
        bg.on('pointerdown', function (e) {
            this.addSymbol(e.data.originalEvent.layerX, e.data.originalEvent.layerY);
        }.bind(this))
    };

    /**
     * Update symbols
     */
    this.updateSymbols = function () {
        var children = this.symbolsContainer.children;
        var i, l, onVisible = 0, areaVisible = 0;
        for (i = 0, l = children.length; i < l; i++) {
            let symbol = children[i];
            if (!symbol) continue;

            var bounds = symbol.getBounds();
            if (bounds.y < this.stage.height) {
                symbol.y += this.model.gravity;
            } else {
                this.removeSymbol(symbol);
                continue;
            }

            if (bounds.y > 0 && bounds.y < this.stage.height) {
                onVisible++;
                areaVisible += symbol._instance.getArea();
            }
        }

        this.balancedSymbols();

        this.model.countSymbols = onVisible;
        this.model.surfaceArea = areaVisible;
    };

    this.balancedSymbols = function () {
        var childLength = this.symbolsContainer.children.length;
        let diffLength = this.model.symbols - childLength;
        if (diffLength > 0) {
            var i;
            for (i = 0; i < diffLength; i++) {
                this.addSymbol();
            }
        }
    };
};