class IndicateurCristaux extends Phaser.Group {
    constructor(game, x, y) {
        super(game);
        this.x = x;
        this.y = y;
        let style = { 
            font: "17px arial", 
            fill: "#ffffff", 
            align: "right",
            backgroundColor: 'rgba(255, 255, 255, 0)'
        };

        this._text = new Phaser.Text(game, 0, 30, "err", Object.assign(style));
        this._text.anchor.setTo(0.5);

        this.add(this._text);
    }

    setValues(current) {
        this._text.text = current;
    }
}