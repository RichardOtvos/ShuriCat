export class Ninja extends Phaser.Sprite {
    constructor(game, x, y, key, frame) {
        super(game, x, y, key, frame);

        //add properties
        this.data = {
            speedX: 400,
            speedY: 650
        };

        //init stuff
        this.initPhysics();
        this.initControls();

        this.animations.add('left', [0, 1], 3, true);
        this.animations.add('right', [2, 3], 3, true);
        this.animations.add('die', [5, 6], 1, false);
        this.data.jumpSound = this.game.add.audio('boing');
    }

    initPhysics() {
        this.game.physics.arcade.enableBody(this);
        this.body.collideWorldBounds = true;
        this.body.setSize(60, this.height - 10);
    }

    initControls() {
        let cursors = this.game.input.keyboard.createCursorKeys();

        this.data.controls = {
            cursors: cursors
        };
    }

    //this method is called by Phaser
    update() {
        this.moveNinja();
    }

    moveNinja() {
        this.body.velocity.x = 0;
        if (this.body.velocity.y > 0) {
        }

        if (this.data.controls.cursors.right.isDown) {
            this.body.velocity.x = this.data.speedX;
            this.animations.play('right');
        } else if (this.data.controls.cursors.left.isDown) {
            this.body.velocity.x = -this.data.speedX;
            this.animations.play('left');
        } else if (this.data.controls.cursors.down.isDown) {
            this.animations.play('die');
            this.frame = 6;
        }
        else {
            this.animations.stop();
            this.frame = 4;
        }

        if (this.data.controls.cursors.up.isDown && this.body.touching.down) {
            this.body.velocity.y = -this.data.speedY;
            this.data.jumpSound.play();
        }
    }

}
