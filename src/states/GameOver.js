export class GameOver extends Phaser.State{
    preload(){
        let gameOverText = "Game Over";
        let instructionText = "Press Enter to restart...";
        let gameOverTextStyle = {
            font: "65px Arial",
            fontWeight: "bold",
            fill: "#EFEFEF",
            align: "center"
        };
        let instructionTextStyle = {
            font: "32px Arial",
            fontWeight: "normal",
            fill: "#EFEFEF",
            align: "center"
        };

        this.gameOverText = this.make.text(this.world.centerX, 50, gameOverText, gameOverTextStyle);
        this.instructionText = this.make.text(this.world.centerX, 200, instructionText, instructionTextStyle);

        //we want our text centered
        this.gameOverText.anchor.set(0.5, 0);
        this.instructionText.anchor.set(0.5, 0);


        //The continue key
        this.data = {
            continueKey: this.input.keyboard.addKey(Phaser.Keyboard.ENTER)
        };
    }

    create(){
        this.stage.setBackgroundColor("#000000");

        //add loaded stuff to game
        this.world.add(this.gameOverText);
        this.world.add(this.instructionText);
    }

    update(){
        if(this.data.continueKey.isDown){
            this.state.start("InGame");
        }
    }

}