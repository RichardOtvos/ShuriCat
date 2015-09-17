import {Ninja} from "./../objects/Ninja";
import {Ground} from "./../objects/Ground";

export class MainMenu extends Phaser.State{
    preload(){
        let menuText = "Ninja Rain";
        let menuTextStyle = {
            font: "65px Arial",
            fontWeight: "bold",
            fill: "#EFEFEF",
            align: "center"
        };

        this.menuText = this.make.text(this.world.centerX, 50, menuText, menuTextStyle);
        this.menuText.anchor.set(0.5, 0); //we want our text centered
        this.ninja = new Ninja(this.game, 10, 10, 'ninja');
        this.ground = new Ground(this.game, 0, this.game.world.height-30, 'ground');
    }

    create(){
        //add background -later refactor to somewhere else
        this.add.image(0, 0, 'sky');

        //add loaded stuff to game
        this.world.add(this.menuText);
        this.world.add(this.ninja);
        this.world.add(this.ground);
    }

    update(){
        this.game.physics.arcade.collide(this.ninja, this.ground);
    }
}