export class Ground extends Phaser.Sprite{
    constructor(game, x, y, key){
        super(game, x, y, key);

        this.initPhysics();
    }

    initPhysics(){
        this.game.physics.arcade.enableBody(this);
        this.body.collideWorldBounds = true;
        this.body.immovable = true;
    }
}