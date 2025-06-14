import { PLAYER_ANIMATION_KEYS } from "../common/assets"
import { Position } from "../common/types"
import * as Phaser from "phaser"
export type PlayerConfig={
    assetKey:string,
    frame?:number,
    scene:Phaser.Scene,
    position:Position
}


export class Player extends Phaser.Physics.Arcade.Sprite{

    constructor(config:PlayerConfig){
        const {assetKey,frame,scene,position}=config


        super(scene,position.x,position.y,assetKey,frame || 0);
        scene.add.existing(this)
        scene.physics.add.existing(this)

        this.play({key:PLAYER_ANIMATION_KEYS.IDLE_DOWN,repeat:-1})
    }

}