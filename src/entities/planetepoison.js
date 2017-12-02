class PlanetePoison extends Filon {
	constructor(game, x, y, vaisseau){
		super(game, x, y, "planete_poison", vaisseau);

		this.quantite = this.game.rnd.integerInRange(100, 400);
		this.aliensPositionX -= 15;
		//this.scale.setTo(2);
	}
}