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
        this.mixer.track1.in.connect(this.mixer.track1.out)
        this.mixer.track1.out.toDestination();
        //this.mixer.out.toDestination();
    }
}
