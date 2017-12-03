class GrosCristal extends Filon {
	constructor(game, x, y, vaisseau){
		super(game, x, y, "gros_cristal", vaisseau, game.rnd.integerInRange(5, 30));

		this.aliensPositionX -= 10;
		this.scale.setTo(1.1);
	}
}