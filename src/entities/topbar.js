class TopBar extends Phaser.Group {

    constructor(game, vaisseau) {
        super(game);

        this.vaisseau = vaisseau;

        let graphics = new Phaser.Sprite(game, 0,0, 'white');
        graphics.width = game.width;
        graphics.height = 50;
        graphics.alpha = 0.1;

        let cristal = new Phaser.Sprite(game, game.width / 6, 25, 'cristal');
        cristal.width = cristal.height = 40;
        cristal.anchor.setTo(0.5);

        let style = { 
            font: "20px arial", 
            fill: "#ffffff", 
            align: "right",
            backgroundColor: 'rgba(255, 255, 255, 0)'
        };

        this._text = new Phaser.Text(game, -10, 5, "56", Object.assign(style));
        this._sprite = new Phaser.Sprite(game, 40, 5, "alien");


        
        this.add(graphics);
        this.add(cristal);
        
    }
}


