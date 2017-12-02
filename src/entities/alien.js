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
		this.cibleAtteinte = true;
	}


	update() {
		if(this.cible && this.cibleAtteinte == false) {
			if(this.x == this.cible.x && this.y == this.cible.y){
				this.cibleAtteinte = true;
				this.cible.addAlien(this);
			}else{
				let angle = Phaser.Math.angleBetween(this.x, this.y, this.cible.x, this.cible.y);
				this.x+=Math.cos(angle);
				this.y+=Math.sin(angle);
			}
		}
		
	}


	setCible(newCible){

		this.cible = newCible;
		this.cibleAtteinte = false;
	}

	miner(cible) {

		let cristauxAMiner = Math.min(cible.quantite, this.capacite)
		for (let i = 0; i<cristauxAMiner; i++)
		{
			setTimeout(()=> {
					this.nbCristaux+=this.filons.prelever(cible,1);

			}, 1000);
		}

		setCible(this.vaisseau);
	}





}