class Vaisseau extends Phaser.Group {


    /**
     *  events:
     *      gameover
     */

    constructor(game, filons, x, y) {
        super(game );

        this.x = x;
        this.y = y;
        this._sprite = new Phaser.Sprite(game, 0, 0, 'vaisseau');
        this._sprite.anchor.set(0.5);
        
        this._alienQueue = new Queue();
        this._capacity = Data.INITIAL_CAPACITY;
        this._nbAliensText = new Phaser.Text(game, this._sprite.width / 2, 0, "", { 
            font: "50px arial", 
            fontWeight: 'bold',
            fill: "#ffffff", 
            align: "center"
        });
        this.filons = filons;
        this.cristaux = 0;
        this._emitter = new EventEmitter;
        this.add(this._sprite);
        this.add(this._nbAliensText);

        this._aliensToIntervals = new WeakMap;
    }
    
    get emitter() {
        return this._emitter;
    }


    update() {
        if(this.isCapacityExceeded()) {
            this.emitter.emit('gameover');
        }
        this._nbAliensText.text = this._alienQueue.getLength();
    }

    isCapacityExceeded() {
        return this._alienQueue.getLength() > this._capacity;
    }


    popAlien() {
        let alien = this._alienQueue.dequeue();
        clearInterval(this._aliensToIntervals.get(alien));
        return alien;
    }

    addAlien(alien) {
        this._alienQueue.enqueue(alien);
        alien.entrerVaisseau();
        let cloneInterval = setInterval(() => {
            let alien = new Alien(this.game, this, this.filons, this.x, this.y);
            this.addAlien(alien);
        }, 3000);

        this._aliensToIntervals.set(alien, cloneInterval);
    }



}