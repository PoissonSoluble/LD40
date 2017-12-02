class Filons extends Phaser.Group{
	
	constructor(game){
		super(game);
	}

	ajouterCristal(x, y, vaisseau){
		let cristal = new Cristal(this.game, x, y, vaisseau);
		this.add(cristal);
		return cristal;
	}

	prelever(filon, q){
		q = filon.prelever(q);

		if(filon.estVide()){
			this.remove(filon, true);
		}

		return q;
	}
}