export class Loading extends Phaser.State {
    preload() {
        let loadingText = "Loading...";
        let loadingTextStyle = {
            font: "65px Arial",
            fontWeight: "bold",
            fill: "#EFEFEF",
            align: "center"
        };

        this.game.stage.backgroundColor = "#E36633";
        this.loadingText = this.make.text(this.world.centerX, this.world.centerY, loadingText, loadingTextStyle);
        this.loadingText.anchor.set(0.5); //we want our text centered

        //Load images
        this.game.load.image("sky", "assets/sky.jpg");
        this.game.load.image("ground", "assets/ground.jpg");
        this.game.load.image("shuriken", "assets/shuriken.png");
        this.game.load.spritesheet("ninja", "assets/macs_sprite.png", 110, 71);

        //refactor these to audio sprites
        this.game.load.audio("boing", "assets/boing.ogg");
    }

    create() {
        //enable physics
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.physics.arcade.gravity.y = 900;

        //add loaded stuff to game
        this.world.add(this.loadingText);
        this.state.start("MainMenu");
    }
}