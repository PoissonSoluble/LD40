class Filon extends Phaser.Sprite{
	constructor(game, x, y, type, vaisseau){
		super(game, x, y, type);
		this.x = x;
		this.y = y;

		this.framebitch = 1;

		this.anchor.setTo(0.5);

		this.inputEnabled = true;
		this.events.onInputDown.add(Filon.prototype.onClick.bind(this));

		this.vaisseau = vaisseau;

		this.quantite = 0;

		this.aliens = [];
		this.aliensPositionX = this.x;
		this.aliensPositionX = this.y;

	}

	addAlien(alien){
		this.aliens.push(alien);
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

	update(){
		var theta = this.framebitch;
		var delta = ((Math.sin((this.framebitch)/10)+1)/2) * 20 - 10;

		for(const j of this.aliens) {
			
			var x = Math.sin(theta/100) * 20;
			var y = Math.cos(theta/100) * 20;
			
			j.x=this.x + x;
			j.y=this.y + y;
			j.angle=(theta/100)*(Math.PI*2/180) + delta;
			theta+=30;
			console.log("wesh" + j.x + " " + j.y + " " + this.framebitch)
		}

		this.framebitch++;

	}
}
