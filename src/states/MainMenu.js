export class MainMenu extends Phaser.State{
    preload(){
        let menuText = "ShuriCat";
        let instructionText = "Dodge the shurikens!\nPress Enter to continue...";
        let menuTextStyle = {
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

        this.menuText = this.make.text(this.world.centerX, 50, menuText, menuTextStyle);
        this.instructionText = this.make.text(this.world.centerX, 200, instructionText, instructionTextStyle);

        //we want our text centered
        this.menuText.anchor.set(0.5, 0);
        this.instructionText.anchor.set(0.5, 0);


        //The continue key
        this.data = {
            continueKey: this.input.keyboard.addKey(Phaser.Keyboard.ENTER)
        };
    }

    create(){
        //add background -later refactor to somewhere else
        this.add.image(0, 0, 'sky');

        //add loaded stuff to game
        this.world.add(this.menuText);
        this.world.add(this.instructionText);
    }

    update(){
        if(this.data.continueKey.isDown){
            this.state.start("InGame");
        }
    }

}