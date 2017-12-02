class Alien extends Phaser.Sprite{

	constructor(game, vaisseau, filons, x=0, y=0) {
		super(game, x || vaisseau.x, y || vaisseau.y,  "vaisseau");
		this.anchor.setTo(0.5);
		this.capacite = 5;
		this.nbCristaux = 0;
		this.cible = null;
		this.tempsClonage = 0;
		this.vaisseau = vaisseau;
		this.cibleAtteinte = true;
		this.dansVaisseau = true;
		this.filons = filons;
		this.scale.setTo(0.3);
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
				this.x+=10*Math.cos(angle);
				this.y+=10*Math.sin(angle);
			}
		}
		else if(this.dansVaisseau)
		{
			this.visible = false; 
		}

		if(Phaser.Math.distance(this.x, this.y, this.vaisseau.x, this.vaisseau.y) < 100) {
			this.alpha = 0.5;
		} else {
			this.alpha = 1;
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

		let returnHome = ()=> 
		{
			cible.removeAlien(this);
			this.setCible(this.vaisseau);
		};

		let returnHomeTimeout =  setTimeout(returnHome, 1000 *cristauxAMiner);

		for (i = 1; i<=cristauxAMiner; i++)
		{
			setTimeout(()=> {
					
				if(cible.quantite === 0 && returnHomeTimeout) {
					returnHome();
					returnHomeTimeout = null;
				} else {
					this.nbCristaux+=this.filons.prelever(cible,1);
				}
				
					
			}, 1000 * i);
		}

		
	}

	entrerVaisseau(){
		this.dansVaisseau = true;
		this.cible = null;
		this.vaisseau.cristaux += this.nbCristaux;
		this.nbCristaux = 0;
	}
}