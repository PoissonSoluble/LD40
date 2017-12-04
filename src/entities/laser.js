class Laser extends Phaser.Sprite {

	constructor(game, vaisseau){

		super(game, vaisseau.x, vaisseau.y, "vaisseau");

		this.isActive = false;
		this.visible=false;
        this.graphics = game.add.graphics(this.x, this.y);
        this.game = game;

	}
	

	activate()
	{
		this.isActive=true;
		this.visible=true;
	}

	disable()
	{
		this.isActive=false;
		this.visible=false;
	}

	shoot(cible){

		if (this.isActive)
		{
	        this.graphics.lineStyle(8,0xff0000);
	        this.graphics.moveTo(0,0);
			this.graphics.lineTo(cible.x-this.game.width/2, cible.y-this.game.height/2);

			this.graphics.lineStyle(2,0x0ffffff);
	        this.graphics.moveTo(0,0);
			this.graphics.lineTo(cible.x-this.game.width/2, cible.y-this.game.height/2);

			this.game.time.events.add(Phaser.Timer.SECOND * 0.2, ()=>{
				
				this.graphics.clear();
			}, this).autoDestroy = true;
			cible.destroy();
			
		}

	}



}