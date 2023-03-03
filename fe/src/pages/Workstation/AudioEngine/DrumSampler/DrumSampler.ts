import { Player, now } from 'tone';
import { pads } from './pads';


interface Pad {
    index: number
    padKey: string,
    player: Player
}

export class DrumSampler {
    pads: Pad[]

    constructor() {
        this.pads = pads.map((pad, i) => ({
            index: i,
            padKey: pad.padKey,
            player: new Player(pad.value).toDestination()
        }))
    }

    triggerAttack = (index: number) => {
        const activePad = this.pads[index].player;
        activePad.start(now());
    };

}
