class PlayState extends Phaser.State {

    
    create() {
        this._vaisseau = new Vaisseau(this.game, 500, 200);
        this._alien = new Alien(game, this._vaisseau , { prelever:() => {} })
        this.game.add.existing(this._alien)
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