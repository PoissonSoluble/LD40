class PlaneteBleue extends Filon {
	constructor(game, x, y, vaisseau){
		super(game, x, y, "planete_bleu", vaisseau);

		this.quantite = this.game.rnd.integerInRange(400, 1000);
		this.aliensPositionX -= 15;
		//this.scale.setTo(2);
	}
}