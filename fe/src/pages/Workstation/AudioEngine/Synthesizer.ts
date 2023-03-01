import {
    PolySynth,
    AMSynth,
    FMSynth,
    now,
} from 'tone';

export class Synthesizer {
    aMSynth: PolySynth<AMSynth>
    fMSynth: PolySynth<FMSynth>
    synths : PolySynth[]
    activeSynthIndex: number
    activeSynth: PolySynth

    constructor() {
        this.aMSynth = new PolySynth(AMSynth)
        this.fMSynth = new PolySynth(FMSynth);
        this.synths = [this.aMSynth, this.fMSynth];
        this.activeSynthIndex = 1;
        this.activeSynth = this.synths[this.activeSynthIndex];
        this.applySynthSettings();
    }

    applySynthSettings = () => {
        /// Attack, Release, Decay, Sustain, Octave.. etc
        this.activeSynth.set({
            envelope: {
                sustain: 0.5
            }
        })
    };

    triggerAttack = (note: string) => {
        this.activeSynth.triggerAttack(note, now());
    }

    triggerRelease = (note: string) => {
        this.activeSynth.triggerRelease(note, now());
    }

    changeSynthMode = (value: string) => {
        this.activeSynth.disconnect();
        this.activeSynthIndex = Number(value);
        this.activeSynth = this.synths[this.activeSynthIndex].toDestination();
        this.applySynthSettings();
      }

}
