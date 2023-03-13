import { Channel } from 'tone';
import { Track } from './Track';

export class Mixer {
    in: Channel
    out: Channel
    state: 'playing' | 'recording' | 'stopped'
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
        this.state = 'stopped';
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
            track.out.toDestination();
        })
    }

    record = () => {
        this.state = 'recording';
        this.tracks.forEach(track => {
            if (track.active) {
                track.record();
            } else if (track.audio) {
                track.play();
            }
        })
    }

    stop = () => {
        this.state = 'stopped';
        this.tracks.forEach(track => {
            track.stop();
        })
    }

    play = () => {
        this.state = 'playing';
        this.tracks.forEach(track => {
            if (track.player.loaded) {
                track.play();
            }
        })
    }
}
