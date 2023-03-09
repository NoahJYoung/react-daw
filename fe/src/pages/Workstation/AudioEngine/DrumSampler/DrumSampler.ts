import { Player, Channel, now } from 'tone';
import { pads } from './pads';


interface Pad {
    index: number
    padKey: string,
    player: Player
}

export class DrumSampler {
    pads: Pad[]
    out: Channel

    constructor() {
        this.out = new Channel();
        this.pads = pads.map((pad, i) => ({
            index: i,
            padKey: pad.padKey,
            player: new Player(pad.value).connect(this.out)
        }))
    }

    triggerAttack = (index: number) => {
        const activePad = this.pads[index].player;
        activePad.start(now());
    };

}
