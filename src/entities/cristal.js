class Cristal extends Filon {
	constructor(game, x, y, vaisseau){
		super(game, x, y, "cristal", vaisseau);

		this.quantite = Math.random() * (50 - 1) + 1;
		this.aliensPositionX -= 10;
		this.scale.setTo(2)
	}
}