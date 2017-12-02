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
		this.dansVaisseau = true;

		this.vaisseau.pushAlien(this);
	}


	update() {
		if(this.cible && this.cibleAtteinte == false) {
			this.visible = true;
			if(this.x == this.cible.x && this.y == this.cible.y){
				this.cibleAtteinte = true;
				this.cible.addAlien(this);
			}else{
				let angle = Phaser.Math.angleBetween(this.x, this.y, this.cible.x, this.cible.y);
				this.x+=Math.cos(angle);
				this.y+=Math.sin(angle);
			}
		}
		else if(this.dansVaisseau)
		{
			this.visible = false; 
		}
		
	}


	setCible(newCible){
		this.dansVaisseau = false;
		this.cible = newCible;
		this.cibleAtteinte = false;
	}

	miner(cible) {

		let cristauxAMiner = Math.min(cible.quantite, this.capacite)
		let i;
		for (i = 1; i<=cristauxAMiner; i++)
		{
			setTimeout(()=> 
			{
				this.nbCristaux+=this.filons.prelever(cible,1);

			}, 1000 * i);
		}

		setTimeout(()=> 
		{
			cible.removeAlien(this);
			this.setCible(this.vaisseau);
		}, 1000 * i);
	}



	entrerVaisseau(){

		this.vaisseau.pushAlien(this);
		this.dansVaisseau = true;
		this.cible = null;

	}



}