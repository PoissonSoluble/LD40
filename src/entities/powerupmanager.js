class PowerUpManager{
	constructor(game, vaisseau, filons){
		this.game = game;

		this.vaisseau = vaisseau;
		this.filons = filons;

		this.powerUps = [];
		for(let powerUp of Data.POWER_UPS){
			this.powerUps[powerUp.id] = new PowerUp(powerUp.id, powerUp.nom, powerUp.base, powerUp.exp, powerUp.desc, powerUp.effect);
		}

		this.initPowerUpFunctions();

		this.cristalRatio = 80;
		this.grosCristalRatio = 19;
		this.planeteDesertRatio = 1;
		this.planetePoisonRatio = 0;
		this.planeteBleueRatio = 0;

		game.time.events.loop(Phaser.Timer.SECOND*2, PowerUpManager.prototype.createRessource.bind(this), this);
	}

	createRessource(){
		let x = -1;
		let y = -1;
		
		while(x == -1 || y == -1 || Phaser.Rectangle.intersects(new Phaser.Rectangle(x, y, 200, 200), this.vaisseau.getBounds())) {
			x = game.rnd.integerInRange(50, game.width-50);
			y = game.rnd.integerInRange(100, game.height-50);

		}
		
		
		let rand = this.game.rnd.integerInRange(1, 100);
		let ratio = 0
		if(rand <= (ratio += this.cristalRatio)) {
			this.filons.ajouterCristal(x,y,this.vaisseau);
		}
		else if(rand <= (ratio += this.grosCristalRatio)) {
			this.filons.ajouterGrosCristal(x,y,this.vaisseau);
		}
		else if(rand <= (ratio += this.planeteDesertRatio)){
			this.filons.ajouterPlaneteDesert(x,y,this.vaisseau);
		}
		else if(rand <= (ratio += this.planetePoisonRatio)){
			this.filons.ajouterPlanetePoison(x,y,this.vaisseau);
		}
		else if(rand <= (ratio += this.planeteBleueRatio)){
			this.filons.ajouterPlaneteBleue(x,y,this.vaisseau);
		}
	}

	getPowerUps(){
		return this.powerUps;
	}

	initPowerUpFunctions(){
		this.powerUpFunctions = [];
		this.powerUpFunctions[0] = () => {
			this.vaisseau.capacity *= 2;
		}
		this.powerUpFunctions[1] = () => {
			Alien.capacite += 5;
		}
		this.powerUpFunctions[2] = () => {
			// IMA FIRIN MAH LAZAAAA
			this.vaisseau.laser.activate();
			
		}
		this.powerUpFunctions[3] = () => {
			this.vaisseau.clonageActive = false;
			this.game.time.events.add(Phaser.Timer.SECOND * 10, () => {
				this.vaisseau.clonageActive = true;
			}, this).autoDestroy = true;
		}
		this.powerUpFunctions[4] = () => {
			this.cristalRatio*=0.95;
			this.grosCristalRatio*=0.97;
			this.planeteDesertRatio*=0.99;
			this.planetePoisonRatio = 0.75 * (100 - (this.cristalRatio + this.grosCristalRatio + this.planeteDesertRatio));
			this.planeteBleueRatio = 0.25 * (100 - (this.cristalRatio + this.grosCristalRatio + this.planeteDesertRatio));
			console.log(this.planetePoisonRatio + " " + this.planeteBleueRatio);
		}
	}

	acheter(i){
		if(this.powerUps[i].argentSuffisant(this.vaisseau.cristaux)){
			this.vaisseau.cristaux -= this.powerUps[i].acheter();
			this.powerUpFunctions[i]();
		}
	}
}