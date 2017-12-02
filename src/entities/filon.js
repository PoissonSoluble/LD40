class Filon extends Phaser.Group{
	constructor(game, x, y, type, vaisseau, quantite){
		super(game);
		this.x = x;
		this.y = y;

		this.sprite = new Phaser.Sprite(game, 0, 0, type);

		this.timeAnim = 1;
		this.sprite.anchor.setTo(0.5);

		this.sprite.inputEnabled = true;
		this.sprite.events.onInputDown.add(Filon.prototype.onClick.bind(this));
		this.sprite.scale.setTo(2);

		while(Phaser.Rectangle.intersects(new Phaser.Rectangle(this.x, this.y, this.sprite.width, this.sprite.height), vaisseau._sprite.getBounds())) {
			this.x = game.rnd.integerInRange(0, game.width);
			this.y = game.rnd.integerInRange(0, game.height);

		}

		this.vaisseau = vaisseau;

		this.quantite = quantite;

		this.aliens = [];
		this.aliensPositionX = this.x;
		this.aliensPositionX = this.y;

        this._indicateur = new IndicateurCristaux(this.game, 0, 0);
		this._indicateur.setValues(this.quantite);

		this.add(this.sprite);
        this.add(this._indicateur);


	}

	addAlien(alien){
		this.aliens.push(alien);
		alien.miner(this);
	}

	removeAlien(alien){
		this.aliens.splice(this.aliens.indexOf(alien), 1);
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
		this._indicateur.setValues(this.quantite);

		return q;
	}

	onClick(){
		let alien = this.vaisseau.popAlien();
		if(alien != null){
			alien.setCible(this);
		}
	}

	update(){
		var theta = this.timeAnim;
		var delta = ((Math.sin((this.framebitch)/10)+1)/2) * 20 - 10;

		for(const j of this.aliens) {
			
			var x = Math.sin(theta/100) * 50;
			var y = Math.cos(theta/100) * 50;
			
			j.angle=(Phaser.Math.angleBetween(j.x, j.y, this.x + x, this.y + y) * Phaser.Math.RAD_TO_DEG);
			
			j.x=this.x + x;
			j.y=this.y + y;

			theta+=30;
		}

		this.timeAnim++;

	}
}
