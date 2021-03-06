class PlayState extends Phaser.State {

    
    create() {
        Alien.capacite = 5;
        this.space = this.game.add.tileSprite(0, 0, 1920, 1080, 'space');
        this.space.width = this.game.width;
        this.space.height = this.game.height;
        this._score = 0;
        this._filons = new Filons(this.game);
        this._vaisseau = new Vaisseau(this.game, this._filons, this.game.width / 2, this.game.height / 2);
        this._vaisseau.emitter.on('newAlien', alien => {
            alien.emitter.on('clicked', () => {
                this._vaisseau.laser.shoot(alien);
            });
        });

        this.textScore = this.game.add.text(this.game.width - 20, 20, "SCORE: 0", { 
            font: "30px anton, arial", 
            fill: "#dddddd", 
            align: "right"
        });
        this.textScore.anchor.setTo(1, 0);

        this._vaisseau.emitter.on('earnCrystal', amount => {
            this._score += amount;
            this.textScore.text = "SCORE: " + this._score;
        })
        this._researchLevel = 0; // ne fait rien, juste pour compter le nb d'achat du pwp. 
              
        this._vaisseau.addAlien(new Alien(this.game, this._vaisseau, this._filons))

        this._powerUpManager = new PowerUpManager(this.game, this._vaisseau, this._filons);
        this._shop = new Shop(this.game, this._powerUpManager)
        this._vaisseau.emitter.on('open-shop', () => { this._shop.open(); })
        //this._topbar = new TopBar(game,this._vaisseau, this._shop);

        this._activePowersHud = new ActivePowersHUD(this.game, 15,15);

        this._powerUpManager.emitter.on('alien-capacity', (c)=> {
            this._activePowersHud.setAlienCapacity(c);
        });
        this._powerUpManager.emitter.on('laser-start', ()=> {
            this._activePowersHud.setLaser(true);
        });
        this._powerUpManager.emitter.on('research-level', ()=> {
            this._activePowersHud.setResearchLevel(++this._researchLevel);
        });
        this._powerUpManager.emitter.on('laser-stop', ()=> {
            this._activePowersHud.setLaser(false);
        });
        this._activePowersHud.setAlienCapacity(Alien.capacite);

        this._vaisseau.emitter.on('gameover', () => { this._shop.destroy(); this.game.state.start('gameover', true, false, {score: this._score}) })
       
    }


    update() {
        this.space.tilePosition.x -= 0.1;
    }

    restore() {
        if(window.localStorage) {
            // const score = localStorage.getItem('score');
            // if(!isNaN(+score)) {
            //     this.score = +score;
            // }
        }
        
    }

    save() {
        if(window.localStorage) {
            //localStorage.setItem('score', ""+this.score);
        }
        
    }

}