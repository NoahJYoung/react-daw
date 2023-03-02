import { Synthesizer } from './Synthesizer';
import { Context, setContext, start, Transport } from 'tone';

export class AudioEngine {
    synthesizer: Synthesizer
    context: Context

    constructor() {
        this.context = new Context({ latencyHint : "interactive", lookAhead: 0.015 });
        setContext(this.context);
        this.synthesizer = new Synthesizer();
        this.synthesizer.activeSynth.toDestination();
    }

    initialize = async () => {
        await start();
        console.log(Transport)
    }
}
