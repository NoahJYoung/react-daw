import { Synthesizer } from './Synthesizer';
import { DrumSampler } from './DrumSampler';
import { Mixer } from './Mixer';
import { Context, setContext } from 'tone';

export class AudioEngine {
    context: Context
    synthesizer: Synthesizer
    drumSampler: DrumSampler
    mixer: Mixer

    constructor() {
        this.context = new Context({
            latencyHint : "interactive",
            lookAhead: 0.015
        });
        setContext(this.context);
        this.mixer = new Mixer();
        this.synthesizer = new Synthesizer();
        this.drumSampler = new DrumSampler();
        this.synthesizer.out.connect(this.mixer.track1.in);
        this.synthesizer.out.connect(this.mixer.track2.in);
        this.synthesizer.out.connect(this.mixer.track3.in);
        this.synthesizer.out.connect(this.mixer.track4.in);
        this.drumSampler.out.connect(this.mixer.track5.in);
        this.drumSampler.out.connect(this.mixer.track6.in);
        this.drumSampler.out.connect(this.mixer.track7.in);
        this.drumSampler.out.connect(this.mixer.track8.in);
        this.mixer.setOutputs();
        this.mixer.out.toDestination()
    }
}
