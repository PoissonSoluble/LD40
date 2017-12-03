class PowerUp{
	constructor(id, nom, prixBase, exponant, desc, effect){
		this.id = id;
		this.nom = nom;
		this.prixBase = prixBase;
		this.exponant = exponant;
		this.desc = desc;
		this.effect = effect;
		this.niveau = 0;
		this.prix = prixBase;
	}

	getPrix(){
		return this.prix;
	}

	argentSuffisant(argent){
		return argent >= this.prix;
	}

	acheter(){
		let ancienPrix = this.prix;
		this.niveau++;
		this.prix *= this.exponant;
		this.prix = Math.round(this.prix);
		return ancienPrix;
	}
}