class Laser extends Phaser.Sprite {

	constructor(game, vaisseau){

		super(game, vaisseau.x, vaisseau.y, "vaisseau");

		this.isActive = false;
		this.visible=false;


	}
	

	activate()
	{
		this.isActive=true;
		this.visible=true;
	}

	shoot(cible){

		if (this.isActive && cible.instanceOf(Alien))
		{
			cible.kill();
		}

	}



}