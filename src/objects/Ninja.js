export class Ninja extends Phaser.Sprite{
    constructor(game, x, y, key, frame) {
        super(game, x, y, key, frame);

        this.game.physics.arcade.enableBody(this);
        this.body.collideWorldBounds = true;

        //bouncy ninja is bouncy
        this.body.bounce.y = 0.6;
    }
}