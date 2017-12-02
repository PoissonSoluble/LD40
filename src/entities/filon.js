class Filon extends Phaser.Sprite{
	constructor(game, x, y, type, vaisseau){
		super(game, x, y, type);
		this.x = x;
		this.y = y;
		this.anchor.set(0.5);
		this.quantite = 0;
		this.inputEnabled = true;
		this.events.onInputDown.add(Filon prototype.onClick.bind(this));
		this.vaisseau = vaisseau;
	}

	estVide(){
		return this.quantite <= 0;
	}

	prelever(q){
		if(q >= this.quantite){
			q = this.quantite;
			this.quantite = 0;
			return q;
		}

		this.quantite -= q;
		return q;
	}

	onClick(){
		let alien = this.vaisseau.popAlien();
		if(alien != null){
			alien.setCible(this);
		}
	}
}
