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
            {synth.SynthControls.map((control) => (
                <SynthControl
                    key={control.label}
                    label={control.label}
                    value={control.value}
                    step={control.step}
                    min={control.min}
                    max={control.max}
                    set={control.set}
                />
            ))}
        </div>
    )
}
