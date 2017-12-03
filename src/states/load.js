class LoadState extends Phaser.State {


    preload() {
        this.game.stage.backgroundColor = '#222';
        this.loaded = false;

        // let logo = this.game.add.sprite(this.game.width / 2, this.game.height / 2, 'logo');
        // logo.anchor.setTo(0.5,0.5);
        // logo.width = logo.height = Math.min(this.game.width, this.game.height);

        this.interval = setInterval(LoadState.prototype.checkIfLoaded.bind(this), 500);


        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.load.image("cristal", "assets/cristal.png");
        this.game.load.image("gros_cristal", "assets/gros_cristal.png");
        this.game.load.image("planete_bleu", "assets/planete_bleu.png");
        this.game.load.image("planete_poison", "assets/planete_poison.png");
        this.game.load.image("planete_desert", "assets/planete_desert.png");
        this.game.load.image("cristal_ressource", "assets/cristal_ressource.png");
        this.game.load.image("vaisseau", "assets/vaisseau.png");
        this.game.load.image("alien", "assets/alien.png");
        this.game.load.image("vaisseau-mere", "assets/vaisseau-mere.png");
        this.game.load.image("space", "assets/space.png");
        this.game.load.image("white", "assets/white.png");
        this.game.load.spritesheet("clone", "assets/spritesheet_clonage.png", 171, 303, 7);
       
    }

    checkIfLoaded() {
        if(this.loaded) {
            clearInterval(this.interval);
            this.game.state.start('play');
        }
    }

    create() {
        this.loaded = true;
    }

}