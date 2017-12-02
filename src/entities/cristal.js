class Cristal extends Filon {
	constructor(game, x, y, vaisseau){
		super(game, x, y, "cristal", vaisseau, game.rnd.integerInRange(1, 5));

		this.aliensPositionX -= 10;
	}

}