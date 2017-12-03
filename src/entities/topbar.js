class TopBar extends Phaser.Group {

	constructor(game, vaisseau) {
		super(game);

		this.vaisseau = vaisseau;

		let systeme = new Phaser.Sprite(game, 10,10, 'systeme');
		
		systeme.width = 471;
		systeme.height = 54;

		let pouvoir, shop;
		if(systeme.width >= (game.width / 2 - 70)){
			pouvoir = new Phaser.Sprite(game, 10, 10+systeme.height+10, 'pouvoir');
			shop = new Phaser.Sprite(game, 10, 10+systeme.height*2+20, 'shop');
		}else{
			pouvoir = new Phaser.Sprite(game, 10+systeme.width+100, 10, 'pouvoir');
			shop = new Phaser.Sprite(game, 10, 10+systeme.height+10, 'shop');
		}

		pouvoir.width = 471;
		pouvoir.height = 54;
		shop.width = 170;
		shop.height = 54;

		let cristal = new Phaser.Sprite(game, 10+40, 10 + systeme.height/2, 'cristal_ressource');
		cristal.width = cristal.height = 50;
		cristal.anchor.setTo(0.5);

		let styleValue = { 
			font: "15px arial", 
			fill: "#000000", 
			align: "right",
			backgroundColor: 'rgba(0, 0, 0, 0)'
		};
		let styleText = { 
			font: "15px arial",
			fontWeight: "bold", 
			fill: "#000000", 
			align: "right",
			backgroundColor: 'rgba(0, 0, 0, 0)'
		};

		this.cristalValue = new Phaser.Text(game, 10+70, 10 + systeme.height/2, "56", Object.assign(styleValue));
		this.cristalValue.anchor.setTo(0.5);

		let cristalText = new Phaser.Text(game, 10+85, 25 + systeme.height/2, "Crystals", Object.assign(styleText));
		cristalText.anchor.setTo(0.5);

		let population = new Phaser.Sprite(game, 10+40+150, 11 + systeme.height/2, 'vaisseau');
		population.width = population.height = 40;
		population.angle = -90;
		population.anchor.setTo(0.5);

		
		this.add(systeme);
		this.add(pouvoir);
		this.add(shop);
		this.add(cristal);
		this.add(population);
		this.add(this.cristalValue);
		this.add(cristalText);
		
	}

	update() {
		this.cristalValue.text = this.vaisseau.cristaux;
	}
}


