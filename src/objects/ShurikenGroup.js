import {Shuriken} from "./Shuriken";

export class ShurikenGroup extends Phaser.Group{
    constructor(game){
        super(game, null, "shurikenGroup");


        this.data = {
            numberOfShurikens: 10
        };
        this.addShurikens(this.data.numberOfShurikens);
    }

    addShurikens(amount){
        for(let i=0; i<amount; i++){
            this.add(new Shuriken(this.game));
        }
    }
}