class PowerUpManager{
	constructor(game, vaisseau, filons){
		this.game = game;

		this.vaisseau = vaisseau;
		this.filons = filons;

		this.powerUps = [];
		for(let powerUp of Data.POWER_UPS){
			this.powerUps[powerUp.id] = new PowerUp(powerUp.id, powerUp.nom, powerUp.base, powerUp.exp, powerUp.desc, powerUp.effect);
		}

		this.cristalRatio = 75;
		this.grosCristalRatio = 95;
		this.planeteDesertRatio = 100;
		this.planetePoisonRatio = 0;
		this.planeteBleueRatio = 0;

		game.time.events.loop(Phaser.Timer.SECOND*2, PowerUpManager.prototype.createRessource.bind(this), this);
	}

	createRessource(){
		let x = this.game.rnd.integerInRange(0, this.game.width);
		let y = this.game.rnd.integerInRange(60, this.game.height);
		let rand = this.game.rnd.integerInRange(1, 100);
		if(rand <= this.cristalRatio) {
			this.filons.ajouterCristal(x,y,this.vaisseau);
		}
		else if(rand <= this.grosCristalRatio) {
			this.filons.ajouterGrosCristal(x,y,this.vaisseau);
		}
		else if(rand <= this.planeteDesertRatio){
			this.filons.ajouterPlaneteDesert(x,y,this.vaisseau);
		}
		else if(rand <= this.planetePoisonRatio){
			this.filons.ajouterPlanetePoison(x,y,this.vaisseau);
		}
		else if(rand <= this.planeteBleueRatio){
			this.filons.ajouterPlaneteBleue(x,y,this.vaisseau);
		}
	}

	getPowerUps(){
		return this.powerUps;
	}

	initPowerUpFunctions(){
		this.powerUpFunctions = [];
		this.powerUpFunctions[0] = () => {
			//this.
		}
	}


}