class PlayState extends Phaser.State {

    
    create() {
        let space = this.game.add.tileSprite(0, 0, 1920, 1080, 'space');
        space.width = this.game.width;
        space.height = this.game.height;
        
        this._filons = new Filons(this.game);
        this._vaisseau = new Vaisseau(this.game, this._filons, this.game.width / 2, this.game.height / 2);
        this._vaisseau.emitter.on('newAlien', alien => {
//            console.log('eb')
            alien.emitter.on('clicked', () => {
                console.log('pilon')
                this._vaisseau.laser.shoot(alien);
            });
        })
        
        this._topbar = new TopBar(game,this._vaisseau);
        
        this._vaisseau.addAlien(new Alien(game, this._vaisseau, this._filons))

        this._powerUpManager = new PowerUpManager(this.game, this._vaisseau, this._filons);
        this._shop = new Shop(this.game, this._powerUpManager)

        this._vaisseau.emitter.on('gameover', () => { this.game.destroy(); window.location.reload(); })
       
    }


    update() {
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