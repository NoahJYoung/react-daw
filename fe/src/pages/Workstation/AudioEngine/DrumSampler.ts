import { Player, now } from 'tone';
import { samples } from './assets';

const { kick, snare } = samples

const playerArray = [
    { value: null, padKey: '7' },
    { value: null, padKey: '8' },
    { value: null, padKey: '9' },
    { value: null, padKey: '4' },
    { value: null, padKey: '5' },
    { value: null, padKey: '6' },
    { value: kick, padKey: '1' },
    { value: snare, padKey: '2' },
    { value: null, padKey: '3' }
]

interface Pad {
    index: number
    padKey: string,
    player: Player | null
}

export class DrumSampler {
    pads: Pad[]

    constructor() {
        this.pads = playerArray.map((pad, i) => {
            if (pad.value) {
                return ({
                    index: i,
                    padKey: pad.padKey,
                    player: new Player(pad.value).toDestination()
                })
            } else {
                return ({
                    index: i,
                    padKey: pad.padKey,
                    player: null
                })
            }
        })
    }

    triggerAttack = (index: number) => {
        this.pads[index].player?.start(now());
    };

    triggerRelease = (index: number) => {
        this.pads[index].player?.stop(now());
    }

}
