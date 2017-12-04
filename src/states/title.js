class TitleState extends Phaser.State {

    create() {

        this.space = this.game.add.tileSprite(0, 0, 1920, 1080, 'space');
        this.space.width = this.game.width;
        this.space.height = this.game.height;

        let logo = this.game.add.sprite(0, 0, 'logo_titre');
        logo.anchor.setTo(0.5, 0);
        let vaissal = this.game.add.sprite(0, 0, 'vaisseaux_titre');

        vaissal.x = this.game.width - vaissal.width;
        vaissal.y = this.game.height - vaissal.height;
        logo.x = this.game.width / 2
        logo.y = 50

        let xBubule = this.game.width / 2;
        let yBubule = this.game.height / 2;

        let g = this.game.add.group();
        g.x = xBubule;
        g.y = yBubule;
        g.angle = 5;

        this.sprite = new Phaser.Sprite(this.game, 0, 0, 'bulle-shop');
        this.sprite.anchor.setTo(0.5);
        this.text = new Phaser.Text(this.game, 0, 0-25, " PLAY! ", { 
            font: "40px anton, arial", 
            fill: "#ffffff", 
            align: "center"
        });
        this.text.anchor.setTo(0.5);

        g.add(this.sprite)
        g.add(this.text)

        let tween = game.add.tween(g).to( { angle: -5 }, 1000, "Sine.easeInOut", true, 0, -1);
        let tween2 = game.add.tween(g.scale).to( { x: 1.5, y: 1.5 }, 1700, "Sine.easeInOut", true, 0, -1);
        let tween3 = game.add.tween(logo.scale).to( { x: 1.1, y: 1.1 }, 2700, "Sine.easeInOut", true, 0, -1);
        
        tween.yoyo(true, 0);
        tween2.yoyo(true, 0);
        tween3.yoyo(true, 0);



        let credits = this.game.add.text(20, this.game.height - 20, "Code : Pierre Gabon, Vincent Duplessis, Yann Pellegrini \nArt: Kevin Pieplu\nMade with PhaserJS", { 
            font: "17px anton, arial", 
            fill: "#cccccc", 
            align: "left"
        });
        credits.anchor.setTo(0, 1);


        this.text.inputEnabled = true;
        this.text.events.onInputDown.add(() => {this.game.state.start('play')});
    }

    update() {
        this.space.tilePosition.x -= 1;
    }

}