class Alien extends Phaser.Sprite{

	constructor(game, vaisseau) {
		this.alien  = this.game.add.sprite(20, 20, "../../assets/alien.js");
		this.capacite = 5;
		this.nbCristaux = 0;
		this.cible = null;
		this.tempsClonage = 0;
		this.vaisseau = vaisseau;
	}


	update() {

		let angle = angleBetween(alien.x(), alien.y(), cible.x(), cible.y());
		this.alien.x()+=cos(angle);
		this.alien.y()+=sin(angle);
	}


	setCible(newCible){

		this.cible = newCible;
	}

	miner(cible) {

		let cristauxAMiner = min(cible.quantite, this.capacite)
		for (i = 0; i<cristauxAMiner; i++)
		{
			setTimeout(()=>){
					this.nbCristaux+=filons.prelever(cible,1);

			}
		}

		setCible(this.vaisseau);
	}





}