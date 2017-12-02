class Alien extends Phaser.Sprite{

	constructor(game, vaisseau, x=0, y=0) {
		super(game, x || vaisseau.x, y || vaisseau.y,  "alien");
		this.capacite = 5;
		this.nbCristaux = 0;
		this.cible = null;
		this.tempsClonage = 0;
		this.vaisseau = vaisseau;
		game.add.existing(this);
	}


	update() {
		if(this.cible) {
			let angle = Phaser.Math.angleBetween(this.x, this.y, this.cible.x, this.cible.y);
			this.x+=Math.cos(angle);
			this.y+=Math.sin(angle);
		}


		if(Phaser.Math.distance(this.x, this.y, this.vaisseau.x, this.vaisseau.y) < 100) {
			this.alpha = 0.5;
		} else {
			this.alpha = 1;
		}
		
	}


	setCible(newCible){

		this.cible = newCible;
	}

	miner(cible, filons) {

		let cristauxAMiner = Math.min(cible.quantite, this.capacite)
		for (let i = 0; i<cristauxAMiner; i++)
		{
			setTimeout(()=> {
					this.nbCristaux+=filons.prelever(cible,1);

			}, 1000);
		}

		setCible(this.vaisseau);
	}





}