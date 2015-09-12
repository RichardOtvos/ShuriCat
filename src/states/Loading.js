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
        this.game.load.image("naruto-logo", "assets/narutoLogo.png");
    }

    create() {
        //add loaded stuff to game
        this.world.add(this.loadingText);
        this.time.events.add(Phaser.Timer.SECOND * 2, function(){
            this.state.start("MainMenu");
        }, this);
    }
}