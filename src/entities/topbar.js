class TopBar extends Phaser.Group {

    constructor(game, vaisseau) {
        super(game);

        this.vaisseau = vaisseau;

        let graphics = new Phaser.Sprite(game, 0,0, 'white');
        graphics.width = game.width;
        graphics.height = 50;
        graphics.alpha = 0.1;

        let cristal = new Phaser.Sprite(game, game.width / 6, 25, 'cristal_ressource');
        cristal.width = cristal.height = 40;
        cristal.scale.setTo(2);
        cristal.anchor.setTo(0.5);

        let style = { 
            font: "20px arial", 
            fill: "#ffffff", 
            align: "right",
            backgroundColor: 'rgba(255, 255, 255, 0)'
        };

        this.text = new Phaser.Text(game, game.width / 6 + 30, 29, "56", Object.assign(style));
        this.text.anchor.setTo(0.5);

        
        this.add(graphics);
        this.add(cristal);
        this.add(this.text);
        
    }

    update() {
        this.text.text = this.vaisseau.cristaux;
    }
}


