class Alien extends Phaser.Sprite{

	constructor(game, vaisseau, filons, x=0, y=0) {
		super(game, x || vaisseau.x, y || vaisseau.y,  "vaisseau");
		this.anchor.setTo(0.5);
		//this.capacite = 5;
		this.nbCristaux = 0;
		this.cible = null;
		this.tempsClonage = 0;
		this.vaisseau = vaisseau;
		this.cibleAtteinte = true;
		this.dansVaisseau = true;
		this.filons = filons;
		this.scale.setTo(0.3);

		this.inputEnabled = true;
		this.emitter = new EventEmitter;
		this.events.onInputDown.add(() => this.emitter.emit('clicked'));

		this.timer = game.time.create(false);
        this.timer.loop(500, Alien.prototype.diggyDiggy.bind(this), this);
		this.timer.start();
		this.miningTarget = null;

		game.add.existing(this);
	}


	update() {
		if(this.cible && this.cibleAtteinte == false) {
			this.visible = true;
			if(Phaser.Math.distance(this.x, this.y, this.cible.x, this.cible.y)<10){
				this.cibleAtteinte = true;
				this.cible.addAlien(this);
			}else{
				let angle = Phaser.Math.angleBetween(this.x, this.y, this.cible.x, this.cible.y);
				this.angle = angle * Phaser.Math.RAD_TO_DEG;
				this.x+=5*Math.cos(angle);
				this.y+=5*Math.sin(angle);
			}
		}
		else if(this.dansVaisseau)
		{
			this.visible = false; 
		}


		if(this.miningTarget && (this.miningTarget.quantite == 0 || this.nbCristaux >= Alien.capacite )) {
			this.miningTarget.removeAlien(this);
			this.miningTarget = null;
			this.setCible(this.vaisseau);
			
		}
		
	}

	diggyDiggy() {
		if(this.miningTarget) {

			this.nbCristaux += this.filons.prelever(this.miningTarget,1);
		}
	}

	setCible(newCible){
		this.dansVaisseau = false;
		this.cible = newCible;
		this.cibleAtteinte = false;
	}

	miner(cible) {

		this.miningTarget = cible;

	}

	entrerVaisseau(){
		this.dansVaisseau = true;
		this.cible = null;
		this.vaisseau.cristaux += this.nbCristaux;
		this.nbCristaux = 0;
	}
}

Alien.capacite = 5;
