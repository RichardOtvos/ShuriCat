import {Loading} from "./states/Loading";
import {MainMenu} from "./states/MainMenu";

export class NinjaRain extends Phaser.Game{
    constructor() {
        super(1024, 600, Phaser.AUTO, 'game-content');

        var startingStateName = "Loading";  //get this from config? (modules?)

        //add states here
        this.state.add("Loading", Loading);
        this.state.add("MainMenu", MainMenu);

        //starts the game with the starting state
        this.state.start(startingStateName);

        //enable physics
        this.physics.startSystem(Phaser.Physics.ARCADE);
    }
}
