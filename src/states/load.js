class LoadState extends Phaser.State {


    preload() {
        this.game.stage.backgroundColor = '#87e33a';
        this.loaded = false;

        // let logo = this.game.add.sprite(this.game.width / 2, this.game.height / 2, 'logo');
        // logo.anchor.setTo(0.5,0.5);
        // logo.width = logo.height = Math.min(this.game.width, this.game.height);
        this.game.load.image("cristal", "assets/cristal.png");

        this.interval = setInterval(LoadState.prototype.checkIfLoaded.bind(this), 500);


        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        // this.game.load.image("carlier", "assets/carlier.png");
        // this.game.load.image("blue", "assets/blue.png");
       
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