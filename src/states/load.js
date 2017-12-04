class LoadState extends Phaser.State {


    preload() {
        this.game.stage.backgroundColor = '#222';
        this.loaded = false;

        // let logo = this.game.add.sprite(this.game.width / 2, this.game.height / 2, 'logo');
        // logo.anchor.setTo(0.5,0.5);
        // logo.width = logo.height = Math.min(this.game.width, this.game.height);

       

        this.interval = setInterval(LoadState.prototype.checkIfLoaded.bind(this), 500);


        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.load.image("systeme", "assets/systeme.png");
        this.game.load.image("pouvoir", "assets/pouvoir.png");
        this.game.load.image("shop", "assets/shop.png");
        this.game.load.image("dead", "assets/dead.png");
        this.game.load.image("vaisseaux_titre", "assets/vaisseaux_titre.png");
        this.game.load.image("logo_titre", "assets/logo_titre.png");        
        this.game.load.image("vaissaux_mort", "assets/vaissaux_mort.png");        
        this.game.load.image("cristal", "assets/cristal.png");
        this.game.load.image("pointer", "assets/pointer.png");
        
        this.game.load.image("gros_cristal", "assets/gros_cristal.png");
        this.game.load.image("planete_bleu", "assets/planete_bleu.png");
        this.game.load.image("planete_poison", "assets/planete_poison.png");
        this.game.load.image("planete_desert", "assets/planete_desert.png");
        this.game.load.image("cristal_ressource", "assets/cristal_ressource.png");
        this.game.load.image("tutorial", "assets/tutorial.png");
        
        this.game.load.image("vaisseau", "assets/vaisseau.png");
        this.game.load.image("alien", "assets/alien.png");
        this.game.load.image("vaisseau-mere", "assets/vaisseau-mere.png");
        this.game.load.image("space", "assets/space.png");
        this.game.load.image("shield", "assets/bulle.png");
        this.game.load.image("bulle-population", "assets/bulle-population.png");
        this.game.load.image("bulle-cristaux", "assets/bulle-cristaux.png");
        this.game.load.image("bulle-shop", "assets/bulle-shop.png");
        
        this.game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');        
        this.game.load.spritesheet("clone", "assets/spritesheet_clonage.png", 171, 303, 7);
        this.game.load.spritesheet("vaisseau_mere_sheet", "assets/vaisseau_mere_sheet.png", 838, 308, 3);
       
    }

    checkIfLoaded() {
        if(this.loaded) {
            clearInterval(this.interval);
            setTimeout(() => this.game.state.start('title'), 1000);
        }
    }

    create() {
        this.loaded = true;
    }

}