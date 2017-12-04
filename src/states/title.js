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
        g.x = xBubule-50;
        g.y = yBubule;
        g.angle = 5;

        let sprite = new Phaser.Sprite(this.game, 0, 0, 'bulle-shop');
        sprite.anchor.setTo(0.5);
        let text = new Phaser.Text(this.game, 0, 0-25, " PLAY! ", { 
            font: "40px anton, arial", 
            fill: "#ffffff", 
            align: "center"
        });
        text.anchor.setTo(0.5);

        g.add(sprite)
        g.add(text)

        let g2 = this.game.add.group();
        g2.x = xBubule+50;
        g2.y = yBubule+150;
        g2.angle = 5;

        let sprite2 = new Phaser.Sprite(this.game, 0, 0, 'bulle-cristaux');
        sprite2.anchor.setTo(0.5);
        let text2 = new Phaser.Text(this.game, 0, 0-25, " HOW?? ", { 
            font: "40px anton, arial", 
            fill: "#ffffff", 
            align: "center"
        });
        text2.anchor.setTo(0.5);

        g2.add(sprite2)
        g2.add(text2)

        let tween = game.add.tween(g).to( { angle: -5 }, 2000, "Sine.easeInOut", true, 0, -1);
        let tween2 = game.add.tween(g.scale).to( { x: 1.5, y: 1.5 }, 2500, "Sine.easeInOut", true, 0, -1);
        let tweenb = game.add.tween(g2).to( { angle: -5 }, 2000, "Sine.easeInOut", true, 0, -1);
        let tween2b = game.add.tween(g2.scale).to( { x: 1.5, y: 1.5 }, 2500, "Sine.easeInOut", true, 0, -1);
        let tween3 = game.add.tween(logo.scale).to( { x: 1.1, y: 1.1 }, 2700, "Sine.easeInOut", true, 0, -1);
        
        tween.yoyo(true, 0);
        tween2.yoyo(true, 0);
        tweenb.yoyo(true, 0);
        tween2b.yoyo(true, 0);
        tween3.yoyo(true, 0);



        let credits = this.game.add.text(20, this.game.height - 20, "Code : Pierre Gabon, Vincent Duplessis, Yann Pellegrini \nArt: Kevin Pieplu\nMade with PhaserJS", { 
            font: "17px anton, arial", 
            fill: "#cccccc", 
            align: "left"
        });
        credits.anchor.setTo(0, 1);


        text.inputEnabled = true;
        text.events.onInputDown.add(() => {this.game.state.start('play')});
        text2.inputEnabled = true;
        text2.events.onInputDown.add(() => {this.game.state.start('tutorial')});
    }

    update() {
        this.space.tilePosition.x -= 1;
    }

}