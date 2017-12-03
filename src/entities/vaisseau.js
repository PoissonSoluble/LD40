class Vaisseau extends Phaser.Group {


    /**
     *  events:
     *      gameover
     */

    constructor(game, filons, x, y) {
        super(game);

        this.x = x;
        this.y = y;
        this._sprite = new Phaser.Sprite(game, 0, 0, 'vaisseau_mere_sheet');
        this._sprite.anchor.set(0.5);
        
        this._alienQueue = new Queue();
        this.capacity = Data.INITIAL_CAPACITY;
        this.filons = filons;
        this.cristaux = 0;
        this._emitter = new EventEmitter;
        this.add(this._sprite);

        this.laser = new Laser(game, this);     
        this.cloningTime = 5000;
        this.event = game.time.events.loop(this.cloningTime, ()=> {
            this.x2();
            let nbAliens = this._alienQueue.getLength();
            for (let i=0; i<nbAliens;i++)
            {
                let alien = new Alien(this.game, this, this.filons, this.x, this.y);
                this.addAlien(alien);
            }
            
        });

        this.spinnerTimer = this.mkTimer();
        this.graphics = game.add.graphics(this.x, this.y);

        this._sprite.animations.add('reacteur', [0, 1, 2], 5, true);
        this._sprite.animations.play('reacteur');

        this.graphics.alpha = .5;
        this.bulleCristaux = new BulleCristaux(game, this.x - 150, this.y -110);
        this.bulleShop = new BulleShop(game, this.x + 220, this.y - 100);
        this.bullePopulation = new BullePopulation(game, this.x + 50, this.y + 120);
        this.bulleShop.emitter.on('click', () => {this.emitter.emit('open-shop')});

    }
    
    get emitter() {
        return this._emitter;
    }

    mkTimer() {
        let t = game.time.create(false);
        t.loop(this.cloningTime, ()=>{}, this);
        t.start();
        return t;
    }

    x2() {
        let tx = new Phaser.Text(game, this.x, this.y, " CLONING! ", { 
            font: "50px anton, arial", 
            fontWeight: "bold",
            fill: "#ff1111", 
            align: "center",
            backgroundColor: 'rgba(255, 0, 0, 0.3)'
        });

        tx.anchor.setTo(0.5);

        let tw = game.add.tween(tx).to( {
            y: tx.y - 100,
            alpha: 0.1
        }, 1500, "Linear", true);
        tw.onComplete.add(() => {
            tx.destroy();
        });

        this.game.add.existing(tx)

    }

    update() {
        if(this.isCapacityExceeded()) {
            this.emitter.emit('gameover');
        }


        this.graphics.clear();
        this.graphics.lineStyle(15,0xff2222);
        //this.graphics.beginFill(0xFF3300);


        this.graphics.arc(0, 0, 50, game.math.degToRad((this.spinnerTimer.duration.toFixed(0)/this.cloningTime) * 360), 0, false);
        //this.graphics.arc(0, 0, 500, this.animAngle.min, game.math.degToRad(this.animAngle.max), false);

        this.graphics.endFill();

        this.bulleCristaux.setValues(this.cristaux)
        this.bullePopulation.setValues(this.getAlienNumberInShip(), this.capacity)

    }

    isCapacityExceeded() {
        return this._alienQueue.getLength() > this.capacity;
    }

    getAlienNumberInShip(){
        return this._alienQueue.getLength();
    }


    popAlien() {
        
        let alien = this._alienQueue.dequeue();
        if(alien != null) {
            this.event.timer.stop(false);
            this.event.timer.start();
            this.spinnerTimer = this.mkTimer();
        }
        
        return alien;
    }

    addAlien(alien) {
        this.emitter.emit('newAlien', alien)
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
            }, 700, "Linear", true);

            tween.onComplete.add(() => {
                game.add.tween(clone).to( {
                    alpha: 0
                }, 1000, "Linear", true);
                let t2 = game.add.tween(clone.scale).to( {
                    x: 0,
                    y: 0
                }, 1100, "Linear", true);
                t2.onComplete.add(() => clone.destroy())
            })

            clone.anchor.setTo(0.5)
            clone.animations.add('cloneAnim', [0, 1, 2, 3, 4, 5, 6]);
            clone.animations.play('cloneAnim', 10, false);

            this.game.add.existing(clone);
        }
        alien.entrerVaisseau();


    }



}