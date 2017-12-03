class Vaisseau extends Phaser.Group {


    /**
     *  events:
     *      gameover
     */

    constructor(game, filons, x, y) {
        super(game);

        this.x = x;
        this.y = y;
        this._sprite = new Phaser.Sprite(game, 0, 0, 'vaisseau-mere');
        this._sprite.anchor.set(0.5);
        
        this._alienQueue = new Queue();
        this.capacity = Data.INITIAL_CAPACITY;
        this.filons = filons;
        this.cristaux = 0;
        this._emitter = new EventEmitter;
        this.add(this._sprite);
        this._indicateur = new IndicateurVaisseau(this.game, this.x, this.y);
        
        this.event = game.time.events.loop(5000, ()=> {
            let nbAliens = this._alienQueue.getLength();
            for (let i=0; i<nbAliens;i++)
            {
                let alien = new Alien(this.game, this, this.filons, this.x, this.y);
                this.addAlien(alien);
            }
            
        });

    }
    
    get emitter() {
        return this._emitter;
    }


    update() {
        if(this.isCapacityExceeded()) {
            this.emitter.emit('gameover');
        }
        this._indicateur.setValues(this._alienQueue.getLength(), this.capacity);
    }

    isCapacityExceeded() {
        return this._alienQueue.getLength() > this.capacity;
    }


    popAlien() {
        let alien = this._alienQueue.dequeue();

        this.event.timer.stop(false);
        this.event.timer.start();
        return alien;
    }

    addAlien(alien) {
        
        this._alienQueue.enqueue(alien);
        if (alien.cible == this)
        {
            let newAlien = new Alien(this.game, this, this.filons, this.x, this.y);
            this.addAlien(newAlien);
            const clone = new Phaser.Sprite(this.game, 300, 300, 'clone');
            clone.scale.setTo(0.3);
            clone.angle = alien.angle;
            clone.x=alien.x;
            clone.y=alien.y;
            let tween = game.add.tween(clone).to( {
                x: alien.x + Math.cos(alien.angle * Phaser.Math.DEG_TO_RAD) * 50,
                y: alien.y + Math.sin(alien.angle * Phaser.Math.DEG_TO_RAD) * 50
            }, 1000, "Linear", true);

            tween.onComplete.add(() => {
                game.add.tween(clone).to( {
                    alpha: 0
                }, 1000, "Linear", true);
                game.add.tween(clone.scale).to( {
                    x: 0,
                    y: 0
                }, 1000, "Linear", true);
            })

            clone.anchor.setTo(0.5)
            clone.animations.add('cloneAnim', [0, 1, 2, 3, 4, 5, 6]);
            clone.animations.play('cloneAnim', 10, false);

            this.game.add.existing(clone);
        }
        alien.entrerVaisseau();


    }



}