class TopBar extends Phaser.Group {

	constructor(game, vaisseau, shop) {
		super(game);

		this.vaisseau = vaisseau;
		this.shop = shop;

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
		let styleTitle = { 
			font: "30px arial",
			fontWeight: "bold", 
			fill: "#000000", 
			align: "right",
			backgroundColor: 'rgba(0, 0, 0, 0)'
		};

		let systeme = new Phaser.Sprite(game, 10,30, 'systeme');
		
		systeme.width = 471;
		systeme.height = 54;

		let pouvoir, shopButton, shopText, powerUpText;
		if(systeme.width >= (game.width / 2 - 70)){
			pouvoir = new Phaser.Sprite(game, 10, 30+systeme.height+30, 'pouvoir');
			shopButton = new Phaser.Sprite(game, 10, 30+systeme.height*2+40, 'shop');
			shopText = new Phaser.Text(game, 10+170/2, 30+systeme.height*2+43+systeme.height/2, "SHOP", Object.assign(styleTitle));
			powerUpText = new Phaser.Text(game, 10, 30+systeme.height+20, "Active Power", Object.assign(styleTitle));
		}else{
			pouvoir = new Phaser.Sprite(game, 10+systeme.width+100, 30, 'pouvoir');
			shopButton = new Phaser.Sprite(game, 10, 30+systeme.height+10, 'shop');
			shopText = new Phaser.Text(game, 10+170/2, 30+systeme.height+13+systeme.height/2, "SHOP", Object.assign(styleTitle));
			powerUpText = new Phaser.Text(game, 10+471+100, 20, "Active Power", Object.assign(styleTitle));
		}

		pouvoir.width = 471;
		pouvoir.height = 54;
		shopButton.width = 170;
		shopButton.height = 54;
		shopText.anchor.setTo(0.5);

		let systemeText = new Phaser.Text(game, 10, 20, "System", Object.assign(styleTitle));
		systemeText.anchor.setTo(0,0.5);
		powerUpText.anchor.setTo(0,0.5);

		let cristal = new Phaser.Sprite(game, 10+40, 30 + systeme.height/2, 'cristal_ressource');
		cristal.width = cristal.height = 50;
		cristal.anchor.setTo(0.5);

		this.cristalValue = new Phaser.Text(game, 10+70, 30 + systeme.height/2, "56", Object.assign(styleValue));
		this.cristalValue.anchor.setTo(0.5);

		let cristalText = new Phaser.Text(game, 10+85, 45 + systeme.height/2, "Crystals", Object.assign(styleText));
		cristalText.anchor.setTo(0.5);

		let population = new Phaser.Sprite(game, 10+40+150, 31 + systeme.height/2, 'vaisseau');
		population.width = population.height = 40;
		population.angle = -90;
		population.anchor.setTo(0.5);

		this.populationValue = new Phaser.Text(game, 10+40+150+40, 30 + systeme.height/2, "56", Object.assign(styleValue));
		this.populationValue.anchor.setTo(0.5);

		let populationText = new Phaser.Text(game, 10+40+150+60, 45 + systeme.height/2, "Population", Object.assign(styleText));
		populationText.anchor.setTo(0.5);	

		shopButton.inputEnabled = true;
		shopButton.events.onInputDown.add(TopBar.prototype.shopOnClick.bind(this));	
		
		this.add(systeme);
		this.add(pouvoir);
		this.add(shopButton);
		this.add(shopText);
		this.add(cristal);
		this.add(population);
		this.add(this.cristalValue);
		this.add(cristalText);
		this.add(this.populationValue);
		this.add(populationText);
		this.add(systemeText);
		this.add(powerUpText);
		
	}

	update() {
		this.cristalValue.text = this.vaisseau.cristaux;
		this.populationValue.text = this.vaisseau.getAlienNumberInShip() + "/" + this.vaisseau.capacity;
	}

	shopOnClick(){
		console.log("weh")
		this.shop.open();
	}
}


