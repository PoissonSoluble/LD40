class Alien extends Phaser.Sprite{

	constructor(game, vaisseau, filons) {
		super(game, 100, 100,  "alien");
		this.anchor.setTo(0.5);
		this.capacite = 5;
		this.nbCristaux = 0;
		this.cible = null;
		this.tempsClonage = 0;
		this.vaisseau = vaisseau;
		this.filons = filons;

		this.vaisseau.pushAlien(this);
	}


	update() {
		if(this.cible) {
			this.visible = true;
			let angle = Phaser.Math.angleBetween(this.x, this.y, this.cible.x, this.cible.y);
			this.x+=Math.cos(angle);
			this.y+=Math.sin(angle);
		}
		else
		{
			this.visible = false; 
		}
		
	}


	setCible(newCible){

		this.cible = newCible;
	}

	miner(cible) {

		let cristauxAMiner = Math.min(cible.quantite, this.capacite)
		for (let i = 0; i<cristauxAMiner; i++)
		{
			setTimeout(()=> 
			{
				this.nbCristaux+=this.filons.prelever(cible,1);

			}, 1000);
		}

		setCible(this.vaisseau);
	}



	entrerVaisseau(){

		this.vaisseau.pushAlien(this);
		this.cible = null;

	}



}