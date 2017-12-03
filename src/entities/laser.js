class Laser extends Phaser.Groups {

	constructor(game, vaisseau){

		super(game);

		this.isActive = false;


	}
	

	activate()
	{
		this.isActive=true;
	}

	shoot(cible){

		if (this.isActive && cible.instanceOf(Alien))
		{
			cible.kill();
		}

	}



}