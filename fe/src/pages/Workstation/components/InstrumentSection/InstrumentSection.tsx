import React from 'react';
import { AudioEngine } from '../../AudioEngine';
import { Keyboard, DrumPad } from './components';

import styles from './InstrumentSection.module.scss';

interface InstrumentSectionProps {
    audioEngine: AudioEngine
}

export const InstrumentSection: React.FC<InstrumentSectionProps> = ({audioEngine}) => {
    const { synthesizer, drumSampler } = audioEngine
    return (
        <div className={styles.instrumentsContainer}>
            <Keyboard synthesizer={synthesizer} />
            <DrumPad drumSampler={drumSampler} />
        </div>
    );
}
