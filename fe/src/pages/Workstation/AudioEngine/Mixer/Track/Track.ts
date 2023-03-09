import { Channel, Recorder, Player, Oscillator } from 'tone';

export class Track {
    name: string | null
    number: number
    active: boolean
    in: Channel
    out: Channel
    audio: Blob | null
    recorder: Recorder
    player: Player
    volume: number
    pan: number
    osc: Oscillator

    constructor(number: number) {
        this.name = null;
        this.number = number;
        this.active = false;
        this.volume = 0;
        this.in = new Channel();
        this.out = new Channel(this.volume);
        this.audio = null;
        this.player = new Player();
        this.recorder = new Recorder();
        this.player.connect(this.out);
        this.pan = 0;
        this.osc = new Oscillator(1, 'sine').connect(this.recorder);
        this.init();
    }

    init = () => {
        this.setRoutes();
        this.osc.set({ volume: -90 })
    }

    setRoutes = () => {
        this.in.connect(this.recorder);
        this.in.connect(this.out);
    }

    record = async () => {
        this.recorder.start();
        this.osc.start()
    };

    stop = async () => {
        if (this.recorder.state === 'started') {
            this.osc.stop();
            const audio = await this.recorder.stop();
            this.audio = audio;
            const audioUrl = URL.createObjectURL(this.audio);
            this.setPlayerAudio(audioUrl);
        }
        if (this.player.state === 'started') {
            this.player.stop();
        }
    }

    play = () => {
        if (this.player.loaded) {
            this.player.start();
        } else {
            console.log('no audio');
        }
    }

    setPlayerAudio = (url: string) => {
        this.player.load(url);
    }

    toggleActive = () => {
        this.active = !this.active;
    }

    setInput = (channel: Channel) => {
        channel.connect(this.in);
        this.in.connect(this.recorder);
        this.in.connect(this.player);
    }

    setOutput = (channel: Channel) => {
        this.out.connect(channel);
    }

    setVolume = (value: number) => {
        this.volume = value
        this.out.set({ volume: this.volume })
    }
}
