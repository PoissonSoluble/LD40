class Filons extends Phaser.Group{
	
	constructor(game){
		super(game);
		this.isFirstCrystal = true;
	}

	addFilon(f) {

		

		this.add(f);
		f.alpha = 0;
		this.game.add.tween(f).to( {
			alpha: 1
		}, 1000, "Linear", true);

		if(this.isFirstCrystal) {
			let pointer = new Phaser.Sprite(this.game, f.x-30, f.y+20, 'pointer');
			pointer.scale.setTo(0.5)
			pointer.angle = 10;
			pointer.anchor.setTo(0)
			this.add(pointer);
			this.isFirstCrystal = false;
			setTimeout(() => {pointer.destroy();}, 3000)
		}
	}

	ajouterCristal(x, y, vaisseau){
		let cristal = new Cristal(this.game, x, y, vaisseau);
		this.addFilon(cristal);
		return cristal;
	}

	ajouterGrosCristal(x, y, vaisseau){
		let grosCristal = new GrosCristal(this.game, x, y, vaisseau);
		this.addFilon(grosCristal);
		return grosCristal;
	}

	ajouterPlaneteDesert(x, y, vaisseau){
		let planeteDesert = new PlaneteDesert(this.game, x, y, vaisseau);
		this.addFilon(planeteDesert);
		return planeteDesert;
	}

	ajouterPlanetePoison(x, y, vaisseau){
		let planetePoison = new PlanetePoison(this.game, x, y, vaisseau);
		this.addFilon(planetePoison);
		return planetePoison;
	}

	ajouterPlaneteBleue(x, y, vaisseau){
		let planeteBleue = new PlaneteBleue(this.game, x, y, vaisseau);
		this.addFilon(planeteBleue);
		return planeteBleue;
	}

	prelever(filon, q){
		q = filon.prelever(q);

		if(filon.estVide()){
			this.remove(filon, true);
		}

		return q;
	}
}