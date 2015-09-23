export class Shuriken extends Phaser.Sprite {
    constructor(game) {
        super(game, 0, 1000, 'shuriken');

        this.data = {
            speedY: 300,
            minSpeed: 200,
            maxSpeed: 300
        };

        this.initPhysics();
        this.setRandomStartingPosition();
        this.setRandomSpeed();
    }

    initPhysics() {
        this.game.physics.arcade.enableBody(this);
        this.body.collideWorldBounds = false;
    }

    update() {
        this.moveShuriken();
    }

    moveShuriken() {
        if (this.body.y > this.game.world.height + this.height) {
            this.setRandomStartingPosition();
            this.setRandomSpeed();
        }
        this.body.velocity.y = this.data.speedY;

    }

    setRandomSpeed(){
        this.data.speedY = this.game.rnd.between(this.data.minSpeed, this.data.maxSpeed);
    }

    setRandomStartingPosition(){
        this.body.y = this.game.rnd.between(-this.height, -this.height-200);
        this.body.x = this.game.rnd.between(0, this.game.world.width-this.width);
    }


}