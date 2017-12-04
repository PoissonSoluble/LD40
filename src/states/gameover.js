class GameOverState extends Phaser.State {
    
        create() {
            this.space = this.game.add.tileSprite(0, 0, 1920, 1080, 'space');
            this.space.width = this.game.width;
            this.space.height = this.game.height;
    
            let logo = this.game.add.sprite(0, 0, 'dead');
            logo.anchor.setTo(0.5, 0);
            let vaissal = this.game.add.sprite(0, 0, 'vaissaux_mort');
    
            vaissal.x = this.game.width - vaissal.width;
            vaissal.y = this.game.height - vaissal.height;


            let vaissal2 = this.game.add.sprite(0, 0, 'vaissaux_mort');
            vaissal2.anchor.setTo(0.5);
            vaissal2.angle = -90;
            

            logo.x = this.game.width / 2
            logo.y = 50
    
            let xBubule = this.game.width / 2;
            let yBubule = this.game.height / 2;
    
            let g = this.game.add.group();
            g.x = xBubule-50;
            g.y = yBubule;
            g.angle = 5;
    
            this.sprite = new Phaser.Sprite(this.game, 0, 0, 'bulle-shop');
            this.sprite.anchor.setTo(0.5);
            this.text = new Phaser.Text(this.game, 0, 0-25, " AGAIN! ", { 
                font: "40px anton, arial", 
                fill: "#ffffff", 
                align: "center"
            });
            this.text.anchor.setTo(0.5);
    
            g.add(this.sprite)
            g.add(this.text)

            let g2 = this.game.add.group();
            g2.x = xBubule+50;
            g2.y = yBubule+130;
            g2.angle = 5;
    
            let sprite2 = new Phaser.Sprite(this.game, 0, 0, 'bulle-cristaux');
            sprite2.anchor.setTo(0.5);
            let text2 = new Phaser.Text(this.game, 0, 0-25, " MENU! ", { 
                font: "40px anton, arial", 
                fill: "#ffffff", 
                align: "center"
            });
            text2.anchor.setTo(0.5);
    
            g2.add(sprite2)
            g2.add(text2)
    
            let tween = game.add.tween(g).to( { angle: -5 }, 2000, "Sine.easeInOut", true, 0, -1);
            let tween2 = game.add.tween(g.scale).to( { x: 1.1, y: 1.1 }, 2700, "Sine.easeInOut", true, 0, -1);
            let tweenb = game.add.tween(g2).to( { angle: -5 }, 3000, "Sine.easeInOut", true, 0, -1);
            let tweenb2 = game.add.tween(g2.scale).to( { x: 1.1, y: 1.1 }, 2700, "Sine.easeInOut", true, 0, -1);
            let tween3 = game.add.tween(logo.scale).to( { x: 1.1, y: 1.1 }, 2000, "Sine.easeInOut", true, 0, -1);
            
            tween.yoyo(true, 0);
            tween2.yoyo(true, 0);
            tweenb.yoyo(true, 0);
            tweenb2.yoyo(true, 0);
            tween3.yoyo(true, 0);
    
    
    
    
            this.text.inputEnabled = true;
            this.text.events.onInputDown.add(() => {this.game.state.start('play')});
            text2.inputEnabled = true;
            text2.events.onInputDown.add(() => {this.game.state.start('title')});

            let text3 = this.game.add.text(this.game.width/2, 250, "MOTHER SHIP CAPACITY EXCEEEDED!", { 
                font: "40px anton, arial", 
                fill: "#ffffff", 
                align: "center"
            });
            text3.anchor.setTo(0.5);
        }
    
    }