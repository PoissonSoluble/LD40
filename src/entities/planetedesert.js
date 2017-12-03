class PlaneteDesert extends Filon {
	constructor(game, x, y, vaisseau){
		super(game, x, y, "planete_desert", vaisseau);

		this.quantite = this.game.rnd.integerInRange(30, 100);
		this.aliensPositionX -= 15;
		//this.scale.setTo(2);
	}
}