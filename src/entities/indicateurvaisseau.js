class IndicateurVaisseau extends Phaser.Group {
    constructor(game) {
        super(game);

        let style = { 
            font: "50px arial", 
            fontWeight: 'bold',
            fill: "#ffffff", 
            align: "center",
            backgroundColor: 'cyan'
        };

        this._currentText = new Phaser.Text(game, 0, 0, "", Object.assign(style, {fill: "black"}));
        this._maxText = new Phaser.Text(game, 20, 0, "", Object.assign(style, {fill: "red"}));
    }

    setValues(current, max) {
        this._currentText.text = current + " / ";
        this._maxText.text = max;
    }
}