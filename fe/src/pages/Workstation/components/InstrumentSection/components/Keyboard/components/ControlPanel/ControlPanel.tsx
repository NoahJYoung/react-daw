import React from 'react';
import { Synthesizer } from '../../../../../../AudioEngine';
import { SynthControl } from './components';

import styles from './ControlPanel.module.scss';

interface ControlPanelProps {
    synth: Synthesizer
}

export const ControlPanel: React.FC<ControlPanelProps> = ({ synth }) => {
    return (
        <div className={styles.controlPanelContainer}>
            {synth.SynthControls.map((control, i) => <SynthControl key={i} control={control} />)}
        </div>
    )
}
