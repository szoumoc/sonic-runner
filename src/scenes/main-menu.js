// import { SpriteData } from "kaplay";
import k from "../kaplayCtx";

export default function mainMenu(){
    if(!k.getData("best-score")) k.setData("best-score", 0);
    k.onButtonPress("jump", ()=> k.go("game"));


    const bgPieceWidht = 1920;
    const bgPieces = [k.add([k.sprite("bg"),k.pos(0,0),k.scale(2),k.opacity(0.8)]),
        k.add([k.sprite("bg"),k.pos(bgPieceWidht * 2,0),k.scale(2),k.opacity(0.8)]),
    ];


    const platformWidth = 1280;
    const platforms = [k.add([k.sprite("platforms"), k.pos(0,450), k.scale(4),]),
                        k.add([k.sprite("platforms"), k.pos(platformWidth * 2,700), k.scale(4),])];


    k.onUpdate(()=>{
        if(bgPieces[1].pos.x < 0){
            bgPieces[0].moveTo(bgPieces[1].pos.x + bgPieceWidht * 2,0)
            bgPieces.push(bgPieces.shift());
        }

        bgPieces[0].move(-100,0)
        bgPieces[1].moveTo(bgPieces[0].pos.x + bgPieceWidht * 2, 0)
    });                    
}