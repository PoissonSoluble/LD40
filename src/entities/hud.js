class BulleShop extends Phaser.Group {
    constructor(game, x, y) {
        super(game)
        this.x = x;
        this.y = y;
        this.emitter = new EventEmitter;
        this.sprite = new Phaser.Sprite(game, 0, 0, 'bulle-shop');
        this.sprite.alpha = .7;
        this.sprite.anchor.setTo(0.5);
        this.text = new Phaser.Text(game, 0, -20, " SHOP ", { 
            font: "40px anton, arial", 
            fill: "#ffffff", 
            align: "center"
        });
        this.text.anchor.setTo(0.5);

        this.add(this.sprite);
        this.add(this.text);

        this.text.inputEnabled = true;
        this.text.events.onInputDown.add(() => {this.emitter.emit('click')});
        
    }
}

class BulleCristaux extends Phaser.Group {
    constructor(game, x, y) {
        super(game)
        this.x = x;
        this.y = y;
        this.sprite = new Phaser.Sprite(game, 0, 0, 'bulle-cristaux');
        this.sprite.alpha = .7;
        this.sprite.anchor.setTo(0.5);
        this.icon = new Phaser.Sprite(game, -40, -20, 'cristal_ressource');
        this.icon.width = 50;
        this.icon.height = 50;
        this.icon.anchor.setTo(0.5);
        this.text = new Phaser.Text(game, -20, -20, "362", { 
            font: "30px anton, arial", 
            fill: "#ffffff", 
            align: "left"
        });
        this.text.anchor.setTo(0, 0.5);

        this.add(this.sprite);
        this.add(this.text);
        this.add(this.icon);
    }

    setValues(cristaux) {
        this.text.text = cristaux;
    }
}

class BullePopulation extends Phaser.Group {
    constructor(game, x, y) {
        super(game)
        this.x = x;
        this.y = y;
        this.sprite = new Phaser.Sprite(game, 0, 0, 'bulle-population');
        this.sprite.alpha = .7;
        this.sprite.anchor.setTo(0.5);
        this.icon = new Phaser.Sprite(game, -60, 20, 'vaisseau');
        this.icon.width = 50;
        this.icon.height = 50;
        this.icon.anchor.setTo(0.5);
        this.text = new Phaser.Text(game, -30, 10, "325/521", { 
            font: "25px anton, arial", 
            fill: "#ffffff", 
            align: "left"
        });
        this.text2 = new Phaser.Text(game, -30, 35, "Population", { 
            font: "20px anton, arial", 
            fill: "#ffffff", 
            align: "left"
        });
        this.text.anchor.setTo(0, 0.5);
        this.text2.anchor.setTo(0, 0.5);

        this.add(this.sprite);
        this.add(this.text);
        this.add(this.text2);
        this.add(this.icon);
    }

    setValues(p, t) {
        this.text.text = p + " / " + t;
    }
}