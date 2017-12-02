class Vaisseau extends Phaser.Group {


    /**
     *  events:
     *      gameover
     */

    constructor(game, x, y) {
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

    pushAlien(alien) {
        this._alienQueue.enqueue(alien);
        let cloneInterval = setInterval(() => {
            console.log("clonage");
            let alien = new Alien(this.game, this, this.x, this.y);
            this.pushAlien(alien);
        }, 2000);

        this._aliensToIntervals.set(alien, cloneInterval);
    }



}