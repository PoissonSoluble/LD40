class Filons extends Phaser.Group{
	
	constructor(game){
		super(game);
	}

	ajouterCristal(x, y, vaisseau){
		let cristal = new Cristal(this.game, x, y, vaisseau);
		this.add(cristal);
		return cristal;
	}

	ajouterGrosCristal(x, y, vaisseau){
		let grosCristal = new GrosCristal(this.game, x, y, vaisseau);
		this.add(grosCristal);
		return grosCristal;
	}

	ajouterPlaneteDesert(x, y, vaisseau){
		let planeteDesert = new PlaneteDesert(this.game, x, y, vaisseau);
		this.add(planeteDesert);
		return planeteDesert;
	}

	ajouterPlanetePoison(x, y, vaisseau){
		let planetePoison = new PlanetePoison(this.game, x, y, vaisseau);
		this.add(planetePoison);
		return planetePoison;
	}

	ajouterPlaneteBleue(x, y, vaisseau){
		let planeteBleue = new PlaneteBleue(this.game, x, y, vaisseau);
		this.add(planeteBleue);
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