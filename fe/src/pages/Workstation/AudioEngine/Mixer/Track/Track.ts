import { Channel, Recorder, Player } from 'tone';

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
    }

    record = async () => {
        this.recorder.start();
    };

    stop = async () => {
        const audio = await this.recorder.stop();
        this.audio = audio;
        const audioUrl = URL.createObjectURL(this.audio);
        this.setPlayerAudio(audioUrl);
    }

    play = () => {
        this.player.start();    
    }

    setPlayerAudio = (url: string) => {
        this.player.set({ url })
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
        this.out.set({ volume: value })
    }
}
