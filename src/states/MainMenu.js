export class MainMenu extends Phaser.State{
    preload(){
        let menuText = "Menu";
        let menuTextStyle = {
            font: "65px Arial",
            fontWeight: "bold",
            fill: "#EFEFEF",
            align: "center"
        };

        this.game.stage.backgroundColor = "#112D5B";
        this.menuText = this.make.text(this.world.centerX, 50, menuText, menuTextStyle);
        this.menuText.anchor.set(0.5, 0); //we want our text centered
    }

    create(){
        //add loaded stuff to game
        this.world.add(this.menuText);
        this.add.image(this.world.centerX, 250, 'naruto-logo').anchor.set(0.5, 0);
    }
}