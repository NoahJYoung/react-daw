import { Synthesizer } from './Synthesizer';
import { DrumSampler } from './DrumSampler';
import { Context, setContext, start, Transport } from 'tone';

export class AudioEngine {
    context: Context
    synthesizer: Synthesizer
    drumSampler: DrumSampler

    constructor() {
        this.context = new Context({ latencyHint : "interactive", lookAhead: 0.015 });
        setContext(this.context);
        this.synthesizer = new Synthesizer();
        this.drumSampler = new DrumSampler();
        this.synthesizer.activeSynth.toDestination();
    }

    initialize = async () => {
        await start();
        console.log(Transport)
    }
}
