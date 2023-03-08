import { Channel } from 'tone';
import { Track } from './Track';

export class Mixer {
    in: Channel
    out: Channel
    track1: Track
    track2: Track
    track3: Track
    track4: Track
    track5: Track
    track6: Track
    track7: Track
    track8: Track
    tracks: Track[]

    constructor() {
        this.in = new Channel();
        this.out = new Channel();
        this.track1 = new Track(1);
        this.track2 = new Track(2);
        this.track3 = new Track(3);
        this.track4 = new Track(4);
        this.track5 = new Track(5);
        this.track6 = new Track(6);
        this.track7 = new Track(7);
        this.track8 = new Track(8);
        this.tracks = [
            this.track1,
            this.track2,
            this.track3,
            this.track4,
            this.track5,
            this.track6,
            this.track7,
            this.track8,
        ];
        this.setOutputs();
    }

    setOutputs = () => {
        this.tracks.forEach(track => {
            track.out.connect(this.out);
        })
    }

    record = () => {
        this.tracks.forEach(track => {
            if (track.active) {
                track.record();
            }
        })
    }

    stop = () => {
        this.tracks.forEach(track => {
            if (track.active) {
                track.stop();
            }
        })
    }

    play = () => {
        this.tracks.forEach(track => {
            if (track.active) {
                track.play();
            }
        })
    }
}