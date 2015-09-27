import {Ninja} from "./../objects/Ninja";
import {Ground} from "./../objects/Ground";
import {ShurikenGroup} from "./../objects/ShurikenGroup";

export class InGame extends Phaser.State{
    preload(){
        this.ninja = new Ninja(this.game, 10, this.game.world.height-100, 'ninja', 4);
        this.ground = new Ground(this.game, 0, this.game.world.height-30, 'ground');
        this.shurikens = new ShurikenGroup(this.game);
    }

    create(){
        //add background -later refactor to somewhere else
        this.add.image(0, 0, 'sky');

        //add loaded stuff to game
        this.world.add(this.ground);
        this.world.add(this.ninja);
        this.world.add(this.shurikens);
    }

    update(){
        this.game.physics.arcade.collide(this.ninja, this.ground);
        this.game.physics.arcade.collide(this.ninja, this.shurikens, this.onGameOver.bind(this));
    }

    render(){
    }

    onGameOver(){
        this.state.start("GameOver");
    }
}