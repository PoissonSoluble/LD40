class PlayState extends Phaser.State {

    
    create() {
        this._filons = new Filons(this.game);
        this._vaisseau = new Vaisseau(this.game, this._filons, 500, 200);
        

        
        

        
        this._alien = new Alien(game, this._vaisseau, this._filons)
        this._vaisseau.addAlien(this._alien)
        let chris = this._filons.ajouterCristal(100, 500, this._vaisseau);


        
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