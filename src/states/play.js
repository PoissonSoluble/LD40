class PlayState extends Phaser.State {

    
    create() {
        this._vaisseau = new Vaisseau(this.game, 100, 100);
        this._filons = new Filons(this.game);
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