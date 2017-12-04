class TutorialState extends Phaser.State {
    
        create() {
            this.space = this.game.add.tileSprite(0, 0, 1920, 1080, 'space');
            this.space.width = this.game.width;
            this.space.height = this.game.height;
    
            let tuto = this.game.add.sprite(this.game.width/2, 0, 'tutorial');
            tuto.anchor.setTo(0.5, 0);
            tuto.scale.setTo(0.9)
            
    
            let xBubule = this.game.width / 2;
            let yBubule = this.game.height-50;
    
            let g = this.game.add.group();
            g.x = xBubule-120;
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

            let g2 = this.game.add.group();
            g2.x = xBubule+120;
            g2.y = yBubule;
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
    
            let tween = game.add.tween(g).to( { angle: -5 }, 3000, "Sine.easeInOut", true, 0, -1);
            let tween2 = game.add.tween(g.scale).to( { x: 1.1, y: 1.1 }, 3700, "Sine.easeInOut", true, 0, -1);
            let tweenb = game.add.tween(g2).to( { angle: -5 }, 3000, "Sine.easeInOut", true, 0, -1);
            let tweenb2 = game.add.tween(g2.scale).to( { x: 1.1, y: 1.1 }, 3700, "Sine.easeInOut", true, 0, -1);
            
            tween.yoyo(true, 0);
            tween2.yoyo(true, 0);
            tweenb.yoyo(true, 0);
            tweenb2.yoyo(true, 0);
    
    
    
    
            this.text.inputEnabled = true;
            this.text.events.onInputDown.add(() => {this.game.state.start('play')});
            text2.inputEnabled = true;
            text2.events.onInputDown.add(() => {this.game.state.start('title')});

        }
    
    }