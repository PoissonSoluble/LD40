class Cristal extends Filon {
	constructor(game, x, y, vaisseau){
		super(game, x, y, "cristal", vaisseau);

		this.quantite = this.game.rnd.integerInRange(1, 10);
		this.aliensPositionX -= 10;
	}

}