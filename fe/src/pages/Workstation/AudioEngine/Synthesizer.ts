import {
    PolySynth,
    AMSynth,
    FMSynth,
    now,
} from 'tone';

interface SynthControlData {
    label: string
    value: number
    min: number
    max: number
    step: number
    set: (value: number) => void
}

export class Synthesizer {
    aMSynth: PolySynth<AMSynth>
    fMSynth: PolySynth<FMSynth>
    synths : PolySynth[]
    activeSynthIndex: number
    activeSynth: PolySynth
    attack: number
    decay: number
    release: number
    sustain: number
    octave: number
    SynthControls: SynthControlData[]


    constructor() {
        this.aMSynth = new PolySynth(AMSynth)
        this.fMSynth = new PolySynth(FMSynth);
        this.synths = [this.aMSynth, this.fMSynth];
        this.activeSynthIndex = 1;
        this.activeSynth = this.synths[this.activeSynthIndex];
        this.attack = 0.01;
        this.decay = 0.5;
        this.release = 0.5;
        this.sustain = 0.5;
        this.octave = 0;
        this.applySynthSettings();
        this.SynthControls = [
            {
                label: "Octave",
                value: this.octave,
                min: -2,
                max: 2,
                step: 1,
                set: this.setOctave
            },
            {
                label: "Attack",
                value: this.attack,
                min: 0,
                max: 1,
                step: 0.01,
                set: this.setAttack
            },
            {
                label: "Decay",
                value: this.decay,
                min: 0,
                max: 1,
                step: 0.01,
                set: this.setDecay
            },
            {
                label: "Release",
                value: this.release,
                min: 0,
                max: 1,
                step: 0.01,
                set: this.setRelease
            },
            {
                label: "Sustain",
                value: this.sustain,
                min: 0,
                max: 1,
                step: 0.01,
                set: this.setSustain
            },
        ]
    }

    applySynthSettings = () => {
        this.activeSynth.set({
            envelope: {
                attack: this.attack,
                decay: this.decay,
                release: this.release,
                sustain: this.sustain
            },
            detune: this.octave * 1200
        })
    };

    setAttack = (value: number) => {
        this.attack = value;
        this.applySynthSettings();
    }

    setDecay = (value: number) => {
        this.decay = value;
        this.applySynthSettings();
    }

    setRelease = (value: number) => {
        this.release = value;
        this.applySynthSettings();
    }

    setSustain = (value: number) => {
        this.sustain = value;
        this.applySynthSettings();
    }

    setOctave = (value: number) => {
        this.octave = value;
        this.applySynthSettings();
    }

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
