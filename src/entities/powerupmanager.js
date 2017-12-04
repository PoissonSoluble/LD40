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
		this.emitter = new EventEmitter;

		game.time.events.loop(Phaser.Timer.SECOND*2, PowerUpManager.prototype.createRessource.bind(this), this);
	}

	createRessource(){
		let x = -1;
		let y = -1;
		
		while(x == -1 || y == -1 || Phaser.Rectangle.intersects(
			new Phaser.Rectangle(x, y-50, 100, 100), this.vaisseau.getBounds())) {
			x = this.game.rnd.integerInRange(50, this.game.width-50);
			y = this.game.rnd.integerInRange(100, this.game.height-50);
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
		// else {
		// 	this.filons.ajouterCristal(x,y,this.vaisseau);
		// }
	}

	getPowerUps(){
		return this.powerUps;
	}

	initPowerUpFunctions(){
		this.powerUpFunctions = [];
		this.powerUpFunctions[0] = () => {
			this.vaisseau.capacity *= 2;
			this.emitter.emit('capacity', this.vaisseau.capacity);
		}
		this.powerUpFunctions[1] = () => {
			Alien.capacite += 5;
			this.emitter.emit('alien-capacity', Alien.capacite);
		}
		this.powerUpFunctions[2] = () => {
			// IMA FIRIN MAH LAZAAAA
			this.vaisseau.laser.activate();
			this.emitter.emit('laser-start');
			this.game.time.events.add(10000, () => { 
				console.log('its the end')
				this.vaisseau.laser.disable(); 
				this.emitter.emit('laser-stop');
			}, this).autoDestroy = true;
		}
		this.powerUpFunctions[3] = () => {
			this.vaisseau.clonageActive = false;
			let shield = new Phaser.Sprite(this.game, this.game.width / 2, this.game.height / 2, 'shield');
			shield.width = this.vaisseau._sprite.width+70;
			shield.height = this.vaisseau._sprite.height+70;
			shield.anchor.setTo(0.5);
			shield.alpha = 0.3;
			this.game.add.existing(shield)
			this.game.time.events.add(Phaser.Timer.SECOND * 10, () => {
				this.vaisseau.clonageActive = true;
				shield.destroy();
			}, this).autoDestroy = true;
		}
		this.powerUpFunctions[4] = () => {
			this.emitter.emit('research-level');
			this.cristalRatio*=0.99;
			this.grosCristalRatio*=0.99;
			this.planeteDesertRatio*=0.99;
			this.planetePoisonRatio = 0.75 * (100 - (this.cristalRatio + this.grosCristalRatio + this.planeteDesertRatio));
			this.planeteBleueRatio = 0.25 * (100 - (this.cristalRatio + this.grosCristalRatio + this.planeteDesertRatio));
		}
	}

	acheter(i){
		if(this.powerUps[i].argentSuffisant(this.vaisseau.cristaux)){
			this.vaisseau.cristaux -= this.powerUps[i].acheter();
			this.powerUpFunctions[i]();
		}
	}
}