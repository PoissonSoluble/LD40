class PlanetePoison extends Filon {
	constructor(game, x, y, vaisseau){
		super(game, x, y, "planete_poison", vaisseau, game.rnd.integerInRange(100, 400));

		this.aliensPositionX -= 15;
	}
}