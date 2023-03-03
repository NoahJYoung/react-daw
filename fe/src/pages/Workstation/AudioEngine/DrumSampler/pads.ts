import { samples } from './assets';

const {
    kick,
    snare,
    clap,
    hhClosed,
    hhClosed2,
    hhOpen,
    crash,
    flangerCrash,
    block
} = samples

export const pads = [
    { value: crash, padKey: '7' },
    { value: flangerCrash, padKey: '8' },
    { value: block, padKey: '9' },
    { value: hhClosed, padKey: '4' },
    { value: hhClosed2, padKey: '5' },
    { value: hhOpen, padKey: '6' },
    { value: kick, padKey: '1' },
    { value: snare, padKey: '2' },
    { value: clap, padKey: '3' }
]
