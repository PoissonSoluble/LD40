class PlayState extends Phaser.State {

    
    create() {
        let space = this.game.add.tileSprite(0, 0, 1920, 1080, 'space');
        space.width = this.game.width;
        space.height = this.game.height;
        
        this._filons = new Filons(this.game);
        this._vaisseau = new Vaisseau(this.game, this._filons, this.game.width / 2, this.game.height / 2);
        

        
        this._topbar = new TopBar(game,this._vaisseau);
        
        this._alien = new Alien(game, this._vaisseau, this._filons)
        this._vaisseau.addAlien(this._alien)
        

        this.filonInterval = setInterval(() => {
            let x = this.game.rnd.integerInRange(0, this.game.width);
            let y = this.game.rnd.integerInRange(60, this.game.height);
            this._filons.ajouterCristal(x,y,this._vaisseau);
        }, 2000);

        this._vaisseau.emitter.on('gameover', () => { window.location.reload(); throw new Error(); })


        
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