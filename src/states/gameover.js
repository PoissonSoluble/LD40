class GameOverState extends Phaser.State {
    
        create() {
            let vaissal = this.game.add.sprite(0, 0, 'vaissaux_mort');
    
            vaissal.x = this.game.width - vaissal.width;
            vaissal.y = this.game.height - vaissal.height;
        }
    
    }