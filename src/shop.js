class Shop {

	constructor(game, powerupManager) {
		this.game = game;
		this.powerupManager = powerupManager;
		this.shopDiv = document.querySelector('#shop');
		const closeBtn = this.shopDiv.querySelector('#close')
		closeBtn.addEventListener('click', this.close.bind(this))
		closeBtn.addEventListener('touch', this.close.bind(this))

		for(let pwp of powerupManager.getPowerUps()){
			let row = this._addPowerupTableRow({id:pwp.id, name:pwp.nom, description:pwp.desc, effet: pwp.effect})
			function update() {
				row.setPrice(pwp.prix)
				row.setCurrentNb(pwp.niveau)
			}
			update();
			row.emitter.on('buy', id => {
				powerupManager.acheter(id)
				update();
				this._updateCristaux();
				
			});
		}


		this._updateCristaux();

	}

	_updateCristaux() {
		this.shopDiv.querySelector('#money').innerHTML = this.powerupManager.vaisseau.cristaux;
	}

	_addPowerupTableRow({id, name, description, effet}) {
		let tr = document.createElement('tr');
		let td1 = document.createElement('td'),
		td2 = document.createElement('td'),
		td3 = document.createElement('td');

		let emitter = new EventEmitter;
		let btnBuy = document.createElement('button');

		let buy = () => { emitter.emit("buy", id); }
		btnBuy.addEventListener('click', buy);
		btnBuy.addEventListener('tap', buy);

		td1.innerHTML = `<b>${name}</b><p>${description} <br> <em>${effet}</em></p>`
		td3.appendChild(btnBuy)
		
		tr.appendChild(td1);tr.appendChild(td2);tr.appendChild(td3);
		this.shopDiv.querySelector("table").appendChild(tr);

		let setPrice = (p) => { btnBuy.innerHTML = p + ` <img src="assets/cristal_ressource.png">`; }
		let setCurrentNb = (n) => { td2.innerHTML = n; }
		setPrice(10);
		setCurrentNb(0)

		return {setPrice, setCurrentNb, emitter };
		

	}

	open() {
		this._updateCristaux();
		this.shopDiv.style.display="block";
		this.game.paused = true;
	}

	close() {
		this.shopDiv.style.display="none";
		this.game.paused = false;
	}

}