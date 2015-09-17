export class Ninja extends Phaser.Sprite{
    constructor(game, x, y, key, frame) {
        super(game, x, y, key, frame);

        //add properties
        this.data = {
            speedX: 500,
            speedY: 650
            //bounceY: 0.4
        };

        //init stuff
        this.initPhysics();
        this.initControls();

        //bouncy ninja is bouncy
        //this.body.bounce.y = this.data.bounceY;
    }

    initPhysics(){
        this.game.physics.arcade.enableBody(this);
        this.body.collideWorldBounds = true;
    }

    initControls(){
        let cursors = this.game.input.keyboard.createCursorKeys();

        this.data.controls = {
            cursors: cursors
        };
    }

    //this method is called by Phaser
    update(){
        this.moveNinja()
    }

    moveNinja(){
        this.body.velocity.x = 0;
        if(this.body.velocity.y > 0){
        }

        if(this.data.controls.cursors.right.isDown){
            this.body.velocity.x = this.data.speedX;
        } else if(this.data.controls.cursors.left.isDown){
            this.body.velocity.x = -this.data.speedX;
        }

        if(this.data.controls.cursors.up.isDown && this.body.touching.down){
            this.body.velocity.y = -this.data.speedY;
        }
    }

}
