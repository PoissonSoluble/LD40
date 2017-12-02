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
        return this._alienQueue.dequeue();
    }

    pushAlien(alien) {
        this._alienQueue.enqueue(alien);
    }



}