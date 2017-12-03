class IndicateurVaisseau extends Phaser.Group {
    constructor(game, x, y) {
        super(game);
        this.x = x;
        this.y = y;
        let style = { 
            font: "40px arial", 
            fill: "#ffffff", 
            align: "right",
            backgroundColor: 'rgba(255, 255, 255, 0)'
        };

        this._text = new Phaser.Text(game, -10, 5, "56", Object.assign(style));
        this._sprite = new Phaser.Sprite(game, 60, 5, "alien");
        this._sprite.scale.setTo(2)
        this._sprite.anchor.setTo(0.5)
        this._text.anchor.setTo(0.5)
        

        this.add(this._text);
        this.add(this._sprite);
    }

    setValues(current, max) {
        this._text.text = " " + current + " / " + max + "\t ";
    }
}