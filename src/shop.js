class Shop {

    constructor(game, powerupManager) {
        this.game = game;
        this.powerupManager = powerupManager;
        this.shopDiv = document.querySelector('#shop');
        const closeBtn = this.shopDiv.querySelector('#close')
        closeBtn.addEventListener('click', this.close.bind(this))
        closeBtn.addEventListener('touch', this.close.bind(this))

        let row = this._addPowerupTableRow({id:1, name:"lul", description:"issou", effet: "du bon bail mamene"})
        row.emitter.on('buy', id => alert('buy'));
    }

    _addPowerupTableRow({id, name, description, effet}) {
        console.log('e')
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

        let setPrice = (p) => { btnBuy.innerHTML = p + ` <img src="assets/cristal.png">`; }
        let setCurrentNb = (n) => { td2.innerHTML = n; }
        setPrice(10);
        setCurrentNb(0)

        return {setPrice, setCurrentNb, emitter };
        

    }

    open() {
        this.shopDiv.style.display="";
    }

    close() {
        this.shopDiv.style.display="none";
    }

}