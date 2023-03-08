import React from 'react';
import styles from './Mixer.module.scss';
import { AudioEngine } from '../../AudioEngine';
import { Track } from './components';
interface MixerProps {
    audioEngine: AudioEngine
}

export const Mixer: React.FC<MixerProps> = ({ audioEngine }) => {
    const { mixer } = audioEngine;
    return (
        <div className={styles.mixerContainer}>
            {mixer.tracks.map(track => <Track key={track.number} track={track} />)}
        </div>
    )
}
