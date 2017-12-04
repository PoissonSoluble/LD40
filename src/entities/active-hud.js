class ActivePowersHUD extends Phaser.Group {
    constructor(game, x, y) {
        super(game)
        this.x = x;
        this.y = y;
        
        let baseStyle = { 
            font: "30px anton, arial", 
            fill: "#eeeeee", 
            align: "left"
        };

        let smallStyle = { 
            font: "18px anton, arial", 
            fill: "#cccccc", 
            align: "left"
        };

        const spacingV = 55;
        const marginV = 0;
        const helperSpacingV = 30;


        this.textCapacity = new Phaser.Text(game, 0, marginV, "CAPACITY", baseStyle);
        this.add(this.textCapacity);

        this.textResearch = new Phaser.Text(game, 0, marginV+spacingV, "RESEARCH", baseStyle);
        this.add(this.textResearch);

       

        this.textLaser = new Phaser.Text(game, 0, marginV+spacingV*2, "LAZER IS ACTIVE", baseStyle);
        this.add(this.textLaser);
        
        

        this.helperTextCapacity = new Phaser.Text(game, 0, marginV+helperSpacingV, "How many crystals fit in the ships", smallStyle);
        this.add(this.helperTextCapacity);

        this.helperTextResearch = new Phaser.Text(game, 0, marginV+spacingV+helperSpacingV, "Probability of getting bigger resources", smallStyle);
        this.add(this.helperTextResearch);

        this.helperTextLaser = new Phaser.Text(game, 0, marginV+spacingV*2+helperSpacingV, "Click a minion ship to destroy it!!", smallStyle);
        this.add(this.helperTextLaser);

        this.helperTextCapacity.alpha = 0;
        this.helperTextResearch.alpha = 0;
        this.helperTextLaser.alpha = 0;
        this.textResearch.alpha = 0;
        this.textCapacity.alpha = 0;
        this.textLaser.alpha = 0;
        
        
        
    }
    setResearchLevel(l) {
        this.textResearch.alpha = 1;
        this.helperTextResearch.alpha = 1;
        this.textResearch.text = "RESEARCH LEVEL: " + l;
    }
    setLaser(isEnabled) {
        this.textLaser.alpha = +isEnabled; // cast bool->int
        this.helperTextLaser.alpha = +isEnabled;
    }
    setAlienCapacity(c) {
        this.textCapacity.alpha = 1;
        this.helperTextCapacity.alpha = 1;
        this.textCapacity.text = "MINION SHIP CAPACITY: " + c;
    }
}